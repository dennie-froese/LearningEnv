import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSlidesDispatch } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";

function SlideChoice() {
  const dispatch = useSlidesDispatch();
  const { launchTime, restart } = useTimer();
  const [choice, setChoice] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const finish = () => {
    if (dispatch && launchTime && choice) {
      dispatch({
        type: "set_schueler",
        payload: { schueler: choice === "Schüler*in" ? "1" : "0" },
      });
      restart();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setError("");
      history.push("/slides");
    } else {
      setError("Bitte überprüfe die Vollständigkeit deiner Angaben.");
    }
  };

  return (
    <div className="Slide">
      <div className="Slide-container">
        <div className="Slide-intro-main">
          <div className="Slide-text-l">
            Wähle bitte zunächst die zutreffenden Angaben zu Deiner Person aus.
            Klicke nach der Auswahl bitte auf „Weiter“.
          </div>
          <p>Ich bin:</p>
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
          <p className="Error-text" style={{ paddingRight: 20 }}>
            {error}
          </p>
          <button className="Slide-button" onClick={finish}>
            Weiter
          </button>
        </div>
      </div>
    </div>
  );
}

export default SlideChoice;
