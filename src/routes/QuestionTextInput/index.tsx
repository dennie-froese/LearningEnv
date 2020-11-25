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
    const obj =
      type === "Konzept_Attribution"
        ? { Text_Attribution: input }
        : type === "Konzept_SN"
        ? { Text_SN: input }
        : type === "Konzept_Konsens"
        ? { Text_Konsens: input }
        : type === "Konzept_Konsistenz"
        ? { Text_Konsistenz: input }
        : type === "Konzept_Distinktheit"
        ? { Text_Distinktheit: input }
        : type === "Konzept_FA"
        ? { Text_FA: input }
        : type === "Konzept_SV"
        ? { Text_SV: input }
        : { Text_GWG: input };
    setInput("");
    dispatch &&
      launchTime &&
      dispatch({
        type: "submit_slide",
        payload: {
          type: type,
          answer: { zeit: launchTime - Date.now(), ...obj },
        },
      });
  };

  return (
    <div className="Slide">
      <div className="Slide-container">
        <div className="Slide-header">
          <p>{question}</p>
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
