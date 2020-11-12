import React from "react";
import QuestionTextInput from "../QuestionTextInput";
import QuestionRange from "../QuestionRange";
import { SlideInterface } from "../../slides";
import { Route } from "react-router-dom";

function Slide(slide: SlideInterface) {
  return (
    <Route path={`/question${slide.id}`}>
      {slide.slideType === "textInput" ? (
        <QuestionTextInput
          questionNumber={slide.id}
          question={slide.slideText}
        />
      ) : (
        <QuestionRange
          question={slide.slideText}
          questionNumber={slide.id}
          rangeMax={slide.additionalInfo}
        />
      )}
    </Route>
  );
}

export default Slide;
