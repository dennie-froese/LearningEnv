import React, { useState } from "react";
import { inputValidationOff } from "../../App";
import { useSlidesDispatch, useSlidesState } from "../../hooks/useSlides";
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

const FACHSEMESTER: number[] = [1, 2];

const JAHRE: string[] = [
  "kein Jahr",
  "1-2 Jahre",
  "3-5 Jahre",
  "mehr als 5 Jahre",
];

const SCHOOLYEARS: number[] = [10, 11, 12, 13];

function SlideDemographics({ slideText, slideNumber, type }: Props) {
  const dispatch = useSlidesDispatch();
  const context = useSlidesState();
  const [age, setAge] = useState<string>("");
  const [sex, setSex] = useState<string>("");
  const [languageOne, setLanguageOne] = useState<string>("");
  const [languageTwo, setLanguageTwo] = useState<string>("");

  const [dropDownSchoolYear, setDropDownSchoolYear] = useState(false);
  const [schoolYear, setschoolYear] = useState<number>(0);
  const dropDownSchoolYearClassName = dropDownSchoolYear
    ? "Dropdown show"
    : "Dropdown hide";

  const [dropDownGradeGerman, setDropDownGradeGerman] = useState(false);
  const [gradeGerman, setGradeGerman] = useState<string>("");
  const dropDownGradeGermanClassName = dropDownGradeGerman
    ? "Dropdown show"
    : "Dropdown hide";

  const [dropDownFachSemester, setDropDownFachSemester] = useState(false);
  const dropDownFachSemesterClassName = dropDownFachSemester
    ? "Dropdown show"
    : "Dropdown hide";
  const [fachSemester, setFachsemester] = useState<number>(0);

  const [dropDownYears, setDropDownYears] = useState(false);
  const dropDownYearsClassName = dropDownYears
    ? "Dropdown show"
    : "Dropdown hide";
  const [years, setYears] = useState<string>("");

  const [dropDownTerm, setDropDownTerm] = useState(false);
  const dropDownTermClassName = dropDownTerm
    ? "Dropdown show"
    : "Dropdown hide";
  const [term, setTerm] = useState<number>(0);
  const [subjectOne, setSubjectOne] = useState<string>("");
  const [degree, setDegree] = useState<string>("");
  const [error, setError] = useState("");

  const { launchTime, restart } = useTimer();

  const finish = () => {
    if (
      context?.answers.demographisch_intro.auswahlSchuelerStudent &&
      context?.answers.demographisch_intro.auswahlSchuelerStudent ===
        "Schüler*in"
    ) {
      if (
        (age && sex && languageOne && schoolYear && gradeGerman) ||
        inputValidationOff
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
                Klassenstufe: schoolYear,
                ZeugnisnoteDeutsch: gradeGerman,
              },
            },
          });
        restart();
      } else {
        setError("Bitte überprüfe die Vollständigkeit deiner Angaben.");
      }
    } else if (
      context?.answers.demographisch_intro.auswahlSchuelerStudent &&
      context?.answers.demographisch_intro.auswahlSchuelerStudent ===
        "Studierende*r"
    ) {
      if (
        (age &&
          sex &&
          languageOne &&
          subjectOne &&
          fachSemester &&
          term &&
          degree &&
          years) ||
        inputValidationOff
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
                Studiengang1: subjectOne,
                Fachsemester: fachSemester,
                Semester_Hochschule: term,
                Abschluss: degree,
                Schulabluss_Vergangen: years,
              },
            },
          });
        restart();
      } else {
        setError("Bitte überprüfe die Vollständigkeit deiner Angaben.");
      }
    }
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
          {context?.answers.demographisch_intro.auswahlSchuelerStudent &&
            context?.answers.demographisch_intro.auswahlSchuelerStudent ===
              "Schüler*in" && (
              <div className="Slide-demographic-row">
                <p className="Slide-demographic-label-l">Klassenstufe:</p>
                <div>
                  <button
                    className="Dropdown-button"
                    onClick={() => setDropDownSchoolYear(!dropDownSchoolYear)}
                  >
                    {schoolYear ? schoolYear : "Auswahl"}
                  </button>
                  {dropDownSchoolYear && (
                    <div className={dropDownSchoolYearClassName}>
                      {SCHOOLYEARS.map((schoolYear) => (
                        <div className="Dropdown-button-small-container">
                          <button
                            className="Dropdown-button-small"
                            id={schoolYear.toString()}
                            onClick={() => {
                              setschoolYear(schoolYear);
                              setDropDownSchoolYear(false);
                            }}
                          >
                            {schoolYear}
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
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
              placeholder="Optional"
            />
          </div>
          {context?.answers.demographisch_intro.auswahlSchuelerStudent &&
            context?.answers.demographisch_intro.auswahlSchuelerStudent ===
              "Schüler*in" && (
              <div className="Slide-demographic-row">
                <p className="Slide-demographic-label-l">
                  Letzte Zeugnisnote im Fach Deutsch:
                </p>
                <div>
                  <button
                    className="Dropdown-button"
                    onClick={() => setDropDownGradeGerman(!dropDownGradeGerman)}
                  >
                    {gradeGerman ? gradeGerman : "Auswahl"}
                  </button>
                  {dropDownGradeGerman && (
                    <div className={dropDownGradeGermanClassName}>
                      {GRADES.map((grade) => (
                        <div className="Dropdown-button-small-container">
                          <button
                            className="Dropdown-button-small"
                            id={grade}
                            onClick={() => {
                              setGradeGerman(grade);
                              setDropDownGradeGerman(false);
                            }}
                          >
                            {grade}
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          {context?.answers.demographisch_intro.auswahlSchuelerStudent &&
            context?.answers.demographisch_intro.auswahlSchuelerStudent ===
              "Studierende*r" && (
              <>
                <div className="Slide-demographic-row">
                  <p className="Slide-demographic-label-l">Studiengang:</p>
                  <input
                    className="Slide-demographic-input"
                    value={subjectOne}
                    onChange={(e) => setSubjectOne(e.target.value)}
                    type="text"
                    name="name"
                  />
                </div>
                <div className="Slide-demographic-row">
                  <p className="Slide-demographic-label-l">Fachsemester:</p>
                  <div>
                    <button
                      className="Dropdown-button"
                      onClick={() =>
                        setDropDownFachSemester(!dropDownFachSemester)
                      }
                    >
                      {fachSemester ? fachSemester : "Auswahl"}
                    </button>
                    {dropDownFachSemester && (
                      <div className={dropDownFachSemesterClassName}>
                        {FACHSEMESTER.map((fachSemester) => (
                          <div className="Dropdown-button-small-container">
                            <button
                              className="Dropdown-button-small"
                              id={fachSemester.toString()}
                              onClick={() => {
                                setFachsemester(fachSemester);
                                setDropDownFachSemester(false);
                              }}
                            >
                              {fachSemester}
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="Slide-demographic-label-l">
                    Hochschulsemester:
                  </p>
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
                    Angestrebter Hochschulabschluss:
                  </p>
                  <div className="Slide-demographic-row-boxes">
                    <div className="Slide-demographic-row-boxes-container">
                      <input
                        type="checkbox"
                        checked={
                          degree === "Bachelor of Arts/Science 1-Fach"
                            ? true
                            : false
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
                          degree === "Bachelor of Arts/Science 2-Fach"
                            ? true
                            : false
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
                          degree === "Master of Arts/Science 1-Fach"
                            ? true
                            : false
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
                          degree === "Master of Arts/Science 2-Fach"
                            ? true
                            : false
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
                        checked={
                          degree === "Master of Education" ? true : false
                        }
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
                        checked={
                          degree === "Anderer Studienabschluss" ? true : false
                        }
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
                <div className="Slide-demographic-row">
                  <p className="Slide-demographic-label-l">
                    Wie lange ist dein Schulabschluss her?
                  </p>
                  <div>
                    <button
                      className="Dropdown-button"
                      onClick={() => setDropDownYears(!dropDownYears)}
                    >
                      {years ? years : "Auswahl"}
                    </button>
                    {dropDownYears && (
                      <div className={dropDownYearsClassName}>
                        {JAHRE.map((years) => (
                          <div className="Dropdown-button-small-container">
                            <button
                              className="Dropdown-button-small"
                              id={years}
                              onClick={() => {
                                setYears(years);
                                setDropDownYears(false);
                              }}
                            >
                              {years}
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
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
