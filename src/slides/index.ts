export type SlideInterface = {
  id: number;
  slideType: string;
  slideText: string;
  demographic?: Record<string, string>;
  nachangaben?: Record<number, [string, string, string]>;
  header?: string;
  ideaUnits?: string[];
  expertExamples?: string[];
  negativeExamples?: string[];
  partAspects?: string[];
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
  // 37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  // 47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  // 57,
  58,
  59,
  60,
  61,
  62,
  63,
  64,
  65,
  66,
  // 67,
  68,
  69,
  70,
  71,
  72,
  73,
  74,
  75,
  76,
  // 77,
  78,
  79,
  80,
  81,
  82,
  83,
  84,
  85,
  86,
  // 87,
  88,
  89,
  90,
  91,
  92,
  93,
  94,
  95,
  96,
  // 97,
  98,
  99,
  100,
  101,
  102,
  103,
  104,
  105,
  106,
  // 107,
  108,
  109,
  110,
  111,
  112,
  113,
  // 114,
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
      "Vielen Dank, dass Du an unserer Studie teilnimmst. Im Folgenden wirst Du verschiedene Aufgaben bearbeiten. \n \n \nBitte befolge stets die Anweisungen, die Dir auf den einzelnen Seiten gegeben werden. Für die vollständige Teilnahme an dieser Studie erhältst du eine Aufwandsentschädigung in Höhe von 10 Euro. Das Geld wird Dir nach erfolgreichem Abschluss der Studie per Überweisung ausgezahlt, d.h. Du solltest die Seite vor Beendigung der Studie nicht verlassen. Für die Überweisung benötigen wir Deine Kontodaten, die Du am Ende der Studie angeben musst. Die Daten werden nach Beendigung der Studie anonymisiert und ausschließlich zu forschungsinternen Zwecken von den Mitarbeiter*innen der Arbeitsgruppe Bildungspsychologie der Ruhr-Universität Bochum gespeichert und verwendet. Die Daten, ohne Angaben zur Identität, können in einer Online-Datenbank veröffentlicht werden. Die Ergebnisse dieser Studie können auf Konferenzen vorgestellt oder in Fachzeitschriften, Büchern und den Medien veröffentlicht werden. Du kannst der Speicherung und Verwendung Deiner Daten nachträglich widersprechen, musst dann jedoch die Aufwandsentschädigung zurückzahlen. Bitte beachte, dass die Löschung Deiner Daten nur so lange erfolgen kann, wie diese nicht anonymisiert wurden. \n \nBitte beachte, dass Du die Aufwandsentschädigung nur erhältst, wenn Du die Studie vollständig und entsprechend der Anweisungen bearbeitest. Das bedeutet, wenn Du einzelne Seiten z. B. ohne ernsthafte Bearbeitung „durchklickst“, oder Felder freilässt, dann können wir das in Deinen Daten sehen und können Dir die Aufwandsentschädigung für Deine Teilnahme nicht auszahlen. Die Teilnahme an dieser Studie ist freiwillig und kann jederzeit ohne negative Konsequenzen abgebrochen werden kann. \n \nWenn Du alles aufmerksam gelesen hast, klicke auf „Weiter“ und starte damit Deine Teilnahme an der Studie. \n \nKlicke nur auf „Weiter“, wenn Du mit den Teilnahmebedingungen einverstanden bist.",
    slideType: "Intro",
  },
  6: {
    id: 6,
    slideText:
      "Fülle bitte zunächst die folgenden Angaben zu Deiner Person aus. Klicke nach der Eingabe bitte auf „Weiter“.",
    slideType: "demographisch",
  },
  7: {
    id: 7,
    slideText:
      "Nun möchten wir Dich bitten, anzugeben, inwiefern die folgenden Aussagen auf Dich persönlich zutreffen. \n\nEs gibt keine richtigen oder falschen Antworten. \n\n\nKlicke auf „Weiter“, um zur nächsten Seite zu gelangen.",
    slideType: "demographisch_intro",
  },
  8: {
    id: 8,
    slideText: "",
    slideType: "Nachangaben_1_5",
    nachangaben: {
      1: [
        "Wenn ich mir angucke, was wir im Studium können müssen, halte ich mich für….",
        "Nicht begabt",
        "Sehr begabt",
      ],
      2: [
        "Wenn ich mir angucke, was wir im Studium können müssen, meine ich, dass mir das Lernen von neuen Sachen….",
        "Leicht fällt",
        "Schwer fällt",
      ],
      3: [
        "Wenn ich mir angucke, was wir im Studium können müssen, finde ich, dass ich mit den Aufgaben….",
        "Gut zurechtkomme",
        "Nicht zurechtkomme",
      ],
      4: [
        "Wenn ich mir angucke, was wir im Studium können müssen, glaube ich, dass ich….",
        "Nicht intelligent bin",
        "Sehr intelligent bin",
      ],
      5: [
        "Wenn ich mir angucke, was wir im Studium können müssen, finde ich, dass ich….",
        "Viel kann",
        "Wenig kann",
      ],
    },
  },
  9: {
    id: 9,
    slideText: "",
    slideType: "NachAngaben_6_11",
    nachangaben: {
      1: [
        "Ich bin für das Studium…",
        "Weniger begabt als früher",
        "Begabter als früher",
      ],
      2: [
        "Das Lernen von neuen Sachen im Studium fällt mir…",
        "Schwerer als früher",
        "Leichter als früher",
      ],
      3: [
        "Ich komme mit den Aufgaben im Studium…",
        "Besser zurecht als früher",
        "Schlechter zurecht als früher",
      ],
      4: [
        "Ich bin…",
        "Weniger intelligent als früher",
        "Intelligenter als früher",
      ],
      5: [
        "Die Aufgaben im Studium fallen mir…",
        "Leichter als früher",
        "Schwerer als früher",
      ],
      6: ["Ich kann im Studium…", "Weniger als früher", "Mehr als früher"],
    },
  },
  10: {
    id: 10,
    slideText: "",
    slideType: "Nachangaben_12_17",
    nachangaben: {
      1: [
        "Ich denke, ich bin für das Studium…",
        "Weniger begabt als meine Kommilitonen",
        "Begabter als meine Kommilitonen",
      ],
      2: [
        "Etwas Neues zu lernen fällt mir…",
        "Schwerer als als meinen Kommilitonen",
        "Leichter als meinen Kommilitonen",
      ],
      3: [
        "Mit den Aufgaben im Studium komme ich…",
        "Schlechter zurecht als meine Kommilitonen",
        "Besser zurecht als meine Kommilitonen",
      ],
      4: [
        "Ich bin…",
        "Weniger intelligent als meine Kommilitonen",
        "Intelligenter als meine Kommilitonen",
      ],
      5: [
        "Ich kann im Studium…",
        "Weniger als meine Kommilitonen",
        "Mehr als meine Kommilitonen",
      ],
      6: [
        "Die Aufgaben im Studium fallen mir…",
        "Leichter als meinen Kommilitonen",
        "Schwerer als meinen Kommilitonen",
      ],
    },
  },
  11: {
    id: 11,
    slideText: "",
    slideType: "Nachangaben_18_22",
    nachangaben: {
      1: ["Ich bin für das Studium…", "Sehr begabt", "Nicht begabt"],
      2: ["Neues zu lernen fällt mir…", "Schwer", "Leicht"],
      3: ["Ich bin…", "Nicht intelligent", "Sehr intelligent"],
      4: ["Ich kann im Studium…", "Wenig", "Viel"],
      5: ["Im Studium fallen mir viele Aufgaben…", "Schwer", "Leicht"],
    },
  },
  12: {
    id: 12,
    slideText:
      "Mit den folgenden Aufgaben soll Dein Wissen zu verschiedenen Konzepten der Sozialpsychologie erfasst werden. Bitte versuche, die Aufgaben möglichst gut zu bearbeiten, rate jedoch nicht. \n\nFalls Du eine der Fragen nicht beantworten kannst, setze bitte ein „-“. Wenn es losgehen kann, klicke bitte auf „Weiter“. ",
    slideType: "Konzept_Intro",
  },
  13: {
    id: 13,
    slideText: "Bitte definiere das Konzept „Attribution”.",
    slideType: "Konzept_Attribution",
  },
  14: {
    id: 14,
    slideText: "Bitte definiere das Konzept „Soziale Normen”.",
    slideType: "Konzept_SN",
  },
  15: {
    id: 15,
    slideText: "Bitte definiere das Konzept „Konsens”.",
    slideType: "Konzept_Konsens",
  },
  16: {
    id: 16,
    slideText: "Bitte definiere das Konzept „Konsistenz”.",
    slideType: "Konzept_Konsistenz",
  },
  17: {
    id: 17,
    slideText: "Bitte definiere das Konzept „Distinktheit”.",
    slideType: "Konzept_Distinktheit",
  },
  18: {
    id: 18,
    slideText:
      "Bitte definiere das Konzept „Fundamentaler Attributionsfehler”.",
    slideType: "Konzept_FA",
  },
  19: {
    id: 19,
    slideText: "Bitte definiere das Konzept „Selbstwertdienliche Verzerrung”.",
    slideType: "Konzept_SV",
  },
  20: {
    id: 20,
    slideText: "Bitte definiere das Konzept „Gerechte-Welt-Glaube”.",
    slideType: "Konzept_GWG",
  },
  21: {
    id: 21,
    slideText:
      "Deine nächste Aufgabe ist es, einen Text zu lesen, der verschiedene Konzepte der Sozialpsychologie behandelt. Es ist wichtig, dass Du den Text aufmerksam liest. Du hast dafür 4:00 Minuten Zeit. Im Anschluss sollst Du Dir Beispiele zu den Themen im Text ausdenken. ",
    slideType: "Text_Intro",
  },
  22: {
    id: 22,
    slideText:
      "Der Frage, warum andere sich so verhalten, wie sie es tun, begegnen wir alltäglich in den verschiedensten Kontexten. Der Prozess, durch den wir versuchen, ein eingetretenes Ereignis oder Verhalten auf bestimmte Ursachen zurückzuführen, wird als Attribution bezeichnet. Im Allgemeinen ist dies ein recht planmäßiger Prozess.\nWir prüfen das Verhalten anderer auf Hinweise für die Gründe, die hinter dem liegen, was sie sagen oder tun. Eine grundlegende Frage dabei ist, ob das Verhalten einer anderen Person auf internale Gründe (also Faktoren, die mit der eigenen Intention, Motiven oder Charaktereigenschaften zu tun haben) oder auf externale Ursachen zurückzuführen ist. Externale Ursachen beinhalten oftmals physische Objekte oder Situationen innerhalb der Umwelt, aber auch soziale oder kulturelle Faktoren. Diese Faktoren beinhalten oftmals auch soziale Normen: explizite oder implizite Konventionen, die vorgeben, welches Verhalten in sozialen Situationen angemessen ist. \nUm das Verhalten anderer zu erklären, fokussieren wir uns oft auf Informationen über (1) Konsens, also das Ausmaß, in welchem das Verhalten auch von anderen Personen gezeigt wird, (2) Konsistenz, also das Ausmaß, in welchem eine bestimmte Person jeweils ähnliches Verhalten als Reaktion auf die gleichen Stimuli oder Situationen zeigt, und (3) Distinktheit, also das Ausmaß, in welchem eine bestimmte Person in unterschiedlicher Art und Weise auf ähnliche Situationen oder Stimuli reagiert. Wenn sehr wenige Personen wie eine bestimmte Person handeln (Konsens ist niedrig), die Person sich immer wieder in gleicher Weise verhält (Konsistenz ist hoch) und in derselben Art und Weise in vielen ähnlichen Situationen reagiert (Distinktheit ist niedrig), dann schließen wir daraus, dass ihr Verhalten auf internale Ursachen zurückzuführen ist. Daraus leiten wir ab, was für eine Art von Mensch diese Person ist und vermutlich immer bleiben wird. Wenn alle drei dieser Faktoren hoch sind, leiten wir im Gegensatz dazu eher ab, dass die Person sich auf Grund von externalen Gründen so verhält, wie sie es tut.\nAuch wenn Attribution oft logisches Schlussfolgern beinhaltet, wie sie eben beschrieben wurde, ist das nicht immer der Fall. Tatsächlich wird die Attribution oft Gegenstand verschiedener Wahrnehmungsverzerrungen. Eine der populärsten Wahrnehmungsverzerrungen ist bekannt als fundamentaler Attributionsfehler. Er beschreibt die Tendenz, das Verhalten anderer Personen zu einem größeren Teil auf internale Ursachen zurückzuführen als eigentlich gerechtfertigt wäre, während die Effekte der spezifischen Situation unterschätzt werden. Dies kann uns zu falschen Schlussfolgerungen über andere verleiten. Eine andere Verzerrung in unserer Attribution betrifft unser eigenes Verhalten. Die selbstwertdienliche Verzerrung ist die Tendenz, positive Ergebnisse auf unsere eigenen Eigenschaften zurückzuführen (internale Ursachen), aber negative Ergebnisse auf Faktoren außerhalb unserer Kontrolle (externale Ursachen). Schließlich gibt es noch den Gerechte-Welt-Glauben. Dieser bezieht sich auf das starke Verlangen oder Bedürfnis zu glauben, dass die Welt ein gerechter, vorhersehbarer und geordneter Ort ist, an dem jeder bekommt, was er verdient. Das beeinflusst unsere Attributionen, denn auch wenn wir Anhaltspunkte dafür erhalten, dass die Welt vielleicht nicht gerecht ist, neigen wir dazu, uns dennoch selbst davon überzeugen zu wollen, dass keine Ungerechtigkeit vorkommt.",
    slideType: "Text_Text",
  },
  23: {
    id: 23,
    slideText:
      "Dir werden nun noch einmal die Definitionen der einzelnen Konzepte, die Du im Text kennengelernt hast, gezeigt. Lies sie Dir bitte aufmerksam durch. Du kannst selbst entscheiden, wie viel Zeit Du dir dafür nimmst.\n\nWenn es losgehen kann, klicke bitte auf „Weiter“. ",
    slideType: "Definition_Intro",
  },
  24: {
    id: 24,
    slideText:
      "Der subjektive Prozess, durch den wir versuchen festzustellen, welche Gründe hinter dem Verhalten von anderen Personen stecken.",
    slideType: "Definition_Attribution",
    header: "Attribution",
  },
  25: {
    id: 25,
    slideText:
      "Explizite oder implizite Konventionen, die korrektes Verhalten in sozialen Situationen vorgeben.",
    slideType: "Definition_SN",
    header: "Soziale Normen",
  },
  26: {
    id: 26,
    slideText:
      "Das Ausmaß, in dem ein Verhalten einer Person auch von anderen Personen gezeigt wird. Der Konsens ist hoch, wenn viele andere Personen ähnlich reagieren, und niedrig, wenn nur wenige andere Personen ähnlich reagieren.",
    slideType: "Definition_Konsens",
    header: "Konsens",
  },
  27: {
    id: 27,
    slideText:
      "Das Ausmaß, in dem eine Person über die Zeit hinweg ähnliche Verhaltensweisen als Reaktion auf die gleiche Situation oder den gleichen Stimulus zeigt. Die Konsistenz ist hoch, wenn das Verhalten sich über die Zeit hinweg ähnelt, und niedrig, wenn das Verhalten nur zu wenigen Zeitpunkten gleichbleibt.",
    slideType: "Definition_Konsistenz",
    header: "Konsistenz",
  },
  28: {
    id: 28,
    slideText:
      "Das Ausmaß, in dem eine Person in unterschiedlicher Art und Weise auf ähnliche Stimuli oder Situationen reagiert. Die Distinktheit ist hoch, wenn sich eine Person in wenigen Situationen gleich verhält, und niedrig, wenn sie in vielen ähnlichen Situationen das gleiche Verhalten zeigt.",
    slideType: "Definition_Distinktheit",
    header: "Distinktheit",
  },
  29: {
    id: 29,
    slideText:
      "Die Tendenz, das Verhalten von anderen in höherem Maße auf interne Ursachen zurückzuführen, als es eigentlich gerechtfertigt wäre, bei gleichzeitigem Unterschätzen des Einflusses der Situation.",
    slideType: "Definition_FA",
    header: "Fundamentaler Attributionsfehler",
  },
  30: {
    id: 30,
    slideText:
      "Die Tendenz, positive Ergebnisse auf unsere eigenen Charaktereigenschaften (internale Ursachen) zurückzuführen, aber negative Ergebnisse eher auf Faktoren außerhalb unserer Kontrolle (externale Ursachen). ",
    slideType: "Definition_SV",
    header: "Selbstwertdienliche Verzerrung",
  },
  31: {
    id: 31,
    slideText:
      "Das starke Verlangen oder Bedürfnis zu glauben, dass die Welt ein geordneter, vorhersehbarer, und gerechter Ort ist, an dem jeder bekommt, was er oder sie verdient.",
    slideType: "Definition_GWG",
    header: "Gerechte-Welt-Glaube",
  },
  32: {
    id: 32,
    slideText:
      "Deine nächste Aufgabe ist es gleich, Dir Beispiele für die Konzepte auszudenken, die Du im Text kennengelernt hast. Nach jedem Beispiel, das Du Dir ausgedacht hast, wirst Du darum gebeten, Dein Beispiel zu bewerten. \n\nBitte beachte: Die Aufwandsentschädigung erhältst Du nur, wenn Du zu jedem Konzept ein Beispiel generiert hast. \n\nWenn es losgehen kann, klicke bitte auf „Weiter“. ",
    slideType: "Beispiel_Intro",
  },
  33: {
    id: 33,
    slideText:
      "Attribution: Der subjektive Prozess, durch den wir versuchen festzustellen, welche Gründe hinter dem Verhalten von anderen Personen stecken.",
    slideType: "Beispiel_Attribution0",
    header:
      "Denke Dir bitte ein Beispiel aus, das das Konzept „Attribution” veranschaulicht.",
  },
  34: {
    id: 34,
    slideText:
      "Das Ausdenken eines Beispiels zum Konzept „Attribution“ fiel mir…",
    slideType: "Beispiel_Attribution1",
  },
  35: {
    id: 35,
    slideText:
      "Beim Ausdenken eines Beispiels zum Konzept „Attribution“ war meine geistige Denkanstrengung…",
    slideType: "Beispiel_Attribution2",
  },
  999: {
    id: 999,
    slideText:
      "Im nächsten Schritt wirst du gebeten, gewisse Textstellen farblich zu markieren.\n\nMarkiere dazu eine ausgewählte Stelle in den Beispieltexten (links) und klicke dann auf einen der farblich markierten Buttons (rechts), um den ausgewählten Text einzufärben. Du kannst so oft du möchtest zwischen den Farben wechseln, indem du auf die entsprechenden farblichen Buttons klickst. Du kannst Textstellen allerdings nicht doppelt markieren (z.B. mit zwei oder mehr Farben).\n\nUm deine Markierungen zu löschen, klicke auf das Feld mit der Beschriftung „Markierungen zurücksetzen“ (unten rechts)",
    slideType: "Anleitung",
  },
  36: {
    id: 36,
    slideText:
      "Bitte gleiche Dein Beispiel zum Konzept „Attribution“ nun mit den folgenden Expertenbeispielen ab.",
    slideType: "Attribution_g1_1",
    header: "Konzept „Attribution“",
    expertExamples: [
      "Als Maria am Nachmittag nach Hause kommt, die Türen hinter sich zuschlägt und sich in ihrem Zimmer verkriecht, wundert sich ihre Mutter über Marias Verhalten. Sie überlegt, ob dieses mit der Prüfung zusammenhängt, die Maria heute in der Schule abgelegt hat. Die Mutter zieht darüber hinaus als Grund für das Verhalten ihrer Tochter in Erwägung, dass diese einfach ein sehr negativer Mensch ist. Marias Mutter überlegt, am Abend nochmal das Gespräch mit ihrer Tochter zu suchen, um den wahren Grund für Marias Verhalten herauszufinden.",
      "Tim und Jana sind seit zwei Jahren ein Paar und streiten sich mal wieder. Tim entgegnet Jana auf ihren Vorwurf, sich regelmäßig mit seiner besten Freundin zu treffen: „Du bist doch total eifersüchtig!“ Jana verlässt die Situation und fragt sich wenig später, warum Tim ihr dies an den Kopf geworfen hat. Sie wägt ab, ob sein Verhalten damit begründet werden kann, dass Tim in einem kulturellen Umfeld groß geworden ist, in dem Freundschaften zwischen Mann und Frau üblich und ganz normal sind, auch wenn eine der beiden Personen in einer festen Beziehung ist. Andererseits denkt Jana, sein Verhalten könnte auch damit begründet werden, dass Tim ein sehr impulsiver Mensch ist. Sie beschließt, sich keine weiteren Gedanken zu machen, da sie den Grund für Tims Verhalten vermutlich nie genau erfahren wird.",
    ],
    negativeExamples: [
      "In der Verhaltensforschung wird nach den Gründen für menschliches Verhalten gesucht. In einer aktuellen Studie versucht eine Forschergruppe beispielsweise herauszufinden, warum Menschen Attentate verüben. Dabei werden kulturelle Hintergründe, persönliche Erfahrungen und situative Faktoren berücksichtigt.",
      "Julia ist früher als Kind von der Schaukel gefallen. Immer, wenn sie heute als erwachsene Frau eine Schaukel sieht oder an einem Spielplatz vorbeiläuft, läuft ihr ein Schauer über den Rücken. Sie ist sich sicher, dass das an ihrer prägenden Erfahrung des Sturzes von der Schaukel im Kindesalter liegt.",
    ],
    partAspects: [
      "Subjektive Suche nach Gründen",
      "Gründe beziehen sich auf Verhalten anderer",
    ],
  },
  38: {
    id: 38,
    slideText:
      "Bitte gleiche Dein Beispiel zum Konzept „Attribution“ mit den beiden hier dargestellten Beispielen ab.",
    slideType: "Attribution_g2",
    header: "Konzept „Attribution“",
    negativeExamples: [
      "In der Verhaltensforschung wird nach den Gründen für menschliches Verhalten gesucht. In einer aktuellen Studie versucht eine Forschergruppe beispielsweise herauszufinden, warum Menschen Attentate verüben. Dabei werden kulturelle Hintergründe, persönliche Erfahrungen und situative Faktoren berücksichtigt.",
      "Julia ist früher als Kind von der Schaukel gefallen. Immer, wenn sie heute als erwachsene Frau eine Schaukel sieht oder an einem Spielplatz vorbeiläuft, läuft ihr ein Schauer über den Rücken. Sie ist sich sicher, dass das an ihrer prägenden Erfahrung des Sturzes von der Schaukel im Kindesalter liegt.",
    ],
    partAspects: [
      "Subjektive Suche nach Gründen",
      "Gründe beziehen sich auf Verhalten anderer",
    ],
  },
  39: {
    id: 39,
    slideText:
      "Bitte gleiche Dein Beispiel zum Konzept „Attribution“ mit den beiden hier dargestellten Expertenbeispielen ab.",
    slideType: "Attribution_g3",
    header: "Konzept „Attribution“",
    expertExamples: [
      "Als Maria am Nachmittag nach Hause kommt, die Türen hinter sich zuschlägt und sich in ihrem Zimmer verkriecht, wundert sich ihre Mutter über Marias Verhalten. Sie überlegt, ob dieses mit der Prüfung zusammenhängt, die Maria heute in der Schule abgelegt hat. Die Mutter zieht darüber hinaus als Grund für das Verhalten ihrer Tochter in Erwägung, dass diese einfach ein sehr negativer Mensch ist. Marias Mutter überlegt, am Abend nochmal das Gespräch mit ihrer Tochter zu suchen, um den wahren Grund für Marias Verhalten herauszufinden.",
      "Tim und Jana sind seit zwei Jahren ein Paar und streiten sich mal wieder. Tim entgegnet Jana auf ihren Vorwurf, sich regelmäßig mit seiner besten Freundin zu treffen: „Du bist doch total eifersüchtig!“ Jana verlässt die Situation und fragt sich wenig später, warum Tim ihr dies an den Kopf geworfen hat. Sie wägt ab, ob sein Verhalten damit begründet werden kann, dass Tim in einem kulturellen Umfeld groß geworden ist, in dem Freundschaften zwischen Mann und Frau üblich und ganz normal sind, auch wenn eine der beiden Personen in einer festen Beziehung ist. Andererseits denkt Jana, sein Verhalten könnte auch damit begründet werden, dass Tim ein sehr impulsiver Mensch ist. Sie beschließt, sich keine weiteren Gedanken zu machen, da sie den Grund für Tims Verhalten vermutlich nie genau erfahren wird.",
    ],
  },
  40: {
    id: 40,
    slideText: "Bitte bewerte nun Dein Beispiel.",
    slideType: "Attribution_g4",
    header: "Konzept „Attribution“",
  },
  41: {
    id: 41,
    slideText:
      "Das Einschätzen der Qualität meines Beispiels zum Konzept „Attribution“ fiel mir…",
    slideType: "Beispiel_Attribution3",
  },
  42: {
    id: 42,
    slideText:
      "Beim Einschätzen der Qualität meines Beispiels zum Konzept „Attribution“ war meine geistige Denkanstrengung…",
    slideType: "Beispiel_Attribution4",
  },
  43: {
    id: 43,
    slideText:
      "Soziale Normen: Explizite oder implizite Konventionen, die korrektes Verhalten in sozialen Situationen vorgeben.",
    slideType: "Beispiel_SN0",
    header:
      "Denke Dir bitte ein Beispiel aus, das das Konzept „Soziale Normen” veranschaulicht.",
  },
  44: {
    id: 44,
    slideText:
      "Das Ausdenken eines Beispiels zum Konzept „Soziale Normen“ fiel mir…",
    slideType: "Beispiel_SN1",
  },
  45: {
    id: 45,
    slideText:
      "Beim Ausdenken eines Beispiels zum Konzept „Soziale Normen“ war meine geistige Denkanstrengung…",
    slideType: "Beispiel_SN2",
  },
  46: {
    id: 46,
    slideText:
      "Bitte gleiche Dein Beispiel zum Konzept „Soziale Normen“ nun mit den folgenden Expertenbeispielen ab.",
    slideType: "SN_g1_1",
    header: "Konzept „Soziale Normen“",
    negativeExamples: [
      "Charline, Jana und Eva machen jeden Freitag einen Mädelsabend. Dabei wechselt die Gastgeberin des Abends von Woche zu Woche. Diese Woche ist Jana dran. Es hat sich bei ihnen im Freundeskreis etabliert, dass die Gastgeberin auch für Essen und Getränke zu sorgen hat. Jana stellt also Bier in den Kühlschrank und bestellt Pizza vor.",
      "Lena ist bei ihrer Oma zu Besuch, die gerade die Wäsche vorbereitet: Sie schlägt jedes Kleidungsstück auf links, bevor sie es in die Waschmaschine legt. Lena beobachtet dies und stellt das Verhalten ihrer Oma in Frage. Ihre Oma entgegnet ihr nur: „Das hat man schon immer so gemacht!“.",
    ],
    expertExamples: [
      "Im Bus fällt Marian eine ältere Dame auf, die erst später zugestiegen ist und daher im Gang stehen muss. Entgegen der anderen Fahrgäste steht Marian sofort auf und bietet der älteren Dame seinen Sitzplan an. Dieses Verhalten sieht er als korrekt an, weil es ihm in seiner Erziehung so vermittelt wurde.",
      "Michael macht sich nach Feierabend auf den Weg nach Hause. Er fährt in seinem Kleinwagen die übliche Strecke und sieht in weiter Ferne einen Zebrastreifen. Dort wartet eine Familie mit zwei kleinen Kindern, um die Straße zu überqueren. Das Auto vor Michael rast die Straße entlang und beachtet den Zebrastreifen nicht. Michael dagegen bremst bereits einige Meter vor dem Zebrastreifen auf wenige km/h herunter, hält an und winkt die Familie über die Straße. Er ärgert sich darüber, dass der Raser vor ihm sich nicht an die Vorgabe hält, vor dem Zebrastreifen zu warten und die Leute die Straße passieren zu lassen. Michael ordnet sein eigenes Verhalten dagegen als vorbildlich und korrekt ein.",
    ],
    partAspects: [
      "Explizite oder implizite Konventionen",
      "Vorgabe von korrektem Verhalten",
      "Beziehen sich auf soziale Situationen",
    ],
  },
  48: {
    id: 48,
    slideText:
      "Bitte gleiche Dein Beispiel zum Konzept „Soziale Normen“ mit den beiden hier dargestellten Beispielen ab.",
    slideType: "SN_g2",
    header: "Konzept „Soziale Normen“",
    negativeExamples: [
      "Charline, Jana und Eva machen jeden Freitag einen Mädelsabend. Dabei wechselt die Gastgeberin des Abends von Woche zu Woche. Diese Woche ist Jana dran. Es hat sich bei ihnen im Freundeskreis etabliert, dass die Gastgeberin auch für Essen und Getränke zu sorgen hat. Jana stellt also Bier in den Kühlschrank und bestellt Pizza vor.",
      "Lena ist bei ihrer Oma zu Besuch, die gerade die Wäsche vorbereitet: Sie schlägt jedes Kleidungsstück auf links, bevor sie es in die Waschmaschine legt. Lena beobachtet dies und stellt das Verhalten ihrer Oma in Frage. Ihre Oma entgegnet ihr nur: „Das hat man schon immer so gemacht!“.",
    ],
    partAspects: [
      "Explizite oder implizite Konventionen",
      "Vorgabe von korrektem Verhalten",
      "Beziehen sich auf soziale Situationen",
    ],
  },
  49: {
    id: 49,
    slideText:
      " Bitte gleiche Dein Beispiel zum Konzept „Soziale Normen“ mit den beiden hier dargestellten Expertenbeispielen ab. ",
    slideType: "SN_g3",
    header: "Konzept „Soziale Normen“",
    expertExamples: [
      "Im Bus fällt Marian eine ältere Dame auf, die erst später zugestiegen ist und daher im Gang stehen muss. Entgegen der anderen Fahrgäste steht Marian sofort auf und bietet der älteren Dame seinen Sitzplan an. Dieses Verhalten sieht er als korrekt an, weil es ihm in seiner Erziehung so vermittelt wurde.",
      "Michael macht sich nach Feierabend auf den Weg nach Hause. Er fährt in seinem Kleinwagen die übliche Strecke und sieht in weiter Ferne einen Zebrastreifen. Dort wartet eine Familie mit zwei kleinen Kindern, um die Straße zu überqueren. Das Auto vor Michael rast die Straße entlang und beachtet den Zebrastreifen nicht. Michael dagegen bremst bereits einige Meter vor dem Zebrastreifen auf wenige km/h herunter, hält an und winkt die Familie über die Straße. Er ärgert sich darüber, dass der Raser vor ihm sich nicht an die Vorgabe hält, vor dem Zebrastreifen zu warten und die Leute die Straße passieren zu lassen. Michael ordnet sein eigenes Verhalten dagegen als vorbildlich und korrekt ein.",
    ],
  },
  50: {
    id: 50,
    slideText: "Bitte bewerte nun Dein Beispiel.",
    slideType: "SN_g4",
    header: "Konzept „Soziale Normen“",
  },
  51: {
    id: 51,
    slideText:
      "Das Einschätzen der Qualität meines Beispiels zum Konzept „Soziale Normen“ fiel mir…",
    slideType: "Beispiel_SN3",
  },
  52: {
    id: 52,
    slideText:
      "Beim Einschätzen der Qualität meines Beispiels zum Konzept „Soziale Normen“ war meine geistige Denkanstrengung…",
    slideType: "Beispiel_SN4",
  },
  53: {
    id: 53,
    slideText:
      "Konsens: Das Ausmaß, in dem ein Verhalten einer Person auch von anderen Personen gezeigt wird. Der Konsens ist hoch, wenn viele andere Personen ähnlich reagieren, und niedrig, wenn nur wenige andere Personen ähnlich reagieren.",
    slideType: "Beispiel_Konsens0",
    header:
      "Denke Dir bitte ein Beispiel aus, das das Konzept von hohem Konsens veranschaulicht.",
  },
  54: {
    id: 54,
    slideText:
      " Das Ausdenken eines Beispiels zum Konzept „hoher Konsens“ fiel mir…",
    slideType: "Beispiel_Konsens1",
  },
  55: {
    id: 55,
    slideText:
      " Beim Ausdenken eines Beispiels zum Konzept „hoher Konsens“ war meine geistige Denkanstrengung…",
    slideType: "Beispiel_Konsens2",
  },
  56: {
    id: 56,
    slideText:
      " Bitte gleiche Dein Beispiel zum Konzept „hoher Konsens“ nun mit den folgenden Expertenbeispielen ab.",
    slideType: "Konsens_g1_1",
    header: "Konzept „hoher Konsens“",
    negativeExamples: [
      "Ingrid geht jede Woche mittwochs einkaufen. Nach dem Einkauf trägt sie die Einkäufe in ihrem Rollator nach Hause. Dieses Mal hat sie so viel eingekauft, dass ein paar der Lebensmittel auf den Boden fallen. Ein Herr eilt ihr zu Hilfe und legt die heruntergefallenen Lebensmittel zurück in ihren Rollator. Sie bedankt sich und geht nach Hause.",
      "In einer Spielgruppe eines Kindergartens wird plötzlich ein Feueralarm ausgelöst. Alle Kinder fangen zeitgleich an zu schreien und zu weinen.",
    ],
    expertExamples: [
      "Julia kann ihre alten Converse-Sneakers nicht mehr sehen und beschließt, am Montag nach der Schule gemeinsam mit ihren beiden Freundinnen shoppen zu gehen, um sich die neuen, angesagten Nike-Sneakers zu kaufen. Als die drei im Schuhgeschäft angekommen sind, betrachten die beiden Freundinnen von Julia ihre eigenen Schuhe und bemerken, dass ihre alten Sneakers im Vergleich mit den neuen Nike-Schuhen von Julia ebenfalls längst aus der Mode gekommen sind. Daraufhin beschließen die beiden, sich genauso wie ihre Freundin Julia die neuen Nike-Sneakers zu kaufen.",
      "Aufgrund der Corona-Pandemie müssen sich nun alle Mitarbeiter nacheinander ihr Essen in der Mensa holen. Draußen am Essenstisch angekommen, fällt der Arbeitsgruppe auf, dass sich alle für einen Salat mit Falafel entschieden haben. Sie vermuten, dass ihre gleiche Entscheidung sowohl am heißen Wetter als auch an dem aktuellen Ernährungstrend liegt.",
    ],
    partAspects: [
      "Hohes Ausmaß an Übereinstimmung",
      "Bezug auf Verhalten oder Reaktion vieler Personen",
    ],
  },
  58: {
    id: 58,
    slideText:
      "Bitte gleiche Dein Beispiel zum Konzept „hoher Konsens“ mit den beiden hier dargestellten Beispielen ab.",
    slideType: "Konsens_g2",
    header: "Konzept „hoher Konsens“",
    negativeExamples: [
      "Ingrid geht jede Woche mittwochs einkaufen. Nach dem Einkauf trägt sie die Einkäufe in ihrem Rollator nach Hause. Dieses Mal hat sie so viel eingekauft, dass ein paar der Lebensmittel auf den Boden fallen. Ein Herr eilt ihr zu Hilfe und legt die heruntergefallenen Lebensmittel zurück in ihren Rollator. Sie bedankt sich und geht nach Hause.",
      "In einer Spielgruppe eines Kindergartens wird plötzlich ein Feueralarm ausgelöst. Alle Kinder fangen zeitgleich an zu schreien und zu weinen.",
    ],
    partAspects: [
      "Hohes Ausmaß an Übereinstimmung",
      "Bezug auf Verhalten oder Reaktion vieler Personen",
    ],
  },
  59: {
    id: 59,
    slideText:
      "Bitte gleiche Dein Beispiel zum Konzept „hoher Konsens“ mit den beiden hier dargestellten Expertenbeispielen ab.",
    slideType: "Konsens_g3",
    header: "Konzept „hoher Konsens“",
    expertExamples: [
      "Julia kann ihre alten Converse-Sneakers nicht mehr sehen und beschließt, am Montag nach der Schule gemeinsam mit ihren beiden Freundinnen shoppen zu gehen, um sich die neuen, angesagten Nike-Sneakers zu kaufen. Als die drei im Schuhgeschäft angekommen sind, betrachten die beiden Freundinnen von Julia ihre eigenen Schuhe und bemerken, dass ihre alten Sneakers im Vergleich mit den neuen Nike-Schuhen von Julia ebenfalls längst aus der Mode gekommen sind. Daraufhin beschließen die beiden, sich genauso wie ihre Freundin Julia die neuen Nike-Sneakers zu kaufen.",
      "Aufgrund der Corona-Pandemie müssen sich nun alle Mitarbeiter nacheinander ihr Essen in der Mensa holen. Draußen am Essenstisch angekommen, fällt der Arbeitsgruppe auf, dass sich alle für einen Salat mit Falafel entschieden haben. Sie vermuten, dass ihre gleiche Entscheidung sowohl am heißen Wetter als auch an dem aktuellen Ernährungstrend liegt.",
    ],
  },
  60: {
    id: 60,
    slideText: "Bitte bewerte nun Dein Beispiel.",
    slideType: "Konsens_g4",
    header: "Konzept „hoher Konsens“",
  },
  61: {
    id: 61,
    slideText:
      "Das Einschätzen der Qualität meines Beispiels zum Konzept „hoher Konsens“ fiel mir…",
    slideType: "Beispiel_Konsens3",
  },
  62: {
    id: 62,
    slideText:
      "Beim Einschätzen der Qualität meines Beispiels zum Konzept „hoher Konsens“ war meine geistige Denkanstrengung…",
    slideType: "Beispiel_Konsens4",
  },
  63: {
    id: 63,
    slideText:
      "Konsistenz: Das Ausmaß, in dem eine Person über die Zeit hinweg ähnliche Verhaltensweisen als Reaktion auf die gleiche Situation oder den gleichen Stimulus zeigt. Die Konsistenz ist hoch, wenn das Verhalten sich über die Zeit hinweg ähnelt und niedrig, wenn das Verhalten nur zu wenigen Zeitpunkten gleichbleibt.",
    slideType: "Beispiel_Konsistenz0",
    header:
      "Denke Dir bitte ein Beispiel aus, das das Konzept hoher Konsistenz veranschaulicht.",
  },
  64: {
    id: 64,
    slideText:
      "Das Ausdenken eines Beispiels zum Konzept „hohe Konsistenz“ fiel mir…",
    slideType: "Beispiel_Konsistenz1",
  },
  65: {
    id: 65,
    slideText:
      "Beim Ausdenken eines Beispiels zum Konzept „hohe Konsistenz“ war meine geistige Denkanstrengung…",
    slideType: "Beispiel_Konsistenz2",
  },
  66: {
    id: 66,
    slideText:
      "Bitte gleiche Dein Beispiel zum Konzept „hohe Konsistenz“ nun mit den folgenden Expertenbeispielen ab.",
    slideType: "Konsistenz_g1_1",
    header: "Konzept „hohe Konsistenz“",
    negativeExamples: [
      "Jan geht in dem neuen griechischen Restaurant essen, das vor Kurzem in seinem Wohnort eröffnet wurde. Mit Enttäuschung stellt er fest, dass ihm das Essen nicht schmeckt. Nach und nach beobachtet er, wie die Besucherzahl des Restaurants sinkt und es schließlich wegen mangelnder Kundschaft schließen muss. Jan hält dieses Vorkommnis für konsistent.",
      "Alex beschließt, ihrer Mutter einen Blumenstrauß zu kaufen, da morgen Muttertag ist. Sie nimmt einen Regenschirm mit, da dunkle Wolken aufziehen. Im Blumengeschäft fällt ihr auf, dass einige andere Kunden ebenfalls mit einem Regenschirm in den Laden gekommen sind.",
    ],
    expertExamples: [
      "Als Silvia in der Schule war, hat sie vor Schularbeiten ihren Glücksstein immer drei Mal gerieben, weil sie dachte, dass ihr dies Glück bringt. Mittlerweile ist sie älter, nutzt ihren Glücksstein aber immer noch, beispielsweise am Tag ihrer Führerscheinprüfung. Sie reibt ihn vorher drei Mal, da sie immer noch an die Glückswirkung des Steines glaubt.",
      "Frau Albers gibt jedes Mal im Restaurant hohes Trinkgeld. Früher hat sie dem Kellner im kleinen Dorfrestaurant bereits 30 Euro gegeben, obwohl sie damals noch nicht viel Geld hatte. Heute, wo sie ihren 50. Geburtstag beim schicken Italiener feiert, gibt sie dem Kellner ebenfalls 30 Euro Trinkgeld.",
    ],
    partAspects: [
      "Hohes Ausmaß der Ähnlichkeit des Verhaltens einer Person",
      "Ähnlichkeit über die Zeit hinweg",
      "Ähnlichkeit über ähnliche Situation hinweg",
    ],
  },
  68: {
    id: 68,
    slideText:
      "Bitte gleiche Dein Beispiel zum Konzept „hohe Konsistenz“ mit den beiden hier dargestellten Beispielen ab.",
    slideType: "Konsistenz_g2",
    header: "Konzept „hohe Konsistenz“",
    negativeExamples: [
      "Jan geht in dem neuen griechischen Restaurant essen, das vor Kurzem in seinem Wohnort eröffnet wurde. Mit Enttäuschung stellt er fest, dass ihm das Essen nicht schmeckt. Nach und nach beobachtet er, wie die Besucherzahl des Restaurants sinkt und es schließlich wegen mangelnder Kundschaft schließen muss. Jan hält dieses Vorkommnis für konsistent.",
      "Alex beschließt, ihrer Mutter einen Blumenstrauß zu kaufen, da morgen Muttertag ist. Sie nimmt einen Regenschirm mit, da dunkle Wolken aufziehen. Im Blumengeschäft fällt ihr auf, dass einige andere Kunden ebenfalls mit einem Regenschirm in den Laden gekommen sind.",
    ],
    partAspects: [
      "Hohes Ausmaß der Ähnlichkeit des Verhaltens einer Person",
      "Ähnlichkeit über die Zeit hinweg",
      "Ähnlichkeit über ähnliche Situation hinweg",
    ],
  },
  69: {
    id: 69,
    slideText:
      "Bitte gleiche Dein Beispiel zum Konzept „hohe Konsistenz“ mit den beiden hier dargestellten Expertenbeispielen ab.",
    slideType: "Konsistenz_g3",
    header: "Konzept „hohe Konsistenz“",
    expertExamples: [
      "Als Silvia in der Schule war, hat sie vor Schularbeiten ihren Glücksstein immer drei Mal gerieben, weil sie dachte, dass ihr dies Glück bringt. Mittlerweile ist sie älter, nutzt ihren Glücksstein aber immer noch, beispielsweise am Tag ihrer Führerscheinprüfung. Sie reibt ihn vorher drei Mal, da sie immer noch an die Glückswirkung des Steines glaubt. ",
      "Frau Albers gibt jedes Mal im Restaurant hohes Trinkgeld. Früher hat sie dem Kellner im kleinen Dorfrestaurant bereits 30 Euro gegeben, obwohl sie damals noch nicht viel Geld hatte. Heute, wo sie ihren 50. Geburtstag beim schicken Italiener feiert, gibt sie dem Kellner ebenfalls 30 Euro Trinkgeld.",
    ],
  },
  70: {
    id: 70,
    slideText: "Bitte bewerte nun Dein Beispiel.",
    slideType: "Konsistenz_g4",
    header: "Konzept „hohe Konsistenz“",
  },
  71: {
    id: 71,
    slideText:
      "Das Einschätzen der Qualität meines Beispiels zum Konzept „hohe Konsistenz“ fiel mir…",
    slideType: "Beispiel_Konsistenz3",
  },
  72: {
    id: 72,
    slideText:
      "Beim Einschätzen der Qualität meines Beispiels zum Konzept „hohe Konsistenz“ war meine geistige Denkanstrengung…",
    slideType: "Beispiel_Konsistenz4",
  },
  73: {
    id: 73,
    slideText:
      "Distinktheit: Das Ausmaß, in dem eine Person in unterschiedlicher Art und Weise auf ähnliche Stimuli oder Situationen reagiert. Die Distinktheit ist hoch, wenn sich eine Person in wenigen Situationen gleich verhält, und niedrig, wenn sie in vielen Situationen das gleiche Verhalten zeigt.",
    slideType: "Beispiel_Distinktheit0",
    header:
      "Denke Dir bitte ein Beispiel aus, das das Konzept hoher Distinktheit veranschaulicht.",
  },
  74: {
    id: 74,
    slideText:
      "Das Ausdenken eines Beispiels zum Konzept „hohe Distinktheit“ fiel mir…",
    slideType: "Beispiel_Distinktheit1",
  },
  75: {
    id: 75,
    slideText:
      "Beim Ausdenken eines Beispiels zum Konzept „hohe Distinktheit“ war meine geistige Denkanstrengung…",
    slideType: "Beispiel_Distinktheit2",
  },
  76: {
    id: 76,
    slideText:
      "Bitte gleiche Dein Beispiel zum Konzept „hohe Distinktheit“ nun mit den folgenden Expertenbeispielen ab.",
    slideType: "Distinktheit_g1_1",
    header: "Konzept „hohe Distinktheit“",
    negativeExamples: [
      "Jakob und Sven besuchen die gleiche Klasse. Jakob ist ein sehr guter Schüler, während Sven eher schlechte Noten bekommt. Als sie am Montagmorgen ihre Deutscharbeit zurückbekommen, ist es anders: Jakob hat eine schlechte Note bekommen, Sven dagegen eine gute.",
      "Beim Einkaufen an der Kasse wünscht Anna dem Kassierer einen schönen Tag. Als sie mittags ihren Sohn Daniel von der Schule abholt, wird sie von der Lehrerin ermahnt, weil Daniel einen anderen Mitschüler beleidigt hat. Anna verabschiedet sich nach dem Gespräch von der Lehrerin und wünscht auch ihr einen schönen Tag.",
    ],
    expertExamples: [
      "Im Hause Müller wird jeden Abend vor dem Essen ein Tischgebet gesprochen. Wenn der jüngste Sohn, Yannick, von seinem Vater darum gebeten wird, das Tischgebet zu halten, kommt er dieser Bitte nach. Wird Yannick allerdings von seiner Mutter darum gebeten, gibt er nur eine genervte Antwort.",
      "Als Steven eine ältere Dame sieht, deren Einkäufe heruntergefallen sind, eilt er ihr zu Hilfe und räumt ihr die Einkäufe zurück in die Tasche. Am nächsten Tag bemerkt Steven einen älteren Mann, dem sein Portemonnaie auf die Straße gefallen ist. Steven hilft ihm nicht, sondern geht einfach weiter.",
    ],
    partAspects: [
      "Hohes Ausmaß von unterschiedlichen Reaktionen einer einzelnen Person",
      "Reaktion auf ähnliche Stimuli oder Situationen",
    ],
  },
  78: {
    id: 78,
    slideText:
      "Bitte gleiche Dein Beispiel zum Konzept „hohe Distinktheit“ mit den beiden hier dargestellten Beispielen ab.",
    slideType: "Distinktheit_g2",
    header: "Konzept „hohe Distinktheit“",
    negativeExamples: [
      "Jakob und Sven besuchen die gleiche Klasse. Jakob ist ein sehr guter Schüler, während Sven eher schlechte Noten bekommt. Als sie am Montagmorgen ihre Deutscharbeit zurückbekommen, ist es anders: Jakob hat eine schlechte Note bekommen, Sven dagegen eine gute.",
      "Beim Einkaufen an der Kasse wünscht Anna dem Kassierer einen schönen Tag. Als sie mittags ihren Sohn Daniel von der Schule abholt, wird sie von der Lehrerin ermahnt, weil Daniel einen anderen Mitschüler beleidigt hat. Anna verabschiedet sich nach dem Gespräch von der Lehrerin und wünscht auch ihr einen schönen Tag.",
    ],
    partAspects: [
      "Hohes Ausmaß von unterschiedlichen Reaktionen einer einzelnen Person",
      "Reaktion auf ähnliche Stimuli oder Situationen",
    ],
  },
  79: {
    id: 79,
    slideText:
      "Bitte gleiche Dein Beispiel zum Konzept „hohe Distinktheit“ mit den beiden hier dargestellten Expertenbeispielen ab. ",
    slideType: "Distinktheit_g3",
    header: "Konzept „hohe Distinktheit“",
    expertExamples: [
      "Im Hause Müller wird jeden Abend vor dem Essen ein Tischgebet gesprochen. Wenn der jüngste Sohn, Yannick, von seinem Vater darum gebeten wird, das Tischgebet zu halten, kommt er dieser Bitte nach. Wird Yannick allerdings von seiner Mutter darum gebeten, gibt er nur eine genervte Antwort.",
      "Als Steven eine ältere Dame sieht, deren Einkäufe heruntergefallen sind, eilt er ihr zu Hilfe und räumt ihr die Einkäufe zurück in die Tasche. Am nächsten Tag bemerkt Steven einen älteren Mann, dem sein Portemonnaie auf die Straße gefallen ist. Steven hilft ihm nicht, sondern geht einfach weiter.",
    ],
  },
  80: {
    id: 80,
    slideText: "Bitte bewerte nun Dein Beispiel.",
    slideType: "Distinktheit_g4",
    header: "Konzept „hohe Distinktheit“",
  },
  81: {
    id: 81,
    slideText:
      "Das Einschätzen der Qualität meines Beispiels zum Konzept „hohe Distinktheit“ fiel mir…",
    slideType: "Beispiel_Distinktheit3",
  },
  82: {
    id: 82,
    slideText:
      "Beim Einschätzen der Qualität meines Beispiels zum Konzept „hohe Distinktheit“ war meine geistige Denkanstrengung…",
    slideType: "Beispiel_Distinktheit4",
  },
  83: {
    id: 83,
    slideText:
      "Fundamentaler Attributionsfehler: Die Tendenz, das Verhalten von anderen in höherem Maß auf interne Ursachen zurückzuführen, als es eigentlich gerechtfertigt wäre, bei gleichzeitigem Unterschätzen des Einflusses der Situation.",
    slideType: "Beispiel_FA0",
    header:
      "Denke Dir bitte ein Beispiel aus, das das Konzept „Fundamentaler Attributionsfehler” veranschaulicht.",
  },
  84: {
    id: 84,
    slideText:
      "Das Ausdenken eines Beispiels zum Konzept „Fundamentaler Attributionsfehler“ fiel mir…",
    slideType: "Beispiel_FA1",
  },
  85: {
    id: 85,
    slideText:
      "Beim Ausdenken eines Beispiels zum Konzept „Fundamentaler Attributionsfehler“ war meine geistige Denkanstrengung…",
    slideType: "Beispiel_FA2",
  },
  86: {
    id: 86,
    slideText:
      "Bitte gleiche Dein Beispiel zum Konzept „Fundamentaler Attributionsfehler“ nun mit den folgenden Expertenbeispielen ab.",
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
    partAspects: [
      "Attribution des Verhaltens anderer",
      "Attribution ist fehlgeleitet/ fehlerhaft",
      "Überschätzung interner Ursachen für Verhalten",
      "Unterschätzung des Situationseinflusses",
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
    partAspects: [
      "Attribution des Verhaltens anderer",
      "Attribution ist fehlgeleitet/ fehlerhaft",
      "Überschätzung interner Ursachen für Verhalten",
      "Unterschätzung des Situationseinflusses",
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
      "Bitte gleiche Dein Beispiel zum Konzept „Selbstwertdienliche Verzerrung“ nun mit den folgenden Expertenbeispielen ab.",
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
    partAspects: [
      "Positives auf eigene Eigenschaften/internale Ursachen zurückgeführt",
      "Negatives auf unkontrollierbare Faktoren/externale Ursachen zurückgeführt",
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
    partAspects: [
      "Positives auf eigene Eigenschaften/internale Ursachen zurückgeführt",
      "Negatives auf unkontrollierbare Faktoren/externale Ursachen zurückgeführt",
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
      "Bitte gleiche Dein Beispiel zum Konzept „Gerechte-Welt-Glaube“ nun mit den folgenden Expertenbeispielen ab.",
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
    partAspects: [
      "Annahme 1: Welt ist ein vorhersehbarer Ort",
      "Annahme 2: Welt ist ein gerechter Ort",
      "Annahme 3: Jeder bekommt, was er oder sie verdient",
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
    partAspects: [
      "Annahme 1: Welt ist ein vorhersehbarer Ort",
      "Annahme 2: Welt ist ein gerechter Ort",
      "Annahme 3: Jeder bekommt, was er oder sie verdient",
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
