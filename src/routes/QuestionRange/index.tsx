import React, { useState } from "react";
import useTimer from "./../../hooks/useTimer";
import { Link } from "react-router-dom";

interface Props {
  questionNumber: number;
  question: string;
  rangeMax?: number;
}

function QuestionRange({ questionNumber, question, rangeMax = 6 }: Props) {
  const [value, setValue] = useState<undefined | number>(undefined);
  const launchTime = useTimer();
  const checkboxes: JSX.Element[] = [];
  for (var i = 1; i < rangeMax + 1; i++) {
    const v = i;
    checkboxes.push(
      <div>
        <input
          id={v.toString()}
          type="checkbox"
          checked={value === v ? true : false}
          onClick={() => (value === v ? setValue(undefined) : setValue(v))}
          onChange={() => null}
        />
        <p>{v}</p>
      </div>
    );
  }

  return (
    <div className="Question">
      <div className="Question-container">
        <div className="Question-header">
          <p>{`Question: ${questionNumber}`}</p>
          <p>{question}</p>
          <div className="Question-range">{checkboxes}</div>
        </div>
        <div className="Question-nav">
          {value ? (
            <Link to={`/question${questionNumber + 1}`}>
              <button
                className="Question-button"
                onClick={() =>
                  console.log(
                    `${launchTime && (launchTime - Date.now()) / -1000} seconds`
                  )
                }
              >
                Next question
              </button>
            </Link>
          ) : (
            <div>
              <button className="Question-button">Next question</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuestionRange;
