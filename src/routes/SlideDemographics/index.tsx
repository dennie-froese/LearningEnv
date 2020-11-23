import React, { useState } from "react";
import { useSlidesDispatch } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";

interface Props {
  slideText: string;
  slideNumber: number;
  type: string;
}

function SlideDemographics({ slideText, slideNumber, type }: Props) {
  const dispatch = useSlidesDispatch();
  const [age, setAge] = useState<undefined | string>(undefined);
  const [sex, setSex] = useState<undefined | string>(undefined);
  const [languageOne, setLanguageOne] = useState<undefined | string>(undefined);
  const [languageTwo, setLanguageTwo] = useState<undefined | string>(undefined);
  const [dropDown, setDropDown] = useState(false);

  const launchTime = useTimer();

  const finish = () => {
    dispatch &&
      launchTime &&
      dispatch({
        type: "submit_slide",
        payload: { type: type, answer: { zeit: launchTime - Date.now() } },
      });
  };
  return (
    <div className="Slide">
      <div className="Slide-container">
        <div className="Slide-header">
          <p>{slideText}</p>
        </div>
        <div className="Slide-demographic">
          <div className="Slide-demographic-row">
            <p>Alter:</p>
            <input
              className="Slide-demographic-input"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="text"
              name="name"
            />
          </div>
          <div className="Slide-demographic-row">
            <p>Geschlecht:</p>
            <div className="Slide-demographic-row-boxes">
              <div className="Slide-demographic-row-boxes-container">
                <input
                  type="checkbox"
                  checked={sex === "maennlich" ? true : false}
                  onClick={() =>
                    sex === "maennlich"
                      ? setSex(undefined)
                      : setSex("maennlich")
                  }
                  onChange={() => null}
                />
                <p>Maennlich</p>
              </div>
              <div className="Slide-demographic-row-boxes-container">
                <input
                  type="checkbox"
                  checked={sex === "weiblich" ? true : false}
                  onClick={() =>
                    sex === "weiblich" ? setSex(undefined) : setSex("weiblich")
                  }
                  onChange={() => null}
                />
                <p>Weiblich</p>
              </div>
              <div className="Slide-demographic-row-boxes-container">
                <input
                  type="checkbox"
                  checked={sex === "divers" ? true : false}
                  onClick={() =>
                    sex === "divers" ? setSex(undefined) : setSex("divers")
                  }
                  onChange={() => null}
                />
                <p>Divers</p>
              </div>
            </div>
          </div>
          <div className="Slide-demographic-row">
            <p>Welche Sprache(n) hast du von Geburt an gelernt?:</p>
            <input
              className="Slide-demographic-input"
              value={languageOne}
              onChange={(e) => setLanguageOne(e.target.value)}
              type="text"
              name="name"
            />
            <input
              className="Slide-demographic-input"
              value={languageTwo}
              onChange={(e) => setLanguageTwo(e.target.value)}
              type="text"
              name="name"
            />
          </div>
          <div className="Slide-demographic-row">
            <p>Abiturnote:</p>
            <button
              className="Dropdown-button"
              onClick={() => setDropDown(!dropDown)}
            >
              - Auswahl -
            </button>
          </div>
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

export default SlideDemographics;
