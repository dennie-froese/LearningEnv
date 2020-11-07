import React from "react";
import QuestionTextInput from "../QuestionTextInput";
import QuestionRange from "../QuestionRange";

interface Props {
  questionNumber: number;
  type: string;
  question: string;
  rangeMax?: number;
}

function Question({ questionNumber, type, question, rangeMax = 0 }: Props) {
  return type === "textInput" ? (
    <QuestionTextInput questionNumber={questionNumber} question={question} />
  ) : type === "range" ? (
    <QuestionRange
      questionNumber={questionNumber}
      question={question}
      rangeMax={rangeMax}
    />
  ) : null;
}

export default Question;
