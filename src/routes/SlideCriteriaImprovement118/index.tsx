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

function SlideCriteriaImprovement118({
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

          <div className="Slide-criteria-units-row-yellow">
            <p className="Slide-label-l">
              Ich schreibe für meine Leser verständlich: z.B. erfährt der Leser
              hier direkt zu Beginn, worum es geht (
              <span style={{ color: "yellow" }}>gelb</span>
              ).
            </p>
          </div>
          <div className="Slide-criteria-units-row-green">
            <p className="Slide-label-l">
              Ich beziehe mich nur auf die Studie, schweife nicht ab und
              verallgemeinere nicht: z.B. werden hier nur die wichtigsten
              Ergebnisse genannt (<span style={{ color: "green" }}>grün </span>
              markiert).
            </p>
          </div>
          <div className="Slide-criteria-units-row-blue">
            <p className="Slide-label-l">
              Ich schreibe objektiv und vermeide Umgangssprache (z.B. total, ein
              bisschen): im gesamten Text ist keine Umgangssprache zu finden (
              <span style={{ color: "blue" }}>blau</span>).
            </p>
          </div>
          <div className="Slide-criteria-units-row-red">
            <p className="Slide-label-l">
              Ich drücke mich mit möglichst wenig Wörtern eindeutig aus: z.B.
              wird hier kurz und knapp das Fazit zusammengefasst (
              <span style={{ color: "red" }}>rot</span>).
            </p>
          </div>
          <div>
            <div className="Slide-criteria-units-text-box-blue">
              <div className="Slide-criteria-units-text-box-yellow">
                Die Studie gibt Einblicke in die Forschung zum
                Mediennutzungsverhalten von Kindern und Jugendlichen anhand von
                gewalthaltigen Computerspielen. An einem{" "}
              </div>
              Gymnasium
              <span style={{ color: "green" }}> wurden </span>
              387 Kinder und Jugendliche zu der Häufigkeit und den Motiven ihrer
              Nutzung von gewalthaltigen
              <div className="Slide-criteria-units-text-box-green">
                Computerspielen mittels zweier Fragebogen
                <span style={{ color: "green" }}> befragt</span>. Die
                gesammelten
                <span style={{ color: "yellow" }}> Ergebnisse zeigten </span>
                ein erhöhtes Nutzungsverhalten bei den männlichen Teilnehmern,
                gleichzeitig jedoch ebenso ein leicht weniger erhöhtes
                Nutzungsverhalten bei den weiblichen TeilnehmerInnen.{" "}
              </div>
              Spielfreude, Langeweile und Stressabbau konnten durch die
              Fragebögen als Motive für die Nutzung festgestellt werden.
              <div className="Slide-criteria-units-text-box-red">
                Diese Befunde
                <span style={{ color: "yellow" }}>
                  {" "}
                  lassen darauf schließen
                </span>
                , dass die männlichen Teilnehmer deutlich regelmäßiger zu
                gewalthaltigen Videospielen greifen als die weiblichen
                Teilnehmerinnen.
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

export default SlideCriteriaImprovement118;
