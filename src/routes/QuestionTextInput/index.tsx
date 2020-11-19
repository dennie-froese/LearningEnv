import React, { useState } from "react";
import { useSlidesDispatch } from "../../hooks/useSlides";

interface Props {
  question: string;
  questionNumber: number;
}

function QuestionTextInput({ question, questionNumber }: Props) {
  const [input, setInput] = useState<undefined | string>(undefined);
  const dispatch = useSlidesDispatch();

  const finish = () => {
    dispatch && dispatch({ type: "submit_slide" });
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
          <button className="Slide-button" onClick={finish}>
            Next question
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionTextInput;
