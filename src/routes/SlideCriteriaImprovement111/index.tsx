import React from "react";

import { useSlidesDispatch, useSlidesState } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";

interface Props {
  slideText: string;
  slideNumber: number;
  type: string;
  criteriaIntroUnits: string[] | undefined;
  criteriaExamples: string[] | undefined;
  header: string | undefined;
}

function SlideCriteriaImprovement111({
  slideText,
  slideNumber,
  type,
  criteriaIntroUnits,
  criteriaExamples,
  header,
}: Props) {
  const context = useSlidesState();
  const dispatch = useSlidesDispatch();
  const { launchTime, restart } = useTimer();

  const finish = () => {
    const user = context?.user ? context.user : "";
    const obj = type === "Willkommen" ? { vpn: user } : null;

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
  };

  return (
    <div className="Slide">
      <div className="Slide-container">
        <div className="Slide-header-small">{header}</div>

        <div className="Slide-main">
          {criteriaIntroUnits && criteriaIntroUnits[0] && (
            <div className="Slide-criteria-units-row-red">
              <p className="Slide-label-l">{criteriaIntroUnits[0]}</p>
            </div>
          )}
          {criteriaIntroUnits && criteriaIntroUnits[1] && (
            <div className="Slide-criteria-units-row-blue">
              <p className="Slide-label-l">{criteriaIntroUnits[1]}</p>
            </div>
          )}
          {criteriaIntroUnits && criteriaIntroUnits[2] && (
            <div className="Slide-criteria-units-row-green">
              <p className="Slide-label-l">{criteriaIntroUnits[2]}</p>
            </div>
          )}
          <div>
            <div className="Slide-criteria-units-text-box-green-inner">
              <div className="Slide-criteria-units-text-box-red">
                Ich möchte jetzt über die Thematik der Nachtschatten-Gewächse,
                welche Ihnen sicherlich schon begegnet ist, schreiben bzw.
                reflektieren und außerdem weise ich darauf hin, dass diese
                Thematik von vielen Fachleuten, von den es gar nicht so viele
                gibt, wie gemeinhin ja angenommen wird, als besonders schwierig
                bezeichnet wird. Dazu recherchiere ich im Internet. Das hat
                ergeben, dass eigentlich keiner was zu Nachtschatten-Gewächsen
                weiß. Wurde vielleicht nie genauer geguckt, weil es ist ja
                sowieso auch eins langweiliges Thema. Aber ich dachte mir, ich
                hab heut nichts zu tun und gucke mir das mal an. Weil so
                Nachtschatten-Gewächse brauchen ja auch ihre wissenschaftliche
                Untersuchung, und diese Untersuchung hier war echt ganz
                wissenschaftlich. Ich hab also wie gesagt im Internet
                recherchiert und hab ganz wenig zu dem Thema gefunden. Aber
                Wikipedia hatte natürlich was dazu. Und da stand, es gibt sogar
                Zierpflanzen, die Nachtschatten-Gewächse sind, aber auch
                Nahrungspflanzen. Und die können krautig und verholzend wachsen,
                aber da habe ich echt keine Ahnung, was das bedeuten soll.
                <div className="Slide-criteria-units-text-box-blue">
                  Welche Pflanzen sind zum Beispiel Nachtschatten-Gewächse:
                  <div>- Tomate</div>
                  <div>- Kartoffel</div>
                  <div>- Paprika</div>
                  <div>- Voll witzig aber auch: Tabak</div>
                </div>
                Ach so, und dann hab ich geguckt, woher der Name kommt. Die
                heißen so, weil alle Pflanzen mehr oder weniger viele Stoffe
                enthalten, die zu Vergiftungen (nicht "Schatten", sondern
                "Schaden") und auch zur Bewusstlosigkeit (Um-"Nachtung"), manche
                sogar zum Tod, führen können. Gar nicht mal so schlau also, die
                so zu nennen. Ich dachte, weil die im Schatten und nachts am
                besten wachsen, heißen die halt so. Insgesamt kann mal also
                sagen, dass es sich jetzt nicht so dolle lohnt, sich mit dem
                Thema zu beschäftigen.
              </div>
            </div>
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

export default SlideCriteriaImprovement111;
