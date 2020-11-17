import React from "react";
import { useSlidesDispatch } from "../../hooks/useSlides";

interface Props {
  slideText: string;
  slideNumber: number;
}

function SlideIntro({ slideText, slideNumber }: Props) {
  const dispatch = useSlidesDispatch();

  const finish = () => {
    dispatch && dispatch({ type: "submit_slide" });
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
