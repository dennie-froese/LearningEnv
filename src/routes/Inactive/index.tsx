import React from "react";
import { Link } from "react-router-dom";

function Inactive() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Die aktuelle Studie wurde bereits beendet.</p>
        {/* <p>
          Vielen Dank, dass Du dir die Zeit nimmst, um an dieser Studie
          teilzunehmen.
        </p> */}
        {/* <Link to="/login">
          <button className="App-button-welcome">
            Hier geht’s zur Anmeldung!
          </button>
        </Link> */}
      </header>
    </div>
  );
}

export default Inactive;
