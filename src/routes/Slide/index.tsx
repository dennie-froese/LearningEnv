import React, { useEffect } from "react";
import { SlideInterface } from "../../slides";
import { Prompt, Route } from "react-router-dom";
import SlideIntro from "../SlideIntro";
import Finish from "../Finish";
import SlideDemographics from "../SlideDemographics";
import SlideNachangaben from "../SlideNachangaben";
import QuestionTextInput from "../QuestionTextInput";

const typeIntro: number[] = [1, 2, 3, 4, 5, 7, 12];
const typeNachangaben: number[] = [8, 9, 10, 11];
const typeTextinput: number[] = [13, 14, 15, 16, 17, 18, 19, 20];

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
      ) : typeNachangaben.includes(slide.id) ? (
        <SlideNachangaben
          slideText={slide.slideText}
          slideNumber={slide.id}
          type={slide.slideType}
          nachangaben={slide.nachangaben}
        />
      ) : typeTextinput.includes(slide.id) ? (
        <QuestionTextInput
          question={slide.slideText}
          questionNumber={slide.id}
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
