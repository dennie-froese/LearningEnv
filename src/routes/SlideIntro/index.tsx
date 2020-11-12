import React from "react";
import { Link } from "react-router-dom";

interface Props {
  slideText: string;
  slideNumber: number;
}

function SlideIntro({ slideText, slideNumber }: Props) {
  return (
    <div className="Slide">
      <div className="Slide-container">
        <div className="Slide-header">
          <p>This an intro slide</p>
          <p className="Slide-text">{slideText}</p>
        </div>
        <div className="Slide-nav">
          <Link
            to={slideNumber === 3 ? "/finish" : `/question${slideNumber + 1}`}
          >
            <button className="Slide-button">
              {slideNumber === 4 ? "Finish the survey" : "Next question"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SlideIntro;
