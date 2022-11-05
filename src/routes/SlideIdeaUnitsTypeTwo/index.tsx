import React, { useState } from "react";
import { inputValidationOff } from "../../App";
import ColouredWord, { ColourObject } from "../../components/ColouredWord";
import useHighlightableText from "../../hooks/useHighlightableText";
import { useSlidesDispatch, useSlidesState } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";

interface Props {
  slideText: string;
  slideNumber: number;
  type: string;
  header: string | undefined;
  partAspects: string[] | undefined;
}

function SlideIdeaUnitsTypeTwo({
  slideText,
  slideNumber,
  type,
  header,
  partAspects,
}: Props) {
  const [exampleEvaluation, setExampleEvaluation] = useState<number>(90);
  const [partAspect1, setPartAspect1] = useState<number>(90);
  const [partAspect2, setPartAspect2] = useState<number>(90);
  const [partAspect3, setPartAspect3] = useState<number>(90);
  const [partAspect4, setPartAspect4] = useState<number>(90);
  const [error, setError] = useState("");

  const dispatch = useSlidesDispatch();
  const context = useSlidesState();
  const { launchTime, restart } = useTimer();

  const userExample = type.includes("Attribution")
    ? context?.answers.Beispiel_Attribution0?.example_Attribution
    : type.includes("SN")
    ? context?.answers.Beispiel_SN0?.example_SN
    : type.includes("Konsens")
    ? context?.answers.Beispiel_Konsens0?.example_Konsens
    : type.includes("Konsistenz")
    ? context?.answers.Beispiel_Konsistenz0?.example_Konsistenz
    : type.includes("Distinktheit")
    ? context?.answers.Beispiel_Distinktheit0?.example_Distinktheit
    : type.includes("FA")
    ? context?.answers.Beispiel_FA0?.example_FA
    : type.includes("SV")
    ? context?.answers.Beispiel_SV0?.example_SV
    : type.includes("GWG")
    ? context?.answers.Beispiel_GWG0?.example_GWG
    : "Du hast leider kein Beispiel definiert.";

  const {
    expertExamplesColourObjectArray: yourExample,
    makeSelection,
  } = useHighlightableText(userExample ? userExample : "", "1");

  function clean() {
    makeSelection("white");
  }

  const resetValues = () => {
    setExampleEvaluation(90);
  };

  const finish = () => {
    const obj =
      type === "Attribution_g2"
        ? {
            Attribution_g2_4: exampleEvaluation?.toString(),
            Markierung_Eigenes_Beispiel: yourExample,
            Bewertung_Teilaspekt1: partAspect1,
            Bewertung_Teilaspekt2: partAspect2,
          }
        : type === "SN_g2"
        ? {
            SN_g2_4: exampleEvaluation?.toString(),
            Markierung_Eigenes_Beispiel: yourExample,
            Bewertung_Teilaspekt1: partAspect1,
            Bewertung_Teilaspekt2: partAspect2,
            Bewertung_Teilaspekt3: partAspect3,
          }
        : type === "Konsens_g2"
        ? {
            Konsens_g2_3: exampleEvaluation?.toString(),
            Markierung_Eigenes_Beispiel: yourExample,
            Bewertung_Teilaspekt1: partAspect1,
            Bewertung_Teilaspekt2: partAspect2,
          }
        : type === "Konsistenz_g2"
        ? {
            Konsistenz_g2_5: exampleEvaluation?.toString(),
            Markierung_Eigenes_Beispiel: yourExample,
            Bewertung_Teilaspekt1: partAspect1,
            Bewertung_Teilaspekt2: partAspect2,
            Bewertung_Teilaspekt3: partAspect3,
          }
        : type === "Distinktheit_g2"
        ? {
            Distinktheit_g2_4: exampleEvaluation?.toString(),
            Markierung_Eigenes_Beispiel: yourExample,
            Bewertung_Teilaspekt1: partAspect1,
            Bewertung_Teilaspekt2: partAspect2,
          }
        : type === "FA_g2"
        ? {
            FA_g2_5: exampleEvaluation?.toString(),
            Markierung_Eigenes_Beispiel: yourExample,
            Bewertung_Teilaspekt1: partAspect1,
            Bewertung_Teilaspekt2: partAspect2,
            Bewertung_Teilaspekt3: partAspect3,
            Bewertung_Teilaspekt4: partAspect4,
          }
        : type === "SV_g2"
        ? {
            SV_g2_3: exampleEvaluation?.toString(),
            Markierung_Eigenes_Beispiel: yourExample,
            Bewertung_Teilaspekt1: partAspect1,
            Bewertung_Teilaspekt2: partAspect2,
          }
        : type === "GWG_g2"
        ? {
            GWG_g2_4: exampleEvaluation?.toString(),
            Markierung_Eigenes_Beispiel: yourExample,
            Bewertung_Teilaspekt1: partAspect1,
            Bewertung_Teilaspekt2: partAspect2,
            Bewertung_Teilaspekt3: partAspect3,
          }
        : null;

    if (
      inputValidationOff ||
      (((partAspects?.length === 4 &&
        partAspect1 !== 90 &&
        partAspect2 !== 90 &&
        partAspect3 !== 90 &&
        partAspect4 !== 90) ||
        (partAspects?.length === 3 &&
          partAspect1 !== 90 &&
          partAspect2 !== 90 &&
          partAspect3 !== 90) ||
        (partAspects?.length === 2 &&
          partAspect1 !== 90 &&
          partAspect2 !== 90)) &&
        yourExample?.find(
          (word) =>
            word.colour === "#72E772" ||
            word.colour === "#0099FF" ||
            word.colour === "#0099FF" ||
            word.colour === "#f3870c"
        ) &&
        exampleEvaluation !== 90)
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
          <div className="Slide-text-row">
            <div className="Slide-text-m-idea1">
              {`Markiere bitte die Stellen in deinem Beispiel, an denen die rechts dargestellten Teilaspekte der Definition des ${
                header?.split(" ")[0]
              }s ${header?.split(" ")[1]}
                    veranschaulicht sind. Nutze für diese
                  Markierungen jeweils die Farben, mit denen die rechts
                  dargestellten Teilaspekte hinterlegt sind.`}
            </div>
          </div>
          <div className="Slide-left-right">
            <div>
              <div className="Slide-idea-units-text-container">
                <div className="Slide-text-m">Dein Beispiel:</div>
                <div className="Slide-text-coloured-words">
                  {yourExample &&
                    yourExample.map((yourExampleColourObject: ColourObject) => {
                      return (
                        <ColouredWord
                          wordColourObject={yourExampleColourObject}
                        />
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="Slide-left-right-rightSide">
              {partAspects && (
                <div>
                  {partAspects[0] && (
                    <button
                      className="Slide-button-highlight-text-green"
                      onClick={() => makeSelection("#72E772")}
                    >
                      {partAspects[0]}
                    </button>
                  )}
                  {partAspects[1] && (
                    <button
                      className="Slide-button-highlight-text-blue"
                      onClick={() => makeSelection("#0099FF")}
                    >
                      {partAspects[1]}
                    </button>
                  )}
                  {partAspects[2] && (
                    <button
                      className="Slide-button-highlight-text-yellow"
                      onClick={() => makeSelection("#C5C500")}
                    >
                      {partAspects[2]}
                    </button>
                  )}
                  {partAspects[3] && (
                    <button
                      className="Slide-button-highlight-text-orange"
                      onClick={() => makeSelection("#f3870c")}
                    >
                      {partAspects[3]}
                    </button>
                  )}
                </div>
              )}
              <button
                className="Slide-button-highlight-text-white"
                onClick={() => clean()}
              >
                Markierungen zurücksetzen
              </button>
            </div>
          </div>
          <div className="Slide-idea-units-text-container">
            <div className="Slide-text-row">
              <div className="Slide-text-m">
                {`Bitte bewerte nun für jeden Teilaspekt des ${
                  header?.split(" ")[0]
                }s ${header?.split(" ")[1]}${
                  header?.split(" ")[2] ? ` ${header?.split(" ")[2]}` : ""
                }, ob diese Teilaspekte in deinem Beispiel ganz, teilweise oder gar nicht veranschaulicht wurden:`}
              </div>
            </div>
            {partAspects && (
              <div>
                {partAspects[0] && (
                  <div className="Slide-idea-units-part-aspects-row">
                    <div className="Slide-button-highlight-text-green">
                      {partAspects[0]}
                    </div>
                    <div>
                      <button
                        className={
                          partAspect1 === 1
                            ? "Slide-button-idea-units-active"
                            : "Slide-button-idea-units"
                        }
                        onClick={() =>
                          partAspect1 === 1
                            ? setPartAspect1(90)
                            : setPartAspect1(1)
                        }
                      >
                        ganz
                      </button>
                      <button
                        className={
                          partAspect1 === 0.5
                            ? "Slide-button-idea-units-active"
                            : "Slide-button-idea-units"
                        }
                        onClick={() =>
                          partAspect1 === 0.5
                            ? setPartAspect1(90)
                            : setPartAspect1(0.5)
                        }
                      >
                        teilweise
                      </button>
                      <button
                        className={
                          partAspect1 === 0
                            ? "Slide-button-idea-units-active"
                            : "Slide-button-idea-units"
                        }
                        onClick={() =>
                          partAspect1 === 0
                            ? setPartAspect1(90)
                            : setPartAspect1(0)
                        }
                      >
                        gar nicht
                      </button>
                    </div>
                  </div>
                )}
                {partAspects[1] && (
                  <div className="Slide-idea-units-part-aspects-row">
                    <div className="Slide-button-highlight-text-blue">
                      {partAspects[1]}
                    </div>
                    <div>
                      <button
                        className={
                          partAspect2 === 1
                            ? "Slide-button-idea-units-active"
                            : "Slide-button-idea-units"
                        }
                        onClick={() =>
                          partAspect2 === 1
                            ? setPartAspect2(90)
                            : setPartAspect2(1)
                        }
                      >
                        ganz
                      </button>
                      <button
                        className={
                          partAspect2 === 0.5
                            ? "Slide-button-idea-units-active"
                            : "Slide-button-idea-units"
                        }
                        onClick={() =>
                          partAspect2 === 0.5
                            ? setPartAspect2(90)
                            : setPartAspect2(0.5)
                        }
                      >
                        teilweise
                      </button>
                      <button
                        className={
                          partAspect2 === 0
                            ? "Slide-button-idea-units-active"
                            : "Slide-button-idea-units"
                        }
                        onClick={() =>
                          partAspect2 === 0
                            ? setPartAspect2(90)
                            : setPartAspect2(0)
                        }
                      >
                        gar nicht
                      </button>
                    </div>
                  </div>
                )}
                {partAspects[2] && (
                  <div className="Slide-idea-units-part-aspects-row">
                    <div className="Slide-button-highlight-text-yellow">
                      {partAspects[2]}
                    </div>
                    <div>
                      <button
                        className={
                          partAspect3 === 1
                            ? "Slide-button-idea-units-active"
                            : "Slide-button-idea-units"
                        }
                        onClick={() =>
                          partAspect3 === 1
                            ? setPartAspect3(90)
                            : setPartAspect3(1)
                        }
                      >
                        ganz
                      </button>
                      <button
                        className={
                          partAspect3 === 0.5
                            ? "Slide-button-idea-units-active"
                            : "Slide-button-idea-units"
                        }
                        onClick={() =>
                          partAspect3 === 0.5
                            ? setPartAspect3(90)
                            : setPartAspect3(0.5)
                        }
                      >
                        teilweise
                      </button>
                      <button
                        className={
                          partAspect3 === 0
                            ? "Slide-button-idea-units-active"
                            : "Slide-button-idea-units"
                        }
                        onClick={() =>
                          partAspect3 === 0
                            ? setPartAspect3(90)
                            : setPartAspect3(0)
                        }
                      >
                        gar nicht
                      </button>
                    </div>
                  </div>
                )}
                {partAspects[3] && (
                  <div className="Slide-idea-units-part-aspects-row">
                    <div className="Slide-button-highlight-text-orange">
                      {partAspects[3]}
                    </div>
                    <div>
                      <button
                        className={
                          partAspect4 === 1
                            ? "Slide-button-idea-units-active"
                            : "Slide-button-idea-units"
                        }
                        onClick={() =>
                          partAspect4 === 1
                            ? setPartAspect4(90)
                            : setPartAspect4(1)
                        }
                      >
                        ganz
                      </button>
                      <button
                        className={
                          partAspect4 === 0.5
                            ? "Slide-button-idea-units-active"
                            : "Slide-button-idea-units"
                        }
                        onClick={() =>
                          partAspect4 === 0.5
                            ? setPartAspect4(90)
                            : setPartAspect4(0.5)
                        }
                      >
                        teilweise
                      </button>
                      <button
                        className={
                          partAspect4 === 0
                            ? "Slide-button-idea-units-active"
                            : "Slide-button-idea-units"
                        }
                        onClick={() =>
                          partAspect4 === 0
                            ? setPartAspect4(90)
                            : setPartAspect4(0)
                        }
                      >
                        gar nicht
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="Slide-idea-units-text-container">
            <div className="Slide-text-m">
              Wenn die Gesamtqualität Deines Beispiels bewertet werden müsste,
              was denkst Du, würde es erhalten:
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
