import React, { useState } from "react";
import { useSlidesDispatch, useSlidesState } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";

interface Props {
  slideText: string;
  slideNumber: number;
  type: string;
  header: string | undefined;
  ideaUnitsTypeOne: string[] | undefined;
}

function SlideIdeaUnitsTypeOne({
  slideText,
  slideNumber,
  type,
  header,
  ideaUnitsTypeOne,
}: Props) {
  const [valueOne, setValueOne] = useState<undefined | string>(undefined);
  const [valueTwo, setValueTwo] = useState<undefined | string>(undefined);
  const [valueThree, setValueThree] = useState<undefined | string>(undefined);
  const [exampleEvaluation, setExampleEvaluation] = useState<
    undefined | string
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

  const finish = () => {
    dispatch &&
      launchTime &&
      dispatch({
        type: "submit_slide",
        payload: { type: type, answer: { zeit: launchTime - Date.now() } },
      });
    restart();
  };
  return (
    <div className="Slide">
      <div className="Slide-container">
        <div className="Slide-header">
          <p>{header}</p>
        </div>
        <div className="Slide-idea-units-main">
          <div className="Slide-text-m">{slideText}</div>
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
            <div className="Slide-idea-units-text-container-text">
              {yourExample}
            </div>
          </div>
          <div className="Slide-idea-units-text-container">
            <div className="Slide-text-m">
              Wenn die Qualität Deines Beispiels bewertet werden müsste, was
              denkst Du, würde es erhalten:
            </div>
            <div className="Slide-idea-units-row">
              <button
                className={
                  exampleEvaluation === "one"
                    ? "Slide-button-active"
                    : "Slide-button"
                }
                onClick={() =>
                  exampleEvaluation === "one"
                    ? setExampleEvaluation(undefined)
                    : setExampleEvaluation("one")
                }
              >
                einen ganzen Punkt
              </button>
              <button
                className={
                  exampleEvaluation === "half"
                    ? "Slide-button-active"
                    : "Slide-button"
                }
                onClick={() =>
                  exampleEvaluation === "half"
                    ? setExampleEvaluation(undefined)
                    : setExampleEvaluation("half")
                }
              >
                einen halben Punkt
              </button>
              <button
                className={
                  exampleEvaluation === "none"
                    ? "Slide-button-active"
                    : "Slide-button"
                }
                onClick={() =>
                  exampleEvaluation === "none"
                    ? setExampleEvaluation(undefined)
                    : setExampleEvaluation("none")
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
