import React, { useEffect, useState } from "react";
import { useSlidesDispatch } from "../../hooks/useSlides";
import useTimer from "../../hooks/useTimer";

interface Props {
  slideText: string;
  slideNumber: number;
  type: string;
}

export function Study() {
  return (
    <>
      <div className="Slide-text-l">
        <strong className={"Strong-underline"}>
          Steigert Kaugummikauen die Leistung?
        </strong>
      </div>
      <div className="Slide-text-m">
        Ein Experiment der besonderen Art {"\n\n"}
      </div>
      <div className="Slide-text-m">
        <strong className={"Strong"}>1 Ausgangslage{"\n\n"}</strong>
      </div>
      <div className="Slide-text-m">
        Der Wunsch, die eigene Leistung, insbesondere Gedächtnis- und
        Lernleistungen, nachhaltig zu steigern, ist vermutlich so alt wie die
        Menschheit selbst. Immer wieder wurde versucht, dies durch kurz- und
        mittelfristige Trainingsprogramme zu erreichen. Systematische Versuche,
        die Leistungsfähigkeit durch kurz- und mittelfristige Programme zu
        fördern, waren jedoch nur in geringem Ausmaß erfolgreich. So
        konstatierte beispielsweise Weinert (1994), dass sich Intelli-genz durch
        formal angelegte Trainingsprogramme weder erlernen noch nachhaltig
        verbessern ließe. Außerordentlich intensive Vorschulprogramme zur
        Förderung benachteiligter Kinder, in denen man wenige Kinder über
        mehrere Jahre hinweg 50 Wochen pro Jahr täglich sechs bis neun Stunden
        in sehr kleinen Gruppen betreut hatte und bei denen die intensive
        Betreuung im Grundschulalter fortgesetzt worden war, zeitigten zwar
        nachhaltige mittelstarke positive Effekte auf die kognitive
        Leistungsfähigkeit (vgl. Campbell, Ramey, Pungello, Sparling &
        Miller-Johnson, 2002; Ramey & Ramey, 2004). Auch wesentlich kürzer
        angelegte, wie beispielsweise die Klauerschen Denktrainings (z. B. 1993,
        in der Regel nicht mehr als 20 Sitzungen umfas-send), scheinen
        kurzfristige (und manchmal auch mittelfristige, d.h. über mehrere Monate
        rei-chende) Erfolge bezüglich der Förderung des induktiven Denkens zu
        bewirken, wie eine Me-taanalyse über 74 (zumeist quasi-experimentelle)
        Trainingsstudien belegte (Klauer & Phye, 2008). Über längerfristige,
        also nachhaltige (d. h. über mehrere Schuljahre reichende) Effekte,
        insbesondere auf alltagsrelevante Variablen (z. B. Schulleistungen in
        Fächern, in denen das in-duktive Denken eine prominente Rolle spielt),
        kann mangels einschlägiger Studien noch keine Aussage getroffen werden.{" "}
        {"\n\n"}
        Dennoch wird immer wieder, auch von namhaften MedizinernInnen und
        PsychologenInnen, wie beispielsweise dem medizinischen Psychologen S.
        Lehrl, welcher die Vorteile des Kauens auf wenigstens 30%
        Lernüberlegenheit schätzt, auf der förderlichen Wirkung von
        Kaugummi-kauen beharrt. So gab Lehrl an, dass Kaugummikauen einen nicht
        nur trivialen, sondern massi-ven positiven Einfluss auf den
        Wachheitsgrad sowie die Lernleistungen seiner Studierenden habe. In
        einem in der schweizerischen Fachzeitschrift "Ars Medici" (2007)
        publizierten Aufsatz antwortete Lehrl in einem Interview auf die Frage
        "Wenn Kaubewegungen solch einen Einfluss auf die Intelligenz
        (Hervorhebung durch uns) haben, müsste man Schulkindern nicht eigentlich
        das Kaugummi kauen […] im Unterricht gestatten?" wie folgt: "Wenn Erfolg
        wichtiger ist als Ästhetik, dann jedenfalls" (Lehrl, 2017, S. 588).
        {"\n\n"}Angesichts der insgesamt vergleichsweise geringen Auswirkungen
        von umfassenden und lang andauernden Programmen auf die kognitive
        Leistungsfähigkeit erscheint es wenig überzeugend, dass sich lediglich
        durch das Kauen eines Kaugummis die (auf der kognitiven
        Leistungsfähig-keit basierende) Lernleistung in weitaus größerem Maße
        als durch langfristig angelegte syste-matische Trainingsprogramme
        steigern lassen soll. {"\n\n"}Lehrl (1999a; siehe auch 1998, 1999b) gab
        an, mit seiner zuvor erwähnten Studie die "Wirkung von Kaugummikauen auf
        Wachheitsgrad und Lernleistungen in der frontalen Lehrveranstaltung und
        beim Betrachten von Videos" untersucht zu haben. Es hätten insgesamt 123
        Studierende seiner Vorlesung teilgenommen. Die Versuchsteilnehmer hätten
        sich auf sechs Untersuchungs-bedingungen aufgeteilt (Lehrveranstaltung
        oder Betrachtung eines Videofilmes). Die Hälfte jeder Gruppe hätte dabei
        Kaugummi gekaut. Als abhängige Variablen wären Aktivationszustand und
        Lernleistung bzw. Wissenszuwachs erfasst worden (keine Angaben über die
        verwendeten Messverfahren). In den Studien wäre bei den "Nichtkauern"
        ein Abfall des Wachheitsgrades unter das Ausgangsniveau festgestellt
        worden, die "Kauer" hätten sich dagegen dem "Zustand voller Wachheit"
        angenähert. In Bezug auf den Wissenszuwachs gab Lehrl an, dass
        diejenigen, die Kaugummi kauten, 75-85% der Fragen zu seiner Vorlesung
        richtig beantworteten, während es bei denjenigen, die kein Kaugummi
        kauten, 65-70% waren. Daher resümierte Lehrl, "mit einer höchst
        einfachen Maßnahme Lernleistungen in frontalen Informierungssituationen
        erhöht" (S. 7) zu haben. Mögliche Begründungen hierfür sehen eine
        Vielzahl an ForschernInnen, so beispielsweise Herzholz, Buskies, Rist,
        Pawlik, Hollmann & Heiss im Jahr 1987, im Zusam-menhang von motorischer
        Bewegung (erzeugt durch das Kaugummikauen) und der damit ein-hergehenden
        Erhöhung der Gehirndurchblutung und, daraus resultierend, steigender
        kognitiver Leistungsfähigkeit. Ebenso existieren empirische Studien,
        welche dem Kaugummikauen eine aufmerksamkeits- bzw.
        konzentrationsförderliche Wirkung nachsagen, so wie eine bereits im Jahr
        2002 von Wilkinson, Schollen & Wesens durchgeführte Studie. In einer
        fächerübergrei-fenden Unterrichtsmappe für die Sekundarstufe I ("Kau
        Dich schlau! Lernen rund um Kau-gummi"; Orth, Poche, Pett & Schierl,
        2006) wird Lehrkräften der Vorteil des Kaugummikauens mit folgender
        Behauptung nahegebracht: "Bei der Arbeit hilft Kaugummikauen, uns auf
        die Ar-beit, die wir gerade erledigen müssen, zu konzentrieren. [. . .]
        Viele Lehrer erlauben [. . .] ihren Schülern Kaugummikauen während der
        Klassenarbeiten" (Orth et al., 2006, S. 35; Hervorhe-bung durch uns).
        Berücksichtigt man, dass Trainings zur Förderung von Aufmerksamkeit bzw.
        Konzentration in der Regel umfassend (und multimodal) angelegt sowie
        ausgesprochen zeitin-tensiv sind (vgl. z. B. Döpfner, Schürmann &
        Frölich, 2002; Lauth & Schlottke, 2009; Schöll, 1997) und dennoch
        höchstens mittlere Effekte zeitigen, erstaunt auch diese Aussage.{" "}
        {"\n\n"}
        Angesichts der insgesamt geringen Auswirkungen von umfassenden und lang
        andauernden Trainingsprogrammen auf die Leistungsfähigkeit erscheint es
        wenig überzeugend, dass sich lediglich durch das Kauen eines Kaugummis
        die Lernleistungen von SchülerInnen und Studen-tInnen steigern lassen
        sollen. Des Weiteren lässt sich anmerken, dass sich diejenigen Studien,
        welche Effekte zugunsten der Kaugummikauer fanden, durch ihre kleinen
        Stichproben kritisie-ren lassen und somit keine kausalen Aussagen
        getroffen werden können. Methodisch sorgfältig angelegte und mit
        hinreichend vielen Teilnehmern durchgeführte Untersuchungen über die
        Auswirkungen des Kaugummikauens auf die Leistungsfähigkeit sind unseres
        Wissens bislang noch nicht veröffentlicht worden. Dieser Frage nach den
        Auswirkungen des Kaugummikauens auf die Leistungsfähigkeit, soll in der
        folgenden Untersuchung nachgegangen werden.{"\n\n\n"}
      </div>
      <div className="Slide-text-m">
        <strong className={"Strong"}>2 Das Experiment {"\n\n"}</strong>
        <strong className={"Strong"}>2.1 Fragestellung {"\n\n"}</strong>
      </div>
      <div className="Slide-text-m">
        Mit dem Experiment überprüften wir die Auswirkungen von Kaugummikauen
        auf die Leis-tungsfähigkeit, speziell auf die Konzentrations- und
        Gedächtnisleistung. Mit dem Experiment sollte folgende Fragestellung
        beantwortet werden: "Ist bei SchülernInnen der fünften und sechs-ten
        Klasse ein (zumindest) kurzzeitiger Effekt des Kaugummikauens auf
        Konzentrations- und Gedächtnisleistungen nachweisbar?"{"\n\n\n"}
      </div>
      <div className="Slide-text-m">
        <strong className={"Strong"}>2.2 Methode {"\n\n"}</strong>
        <strong className={"Strong"}>Stichprobe{"\n\n"}</strong>
      </div>
      <div className="Slide-text-m">
        Die Stichprobe bestand aus 253 Jungen sowie 251 Mädchen dreier
        hessischer Schulen, davon zwei Gesamtschulen sowie eine Grundschule mit
        Förderstufe. 250 davon waren SchülerInnen der fünften und 254
        SchülerInnen der sechsten Klassenstufe. Durchschnittlich waren die
        Teil-nehmerInnen 11.4 Jahre alt. Aufgrund von unvollständiger
        Bearbeitung schlossen wir insge-samt 18 SchülerInnen von den weiteren
        Analysen aus. Alle nachfolgenden Ergebnisse beziehen sich auf mindestens
        486 SchülerInnen. Zur Untersuchung der kurzfristigen
        Konzentrationsleistung wurde der «Aufmerksamkeits- und Belastungstest»
        von Brickenkamp (2002) genutzt. Des Weiteren gaben wir drei größere
        Aufga-ben aus dem «kombinierten Lern- und Intelligenztest für 4. und 5.
        Klassen» von Schröder (1968) vor.
        {"\n\n"}
      </div>
      <div className="Slide-text-m">
        <strong className={"Strong"}>
          Versuchsplan und Durchführung{"\n\n"}
        </strong>
      </div>
      <div className="Slide-text-m">
        Innerhalb jeder Schulklasse wurden die SchülerInnen nach dem Zufall
        einer von zwei Ver-suchsgruppen zugewiesen. Die Gruppe der SchülerInnen,
        die Kaugummi kauten, wird als Kau-er bezeichnet, die Gruppe, die kein
        Kaugummi kaute, wird als Nichtkauer betitelt. Die Versuche fanden
        gleichzeitig in zwei getrennten Räumen statt. Vor Beginn teilten die
        Versuchsleiterinnen den Kauern zwei zuckerfreie Kaugummis mit der
        Aufforderung aus, sofort mit dem Kauen zu beginnen (die Nichtkauer
        erhielten ihr Kaugummi im Anschluss an das Experiment). Vor der
        Bearbeitung der jeweiligen Tests wurde eine Beispielaufgabe
        durchgesprochen. Durchgeführt wurde das Experiment von drei dafür
        geschulten Psychologinnen. Ein "Drehbuch", das die ein-zelnen Schritte
        des Experiments genau spezifizierte, sorgte dafür, dass das Experiment
        einheit-lich ablief. Etwaige, in den Personen der Versuchsleiterinnen
        begründete Störfaktoren (z. B. physische Attraktivität, allgemeines
        pädagogisches Geschick) wurden dadurch zu minimieren versucht, dass jede
        Untersucherin etwa gleich häufig in Versuchs- und Kontrollgruppen die
        Erhebungen durchführte.
        {"\n\n"}
      </div>
      <div className="Slide-text-m">
        <strong className={"Strong"}>2.3 Ergebnisse{"\n\n"}</strong>
      </div>
      <div className="Slide-text-m">
        Um verschiedene Facetten des Konstruktes "Intelligenz" zu erfassen,
        wurden die Aspekte "Konzentrationsleistung" wie auch
        "Gedächtnisleistung" erfasst.
        {"\n\n"}
      </div>
      <div className="Slide-text-m">
        <strong className={"Strong"}>Konzentration{"\n\n"}</strong>
      </div>
      <div className="Slide-text-m">
        Die statistischen Analysen erbrachten nur bedeutsame Gruppenunterschiede
        in der Konzentrati-onsleistung und zwar zugunsten der Nichtkauer. Der
        Wert der Nichtkauer war um 0.31 Punkte besser als der der Kauer.
        {"\n\n"}
      </div>
      <div className="Slide-text-m">
        <strong className={"Strong"}>Gedächtnis{"\n\n"}</strong>
      </div>
      <div className="Slide-text-m">
        Die Gedächtnistestung kam zu dem Ergebnis, dass nur bei einer der drei
        Aufgaben ein minima-ler Unterschied vorlag, und zwar zugunsten der
        Nichtkauer. Die Überprüfung des Gesamtwer-tes "allgemeines Gedächtnis"
        (mit allen drei Aufgaben) ergab bezüglich der Kaugruppe keinen
        statistisch bedeutsamen Befund.
        {"\n\n"}
      </div>
      <div className="Slide-text-m">
        <strong className={"Strong"}>2.4 Fazit {"\n\n"}</strong>
      </div>
      <div className="Slide-text-m">
        Ausgangspunkt des Experiments ist die Behauptung von Lehrl (1998, 1999a,
        b), Kaugummi-kauen steigere merklich die kognitive Leistungsfähigkeit.
        Bei der Größe unserer Stichprobe werden durch die von uns vorgenommene
        Randomisierung (d.h. durch die zufällige Zuteilung der TeilnehmerInnen
        zu einer der beiden Gruppen) denkbare Störfaktoren, die die interne
        Vali-dität des Experiments beeinflussen können, kontrolliert. Effekte
        des Kaugummikauens auf un-terschiedliche Facetten intellektueller
        Leistungsfähigkeit der Fünft- und Sechstklässler unserer Stichprobe sind
        nicht objektivierbar. Die Behauptung, Kaugummikauen fördere die
        kognitive Leistungsfähigkeit, wird bezüglich der in unserem Experiment
        erhobenen Intelligenzfacetten nicht gestützt. Sowohl hinsichtlich der
        Konzentration als auch des Gedächtnisses ergeben sich – wenn überhaupt –
        nur kleine Unterschiede zugunsten der Nichtkauer. Es gibt aufgrund der
        Un-tersuchungslage also keinen Anlass, eine positive Wirkung des
        Kaugummikauens auf Konzent-rations- sowie Gedächtnisleistungen von
        Fünft- und Sechstklässlern zu vermuten. Anhand un-serer Stichprobe
        lassen sich die von den PsychologenInnen Wilkinson et al. (2002) bzw.
        Barker et al. (2004) berichteten Befunde der förderlichen Wirkung nicht
        bestätigen.
        {"\n\n"}
      </div>
      <div className="Slide-text-m">
        <strong className={"Strong"}>3 Diskussion {"\n\n"}</strong>
      </div>
      <div className="Slide-text-m">
        Die Förderung der kognitiven Leistungsfähigkeit sowie der Lernleistung
        war und ist sowohl in der Schule als auch in der
        pädagogisch-psychologischen Wissenschaft oftmals eine anvisierte
        Zielvorstellung. Verständlicherweise erfreuen sich Maßnahmen, die
        versprechen, mit möglichst geringem Aufwand dieses Ziel zu erreichen,
        einer enormen Beliebtheit. In diesem Zusammen-hang tauchen immer wieder
        auch Berichte über (Forschungs-)Befunde auf, die mit besonders simplen
        Maßnahmen mühelos eine statistisch signifikante und praktisch bedeutsame
        Steigerung der kognitiven Leistungsfähigkeit und damit der Lernfähigkeit
        bewirkt. {"\n\n"}Zu solchen leichtfertig popularisierten Effekten, die –
        den üblichen empirischen Standards ge-nügenden – Replikationen nicht
        standgehalten haben, zählt z. B. der ominöse «Mozart-Effekt» (Rauscher,
        Shaw & Ky, 1993), nach dem sich durch ein auf wenige Minuten begrenztes
        Hören einer ganz bestimmten Mozartsonate (KV 488) die Leistungen von
        Studenten in einem nachfol-genden Intelligenztest, speziell im
        abstrakt-räumlichen Schlussfolgern, statistisch signifikant und
        praktisch bedeutsam steigern ließen. Dies hielt kritischen
        Replikationsversuchen mit ver-gleichbaren Versuchsanordnungen jedoch
        nicht stand, sodass beispielsweise Jäncke konstatier-te: Mozart macht
        nicht schlau (vgl. Jäncke, 2008), der "Mozart-Effekt" ist nicht mehr als
        eine "wissenschaftliche Legende" (Bangerter & Heath, 2004; zur Kritik
        des "Mozart-Effekts" siehe z. B. auch Chabris, 1999; Crncec, Wilson &
        Prior, 2006; Schumacher, 2006; Spychiger, 2001; Steele, 2003; Steele,
        Bass & Crook, 1999). {"\n\n"}In diese Reihe ist auch der
        "Kaugummikaueffekt" einzuordnen. Auf der Grundlage des Experi-mentes an
        SchülerInnen der 5. und 6. Jahrgangsstufen lassen sich unter
        Berücksichtigung strikt eingehaltener Kriterien (z. B. ausreichende
        Stichprobengröße mit jeweils pro Untersuchungs-gruppe rund 250
        Teilnehmern; streng zufällige Zuteilung zu Gruppen) weder für
        Konzentrati-ons- noch für Gedächtnisleistungen Unterschiede zugunsten
        von Kauern nachweisen– im Ge-genteil: Es zeigen sich in zwei
        Aufmerksamkeits- bzw. Konzentrationswerten sowie in einem Gedächtnismaß
        bedeutsame, aber nur kleine Überlegenheiten der Nichtkauer. Es besteht
        dem-nach kein Grund zur Annahme, dass sich Kaugummikauen in einer
        Verbesserung bei der Bear-beitung von Aufgaben zur Erfassung von
        Aufmerksamkeits- bzw. Konzentrationsfähigkeit- oder Gedächtnisleistung
        bei SchülerInnen dieser Altersstufe niederschlägt. {"\n\n"}Auf der Basis
        unserer Experimente kann jedoch keine Aussage darüber getroffen werden,
        wel-che positiven Auswirkungen einzelne Personen persönlich wahrnehmen.
        Gerade deshalb ist es von so hoher Relevanz, Replikationsstudien, also
        wiederholte Durchführungen der Vorgänger-studie, mit verschiedenen
        Altersgruppen durchzuführen. Ansonsten lassen sich vergangene Studien,
        so wie eine von Rosenthal und Jacobson bereits im Jahr 1968 publizierte
        Studie, in ihren fehlgeschlagenen Replikationen kritisieren. Zur
        nachhaltigen, d.h. über viele Monate oder gar mehrere Jahre hinweg
        stabilen Förderung der Leistungsfähigkeit bedarf es einerseits einer von
        Geburt an anregenden Lernumgebung, in der die Bezugspersonen mit ihrem
        Kind so viel wie möglich sprechen und andererseits einer intensiven,
        viele Monate bzw. Jahre dauernden vorschulischen und schulischen
        Förderung (vgl. Flynn, 2007). Eine zusätzliche oder davon unabhängige
        Leistungssteigerung lässt sich wohl nicht "im Vorbeigehen"
        bewerkstelligen.
        {"\n\n"}
      </div>
    </>
  );
}

function SlideTimer({ slideText, slideNumber, type }: Props) {
  const dispatch = useSlidesDispatch();
  const { launchTime, restart } = useTimer();
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(20);

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
        <div className="Slide-header-small">
          <div className="Slide-text-l">
            Timer: {minutes}:{seconds >= 10 ? seconds : `0${seconds}`}
          </div>
        </div>
        <div className="Slide-timer-main">
          <Study />
        </div>
      </div>
    </div>
  );
}

export default SlideTimer;
