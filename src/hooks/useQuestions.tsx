import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Question from "../routes/Question";
import questions from "../questions";

function useQuestions() {
  const [questionArray, setQuestionArray] = useState<JSX.Element | undefined>(
    undefined
  );

  useEffect(() => {
    questions.forEach(element =>
      element.questionType === "range"
        ? setQuestionArray(
            <Route path={`/question${element.id}`}>
              <Question
                questionNumber={element.id}
                type={element.questionType}
                question={element.questionText}
                rangeMax={element.additionalInfo}
              />
            </Route>
          )
        : element.questionType === "textInput"
        ? setQuestionArray(
            <Route path={`/question${element.id}`}>
              <Question
                questionNumber={element.id}
                type={element.questionType}
                question={element.questionText}
                rangeMax={element.additionalInfo}
              />
            </Route>
          )
        : null
    );
  });

  return questionArray;
}

export default useQuestions;
