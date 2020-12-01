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
        "Deine Eingaben scheinen nicht korrekt zu sein – bitte überprüfe diese und probiere es noch einmal."
      );
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Bitte logge Dich mit deiner E-Mail-Adresse und der von uns
          bereitgestellten, dreistelligen Nummer ein.
        </p>
        <form className="Form">
          <label>E-Mail-Adresse:</label>
          <input
            className="Form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="name"
          />
          <label>Nummer:</label>
          <input
            className="Form-input"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            type="text"
            name="name"
          />
        </form>
        <p className="Error-text">{error}</p>
        <button className="App-button" onClick={logon}>
          Jetzt anmelden!
        </button>
      </header>
    </div>
  );
}

export default Login;
