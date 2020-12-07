import React, { useState } from "react";
import { useSlidesDispatch, useSlidesState } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";
import { saveToDatabase } from "../../firebase/firebase";

interface Props {
  slideText: string;
  slideNumber: number;
  type: string;
  header: string | undefined;
}

function SlideFun({ slideText, slideNumber, type, header }: Props) {
  const [value, setValue] = useState<string>("");
  const dispatch = useSlidesDispatch();
  const context = useSlidesState();
  const { launchTime, restart } = useTimer();

  const finish = () => {
    dispatch &&
      launchTime &&
      dispatch({
        type: "submit_slide",
        payload: {
          type: type,
          answer: { zeit: launchTime - Date.now(), surveyFun: value },
        },
      });
    context?.user &&
      dispatch &&
      saveToDatabase(context?.user, context?.answers).then(() =>
        dispatch({ type: "reset" })
      );

    restart();
  };
  return (
    <div className="Slide">
      <div className="Slide-container">
        <div className="Slide-header">
          <p>{header}</p>
        </div>
        <div className="Slide-main">
          <div className="Slide-text-l">{slideText}</div>
          <div className="Slide-range-row-boxes">
            <input
              type="checkbox"
              checked={value === "ja" ? true : false}
              onClick={() => (value === "ja" ? setValue("") : setValue("ja"))}
              onChange={() => null}
            />
            <p>Ja, ich habe Interesse.</p>
            <input
              type="checkbox"
              checked={value === "nein" ? true : false}
              onClick={() =>
                value === "nein" ? setValue("") : setValue("nein")
              }
              onChange={() => null}
            />
            <p>Nein, ich habe kein Interesse.</p>
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

export default SlideFun;
