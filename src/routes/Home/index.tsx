import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const firebaseWrite = () => {
    // firebase.
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to this survey!</p>
        <p>We appreciate you taking the time out to answer our questions.</p>
        <p>But first, let's get you logged in:</p>
        <p></p>
        <Link to="/login">
          <button className="App-button" onClick={firebaseWrite}>
            Proceed to login!
          </button>
        </Link>
      </header>
    </div>
  );
}

export default Home;
