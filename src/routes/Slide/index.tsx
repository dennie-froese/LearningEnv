import React from "react";
import QuestionTextInput from "../QuestionTextInput";
import QuestionRange from "../QuestionRange";
import { SlideInterface } from "../../slides";
import { Route } from "react-router-dom";
import SlideIntro from "../SlideIntro";
import { useSlidesState } from "../../hooks/useSlides";

function Slide(slide: SlideInterface) {
  const activeSlide = useSlidesState()?.activeSlide;
  if (slide.id === activeSlide) {
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
        ) : (
          <SlideIntro slideText={slide.slideText} slideNumber={slide.id} />
        )}
      </Route>
    );
  } else {
    return <div></div>;
  }
}

export default Slide;
