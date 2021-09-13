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

function SlideCriteriaImprovement114({
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
            <div className="Slide-criteria-units-row-1">
              <p className="Slide-label-l">
                2. Für Methoden und Ergebnisse: Präteritum (z.B. ergab, sagte).
                Für Fazit und Schlussfolgerungen: Präsens (z.B. ergibt, sagt):
                In diesem Text sind die Verbformen dazu farblich markiert:
                Präteritum (<span style={{ color: "green" }}> grün </span>)
                Präsens (<span style={{ color: "blue" }}>blau</span>)
              </p>
            </div>
          )}
          {criteriaIntroUnits && criteriaIntroUnits[2] && (
            <div className="Slide-criteria-units-row-red">
              <p className="Slide-label-l">{criteriaIntroUnits[2]}</p>
            </div>
          )}
          <div>
            <div className="Slide-criteria-units-text-box-yellow">
              <span>
                Die Studie untersucht, wie viele Kinder und Jugendliche
                gewalthaltige Computerspiele spielen und ob ein Zusammenhang
                zwischen dem Spielen und Aggressionen besteht. An einem
                Gymnasium
                <span style={{ color: "red" }}> wurden </span>
                387 Kinder und Jugendliche zu der Häufigkeit und den Motiven
                ihrer Nutzung von gewalthaltigen Computerspielen mittels zweier
                Fragebogen
                <span style={{ color: "red" }}> befragt. </span>
                Die gesammelten Ergebnisse
                <span style={{ color: "green" }}> zeigten </span>
                ein sehr hohes Nutzungsverhalten bei den männlichen Teilnehmern,
                gleichzeitig jedoch ebenso ein erhöhtes Nutzungsverhalten bei
                den weiblichen TeilnehmerInnen. Das Wissen über das hohe
                Mediennutzungsverhalten der TeilnehmerInnen
                <span style={{ color: "blue" }}> stellt </span>
                die Grundlage für eine weiterreichende Forschung dar, durch
                welche Methoden zur Vermittlung von Medienkompetenz
                <span style={{ color: "blue" }}>
                  {" "}
                  ermittelt werden können.{" "}
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

export default SlideCriteriaImprovement114;
