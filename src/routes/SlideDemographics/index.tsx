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
  const [age, setAge] = useState<string>("");
  const [sex, setSex] = useState<string>("");
  const [languageOne, setLanguageOne] = useState<string>("");
  const [languageTwo, setLanguageTwo] = useState<string>("");
  const [dropDownGrade, setDropDownGrade] = useState(false);
  const dropDownGradeClassName = dropDownGrade
    ? "Dropdown show"
    : "Dropdown hide";
  const [grade, setGrade] = useState<string>("");
  const [dropDownTerm, setDropDownTerm] = useState(false);
  const dropDownTermClassName = dropDownTerm
    ? "Dropdown show"
    : "Dropdown hide";
  const [term, setTerm] = useState<number>(0);
  const [subjectOne, setSubjectOne] = useState<string>("");
  const [subjectTwo, setSubjectTwo] = useState<string>("");
  const [degree, setDegree] = useState<string>("");
  const [error, setError] = useState("");

  const { launchTime, restart } = useTimer();

  const finish = () => {
    // if (
    //   age &&
    //   sex &&
    //   languageOne &&
    //   languageTwo &&
    //   grade &&
    //   term &&
    //   degree &&
    //   subjectOne
    // ) {
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
    // } else {
    //   setError("Bitte überprüfe die Vollständigkeit deiner Angaben.");
    // }
  };
  return (
    <div className="Slide">
      <div className="Slide-container">
        <div className="Slide-header">
          <p className="Slide-demographic-label-header">{slideText}</p>
        </div>
        <div className="Slide-demographic">
          <div className="Slide-demographic-row">
            <p className="Slide-demographic-label-l">Alter:</p>
            <input
              className="Slide-demographic-input"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="text"
              name="name"
            />
          </div>
          <div className="Slide-demographic-row">
            <p className="Slide-demographic-label-l">Geschlecht:</p>
            <div className="Slide-demographic-row-boxes">
              <div className="Slide-demographic-row-boxes-container">
                <input
                  type="checkbox"
                  checked={sex === "männlich" ? true : false}
                  onClick={() =>
                    sex === "männlich" ? setSex("") : setSex("männlich")
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
                    sex === "weiblich" ? setSex("") : setSex("weiblich")
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
                    sex === "divers" ? setSex("") : setSex("divers")
                  }
                  onChange={() => null}
                />
                <div className="Slide-label-l">Divers</div>
              </div>
            </div>
          </div>
          <div className="Slide-demographic-row">
            <p className="Slide-demographic-label-l">
              Welche Sprache(n) hast du von Geburt an gelernt?:
            </p>
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
            <p className="Slide-demographic-label-l">Abiturnote:</p>
            <div>
              <button
                className="Dropdown-button"
                onClick={() => setDropDownGrade(!dropDownGrade)}
              >
                {grade ? grade : "Auswahl"}
              </button>
              {dropDownGrade && (
                <div className={dropDownGradeClassName}>
                  {GRADES.map((grade) => (
                    <div className="Dropdown-button-small-container">
                      <button
                        className="Dropdown-button-small"
                        id={grade}
                        onClick={() => {
                          setGrade(grade);
                          setDropDownGrade(false);
                        }}
                      >
                        {grade}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <p className="Slide-demographic-label-l">Hochschulsemester:</p>
            <div>
              <button
                className="Dropdown-button"
                onClick={() => setDropDownTerm(!dropDownTerm)}
              >
                {term ? term : "Auswahl"}
              </button>
              <div>
                {dropDownTerm && (
                  <div className={dropDownTermClassName}>
                    {TERMS.map((term) => (
                      <div className="Dropdown-button-small-container">
                        <button
                          className="Dropdown-button-small"
                          id={term.toString()}
                          onClick={() => {
                            setTerm(term);
                            setDropDownTerm(false);
                          }}
                        >
                          {term}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="Slide-demographic-row">
            <p className="Slide-demographic-label-l">
              Studiengang (Erstfach & Zweitfach):
            </p>
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
            <p className="Slide-demographic-label-l">
              Angestrebter Hochschulabschluss:
            </p>
            <div className="Slide-demographic-row-boxes">
              <div className="Slide-demographic-row-boxes-container">
                <input
                  type="checkbox"
                  checked={
                    degree === "Bachelor of Arts/Science 1-Fach" ? true : false
                  }
                  onClick={() =>
                    degree === "Bachelor of Arts/Science 1-Fach"
                      ? setDegree("")
                      : setDegree("Bachelor of Arts/Science 1-Fach")
                  }
                  onChange={() => null}
                />
                <div className="Slide-demographic-label-checkboxes">
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
                      ? setDegree("")
                      : setDegree("Bachelor of Arts/Science 2-Fach")
                  }
                  onChange={() => null}
                />
                <div className="Slide-demographic-label-checkboxes">
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
                      ? setDegree("")
                      : setDegree("Master of Arts/Science 1-Fach")
                  }
                  onChange={() => null}
                />
                <div className="Slide-demographic-label-checkboxes">
                  Master of Arts/Science 1-Fach
                </div>
              </div>
              <div className="Slide-demographic-row-boxes-container">
                <input
                  type="checkbox"
                  checked={
                    degree === "Master of Arts/Science 2-Fach" ? true : false
                  }
                  onClick={() =>
                    degree === "Master of Arts/Science 2-Fach"
                      ? setDegree("")
                      : setDegree("Master of Arts/Science 2-Fach")
                  }
                  onChange={() => null}
                />
                <div className="Slide-demographic-label-checkboxes">
                  Master of Arts/Science 2-Fach
                </div>
              </div>
              <div className="Slide-demographic-row-boxes-container">
                <input
                  type="checkbox"
                  checked={degree === "Master of Education" ? true : false}
                  onClick={() =>
                    degree === "Master of Education"
                      ? setDegree("")
                      : setDegree("Master of Education")
                  }
                  onChange={() => null}
                />
                <div className="Slide-demographic-label-checkboxes">
                  Master of Education
                </div>
              </div>
              <div className="Slide-demographic-row-boxes-container">
                <input
                  type="checkbox"
                  checked={degree === "Anderer Studienabschluss" ? true : false}
                  onClick={() =>
                    degree === "Anderer Studienabschluss"
                      ? setDegree("")
                      : setDegree("Anderer Studienabschluss")
                  }
                  onChange={() => null}
                />
                <div className="Slide-demographic-label-checkboxes">
                  Anderer Studienabschluss
                </div>
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
