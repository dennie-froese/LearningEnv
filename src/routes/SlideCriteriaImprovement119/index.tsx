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

function SlideCriteriaImprovement119({
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
              1. Ich schreibe für meine Leser verständlich: hier erfährt der
              Leser nicht direkt, worum es geht. Warum wurden Kinder befragt?
            </p>
          </div>
          <div className="Slide-criteria-units-row-green">
            <p className="Slide-label-l">
              2. Ich beziehe mich nur auf die Studie, schweife nicht ab und
              verallgemeinere nicht: hier wird z.B. eine Aussage über alle
              Mädchen und alle Jungen getroffen (die zudem noch falsch ist).
            </p>
          </div>
          <div className="Slide-criteria-units-row-blue">
            <p className="Slide-label-l">
              3. Ich schreibe objektiv und vermeide Umgangssprache (z.B. total,
              ein bisschen): die umgangssprachlichen Formulierungen sind hier
              <span style={{ color: "blue" }}> blau</span> markiert).
            </p>
          </div>
          <div className="Slide-criteria-units-row-red">
            <p className="Slide-label-l">
              Ich drücke mich mit möglichst wenig Wörtern eindeutig aus:
              hierraus kann man leider nicht eindeutig verstehen, was das
              wirkliche Thema der Studie war (
              <span style={{ color: "red" }}> rot</span> markiert).
            </p>
          </div>
          <div>
            <div className="Slide-criteria-units-text-box-red">
              <div className="Slide-criteria-units-text-box-yellow">
                Da wurden 250 Kinder in einer Schule befragt. Mit Interviews.
                <span style={{ color: "red" }}> Das Thema war </span>
              </div>
              <span style={{ color: "red" }}>Computer. </span>
              <span style={{ color: "blue" }}>
                Dann haben die so Fragen beantwortet. Es kam raus,
              </span>
              dass die weiblichen Teilnehmerinnen viel mehr spielten als die
              männlichen. Daraus
              <div className="Slide-criteria-units-text-box-green">
                kann man schließen, dass Mädchen immer mehr vorm PC hängen als
                Jungs.
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

export default SlideCriteriaImprovement119;
