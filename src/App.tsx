import React from "react";
import { StateMachineProvider } from "./state/StateMachine.jsx";
import "./App.css";
import Router from "./navigation/Router";

function App() {
  return (
    <StateMachineProvider>
      <Router />
    </StateMachineProvider>
  );
}

export default App;
