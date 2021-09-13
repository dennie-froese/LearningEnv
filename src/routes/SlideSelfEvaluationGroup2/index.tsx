import React, { useEffect, useState } from "react";
import { inputValidationOff } from "../../App";
import { useSlidesDispatch, useSlidesState } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";

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

function SlideSelfEvaluationGroup2({ slideText, slideNumber, type }: Props) {
  const [input, setInput] = useState<string>("");
  const dispatch = useSlidesDispatch();
  const context = useSlidesState();

  const [aspects, setAspects] = useState([""]);
  const [criteria, setCriteria] = useState("");
  const [valueFirstRound, setValueFirstRound] = useState("");

  const scaleValues = ["1\nsehr gut", "2", "3", "4", "5", "6\nsehr schlecht"];

  useEffect(() => {
    switch (slideNumber) {
      case 86:
      case 153:
        setAspects(aspectsContent);
        setCriteria("Inhalt");
        setValueFirstRound(
          context?.answers?.Selbstbewertung_Abstract_Inhalt?.antwort || ""
        );
        break;
      case 89:
      case 156:
        setAspects(aspectsFormal);
        setCriteria("Formales");
        setValueFirstRound(
          context?.answers?.Selbstbewertung_Abstract_Gruppe2_Formales
            ?.antwort || ""
        );
        break;
      case 92:
      case 159:
        setAspects(aspectsOrtographie);
        setCriteria("Orthographie und Grammatik");
        setValueFirstRound(
          context?.answers?.Selbstbewertung_Abstract_Gruppe2_Orthographie
            ?.antwort || ""
        );
        break;
      case 95:
      case 162:
        setAspects(aspectsScientific);
        setCriteria("Wissenschaftlicher Stil");
        setValueFirstRound(
          context?.answers?.Selbstbewertung_Abstract_Gruppe2_Wissenschaftlich
            ?.antwort || ""
        );
        break;
      case 98:
      case 165:
        setAspects(aspectsOrganisation);
        setCriteria("Organisation");
        setValueFirstRound(
          context?.answers?.Selbstbewertung_Abstract_Gruppe2_Text_Organisation
            ?.antwort || ""
        );
        break;
      case 101:
      case 168:
        setAspects(aspectsStructure);
        setCriteria("Aufbau");
        setValueFirstRound(
          context?.answers?.Selbstbewertung_Abstract_Gruppe2_Aufbau?.antwort ||
            ""
        );
        break;
    }
  }, [
    context?.answers?.Selbstbewertung_Abstract_Gruppe2_Aufbau?.antwort,
    context?.answers?.Selbstbewertung_Abstract_Gruppe2_Formales?.antwort,
    context?.answers?.Selbstbewertung_Abstract_Gruppe2_Orthographie?.antwort,
    context?.answers?.Selbstbewertung_Abstract_Gruppe2_Text_Organisation
      ?.antwort,
    context?.answers?.Selbstbewertung_Abstract_Gruppe2_Wissenschaftlich
      ?.antwort,
    context?.answers?.Selbstbewertung_Abstract_Inhalt?.antwort,
    slideNumber,
  ]);

  const { launchTime, restart } = useTimer();
  const [error, setError] = useState("");

  const finish = () => {
    if (input || inputValidationOff) {
      if (
        ["0", "1", "2", "3", "4", "5", "6"].includes(input) ||
        inputValidationOff
      ) {
        setInput("");
        dispatch &&
          launchTime &&
          dispatch({
            type: "submit_slide",
            payload: {
              type: type,
              answer: { zeit: launchTime - Date.now(), antwort: input },
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
        <div className="Slide-self-evaluation-main">
          <div>
            <div>Aspekte des Kriteriums</div>
            {aspects.map((aspect) => (
              <div className="Slide-self-evaluation-aspects">{aspect}</div>
            ))}
          </div>
          <div className="Slide-self-evaluation-scale-row">
            <div className="Slide-self-evaluation-scale-box">{criteria}</div>
            {scaleValues.map((value) => (
              <div className="Slide-self-evaluation-scale-box">{value}</div>
            ))}
          </div>
        </div>
        <div className="Slide-nav">
          <p className="Error-text" style={{ paddingRight: 20 }}>
            {error}
          </p>
          {[153, 156, 159, 162, 165, 168].includes(slideNumber) && (
            <div className="Slide-self-evaluation-box">
              <div>{`Deine 1. Bewertung für das Kriterium ${criteria}:`}</div>

              <input
                className="Slide-self-evaluation-input"
                value={valueFirstRound}
                type="text"
                name="name"
                readOnly={true}
              />
            </div>
          )}
          <div className="Slide-self-evaluation-box">
            <div>{`Deine Bewertung:`}</div>

            <input
              className="Slide-self-evaluation-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              name="name"
            />
          </div>
          <button className="Slide-button" onClick={finish}>
            Weiter
          </button>
        </div>
      </div>
    </div>
  );
}

export default SlideSelfEvaluationGroup2;
