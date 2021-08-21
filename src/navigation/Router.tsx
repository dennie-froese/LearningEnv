import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../routes/Home";
import Login from "../routes/Login";

import SomethingWentWrong from "../routes/SomethingWentWrong/index";
import Slide from "../routes/Slide";
import { useSlidesState } from "../hooks/useSlides";
import { SlideInterface } from "../slides";
import Inactive from "../routes/Inactive";

function Router() {
  const slides = useSlidesState()?.slides;
  const activeSlide = useSlidesState()?.activeSlide;
  const [slide, setSlide] = useState<SlideInterface | undefined>(undefined);

  useEffect(() => {
    if (activeSlide && slides) {
      setSlide(slides.find((slide) => slide.id === activeSlide));
    }
  }, [activeSlide, slides]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {/* <Home /> */}
          <Inactive />
        </Route>
        {/* <Route exact path="/login">
          <Login />
        </Route> */}
        {slide && <Slide {...slide} />}
        <Route path="*">
          <SomethingWentWrong />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
