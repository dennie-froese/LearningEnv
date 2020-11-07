import React from "react";
import { Link } from "react-router-dom";

function SomethingWentWrong() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Oops!</p>
        <p>We're really sorry, but it looks like something went wrong here.</p>
        <p></p>
        <Link to="/home">
          <button className="App-button">Go back to home</button>
        </Link>
      </header>
    </div>
  );
}

export default SomethingWentWrong;
