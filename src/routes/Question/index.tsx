import React from "react";
import QuestionTextInput from "../QuestionTextInput";
import QuestionRange from "../QuestionRange";

interface Props {
  type: string;
  question: string;
  rangeMax?: number;
}

function Question({ type, question, rangeMax = 0 }: Props) {
  return type === "textInput" ? (
    <QuestionTextInput question={question} />
  ) : type === "range" ? (
    <QuestionRange questionNumber={1} question={question} rangeMax={rangeMax} />
  ) : null;
}

export default Question;
