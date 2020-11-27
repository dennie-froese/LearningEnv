import React, { useState } from "react";
import { useSlidesDispatch } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";

interface Props {
  question: string;
  questionNumber: number;
  type: string;
  header: string | undefined;
}

function QuestionTextInputWithHeader({
  question,
  questionNumber,
  type,
  header,
}: Props) {
  const [input, setInput] = useState<undefined | string>(undefined);
  const dispatch = useSlidesDispatch();
  const { launchTime, restart } = useTimer();

  const finish = () => {
    const obj =
      type === "Beispiel_Attribution0"
        ? { example_Attribution: input }
        : type === "Beispiel_Konsens0"
        ? { example_Konsens: input }
        : type === "Beispiel_Konsistenz0"
        ? { example_Konsistenz: input }
        : type === "Beispiel_Distinktheit0"
        ? { example_Distinktheit: input }
        : type === "Beispiel_FA0"
        ? { example_FA: input }
        : type === "Beispiel_SV0"
        ? { example_SV: input }
        : type === "Beispiel_GWG0"
        ? { example_GWG: input }
        : null;
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
  };

  return (
    <div className="Slide">
      <div className="Slide-container">
        <div className="Slide-intro-main">
          <p>{header}</p>
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

export default QuestionTextInputWithHeader;
