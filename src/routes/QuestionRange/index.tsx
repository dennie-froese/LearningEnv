import React, { useState } from "react";
import useTimer from "./../../hooks/useTimer";
import { useSlidesDispatch } from "../../hooks/useSlides";

interface Props {
  questionNumber: number;
  question: string;
  rangeMax?: number;
}

function QuestionRange({ questionNumber, question, rangeMax = 6 }: Props) {
  const [value, setValue] = useState<undefined | number>(undefined);
  const dispatch = useSlidesDispatch();
  const launchTime = useTimer();
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
    console.log(`${launchTime && (launchTime - Date.now()) / -1000} seconds`);
    dispatch && dispatch({ type: "submit_slide" });
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
            Next question
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionRange;
