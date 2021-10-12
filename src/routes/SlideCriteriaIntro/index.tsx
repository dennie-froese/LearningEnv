import React from "react";
import { useSlidesDispatch, useSlidesState } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";

interface Props {
  slideText: string;
  slideNumber: number;
  type: string;
  criteriaIntroUnits: string[] | undefined;
}

function SlideCriteriaIntro({
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

  return (
    <div className="Slide">
      <div className="Slide-container">
        <div className="Slide-header">
          <p>{slideText}</p>
        </div>
        <div className="Slide-main-flex-start">
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
          {criteriaIntroUnits && criteriaIntroUnits[3] && (
            <div className="Slide-criteria-units-row-2">
              <p className="Slide-label-l">
                {criteriaIntroUnits && criteriaIntroUnits[3]}
              </p>
            </div>
          )}
          {criteriaIntroUnits && criteriaIntroUnits[4] && (
            <div className="Slide-criteria-units-row-1">
              <p className="Slide-label-l">
                {criteriaIntroUnits && criteriaIntroUnits[4]}
              </p>
            </div>
          )}
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

export default SlideCriteriaIntro;
