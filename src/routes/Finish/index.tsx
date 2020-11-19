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
