import React from "react";
import { StateMachineProvider } from "./state/StateMachine.jsx";
import "./App.css";
import Router from "./navigation/Router";
import { SlidesProvider } from "./hooks/useSlides";

function App() {
  return (
    <StateMachineProvider>
      <SlidesProvider>
        <Router />
      </SlidesProvider>
    </StateMachineProvider>
  );
}

export default App;
