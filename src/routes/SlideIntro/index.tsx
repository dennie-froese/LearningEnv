import React from "react";
import { useHistory } from "react-router-dom";
import { useSlidesDispatch, useSlidesState } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";

interface Props {
  slideText: string;
  slideNumber: number;
  type: string;
  big?: boolean;
}

function SlideIntro({ slideText, slideNumber, type, big }: Props) {
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
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="Slide">
      <div className={big ? "Slide-container-center" : "Slide-container"}>
        <div className={big ? "Slide-intro-main-big" : "Slide-intro-main"}>
          <div className={big ? "Slide-text-xl" : "Slide-text-l"}>
            {slideText}
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

export default SlideIntro;
