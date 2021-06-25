import React, { useState } from "react";
import { useSlidesDispatch, useSlidesState } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";

interface Props {
  slideText: string;
  slideNumber: number;
  type: string;
}

function SlideChoice({ slideText, type }: Props) {
  const context = useSlidesState();
  const dispatch = useSlidesDispatch();
  const { launchTime, restart } = useTimer();
  const [choice, setChoice] = useState("");

  const finish = () => {
    const user = context?.user ? context.user : "";
    const obj = type === "Willkommen" ? { vpn: user } : null;
    dispatch &&
      launchTime &&
      choice &&
      dispatch({
        type: "submit_slide",
        payload: {
          type: type,
          answer: {
            auswahlSchuelerStudent: choice,
            zeit: launchTime - Date.now(),
            ...obj,
          },
        },
      });
    restart();
  };

  return (
    <div className="Slide">
      <div className="Slide-container">
        <div className="Slide-intro-main">
          <div className="Slide-text-l">{slideText}</div>
        </div>
        <div className="Slide-demographic">
          <div className="Slide-demographic-row">
            <div className="Slide-demographic-row-boxes">
              <div className="Slide-choice-row-boxes-container-1">
                <input
                  type="checkbox"
                  checked={choice === "Schüler*in" ? true : false}
                  onClick={() =>
                    choice === "Schüler*in"
                      ? setChoice("")
                      : setChoice("Schüler*in")
                  }
                  onChange={() => null}
                />
                <div className="Slide-label-l">Schüler*in</div>
              </div>
              <div className="Slide-choice-row-boxes-container-2">
                <input
                  type="checkbox"
                  checked={choice === "Studierende*r" ? true : false}
                  onClick={() =>
                    choice === "Studierende*r"
                      ? setChoice("")
                      : setChoice("Studierende*r")
                  }
                  onChange={() => null}
                />
                <div className="Slide-label-l">Studierende*r</div>
              </div>
            </div>
          </div>
        </div>
        <div className="Slide-nav">
          <button className="Slide-button" onClick={finish}>
            Weiter
          </button>
        </div>
      </div>
    </div>
  );
}

export default SlideChoice;
