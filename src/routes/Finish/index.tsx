import React from "react";
import { saveToDatabase } from "../../firebase/firebase";
import { useSlidesDispatch, useSlidesState } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";

interface Props {
  slideText: string;
  slideNumber: number;
  type: string;
}

function Finish({ slideText, slideNumber, type }: Props) {
  const context = useSlidesState();
  const dispatch = useSlidesDispatch();
  const { launchTime, restart } = useTimer();

  const finish = () => {
    dispatch &&
      launchTime &&
      dispatch({
        type: "submit_slide",
        payload: { type: type, answer: { zeit: launchTime - Date.now() } },
      });
    context?.user && saveToDatabase(context?.user, context?.answers);
  };

  return (
    <div className="App">
      <div className="App-container">
        <div className="App-header">
          <p className="Slide-text">{slideText}</p>
          <button className="App-button" onClick={finish}>
            Finish survey!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Finish;
