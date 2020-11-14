import React, { useState } from "react";
import { useSlidesDispatch } from "../../hooks/useSlides";
import { users, password as adminPassword } from "../../logins";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useSlidesDispatch();

  const logon = () => {
    if (users.includes(user) && password === adminPassword) {
      dispatch &&
        dispatch({
          type: "set_user",
          payload: { user: user, authenticated: true },
        });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Please authenticate yourself below:</p>
        <form className="Form">
          <label>User:</label>
          <input
            className="Form-input"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            type="text"
            name="name"
          />
          <label>Password:</label>
          <input
            className="Form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="name"
          />
        </form>
        <button className="App-button" onClick={logon}>
          Log in!
        </button>
      </header>
    </div>
  );
}

export default Login;
