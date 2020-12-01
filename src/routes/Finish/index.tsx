import React from "react";

interface Props {
  slideText: string;
  slideNumber: number;
  type: string;
}

function Finish({ slideText }: Props) {
  return (
    <div className="App">
      <div className="App-container">
        <div className="App-header">
          <p>{slideText}</p>
        </div>
      </div>
    </div>
  );
}

export default Finish;
