import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StateMachineProvider } from "./state/StateMachine.jsx";
import "./App.css";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Question from "./routes/Question";

function App() {
  return (
    <StateMachineProvider>
      <Router>
        <Switch>
          <Route path="/questions">
            <Question />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </StateMachineProvider>
  );
}

export default App;
