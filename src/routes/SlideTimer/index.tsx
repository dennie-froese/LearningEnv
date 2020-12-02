import React, { useEffect, useState } from "react";
import { useSlidesDispatch } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";

interface Props {
  slideText: string;
  slideNumber: number;
  type: string;
}

function SlideTimer({ slideText, slideNumber, type }: Props) {
  const dispatch = useSlidesDispatch();
  const { launchTime, restart } = useTimer();
  const [minutes, setMinutes] = useState<number>(4);
  const [seconds, setSeconds] = useState<number>(0);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
          finish();
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const finish = () => {
    dispatch &&
      launchTime &&
      dispatch({
        type: "submit_slide",
        payload: { type: type, answer: { zeit: launchTime - Date.now() } },
      });
    restart();
  };

  return (
    <div className="Slide">
      <div className="Slide-container">
        <div className="Slide-header">
          <div className="Slide-text-l">
            Timer: {minutes}:{seconds >= 10 ? seconds : `0${seconds}`}
          </div>
        </div>
        <div className="Slide-timer-main">
          <div className="Slide-text-m">
            Der Frage, warum andere sich so verhalten, wie sie es tun, begegnen
            wir alltäglich in den verschiedensten Kontexten. Der Prozess, durch
            den wir versuchen, ein eingetretenes Ereignis oder Verhalten auf
            bestimmte Ursachen zurückzuführen, wird als{" "}
            <strong className={"Strong-underline"}>Attribution</strong>{" "}
            bezeichnet. Im Allgemeinen ist dies ein recht planmäßiger Prozess.
          </div>
          <div className="Slide-text-m">
            Wir prüfen das Verhalten anderer auf Hinweise für die Gründe, die
            hinter dem liegen, was sie sagen oder tun. Eine grundlegende Frage
            dabei ist, ob das Verhalten einer anderen Person auf internale
            Gründe (also Faktoren, die mit der eigenen Intention, Motiven oder
            Charaktereigenschaften zu tun haben) oder auf externale Ursachen
            zurückzuführen ist. Externale Ursachen beinhalten oftmals physische
            Objekte oder Situationen innerhalb der Umwelt, aber auch soziale
            oder kulturelle Faktoren. Diese Faktoren beinhalten oftmals auch{" "}
            <strong className={"Strong-underline"}>soziale Normen</strong>:
            explizite oder implizite Konventionen, die vorgeben, welches
            Verhalten in sozialen Situationen angemessen ist.
          </div>
          <div className="Slide-text-m">
            Um das Verhalten anderer zu erklären, fokussieren wir uns oft auf
            Informationen über (1){" "}
            <strong className={"Strong-underline"}>Konsens</strong>, also das
            Ausmaß, in welchem das Verhalten auch von anderen Personen gezeigt
            wird, (2) <strong className={"Strong-underline"}>Konsistenz</strong>
            , also das Ausmaß, in welchem eine bestimmte Person jeweils
            ähnliches Verhalten als Reaktion auf die gleichen Stimuli oder
            Situationen zeigt, und (3){" "}
            <strong className={"Strong-underline"}>Distinktheit</strong>, also
            das Ausmaß, in welchem eine bestimmte Person in unterschiedlicher
            Art und Weise auf ähnliche Situationen oder Stimuli reagiert. Wenn
            sehr wenige Personen wie eine bestimmte Person handeln (Konsens ist
            niedrig), die Person sich immer wieder in gleicher Weise verhält
            (Konsistenz ist hoch) und in derselben Art und Weise in vielen
            ähnlichen Situationen reagiert (Distinktheit ist niedrig), dann
            schließen wir daraus, dass ihr Verhalten auf internale Ursachen
            zurückzuführen ist. Daraus leiten wir ab, was für eine Art von
            Mensch diese Person ist und vermutlich immer bleiben wird. Wenn alle
            drei dieser Faktoren hoch sind, leiten wir im Gegensatz dazu eher
            ab, dass die Person sich auf Grund von externalen Gründen so
            verhält, wie sie es tut.
          </div>
          <div className="Slide-text-m">
            Auch wenn Attribution oft logisches Schlussfolgern beinhaltet, wie
            sie eben beschrieben wurde, ist das nicht immer der Fall.
            Tatsächlich wird die Attribution oft Gegenstand verschiedener
            Wahrnehmungsverzerrungen. Eine der populärsten
            Wahrnehmungsverzerrungen ist bekannt als{" "}
            <strong className={"Strong-underline"}>
              fundamentaler Attributionsfehler
            </strong>
            . Er beschreibt die Tendenz, das Verhalten anderer Personen zu einem
            größeren Teil auf internale Ursachen zurückzuführen als eigentlich
            gerechtfertigt wäre, während die Effekte der spezifischen Situation
            unterschätzt werden. Dies kann uns zu falschen Schlussfolgerungen
            über andere verleiten. Eine andere Verzerrung in unserer Attribution
            betrifft unser eigenes Verhalten. Die{" "}
            <strong className={"Strong-underline"}>
              selbstwertdienliche Verzerrung
            </strong>{" "}
            ist die Tendenz, positive Ergebnisse auf unsere eigenen
            Eigenschaften zurückzuführen (internale Ursachen), aber negative
            Ergebnisse auf Faktoren außerhalb unserer Kontrolle (externale
            Ursachen). Schließlich gibt es noch den{" "}
            <strong className={"Strong-underline"}>
              Gerechte-Welt-Glauben
            </strong>
            . Dieser bezieht sich auf das starke Verlangen oder Bedürfnis zu
            glauben, dass die Welt ein gerechter, vorhersehbarer und geordneter
            Ort ist, an dem jeder bekommt, was er verdient. Das beeinflusst
            unsere Attributionen, denn auch wenn wir Anhaltspunkte dafür
            erhalten, dass die Welt vielleicht nicht gerecht ist, neigen wir
            dazu, uns dennoch selbst davon überzeugen zu wollen, dass keine
            Ungerechtigkeit vorkommt.
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideTimer;
