import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useStateMachineState } from "../state/StateMachine.jsx";
import Home from "../routes/Home";
import Login from "../routes/Login";
import Question from "../routes/Question";
import QuestionRange from "../routes/QuestionRange";
import SomethingWentWrong from "../routes/SomethingWentWrong/index";

function Router() {
  const current = useStateMachineState();
  const authenticated = current.context.authenticated;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/questionRange">
          <QuestionRange
            questionNumber={1}
            question="Please select from 1 to 10"
            rangeMax={10}
          />
        </Route>
        {authenticated && (
          <Route path="/question">
            <Question
              type="range"
              question="On a scale from 1 to 10?"
              rangeMax={10}
            />
          </Route>
        )}
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
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
