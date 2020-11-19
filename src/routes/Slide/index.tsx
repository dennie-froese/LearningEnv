import React from "react";
import QuestionTextInput from "../QuestionTextInput";
import QuestionRange from "../QuestionRange";
import { SlideInterface } from "../../slides";
import { Route } from "react-router-dom";
import SlideIntro from "../SlideIntro";
import Finish from "../Finish";

function Slide(slide: SlideInterface) {
  return (
    <Route path="/slides">
      {slide.slideType === "textInput" ? (
        <QuestionTextInput
          question={slide.slideText}
          questionNumber={slide.id}
        />
      ) : slide.slideType === "range" ? (
        <QuestionRange
          question={slide.slideText}
          questionNumber={slide.id}
          rangeMax={slide.additionalInfo}
        />
      ) : slide.slideType === "intro" ? (
        <SlideIntro slideText={slide.slideText} slideNumber={slide.id} />
      ) : (
        <Finish slideText={slide.slideText} slideNumber={slide.id} />
      )}
    </Route>
  );
}

export default Slide;
