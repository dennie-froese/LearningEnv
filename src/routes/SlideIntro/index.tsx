import React from "react";
import { useSlidesDispatch } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";

interface Props {
  slideText: string;
  slideNumber: number;
  type: string;
}

function SlideIntro({ slideText, slideNumber, type }: Props) {
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
          <p>This an intro slide</p>
          <p className="Slide-text">{slideText}</p>
        </div>
        <div className="Slide-nav">
          <button className="Slide-button" onClick={finish}>
            Next question
          </button>
        </div>
      </div>
    </div>
  );
}

export default SlideIntro;
