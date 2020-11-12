import React from "react";
import QuestionTextInput from "../QuestionTextInput";
import QuestionRange from "../QuestionRange";
import { QuestionInterface } from "./../../questions";
import { Route } from "react-router-dom";

function Question(question: QuestionInterface) {
  return (
    <Route path={`/question${question.id}`}>
      {question.questionType === "textInput" ? (
        <QuestionTextInput
          questionNumber={question.id}
          question={question.questionText}
        />
      ) : (
        <QuestionRange
          question={question.questionText}
          questionNumber={question.id}
          rangeMax={question.additionalInfo}
        />
      )}
    </Route>
  );
}

export default Question;
