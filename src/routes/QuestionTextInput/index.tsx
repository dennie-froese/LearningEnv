import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  question: string;
}

function QuestionTextInput({ question }: Props) {
  const [input, setInput] = useState<undefined | string>(undefined);

  return (
    <div className="Question">
      <div className="Question-container">
        <div className="Question-header">
          <p>Question 1:</p>
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
          <Link to="/questionRange">
            <button className="Question-button">Next question</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QuestionTextInput;
