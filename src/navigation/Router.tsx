import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useStateMachineState } from "../state/StateMachine.jsx";
import Home from "../routes/Home";
import Login from "../routes/Login";
import Question from "../routes/Question";
import SomethingWentWrong from "../routes/SomethingWentWrong/index";
import questions from "../questions";

function Router() {
  const current = useStateMachineState();
  const authenticated = current.context.authenticated;

  const questionArray: JSX.Element[] = [];
  function questionRoutes() {
    questions.forEach(element =>
      element.questionType === "range"
        ? questionArray.push(
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
        ? questionArray.push(
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
  }
  console.log(questionArray);
  return (
    <BrowserRouter>
      <Switch>
        {questionRoutes()}
        {authenticated && questionArray}
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="*">
          <SomethingWentWrong />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
