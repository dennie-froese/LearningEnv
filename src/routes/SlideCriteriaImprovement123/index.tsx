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

function SlideCriteriaImprovement123({
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
        <div className="Slide-main">
          <div>{header}</div>

          <div className="Slide-criteria-units-row-1">
            <p className="Slide-label-l">
              1. Ich nutze zeitliche Ausdrücke (z.B. anschließend), um
              Verbindungen zwischen den Sätzen zu schaffen: KEINE
            </p>
          </div>
          <div className="Slide-criteria-units-row-1">
            <p className="Slide-label-l">
              2. Ich nutze begründende Ausdrücke (z.B. folglich, deshalb,
              anschließend), um Verbindungen zwischen den Sätzen zu schaffen:
              KEINE
            </p>
          </div>
          <div className="Slide-criteria-units-row-1">
            <p className="Slide-label-l">
              3. Ich nutze weitere Ausdrücke, um Verbindungen zwischen den
              Sätzen zu schaffen (z.B. damit, um…zu): KEINE
            </p>
          </div>
          <div>
            <div className="Slide-criteria-units-text-box-red">
              Da wurden 250 Kinder in einer Schule befragt. Mit Interviews. Das
              Thema war Computer. Dann haben die so Fragen beantwortet. Es kam
              raus, dass die weiblichen Teilnehmerinnen viel mehr spielten als
              die männlichen. Vielleicht könnte man weitere Tests machen, warum
              die männlichen Teilnehmer weniger spielen.
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

export default SlideCriteriaImprovement123;
