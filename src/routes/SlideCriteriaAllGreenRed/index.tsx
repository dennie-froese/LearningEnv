import React from "react";

import { useSlidesDispatch, useSlidesState } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";

interface Props {
  slideText: string;
  slideNumber: number;
  type: string;
  criteriaIntroUnits: string[] | undefined;
  criteriaExamples: string[] | undefined;
}

function SlideCriteriaIntroAllGreenRed({
  slideText,
  slideNumber,
  type,
  criteriaIntroUnits,
  criteriaExamples,
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
    slideNumber === 45 || slideNumber === 49
      ? "Slide-criteria-units-text-box-right"
      : "Slide-criteria-units-text-box-wrong";

  return (
    <div className="Slide">
      <div className="Slide-container">
        <div className="Slide-main">
          {criteriaIntroUnits?.map((introUnit) => {
            return (
              <div className="Slide-criteria-units-row-1">
                <p className="Slide-label-l">{introUnit}</p>
              </div>
            );
          })}
          <p className="Slide-label-l">
            {slideNumber === 45 || slideNumber === 49
              ? "So geht's richtig:"
              : "Und so nicht:"}
          </p>
          <div>
            {criteriaExamples?.map((example) => {
              return <div className={boxClass}>{example}</div>;
            })}
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

export default SlideCriteriaIntroAllGreenRed;
