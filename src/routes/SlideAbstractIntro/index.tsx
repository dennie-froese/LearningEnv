import React from "react";
import { useHistory } from "react-router-dom";
import { useSlidesDispatch, useSlidesState } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";

interface Props {
  slideText: string;
  slideNumber: number;
  type: string;
  abstractIntroUnits: string[] | undefined;
}

function SlideAbstractIntro({
  slideText,
  slideNumber,
  type,
  abstractIntroUnits,
}: Props) {
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

  return (
    <div className="Slide">
      <div className="Slide-container">
        <div className="Slide-header">
          <p>{slideText}</p>
        </div>
        <div className="Slide-abstract-main">
          {abstractIntroUnits && abstractIntroUnits[0] && (
            <div className="Slide-nachangaben-row-1">
              <p className="Slide-label-l">
                {abstractIntroUnits && abstractIntroUnits[0]}
              </p>
            </div>
          )}
          {abstractIntroUnits && abstractIntroUnits[1] && (
            <div className="Slide-nachangaben-row-2">
              <p className="Slide-label-l">
                {abstractIntroUnits && abstractIntroUnits[1]}
              </p>
            </div>
          )}
          {abstractIntroUnits && abstractIntroUnits[2] && (
            <div className="Slide-nachangaben-row-1">
              <p className="Slide-label-l">
                {abstractIntroUnits && abstractIntroUnits[2]}
              </p>
            </div>
          )}
          {abstractIntroUnits && abstractIntroUnits[3] && (
            <div className="Slide-nachangaben-row-2">
              <p className="Slide-label-l">
                {abstractIntroUnits && abstractIntroUnits[3]}
              </p>
            </div>
          )}
          {abstractIntroUnits && abstractIntroUnits[4] && (
            <div className="Slide-nachangaben-row-1">
              <p className="Slide-label-l">
                {abstractIntroUnits && abstractIntroUnits[4]}
              </p>
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

export default SlideAbstractIntro;
