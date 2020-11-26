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
  const { launchTime, restart } = useTimer();

  const finish = () => {
    dispatch &&
      launchTime &&
      dispatch({
        type: "submit_slide",
        payload: { type: type, answer: { zeit: launchTime - Date.now() } },
      });
    restart();
  };
  return (
    <div className="Slide">
      <div className="Slide-container">
        <div className="Slide-intro-main">
          <div className="Slide-text-l">{slideText}</div>
        </div>
        <div className="Slide-nav">
          <button className="Slide-button" onClick={finish}>
            Weiter
          </button>
        </div>
      </div>
    </div>
  );
}

export default SlideIntro;
