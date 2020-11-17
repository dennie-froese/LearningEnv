import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../routes/Home";
import Login from "../routes/Login";

import SomethingWentWrong from "../routes/SomethingWentWrong/index";
import Finish from "../routes/Finish/index";
import Slide from "../routes/Slide";
import { useSlidesState } from "../hooks/useSlides";

function Router() {
  const context = useSlidesState();
  const slides = useSlidesState()?.slides;

  console.warn(`slideSelection: ${context?.slideSelection}`);
  console.warn(`activeslide: ${context?.activeSlide}`);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        {context?.authenticated && slides?.map((slide) => <Slide {...slide} />)}
        {context?.authenticated && (
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
