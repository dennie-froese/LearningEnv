import React, { useState } from "react";
import { Link } from "react-router-dom";

function QuestionTextInput() {
  const [input, setInput] = useState<undefined | string>(undefined);

  return (
    <div className="Question">
      <div className="Question-container">
        <div className="Question-header">
          <p>Question 1:</p>
          <p>How are you?</p>
          <textarea
            className="Question-textinput-l"
            value={input}
            onChange={e => {
              setInput(e.target.value);
            }}
          />
        </div>
        <div className="Question-nav">
          <Link to="/questions">
            <button className="Question-button">Next question</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QuestionTextInput;
