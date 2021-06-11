import React, { useState } from "react";
import { inputValidationOff } from "../../App";
import { useSlidesDispatch, useSlidesState } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";

interface Props {
  slideText: string;
  slideNumber: number;
  type: string;
  header: string | undefined;
  negativeExamples: string[] | undefined;
}

function SlideIdeaUnitsTypeTwo({
  slideText,
  slideNumber,
  type,
  header,
  negativeExamples,
}: Props) {
  const [exampleEvaluation, setExampleEvaluation] = useState<number>(90);
  const [error, setError] = useState("");

  const dispatch = useSlidesDispatch();
  const context = useSlidesState();
  const { launchTime, restart } = useTimer();

  const yourExample = type.includes("Attribution")
    ? context?.answers.Beispiel_Attribution0.example_Attribution
    : type.includes("SN")
    ? context?.answers.Beispiel_SN0.example_SN
    : type.includes("Konsens")
    ? context?.answers.Beispiel_Konsens0.example_Konsens
    : type.includes("Konsistenz")
    ? context?.answers.Beispiel_Konsistenz0.example_Konsistenz
    : type.includes("Distinktheit")
    ? context?.answers.Beispiel_Distinktheit0.example_Distinktheit
    : type.includes("FA")
    ? context?.answers.Beispiel_FA0.example_FA
    : type.includes("SV")
    ? context?.answers.Beispiel_SV0.example_SV
    : type.includes("GWG")
    ? context?.answers.Beispiel_GWG0.example_GWG
    : "Du hast leider kein Beispiel definiert.";

  const resetValues = () => {
    setExampleEvaluation(90);
  };

  const finish = () => {
    const obj =
      type === "Attribution_g2"
        ? {
            Attribution_g2_4: exampleEvaluation?.toString(),
          }
        : type === "SN_g2"
        ? {
            SN_g2_4: exampleEvaluation?.toString(),
          }
        : type === "Konsens_g2"
        ? {
            Konsens_g2_3: exampleEvaluation?.toString(),
          }
        : type === "Konsistenz_g2"
        ? {
            Konsistenz_g2_5: exampleEvaluation?.toString(),
          }
        : type === "Distinktheit_g2"
        ? {
            Distinktheit_g2_4: exampleEvaluation?.toString(),
          }
        : type === "FA_g2"
        ? {
            FA_g2_5: exampleEvaluation?.toString(),
          }
        : type === "SV_g2"
        ? {
            SV_g2_3: exampleEvaluation?.toString(),
          }
        : type === "GWG_g2"
        ? {
            GWG_g2_4: exampleEvaluation?.toString(),
          }
        : null;

    if (
      ((type === "Attribution_g2" ||
        type === "SN_g2" ||
        type === "Distinktheit_g2" ||
        type === "GWG_g2" ||
        type === "Konsens_g2" ||
        type === "SV_g2" ||
        type === "Konsistenz_g2" ||
        type === "FA_g2") &&
        exampleEvaluation !== 90) ||
      inputValidationOff
    ) {
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
      resetValues();
      setError("");
    } else {
      setError("Bitte überprüfe die Vollständigkeit deiner Angaben.");
    }
  };
  return (
    <div className="Slide">
      <div className="Slide-container">
        <div className="Slide-idea-units-header">
          <p>{header}</p>
        </div>
        <div className="Slide-idea-units-main">
          <div className="Slide-text-m">{slideText}</div>
          {negativeExamples && negativeExamples[0] && negativeExamples[1] && (
            <div className="Slide-idea-units-text-container">
              <div className="Slide-text-row">
                <div className="Slide-text-m-red">Beide </div>
                <div className="Slide-text-m">
                  Negativ-Beispiele würden bei der Bewertung
                </div>
                <div className="Slide-text-m-red"> jeweils</div>
                <div className="Slide-text-m">
                  {" "}
                  <b>keinen</b> Punkt erhalten.
                </div>
              </div>
              <div className="Slide-text-m">Negativ-Beispiel 1:</div>
              <textarea
                className="Slide-idea-units-text-container-text"
                disabled={true}
              >
                {negativeExamples[0]}
              </textarea>
              <div className="Slide-text-m">Negativ-Beispiel 2:</div>
              <textarea
                className="Slide-idea-units-text-container-text"
                disabled={true}
              >
                {negativeExamples[1]}
              </textarea>
            </div>
          )}
          <div className="Slide-idea-units-text-container">
            <div className="Slide-text-m">Dein Beispiel:</div>
            <textarea
              className="Slide-idea-units-text-container-text"
              disabled={true}
            >
              {yourExample}
            </textarea>
          </div>
          <div className="Slide-idea-units-text-container">
            <div className="Slide-text-m">
              Wenn die Qualität Deines Beispiels bewertet werden müsste, was
              denkst Du, würde es erhalten:
            </div>
            <div className="Slide-idea-units-row">
              <button
                className={
                  exampleEvaluation === 1
                    ? "Slide-button-idea-units-active"
                    : "Slide-button-idea-units"
                }
                onClick={() =>
                  exampleEvaluation === 1
                    ? setExampleEvaluation(90)
                    : setExampleEvaluation(1)
                }
              >
                einen ganzen Punkt
              </button>
              <button
                className={
                  exampleEvaluation === 0.5
                    ? "Slide-button-idea-units-active"
                    : "Slide-button-idea-units"
                }
                onClick={() =>
                  exampleEvaluation === 0.5
                    ? setExampleEvaluation(90)
                    : setExampleEvaluation(0.5)
                }
              >
                einen halben Punkt
              </button>
              <button
                className={
                  exampleEvaluation === 0
                    ? "Slide-button-idea-units-active"
                    : "Slide-button-idea-units"
                }
                onClick={() =>
                  exampleEvaluation === 0
                    ? setExampleEvaluation(90)
                    : setExampleEvaluation(0)
                }
              >
                keinen Punkt
              </button>
            </div>
          </div>
        </div>
        <div className="Slide-nav">
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

export default SlideIdeaUnitsTypeTwo;
