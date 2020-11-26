import React, { useState } from "react";
import useTimer from "./../../hooks/useTimer";
import { useSlidesDispatch } from "../../hooks/useSlides";

interface Props {
  questionNumber: number;
  question: string;
  rangeMax?: number;
  type: string;
}

function QuestionRange({
  questionNumber,
  question,
  rangeMax = 6,
  type,
}: Props) {
  const [value, setValue] = useState<undefined | number>(undefined);
  const dispatch = useSlidesDispatch();
  const { launchTime, restart } = useTimer();
  const checkboxes: JSX.Element[] = [];
  for (var i = 1; i < rangeMax + 1; i++) {
    const v = i;
    checkboxes.push(
      <div key={v.toString()}>
        <input
          type="checkbox"
          checked={value === v ? true : false}
          onClick={() => (value === v ? setValue(undefined) : setValue(v))}
          onChange={() => null}
        />
        <p>{v}</p>
      </div>
    );
  }
  const finish = () => {
    dispatch &&
      launchTime &&
      dispatch({
        type: "submit_slide",
        payload: {
          type: type,
          answer: {
            zeit: launchTime - Date.now(),
            Ausdenken_Attribution1: "1",
          },
        },
      });
  };

  return (
    <div className="Slide">
      <div className="Slide-container">
        <div className="Slide-header">
          <p>{`Question: ${questionNumber}`}</p>
          <p>{question}</p>
          <div className="Slide-range">{checkboxes}</div>
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
