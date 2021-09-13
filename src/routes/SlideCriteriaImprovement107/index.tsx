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

function SlideCriteriaImprovement107({
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
          {criteriaIntroUnits && criteriaIntroUnits[3] && (
            <div className="Slide-criteria-units-row-green">
              <p className="Slide-label-l">{criteriaIntroUnits[3]}</p>
            </div>
          )}
          {criteriaIntroUnits && criteriaIntroUnits[4] && (
            <div className="Slide-criteria-units-row-purple">
              <p className="Slide-label-l">{criteriaIntroUnits[4]}</p>
            </div>
          )}
          <div>
            <div>So geht's nicht: </div>
            <div className="Slide-criteria-units-text-box-red">
              <span>
                Da wurden <span style={{ color: "blue" }}>250 Kinder</span> in
                einer Schule befragt.{" "}
                <span style={{ color: "red" }}>Mit Interviews.</span>
                <span style={{ color: "yellow" }}>
                  {" "}
                  Das Thema war Computer.
                </span>{" "}
                <span style={{ color: "red" }}>
                  Dann haben die so Fragen beantwortet.{" "}
                </span>
                <span style={{ color: "green" }}>
                  Es kam raus, dass die weiblichen Teilnehmerinnen viel mehr
                  spielten als die männlichen.{" "}
                </span>
                <span style={{ color: "purple" }}>
                  Jetzt könnte man weitere Tests machen, warum die männlichen
                  Teilnehmer weniger spielen.{" "}
                </span>
              </span>
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

export default SlideCriteriaImprovement107;
