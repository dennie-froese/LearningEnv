import React from "react";
import { Link } from "react-router-dom";

function SomethingWentWrong() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Ups!</p>
        <p>Tut uns leid, hier scheint etwas schief gelaufen zu sein! </p>
        <p></p>
        <Link to="/">
          <button className="App-button-welcome">Zurück zur Startseite</button>
        </Link>
      </header>
    </div>
  );
}

export default SomethingWentWrong;
