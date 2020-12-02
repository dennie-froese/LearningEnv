import React, { useState } from "react";
import useTimer from "./../../hooks/useTimer";
import { useSlidesDispatch } from "../../hooks/useSlides";

interface Props {
  questionNumber: number;
  question: string;
  type: string;
}

function QuestionRange({ questionNumber, question, type }: Props) {
  const [value, setValue] = useState<undefined | number>(undefined);
  const dispatch = useSlidesDispatch();
  const { launchTime, restart } = useTimer();
  const checkboxes: JSX.Element[] = [];
  const range = 7;
  const from =
    type.includes("1") || type.includes("3") ? "Sehr leicht" : "Sehr niedrig";
  const to =
    type.includes("1") || type.includes("3") ? "Sehr schwer" : "Sehr hoch";

  for (var i = 1; i < range + 1; i++) {
    const v = i;
    checkboxes.push(
      <div key={v.toString()}>
        <input
          type="checkbox"
          checked={value === v ? true : false}
          onClick={() => (value === v ? setValue(undefined) : setValue(v))}
          onChange={() => null}
        />
      </div>
    );
  }
  const finish = () => {
    const obj =
      type === "Beispiel_Attribution1"
        ? { Ausdenken_Attribution1: value?.toString() }
        : type === "Beispiel_Attribution2"
        ? { Ausdenken_Attribution2: value?.toString() }
        : type === "Beispiel_Attribution3"
        ? { Ausdenken_Attribution3: value?.toString() }
        : type === "Beispiel_Attribution4"
        ? { Ausdenken_Attribution4: value?.toString() }
        : type === "Beispiel_SN1"
        ? { Ausdenken_SN1: value?.toString() }
        : type === "Beispiel_SN2"
        ? { Ausdenken_SN2: value?.toString() }
        : type === "Beispiel_SN3"
        ? { Ausdenken_SN3: value?.toString() }
        : type === "Beispiel_SN4"
        ? { Ausdenken_SN4: value?.toString() }
        : type === "Beispiel_Konsens1"
        ? { Ausdenken_Konsens1: value?.toString() }
        : type === "Beispiel_Konsens2"
        ? { Ausdenken_Konsens2: value?.toString() }
        : type === "Beispiel_Konsens3"
        ? { Ausdenken_Konsens3: value?.toString() }
        : type === "Beispiel_Konsens4"
        ? { Ausdenken_Konsens4: value?.toString() }
        : type === "Beispiel_Konsistenz1"
        ? { Ausdenken_Konsistenz1: value?.toString() }
        : type === "Beispiel_Konsistenz2"
        ? { Ausdenken_Konsistenz2: value?.toString() }
        : type === "Beispiel_Konsistenz3"
        ? { Ausdenken_Konsistenz3: value?.toString() }
        : type === "Beispiel_Konsistenz4"
        ? { Ausdenken_Konsistenz4: value?.toString() }
        : type === "Beispiel_Distinktheit1"
        ? { Ausdenken_Distinktheit1: value?.toString() }
        : type === "Beispiel_Distinktheit2"
        ? { Ausdenken_Distinktheit2: value?.toString() }
        : type === "Beispiel_Distinktheit3"
        ? { Ausdenken_Distinktheit3: value?.toString() }
        : type === "Beispiel_Distinktheit4"
        ? { Ausdenken_Distinktheit4: value?.toString() }
        : type === "Beispiel_FA1"
        ? { Ausdenken_FA1: value?.toString() }
        : type === "Beispiel_FA2"
        ? { Ausdenken_FA2: value?.toString() }
        : type === "Beispiel_FA3"
        ? { Ausdenken_FA3: value?.toString() }
        : type === "Beispiel_FA4"
        ? { Ausdenken_FA4: value?.toString() }
        : type === "Beispiel_SV1"
        ? { Ausdenken_SV1: value?.toString() }
        : type === "Beispiel_SV2"
        ? { Ausdenken_SV2: value?.toString() }
        : type === "Beispiel_SV3"
        ? { Ausdenken_SV3: value?.toString() }
        : type === "Beispiel_SV4"
        ? { Ausdenken_SV4: value?.toString() }
        : type === "Beispiel_GWG1"
        ? { Ausdenken_GWG1: value?.toString() }
        : type === "Beispiel_GWG2"
        ? { Ausdenken_GWG2: value?.toString() }
        : type === "Beispiel_GWG3"
        ? { Ausdenken_GWG3: value?.toString() }
        : type === "Beispiel_GWG4"
        ? { Ausdenken_GWG4: value?.toString() }
        : null;
    setValue(undefined);
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
          <button className="Slide-button" onClick={finish}>
            Weiter
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionRange;
