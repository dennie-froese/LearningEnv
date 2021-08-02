import React from "react";
import { useHistory } from "react-router-dom";
import { useSlidesDispatch, useSlidesState } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";
import Table from "./../../Table.png";

interface Props {
  header: string | undefined;
  slideText: string;
  slideNumber: number;
  type: string;
}

function SlideTablePNG({ slideText, header, type, slideNumber }: Props) {
  const context = useSlidesState();
  const dispatch = useSlidesDispatch();
  const { launchTime, restart } = useTimer();
  const history = useHistory();

  const finish = () => {
    const user = context?.user ? context.user : "";
    const obj = type === "Willkommen" ? { vpn: user } : null;
    if (
      context?.answers?.demographisch_intro?.auswahlSchuelerStudent &&
      context?.answers?.demographisch_intro?.auswahlSchuelerStudent ===
        "Schüler*in"
    ) {
      history.push("/schueler");
    } else {
      dispatch &&
        launchTime &&
        dispatch({
          type: "submit_slide",
          payload: {
            type: type,
            answer: { zeit: launchTime - Date.now(), ...obj },
          },
        });
      restart();
    }
  };

  const largeVersion = slideNumber === 53 ? true : false;

  const classNamePNG =
    slideNumber === 53 ? "Slide-table-png-large" : "Slide-table-png";

  return (
    <div className="Slide">
      <div className="Slide-container">
        {!largeVersion && (
          <div className="Slide-header">
            <p>{header}</p>
          </div>
        )}
        <div className="Slide-main">
          {largeVersion && <p></p>}
          <div className="Slide-text-l">{slideText}</div>
          <img className={classNamePNG} src={Table} alt="" />
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

export default SlideTablePNG;
