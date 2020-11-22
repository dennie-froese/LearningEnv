import React, { useEffect } from "react";
import QuestionTextInput from "../QuestionTextInput";
import QuestionRange from "../QuestionRange";
import { SlideInterface } from "../../slides";
import { Prompt, Route } from "react-router-dom";
import SlideIntro from "../SlideIntro";
import Finish from "../Finish";

function Slide(slide: SlideInterface) {
  useEffect(() => {
    window.onbeforeunload = () => true;
  }, []);
  return (
    <Route path="/slides">
      <Prompt
        message={
          "Are you sure you want to leave this page? All your progress would be lost."
        }
      />
      {slide.slideType === "textInput" ? (
        <QuestionTextInput
          question={slide.slideText}
          questionNumber={slide.id}
          type={slide.slideType}
        />
      ) : slide.slideType === "range" ? (
        <QuestionRange
          question={slide.slideText}
          questionNumber={slide.id}
          rangeMax={slide.additionalInfo}
          type={slide.slideType}
        />
      ) : slide.slideType === "intro" ? (
        <SlideIntro
          slideText={slide.slideText}
          slideNumber={slide.id}
          type={slide.slideType}
        />
      ) : (
        <Finish
          type={slide.slideType}
          slideText={slide.slideText}
          slideNumber={slide.id}
        />
      )}
    </Route>
  );
}

export default Slide;
