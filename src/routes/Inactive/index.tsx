import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import ColouredWord, { ColourObject } from "../../components/ColouredWord";
import useHighlightableText from "../../hooks/useHighlightableText";

function Inactive() {
  const initialText1: string =
    "Beispiel 1: Die aktuelle Studie wurde bereits beendet. Die aktuelle Studie wurde bereits beendet. Die aktuelle Studie wurde bereits beendet. Die aktuelle Studie wurde bereits beendet.";
  const initialText2: string =
    "Beispiel 2: Das hier ist der zweite Text und der dient als Beispiel. Das hier ist der zweite Text und der dient als Beispiel. Das hier ist der zweite Text und der dient als Beispiel.";

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

  return (
    <div className="App">
      <header className="App-header">
        <div className="Slide-left-right">
          <div>
            <div className="Slide-idea-units-text-container">
              {example1 &&
                example1.map((example1ColourObject: ColourObject) => {
                  return (
                    <ColouredWord wordColourObject={example1ColourObject} />
                  );
                })}
            </div>

            <div className="Slide-idea-units-text-container">
              {example2 &&
                example2.map((example2ColourObject: ColourObject) => {
                  return (
                    <ColouredWord wordColourObject={example2ColourObject} />
                  );
                })}
            </div>
          </div>
          <div>
            <button
              className="Slide-button-highlight-text-green"
              onClick={() => fireOff("green")}
            >
              Make selection green
            </button>
            <button
              className="Slide-button-highlight-text-red"
              onClick={() => fireOff("red")}
            >
              Make selection red
            </button>
            <button
              className="Slide-button-highlight-text-white"
              onClick={() => clean()}
            >
              Reverse all
            </button>
          </div>
        </div>
        {/* <button className="Slide-button-highlight-text" onClick={resetGreen}>
          Reset green
        </button> */}
        {/* <p>
          Vielen Dank, dass Du dir die Zeit nimmst, um an dieser Studie
          teilzunehmen.
        </p> */}
        {/* <Link to="/login">
          <button className="App-button-welcome">
            Hier geht’s zur Anmeldung!
          </button>
        </Link> */}
      </header>
    </div>
  );
}

export default Inactive;
