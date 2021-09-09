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
import SlideTablePNG from "../SlideTablePNG";
import QuestionTextInput from "../QuestionTextInput";
import SlideSelfEvaluation from "../SlideSelfEvaluation";
import SlideSelfEvaluationGroup2 from "../SlideSelfEvaluationGroup2";
import SlideSelectCriteria from "../SlideSelectCriteria";
import SlideCriteriaImprovement106 from "../SlideCriteriaImprovement106";
import SlideCriteriaImprovement107 from "../SlideCriteriaImprovement107";
import SlideCriteriaImprovement110 from "../SlideCriteriaImprovement110";
import SlideCriteriaImprovement111 from "../SlideCriteriaImprovement111";
import SlideCriteriaImprovement114 from "../SlideCriteriaImprovement114";
import SlideCriteriaImprovement115 from "../SlideCriteriaImprovement115";
import SlideCriteriaImprovement118 from "../SlideCriteriaImprovement118";
import SlideCriteriaImprovement119 from "../SlideCriteriaImprovement119";
import SlideCriteriaImprovement122 from "../SlideCriteriaImprovement122";
import SlideCriteriaImprovement123 from "../SlideCriteriaImprovement123";
import SlideCriteriaImprovement126 from "../SlideCriteriaImprovement126";
import SlideCriteriaImprovement127 from "../SlideCriteriaImprovement127";
import QuestionTextInputCorrection from "../QuestionTextInputCorrection";

const typeIntro: number[] = [
  1,
  2,
  3,
  4,
  5,
  8,
  11,
  19,
  20,
  32,
  34,
  40,
  47,
  51,
  54,
  60,
  65,
];
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
const typeStructureTable: number[] = [52, 53];

const typeCriteriaRightWrong: number[] = [38, 39];
const typeCriteriaAllGreenRed: number[] = [45, 46, 49, 50];

const typeAbstractTable: number[] = [22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const typeIntroWithHeader: number[] = [55, 61, 66, 85, 104, 133, 152];
const typeNachangaben: number[] = [9, 10];

const typeSelfEvaluation: number[] = [
  67,
  70,
  73,
  76,
  79,
  82,
  134,
  137,
  140,
  143,
  146,
  149,
];
const typeSelfEvaluationGroup2: number[] = [
  86,
  89,
  92,
  95,
  98,
  101,
  153,
  156,
  159,
  162,
  165,
  168,
];

const typeTextinputWithHeader: number[] = [];
const typeTextinput: number[] = [62];
const typeTextinputCorrection: number[] = [130];
const typeRange: number[] = [
  57,
  58,
  59,
  63,
  64,
  68,
  69,
  71,
  72,
  74,
  75,
  77,
  78,
  80,
  81,
  83,
  84,
  87,
  88,
  90,
  91,
  93,
  94,
  96,
  97,
  99,
  100,
  102,
  103,
  108,
  109,
  112,
  113,
  116,
  117,
  120,
  121,
  124,
  125,
  128,
  129,
  131,
  132,
  135,
  136,
  138,
  139,
  141,
  142,
  144,
  145,
  147,
  148,
  150,
  151,
  154,
  155,
  157,
  158,
  160,
  161,
  163,
  164,
  166,
  167,
  169,
  170,
];
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
      ) : slide.slideType === "Study_Timer" ? (
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
      ) : slide.slideType === "Criteria_Improvement_Selection" ? (
        <SlideSelectCriteria
          slideText={slide.slideText}
          slideNumber={slide.id}
          type={slide.slideType}
        />
      ) : slide.slideType === "Criteria_Improvement_Content" ? (
        <SlideCriteriaImprovement106
          slideText={slide.slideText}
          slideNumber={slide.id}
          type={slide.slideType}
          criteriaIntroUnits={slide.criteriaIntroUnits}
          criteriaExamples={slide.criteriaExamples}
          header={slide.header}
        />
      ) : slide.slideType === "Criteria_Improvement_Content_1" ? (
        <SlideCriteriaImprovement107
          slideText={slide.slideText}
          slideNumber={slide.id}
          type={slide.slideType}
          criteriaIntroUnits={slide.criteriaIntroUnits}
          criteriaExamples={slide.criteriaExamples}
          header={slide.header}
        />
      ) : slide.slideType === "Criteria_Improvement_Formal" ? (
        <SlideCriteriaImprovement110
          slideText={slide.slideText}
          slideNumber={slide.id}
          type={slide.slideType}
          criteriaIntroUnits={slide.criteriaIntroUnits}
          criteriaExamples={slide.criteriaExamples}
          header={slide.header}
        />
      ) : slide.slideType === "Criteria_Improvement_Formal_1" ? (
        <SlideCriteriaImprovement111
          slideText={slide.slideText}
          slideNumber={slide.id}
          type={slide.slideType}
          criteriaIntroUnits={slide.criteriaIntroUnits}
          criteriaExamples={slide.criteriaExamples}
          header={slide.header}
        />
      ) : slide.slideType === "Criteria_Improvement_Orthographie" ? (
        <SlideCriteriaImprovement114
          slideText={slide.slideText}
          slideNumber={slide.id}
          type={slide.slideType}
          criteriaIntroUnits={slide.criteriaIntroUnits}
          criteriaExamples={slide.criteriaExamples}
          header={slide.header}
        />
      ) : slide.slideType === "Criteria_Improvement_Orthographie_1" ? (
        <SlideCriteriaImprovement115
          slideText={slide.slideText}
          slideNumber={slide.id}
          type={slide.slideType}
          criteriaIntroUnits={slide.criteriaIntroUnits}
          criteriaExamples={slide.criteriaExamples}
          header={slide.header}
        />
      ) : slide.slideType === "Criteria_Improvement_Scientific" ? (
        <SlideCriteriaImprovement118
          slideText={slide.slideText}
          slideNumber={slide.id}
          type={slide.slideType}
          criteriaIntroUnits={slide.criteriaIntroUnits}
          criteriaExamples={slide.criteriaExamples}
          header={slide.header}
        />
      ) : slide.slideType === "Criteria_Improvement_Scientific_1" ? (
        <SlideCriteriaImprovement119
          slideText={slide.slideText}
          slideNumber={slide.id}
          type={slide.slideType}
          criteriaIntroUnits={slide.criteriaIntroUnits}
          criteriaExamples={slide.criteriaExamples}
          header={slide.header}
        />
      ) : slide.slideType === "Criteria_Improvement_Organisation" ? (
        <SlideCriteriaImprovement122
          slideText={slide.slideText}
          slideNumber={slide.id}
          type={slide.slideType}
          criteriaIntroUnits={slide.criteriaIntroUnits}
          criteriaExamples={slide.criteriaExamples}
          header={slide.header}
        />
      ) : slide.slideType === "Criteria_Improvement_Organisation_1" ? (
        <SlideCriteriaImprovement123
          slideText={slide.slideText}
          slideNumber={slide.id}
          type={slide.slideType}
          criteriaIntroUnits={slide.criteriaIntroUnits}
          criteriaExamples={slide.criteriaExamples}
          header={slide.header}
        />
      ) : slide.slideType === "Criteria_Improvement_Structure" ? (
        <SlideCriteriaImprovement126
          slideText={slide.slideText}
          slideNumber={slide.id}
          type={slide.slideType}
          criteriaIntroUnits={slide.criteriaIntroUnits}
          criteriaExamples={slide.criteriaExamples}
          header={slide.header}
        />
      ) : slide.slideType === "Criteria_Improvement_Structure_1" ? (
        <SlideCriteriaImprovement127
          slideText={slide.slideText}
          slideNumber={slide.id}
          type={slide.slideType}
          criteriaIntroUnits={slide.criteriaIntroUnits}
          criteriaExamples={slide.criteriaExamples}
          header={slide.header}
        />
      ) : typeCriteriaRightWrong.includes(slide.id) ? (
        <SlideCriteriaRightWrong
          slideText={slide.slideText}
          slideNumber={slide.id}
          type={slide.slideType}
          criteriaIntroUnits={slide.criteriaIntroUnits}
        />
      ) : typeStructureTable.includes(slide.id) ? (
        <SlideTablePNG
          header={slide.header}
          slideText={slide.slideText}
          slideNumber={slide.id}
          type={slide.slideType}
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
      ) : typeSelfEvaluation.includes(slide.id) ? (
        <SlideSelfEvaluation
          slideText={slide.slideText}
          slideNumber={slide.id}
          type={slide.slideType}
        />
      ) : typeSelfEvaluationGroup2.includes(slide.id) ? (
        <SlideSelfEvaluationGroup2
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
      ) : typeTextinput.includes(slide.id) ? (
        <QuestionTextInput questionNumber={slide.id} type={slide.slideType} />
      ) : typeTextinputCorrection.includes(slide.id) ? (
        <QuestionTextInputCorrection
          questionNumber={slide.id}
          type={slide.slideType}
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
