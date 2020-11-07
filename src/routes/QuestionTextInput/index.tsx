import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  question: string;
  questionNumber: number;
}

function QuestionTextInput({ question, questionNumber }: Props) {
  const [input, setInput] = useState<undefined | string>(undefined);

  return (
    <div className="Question">
      <div className="Question-container">
        <div className="Question-header">
          <p>{`Question: ${questionNumber}`}</p>
          <p className="Question-text">{question}</p>
        </div>
        <textarea
          autoCorrect="false"
          className="Question-textinput-l"
          value={input}
          onChange={e => {
            setInput(e.target.value);
          }}
        />
        <div className="Question-nav">
          <Link to={`/question${questionNumber + 1}`}>
            <button className="Question-button">Next question</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QuestionTextInput;
