import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSlidesDispatch } from "../../hooks/useSlides";
import { users } from "../../logins";

function Login() {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useSlidesDispatch();
  const history = useHistory();

  const logon = () => {
    if (users[user] === password) {
      dispatch &&
        dispatch({
          type: "set_user",
          payload: { user: user, authenticated: true },
        });
      history.push("/slides");
    } else {
      setError(
        "It seems like your user and e-mail don't match - please check your inputs."
      );
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
          <label>E-mail:</label>
          <input
            className="Form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="name"
          />
        </form>
        <p className="Error-text">{error}</p>
        <button className="App-button" onClick={logon}>
          Log in!
        </button>
      </header>
    </div>
  );
}

export default Login;
