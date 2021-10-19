import React, { useEffect, useState } from "react";
import { inputValidationOff } from "../../App";
import { useSlidesDispatch, useSlidesState } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";
import { Study } from "../SlideTimer";

interface Props {
  questionNumber: number;
  type: string;
}

function QuestionTextInputCorrection({ questionNumber, type }: Props) {
  const context = useSlidesState();
  const [input, setInput] = useState<string>(
    context?.answers?.Abstract_Schreiben_Timer?.Text_Attribution || ""
  );

  const dispatch = useSlidesDispatch();
  const { launchTime, restart } = useTimer();

  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(10);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
          finish();
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const finish = () => {
    dispatch &&
      launchTime &&
      dispatch({
        type: "submit_slide",
        payload: {
          type: type,
          answer: { zeit: launchTime - Date.now(), Text_Attribution: input },
        },
      });
    restart();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="Slide">
      <div className="Slide-container">
        <div className="Slide-header">
          <div className="Slide-text-l">
            Timer: {minutes}:{seconds >= 10 ? seconds : `0${seconds}`}
          </div>
          <div className="Slide-text-l">
            {"\n\n"}
            Hier siehst Du Dein eben verfasstes Abstract und die ausgewählten
            Beispiele. Versuche nun, Dein Abstract auf Basis dessen, was du aus
            dem Beispiel gelernt hast, nun noch zu verbessern. Du hast dafür XX
            Minuten Zeit.
          </div>
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
            <div>Welche 2 Beispiele sollen hier angezeigt werden?</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionTextInputCorrection;
