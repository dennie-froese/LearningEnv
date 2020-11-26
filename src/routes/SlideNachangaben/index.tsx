import React, { useState } from "react";
import { useSlidesDispatch } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";

interface Props {
  slideText: string;
  slideNumber: number;
  type: string;
  nachangaben: Record<number, [string, string, string]> | undefined;
}

function SlideNachangaben({ slideText, type, nachangaben }: Props) {
  const [valueOne, setValueOne] = useState<undefined | number>(undefined);
  const [valueTwo, setValueTwo] = useState<undefined | number>(undefined);
  const [valueThree, setValueThree] = useState<undefined | number>(undefined);
  const [valueFour, setValueFour] = useState<undefined | number>(undefined);
  const [valueFive, setValueFive] = useState<undefined | number>(undefined);
  const [valueSix, setValueSix] = useState<undefined | number>(undefined);

  const reset = () => {
    setValueOne(undefined);
    setValueTwo(undefined);
    setValueThree(undefined);
    setValueFour(undefined);
    setValueFive(undefined);
    setValueSix(undefined);
    restart();
  };

  const dispatch = useSlidesDispatch();
  const { launchTime, restart } = useTimer();

  const finish = () => {
    const obj =
      type === "Nachangaben_1_5"
        ? {
            NachAngaben_1: valueOne?.toString(),
            NachAngaben_2: valueTwo?.toString(),
            NachAngaben_3: valueThree?.toString(),
            NachAngaben_4: valueFour?.toString(),
            NachAngaben_5: valueFive?.toString(),
          }
        : type === "NachAngaben_6_11"
        ? {
            NachAngaben_6: valueOne?.toString(),
            NachAngaben_7: valueTwo?.toString(),
            NachAngaben_8: valueThree?.toString(),
            NachAngaben_9: valueFour?.toString(),
            NachAngaben_10: valueFive?.toString(),
            NachAngaben_11: valueSix?.toString(),
          }
        : type === "Nachangaben_12_17"
        ? {
            NachAngaben_12: valueOne?.toString(),
            NachAngaben_13: valueTwo?.toString(),
            NachAngaben_14: valueThree?.toString(),
            NachAngaben_15: valueFour?.toString(),
            NachAngaben_16: valueFive?.toString(),
            NachAngaben_17: valueSix?.toString(),
          }
        : {
            NachAngaben_18: valueOne?.toString(),
            NachAngaben_19: valueTwo?.toString(),
            NachAngaben_20: valueThree?.toString(),
            NachAngaben_21: valueFour?.toString(),
            NachAngaben_22: valueFive?.toString(),
          };

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
                      valueOne === 1 ? setValueOne(undefined) : setValueOne(1)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueOne === 2 ? true : false}
                    onClick={() =>
                      valueOne === 2 ? setValueOne(undefined) : setValueOne(2)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueOne === 3 ? true : false}
                    onClick={() =>
                      valueOne === 3 ? setValueOne(undefined) : setValueOne(3)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueOne === 4 ? true : false}
                    onClick={() =>
                      valueOne === 4 ? setValueOne(undefined) : setValueOne(4)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueOne === 5 ? true : false}
                    onClick={() =>
                      valueOne === 5 ? setValueOne(undefined) : setValueOne(5)
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
                      valueTwo === 1 ? setValueTwo(undefined) : setValueTwo(1)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueTwo === 2 ? true : false}
                    onClick={() =>
                      valueTwo === 2 ? setValueTwo(undefined) : setValueTwo(2)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueTwo === 3 ? true : false}
                    onClick={() =>
                      valueTwo === 3 ? setValueTwo(undefined) : setValueTwo(3)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueTwo === 4 ? true : false}
                    onClick={() =>
                      valueTwo === 4 ? setValueTwo(undefined) : setValueTwo(4)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueTwo === 5 ? true : false}
                    onClick={() =>
                      valueTwo === 5 ? setValueTwo(undefined) : setValueTwo(5)
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
                      valueThree === 1
                        ? setValueThree(undefined)
                        : setValueThree(1)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueThree === 2 ? true : false}
                    onClick={() =>
                      valueThree === 2
                        ? setValueThree(undefined)
                        : setValueThree(2)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueThree === 3 ? true : false}
                    onClick={() =>
                      valueThree === 3
                        ? setValueThree(undefined)
                        : setValueThree(3)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueThree === 4 ? true : false}
                    onClick={() =>
                      valueThree === 4
                        ? setValueThree(undefined)
                        : setValueThree(4)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueThree === 5 ? true : false}
                    onClick={() =>
                      valueThree === 5
                        ? setValueThree(undefined)
                        : setValueThree(5)
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
                      valueFour === 1
                        ? setValueFour(undefined)
                        : setValueFour(1)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueFour === 2 ? true : false}
                    onClick={() =>
                      valueFour === 2
                        ? setValueFour(undefined)
                        : setValueFour(2)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueFour === 3 ? true : false}
                    onClick={() =>
                      valueFour === 3
                        ? setValueFour(undefined)
                        : setValueFour(3)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueFour === 4 ? true : false}
                    onClick={() =>
                      valueFour === 4
                        ? setValueFour(undefined)
                        : setValueFour(4)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueFour === 5 ? true : false}
                    onClick={() =>
                      valueFour === 5
                        ? setValueFour(undefined)
                        : setValueFour(5)
                    }
                  />
                </div>
              </div>
              <p className="Slide-nachangaben-label-l">
                {nachangaben && nachangaben[4][2]}
              </p>
            </div>
          </div>
          <div className="Slide-nachangaben-row-1">
            <p className="Slide-nachangaben-label">
              {nachangaben && nachangaben[5][0]}
            </p>
            <div className="Slide-nachangaben-row-boxes">
              <p className="Slide-nachangaben-label-l">
                {nachangaben && nachangaben[5][1]}
              </p>
              <div className="Slide-nachangaben-row-boxes-container">
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueFive === 1 ? true : false}
                    onClick={() =>
                      valueFive === 1
                        ? setValueFive(undefined)
                        : setValueFive(1)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueFive === 2 ? true : false}
                    onClick={() =>
                      valueFive === 2
                        ? setValueFive(undefined)
                        : setValueFive(2)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueFive === 3 ? true : false}
                    onClick={() =>
                      valueFive === 3
                        ? setValueFive(undefined)
                        : setValueFive(3)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueFive === 4 ? true : false}
                    onClick={() =>
                      valueFive === 4
                        ? setValueFive(undefined)
                        : setValueFive(4)
                    }
                  />
                </div>
                <div className="Slide-nachangaben-row-boxes-boxes-container">
                  <input
                    type="checkbox"
                    checked={valueFive === 5 ? true : false}
                    onClick={() =>
                      valueFive === 5
                        ? setValueFive(undefined)
                        : setValueFive(5)
                    }
                  />
                </div>
              </div>
              <p className="Slide-nachangaben-label-l">
                {nachangaben && nachangaben[5][2]}
              </p>
            </div>
          </div>
          {nachangaben && nachangaben[6] && (
            <div className="Slide-nachangaben-row-2">
              <p className="Slide-nachangaben-label">
                {nachangaben && nachangaben[6][0]}
              </p>
              <div className="Slide-nachangaben-row-boxes">
                <p className="Slide-nachangaben-label-l">
                  {nachangaben && nachangaben[6][1]}
                </p>
                <div className="Slide-nachangaben-row-boxes-container">
                  <div className="Slide-nachangaben-row-boxes-boxes-container">
                    <input
                      type="checkbox"
                      checked={valueSix === 1 ? true : false}
                      onClick={() =>
                        valueSix === 1 ? setValueSix(undefined) : setValueSix(1)
                      }
                    />
                  </div>
                  <div className="Slide-nachangaben-row-boxes-boxes-container">
                    <input
                      type="checkbox"
                      checked={valueSix === 2 ? true : false}
                      onClick={() =>
                        valueSix === 2 ? setValueSix(undefined) : setValueSix(2)
                      }
                    />
                  </div>
                  <div className="Slide-nachangaben-row-boxes-boxes-container">
                    <input
                      type="checkbox"
                      checked={valueSix === 3 ? true : false}
                      onClick={() =>
                        valueSix === 3 ? setValueSix(undefined) : setValueSix(3)
                      }
                    />
                  </div>
                  <div className="Slide-nachangaben-row-boxes-boxes-container">
                    <input
                      type="checkbox"
                      checked={valueSix === 4 ? true : false}
                      onClick={() =>
                        valueSix === 4 ? setValueSix(undefined) : setValueSix(4)
                      }
                    />
                  </div>
                  <div className="Slide-nachangaben-row-boxes-boxes-container">
                    <input
                      type="checkbox"
                      checked={valueSix === 5 ? true : false}
                      onClick={() =>
                        valueSix === 5 ? setValueSix(undefined) : setValueSix(5)
                      }
                    />
                  </div>
                </div>
                <p className="Slide-nachangaben-label-l">
                  {nachangaben && nachangaben[6][2]}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="Slide-nav">
          <button className="Slide-button" onClick={finish}>
            Weiter
          </button>
        </div>
      </div>
    </div>
  );
}

export default SlideNachangaben;
