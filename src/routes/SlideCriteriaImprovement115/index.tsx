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

function SlideCriteriaImprovement115({
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
              Orthographisch und grammatisch korrekt schreiben: hier findest du
              einige Rechtschreib- und Grammatikfehler! Diese sind{" "}
              <span style={{ textDecoration: "underline" }}>unterstrichen</span>
              .
            </p>
          </div>
          <div className="Slide-criteria-units-row-red">
            <p className="Slide-label-l">
              Für Methoden und Ergebnisse: Präteritum (z.B. ergab, sagte) Für
              Fazit und Schlussfolgerungen: Präsens (z.B. ergibt, sagt): hier
              ist die Methode im Präsens, das Fazit im Perfekt geschrieben (
              <span style={{ color: "red" }}>rot </span>
              markiert).
            </p>
          </div>
          <div className="Slide-criteria-units-row-blue">
            <p className="Slide-label-l">
              Nutzung eher von Aktiv- statt Passiv-Formulierungen (sagt vs. wird
              gesagt): Hier wurde Passiv genutzt, obwohl der Satz auch gut im
              Aktiv geschrieben werden könnte (
              <span style={{ color: "blue" }}>blau</span> markiert).
            </p>
          </div>
          <div>
            <div className="Slide-criteria-units-text-box-red">
              Ich möchte jetzt über die{" "}
              <span style={{ textDecoration: "underline" }}>Thematik</span> der
              Nachtschatten-Gewächse, , welche{" "}
              <span style={{ textDecoration: "underline" }}>ihnen</span>{" "}
              sicherlich schon begegnet ist, schreiben bzw. reflektieren und
              außerdem weise ich darauf hin, dass diese{" "}
              <span style={{ textDecoration: "underline" }}>Tematik</span> von
              vielen{" "}
              <span style={{ textDecoration: "underline" }}>Fachläuten</span>,
              von den es gar nicht so viele gibt, wie gemeinhin ja angenommen
              wird, als besonders schwierig bezeichnet wird. Dazu
              <span style={{ color: "red" }}> recherchiere </span>
              ich im Internet.
              <span style={{ color: "blue" }}>Das</span>
              <span style={{ color: "red" }}> hat ergeben</span>
              <span style={{ color: "blue" }}>
                , dass eigentlich keiner was zu Nachtschatten-Gewächsen weiß.
                Wurde vielleicht nie genauer geguckt, weil es ist ja sowieso
                auch eins langweiliges Thema.
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

export default SlideCriteriaImprovement115;
