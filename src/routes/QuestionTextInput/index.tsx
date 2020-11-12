import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  question: string;
  questionNumber: number;
}

function QuestionTextInput({ question, questionNumber }: Props) {
  const [input, setInput] = useState<undefined | string>(undefined);

  const finish = () => {
    if (questionNumber === 3) {
    }
  };

  return (
    <div className="Slide">
      <div className="Slide-container">
        <div className="Slide-header">
          <p>{`Question: ${questionNumber}`}</p>
          <p className="Slide-text">{question}</p>
        </div>
        <textarea
          autoCorrect="false"
          className="Slide-textinput-l"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <div className="Slide-nav">
          <Link
            to={
              questionNumber === 3
                ? "/finish"
                : `/question${questionNumber + 1}`
            }
          >
            <button className="Slide-button" onClick={finish}>
              {questionNumber === 3 ? "Finish the survey" : "Next question"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QuestionTextInput;
