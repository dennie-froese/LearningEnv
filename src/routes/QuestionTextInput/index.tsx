import React, { useState } from "react";
import { inputValidationOff } from "../../App";
import { useSlidesDispatch } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";

interface Props {
  question: string;
  questionNumber: number;
  type: string;
}

function QuestionTextInput({ question, questionNumber, type }: Props) {
  const [input, setInput] = useState<string>("");
  const dispatch = useSlidesDispatch();
  const { launchTime, restart } = useTimer();
  const [error, setError] = useState("");

  const finish = () => {
    if (input || inputValidationOff) {
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
      restart();
      setError("");
    } else {
      setError("Bitte überprüfe die Vollständigkeit deiner Angaben.");
    }
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
          <p className="Error-text" style={{ paddingRight: 20 }}>
            {error}
          </p>
          <button className="Slide-button" onClick={finish}>
            Weiter
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionTextInput;
