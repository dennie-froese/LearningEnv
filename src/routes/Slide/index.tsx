import React, { useEffect } from "react";
import { SlideInterface } from "../../slides";
import { Prompt, Route } from "react-router-dom";
import SlideIntro from "../SlideIntro";
import SlideCriteriaIntro from "../SlideCriteriaIntro";
import SlideIntroWithHeader from "../SlideIntroWithHeader";
import Finish from "../Finish";
import SlideDemographics from "../SlideDemographics";
import SlideNachangaben from "../SlideNachangaben";
import SlideTimer from "../SlideTimer";
import QuestionTextInputWithHeader from "../QuestionTextInputWithHeader";
import QuestionRange from "../QuestionRange";
import SlideIdeaUnitsTypeOne from "../SlideIdeaUnitsTypeOne";
import SlideIdeaUnitsTypeTwo from "../SlideIdeaUnitsTypeTwo";
import SlideIdeaUnitsTypeThree from "../SlideIdeaUnitsTypeThree";
import SlideIdeaUnitsTypeFour from "../SlideIdeaUnitsTypeFour";
import SlideDetails from "../SlideDetails";
import { useSlidesState } from "../../hooks/useSlides";
import SlideFun from "../SlideFun";
import SlideTable from "../SlideTable";
import SlideCriteriaRightWrong from "../SlideCriteriaRightWrong";
import SlideCriteriaAllGreenRed from "../SlideCriteriaAllGreenRed";

const typeIntro: number[] = [1, 2, 3, 4, 5, 8, 11, 19, 20, 32, 34, 40, 47, 51];
const typeCriteriaIntro: number[] = [
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  21,
  33,
  35,
  36,
  37,
  41,
  42,
  43,
  44,
  48,
];

const typeCriteriaRightWrong: number[] = [38, 39];
const typeCriteriaAllGreenRed: number[] = [45, 46, 49, 50];

const typeAbstractTable: number[] = [22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const typeIntroWithHeader: number[] = [];
const typeNachangaben: number[] = [9, 10];
const typeTextinputWithHeader: number[] = [53, 63, 73, 83, 93, 103];
const typeRange: number[] = [];
const ideaUnitsTypeOne: number[] = [];
const ideaUnitsTypeTwo: number[] = [];
const ideaUnitsTypeThree: number[] = [];
const ideaUnitsTypeFour: number[] = [];

function Slide(slide: SlideInterface) {
  const context = useSlidesState();
  useEffect(() => {
    window.onbeforeunload = () => (context?.authenticated ? true : null);
  }, [context?.authenticated]);

  return (
    <Route path="/slides">
      <Prompt
        when={context?.authenticated}
        message={
          "Bist Du sicher, dass du die Seite verlassen möchtest? Alle bisher gespeicherten Daten gehen verloren."
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
      ) : slide.slideType === "Ende" ? (
        <SlideDetails
          slideText={slide.slideText}
          slideNumber={slide.id}
          type={slide.slideType}
          header={slide.header}
        />
      ) : slide.slideType === "Spass" ? (
        <SlideFun
          slideText={slide.slideText}
          slideNumber={slide.id}
          type={slide.slideType}
          header={slide.header}
        />
      ) : typeCriteriaRightWrong.includes(slide.id) ? (
        <SlideCriteriaRightWrong
          slideText={slide.slideText}
          slideNumber={slide.id}
          type={slide.slideType}
          criteriaIntroUnits={slide.criteriaIntroUnits}
        />
      ) : typeCriteriaAllGreenRed.includes(slide.id) ? (
        <SlideCriteriaAllGreenRed
          slideText={slide.slideText}
          slideNumber={slide.id}
          type={slide.slideType}
          criteriaIntroUnits={slide.criteriaIntroUnits}
          criteriaExamples={slide.criteriaExamples}
        />
      ) : typeIntro.includes(slide.id) ? (
        <SlideIntro
          slideText={slide.slideText}
          slideNumber={slide.id}
          type={slide.slideType}
        />
      ) : typeCriteriaIntro.includes(slide.id) ? (
        <SlideCriteriaIntro
          slideText={slide.slideText}
          slideNumber={slide.id}
          type={slide.slideType}
          criteriaIntroUnits={slide.criteriaIntroUnits}
        />
      ) : typeAbstractTable.includes(slide.id) ? (
        <SlideTable
          slideText={slide.slideText}
          slideNumber={slide.id}
          type={slide.slideType}
          tableRows={slide.tableRows}
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
          slideNumber={slide.id}
          type={slide.slideType}
          nachangaben={slide.nachangaben}
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
      ) : ideaUnitsTypeOne.includes(slide.id) ? (
        <SlideIdeaUnitsTypeOne
          slideText={slide.slideText}
          slideNumber={slide.id}
          type={slide.slideType}
          header={slide.header}
          negativeExamples={slide.negativeExamples}
          expertExamples={slide.expertExamples}
        />
      ) : ideaUnitsTypeTwo.includes(slide.id) ? (
        <SlideIdeaUnitsTypeTwo
          slideText={slide.slideText}
          slideNumber={slide.id}
          type={slide.slideType}
          header={slide.header}
          negativeExamples={slide.negativeExamples}
        />
      ) : ideaUnitsTypeThree.includes(slide.id) ? (
        <SlideIdeaUnitsTypeThree
          slideText={slide.slideText}
          slideNumber={slide.id}
          type={slide.slideType}
          header={slide.header}
          expertExamples={slide.expertExamples}
        />
      ) : ideaUnitsTypeFour.includes(slide.id) ? (
        <SlideIdeaUnitsTypeFour
          slideText={slide.slideText}
          slideNumber={slide.id}
          type={slide.slideType}
          header={slide.header}
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
