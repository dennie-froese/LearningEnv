import React, { useEffect, useState } from "react";
import { inputValidationOff } from "../../App";
import { useSlidesDispatch, useSlidesState } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";
import Content from "./../../Content.png";
import Formal from "./../../Formal.png";
import Satzbau from "./../../Satzbau.png";
import Scientific from "./../../Scientific.png";
import Organisation from "./../../Organisation.png";
import Structure from "./../../Structure.png";

interface Props {
  slideText: string;
  slideNumber: number;
  type: string;
}

const aspectsContent = [
  "1. Die Beschreibung des untersuchten Problems/der Frage",
  "2. Die Versuchsobjekte oder Datengrundlage (Merkmale)",
  "3. Die Methode, mit der geforscht wurde",
  "4. Die zentralen Ergebnisse",
  "5. Ein Fazit und die wichtigsten Schlüsse, die gezogen werden können",
];

const aspectsFormal = [
  "In meinem Abstract…",
  "1. komme ich nicht über die vorgegebenen 250 Wörter",
  "2. schreibe ich in ganzen Sätzen",
  '3. schreibe ich nicht in der Ich-Form ("ich erkläre", "ich schlussfolgere")',
];

const aspectsOrtographie = [
  "In meinem Abstract…",
  "1. schreibe ich orthographisch und grammatisch korrekt.",
  "2. stelle ich die Methoden und Ergebnisse im Präteritum (z.B. ergab, sagte) und das Fazit im Präsens (z.B. ergibt, sagt) dar",
  "3. nutze ich eher das Aktiv statt des Passivs (sagt statt wird gesagt; ca. 2 Passivkonstruktionen)",
];

const aspectsScientific = [
  "In meinem Abstract…",
  "1. schreibe ich für meine Leser verständlich",
  "2. beziehe ich mich nur auf die Studie, schweife nicht ab und verallgemeinere nicht",
  "3. schreibe ich objektiv und vermeide Umgangssprache (z.B. total, ein bisschen)",
  "4. drücke ich mich mit möglichst wenig Wörtern eindeutig aus",
];

const aspectsOrganisation = [
  "In meinem Abstract…",
  "1. nutze ich zeitliche Ausdrücke, um Verbindungen zwischen den Sätzen zu schaffen  (z.B. anschließend, mind. 1x)",
  "2. nutze ich begründende Ausdrücke, um Verbindungen zwischen den Sätzen zu schaffen  (z.B. folglich, deshalb, anschließend, mind. 1x)",
  "3. nutze ich weitere Ausdrücke, um Verbindungen zwischen den Sätzen zu schaffen  (z.B. damit, um…zu)",
];

const aspectsStructure = [
  "In meinem Abstract halte ich mich an den folgenden Aufbau:",
  "1. Problem/der Fragestellung",
  "2. Versuchsobjekte oder Datengrundlage",
  "3. Methode",
  "4. Ergebnisse",
  "5. Fazit",
];

function SlideSelfEvaluation({ slideText, slideNumber, type }: Props) {
  const [input, setInput] = useState<string>("");
  const dispatch = useSlidesDispatch();
  const context = useSlidesState();
  const [aspects, setAspects] = useState([""]);
  const [image, setImage] = useState<string | undefined>(undefined);
  const [criteria, setCriteria] = useState("");

  useEffect(() => {
    switch (slideNumber) {
      case 67:
      case 134:
        setAspects(aspectsContent);
        setImage(Content);
        setCriteria("„Inhalt“");
        break;
      case 70:
      case 137:
        setAspects(aspectsFormal);
        setImage(Formal);
        setCriteria("„Formales“");
        break;
      case 73:
      case 140:
        setAspects(aspectsOrtographie);
        setImage(Satzbau);
        setCriteria("„Satzbau“");
        break;
      case 76:
      case 143:
        setAspects(aspectsScientific);
        setImage(Scientific);
        setCriteria("„Wissenschaftlicher Stil“");
        break;
      case 79:
      case 146:
        setAspects(aspectsOrganisation);
        setImage(Organisation);
        setCriteria("„Organisation“");
        break;
      case 82:
      case 149:
        setAspects(aspectsStructure);
        setImage(Structure);
        setCriteria("„Aufbau“");
        break;
    }
  }, [slideNumber]);

  const { launchTime, restart } = useTimer();
  const [error, setError] = useState("");

  const finish = () => {
    if (input || inputValidationOff) {
      if (["0", "1", "2", "3", "4", "5", "6"].includes(input)) {
        const obj =
          type === "Beispiel_Attribution0"
            ? { example_Attribution: input }
            : type === "Beispiel_SN0"
            ? { example_SN: input }
            : type === "Beispiel_Konsens0"
            ? { example_Konsens: input }
            : type === "Beispiel_Konsistenz0"
            ? { example_Konsistenz: input }
            : type === "Beispiel_Distinktheit0"
            ? { example_Distinktheit: input }
            : type === "Beispiel_FA0"
            ? { example_FA: input }
            : type === "Beispiel_SV0"
            ? { example_SV: input }
            : type === "Beispiel_GWG0"
            ? { example_GWG: input }
            : null;
        setInput("");
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
        setError("");
      } else {
        setError(
          "Bitte überprüfe deine Bewertung. Es sind nur Bewertungen von 1 - 6 erlaubt."
        );
      }
    } else {
      setError("Bitte überprüfe die Vollständigkeit deiner Angaben.");
    }
  };

  return (
    <div className="Slide">
      <div className="Slide-container">
        <div className="Slide-header">
          <div className="Slide-text-l">{slideText}</div>
        </div>
        <div className="Slide-textInput-container">
          <div>
            <div>Aspekte des Kriteriums</div>
            {aspects.map((aspect) => (
              <div className="Slide-self-evaluation-aspects">{aspect}</div>
            ))}
            <img
              className="Slide-self-evaluation-table-png"
              src={image}
              alt=""
            />
          </div>
          <div className="Slide-textInput-container-study">tbd</div>
        </div>
        <div className="Slide-nav">
          {[134, 137, 140, 143, 146, 149].includes(slideNumber) && (
            <div className="Slide-self-evaluation-box">
              <div>{`Deine 1. Bewertung für das Kriterium ${criteria}:`}</div>

              <input
                className="Slide-self-evaluation-input"
                //tbd
                value={"tbd"}
                type="text"
                name="name"
              />
            </div>
          )}
          <div className="Slide-self-evaluation-box">
            <div>{`Deine Bewertung für das Kriterium ${criteria}:`}</div>

            <input
              className="Slide-self-evaluation-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              name="name"
            />
          </div>
          <p className="Error-text" style={{ paddingRight: 20 }}>
            {error}
          </p>
          <button className="Slide-button" onClick={finish}>
            Weiter
          </button>
        </div>
      </div>
    </div>
  );
}

export default SlideSelfEvaluation;
