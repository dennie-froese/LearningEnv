import React, { useState } from "react";
import { useSlidesDispatch } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";

interface Props {
  slideText: string;
  slideNumber: number;
  type: string;
  header: string | undefined;
}

function SlideDetails({ slideText, slideNumber, type, header }: Props) {
  const [name, setName] = useState<string>("");
  const [details1, setDetails1] = useState<string>("");
  const [details2, setDetails2] = useState<string>("");
  const [details3, setDetails3] = useState<string>("");
  const [details4, setDetails4] = useState<string>("");
  const [details5, setDetails5] = useState<string>("");
  const dispatch = useSlidesDispatch();
  const { launchTime, restart } = useTimer();
  const [error, setError] = useState("");

  const finish = () => {
    if (name && details1 && details2 && details3 && details4 && details5) {
      dispatch &&
        launchTime &&
        dispatch({
          type: "submit_slide",
          payload: {
            type: type,
            answer: {
              zeit: launchTime - Date.now(),
              ...{
                name: name,
                details1: details1,
                details2: details2,
                details3: details3,
                details4: details4,
                details5: details5,
              },
            },
          },
        });
      setName("");
      restart();
    } else {
      setError("Bitte überprüfe die Vollständigkeit deiner Angaben.");
    }
  };

  return (
    <div className="Slide">
      <div className="Slide-container">
        <div className="Slide-intro-main">
          <p>{header}</p>
          <p className="Slide-text">{slideText}</p>
        </div>
        <form className="Form-details">
          <div className="Form-details-row">
            <label>Name:</label>
            <input
              className="Form-details-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
            />
          </div>
          <div className="Form-details-row">
            <label>Adresse:</label>
            <input
              className="Form-details-input"
              value={details1}
              onChange={(e) => setDetails1(e.target.value)}
              type="text"
              name="name"
            />
          </div>
          <p></p>
          <div className="Form-details-row">
            <label>Name des Kontoinhabers:</label>
            <input
              className="Form-details-input"
              value={details2}
              onChange={(e) => setDetails2(e.target.value)}
              type="text"
              name="name"
            />
          </div>
          <div className="Form-details-row">
            <label>Bankinstitut:</label>
            <input
              className="Form-details-input"
              value={details3}
              onChange={(e) => setDetails3(e.target.value)}
              type="text"
              name="name"
            />
          </div>
          <div className="Form-details-row">
            <label>IBAN:</label>
            <input
              className="Form-details-input"
              value={details4}
              onChange={(e) => setDetails4(e.target.value)}
              type="text"
              name="name"
            />
          </div>
          <div className="Form-details-row">
            <label>BIC:</label>
            <input
              className="Form-details-input"
              value={details5}
              onChange={(e) => setDetails5(e.target.value)}
              type="text"
              name="name"
            />
          </div>
        </form>
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

export default SlideDetails;
