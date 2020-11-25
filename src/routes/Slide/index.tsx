import React, { useEffect } from "react";
import QuestionTextInput from "../QuestionTextInput";
import QuestionRange from "../QuestionRange";
import { SlideInterface } from "../../slides";
import { Prompt, Route } from "react-router-dom";
import SlideIntro from "../SlideIntro";
import Finish from "../Finish";
import SlideDemographics from "../SlideDemographics";

const typeOnlyInfo: number[] = [1, 2, 3, 4, 5];

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
      {slide.slideType === "demographisch" ? (
        <SlideDemographics
          slideText={slide.slideText}
          slideNumber={slide.id}
          type={slide.slideType}
        />
      ) : typeIntro.includes(slide.id) ? (
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
