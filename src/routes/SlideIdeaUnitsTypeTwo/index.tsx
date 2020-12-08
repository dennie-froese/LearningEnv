import React, { useState } from "react";
import { useSlidesDispatch, useSlidesState } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";

interface Props {
  slideText: string;
  slideNumber: number;
  type: string;
  header: string | undefined;
  ideaUnits: string[] | undefined;
  expertExamples: string[] | undefined;
}

function SlideIdeaUnitsTypeTwo({
  slideText,
  slideNumber,
  type,
  header,
  ideaUnits,
  expertExamples,
}: Props) {
  const [valueOne, setValueOne] = useState<number>(0);
  const [valueTwo, setValueTwo] = useState<number>(0);
  const [valueThree, setValueThree] = useState<number>(0);
  const [valueFour, setValueFour] = useState<number>(0);
  const [exampleEvaluation, setExampleEvaluation] = useState<number>(90);
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
    setValueOne(0);
    setValueTwo(0);
    setValueThree(0);
    setValueFour(0);
    setExampleEvaluation(90);
  };

  const finish = () => {
    const obj =
      type === "Attribution_g2"
        ? {
            Attribution_g2_1: valueOne.toString(),
            Attribution_g2_2: valueTwo.toString(),
            Attribution_g2_3: valueThree.toString(),
            Attribution_g2_4: exampleEvaluation?.toString(),
          }
        : type === "SN_g2"
        ? {
            SN_g2_1: valueOne.toString(),
            SN_g2_2: valueTwo.toString(),
            SN_g2_3: valueThree.toString(),
            SN_g2_4: exampleEvaluation?.toString(),
          }
        : type === "Konsens_g2"
        ? {
            Konsens_g2_1: valueOne.toString(),
            Konsens_g2_2: valueTwo.toString(),
            Konsens_g2_3: exampleEvaluation?.toString(),
          }
        : type === "Konsistenz_g2"
        ? {
            Konsistenz_g2_1: valueOne.toString(),
            Konsistenz_g2_2: valueTwo.toString(),
            Konsistenz_g2_3: valueThree.toString(),
            Konsistenz_g2_4: valueFour.toString(),
            Konsistenz_g2_5: exampleEvaluation?.toString(),
          }
        : type === "Distinktheit_g2"
        ? {
            Distinktheit_g2_1: valueOne.toString(),
            Distinktheit_g2_2: valueTwo.toString(),
            Distinktheit_g2_3: valueThree.toString(),
            Distinktheit_g2_4: exampleEvaluation?.toString(),
          }
        : type === "FA_g2"
        ? {
            FA_g2_1: valueOne.toString(),
            FA_g2_2: valueTwo.toString(),
            FA_g2_3: valueThree.toString(),
            FA_g2_4: valueFour.toString(),
            FA_g2_5: exampleEvaluation?.toString(),
          }
        : type === "SV_g2"
        ? {
            SV_g2_1: valueOne.toString(),
            SV_g2_2: valueTwo.toString(),
            SV_g2_3: exampleEvaluation?.toString(),
          }
        : type === "GWG_g2"
        ? {
            GWG_g2_1: valueOne.toString(),
            GWG_g2_2: valueTwo.toString(),
            GWG_g2_3: valueThree.toString(),
            GWG_g2_4: exampleEvaluation?.toString(),
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
            </div>
          )}
          <div className="Slide-idea-units-row">
            <div className="Slide-idea-unit-box">
              <div className="Slide-idea-units-box-column">
                <div className="Slide-idea-units-checkbox-row">
                  <input
                    type="checkbox"
                    checked={valueOne === 1 ? true : false}
                    onClick={() =>
                      valueOne === 1 ? setValueOne(0) : setValueOne(1)
                    }
                  />
                  <div className="Slide-label">Ja</div>
                </div>
                <div className="Slide-idea-units-checkbox-row">
                  <input
                    type="checkbox"
                    checked={valueOne === 2 ? true : false}
                    onClick={() =>
                      valueOne === 2 ? setValueOne(0) : setValueOne(2)
                    }
                  />
                  <div className="Slide-label">Nein</div>
                </div>
              </div>
              <div className="Slide-label">{ideaUnits && ideaUnits[0]}</div>
            </div>
            <div className="Slide-idea-unit-box">
              <div className="Slide-idea-units-box-column">
                <div className="Slide-idea-units-checkbox-row">
                  <input
                    type="checkbox"
                    checked={valueTwo === 1 ? true : false}
                    onClick={() =>
                      valueTwo === 1 ? setValueTwo(0) : setValueTwo(1)
                    }
                  />
                  <div className="Slide-label">Ja</div>
                </div>
                <div className="Slide-idea-units-checkbox-row">
                  <input
                    type="checkbox"
                    checked={valueTwo === 2 ? true : false}
                    onClick={() =>
                      valueTwo === 2 ? setValueTwo(0) : setValueTwo(2)
                    }
                  />
                  <div className="Slide-label">Nein</div>
                </div>
              </div>
              <div className="Slide-label">{ideaUnits && ideaUnits[1]}</div>
            </div>
            {ideaUnits && ideaUnits[2] && (
              <div className="Slide-idea-unit-box">
                <div className="Slide-idea-units-box-column">
                  <div className="Slide-idea-units-checkbox-row">
                    <input
                      type="checkbox"
                      checked={valueThree === 1 ? true : false}
                      onClick={() =>
                        valueThree === 1 ? setValueThree(0) : setValueThree(1)
                      }
                    />
                    <div className="Slide-label">Ja</div>
                  </div>
                  <div className="Slide-idea-units-checkbox-row">
                    <input
                      type="checkbox"
                      checked={valueThree === 2 ? true : false}
                      onClick={() =>
                        valueThree === 2 ? setValueThree(0) : setValueThree(2)
                      }
                    />
                    <div className="Slide-label">Nein</div>
                  </div>
                </div>
                <div className="Slide-label">{ideaUnits && ideaUnits[2]}</div>
              </div>
            )}
            {ideaUnits && ideaUnits[3] && (
              <div className="Slide-idea-unit-box">
                <div className="Slide-idea-units-box-column">
                  <div className="Slide-idea-units-checkbox-row">
                    <input
                      type="checkbox"
                      checked={valueFour === 1 ? true : false}
                      onClick={() =>
                        valueFour === 1 ? setValueFour(0) : setValueFour(1)
                      }
                    />
                    <div className="Slide-label">Ja</div>
                  </div>
                  <div className="Slide-idea-units-checkbox-row">
                    <input
                      type="checkbox"
                      checked={valueFour === 2 ? true : false}
                      onClick={() =>
                        valueFour === 2 ? setValueFour(0) : setValueFour(2)
                      }
                    />
                    <div className="Slide-label">Nein</div>
                  </div>
                </div>
                <div className="Slide-label">{ideaUnits && ideaUnits[3]}</div>
              </div>
            )}
          </div>
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
          <button className="Slide-button" onClick={finish}>
            Weiter
          </button>
        </div>
      </div>
    </div>
  );
}

export default SlideIdeaUnitsTypeTwo;
