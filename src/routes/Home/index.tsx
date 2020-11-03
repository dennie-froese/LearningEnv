import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to this quiz.</p>
        <Link to="/login">
          <button className="App-button">Please proceed to login!</button>
        </Link>
      </header>
    </div>
  );
}

export default Home;
