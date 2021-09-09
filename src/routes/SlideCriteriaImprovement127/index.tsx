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

function SlideCriteriaImprovement127({
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
              1. Die Beschreibung des untersuchten Problems/der Frage
            </p>
          </div>
          <div className="Slide-criteria-units-row-1">
            <p className="Slide-label-l">
              2. Die Versuchsobjekte oder Datengrundlage
            </p>
          </div>
          <div className="Slide-criteria-units-row-1">
            <p className="Slide-label-l">
              3. Die Methode, mit der geforscht wurde
            </p>
          </div>
          <div className="Slide-criteria-units-row-1">
            <p className="Slide-label-l">4. Die zentralen Ergebnisse</p>
          </div>
          <div className="Slide-criteria-units-row-1">
            <p className="Slide-label-l">
              5. Ein Fazit und die wichtigsten Schlüsse, die gezogen werden
              können
            </p>
          </div>
          <div className="Slide-criteria-units-text-box-red">
            An einem Gymnasium wurden 387 Kinder und Jugendliche zu der
            Häufigkeit und den Motiven ihrer Nutzung von gewalthaltigen
            Computerspielen mittels zweier Fragebogen befragt. Die Studie
            untersucht, wie viele Kinder und Jugendliche gewalthaltige
            Computerspiele spielen und ob ein Zusammenhang zwischen dem Spielen
            und Aggressionen besteht. Die Ergebnisse der Studie verdeutlichen,
            dass nicht die Computerspielnutzung per se ausschlaggebend für
            Aggression sei, sondern dass der Gewaltgehalt entscheidend ist. Die
            gesammelten Ergebnisse zeigten ein sehr hohes Nutzungsverhalten bei
            den männlichen Teilnehmern, gleichzeitig jedoch ebenso ein erhöhtes
            Nutzungsverhalten bei den weiblichen TeilnehmerInnen. Spielfreude,
            Langeweile und Stressabbau konnten durch die Fragebögen als Motive
            für die Nutzung festgestellt werden.
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

export default SlideCriteriaImprovement127;
