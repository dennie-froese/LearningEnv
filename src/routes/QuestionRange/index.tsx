import React, { useState } from "react";
import { Link } from "react-router-dom";

function QuestionRange() {
  const [value, setValue] = useState<undefined | number>(undefined);
  return (
    <div className="Question">
      <div className="Question-container">
        <div className="Question-header">
          <p>Question 1:</p>
          <p>Please choose from 1 to 6</p>
          <div className="Question-range">
            <div>
              <input
                type="checkbox"
                checked={value === 1 ? true : false}
                onClick={() =>
                  value === 1 ? setValue(undefined) : setValue(1)
                }
              />
              <p>1</p>
            </div>
            <div>
              <input
                type="checkbox"
                checked={value === 2 ? true : false}
                onClick={() =>
                  value === 2 ? setValue(undefined) : setValue(2)
                }
              />
              <p>2</p>
            </div>
            <div>
              <input
                type="checkbox"
                checked={value === 3 ? true : false}
                onClick={() =>
                  value === 3 ? setValue(undefined) : setValue(3)
                }
              />
              <p>3</p>
            </div>
            <div>
              <input
                type="checkbox"
                checked={value === 4 ? true : false}
                onClick={() =>
                  value === 4 ? setValue(undefined) : setValue(4)
                }
              />
              <p>4</p>
            </div>
            <div>
              <input
                type="checkbox"
                checked={value === 5 ? true : false}
                onClick={() =>
                  value === 5 ? setValue(undefined) : setValue(5)
                }
              />
              <p>5</p>
            </div>
            <div>
              <input
                type="checkbox"
                checked={value === 6 ? true : false}
                onClick={() =>
                  value === 6 ? setValue(undefined) : setValue(6)
                }
              />
              <p>6</p>
            </div>
          </div>
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

export default QuestionRange;
