import React from "react";
import { Link } from "react-router-dom";

function Question() {
  return (
    <div className="Question">
      <div className="Question-container">
        <div className="Question-header">
          <p>Question 1:</p>
          <p>How are you?</p>
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

export default Question;
