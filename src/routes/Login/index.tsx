import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  useStateMachineState,
  useStateMachineDispatch,
} from "../../state/StateMachine";
import { users, password as adminPassword } from "../../logins";

function Login() {
  const current = useStateMachineState();
  const send = useStateMachineDispatch();
  const password = current.context.password;
  const user = current.context.user;
  const authenticated = current.context.authenticated;

  useEffect(() => {
    users.includes(user) && password === adminPassword
      ? send("AUTHENTICATED")
      : send("UNAUTHENTICATED");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, password]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Please authenticate yourself below:</p>
        <form className="Form">
          <label>User:</label>
          <input
            className="Form-input"
            value={user}
            onChange={(e) => send("INPUT_USER", { value: e.target.value })}
            type="text"
            name="name"
          />
          <label>Password:</label>
          <input
            className="Form-input"
            value={password}
            onChange={(e) => send("INPUT_PASSWORD", { value: e.target.value })}
            type="password"
            name="name"
          />
        </form>
        {authenticated ? (
          <Link to="/slides">
            <button className="App-button">Log in!</button>
          </Link>
        ) : (
          <div>
            <button className="App-button">Log in!</button>
          </div>
        )}
      </header>
    </div>
  );
}

export default Login;
