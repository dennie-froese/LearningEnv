import React, { useEffect, useState } from "react";
import { inputValidationOff } from "../../App";
import { saveToDatabase } from "../../firebase/firebase";
import { useSlidesDispatch, useSlidesState } from "../../hooks/useSlides";
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
  const context = useSlidesState();
  const { launchTime, restart } = useTimer();
  const [error, setError] = useState("");

  useEffect(() => {
    context?.user &&
      dispatch &&
      saveToDatabase(context?.user, context?.answers);
  }, [context?.answers, context?.user, dispatch]);

  const finish = () => {
    if (
      (name && details1 && details2 && details3 && details4 && details5) ||
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
