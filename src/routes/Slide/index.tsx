import React, { useEffect } from "react";
import { SlideInterface } from "../../slides";
import { Prompt, Route } from "react-router-dom";
import SlideIntro from "../SlideIntro";
import SlideIntroWithHeader from "../SlideIntroWithHeader";
import Finish from "../Finish";
import SlideDemographics from "../SlideDemographics";
import SlideNachangaben from "../SlideNachangaben";
import QuestionTextInput from "../QuestionTextInput";
import SlideTimer from "../SlideTimer";
import QuestionTextInputWithHeader from "../QuestionTextInputWithHeader";
import QuestionRange from "../QuestionRange";

const typeIntro: number[] = [1, 2, 3, 4, 5, 7, 12, 21, 23, 32];
const typeIntroWithHeader: number[] = [24, 25, 26, 27, 28, 29, 30, 31];
const typeNachangaben: number[] = [8, 9, 10, 11];
const typeTextinput: number[] = [13, 14, 15, 16, 17, 18, 19, 20];
const typeTextinputWithHeader: number[] = [33, 43, 53, 63, 73, 83, 93, 103];
const typeRange: number[] = [
  34,
  35,
  41,
  42,
  44,
  45,
  51,
  52,
  54,
  55,
  61,
  62,
  64,
  65,
  71,
  72,
  74,
  75,
  81,
  82,
  84,
  85,
  91,
  92,
  94,
  95,
  101,
  102,
  104,
  105,
  111,
  112,
];

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
      ) : slide.slideType === "Text_Text" ? (
        <SlideTimer
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
      ) : typeIntroWithHeader.includes(slide.id) ? (
        <SlideIntroWithHeader
          slideText={slide.slideText}
          slideNumber={slide.id}
          type={slide.slideType}
          header={slide.header}
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
      ) : typeTextinputWithHeader.includes(slide.id) ? (
        <QuestionTextInputWithHeader
          question={slide.slideText}
          questionNumber={slide.id}
          type={slide.slideType}
          header={slide.header}
        />
      ) : typeRange.includes(slide.id) ? (
        <QuestionRange
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
