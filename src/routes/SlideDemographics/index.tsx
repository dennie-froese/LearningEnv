import React, { useState } from "react";
import { useSlidesDispatch } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";

interface Props {
  slideText: string;
  slideNumber: number;
  type: string;
}

const GRADES: string[] = [
  "1,0",
  "1,1",
  "1,2",
  "1,3",
  "1,4",
  "1,5",
  "1,6",
  "1,7",
  "1,8",
  "1,9",
  "2,0",
  "2,1",
  "2,2",
  "2,3",
  "2,4",
  "2,5",
  "2,6",
  "2,7",
  "2,8",
  "2,9",
  "3,0",
  "3,1",
  "3,2",
  "3,3",
  "3,4",
  "3,5",
  "3,6",
  "3,7",
  "3,8",
  "3,9",
  "4,0",
];

const TERMS: number[] = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
];

function SlideDemographics({ slideText, slideNumber, type }: Props) {
  const dispatch = useSlidesDispatch();
  const [age, setAge] = useState<undefined | string>(undefined);
  const [sex, setSex] = useState<undefined | string>(undefined);
  const [languageOne, setLanguageOne] = useState<undefined | string>(undefined);
  const [languageTwo, setLanguageTwo] = useState<undefined | string>(undefined);
  const [dropDownGrade, setDropDownGrade] = useState(false);
  const dropDownGradeClassName = dropDownGrade
    ? "Dropdown show"
    : "Dropdown hide";
  const [grade, setGrade] = useState<undefined | string>(undefined);
  const [dropDownTerm, setDropDownTerm] = useState(false);
  const dropDownTermClassName = dropDownTerm
    ? "Dropdown show"
    : "Dropdown hide";
  const [term, setTerm] = useState<undefined | number>(undefined);
  const [subjectOne, setSubjectOne] = useState<undefined | string>(undefined);
  const [subjectTwo, setSubjectTwo] = useState<undefined | string>(undefined);
  const [degree, setDegree] = useState<undefined | string>(undefined);
  const [error, setError] = useState("");

  const launchTime = useTimer();

  const finish = () => {
    if (
      age &&
      sex &&
      languageOne &&
      languageTwo &&
      grade &&
      term &&
      degree &&
      subjectOne
    ) {
      dispatch &&
        launchTime &&
        dispatch({
          type: "submit_slide",
          payload: {
            type: type,
            answer: {
              zeit: launchTime - Date.now(),
              Alter: age,
              Geschlecht: sex,
              Geburtssprache1: languageOne,
              Geburtssprache2: languageTwo || "-",
              Abiturnote: grade,
              Studiengang1: subjectOne,
              Studiengang2: subjectTwo || "-",
            },
          },
        });
    } else {
      setError("Bitte überpruefe die Vollständigkeit deiner Angaben.");
    }
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
                  checked={sex === "männlich" ? true : false}
                  onClick={() =>
                    sex === "männlich" ? setSex(undefined) : setSex("männlich")
                  }
                  onChange={() => null}
                />
                <div className="Slide-label-l">Männlich</div>
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
                <div className="Slide-label-l">Weiblich</div>
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
                <div className="Slide-label-l">Divers</div>
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
            <div>
              <button
                className="Dropdown-button"
                onClick={() => setDropDownGrade(!dropDownGrade)}
              >
                {grade ? grade : "- Auswahl -"}
              </button>
              <div>
                {dropDownGrade && (
                  <div className={dropDownGradeClassName}>
                    {GRADES.map((grade) => (
                      <button
                        id={grade}
                        className="Dropdown-button-small"
                        onClick={() => {
                          setGrade(grade);
                          setDropDownGrade(false);
                        }}
                      >
                        {grade}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <p>Hochschulsemester:</p>
            <div>
              <button
                className="Dropdown-button"
                onClick={() => setDropDownTerm(!dropDownTerm)}
              >
                {term ? term : "- Auswahl -"}
              </button>
              <div>
                {dropDownTerm && (
                  <div className={dropDownTermClassName}>
                    {TERMS.map((term) => (
                      <button
                        id={term.toString()}
                        className="Dropdown-button-small"
                        onClick={() => {
                          setTerm(term);
                          setDropDownTerm(false);
                        }}
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="Slide-demographic-row">
            <p>Studiengang (Erstfach & Zweitfach):</p>
            <input
              className="Slide-demographic-input"
              value={subjectOne}
              onChange={(e) => setSubjectOne(e.target.value)}
              type="text"
              name="name"
            />
            <input
              className="Slide-demographic-input"
              value={subjectTwo}
              onChange={(e) => setSubjectTwo(e.target.value)}
              type="text"
              name="name"
            />
          </div>
          <div className="Slide-demographic-row">
            <p>Angestrebter Hochschulabschluss:</p>
            <div className="Slide-demographic-row-boxes">
              <div className="Slide-demographic-row-boxes-container">
                <input
                  type="checkbox"
                  checked={
                    degree === "Bachelor of Arts/Science 1-Fach" ? true : false
                  }
                  onClick={() =>
                    degree === "Bachelor of Arts/Science 1-Fach"
                      ? setDegree(undefined)
                      : setDegree("Bachelor of Arts/Science 1-Fach")
                  }
                  onChange={() => null}
                />
                <div className="Slide-label">
                  Bachelor of Arts/Science 1-Fach
                </div>
              </div>
              <div className="Slide-demographic-row-boxes-container">
                <input
                  type="checkbox"
                  checked={
                    degree === "Bachelor of Arts/Science 2-Fach" ? true : false
                  }
                  onClick={() =>
                    degree === "Bachelor of Arts/Science 2-Fach"
                      ? setDegree(undefined)
                      : setDegree("Bachelor of Arts/Science 2-Fach")
                  }
                  onChange={() => null}
                />
                <div className="Slide-label">
                  Bachelor of Arts/Science 2-Fach
                </div>
              </div>
              <div className="Slide-demographic-row-boxes-container">
                <input
                  type="checkbox"
                  checked={
                    degree === "Master of Arts/Science 1-Fach" ? true : false
                  }
                  onClick={() =>
                    degree === "Master of Arts/Science 1-Fach"
                      ? setDegree(undefined)
                      : setDegree("Master of Arts/Science 1-Fach")
                  }
                  onChange={() => null}
                />
                <div className="Slide-label">Master of Arts/Science 1-Fach</div>
              </div>
              <div className="Slide-demographic-row-boxes-container">
                <input
                  type="checkbox"
                  checked={
                    degree === "Master of Arts/Science 2-Fach" ? true : false
                  }
                  onClick={() =>
                    degree === "Master of Arts/Science 2-Fach"
                      ? setDegree(undefined)
                      : setDegree("Master of Arts/Science 2-Fach")
                  }
                  onChange={() => null}
                />
                <div className="Slide-label">Master of Arts/Science 2-Fach</div>
              </div>
              <div className="Slide-demographic-row-boxes-container">
                <input
                  type="checkbox"
                  checked={degree === "Master of Education" ? true : false}
                  onClick={() =>
                    degree === "Master of Education"
                      ? setDegree(undefined)
                      : setDegree("Master of Education")
                  }
                  onChange={() => null}
                />
                <div className="Slide-label">Master of Education</div>
              </div>
              <div className="Slide-demographic-row-boxes-container">
                <input
                  type="checkbox"
                  checked={degree === "Anderer Studienabschluss" ? true : false}
                  onClick={() =>
                    degree === "Anderer Studienabschluss"
                      ? setDegree(undefined)
                      : setDegree("Anderer Studienabschluss")
                  }
                  onChange={() => null}
                />
                <div className="Slide-label">Anderer Studienabschluss</div>
              </div>
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

export default SlideDemographics;
