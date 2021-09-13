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

function SlideCriteriaImprovement122({
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
          <div className="Slide-criteria-units-row-green">
            <p className="Slide-label-l">
              1. Ich nutze zeitliche Ausdrücke (z.B. anschließend), um
              Verbindungen zwischen den Sätzen zu schaffen:{" "}
              <span style={{ color: "green" }}>grün</span> markiert
            </p>
          </div>
          <div className="Slide-criteria-units-row-red">
            <p className="Slide-label-l">
              2. Ich nutze begründende Ausdrücke (z.B. folglich, deshalb,
              anschließend), um Verbindungen zwischen den Sätzen zu schaffen:
              <span style={{ color: "red" }}>rot</span> markiert
            </p>
          </div>
          <div className="Slide-criteria-units-row-blue">
            <p className="Slide-label-l">
              3. Ich nutze weitere Ausdrücke, um Verbindungen zwischen den
              Sätzen zu schaffen (z.B. damit, um…zu):
              <span style={{ color: "blue" }}> blau</span> markiert.
            </p>
          </div>
          <div>
            <div className="Slide-criteria-units-text-box-white">
              Die Studie untersucht, wie viele Kinder und Jugendliche
              gewalthaltige Computerspiele spielen und ob ein Zusammenhang
              zwischen dem Spielen und Aggressionen besteht. An einem Gymnasium
              wurden 387 Kinder und Jugendliche
              <span style={{ color: "green" }}> zunächst </span>
              zur Häufigkeit und
              <span style={{ color: "green" }}> anschließend </span>
              zu ihren Motiven der Nutzung von gewalthaltigen Computerspielen
              mittels zweier Fragebogen befragt. Die gesammelten Ergebnisse
              zeigten ein sehr hohes Nutzungsverhalten bei den männlichen
              Teilnehmern,
              <span style={{ color: "green" }}> gleichzeitig </span>
              jedoch ebenso ein erhöhtes Nutzungsverhalten bei den weiblichen
              TeilnehmerInnen.{"\n"}
              <span style={{ color: "red" }}>Folglich </span>
              zeigt die Studie auf, dass weibliche wie männliche TeilnehmerInnen
              oft und regelmäßig gewalthaltige Computerspiele nutzen.
              <span style={{ color: "blue" }}>Um </span>
              weitere Aussagen darüber
              <span style={{ color: "blue" }}> zu </span>
              treffen, inwiefern dies sich vermehrter Aggressionsbereitschaft
              niederschlägt, müssten weitere Studien folgen.
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

export default SlideCriteriaImprovement122;
