import React from "react";

import { useSlidesDispatch, useSlidesState } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";

interface Props {
  slideText: string;
  slideNumber: number;
  type: string;
  criteriaIntroUnits: string[] | undefined;
  criteriaExamples: string[] | undefined;
  header: string | undefined;
}

function SlideCriteriaImprovement110({
  slideText,
  slideNumber,
  type,
  criteriaIntroUnits,
  criteriaExamples,
  header,
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="Slide">
      <div className="Slide-container">
        <div className="Slide-header-small">{header}</div>

        <div className="Slide-main">
          {criteriaIntroUnits && criteriaIntroUnits[0] && (
            <div className="Slide-criteria-units-row-yellow">
              <p className="Slide-label-l">{criteriaIntroUnits[0]}</p>
            </div>
          )}
          {criteriaIntroUnits && criteriaIntroUnits[1] && (
            <div className="Slide-criteria-units-row-blue">
              <p className="Slide-label-l">{criteriaIntroUnits[1]}</p>
            </div>
          )}
          {criteriaIntroUnits && criteriaIntroUnits[2] && (
            <div className="Slide-criteria-units-row-red">
              <p className="Slide-label-l">{criteriaIntroUnits[2]}</p>
            </div>
          )}
          <div>
            <div className="Slide-criteria-units-text-box-blue-inner">
              <div className="Slide-criteria-units-text-box-yellow-inner">
                <div className="Slide-criteria-units-text-box-red">
                  {criteriaExamples && criteriaExamples[0]}
                </div>
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

export default SlideCriteriaImprovement110;
