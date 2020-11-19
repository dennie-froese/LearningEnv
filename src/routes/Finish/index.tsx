import React from "react";
import { useSlidesDispatch } from "../../hooks/useSlides";

interface Props {
  slideText: string;
  slideNumber: number;
}

function Finish({ slideText, slideNumber }: Props) {
  const dispatch = useSlidesDispatch();

  const finish = () => {
    dispatch && dispatch({ type: "submit_slide" });
  };

  return (
    <div className="Slide">
      <div className="Slide-container">
        <div className="Slide-header">
          <p className="Slide-text">{slideText}</p>
          <button className="Slide-button" onClick={finish}>
            Finish survey!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Finish;
