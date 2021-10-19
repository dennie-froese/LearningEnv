import React, { useState } from "react";
import { inputValidationOff } from "../../App";
import { useSlidesDispatch } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";

interface Props {
  slideNumber: number;
  type: string;
  nachangaben: Record<number, [string, string, string]> | undefined;
}

function SlideNachangaben({ type, nachangaben }: Props) {
  const [valueOne, setValueOne] = useState<number>(0);
  const [valueTwo, setValueTwo] = useState<number>(0);
  const [valueThree, setValueThree] = useState<number>(0);
  const [valueFour, setValueFour] = useState<number>(0);
  const [error, setError] = useState("");

  const reset = () => {
    setValueOne(0);
    setValueTwo(0);
    setValueThree(0);
    setValueFour(0);
    restart();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const dispatch = useSlidesDispatch();
  const { launchTime, restart } = useTimer();

  const finish = () => {
    const obj =
      type === "NachAngaben_Schueler_1_4"
        ? {
            NachAngaben_Schueler_1: valueOne?.toString(),
            NachAngaben_Schueler_2: valueTwo?.toString(),
            NachAngaben_Schueler_3: valueThree?.toString(),
            NachAngaben_Schueler_4: valueFour?.toString(),
          }
        : type === "Nachangaben_1_4"
        ? {
            NachAngaben_1: valueOne?.toString(),
            NachAngaben_2: valueTwo?.toString(),
            NachAngaben_3: valueThree?.toString(),
            NachAngaben_4: valueFour?.toString(),
          }
        : {};
    if (
      (valueOne && valueTwo && valueThree && valueFour) ||
      inputValidationOff
    ) {
      dispatch &&
        launchTime &&
        dispatch({
          type: "submit_slide",
          payload: {
            type: type,
            answer: { zeit: launchTime - Date.now(), ...obj },
          },
        });
      reset();
      setError("");
    } else {
      setError("Bitte überprüfe die Vollständigkeit deiner Angaben.");
    }
  };

  return (
    <div className="Slide">
      <div className="Slide-container">
        <p></p>
        <div className="Slide-nachangaben-main">
          <div className="Slide-nachangaben-row-1">
            <p className="Slide-nachangaben-label">
              {nachangaben && nachangaben[1][0]}
            </p>
            <div className="Slide-nachangaben-row-boxes">
              <p className="Slide-nachangaben-label-l">
                {nachangaben && nachangaben[1][1]}
              </p>
              <div className="Slide-nachangaben-row-boxes-container">
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueOne === 1 ? true : false}
                    onClick={() =>
                      valueOne === 1 ? setValueOne(0) : setValueOne(1)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueOne === 2 ? true : false}
                    onClick={() =>
                      valueOne === 2 ? setValueOne(0) : setValueOne(2)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueOne === 3 ? true : false}
                    onClick={() =>
                      valueOne === 3 ? setValueOne(0) : setValueOne(3)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueOne === 4 ? true : false}
                    onClick={() =>
                      valueOne === 4 ? setValueOne(0) : setValueOne(4)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueOne === 5 ? true : false}
                    onClick={() =>
                      valueOne === 5 ? setValueOne(0) : setValueOne(5)
                    }
                  />
                </div>
              </div>
              <p className="Slide-nachangaben-label-l">
                {nachangaben && nachangaben[1][2]}
              </p>
            </div>
          </div>
          <div className="Slide-nachangaben-row-2">
            <p className="Slide-nachangaben-label">
              {nachangaben && nachangaben[2][0]}
            </p>
            <div className="Slide-nachangaben-row-boxes">
              <p className="Slide-nachangaben-label-l">
                {nachangaben && nachangaben[2][1]}
              </p>
              <div className="Slide-nachangaben-row-boxes-container">
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueTwo === 1 ? true : false}
                    onClick={() =>
                      valueTwo === 1 ? setValueTwo(0) : setValueTwo(1)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueTwo === 2 ? true : false}
                    onClick={() =>
                      valueTwo === 2 ? setValueTwo(0) : setValueTwo(2)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueTwo === 3 ? true : false}
                    onClick={() =>
                      valueTwo === 3 ? setValueTwo(0) : setValueTwo(3)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueTwo === 4 ? true : false}
                    onClick={() =>
                      valueTwo === 4 ? setValueTwo(0) : setValueTwo(4)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueTwo === 5 ? true : false}
                    onClick={() =>
                      valueTwo === 5 ? setValueTwo(0) : setValueTwo(5)
                    }
                  />
                </div>
              </div>
              <p className="Slide-nachangaben-label-l">
                {nachangaben && nachangaben[2][2]}
              </p>
            </div>
          </div>
          <div className="Slide-nachangaben-row-1">
            <p className="Slide-nachangaben-label">
              {nachangaben && nachangaben[3][0]}
            </p>
            <div className="Slide-nachangaben-row-boxes">
              <p className="Slide-nachangaben-label-l">
                {nachangaben && nachangaben[3][1]}
              </p>
              <div className="Slide-nachangaben-row-boxes-container">
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueThree === 1 ? true : false}
                    onClick={() =>
                      valueThree === 1 ? setValueThree(0) : setValueThree(1)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueThree === 2 ? true : false}
                    onClick={() =>
                      valueThree === 2 ? setValueThree(0) : setValueThree(2)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueThree === 3 ? true : false}
                    onClick={() =>
                      valueThree === 3 ? setValueThree(0) : setValueThree(3)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueThree === 4 ? true : false}
                    onClick={() =>
                      valueThree === 4 ? setValueThree(0) : setValueThree(4)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueThree === 5 ? true : false}
                    onClick={() =>
                      valueThree === 5 ? setValueThree(0) : setValueThree(5)
                    }
                  />
                </div>
              </div>
              <p className="Slide-nachangaben-label-l">
                {nachangaben && nachangaben[3][2]}
              </p>
            </div>
          </div>
          <div className="Slide-nachangaben-row-2">
            <p className="Slide-nachangaben-label">
              {nachangaben && nachangaben[4][0]}
            </p>
            <div className="Slide-nachangaben-row-boxes">
              <p className="Slide-nachangaben-label-l">
                {nachangaben && nachangaben[4][1]}
              </p>
              <div className="Slide-nachangaben-row-boxes-container">
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueFour === 1 ? true : false}
                    onClick={() =>
                      valueFour === 1 ? setValueFour(0) : setValueFour(1)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueFour === 2 ? true : false}
                    onClick={() =>
                      valueFour === 2 ? setValueFour(0) : setValueFour(2)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueFour === 3 ? true : false}
                    onClick={() =>
                      valueFour === 3 ? setValueFour(0) : setValueFour(3)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueFour === 4 ? true : false}
                    onClick={() =>
                      valueFour === 4 ? setValueFour(0) : setValueFour(4)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueFour === 5 ? true : false}
                    onClick={() =>
                      valueFour === 5 ? setValueFour(0) : setValueFour(5)
                    }
                  />
                </div>
              </div>
              <p className="Slide-nachangaben-label-l">
                {nachangaben && nachangaben[4][2]}
              </p>
            </div>
          </div>
        </div>
        <div className="Slide-nav">
          <p className="Error-text" style={{ paddingRight: 20 }}>
            {error}
          </p>
          <button className="Slide-button" onClick={finish}>
            Weiter
          </button>
        </div>
      </div>
    </div>
  );
}

export default SlideNachangaben;
