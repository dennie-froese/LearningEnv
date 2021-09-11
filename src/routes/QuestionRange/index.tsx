import React, { useState } from "react";
import useTimer from "./../../hooks/useTimer";
import { useSlidesDispatch } from "../../hooks/useSlides";
import { inputValidationOff } from "../../App";

interface Props {
  questionNumber: number;
  question: string;
  type: string;
}

function QuestionRange({ questionNumber, question, type }: Props) {
  const [value, setValue] = useState<number>(0);
  const dispatch = useSlidesDispatch();
  const { launchTime, restart } = useTimer();
  const checkboxes: JSX.Element[] = [];
  const range = 7;
  const from = [
    58,
    63,
    68,
    71,
    74,
    77,
    80,
    83,
    87,
    90,
    93,
    96,
    99,
    102,
    108,
    112,
    116,
    120,
    124,
    128,
    131,
    135,
    138,
    141,
    144,
    147,
    150,
    154,
    157,
    160,
    163,
    166,
    169,
  ].includes(questionNumber)
    ? "Sehr leicht"
    : "Sehr niedrig";
  const to = [
    58,
    63,
    68,
    71,
    74,
    77,
    80,
    83,
    87,
    90,
    93,
    96,
    99,
    102,
    108,
    112,
    116,
    120,
    124,
    128,
    131,
    135,
    138,
    141,
    144,
    147,
    150,
    154,
    157,
    160,
    163,
    166,
    169,
  ].includes(questionNumber)
    ? "Sehr schwer"
    : "Sehr hoch";
  const [error, setError] = useState("");

  for (var i = 1; i < range + 1; i++) {
    const v = i;
    checkboxes.push(
      <div key={v.toString()}>
        <input
          type="checkbox"
          checked={value === v ? true : false}
          onClick={() => (value === v ? setValue(0) : setValue(v))}
          onChange={() => null}
        />
      </div>
    );
  }
  const finish = () => {
    if (value || inputValidationOff) {
      if ([109, 113, 117, 121, 125, 129].includes(questionNumber)) {
        const obj =
          type === "Beispiel_Attribution1"
            ? { Ausdenken_Attribution1: value?.toString() }
            : type === "Beispiel_Attribution2"
            ? { Ausdenken_Attribution2: value?.toString() }
            : type === "Beispiel_Attribution3"
            ? { Ausdenken_Attribution3: value?.toString() }
            : null;
        setValue(0);
        dispatch &&
          launchTime &&
          dispatch({
            type: "jump_to_slide",
            payload: {
              type,
              newSlide: 133,
              answer: { zeit: launchTime - Date.now() },
            },
          });
        restart();

        setError("");
      } else {
        const obj =
          type === "Beispiel_Attribution1"
            ? { Ausdenken_Attribution1: value?.toString() }
            : type === "Beispiel_Attribution2"
            ? { Ausdenken_Attribution2: value?.toString() }
            : type === "Beispiel_Attribution3"
            ? { Ausdenken_Attribution3: value?.toString() }
            : null;
        setValue(0);
        dispatch &&
          launchTime &&
          dispatch({
            type: "submit_slide",
            payload: {
              type: type,
              answer: {
                zeit: launchTime - Date.now(),
                ...obj,
              },
            },
          });
        restart();

        setError("");
      }
    } else {
      setError("Bitte überprüfe die Vollständigkeit deiner Angaben.");
    }
  };

  return (
    <div className="Slide">
      <div className="Slide-container">
        <div className="Slide-header">
          <p>{question}</p>
        </div>
        <div className="Slide-main">
          <div className="Slide-range-row-boxes">
            <p>{from}</p>
            <div className="Slide-range">{checkboxes}</div>
            <p>{to}</p>
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

export default QuestionRange;
