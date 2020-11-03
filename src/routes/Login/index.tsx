import React from "react";
import { Link } from "react-router-dom";
import {
  useStateMachineState,
  useStateMachineDispatch
} from "../../state/StateMachine";

function Login() {
  const current = useStateMachineState();
  const send = useStateMachineDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <p>Please authenticate yourself below:</p>
        <form className="Form">
          <label>User:</label>
          <input
            className="Form-input"
            value={current.context.user}
            onChange={e => send("INPUT_USER", { value: e.target.value })}
            type="text"
            name="name"
          />
          <label>Password:</label>
          <input
            className="Form-input"
            value={current.context.password}
            onChange={e => send("INPUT_PASSWORD", { value: e.target.value })}
            type="password"
            name="name"
          />
        </form>
        <Link to="/questions">
          <button className="App-button">Log in!</button>
        </Link>
      </header>
    </div>
  );
}

export default Login;
