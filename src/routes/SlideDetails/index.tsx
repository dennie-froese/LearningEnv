import React, { useEffect } from "react";
import { saveToDatabase } from "../../firebase/firebase";
import { useSlidesState } from "../../hooks/useSlides";

interface Props {
  slideText: string;
  slideNumber: number;
  type: string;
  header: string | undefined;
}

function SlideDetails({ slideText, slideNumber, type, header }: Props) {
  const context = useSlidesState();

  useEffect(() => {
    context?.user && saveToDatabase(context?.user, context?.answers);
  }, [context?.answers, context?.user]);

  return (
    <div className="Slide">
      <div className="Slide-container">
        <div className="Slide-intro-main">
          <p>{header}</p>
          <p className="Slide-text">{slideText}</p>
        </div>
      </div>
    </div>
  );
}

export default SlideDetails;
