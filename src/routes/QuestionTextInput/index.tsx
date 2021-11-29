import React, { useContext, useEffect, useState } from "react";
import useCountdown from "../../hooks/useCountdown";
import { useSlidesDispatch } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";
import { Study } from "../SlideTimer";

interface Props {
  questionNumber: number;
  type: string;
}

function QuestionTextInput({ questionNumber, type }: Props) {
  const [input, setInput] = useState<string>("");
  const dispatch = useSlidesDispatch();
  const { launchTime, restart } = useTimer();

  const { counter, startCountdown } = useCountdown(1000);

  useEffect(() => {
    startCountdown(600);
  }, [startCountdown]);

  function wordCount(str: string) {
    var m = str.match(/[^\s]+/g);
    return m ? m.length : 0;
  }

  useEffect(() => {
    const finish = () => {
      dispatch &&
        launchTime &&
        dispatch({
          type: "submit_slide",
          payload: {
            type: type,
            answer: { zeit: -600000, antwort: input },
          },
        });
      restart();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (counter === 0) {
      finish();
    }
  }, [counter, dispatch, input, launchTime, restart, type]);

  function secsToTime(duration: number) {
    const seconds = duration % 60;
    const minutes = Math.floor(duration / 60);

    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  }

  return (
    <div className="Slide">
      <div className="Slide-container">
        <div className="Slide-header">
          <div className="Slide-text-l">Anzahl Wörter: {wordCount(input)}</div>
          <div className="Slide-text-l">Timer: {secsToTime(counter)}</div>
        </div>
        <div className="Slide-textInput-container">
          <textarea
            autoCorrect="false"
            className="Slide-textinput-l"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <div className="Slide-textInput-container-study">
            <Study />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionTextInput;
