import React from "react";

import { useSlidesDispatch, useSlidesState } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";

interface Props {
  slideText: string;
  slideNumber: number;
  type: string;
  criteriaIntroUnits: string[] | undefined;
}

function SlideCriteriaRightWrong({
  slideText,
  slideNumber,
  type,
  criteriaIntroUnits,
}: Props) {
  const context = useSlidesState();
  const dispatch = useSlidesDispatch();
  const { launchTime, restart } = useTimer();

  const finish = () => {
    const user = context?.user ? context.user : "";
    const obj = type === "Willkommen" ? { vpn: user } : null;

    dispatch &&
      launchTime &&
      dispatch({
        type: "submit_slide",
        payload: {
          type: type,
          answer: { zeit: launchTime - Date.now(), ...obj },
        },
      });
    restart();
  };

  const boxClass =
    slideNumber === 38
      ? "Slide-criteria-units-text-box-right"
      : "Slide-criteria-units-text-box-wrong";

  return (
    <div className="Slide">
      <div className="Slide-container">
        <div className="Slide-main">
          {criteriaIntroUnits && criteriaIntroUnits[0] && (
            <div className="Slide-criteria-units-row-1">
              <p className="Slide-label-l">
                {criteriaIntroUnits && criteriaIntroUnits[0]}
              </p>
            </div>
          )}
          {criteriaIntroUnits && criteriaIntroUnits[1] && (
            <div className="Slide-criteria-units-row-2">
              <p className="Slide-label-l">
                {criteriaIntroUnits && criteriaIntroUnits[1]}
              </p>
            </div>
          )}
          {criteriaIntroUnits && criteriaIntroUnits[2] && (
            <div className="Slide-criteria-units-row-1">
              <p className="Slide-label-l">
                {criteriaIntroUnits && criteriaIntroUnits[2]}
              </p>
            </div>
          )}

          <p className="Slide-label-l">
            {slideNumber === 38 ? "So geht's richtig:" : "Und so nicht:"}
          </p>
          <div className={boxClass}>{slideText}</div>
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

export default SlideCriteriaRightWrong;
