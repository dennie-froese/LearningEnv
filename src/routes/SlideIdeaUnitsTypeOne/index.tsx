import React, { useState } from "react";
import { useSlidesDispatch, useSlidesState } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";

interface Props {
  slideText: string;
  slideNumber: number;
  type: string;
  header: string | undefined;
  ideaUnitsTypeOne: string[] | undefined;
  expertExamples: string[] | undefined;
}

function SlideIdeaUnitsTypeOne({
  slideText,
  slideNumber,
  type,
  header,
  ideaUnitsTypeOne,
  expertExamples,
}: Props) {
  const [valueOne, setValueOne] = useState<undefined | string>(undefined);
  const [valueTwo, setValueTwo] = useState<undefined | string>(undefined);
  const [valueThree, setValueThree] = useState<undefined | string>(undefined);
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
    setValueOne(undefined);
    setValueTwo(undefined);
    setValueThree(undefined);
    setExampleEvaluation(undefined);
  };

  const finish = () => {
    const obj =
      type === "Attribution_g1_1"
        ? {
            Attribution_g1_1_1: valueOne,
            Attribution_g1_1_2: valueTwo,
            Attribution_g1_1_3: valueThree,
            Attribution_g1_1_4: exampleEvaluation?.toString(),
          }
        : type === "Attribution_g1_2"
        ? {
            Attribution_g1_2_1: valueOne,
            Attribution_g1_2_2: valueTwo,
            Attribution_g1_2_3: valueThree,
            Attribution_g1_2_4: exampleEvaluation?.toString(),
          }
        : type === "SN_g1_1"
        ? {
            SN_g1_1_1: valueOne,
            SN_g1_1_2: valueTwo,
            SN_g1_1_3: valueThree,
            SN_g1_1_4: exampleEvaluation?.toString(),
          }
        : type === "SN_g1_2"
        ? {
            SN_g1_2_1: valueOne,
            SN_g1_2_2: valueTwo,
            SN_g1_2_3: valueThree,
            SN_g1_2_4: exampleEvaluation?.toString(),
          }
        : type === "Konsens_g1_1"
        ? {
            Konsens_g1_1_1: valueOne,
            Konsens_g1_1_2: valueTwo,
            Konsens_g1_1_3: valueThree,
            Konsens_g1_1_4: exampleEvaluation?.toString(),
          }
        : type === "Konsens_g1_2"
        ? {
            Konsens_g1_2_1: valueOne,
            Konsens_g1_2_2: valueTwo,
            Konsens_g1_2_3: valueThree,
            Konsens_g1_2_4: exampleEvaluation?.toString(),
          }
        : type === "Konsistenz_g1_1"
        ? {
            Konsistenz_g1_1_1: valueOne,
            Konsistenz_g1_1_2: valueTwo,
            Konsistenz_g1_1_3: valueThree,
            Konsistenz_g1_1_4: exampleEvaluation?.toString(),
          }
        : type === "Konsistenz_g1_2"
        ? {
            Konsistenz_g1_2_1: valueOne,
            Konsistenz_g1_2_2: valueTwo,
            Konsistenz_g1_2_3: valueThree,
            Konsistenz_g1_2_4: exampleEvaluation?.toString(),
          }
        : type === "Distinktheit_g1_1"
        ? {
            Distinktheit_g1_1_1: valueOne,
            Distinktheit_g1_1_2: valueTwo,
            Distinktheit_g1_1_3: valueThree,
            Distinktheit_g1_1_4: exampleEvaluation?.toString(),
          }
        : type === "Distinktheit_g1_2"
        ? {
            Distinktheit_g1_2_1: valueOne,
            Distinktheit_g1_2_2: valueTwo,
            Distinktheit_g1_2_3: valueThree,
            Distinktheit_g1_2_4: exampleEvaluation?.toString(),
          }
        : type === "FA_g1_1"
        ? {
            FA_g1_1_1: valueOne,
            FA_g1_1_2: valueTwo,
            FA_g1_1_3: valueThree,
            FA_g1_1_4: exampleEvaluation?.toString(),
          }
        : type === "FA_g1_2"
        ? {
            FA_g1_2_1: valueOne,
            FA_g1_2_2: valueTwo,
            FA_g1_2_3: valueThree,
            FA_g1_2_4: exampleEvaluation?.toString(),
          }
        : type === "SV_g1_1"
        ? {
            SV_g1_1_1: valueOne,
            SV_g1_1_2: valueTwo,
            SV_g1_1_3: valueThree,
            SV_g1_1_4: exampleEvaluation?.toString(),
          }
        : type === "SV_g1_2"
        ? {
            SV_g1_2_1: valueOne,
            SV_g1_2_2: valueTwo,
            SV_g1_2_3: valueThree,
            SV_g1_2_4: exampleEvaluation?.toString(),
          }
        : type === "GWG_g1_1"
        ? {
            GWG_g1_1_1: valueOne,
            GWG_g1_1_2: valueTwo,
            GWG_g1_1_3: valueThree,
            GWG_g1_1_4: exampleEvaluation?.toString(),
          }
        : type === "GWG_g1_2"
        ? {
            GWG_g1_2_1: valueOne,
            GWG_g1_2_2: valueTwo,
            GWG_g1_2_3: valueThree,
            GWG_g1_2_4: exampleEvaluation?.toString(),
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
    type.includes("2") && resetValues();
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
                    checked={valueOne === "yes" ? true : false}
                    onClick={() =>
                      valueOne === "yes"
                        ? setValueOne(undefined)
                        : setValueOne("yes")
                    }
                  />
                  <div className="Slide-label">Ja</div>
                </div>
                <div className="Slide-idea-units-checkbox-row">
                  <input
                    type="checkbox"
                    checked={valueOne === "no" ? true : false}
                    onClick={() =>
                      valueOne === "no"
                        ? setValueOne(undefined)
                        : setValueOne("no")
                    }
                  />
                  <div className="Slide-label">Nein</div>
                </div>
              </div>
              <div className="Slide-label">
                {ideaUnitsTypeOne && ideaUnitsTypeOne[0]}
              </div>
            </div>
            <div className="Slide-idea-unit-box">
              <div className="Slide-idea-units-box-column">
                <div className="Slide-idea-units-checkbox-row">
                  <input
                    type="checkbox"
                    checked={valueTwo === "yes" ? true : false}
                    onClick={() =>
                      valueTwo === "yes"
                        ? setValueTwo(undefined)
                        : setValueTwo("yes")
                    }
                  />
                  <div className="Slide-label">Ja</div>
                </div>
                <div className="Slide-idea-units-checkbox-row">
                  <input
                    type="checkbox"
                    checked={valueTwo === "no" ? true : false}
                    onClick={() =>
                      valueTwo === "no"
                        ? setValueTwo(undefined)
                        : setValueTwo("no")
                    }
                  />
                  <div className="Slide-label">Nein</div>
                </div>
              </div>
              <div className="Slide-label">
                {ideaUnitsTypeOne && ideaUnitsTypeOne[1]}
              </div>
            </div>
            {ideaUnitsTypeOne && ideaUnitsTypeOne[2] && (
              <div className="Slide-idea-unit-box">
                <div className="Slide-idea-units-box-column">
                  <div className="Slide-idea-units-checkbox-row">
                    <input
                      type="checkbox"
                      checked={valueThree === "yes" ? true : false}
                      onClick={() =>
                        valueThree === "yes"
                          ? setValueThree(undefined)
                          : setValueThree("yes")
                      }
                    />
                    <div className="Slide-label">Ja</div>
                  </div>
                  <div className="Slide-idea-units-checkbox-row">
                    <input
                      type="checkbox"
                      checked={valueThree === "no" ? true : false}
                      onClick={() =>
                        valueThree === "no"
                          ? setValueThree(undefined)
                          : setValueThree("no")
                      }
                    />
                    <div className="Slide-label">Nein</div>
                  </div>
                </div>
                <div className="Slide-label">
                  {ideaUnitsTypeOne && ideaUnitsTypeOne[2]}
                </div>
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

export default SlideIdeaUnitsTypeOne;
