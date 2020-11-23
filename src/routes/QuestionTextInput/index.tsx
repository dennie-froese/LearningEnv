import React, { useState } from "react";
import { useSlidesDispatch } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";

interface Props {
  question: string;
  questionNumber: number;
  type: string;
}

function QuestionTextInput({ question, questionNumber, type }: Props) {
  const [input, setInput] = useState<undefined | string>(undefined);
  const dispatch = useSlidesDispatch();
  const launchTime = useTimer();

  const finish = () => {
    dispatch &&
      launchTime &&
      dispatch({
        type: "submit_slide",
        payload: { type: type, answer: { zeit: launchTime - Date.now() } },
      });
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
            Weiter
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionTextInput;
