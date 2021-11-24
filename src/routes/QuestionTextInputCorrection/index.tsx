import React, { useEffect, useState } from "react";
import useCountdown from "../../hooks/useCountdown";
import { useSlidesDispatch, useSlidesState } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";

interface Props {
  questionNumber: number;
  type: string;
}

const examplesOrtographie = [
  "Die Studie gibt Einblicke in ein laufendes Forschungsvorhaben zur Identifizierung und Berechnung der Einflussfaktoren auf den Energieverbrauch von Elektrofahrzeugen. In der Region Stuttgart wurden dazu mehrere Elektrofahrzeuge in ihrer alltäglichen Praxis-Nutzung mittels GPS getrackt und dabei Energiedaten aufgenommen. Bisherige Ergebnisse zeigten den Einfluss des Höhenprofils und der Straßenklasse (z.B. Landesstraße, Bundesstraße). Das Wissen um die Bedingungen des Energieverbrauchs ist insbesondere angesichts der begrenzten Reichweite der Fahrzeuge eine Voraussetzung zur Nutzenoptimierung.",
  "In dieser Studie geht es um Elektoautos, und es wurde erforscht, wie viel die so verbrauchen und was darauf einen Einfluss hat, welche Faktoren also eine Rolle dabei spielen, dass ein Auto manchmal mehr und manchmal weniger verbraucht. Die Elektroautos werden mit GPS fahren gelassen und dabei werden viele Energiedaten aufgezeichnet, daraus wurde dann abgelesen, was und wie viel die Autos wo auf ihrer Strecke verbraucht haben. Und herausgefunden wurde, dass das einen Unterschied macht, wie die Straße so ist und wie das Höhenprofil ist sowas. Das war wichtig zu wissen, damit man nachvollziehen kann, welche Sachen Einfluss drauf nehmen, was die Autos so verbrauchen. Das hilft, das zu optimieren, damit die Autos irgendwann auch mehr Reichweite haben als zur Zeit.",
];

const examplesWissenschaftlich = [
  "Die Studie untersucht, welche Faktoren den Energieverbrauch von Elektrofahrzeugen beeinflussen. Untersucht wurden die Energiedaten mehrerer Elektrofahrzeuge, die mittels GPS in der Region Stuttgart erhoben wurden. Diese Befunde lassen darauf schließen, dass Faktoren wir Höhenprofil und Straßenart Einfluss auf den Energieverbrauch nehmen. Erhoben wurden Straßenart und Höhenprofil.",
  "Die Studie, die sich mit Elektroautos beschäftigt, zeigt in Abbildung 3, dass auf besonders kurvigen Straßen viel verbraucht wurde. Des Weiteren wurden noch einige andere Einflussfaktoren erhoben, die nicht in der Studie erwähnt wurden, zum Beispiel Alter der Fahrer, Verkehrsauslastung und Wetterbedingungen. Die Straßenart und das Höhenprofil sind total  besonders wichtige Einflussfaktoren auf den Energieverbrauch. In der Testfahrt sollten die schicken Elektroautos besonders schwierige und krass Strecken fahren, um ganz verschiedene Straßenarten zu testen.",
];

const examplesOrganisation = [
  "Anschließend wurden die SchülerInnen zu ihrem Mediennutzungsverhalten befragt. Im Hinblick auf die genannte Forschungsfrage kann somit geschlussfolgert werden, dass Lernangebote hauptsächlich als solche wahrgenommen werden, wenn diese in Formaten wie Nachrichtensendungen explizit gemacht werden. Um die Mediennutzung zu erfassen, wurden die Art und Regelmäßigkeit der Nutzung erhoben.",
  "Die Mediennutzung wurde erhoben. Die Einschätzung von verschiedenen Medien als Lernquellen wurden erhoben. Die Jugendlichen wurden befragt. Jugendliche bewerten das Lernpotenzial unterschiedlich. Sie sehen Nachrichten als seriös an. Das Ergebnis war, dass unterschiedliche Medien unterschiedlich stark als Lernquellen wahrgenommen werden. Das kam bei Interviews mit den Jugendlichen raus. Mit 645 Jugendlichen wurde das nämlich durchgeführt. Außerdem wurden die Jugendlichen in einen Raum geschickt, in dem sie erstmal Fragen zu ihrem Geburtsort, ihrem familiären Umfeld und ihren Interessen beantworten sollten.",
];

const exmaplesInhalt = [
  "Die Studie untersucht, wie viele Kinder und Jugendliche gewalthaltige Computerspiele spielen und ob ein Zusammenhang zwischen dem Spielen und Aggressionen besteht. An einem Gymnasium wurden 387 Kinder und Jugendliche zu der Häufigkeit und den Motiven ihrer Nutzung von gewalthaltigen Computerspielen mittels zweier Fragebogen befragt. Die gesammelten Ergebnisse zeigten ein sehr hohes Nutzungsverhalten bei den männlichen Teilnehmern, gleichzeitig jedoch ebenso ein erhöhtes Nutzungsverhalten bei den weiblichen TeilnehmerInnen. Spielfreude, Langeweile und Stressabbau konnten durch die Fragebögen als Motive für die Nutzung festgestellt werden. Das Wissen über das hohe Mediennutzungsverhalten der TeilnehmerInnen stellt die Grundlage für eine weiterreichende Forschung dar, durch welche Methoden zur Vermittlung von Medienkompetenz ermittelt werden können",
  "Da wurden 250 Kinder in einer Schule befragt. Mit Interviews. Das Thema war Computer. Dann haben die so Fragen beantwortet. Es kam raus, dass die weiblichen Teilnehmerinnen viel mehr spielten als die männlichen. Jetzt könnte man weitere Tests machen, warum die männlichen Teilnehmer weniger spielen.",
];

const examplesFormales = [
  "Die Studie untersucht, wie viele Kinder und Jugendliche gewalthaltige Computerspiele spielen und ob ein Zusammenhang zwischen dem Spielen und Aggressionen besteht. \n\nAn einem Gymnasium wurden 387 Kinder und Jugendliche zu der Häufigkeit und den Motiven ihrer Nutzung von gewalthaltigen Computerspielen mittels zweier Fragebogen befragt. \n\nDie gesammelten Ergebnisse zeigten ein sehr hohes Nutzungsverhalten bei den männlichen Teilnehmern, gleichzeitig jedoch ebenso ein erhöhtes Nutzungsverhalten bei den weiblichen TeilnehmerInnen. Spielfreude, Langeweile und Stressabbau konnten durch die Fragebögen als Motive für die Nutzung festgestellt werden.\n\nDas Wissen über das hohe Mediennutzungsverhalten der TeilnehmerInnen stellt die Grundlage für eine weiterreichende Forschung dar, durch welche Methoden zur Vermittlung von Medienkompetenz ermittelt werden können.",
  'Ich möchte jetzt über die Thematik der Nachtschatten-Gewächse, welche Ihnen sicherlich schon begegnet ist, schreiben bzw. reflektieren und außerdem weise ich darauf hin, dass diese Thematik von vielen Fachleuten, von den es gar nicht so viele gibt, wie gemeinhin ja angenommen wird, als besonders schwierig bezeichnet wird. Dazu recherchiere ich im Internet. Das hat ergeben, dass eigentlich keiner was zu Nachtschatten-Gewächsen weiß. Wurde vielleicht nie genauer geguckt, weil es ist ja sowieso auch eins langweiliges Thema. Aber ich dachte mir, ich hab heut nichts zu tun und gucke mir das mal an. Weil so Nachtschatten-Gewächse brauchen ja auch ihre wissenschaftliche Untersuchung, und diese Untersuchung hier war echt ganz wissenschaftlich. Ich hab also wie gesagt im Internet recherchiert und hab ganz wenig zu dem Thema gefunden. Aber Wikipedia hatte natürlich was dazu. Und da stand, es gibt sogar Zierpflanzen, die Nachtschatten-Gewächse sind, aber auch Nahrungspflanzen. Und die können krautig und verholzend wachsen, aber da habe ich echt keine Ahnung, was das bedeuten soll.\n   Welche Pflanzen sind zum Beispiel Nachtschatten-Gewächse:\n - Tomate\n - Kartoffel\n - Paprika\n - Voll witzig aber auch: Tabak\n Ach so, und dann hab ich geguckt, woher der Name kommt. Die heißen so, weil alle Pflanzen mehr oder weniger viele Stoffe enthalten, die zu Vergiftungen (nicht "Schatten", sondern "Schaden") und auch zur Bewusstlosigkeit (Um-"Nachtung"), manche sogar zum Tod, führen können. Gar nicht mal so schlau also, die so zu nennen. Ich dachte, weil die im Schatten und nachts am besten wachsen, heißen die halt so. Insgesamt kann mal also sagen, dass es sich jetzt nicht so dolle lohnt, sich mit dem Thema zu beschäftigen.',
];

const examplesAufbau = [
  "Die Studie untersucht, wie viele Kinder und Jugendliche gewalthaltige Computerspiele spielen und ob ein Zusammenhang zwischen dem Spielen und Aggressionen besteht. An einem Gymnasium wurden 387 Kinder und Jugendliche zu der Häufigkeit und den Motiven ihrer Nutzung von gewalthaltigen Computerspielen mittels zweier Fragebogen befragt. Die gesammelten Ergebnisse zeigten ein sehr hohes Nutzungsverhalten bei den männlichen Teilnehmern, gleichzeitig jedoch ebenso ein erhöhtes Nutzungsverhalten bei den weiblichen TeilnehmerInnen. Spielfreude, Langeweile und Stressabbau konnten durch die Fragebögen als Motive für die Nutzung festgestellt werden. Das Wissen über das hohe Mediennutzungsverhalten der TeilnehmerInnen stellt die Grundlage für eine weiterreichende Forschung dar, durch welche Methoden zur Vermittlung von Medienkompetenz ermittelt werden können",
  "An einem Gymnasium wurden 387 Kinder und Jugendliche zu der Häufigkeit und den Motiven ihrer Nutzung von gewalthaltigen Computerspielen mittels zweier Fragebogen befragt. Die Studie untersucht, wie viele Kinder und Jugendliche gewalthaltige Computerspiele spielen und ob ein Zusammenhang zwischen dem Spielen und Aggressionen besteht. Die Ergebnisse der Studie verdeutlichen, dass nicht die Computerspielnutzung per se ausschlaggebend für Aggression sei, sondern dass der Gewaltgehalt entscheidend ist. Die gesammelten Ergebnisse zeigten ein sehr hohes Nutzungsverhalten bei den männlichen Teilnehmern, gleichzeitig jedoch ebenso ein erhöhtes Nutzungsverhalten bei den weiblichen TeilnehmerInnen. Spielfreude, Langeweile und Stressabbau konnten durch die Fragebögen als Motive für die Nutzung festgestellt werden.",
];

function QuestionTextInputCorrection({ questionNumber, type }: Props) {
  const context = useSlidesState();
  const [input, setInput] = useState<string>(
    context?.answers?.Abstract_Schreiben_Timer?.antwort || ""
  );
  const examplePreviousSelected =
    context?.answers?.Kriteriurm_Verbesserung_Auswahl?.auswahlKriterium || "";

  let examples = ["", ""];
  switch (examplePreviousSelected) {
    case "Inhalt":
      examples = [exmaplesInhalt[0], exmaplesInhalt[1]];
      break;
    case "Formales":
      examples = [examplesFormales[0], examplesFormales[1]];
      break;
    case "Orthographie und Grammatik":
      examples = [examplesOrtographie[0], examplesOrtographie[1]];
      break;
    case "Wissenschaftlicher Stil":
      examples = [examplesWissenschaftlich[0], examplesWissenschaftlich[1]];
      break;
    case "Organisation des Textes":
      examples = [examplesOrganisation[0], examplesOrganisation[1]];
      break;
    case "Aufbau":
      examples = [examplesAufbau[0], examplesAufbau[1]];
      break;
  }

  const dispatch = useSlidesDispatch();
  const { launchTime, restart } = useTimer();

  const { counter, startCountdown } = useCountdown(1000);

  useEffect(() => {
    startCountdown(60);
  }, [startCountdown]);

  useEffect(() => {
    const finish = () => {
      dispatch &&
        launchTime &&
        dispatch({
          type: "submit_slide",
          payload: {
            type: type,
            answer: { zeit: -60000, antwort: input },
          },
        });
      restart();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (counter === 0) {
      finish();
    }
  }, [counter, dispatch, input, launchTime, restart, type]);

  function secsToTime(duration: number) {
    const seconds = duration % 60;
    const minutes = Math.floor(duration / 60);

    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  }

  return (
    <div className="Slide">
      <div className="Slide-container">
        <div className="Slide-header">
          <div className="Slide-text-l">Timer: {secsToTime(counter)}</div>
          <div className="Slide-text-l">
            {"\n\n"}
            Hier siehst Du Dein eben verfasstes Abstract und die ausgewählten
            Beispiele. Versuche nun, Dein Abstract auf Basis dessen, was du aus
            dem Beispiel gelernt hast, nun noch zu verbessern. Du hast dafür XX
            Minuten Zeit.
          </div>
        </div>
        <div className="Slide-textInput-container">
          <textarea
            autoCorrect="false"
            className="Slide-textinput-l"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <div className="Slide-textInput-container-study">
            <div>So geht's richtig:</div>
            <div className="Slide-criteria-units-text-box-green">
              {examples[0]}
            </div>
            <div>Und so ist es falsch:</div>
            <div className="Slide-criteria-units-text-box-red">
              {examples[1]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionTextInputCorrection;
