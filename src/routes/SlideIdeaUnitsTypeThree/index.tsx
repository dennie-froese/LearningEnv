import React, { useState } from "react";
import { useSlidesDispatch, useSlidesState } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";

interface Props {
  slideText: string;
  slideNumber: number;
  type: string;
  header: string | undefined;
  expertExamples: string[] | undefined;
}

function SlideIdeaUnitsTypeThree({
  slideText,
  slideNumber,
  type,
  header,
  expertExamples,
}: Props) {
  const [exampleEvaluation, setExampleEvaluation] = useState<
    undefined | number
  >(undefined);
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
    setExampleEvaluation(undefined);
  };

  const finish = () => {
    const obj =
      type === "Attribution_g3"
        ? {
            Attribution_g3_1: exampleEvaluation?.toString(),
          }
        : type === "SN_g3"
        ? {
            SN_g3_1: exampleEvaluation?.toString(),
          }
        : type === "Konsens_g3"
        ? {
            Konsens_g3_1: exampleEvaluation?.toString(),
          }
        : type === "Konsistenz_g3"
        ? {
            Konsistenz_g3_1: exampleEvaluation?.toString(),
          }
        : type === "Distinktheit_g3"
        ? {
            Distinktheit_g3_1: exampleEvaluation?.toString(),
          }
        : type === "FA_g3"
        ? {
            FA_g3_1: exampleEvaluation?.toString(),
          }
        : type === "SV_g3"
        ? {
            SV_g3_1: exampleEvaluation?.toString(),
          }
        : type === "GWG_g3"
        ? {
            GWG_g3_1: exampleEvaluation?.toString(),
          }
        : null;
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
  };
  return (
    <div className="Slide">
      <div className="Slide-container">
        <div className="Slide-idea-units-header">
          <p>{header}</p>
        </div>
        <div className="Slide-idea-units-main">
          <div className="Slide-text-m">{slideText}</div>
          {expertExamples && expertExamples[0] && expertExamples[1] && (
            <div className="Slide-idea-units-text-container">
              <div className="Slide-text-m">Expertenbeispiel 1:</div>
              <textarea
                className="Slide-idea-units-text-container-text"
                disabled={true}
              >
                {expertExamples[0]}
              </textarea>
              <div className="Slide-text-m">Expertenbeispiel 2:</div>
              <textarea
                className="Slide-idea-units-text-container-text"
                disabled={true}
              >
                {expertExamples[1]}
              </textarea>
              <div className="Slide-text-m">
                Beide Expertenbeispiele würden bei der Bewertung jeweils einen
                ganzen Punkt erhalten.
              </div>
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
                    ? "Slide-button-active"
                    : "Slide-button"
                }
                onClick={() =>
                  exampleEvaluation === 1
                    ? setExampleEvaluation(undefined)
                    : setExampleEvaluation(1)
                }
              >
                einen ganzen Punkt
              </button>
              <button
                className={
                  exampleEvaluation === 0.5
                    ? "Slide-button-active"
                    : "Slide-button"
                }
                onClick={() =>
                  exampleEvaluation === 0.5
                    ? setExampleEvaluation(undefined)
                    : setExampleEvaluation(0.5)
                }
              >
                einen halben Punkt
              </button>
              <button
                className={
                  exampleEvaluation === 0
                    ? "Slide-button-active"
                    : "Slide-button"
                }
                onClick={() =>
                  exampleEvaluation === 0
                    ? setExampleEvaluation(undefined)
                    : setExampleEvaluation(0)
                }
              >
                keinen Punkt
              </button>
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

export default SlideIdeaUnitsTypeThree;
