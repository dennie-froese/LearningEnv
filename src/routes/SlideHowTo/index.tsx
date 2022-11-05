import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import ColouredWord, { ColourObject } from "../../components/ColouredWord";
import useHighlightableText from "../../hooks/useHighlightableText";
import { useSlidesDispatch } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";

interface Props {
  slideText: string;
}

function SlideHowTo({ slideText }: Props) {
  const [error, setError] = useState("");
  const dispatch = useSlidesDispatch();
  const { launchTime, restart } = useTimer();

  const initialText1: string =
    "Dies ist Beispieltext 1. Markiere diesen mit den Farben, die du rechts in den Feldern auswählen kannst.";
  const initialText2: string =
    "Dies ist Beispieltext 2. Markiere diesen mit den Farben, die du rechts in den Feldern auswählen kannst.";

  const {
    expertExamplesColourObjectArray: example1,
    makeSelection: makeSelection1,
  } = useHighlightableText(initialText1, "1");

  const {
    expertExamplesColourObjectArray: example2,
    makeSelection: makeSelection2,
  } = useHighlightableText(initialText2, "2");

  function fireOff(colour: string) {
    let selectionGroup = (window.getSelection()?.getRangeAt(0)?.startContainer
      ?.parentNode as HTMLElement)?.id.split("+")[1];
    switch (selectionGroup) {
      case "1": {
        makeSelection1(colour);
        selectionGroup = "";
        break;
      }
      case "2": {
        makeSelection2(colour);
        selectionGroup = "";
        break;
      }
      case "3": {
        break;
      }
      default: {
        break;
      }
    }
  }

  function clean() {
    makeSelection1("white");
    makeSelection2("white");
  }

  const resetValues = () => {
    // setExampleEvaluation(90);
  };

  const finish = () => {
    if (
      example1?.find(
        (word) =>
          word.colour === "#72E772" ||
          word.colour === "#0099FF" ||
          word.colour === "#C5C500"
      ) ||
      example2?.find(
        (word) =>
          word.colour === "#72E772" ||
          word.colour === "#0099FF" ||
          word.colour === "#C5C500"
      )
    ) {
      dispatch &&
        launchTime &&
        dispatch({
          type: "submit_slide",
          payload: {
            type: "Anleitung",
            answer: { zeit: launchTime - Date.now() },
          },
        });
      restart();
      resetValues();
      setError("");
    } else {
      setError(
        "Bitte markiere mindestens einen Teil eines Beispiels in mindestens einer Farbe."
      );
    }
  };

  return (
    <div className="Slide">
      <div className="Slide-container">
        <div className="Slide-idea-units-header">
          <p>Anleitung: Farbliches Markieren im Text</p>
        </div>
        <div className="Slide-idea-units-main">
          <div className="Slide-left-right">
            <div>
              <div className="Slide-text-m">{slideText}</div>

              <div className="Slide-idea-units-text-container">
                <div className="Slide-text-m">Beispiel 1:</div>
                <div className="Slide-text-coloured-words">
                  {example1 &&
                    example1.map((example1ColourObject: ColourObject) => {
                      return (
                        <ColouredWord wordColourObject={example1ColourObject} />
                      );
                    })}
                </div>
                <div className="Slide-text-m">Beispiel 2:</div>

                <div className="Slide-text-coloured-words">
                  {example2 &&
                    example2.map((example2ColourObject: ColourObject) => {
                      return (
                        <ColouredWord wordColourObject={example2ColourObject} />
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="Slide-left-right-rightSide">
              <div>
                <div className="Slide-text-m">
                  Farbliche Buttons (Beispiel):
                </div>
                <button
                  className="Slide-button-highlight-text-green"
                  onClick={() => fireOff("#72E772")}
                >
                  Button 1
                </button>
                <button
                  className="Slide-button-highlight-text-blue"
                  onClick={() => fireOff("#0099FF")}
                >
                  Button 2
                </button>

                <button
                  className="Slide-button-highlight-text-yellow"
                  onClick={() => fireOff("#C5C500")}
                >
                  Button 3
                </button>
                <button
                  className="Slide-button-highlight-text-white"
                  onClick={() => clean()}
                >
                  Markierungen zurücksetzen
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="Slide-nav-how-to">
          <div className="Slide-text-m">
            Wenn du alles verstanden hast, klicke auf „weiter“.
          </div>
          <div className="Slide-nav-how-to-right">
            <p className="Error-text" style={{ paddingRight: 20 }}>
              {error}
            </p>
            <button className="Slide-button" onClick={finish}>
              Weiter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideHowTo;
