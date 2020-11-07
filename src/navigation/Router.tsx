import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useStateMachineState } from "../state/StateMachine.jsx";
import Home from "../routes/Home";
import Login from "../routes/Login";
import Question from "../routes/Question";
import QuestionRange from "../routes/QuestionRange";
import QuestionTextInput from "../routes/QuestionTextInput/index";
import SomethingWentWrong from "../routes/SomethingWentWrong/index";

function Router() {
  const current = useStateMachineState();
  const authenticated = current.context.authenticated;

  return (
    <BrowserRouter>
      <Switch>
        {authenticated && (
          <Route path="/questionTextInput">
            <QuestionTextInput />
          </Route>
        )}
        {authenticated && (
          <Route path="/questionRange">
            <QuestionRange />
          </Route>
        )}
        {authenticated && (
          <Route path="/question">
            <Question />
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
