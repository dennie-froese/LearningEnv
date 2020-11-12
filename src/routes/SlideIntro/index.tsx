import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  slideText: string;
  slideNumber: number;
}

function SlideIntro({ slideText, slideNumber }: Props) {
  const [input, setInput] = useState<undefined | string>(undefined);

  return (
    <div className="Question">
      <div className="Question-container">
        <div className="Question-header">
          <p>{`Question: ${slideNumber}`}</p>
          <p className="Question-text">{slideText}</p>
        </div>
        <textarea
          autoCorrect="false"
          className="Question-textinput-l"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <div className="Question-nav">
          <Link
            to={slideNumber === 3 ? "/finish" : `/question${slideNumber + 1}`}
          >
            <button className="Question-button">
              {slideNumber === 4 ? "Finish the survey" : "Next question"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SlideIntro;
