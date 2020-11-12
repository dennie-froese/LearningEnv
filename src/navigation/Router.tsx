import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useStateMachineState } from "../state/StateMachine.jsx";
import Home from "../routes/Home";
import Login from "../routes/Login";

import SomethingWentWrong from "../routes/SomethingWentWrong/index";
import Finish from "../routes/Finish/index";
import Question from "../routes/Question";
import Questions from "../questions/index";

function Router() {
  const current = useStateMachineState();
  const authenticated = current.context.authenticated;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        {authenticated &&
          Questions.map((question) => <Question {...question} />)}
        {authenticated && (
          <Route path="/finish">
            <Finish />
          </Route>
        )}
        <Route path="*">
          <SomethingWentWrong />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
