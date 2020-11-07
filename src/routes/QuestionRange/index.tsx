import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  questionNumber: number;
  question: string;
  rangeMax?: number;
}

function QuestionRange({ questionNumber, question, rangeMax = 6 }: Props) {
  const [value, setValue] = useState<undefined | number>(undefined);
  const checkboxes: JSX.Element[] = [];
  for (var i = 1; i < rangeMax + 1; i++) {
    const v = i;
    checkboxes.push(
      <div>
        <input
          type="checkbox"
          checked={value === v ? true : false}
          onClick={() => (value === v ? setValue(undefined) : setValue(v))}
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
              <button className="Question-button">Next question</button>
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
