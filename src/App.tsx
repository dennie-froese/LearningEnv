import React from "react";
import "./App.css";
import Router from "./navigation/Router";
import { SlidesProvider } from "./hooks/useSlides";

export const inputValidationOff = true;

function App() {
  return (
    <SlidesProvider>
      <Router />
    </SlidesProvider>
  );
}

export default App;
