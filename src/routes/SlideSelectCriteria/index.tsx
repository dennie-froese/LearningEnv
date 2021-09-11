import React, { useState } from "react";
import { useSlidesDispatch } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";

interface Props {
  slideText: string;
  slideNumber: number;
  type: string;
}

function SlideSelectCriteria({ slideText, type }: Props) {
  const dispatch = useSlidesDispatch();
  const { launchTime, restart } = useTimer();
  const [choice, setChoice] = useState<number | undefined>(undefined);
  const [error, setError] = useState("");

  const finish = () => {
    let newSlide: number = 106;
    switch (choice) {
      case 1:
        newSlide = 106;
        break;
      case 2:
        newSlide = 110;
        break;
      case 3:
        newSlide = 114;
        break;
      case 4:
        newSlide = 118;
        break;
      case 5:
        newSlide = 122;
        break;
      case 6:
        newSlide = 126;
        break;
    }

    if (dispatch && launchTime && choice) {
      dispatch({
        type: "jump_to_slide",
        payload: {
          type,
          newSlide: newSlide,
          answer: { zeit: launchTime - Date.now() },
        },
      });
      restart();
      setError("");
    } else {
      setError("Bitte überprüfe die Vollständigkeit deiner Angaben.");
    }
  };

  function amIActiveCell(myCell: number) {
    return myCell === choice
      ? "Slide-criteria-select-box-active"
      : "Slide-criteria-select-box-inactive";
  }

  return (
    <div className="Slide">
      <div className="Slide-container">
        <div className="Slide-header">
          <div className="Slide-text-l">{slideText}</div>
        </div>
        <div className="Slide-main">
          <div className="Slide-criteria-select-row">
            <div className={amIActiveCell(1)} onClick={() => setChoice(1)}>
              Kriterium 1: Inhalt
            </div>
            <div className={amIActiveCell(2)} onClick={() => setChoice(2)}>
              Kriterium 2: Formales
            </div>
          </div>
          <div className="Slide-criteria-select-row">
            <div className={amIActiveCell(3)} onClick={() => setChoice(3)}>
              Kriterium 3: Orthographie und Grammatik
            </div>
            <div className={amIActiveCell(4)} onClick={() => setChoice(4)}>
              Kriterium 4: Wissenschaftlicher Stil
            </div>
          </div>
          <div className="Slide-criteria-select-row">
            <div className={amIActiveCell(5)} onClick={() => setChoice(5)}>
              Kriterium 5: Organisation des Textes
            </div>
            <div className={amIActiveCell(6)} onClick={() => setChoice(6)}>
              Kriterium 6: Aufbau
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

export default SlideSelectCriteria;
