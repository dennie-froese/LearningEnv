export type SlideInterface = {
  id: number;
  slideType: string;
  slideText: string;
  demographic?: Record<string, string>;
  nachangaben?: Record<number, [string, string, string]>;
  tableRows?: Record<number, [string, string, string]>;
  criteriaIntroUnits?: string[];
  criteriaExamples?: string[];
  header?: string;
  ideaUnits?: string[];
  expertExamples?: string[];
  negativeExamples?: string[];
};

const SlideIDs = [
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
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  62,
  63,
  64,
  65,
  66,
  67,
  68,
  69,
  70,
  71,
  72,
  73,
  74,
  75,
  76,
  77,
  78,
  79,
  80,
  81,
  82,
  83,
  84,
  85,
  86,
  87,
  88,
  89,
  90,
  91,
  92,
  93,
  94,
  95,
  96,
  97,
  98,
  99,
  100,
  101,
  102,
  103,
  104,
  105,
  106,
  107,
  108,
  109,
  110,
  111,
  112,
  113,
  114,
  115,
];

type SlideID = typeof SlideIDs[number];

const Slides: { [key in SlideID]: SlideInterface } = {
  1: {
    id: 1,
    slideText: "Auswahl Versuchsbedingung",
    slideType: "select",
  },
  2: {
    id: 2,
    slideText: "Eingabe Versuchspersonennummer",
    slideType: "Vpn",
  },
  3: { id: 3, slideText: "", slideType: "Code" },
  4: {
    id: 4,
    slideText:
      "Herzlich Willkommen! Schön, dass Du an dieser Studie teilnimmst.\n\n\nZum Starten der Studie klicke bitte auf „Weiter“.",
    slideType: "Willkommen",
  },
  5: {
    id: 5,
    slideText:
      "Vielen Dank, dass Du an unserer Studie teilnimmst. Im Folgenden wirst Du verschiedene Aufgaben bearbeiten. \n \n \nBitte befolge stets die Anweisungen, die Dir auf den einzelnen Seiten gegeben werden. Für die vollständige Teilnahme an dieser Studie erhältst du eine Aufwandsentschädigung in Höhe von 10 Euro. Das Geld wird Dir nach erfolgreichem Abschluss der Studie per Überweisung ausgezahlt, d.h. Du solltest die Seite vor Beendigung der Studie nicht verlassen. Für die Überweisung benötigen wir Deine Kontodaten, die Du am Ende der Studie angeben musst. Die Daten werden nach Beendigung der Studie anonymisiert und ausschließlich zu forschungsinternen Zwecken von den Mitarbeiter*innen der Arbeitsgruppe Bildungspsychologie der Ruhr-Universität Bochum gespeichert und verwendet. Du kannst der Speicherung und Verwendung Deiner Daten nachträglich widersprechen, musst dann jedoch die Aufwandsentschädigung zurückzahlen. Bitte beachte, dass die Löschung Deiner Daten nur so lange erfolgen kann, wie diese nicht anonymisiert wurden. \n \nBitte beachte, dass Du die Aufwandsentschädigung nur erhältst, wenn Du die Studie vollständig und entsprechend der Anweisungen bearbeitest. Das bedeutet, wenn Du einzelne Seiten z. B. ohne ernsthafte Bearbeitung „durchklickst“, oder Felder freilässt, dann können wir das in Deinen Daten sehen und können Dir die Aufwandsentschädigung für Deine Teilnahme nicht auszahlen. Die Teilnahme an dieser Studie ist freiwillig und kann jederzeit ohne negative Konsequenzen abgebrochen werden kann. \n \nWenn Du alles aufmerksam gelesen hast, klicke auf „Weiter“ und starte damit Deine Teilnahme an der Studie. \n \nKlicke nur auf „Weiter“, wenn Du mit den Teilnahmebedingungen einverstanden bist.",
    slideType: "Intro",
  },
  6: {
    id: 6,
    slideText:
      "Wähle bitte zunächst die zutreffenden Angaben zu Deiner Person aus. Klicke nach der Auswahl bitte auf „Weiter“. \n \n Ich bin:",
    slideType: "demographisch_intro",
  },
  7: {
    id: 7,
    slideText:
      "Angaben zu deiner Person: Fülle bitte zunächst die folgenden Angaben zu Deiner Person aus. Klicke nach der Eingabe bitte auf „Weiter“.",
    slideType: "demographisch",
  },
  8: {
    id: 8,
    slideText:
      "Nun möchten wir Dich bitten, anzugeben, inwiefern die folgenden Aussagen auf Dich persönlich zutreffen. Es gibt keine richtigen oder falschen Antworten. Klicke auf „Weiter“, um zur nächsten Seite zu gelangen.",
    slideType: "Nachangaben_Intro",
  },
  9: {
    id: 9,
    slideText: "",
    slideType: "NachAngaben_Schueler_1_4",
    nachangaben: {
      1: [
        "Ich bin einfach nicht in Deutsch.",
        "trifft überhaupt nicht zu",
        "trifft völlig zu",
      ],
      2: [
        "In Deutsch bekomme ich gute Noten.",
        "trifft überhaupt nicht zu",
        "trifft völlig zu",
      ],
      3: [
        "In Deutsch lerne ich schnell.",
        "trifft überhaupt nicht zu",
        "trifft völlig zu",
      ],
      4: [
        "Ich war schon immer überzeugt, dass Deutsch eines meiner besten Fächer ist.",
        "trifft überhaupt nicht zu",
        "trifft völlig zu",
      ],
    },
  },
  10: {
    id: 10,
    slideText: "",
    slideType: "Nachangaben_1_4",
    nachangaben: {
      1: [
        "Ich bin einfach nicht gut im Schreiben.",
        "trifft überhaupt nicht zu",
        "trifft völlig zu",
      ],
      2: [
        "Für Schreibaufträge/ Aufsätze bekomme ich gute Noten.",
        "trifft überhaupt nicht zu",
        "trifft völlig zu",
      ],
      3: [
        "Ich war schon immer überzeugt, dass Schreiben eine meiner Stärken ist.",
        "trifft überhaupt nicht zu",
        "trifft völlig zu",
      ],
      4: [
        "Beim Schreiben verbessere ich mich schnell.",
        "trifft überhaupt nicht zu",
        "trifft völlig zu",
      ],
    },
  },
  11: {
    id: 11,
    slideText:
      "Nun möchten wir Dir eine kurze Einführung in eine Textsorte geben, die für das wissenschaftliche Schreiben sehr wichtig ist: das sogenannte Abstract. Doch was ist ein Abstract überhaupt?",
    slideType: "Abstract_Intro",
  },
  12: {
    id: 12,
    slideText: "Was ist ein Abstract?",
    slideType: "Abstract_Intro_1",
    criteriaIntroUnits: [
      "Wissenschaftler forschen und möchten durch Experimente mehr über ein Thema erfahren.",
    ],
  },
  13: {
    id: 13,
    slideText: "Was ist ein Abstract?",
    slideType: "Abstract_Intro_2",
    criteriaIntroUnits: [
      "Wissenschaftler forschen und möchten durch Experimente mehr über ein Thema erfahren.",
      "Ihre Ergebnisse veröffentlichen sie in Büchern und Zeitschriften.",
    ],
  },
  14: {
    id: 14,
    slideText: "Was ist ein Abstract?",
    slideType: "Abstract_Intro_3",
    criteriaIntroUnits: [
      "Wissenschaftler forschen und möchten durch Experimente mehr über ein Thema erfahren.",
      "Ihre Ergebnisse veröffentlichen sie in Büchern und Zeitschriften.",
      "Um sich auf dem aktuellen Stand zu halten, müssen sie viele Aufsätze von anderen Wissenschaftlern lesen.",
    ],
  },
  15: {
    id: 15,
    slideText: "Was ist ein Abstract?",
    slideType: "Abstract_Intro_4",
    criteriaIntroUnits: [
      "Wissenschaftler forschen und möchten durch Experimente mehr über ein Thema erfahren.",
      "Ihre Ergebnisse veröffentlichen sie in Büchern und Zeitschriften.",
      "Um sich auf dem aktuellen Stand zu halten, müssen sie viele Aufsätze von anderen Wissenschaftlern lesen.",
      "Wissenschaftler sind unter Zeitdruck. Abstracts helfen ihnen zu entscheiden, ob sie einen Aufsatz wirklich lesen müssen und ob er wichtig für sie ist.",
    ],
  },
  16: {
    id: 16,
    slideText: "Definition",
    slideType: "Abstract_Definition_1",
    criteriaIntroUnits: [
      "Kurze, sachliche Zusammenfassung eines wissenschaftlichen Aufsatzes",
    ],
  },
  17: {
    id: 17,
    slideText: "Definition",
    slideType: "Abstract_Definition_2",
    criteriaIntroUnits: [
      "Kurze, sachliche Zusammenfassung eines wissenschaftlichen Aufsatzes",
      "fasst die wichtigsten Aspekte zusammen",
    ],
  },
  18: {
    id: 18,
    slideText: "Definition",
    slideType: "Abstract_Definition_3",
    criteriaIntroUnits: [
      "Kurze, sachliche Zusammenfassung eines wissenschaftlichen Aufsatzes",
      "fasst die wichtigsten Aspekte zusammen",
      "„erster Kontakt“ des Lesers mit dem Aufsatz",
    ],
  },
  19: {
    id: 19,
    slideText:
      "Nun weißt Du, worum es sich bei der Textsorte handelt. Als nächstes erfährst Du mehr darüber, wie man ein Abstract schreibt. Dazu werden Dir gleich verschiedene Kriterien gezeigt, die ein gutes Abstract erfüllen sollte. Klicke auf „Weiter“.",
    slideType: "Abstract_Criteria_Intro_1",
  },
  20: {
    id: 20,
    slideText: "Kriterium: Inhalt des Abstracts",
    slideType: "Abstract_Criteria_Intro_2",
  },
  21: {
    id: 21,
    slideText: "Kriterium „Inhalt“:Was sollte ein Abstract beinhalten?",
    slideType: "Abstract_Criteria",
    criteriaIntroUnits: [
      "1. Die Beschreibung des untersuchten Problems/der Frage",
      "2. Die Versuchsobjekte oder Datengrundlage (Merkmale)",
      "3. Die Methode, mit der geforscht wurde",
      "4. Die zentralen Ergebnisse",
      "5. Ein Fazit und die wichtigsten Schlüsse, die gezogen werden können",
    ],
  },
  22: {
    id: 22,
    slideText: "",
    slideType: "Abstract_Table_1",
    tableRows: {
      0: ["Beispiel 1", "Beispiel 2", ""],
      1: [
        "1. Die Beschreibung des untersuchten Problems/der Frage",
        "„Die Studie untersucht, ob und wie Jugendliche über Medien lernen und welche Medien sie dazu bevorzugt nutzen.“",
        "",
      ],
      2: ["2. Die Versuchsobjekte oder Datengrundlage (Merkmale)", "", ""],
      3: ["3. Die Methode, mit der geforscht wurde", "", ""],
      4: ["4. Die zentralen Ergebnisse", "", ""],
      5: [
        "5. Ein Fazit und die wichtigsten Schlüsse, die gezogen werden können",
        "",
        "",
      ],
    },
  },
  23: {
    id: 23,
    slideText: "",
    slideType: "Abstract_Table_2",
    tableRows: {
      0: ["Beispiel 1", "Beispiel 2", ""],
      1: [
        "1. Die Beschreibung des untersuchten Problems/der Frage",
        "„Die Studie untersucht, ob und wie Jugendliche über Medien lernen und welche Medien sie dazu bevorzugt nutzen.“",
        "„In zwei Experimenten wurde der Frage nachgegangen, wie Kinder die Fähigkeit entwickeln, zwischen Werbung und anderen Programmformaten zu unterscheiden. Ab welchem Alter können Kinder Werbung von Kinderfilmen unterscheiden?“",
      ],
      2: ["2. Die Versuchsobjekte oder Datengrundlage (Merkmale)", "", ""],
      3: ["3. Die Methode, mit der geforscht wurde", "", ""],
      4: ["4. Die zentralen Ergebnisse", "", ""],
      5: [
        "5. Ein Fazit und die wichtigsten Schlüsse, die gezogen werden können",
        "",
        "",
      ],
    },
  },
  24: {
    id: 24,
    slideText: "",
    slideType: "Abstract_Table_3",
    tableRows: {
      0: ["Beispiel 1", "Beispiel 2", ""],
      1: [
        "1. Die Beschreibung des untersuchten Problems/der Frage",
        "„Die Studie untersucht, ob und wie Jugendliche über Medien lernen und welche Medien sie dazu bevorzugt nutzen.“",
        "„In zwei Experimenten wurde der Frage nachgegangen, wie Kinder die Fähigkeit entwickeln, zwischen Werbung und anderen Programmformaten zu unterscheiden. Ab welchem Alter können Kinder Werbung von Kinderfilmen unterscheiden?“",
      ],
      2: [
        "2. Die Versuchsobjekte oder Datengrundlage (Merkmale)",
        "„645 Schülerinnen und Schüler (320 männlich, 325 weiblich) der 7. bis 10. Jahrgangsstufe von Gymnasien, Real- und Hauptschulen nahmen an der Untersuchung teil.“",
        "",
      ],
      3: ["3. Die Methode, mit der geforscht wurde", "", ""],
      4: ["4. Die zentralen Ergebnisse", "", ""],
      5: [
        "5. Ein Fazit und die wichtigsten Schlüsse, die gezogen werden können",
        "",
        "",
      ],
    },
  },
  25: {
    id: 25,
    slideText: "",
    slideType: "Abstract_Table_4",
    tableRows: {
      0: ["Beispiel 1", "Beispiel 2", ""],
      1: [
        "1. Die Beschreibung des untersuchten Problems/der Frage",
        "„Die Studie untersucht, ob und wie Jugendliche über Medien lernen und welche Medien sie dazu bevorzugt nutzen.“",
        "„In zwei Experimenten wurde der Frage nachgegangen, wie Kinder die Fähigkeit entwickeln, zwischen Werbung und anderen Programmformaten zu unterscheiden. Ab welchem Alter können Kinder Werbung von Kinderfilmen unterscheiden?“",
      ],
      2: [
        "2. Die Versuchsobjekte oder Datengrundlage (Merkmale)",
        "„645 Schülerinnen und Schüler (320 männlich, 325 weiblich) der 7. bis 10. Jahrgangsstufe von Gymnasien, Real- und Hauptschulen nahmen an der Untersuchung teil.“",
        "„Die 360 teilnehmenden Kinder (55 % Prozent männlich, 45 % weiblich) variierten im Alter von fünf bis achteinhalb Jahren.“",
      ],
      3: ["3. Die Methode, mit der geforscht wurde", "", ""],
      4: ["4. Die zentralen Ergebnisse", "", ""],
      5: [
        "5. Ein Fazit und die wichtigsten Schlüsse, die gezogen werden können",
        "",
        "",
      ],
    },
  },
  26: {
    id: 26,
    slideText: "",
    slideType: "Abstract_Table_5",
    tableRows: {
      0: ["Beispiel 1", "Beispiel 2", ""],
      1: [
        "1. Die Beschreibung des untersuchten Problems/der Frage",
        "„Die Studie untersucht, ob und wie Jugendliche über Medien lernen und welche Medien sie dazu bevorzugt nutzen.“",
        "„In zwei Experimenten wurde der Frage nachgegangen, wie Kinder die Fähigkeit entwickeln, zwischen Werbung und anderen Programmformaten zu unterscheiden. Ab welchem Alter können Kinder Werbung von Kinderfilmen unterscheiden?“",
      ],
      2: [
        "2. Die Versuchsobjekte oder Datengrundlage (Merkmale)",
        "„645 Schülerinnen und Schüler (320 männlich, 325 weiblich) der 7. bis 10. Jahrgangsstufe von Gymnasien, Real- und Hauptschulen nahmen an der Untersuchung teil.“",
        "„Die 360 teilnehmenden Kinder (55 % Prozent männlich, 45 % weiblich) variierten im Alter von fünf bis achteinhalb Jahren.“",
      ],
      3: [
        "3. Die Methode, mit der geforscht wurde",
        "„Die Schülerinnen und Schüler wurden zu ihrem Medienverhalten (Nutzung verschiedener Medien, Einschätzung des Lernpotenzials) mit Hilfe eines leitfadengestützten Interviews befragt.“",
        "",
      ],
      4: ["4. Die zentralen Ergebnisse", "", ""],
      5: [
        "5. Ein Fazit und die wichtigsten Schlüsse, die gezogen werden können",
        "",
        "",
      ],
    },
  },
  27: {
    id: 27,
    slideText: "",
    slideType: "Abstract_Table_6",
    tableRows: {
      0: ["Beispiel 1", "Beispiel 2", ""],
      1: [
        "1. Die Beschreibung des untersuchten Problems/der Frage",
        "„Die Studie untersucht, ob und wie Jugendliche über Medien lernen und welche Medien sie dazu bevorzugt nutzen.“",
        "„In zwei Experimenten wurde der Frage nachgegangen, wie Kinder die Fähigkeit entwickeln, zwischen Werbung und anderen Programmformaten zu unterscheiden. Ab welchem Alter können Kinder Werbung von Kinderfilmen unterscheiden?“",
      ],
      2: [
        "2. Die Versuchsobjekte oder Datengrundlage (Merkmale)",
        "„645 Schülerinnen und Schüler (320 männlich, 325 weiblich) der 7. bis 10. Jahrgangsstufe von Gymnasien, Real- und Hauptschulen nahmen an der Untersuchung teil.“",
        "„Die 360 teilnehmenden Kinder (55 % Prozent männlich, 45 % weiblich) variierten im Alter von fünf bis achteinhalb Jahren.“",
      ],
      3: [
        "3. Die Methode, mit der geforscht wurde",
        "„Die Schülerinnen und Schüler wurden zu ihrem Medienverhalten (Nutzung verschiedener Medien, Einschätzung des Lernpotenzials) mit Hilfe eines leitfadengestützten Interviews befragt.“",
        "„Zur Beantwortung der Forschungsfrage wurden in einem Experiment mit 5- und 8-jährigen Kindern kurze Ausschnitte von Werbeclips und Kinderfilmen dargeboten. Die Kinder sollten schnellstmöglich mittels Tastendruck zwischen den beiden Programmformaten unterscheiden.“",
      ],
      4: ["4. Die zentralen Ergebnisse", "", ""],
      5: [
        "5. Ein Fazit und die wichtigsten Schlüsse, die gezogen werden können",
        "",
        "",
      ],
    },
  },
  28: {
    id: 28,
    slideText: "",
    slideType: "Abstract_Table_7",
    tableRows: {
      0: ["Beispiel 1", "Beispiel 2", ""],
      1: [
        "1. Die Beschreibung des untersuchten Problems/der Frage",
        "„Die Studie untersucht, ob und wie Jugendliche über Medien lernen und welche Medien sie dazu bevorzugt nutzen.“",
        "„In zwei Experimenten wurde der Frage nachgegangen, wie Kinder die Fähigkeit entwickeln, zwischen Werbung und anderen Programmformaten zu unterscheiden. Ab welchem Alter können Kinder Werbung von Kinderfilmen unterscheiden?“",
      ],
      2: [
        "2. Die Versuchsobjekte oder Datengrundlage (Merkmale)",
        "„645 Schülerinnen und Schüler (320 männlich, 325 weiblich) der 7. bis 10. Jahrgangsstufe von Gymnasien, Real- und Hauptschulen nahmen an der Untersuchung teil.“",
        "„Die 360 teilnehmenden Kinder (55 % Prozent männlich, 45 % weiblich) variierten im Alter von fünf bis achteinhalb Jahren.“",
      ],
      3: [
        "3. Die Methode, mit der geforscht wurde",
        "„Die Schülerinnen und Schüler wurden zu ihrem Medienverhalten (Nutzung verschiedener Medien, Einschätzung des Lernpotenzials) mit Hilfe eines leitfadengestützten Interviews befragt.“",
        "„Zur Beantwortung der Forschungsfrage wurden in einem Experiment mit 5- und 8-jährigen Kindern kurze Ausschnitte von Werbeclips und Kinderfilmen dargeboten. Die Kinder sollten schnellstmöglich mittels Tastendruck zwischen den beiden Programmformaten unterscheiden.“",
      ],
      4: [
        "4. Die zentralen Ergebnisse",
        "„Dabei zeigt sich, dass die Jugendlichen vor allem auf qualitativ hochwertige Medienangebote als mögliche Lernquellen setzen, während sie Fernsehserien oder Videoclips ein solches Potenzial absprechen.“",
        "",
      ],
      5: [
        "5. Ein Fazit und die wichtigsten Schlüsse, die gezogen werden können",
        "",
        "",
      ],
    },
  },
  29: {
    id: 29,
    slideText: "",
    slideType: "Abstract_Table_8",
    tableRows: {
      0: ["Beispiel 1", "Beispiel 2", ""],
      1: [
        "1. Die Beschreibung des untersuchten Problems/der Frage",
        "„Die Studie untersucht, ob und wie Jugendliche über Medien lernen und welche Medien sie dazu bevorzugt nutzen.“",
        "„In zwei Experimenten wurde der Frage nachgegangen, wie Kinder die Fähigkeit entwickeln, zwischen Werbung und anderen Programmformaten zu unterscheiden. Ab welchem Alter können Kinder Werbung von Kinderfilmen unterscheiden?“",
      ],
      2: [
        "2. Die Versuchsobjekte oder Datengrundlage (Merkmale)",
        "„645 Schülerinnen und Schüler (320 männlich, 325 weiblich) der 7. bis 10. Jahrgangsstufe von Gymnasien, Real- und Hauptschulen nahmen an der Untersuchung teil.“",
        "„Die 360 teilnehmenden Kinder (55 % Prozent männlich, 45 % weiblich) variierten im Alter von fünf bis achteinhalb Jahren.“",
      ],
      3: [
        "3. Die Methode, mit der geforscht wurde",
        "„Die Schülerinnen und Schüler wurden zu ihrem Medienverhalten (Nutzung verschiedener Medien, Einschätzung des Lernpotenzials) mit Hilfe eines leitfadengestützten Interviews befragt.“",
        "„Zur Beantwortung der Forschungsfrage wurden in einem Experiment mit 5- und 8-jährigen Kindern kurze Ausschnitte von Werbeclips und Kinderfilmen dargeboten. Die Kinder sollten schnellstmöglich mittels Tastendruck zwischen den beiden Programmformaten unterscheiden.“",
      ],
      4: [
        "4. Die zentralen Ergebnisse",
        "„Dabei zeigt sich, dass die Jugendlichen vor allem auf qualitativ hochwertige Medienangebote als mögliche Lernquellen setzen, während sie Fernsehserien oder Videoclips ein solches Potenzial absprechen.“",
        "„Bereits die 4-jährigen Kinder waren dazu in der Lage, das Konzept ‘Werbung‘ von Kinderfilmen zu unterscheiden.“",
      ],
      5: [
        "5. Ein Fazit und die wichtigsten Schlüsse, die gezogen werden können",
        "",
        "",
      ],
    },
  },
  30: {
    id: 30,
    slideText: "",
    slideType: "Abstract_Table_9",
    tableRows: {
      0: ["Beispiel 1", "Beispiel 2", ""],
      1: [
        "1. Die Beschreibung des untersuchten Problems/der Frage",
        "„Die Studie untersucht, ob und wie Jugendliche über Medien lernen und welche Medien sie dazu bevorzugt nutzen.“",
        "„In zwei Experimenten wurde der Frage nachgegangen, wie Kinder die Fähigkeit entwickeln, zwischen Werbung und anderen Programmformaten zu unterscheiden. Ab welchem Alter können Kinder Werbung von Kinderfilmen unterscheiden?“",
      ],
      2: [
        "2. Die Versuchsobjekte oder Datengrundlage (Merkmale)",
        "„645 Schülerinnen und Schüler (320 männlich, 325 weiblich) der 7. bis 10. Jahrgangsstufe von Gymnasien, Real- und Hauptschulen nahmen an der Untersuchung teil.“",
        "„Die 360 teilnehmenden Kinder (55 % Prozent männlich, 45 % weiblich) variierten im Alter von fünf bis achteinhalb Jahren.“",
      ],
      3: [
        "3. Die Methode, mit der geforscht wurde",
        "„Die Schülerinnen und Schüler wurden zu ihrem Medienverhalten (Nutzung verschiedener Medien, Einschätzung des Lernpotenzials) mit Hilfe eines leitfadengestützten Interviews befragt.“",
        "„Zur Beantwortung der Forschungsfrage wurden in einem Experiment mit 5- und 8-jährigen Kindern kurze Ausschnitte von Werbeclips und Kinderfilmen dargeboten. Die Kinder sollten schnellstmöglich mittels Tastendruck zwischen den beiden Programmformaten unterscheiden.“",
      ],
      4: [
        "4. Die zentralen Ergebnisse",
        "„Dabei zeigt sich, dass die Jugendlichen vor allem auf qualitativ hochwertige Medienangebote als mögliche Lernquellen setzen, während sie Fernsehserien oder Videoclips ein solches Potenzial absprechen.“",
        "„Bereits die 4-jährigen Kinder waren dazu in der Lage, das Konzept ‘Werbung‘ von Kinderfilmen zu unterscheiden.“",
      ],
      5: [
        "5. Ein Fazit und die wichtigsten Schlüsse, die gezogen werden können",
        "„Die Einschätzungen des Lernpotenzials der Jugendlichen zeigen, dass Lernangebote hauptsächlich als solche wahrgenommen werden, wenn diese in Formaten wie Nachrichtensendungen explizit gemacht werden.“",
        "",
      ],
    },
  },
  31: {
    id: 31,
    slideText: "",
    slideType: "Abstract_Table_10",
    tableRows: {
      0: ["Beispiel 1", "Beispiel 2", ""],
      1: [
        "1. Die Beschreibung des untersuchten Problems/der Frage",
        "„Die Studie untersucht, ob und wie Jugendliche über Medien lernen und welche Medien sie dazu bevorzugt nutzen.“",
        "„In zwei Experimenten wurde der Frage nachgegangen, wie Kinder die Fähigkeit entwickeln, zwischen Werbung und anderen Programmformaten zu unterscheiden. Ab welchem Alter können Kinder Werbung von Kinderfilmen unterscheiden?“",
      ],
      2: [
        "2. Die Versuchsobjekte oder Datengrundlage (Merkmale)",
        "„645 Schülerinnen und Schüler (320 männlich, 325 weiblich) der 7. bis 10. Jahrgangsstufe von Gymnasien, Real- und Hauptschulen nahmen an der Untersuchung teil.“",
        "„Die 360 teilnehmenden Kinder (55 % Prozent männlich, 45 % weiblich) variierten im Alter von fünf bis achteinhalb Jahren.“",
      ],
      3: [
        "3. Die Methode, mit der geforscht wurde",
        "„Die Schülerinnen und Schüler wurden zu ihrem Medienverhalten (Nutzung verschiedener Medien, Einschätzung des Lernpotenzials) mit Hilfe eines leitfadengestützten Interviews befragt.“",
        "„Zur Beantwortung der Forschungsfrage wurden in einem Experiment mit 5- und 8-jährigen Kindern kurze Ausschnitte von Werbeclips und Kinderfilmen dargeboten. Die Kinder sollten schnellstmöglich mittels Tastendruck zwischen den beiden Programmformaten unterscheiden.“",
      ],
      4: [
        "4. Die zentralen Ergebnisse",
        "„Dabei zeigt sich, dass die Jugendlichen vor allem auf qualitativ hochwertige Medienangebote als mögliche Lernquellen setzen, während sie Fernsehserien oder Videoclips ein solches Potenzial absprechen.“",
        "„Bereits die 4-jährigen Kinder waren dazu in der Lage, das Konzept ‘Werbung‘ von Kinderfilmen zu unterscheiden.“",
      ],
      5: [
        "5. Ein Fazit und die wichtigsten Schlüsse, die gezogen werden können",
        "„Die Einschätzungen des Lernpotenzials der Jugendlichen zeigen, dass Lernangebote hauptsächlich als solche wahrgenommen werden, wenn diese in Formaten wie Nachrichtensendungen explizit gemacht werden.“",
        "„Die Ergebnisse zeigen, dass die Unterscheidung von Film und Werbung schon im frühesten Kindesalter bewusst ist.“",
      ],
    },
  },
  32: {
    id: 32,
    slideText: "Kriterium “Formales”",
    slideType: "Criteria_Formal_Intro",
  },
  33: {
    id: 33,
    slideText: "Kriterium „Formales“: Was gilt es zu beachten?",
    slideType: "Beispiel_Attribution0",
    criteriaIntroUnits: [
      "1. Maximale Wortanzahl: 250 Wörter",
      "2. Schreiben in ganzen Sätzen",
      "3. Keine Verwendung der Ich-Form",
    ],
  },
  34: {
    id: 34,
    slideText: "Kriterium “Orthographie und Grammatik”",
    slideType: "Criteria_Orthographie_Intro",
  },
  35: {
    id: 35,
    slideText:
      "Kriterium „Orthographie und Grammatik“:Wie sollte ein Abstract geschrieben sein?",
    slideType: "Criteria_Orthographie_Intro_1",
    criteriaIntroUnits: ["1. Orthographisch und grammatisch korrekt schreiben"],
  },
  36: {
    id: 36,
    slideText:
      "Kriterium „Orthographie und Grammatik“:Wie sollte ein Abstract geschrieben sein?",
    slideType: "Criteria_Orthographie_Intro_2",
    criteriaIntroUnits: [
      "1. Orthographisch und grammatisch korrekt schreiben",
      "2. Für Methoden und Ergebnisse: Präteritum (z.B. ergab, sagte) \n\nFür Fazit und Schlussfolgerungen: Präsens (z.B. ergibt, sagt)",
    ],
  },
  37: {
    id: 37,
    slideText:
      "Kriterium „Orthographie und Grammatik“:Wie sollte ein Abstract geschrieben sein?",
    slideType: "Criteria_Orthographie_Intro_3",
    criteriaIntroUnits: [
      "1. Orthographisch und grammatisch korrekt schreiben",
      "2. Für Methoden und Ergebnisse: Präteritum (z.B. ergab, sagte) \n\nFür Fazit und Schlussfolgerungen: Präsens (z.B. ergibt, sagt)",
      "3. Nutzung eher von Aktiv- statt Passiv-Formulierungen (sagt vs. wird gesagt)",
    ],
  },
  38: {
    id: 38,
    slideText:
      "„Die Studie gibt Einblicke in ein laufendes Forschungsvorhaben zur Identifizierung und Berechnung der Einflussfaktoren auf den Energieverbrauch von Elektrofahrzeugen. In der Region Stuttgart wurden dazu mehrere Elektrofahrzeuge in ihrer alltäglichen Praxis-Nutzung mittels GPS getrackt und dabei Energiedaten aufgenommen. Bisherige Ergebnisse zeigten den Einfluss des Höhenprofils und der Straßenklasse (z.B. Landesstraße, Bundesstraße). Das Wissen um die Bedingungen des Energieverbrauchs ist insbesondere angesichts der begrenzten Reichweite der Fahrzeuge eine Voraussetzung zur Nutzenoptimierung.“",
    slideType: "Criteria_Orthographie_Right",
    criteriaIntroUnits: [
      "1. Orthographisch und grammatisch korrekt schreiben",
      "2. Für Methoden und Ergebnisse: Präteritum (z.B. ergab, sagte) \n\nFür Fazit und Schlussfolgerungen: Präsens (z.B. ergibt, sagt)",
      "3. Nutzung eher von Aktiv- statt Passiv-Formulierungen (sagt vs. wird gesagt)",
    ],
  },
  39: {
    id: 39,
    slideText:
      "„In dieser Studie geht es um Elektoautos, und es wurde erforscht, wie viel die so verbrauchen und was darauf einen Einfluss hat, welche Faktoren also eine Rolle dabei spielen, dass ein Auto manchmal mehr und manchmal weniger verbraucht. Die Elektroautos werden mit GPS fahren gelassen und dabei werden viele Energiedaten aufgezeichnet, daraus wurde dann abgelesen, was und wie viel die Autos wo auf ihrer Strecke verbraucht haben. Und herausgefunden wurde, dass das einen Unterschied macht, wie die Straße so ist und wie das Höhenprofil ist sowas. Das war wichtig zu wissen, damit man nachvollziehen kann, welche Sachen Einfluss drauf nehmen, was die Autos so verbrauchen. Das hilft, das zu optimieren, damit die Autos irgendwann auch mehr Reichweite haben als zur Zeit.",
    slideType: "Criteria_Orthographie_Wrong",
    criteriaIntroUnits: [
      "1. Orthographisch und grammatisch korrekt schreiben",
      "2. Für Methoden und Ergebnisse: Präteritum (z.B. ergab, sagte) \n\nFür Fazit und Schlussfolgerungen: Präsens (z.B. ergibt, sagt)",
      "3. Nutzung eher von Aktiv- statt Passiv-Formulierungen (sagt vs. wird gesagt)",
    ],
  },
  40: {
    id: 40,
    slideText: "Kriterium “Wissenschaftlicher Stil”",
    slideType: "Criteria_Scientific",
  },
  41: {
    id: 41,
    slideText:
      "Kriterium „wissenschaftlicher Stil“:Wie sollte ein Abstract geschrieben sein?",
    slideType: "Criteria_Scientific_1",
    criteriaIntroUnits: ["1. Ich schreibe für meine Leser veständlich"],
  },
  42: {
    id: 42,
    slideText:
      "Kriterium „wissenschaftlicher Stil“:Wie sollte ein Abstract geschrieben sein?",
    slideType: "Criteria_Scientific_2",
    criteriaIntroUnits: [
      "1. Ich schreibe für meine Leser veständlich",
      "2. Ich beziehe mich nur auf die Studie, schweife nicht ab und verallgemeinere nicht",
    ],
  },
  43: {
    id: 43,
    slideText:
      "Kriterium „wissenschaftlicher Stil“:Wie sollte ein Abstract geschrieben sein?",
    slideType: "Criteria_Scientific_3",
    criteriaIntroUnits: [
      "1. Ich schreibe für meine Leser veständlich",
      "2. Ich beziehe mich nur auf die Studie, schweife nicht ab und verallgemeinere nicht",
      "3. Ich schreibe objektiv und vermeide Umgangssprache (z.B. total, ein bisschen)",
    ],
  },
  44: {
    id: 44,
    slideText:
      "Kriterium „wissenschaftlicher Stil“:Wie sollte ein Abstract geschrieben sein?",
    slideType: "Criteria_Scientific_4",
    criteriaIntroUnits: [
      "1. Ich schreibe für meine Leser veständlich",
      "2. Ich beziehe mich nur auf die Studie, schweife nicht ab und verallgemeinere nicht",
      "3. Ich schreibe objektiv und vermeide Umgangssprache (z.B. total, ein bisschen)",
      "4. Ich drücke mich mit möglichst wenig Wörtern eindeutig aus",
    ],
  },
  45: {
    id: 45,
    slideText: "",
    slideType: "Criteria_Scientific_Right",
    criteriaIntroUnits: [
      "1. Ich schreibe für meine Leser veständlich",
      "2. Ich beziehe mich nur auf die Studie, schweife nicht ab und verallgemeinere nicht",
      "3. Ich schreibe objektiv und vermeide Umgangssprache (z.B. total, ein bisschen)",
      "4. Ich drücke mich mit möglichst wenig Wörtern eindeutig aus",
    ],
    criteriaExamples: [
      "„Die Studie untersucht, welche Faktoren den Energieverbrauch von Elektrofahrzeugen beeinflussen.“",
      "„Untersucht wurden die Energiedaten mehrerer Elektrofahrzeuge, die mittels GPS in der Region Stuttgart erhoben wurden.“",
      "„Diese Befunde lassen darauf schließen, dass Faktoren wir Höhenprofil und Straßenart Einfluss auf den Energieverbrauch nehmen.“",
      "„Erhoben wurden Straßenart und Höhenprofil.“",
    ],
  },
  46: {
    id: 46,
    slideText: "",
    slideType: "Criteria_Scientific_Wrong",
    criteriaIntroUnits: [
      "1. Ich schreibe für meine Leser veständlich",
      "2. Ich beziehe mich nur auf die Studie, schweife nicht ab und verallgemeinere nicht",
      "3. Ich schreibe objektiv und vermeide Umgangssprache (z.B. total, ein bisschen)",
      "4. Ich drücke mich mit möglichst wenig Wörtern eindeutig aus",
    ],
    criteriaExamples: [
      "„Die Studie, die sich mit Elektroautos beschäftigt, zeigt in Abbildung 3, dass auf besonders kurvigen Straßen viel verbraucht wurde.“",
      "„Des Weiteren wurden noch einige andere Einflussfaktoren erhoben, die nicht in der Studie erwähnt wurden, zum Beispiel Alter der Fahrer, Verkehrsauslastung und Wetterbedingungen.“",
      "„Die Straßenart und das Höhenprofil sind total  besonders wichtige Einflussfaktoren auf den Energieverbrauch.“",
      "„In der Testfahrt sollten die schicken Elektroautos besonders schwierige und krass Strecken fahren, um ganz verschiedene Straßenarten zu testen.“",
    ],
  },
  47: {
    id: 47,
    slideText: "Kriterium “Organisation des Textes”",
    slideType: "Criteria_Text_Organisation",
  },
  48: {
    id: 48,
    slideText:
      "Kriterium „Organisation“:Wie schreibe ich einen sinnvoll aufgebauten Text?",
    slideType: "Criteria_Text_Organisation_1",
    criteriaIntroUnits: [
      "1. Ich nutze zeitliche Ausdrücke (z.B. anschließend), um Verbindungen zwischen den Sätzen zu schaffen",
      "2. Ich nutze begründende Ausdrücke (z.B. folglich, deshalb, abschließend), um Verbindungen zwischen den Sätzen zu schaffen",
      "3. Ich nutze weitere Ausdrücke, um Verbindungen zwischen den Sätzen zu schaffen (z.B. damit, um…zu)",
    ],
  },
  49: {
    id: 49,
    slideText: "",
    slideType: "Criteria_Text_Organisation_Right",
    criteriaIntroUnits: [
      "1. Ich nutze zeitliche Ausdrücke (z.B. anschließend), um Verbindungen zwischen den Sätzen zu schaffen",
      "2. Ich nutze begründende Ausdrücke (z.B. folglich, deshalb, abschließend), um Verbindungen zwischen den Sätzen zu schaffen",
      "3. Ich nutze weitere Ausdrücke, um Verbindungen zwischen den Sätzen zu schaffen (z.B. damit, um…zu)",
    ],
    criteriaExamples: [
      "„Anschließend wurden die SchülerInnen zu ihrem Mediennutzungsverhalten befragt.“",
      "„Im Hinblick auf die genannte Forschungsfrage kann somit geschlussfolgert werden, dass Lernangebote hauptsächlich als solche wahrgenommen werden, wenn diese in Formaten wie Nachrichtensendungen explizit gemacht werden.“",
      "„Um die Mediennutzung zu erfassen, wurden die Art und Regelmäßigkeit der Nutzung erhoben.“",
    ],
  },
  50: {
    id: 50,
    slideText: "",
    slideType: "Criteria_Text_Organisation_Wrong",
    criteriaIntroUnits: [
      "1. Ich nutze zeitliche Ausdrücke (z.B. anschließend), um Verbindungen zwischen den Sätzen zu schaffen",
      "2. Ich nutze begründende Ausdrücke (z.B. folglich, deshalb, abschließend), um Verbindungen zwischen den Sätzen zu schaffen",
      "3. Ich nutze weitere Ausdrücke, um Verbindungen zwischen den Sätzen zu schaffen (z.B. damit, um…zu)",
    ],
    criteriaExamples: [
      "Die Mediennutzung wurde erhoben. Die Einschätzung von verschiedenen Medien als Lernquellen wurden erhoben. Die Jugendlichen wurden befragt.“",
      "„Jugendliche bewerten das Lernpotenzial unterschiedlich. Sie sehen Nachrichten als seriös an.“",
      "„Das Ergebnis war, dass unterschiedliche Medien unterschiedlich stark als Lernquellen wahrgenommen werden. Das kam bei Interviews mit den Jugendlichen raus. Mit 645 Jugendlichen wurde das nämlich durchgeführt.“",
      "„Außerdem wurden die Jugendlichen in einen Raum geschickt, in dem sie erstmal Fragen zu ihrem Geburtsort, ihrem familiären Umfeld und ihren Interessen beantworten sollten.“",
    ],
  },
  51: {
    id: 51,
    slideText: "Kriterium “Aufbau”",
    slideType: "Criteria_Structure",
  },
  52: {
    id: 52,
    slideText:
      "Den Aufbau hast du eigentlich schon kennengelernt. In unseren Beispielen haben sich nach und nach zwei vollständige Abstracts aufgebaut.",
    slideType: "Criteria_Structure_Table_1",
    header: "Kriterium „Aufbau“: Wie sollte ein Abstract aufgebaut sein?",
  },
  53: {
    id: 53,
    slideText:
      "So sollte der Aufbau eines Abstracts aussehen. Diese Reihenfolge ist logisch nachvollziehbar und die einzelnen Punkt bauen aufeinander auf. Andere Reihenfolgen (z.B. die Ergebnisse vor der Methode oder das Fazit vor den Ergebnissen) würden verwirrend sein).",
    slideType: "Criteria_Structure_Table_2",
    header: "",
  },
  54: {
    id: 54,
    slideText: "Lesen einer wissenschaftlichen Studie",
    slideType: "Criteria_ReadingScience",
  },
  55: {
    id: 55,
    header: "Lesen einer wissenschaftlichen Studie",
    slideText:
      "Deine nächste Aufgabe ist es gleich, eine echte wissenschaftliche Studie zu einer Forschungsarbeit zu lesen. \n\n\nDiese trägt den Titel „Steigert Kaugummikauen das kognitive Leistungsvermögen?“ und wurde 2012 in der „Zeitschrift für Pädagogische Psychologie“ veröffentlicht.\n\n\nLies Dir die Studie bitte konzentriert durch. Bitte mache Dir keine Notizen. Du hast XX Minuten Zeit zum Lesen. Anschließend wirst Du eine Aufgabe zu dem Text bearbeiten. Deine verbleibende Lesezeit wird Dir auf dem Bildschirm angezeigt. Bitte nutze die ganze Zeit zum Lesen der Studie.",
    slideType: "Criteria_ReadingScience_1",
  },
  56: {
    id: 56,
    slideText:
      "Lies Dir die Studie bitte konzentriert durch. Bitte mache Dir keine Notizen. Du hast XX Minuten Zeit zum Lesen. Anschließend wirst Du eine Aufgabe zu dem Text bearbeiten. Deine verbleibende Lesezeit wird Dir auf dem Bildschirm angezeigt. Bitte nutze die ganze Zeit zum Lesen der Studie.",
    slideType: "Study_Timer",
  },
  57: {
    id: 57,
    slideText:
      "Was denkst Du, wie gut hast du die wissenschaftliche Studie verstanden?",
    slideType: "Likert_Study_1",
  },
  58: {
    id: 58,
    slideText:
      "Wie leicht oder schwer fiel es Dir gerade, Dein Verständnis zur wissenschaftlichen Studie einzuschätzen?",
    slideType: "Likert_Study_2",
  },
  59: {
    id: 59,
    slideText:
      "Beim Einschätzen meines Verständnisses der Studie war meine geistige Denkanstrengung…",
    slideType: "Likert_Study_3",
  },
  60: {
    id: 60,
    slideText: "Ein Abstract schreiben",
    slideType: "Abstract_Writing",
  },
  61: {
    id: 61,
    slideText:
      "Schreibe ein Abstract zu der wissenschaftlichen Studie. \n\nBitte denke dazu daran, was Du vor dem Lesen zu den Kriterien eines Abstracts erfahren hast und versuche, dies in dein Abstract einzubringen.\n\nDer Studientext wird dir parallel während des Schreibens zur Verfügung stehen.\n\nKlicke den Weiter-Button und du gelangst zum Schreibfeld.\n\nDu hast für das Schreiben XX Minuten Zeit.",
    slideType: "Abstract_Writing_1",
    header: "Ein Abstract schreiben",
  },
  62: {
    id: 62,
    slideText: "",
    slideType: "Abstract_Writing_2",
  },
  63: {
    id: 63,
    slideText:
      "Wie leicht oder schwer fiel es Dir, dein Abstract zu schreiben?",
    slideType: "Likert_Abstract_Writing",
  },
  64: {
    id: 64,
    slideText:
      "Beim Schreiben meines Abstracts war meine geistige Denk-Anstrengung insgesamt …",
    slideType: "Likert_Abstract_Writing_2",
  },
  65: {
    id: 65,
    slideText: "Selbstbewertung des Abstracts",
    slideType: "SelfEvaluation_Abstract",
  },
  66: {
    id: 66,
    slideText:
      "Nun ist es deine Aufgabe, deinen eigenen Text nach den Kriterien, die du zu Beginn kennengelernt hast, zu bewerten.\n\nDazu erhältst du gleich ein Bewertungsraster, das dir dabei helfen soll, deinen Text genau einzuschätzen.\n\nSchaue dir jedes Kriterium und die dazugehörigen Spalten genau an und versuche, dein Abstract genau und ehrlich anhand der einzelnen Kriterien einzuschätzen.\n\nTrage dann in das dafür vorgesehene Feld die Anzahl der Punkte ein, die du dir für das Kriterium geben würdest.\n\nWenn du bereit bist zu beginnen, klicke den „Weiter“-Button.",
    slideType: "SelfEvaluation_Abstract_1",
    header: "Selbstbewertung des Abstracts",
  },
  67: {
    id: 67,
    slideText:
      "Bitte bewerte hier dein Abstract nach dem Kriterium „Inhalt“ und trage im Eingabefeld deine Bewertung ein.",
    slideType: "SelfEvaluation_Abstract_Content",
  },
  68: {
    id: 68,
    slideText:
      "Wie leicht oder schwer fiel es dir, dein Abstract zum Kriterium “Inhalt” zu bewerten?",
    slideType: "SelfEvaluation_Abstract_Content_Likert_1",
  },
  69: {
    id: 69,
    slideText:
      "Beim Bewerten meines Abstracts zum Kriterium “Inhalt” war meine geistige Denk-Anstrengung…",
    slideType: "SelfEvaluation_Abstract_Content_Likert_2",
  },
  70: {
    id: 70,
    slideText:
      "Bitte bewerte hier dein Abstract nach dem Kriterium „Formales“ und trage im Eingabefeld deine Bewertung ein.",
    slideType: "SelfEvaluation_Abstract_Formal",
  },
  71: {
    id: 71,
    slideText:
      "Wie leicht oder schwer fiel es dir, dein Abstract zum Kriterium “Formales” zu bewerten?",
    slideType: "SelfEvaluation_Abstract_Formal_Likert_1",
  },
  72: {
    id: 72,
    slideText:
      "Beim Bewerten meines Abstracts zum Kriterium “Formales” war meine geistige Denk-Anstrengung…",
    slideType: "SelfEvaluation_Abstract_Formal_Likert_2",
  },
  73: {
    id: 73,
    slideText:
      "Bitte bewerte hier dein Abstract nach dem Kriterium „Orthographie und Grammatik“ und trage im Eingabefeld deine Bewertung ein.",
    slideType: "SelfEvaluation_Abstract_Orthographie",
    header:
      "Denke Dir bitte ein Beispiel aus, das das Konzept hoher Distinktheit veranschaulicht.",
  },
  74: {
    id: 74,
    slideText:
      "Wie leicht oder schwer fiel es dir, dein Abstract zum Kriterium “Orthographie und Grammatik” zu bewerten?",
    slideType: "SelfEvaluation_Abstract_Orthographie_Likert_1",
  },
  75: {
    id: 75,
    slideText:
      "Beim Bewerten meines Abstracts zum Kriterium “Orthographie und Grammatik” war meine geistige Denk-Anstrengung…",
    slideType: "SelfEvaluation_Abstract_Orthographie_Likert_2",
  },
  76: {
    id: 76,
    slideText:
      "Bitte bewerte hier dein Abstract nach dem Kriterium „wissenschaftlicher Stil“ und trage im Eingabefeld deine Bewertung ein.",
    slideType: "SelfEvaluation_Abstract_Scientific",
  },
  77: {
    id: 77,
    slideText:
      "Wie leicht oder schwer fiel es dir, dein Abstract zum Kriterium “wissenschaftlicher Stil” zu bewerten?",
    slideType: "SelfEvaluation_Abstract_Scientific_Likert_1",
  },
  78: {
    id: 78,
    slideText:
      "Beim Bewerten meines Abstracts zum Kriterium “wissenschaftlicher Stil” war meine geistige Denk-Anstrengung…",
    slideType: "SelfEvaluation_Abstract_Scientific_Likert_2",
  },
  79: {
    id: 79,
    slideText:
      "Bitte bewerte hier dein Abstract nach dem Kriterium „Organisation des Textes“ und trage im Eingabefeld deine Bewertung ein.",
    slideType: "SelfEvaluation_Abstract_Organisation",
  },
  80: {
    id: 80,
    slideText:
      "Wie leicht oder schwer fiel es dir, dein Abstracts zum Kriterium “Organisation des Textes”zu bewerten?",
    slideType: "SelfEvaluation_Abstract_Organisation_Likert_1",
  },
  81: {
    id: 81,
    slideText:
      "Beim Bewerten meines Abstracts zum Kriterium “Organisation des Textes” war meine geistige Denk-Anstrengung…",
    slideType: "SelfEvaluation_Abstract_Organisation_Likert_2",
  },
  82: {
    id: 82,
    slideText:
      "Bitte bewerte hier dein Abstract nach dem Kriterium „Aufbau“ und trage im Eingabefeld deine Bewertung ein.",
    slideType: "SelfEvaluation_Abstract_Structure",
  },
  83: {
    id: 83,
    slideText:
      "Wie leicht oder schwer fiel es dir, dein Abstracts zum Kriterium “Aufbau”zu bewerten?",
    slideType: "SelfEvaluation_Abstract_Structure_Likert_1",
  },
  84: {
    id: 84,
    slideText:
      "Beim Bewerten meines Abstracts zum Kriterium “Aufbau” war meine geistige Denk-Anstrengung…",
    slideType: "SelfEvaluation_Abstract_Structure_Likert_2",
  },
  85: {
    id: 85,
    slideText:
      "Nun ist es deine Aufgabe, deinen eigenen Text nach den Kriterien, die du zu Beginn kennengelernt hast, zu bewerten.\n\nDazu erhältst du gleich ein Bewertungsraster, das dir dabei helfen soll, deinen Text genau einzuschätzen.\n\nSchaue dir jedes Kriterium und die dazugehörigen Spalten genau an und versuche, dein Abstract genau und ehrlich anhand der einzelnen Kriterien einzuschätzen.\n\nTrage dann in das dafür vorgesehene Feld die Anzahl der Punkte ein, die du dir für das Kriterium geben würdest.\n\nWenn du bereit bist zu beginnen, klicke den „Weiter“-Button.",
    slideType: "SelfEvaluation_Abstract_Group2",
    header: "Selbstbewertung des Abstracts",
  },
  86: {
    id: 86,
    slideText:
      "Bitte gleiche Dein Beispiel zum Konzept „Fundamentaler Attributionsfehler“ nun mit den folgenden Beispielen ab.",
    slideType: "FA_g1_1",
    header: "Konzept „Fundamentaler Attributionsfehler“",
    negativeExamples: [
      "Unglücklicherweise schreibt eine Schulklasse genau an dem Tag eine Klassenarbeit, an dem eine Baustelle neben der Schule starken Lärm verursacht. Als die Schulklasse die Arbeit ein paar Wochen später wiederbekommen, stellen die Schüler fest, dass diese sehr schlecht ausgefallen ist. Die Schüler*innen schreiben dies dem Lärm der Baustelle zu. Dass es an ihren eigenen Fähigkeiten gelegen haben könnte, kommt ihnen nicht in den Sinn.",
      "Wenn Frau Müller sich unfreundlich gegenüber ihren Mitmenschen verhält, denkt sie, dass dieses Verhalten an der aktuell stressigen Arbeitsphase liegt. Ist sie dagegen freundlich und höflich, führt sie dies auf ihre gute Erziehung zurück.",
    ],
    expertExamples: [
      "Im spannenden Endspiel der Fußballweltmeisterschaft wird dem Torwart infolge eines Fouls eine gelbe Karte gegeben. Der Torwart wird daraufhin aggressiv und beschimpft den Schiedsrichter. Der Kommentator schlussfolgert, die Reaktion des Torwarts sei durch die generell schon aggressive Art und geringe Frustrationstoleranz des Torwarts bedingt. Im Interview nach dem Spiel erklärt der Torwart bezüglich seines Ausrasters, dass die Situation, im Finale der Weltmeisterschaft zu stehen, einen großen Druck auf ihn ausgeübt habe und er grundsätzlich kein aggressiver Mensch sei.",
      "Bei Familie Maier ist das Gesprächsthema Nummer 1 die gegenüber von ihnen wohnende Frau Peters. Familie Maier regt sich darüber auf, dass Frau Peters einen Babysitter für ihr Neugeborenes eingestellt hat. Frau und Herr Maier erklären sich dieses Verhalten damit, dass Frau Peters eine lieblose Mutter sei und sich nicht richtig um ihr Kind kümmern würde. Frau Peters ist allerdings alleinerziehend und muss arbeiten gehen, um genug Geld zu verdienen, weshalb sie einen Babysitter benötigt.",
    ],
  },
  88: {
    id: 88,
    slideText:
      "Bitte gleiche Dein Beispiel zum Konzept „Fundamentaler Attributionsfehler“ mit den beiden hier dargestellten Beispielen ab.",
    slideType: "FA_g2",
    header: "Konzept „Fundamentaler Attributionsfehler“",
    negativeExamples: [
      "Unglücklicherweise schreibt eine Schulklasse genau an dem Tag eine Klassenarbeit, an dem eine Baustelle neben der Schule starken Lärm verursacht. Als die Schulklasse die Arbeit ein paar Wochen später wiederbekommen, stellen die Schüler fest, dass diese sehr schlecht ausgefallen ist. Die Schüler*innen schreiben dies dem Lärm der Baustelle zu. Dass es an ihren eigenen Fähigkeiten gelegen haben könnte, kommt ihnen nicht in den Sinn.",
      "Wenn Frau Müller sich unfreundlich gegenüber ihren Mitmenschen verhält, denkt sie, dass dieses Verhalten an der aktuell stressigen Arbeitsphase liegt. Ist sie dagegen freundlich und höflich, führt sie dies auf ihre gute Erziehung zurück.",
    ],
  },
  89: {
    id: 89,
    slideText:
      "Bitte gleiche Dein Beispiel zum Konzept „Fundamentaler Attributionsfehler“ mit den beiden hier dargestellten Expertenbeispielen ab.",
    slideType: "FA_g3",
    header: "Konzept „Fundamentaler Attributionsfehler“",
    expertExamples: [
      "Im spannenden Endspiel der Fußballweltmeisterschaft wird dem Torwart infolge eines Fouls eine gelbe Karte gegeben. Der Torwart wird daraufhin aggressiv und beschimpft den Schiedsrichter. Der Kommentator schlussfolgert, die Reaktion des Torwarts sei durch die generell schon aggressive Art und geringe Frustrationstoleranz des Torwarts bedingt. Im Interview nach dem Spiel erklärt der Torwart bezüglich seines Ausrasters, dass die Situation, im Finale der Weltmeisterschaft zu stehen, einen großen Druck auf ihn ausgeübt habe und er grundsätzlich kein aggressiver Mensch sei.",
      "Bei Familie Maier ist das Gesprächsthema Nummer 1 die gegenüber von ihnen wohnende Frau Peters. Familie Maier regt sich darüber auf, dass Frau Peters einen Babysitter für ihr Neugeborenes eingestellt hat. Frau und Herr Maier erklären sich dieses Verhalten damit, dass Frau Peters eine lieblose Mutter sei und sich nicht richtig um ihr Kind kümmern würde. Frau Peters ist allerdings alleinerziehend und muss arbeiten gehen, um genug Geld zu verdienen, weshalb sie einen Babysitter benötigt.",
    ],
  },
  90: {
    id: 90,
    slideText: "Bitte bewerte nun Dein Beispiel.",
    slideType: "FA_g4",
    header: "Konzept „Fundamentaler Attributionsfehler“",
  },
  91: {
    id: 91,
    slideText:
      "Das Einschätzen der Qualität meines Beispiels zum Konzept „Fundamentaler Attributionsfehler“ fiel mir…",
    slideType: "Beispiel_FA3",
  },
  92: {
    id: 92,
    slideText:
      "Beim Einschätzen der Qualität meines Beispiels zum Konzept „Fundamentaler Attributionsfehler“ war meine geistige Denkanstrengung…",
    slideType: "Beispiel_FA4",
  },
  93: {
    id: 93,
    slideText:
      "Selbstwertdienliche Verzerrung: Die Tendenz, positive Ergebnisse auf unsere eigenen Charaktereigenschaften (internale Ursachen) zurückzuführen, aber negative Ergebnisse eher auf Faktoren außerhalb unserer Kontrolle (externale Ursachen).",
    slideType: "Beispiel_SV0",
    header:
      "Denke Dir bitte ein Beispiel aus, das das Konzept „Selbstwertdienliche Verzerrung” veranschaulicht.“",
  },
  94: {
    id: 94,
    slideText:
      "Das Ausdenken eines Beispiels zum Konzept „Selbstwertdienliche Verzerrung“ fiel mir…",
    slideType: "Beispiel_SV1",
  },
  95: {
    id: 95,
    slideText:
      "Beim Ausdenken eines Beispiels zum Konzept „Selbstwertdienliche Verzerrung“ war meine geistige Denkanstrengung…",
    slideType: "Beispiel_SV2",
  },
  96: {
    id: 96,
    slideText:
      "Bitte gleiche Dein Beispiel zum Konzept „Selbstwertdienliche Verzerrung“ nun mit den folgenden Beispielen ab.",
    slideType: "SV_g1_1",
    header: "Konzept „Selbstwertdienliche Verzerrung“",
    negativeExamples: [
      "Mareike gewinnt im Schach gegen ihren Freund Maik. Maik glaubt, dass der Sieg von Mareike nur daran lag, dass er sich schlecht konzentrieren konnte und er einen schlechten Tag hatte.",
      "Klara ist überzeugt, dass ihr Mann und Vater ihres Kindes Jakob ein guter Mensch ist. Ihr Sohn Jakob befindet sich im Teenager-Alter und zeigt aggressives und gewalttätiges Verhalten. Klara denkt, Jakob habe die Gene von ihr geerbt, und nicht von ihrem Mann, weil er ja ihrer Überzeugung nach ein guter Mensch sei.",
    ],
    expertExamples: [
      "Nach einem Referat erhält Janosch sowohl positives als auch negatives Feedback. Eine seiner Mitschülerinnen lobt ihn für die sinnvolle Aufteilung der Inhalte. Janosch führt dies auf seine Intelligenz zurück. Ein anderer Mitschüler macht Janosch darauf aufmerksam, dass die Inhalte des Referats nicht gut nachzuvollziehen waren. Dies erklärt Janosch sich mit den technischen Störungen des Beamers und den Unterbrechungen vom Lehrer – an ihm selber wird dies wohl nicht gelegen haben.",
      "Herr Janssen ist Geschäftsführer einer privaten Firma und hat vor Kurzem zwei wichtige Angebote bei zwei verschiedenen Firmen eingereicht. Als er die Rückmeldung erhält, dass eines der zwei Angebote abgelehnt wurde, schreibt er dies dem Sachbearbeiter zu, der das Angebot bearbeitet hat, weil dieser wohl eine persönliche Abneigung gegen Herrn Janssen habe. Das zweite Angebot dagegen wurde angenommen, was Herr Janssen damit begründet, dass er sehr gut darin ist, Angebote zu schreiben.",
    ],
  },
  98: {
    id: 98,
    slideText:
      "Bitte gleiche Dein Beispiel zum Konzept „Selbstwertdienliche Verzerrung“ mit den beiden hier dargestellten Beispielen ab.",
    slideType: "SV_g2",

    header: "Konzept „Selbstwertdienliche Verzerrung“",
    negativeExamples: [
      "Mareike gewinnt im Schach gegen ihren Freund Maik. Maik glaubt, dass der Sieg von Mareike nur daran lag, dass er sich schlecht konzentrieren konnte und er einen schlechten Tag hatte.",
      "Klara ist überzeugt, dass ihr Mann und Vater ihres Kindes Jakob ein guter Mensch ist. Ihr Sohn Jakob befindet sich im Teenager-Alter und zeigt aggressives und gewalttätiges Verhalten. Klara denkt, Jakob habe die Gene von ihr geerbt, und nicht von ihrem Mann, weil er ja ihrer Überzeugung nach ein guter Mensch sei.",
    ],
  },
  99: {
    id: 99,
    slideText:
      "Bitte gleiche Dein Beispiel zum Konzept „Selbstwertdienliche Verzerrung“ mit den beiden hier dargestellten Expertenbeispielen ab. ",
    slideType: "SV_g3",
    header: "Konzept „Selbstwertdienliche Verzerrung“",
    expertExamples: [
      "Nach einem Referat erhält Janosch sowohl positives als auch negatives Feedback. Eine seiner Mitschülerinnen lobt ihn für die sinnvolle Aufteilung der Inhalte. Janosch führt dies auf seine Intelligenz zurück. Ein anderer Mitschüler macht Janosch darauf aufmerksam, dass die Inhalte des Referats nicht gut nachzuvollziehen waren. Dies erklärt Janosch sich mit den technischen Störungen des Beamers und den Unterbrechungen vom Lehrer – an ihm selber wird dies wohl nicht gelegen haben.",
      "Herr Janssen ist Geschäftsführer einer privaten Firma und hat vor Kurzem zwei wichtige Angebote bei zwei verschiedenen Firmen eingereicht. Als er die Rückmeldung erhält, dass eines der zwei Angebote abgelehnt wurde, schreibt er dies dem Sachbearbeiter zu, der das Angebot bearbeitet hat, weil dieser wohl eine persönliche Abneigung gegen Herrn Janssen habe. Das zweite Angebot dagegen wurde angenommen, was Herr Janssen damit begründet, dass er sehr gut darin ist, Angebote zu schreiben.",
    ],
  },
  100: {
    id: 100,
    slideText: "Bitte bewerte nun Dein Beispiel.",
    slideType: "SV_g4",
    header: "Konzept „Selbstwertdienliche Verzerrung“",
  },
  101: {
    id: 101,
    slideText:
      "Das Einschätzen der Qualität meines Beispiels zum Konzept „Selbstwertdienliche Verzerrung“ fiel mir…",
    slideType: "Beispiel_SV3",
  },
  102: {
    id: 102,
    slideText:
      "Beim Einschätzen der Qualität meines Beispiels zum Konzept „Selbstwertdienliche Verzerrung“ war meine geistige Denkanstrengung…",
    slideType: "Beispiel_SV4",
  },
  103: {
    id: 103,
    slideText:
      "Gerechte-Welt-Glaube: Das starke Verlangen oder Bedürfnis zu glauben, dass die Welt ein geordneter, vorhersehbarer und gerechter Ort ist, an dem jeder bekommt, was er oder sie verdient.",
    slideType: "Beispiel_GWG0",
    header:
      "Denke Dir bitte ein Beispiel aus, das das Konzept „Gerechte-Welt-Glaube” veranschaulicht.",
  },
  104: {
    id: 104,
    slideText:
      "Das Ausdenken eines Beispiels zum Konzept „Gerechte-Welt-Glaube“ fiel mir…",
    slideType: "Beispiel_GWG1",
  },
  105: {
    id: 105,
    slideText:
      "Beim Ausdenken eines Beispiels zum Konzept „Gerechte-Welt-Glaube“ war meine geistige Denkanstrengung…",
    slideType: "Beispiel_GWG2",
  },
  106: {
    id: 106,
    slideText:
      "Bitte gleiche Dein Beispiel zum Konzept „Gerechte-Welt-Glaube“ nun mit den folgenden Beispielen ab.",
    slideType: "GWG_g1_1",
    header: "Konzept „Gerechte-Welt-Glaube”",
    negativeExamples: [
      "Julia wird im Supermarkt von einem älteren Mann angerempelt, woraufhin ihr ihre Einkäufe herunterfallen. Sie redet sich ein, dass dieser sie bestimmt nicht gesehen habe und eigentlich einen guten Kern habe. Dabei hat der Mann Julia sogar gesehen, ihm war es aber egal, weil er schnell zur Kasse wollte.",
      "Can geht es seit Antritt seiner neuen Stelle finanziell sehr gut. Sein Freund Jona dagegen beklagt sich bei ihm, weil er selber Geringverdiener ist. Can ist der Meinung, dass Jona selber daran schuld ist, denn er könnte sich ja einen anderen, besser bezahlten Job suchen.",
    ],
    expertExamples: [
      "Laura streitet sich mit ihrer Mutter. Sie hat erneut ihr Zimmer nicht aufgeräumt, will aber jetzt zur Stufenparty fahren, obwohl ihre Mutter sie darum bittet, vorher ihr Zimmer in Ordnung zu bringen. Laura ignoriert die Bitte und steigt auf ihr Fahrrad. Auf der Hälfte der Strecke übersieht sie einen Bordstein und stürzt. Ihre Knie und Hände sind aufgeschürft. Laura ist sich sicher, dass sie diesen Unfall hätte vorhersehen können, da sie es verdient hatte, hinzufallen, weil sie ihr Zimmer nicht aufgeräumt und sich mit ihrer Mutter gestritten hatte. Laura ist der festen Überzeugung, dass der Unfall ihr zu Recht geschehen ist.",
      "In der Grundschule zeigt Simon stets vorbildliches Verhalten. Er beteiligt sich am Unterricht, hilft seinen Mitschülern und respektiert die Lehrer. Zum Ende des Schuljahres erhält Simon dafür eine Auszeichnung als „bester Schüler des Jahres“. Seine Eltern waren sich schon immer sicher, dass Simon diese Auszeichnung für sein Verhalten verdient hat und es nur gerecht sei, dass sein vorbildliches Verhalten belohnt wird.",
    ],
  },
  108: {
    id: 108,
    slideText:
      "Bitte gleiche Dein Beispiel zum Konzept „Gerechte-Welt-Glaube“ mit den beiden hier dargestellten Beispielen ab.",
    slideType: "GWG_g2",
    header: "Konzept „Gerechte-Welt-Glaube”",
    negativeExamples: [
      "Julia wird im Supermarkt von einem älteren Mann angerempelt, woraufhin ihr ihre Einkäufe herunterfallen. Sie redet sich ein, dass dieser sie bestimmt nicht gesehen habe und eigentlich einen guten Kern habe. Dabei hat der Mann Julia sogar gesehen, ihm war es aber egal, weil er schnell zur Kasse wollte.",
      "Can geht es seit Antritt seiner neuen Stelle finanziell sehr gut. Sein Freund Jona dagegen beklagt sich bei ihm, weil er selber Geringverdiener ist. Can ist der Meinung, dass Jona selber daran schuld ist, denn er könnte sich ja einen anderen, besser bezahlten Job suchen.",
    ],
  },
  109: {
    id: 109,
    slideText:
      "Bitte gleiche Dein Beispiel zum Konzept „Gerechte-Welt-Glaube“ mit den beiden hier dargestellten Expertenbeispielen ab.",
    slideType: "GWG_g3",
    header: "Konzept „Gerechte-Welt-Glaube”",
    expertExamples: [
      "Laura streitet sich mit ihrer Mutter. Sie hat erneut ihr Zimmer nicht aufgeräumt, will aber jetzt zur Stufenparty fahren, obwohl ihre Mutter sie darum bittet, vorher ihr Zimmer in Ordnung zu bringen. Laura ignoriert die Bitte und steigt auf ihr Fahrrad. Auf der Hälfte der Strecke übersieht sie einen Bordstein und stürzt. Ihre Knie und Hände sind aufgeschürft. Laura ist sich sicher, dass sie diesen Unfall hätte vorhersehen können, da sie es verdient hatte, hinzufallen, weil sie ihr Zimmer nicht aufgeräumt und sich mit ihrer Mutter gestritten hatte. Laura ist der festen Überzeugung, dass der Unfall ihr zu Recht geschehen ist.",
      "In der Grundschule zeigt Simon stets vorbildliches Verhalten. Er beteiligt sich am Unterricht, hilft seinen Mitschülern und respektiert die Lehrer. Zum Ende des Schuljahres erhält Simon dafür eine Auszeichnung als „bester Schüler des Jahres“. Seine Eltern waren sich schon immer sicher, dass Simon diese Auszeichnung für sein Verhalten verdient hat und es nur gerecht sei, dass sein vorbildliches Verhalten belohnt wird.",
    ],
  },
  110: {
    id: 110,
    slideText: "Bitte bewerte nun Dein Beispiel.",
    slideType: "GWG_g4",
    header: "Konzept „Gerechte-Welt-Glaube”",
  },
  111: {
    id: 111,
    slideText:
      "Das Einschätzen der Qualität meines Beispiels zum Konzept „Gerechte-Welt-Glaube“ fiel mir…",
    slideType: "Beispiel_GWG3",
  },
  112: {
    id: 112,
    slideText:
      "Beim Einschätzen der Qualität meines Beispiels zum Konzept „Gerechte-Welt-Glaube“ war meine geistige Denkanstrengung…",
    slideType: "Beispiel_GWG4",
  },
  113: {
    id: 113,
    slideText:
      "Damit wir Dir die Aufwandsentschädigung zahlen können, möchten wir Dich noch bitten, Angaben zu Deiner Bankverbindung zu machen. Bitte beachte, dass diese Daten selbstverständlich nur zu Überweisungszwecken gespeichert und nach Auszahlung der Vergütung umgehend gelöscht werden.",
    slideType: "Ende",
    header: "Du bist nun am Ende der Studie angekommen.",
  },
  115: {
    id: 115,
    slideText:
      "Vielen Dank für deine Teilnahme! \n\n Du kannst das Fenster nun schließen.",
    slideType: "Vielen_Dank",
  },
};

export default Slides;

export const slidesMocK: { [key in SlideID]: SlideInterface } = {
  1: { id: 1, slideText: "", slideType: "select" },
  2: { id: 2, slideText: "", slideType: "Vpn" },
  3: { id: 3, slideText: "", slideType: "Code" },
  4: { id: 4, slideText: "", slideType: "Willkommen" },
  5: { id: 5, slideText: "", slideType: "Intro" },
  6: { id: 6, slideText: "", slideType: "demographisch" },
  7: {
    id: 7,
    slideText: "",
    slideType: "demographisch_intro",
  },
  8: { id: 8, slideText: "", slideType: "Nachangaben_1_5" },
  9: { id: 9, slideText: "", slideType: "NachAngaben_6_11" },
  10: {
    id: 10,
    slideText: "",
    slideType: "Nachangaben_12_17",
  },
  11: {
    id: 11,
    slideText: "",
    slideType: "Nachangaben_18_22",
  },
  12: { id: 12, slideText: "", slideType: "Konzept_Intro" },
  13: {
    id: 13,
    slideText: "",
    slideType: "Konzept_Attribution",
  },
  14: { id: 14, slideText: "", slideType: "Konzept_SN" },
  15: {
    id: 15,
    slideText: "",
    slideType: "Konzept_Konsens",
  },
  16: {
    id: 16,
    slideText: "",
    slideType: "Konzept_Konsistenz",
  },
  17: {
    id: 17,
    slideText: "",
    slideType: "Konzept_Distinktheit",
  },
  18: { id: 18, slideText: "", slideType: "Konzept_FA" },
  19: { id: 19, slideText: "", slideType: "Konzept_SV" },
  20: { id: 20, slideText: "", slideType: "Konzept_GWG" },
  21: { id: 21, slideText: "", slideType: "Text_Intro" },
  22: { id: 22, slideText: "", slideType: "Text_Text" },
  23: {
    id: 23,
    slideText: "",
    slideType: "Definition_Intro",
  },
  24: {
    id: 24,
    slideText: "",
    slideType: "Definition_Attribution",
  },
  25: { id: 25, slideText: "", slideType: "Definition_SN" },
  26: {
    id: 26,
    slideText: "",
    slideType: "Definition_Konsens",
  },
  27: {
    id: 27,
    slideText: "",
    slideType: "Definition_Konsistenz",
  },
  28: {
    id: 28,
    slideText: "",
    slideType: "Definition_Distinktheit",
  },
  29: { id: 29, slideText: "", slideType: "Definition_FA" },
  30: { id: 30, slideText: "", slideType: "Definition_SV" },
  31: { id: 31, slideText: "", slideType: "Definition_GWG" },
  32: { id: 32, slideText: "", slideType: "Beispiel_Intro" },
  33: {
    id: 33,
    slideText: "",
    slideType: "Beispiel_Attribution0",
  },
  34: {
    id: 34,
    slideText: "",
    slideType: "Beispiel_Attribution1",
  },
  35: {
    id: 35,
    slideText: "",
    slideType: "Beispiel_Attribution2",
  },
  36: {
    id: 36,
    slideText: "",
    slideType: "Attribution_g1_1",
  },
  37: {
    id: 37,
    slideText: "",
    slideType: "Attribution_g1_2",
  },
  38: {
    id: 38,
    slideText: "",
    slideType: "Attribution_g2",
  },
  39: {
    id: 39,
    slideText: "",
    slideType: "Attribution_g3",
  },
  40: { id: 40, slideText: "", slideType: "Attribution_g4" },
  41: {
    id: 41,
    slideText: "",
    slideType: "Beispiel_Attribution3",
  },
  42: {
    id: 42,
    slideText: "",
    slideType: "Beispiel_Attribution4",
  },
  43: { id: 43, slideText: "", slideType: "Beispiel_SN0" },
  44: { id: 44, slideText: "", slideType: "Beispiel_SN1" },
  45: { id: 45, slideText: "", slideType: "Beispiel_SN2" },
  46: { id: 46, slideText: "", slideType: "SN_g1_1" },
  47: { id: 47, slideText: "", slideType: "SN_g1_2" },
  48: {
    id: 48,
    slideText: "",
    slideType: "SN_g2",
  },
  49: {
    id: 49,
    slideText: "",
    slideType: "SN_g3",
  },
  50: { id: 50, slideText: "", slideType: "SN_g4" },
  51: { id: 51, slideText: "", slideType: "Beispiel_SN3" },
  52: { id: 52, slideText: "", slideType: "Beispiel_SN4" },
  53: {
    id: 53,
    slideText: "",
    slideType: "Beispiel_Konsens0",
  },
  54: {
    id: 54,
    slideText: "",
    slideType: "Beispiel_Konsens1",
  },
  55: {
    id: 55,
    slideText: "",
    slideType: "Beispiel_Konsens2",
  },
  56: { id: 56, slideText: "", slideType: "Konsens_g1_1" },
  57: { id: 57, slideText: "", slideType: "Konsens_g1_2" },
  58: { id: 58, slideText: "", slideType: "Konsens_g2" },
  59: { id: 59, slideText: "", slideType: "Konsens_g3" },
  60: { id: 60, slideText: "", slideType: "Konsens_g4" },
  61: {
    id: 61,
    slideText: "",
    slideType: "Beispiel_Konsens3",
  },
  62: {
    id: 62,
    slideText: "",
    slideType: "Beispiel_Konsens4",
  },
  63: {
    id: 63,
    slideText: "",
    slideType: "Beispiel_Konsistenz0",
  },
  64: {
    id: 64,
    slideText: "",
    slideType: "Beispiel_Konsistenz1",
  },
  65: {
    id: 65,
    slideText: "",
    slideType: "Beispiel_Konsistenz2",
  },
  66: {
    id: 66,
    slideText: "",
    slideType: "Konsistenz_g1_1",
  },
  67: {
    id: 67,
    slideText: "",
    slideType: "Konsistenz_g1_2",
  },
  68: {
    id: 68,
    slideText: "",
    slideType: "Konsistenz_g2",
  },
  69: {
    id: 69,
    slideText: "",
    slideType: "Konsistenz_g3",
  },
  70: {
    id: 70,
    slideText: "",
    slideType: "Konsistenz_g4",
  },
  71: {
    id: 71,
    slideText: "",
    slideType: "Beispiel_Konsistenz3",
  },
  72: {
    id: 72,
    slideText: "",
    slideType: "Beispiel_Konsistenz4",
  },
  73: {
    id: 73,
    slideText: "",
    slideType: "Beispiel_Distinktheit0",
  },
  74: {
    id: 74,
    slideText: "",
    slideType: "Beispiel_Distinktheit1",
  },
  75: {
    id: 75,
    slideText: "",
    slideType: "Beispiel_Distinktheit2",
  },
  76: {
    id: 76,
    slideText: "",
    slideType: "Distinktheit_g1_1",
  },
  77: {
    id: 77,
    slideText: "",
    slideType: "Distinktheit_g1_2",
  },
  78: {
    id: 78,
    slideText: "",
    slideType: "Distinktheit_g2",
  },
  79: {
    id: 79,
    slideText: "",
    slideType: "Distinktheit_g3",
  },
  80: {
    id: 80,
    slideText: "",
    slideType: "Distinktheit_g4",
  },
  81: {
    id: 81,
    slideText: "",
    slideType: "Beispiel_Distinktheit3",
  },
  82: {
    id: 82,
    slideText: "",
    slideType: "Beispiel_Distinktheit4",
  },
  83: { id: 83, slideText: "", slideType: "Beispiel_FA0" },
  84: { id: 84, slideText: "", slideType: "Beispiel_FA1" },
  85: { id: 85, slideText: "", slideType: "Beispiel_FA2" },
  86: { id: 86, slideText: "", slideType: "FA_g1_1" },
  87: { id: 87, slideText: "", slideType: "FA_g1_2" },
  88: { id: 88, slideText: "", slideType: "FA_g2" },
  89: { id: 89, slideText: "", slideType: "FA_g3" },
  90: { id: 90, slideText: "", slideType: "FA_g4" },
  91: { id: 91, slideText: "", slideType: "Beispiel_FA3" },
  92: { id: 92, slideText: "", slideType: "Beispiel_FA4" },
  93: { id: 93, slideText: "", slideType: "Beispiel_SV0" },
  94: { id: 94, slideText: "", slideType: "Beispiel_SV1" },
  95: { id: 95, slideText: "", slideType: "Beispiel_SV2" },
  96: { id: 96, slideText: "", slideType: "SV_g1_1" },
  97: { id: 97, slideText: "", slideType: "SV_g1_2" },
  98: { id: 98, slideText: "", slideType: "SV_g2" },
  99: { id: 99, slideText: "", slideType: "SV_g3" },
  100: { id: 100, slideText: "", slideType: "SV_g4" },
  101: { id: 101, slideText: "", slideType: "Beispiel_SV3" },
  102: { id: 102, slideText: "", slideType: "Beispiel_SV4" },
  103: { id: 103, slideText: "", slideType: "Beispiel_GWG0" },
  104: { id: 104, slideText: "", slideType: "Beispiel_GWG1" },
  105: { id: 105, slideText: "", slideType: "Beispiel_GWG2" },
  106: { id: 106, slideText: "", slideType: "GWG_g1_1" },
  107: { id: 107, slideText: "", slideType: "GWG_g1_2" },
  108: { id: 108, slideText: "", slideType: "GWG_g2" },
  109: { id: 109, slideText: "", slideType: "GWG_g3" },
  110: { id: 110, slideText: "", slideType: "GWG_g4" },
  111: { id: 111, slideText: "", slideType: "Beispiel_GWG3" },
  112: { id: 112, slideText: "", slideType: "Beispiel_GWG4" },
  113: { id: 113, slideText: "", slideType: "Ende" },
  114: { id: 114, slideText: "", slideType: "Spass" },
  115: { id: 115, slideText: "", slideType: "Vielen_Dank" },
};
