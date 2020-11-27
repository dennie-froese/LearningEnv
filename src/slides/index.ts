export type SlideInterface = {
  id: number;
  slideType: string;
  slideText: string;
  demographic?: Record<string, string>;
  nachangaben?: Record<number, [string, string, string]>;
  header?: string;
};

const SlideIDs = [1, 2, 3, 4, 5];

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
      "Vielen Dank, dass Du an unserer Studie teilnimmst. Im Folgenden wirst Du verschiedene Aufgaben bearbeiten. \n \n \nBitte befolge stets die Anweisungen, die Dir auf den einzelnen Seiten gegeben werden. Für die vollständige Teilnahme an dieser Studie erhältst du eine Aufwandsentschädigung in Höhe von 10 Euro. Das Geld wird Dir nach erfolgreichem Abschluss der Studie per Überweisung ausgezahlt. Hierzu benötigen wir Deine Kontodaten, die Du nach dem Bearbeiten der Studie angeben musst. Die Daten werden nach Beendigung der Studie anonymisiert und ausschließlich zu forschungsinternen Zwecken von den Mitarbeiter*innen der Arbeitsgruppe „Pädagogische Intervention, Evaluation und Implementation“ der Ruhr-Universität Bochum gespeichert und verwendet. Du kannst der Speicherung und Verwendung Deiner Daten nachträglich widersprechen, musst dann jedoch die Aufwandsentschädigung zurückzahlen. Bitte beachte, dass die Löschung Deiner Daten nur so lange erfolgen kann, wie diese nicht anonymisiert wurden. \n \nBitte beachte, dass Du die Aufwandsentschädigung nur erhältst, wenn Du die Studie vollständig und entsprechend der Anweisungen bearbeitest. Das bedeutet, wenn Du einzelne Seiten z. B. ohne ernsthafte Bearbeitung „durchklickst“, dann können wir das in Deinen Daten sehen und können Dir die Aufwandsentschädigung für Deine Teilnahme nicht auszahlen. Die Teilnahme an dieser Studie ist freiwillig und kann jederzeit ohne negative Konsequenzen abgebrochen werden kann. \n \nWenn Du alles aufmerksam gelesen hast, klicke auf „Weiter“ und starte damit Deine Teilnahme an der Studie. \n \nKlicke nur auf „Weiter“, wenn Du mit den Teilnahmebedingungen einverstanden bist.",
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
      3: [
        "Mit den Aufgaben im Studium komme ich…",
        "Schlechter zurecht als meine Kommilitonen",
        "Besser zurecht als meine Kommilitonen",
      ],
      4: ["Ich bin…", "Nicht intelligent", "Sehr intelligent"],
      5: ["Ich kann im Studium…", "Wenig", "Viel"],
      6: ["Im Studium fallen mir viele Aufgaben…", "Schwer", "Leicht"],
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
      "Deine nächste Aufgabe ist es gleich, Dir Beispiele für die Konzepte auszudenken, die Du im Text kennengelernt hast. Nach jedem Beispiel, das Du Dir ausgedacht hast, wirst Du darum gebeten, Dein Beispiel zu bewerten. \n\nWenn es losgehen kann, klicke bitte auf „Weiter“. ",
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
    slideType: "Beispiel_Attribution3",
  },
  39: {
    id: 39,
    slideText: "",
    slideType: "Beispiel_Attribution4",
  },
  40: { id: 40, slideText: "", slideType: "Beispiel_SN0" },
  41: { id: 41, slideText: "", slideType: "Beispiel_SN1" },
  42: { id: 42, slideText: "", slideType: "Beispiel_SN2" },
  43: { id: 43, slideText: "", slideType: "SN_g1_1" },
  44: { id: 44, slideText: "", slideType: "SN_g1_2" },
  45: { id: 45, slideText: "", slideType: "Beispiel_SN3" },
  46: { id: 46, slideText: "", slideType: "Beispiel_SN4" },
  47: {
    id: 47,
    slideText: "",
    slideType: "Beispiel_Konsens0",
  },
  48: {
    id: 48,
    slideText: "",
    slideType: "Beispiel_Konsens1",
  },
  49: {
    id: 49,
    slideText: "",
    slideType: "Beispiel_Konsens2",
  },
  50: { id: 50, slideText: "", slideType: "Konsens_g1_1" },
  51: { id: 51, slideText: "", slideType: "Konsens_g1_2" },
  52: {
    id: 52,
    slideText: "",
    slideType: "Beispiel_Konsens3",
  },
  53: {
    id: 53,
    slideText: "",
    slideType: "Beispiel_Konsens4",
  },
  54: {
    id: 54,
    slideText: "",
    slideType: "Beispiel_Konsistenz0",
  },
  55: {
    id: 55,
    slideText: "",
    slideType: "Beispiel_Konsistenz1",
  },
  56: {
    id: 56,
    slideText: "",
    slideType: "Beispiel_Konsistenz2",
  },
  57: {
    id: 57,
    slideText: "",
    slideType: "Konsistenz_g1_1",
  },
  58: {
    id: 58,
    slideText: "",
    slideType: "Konsistenz_g1_2",
  },
  59: {
    id: 59,
    slideText: "",
    slideType: "Beispiel_Konsistenz3",
  },
  60: {
    id: 60,
    slideText: "",
    slideType: "Beispiel_Konsistenz4",
  },
  61: {
    id: 61,
    slideText: "",
    slideType: "Beispiel_Distinktheit0",
  },
  62: {
    id: 62,
    slideText: "",
    slideType: "Beispiel_Distinktheit1",
  },
  63: {
    id: 63,
    slideText: "",
    slideType: "Beispiel_Distinktheit2",
  },
  64: {
    id: 64,
    slideText: "",
    slideType: "Distinktheit_g1_1",
  },
  65: {
    id: 65,
    slideText: "",
    slideType: "Distinktheit_g1_2",
  },
  66: {
    id: 66,
    slideText: "",
    slideType: "Beispiel_Distinktheit3",
  },
  67: {
    id: 67,
    slideText: "",
    slideType: "Beispiel_Distinktheit4",
  },
  68: { id: 68, slideText: "", slideType: "Beispiel_FA0" },
  69: { id: 69, slideText: "", slideType: "Beispiel_FA1" },
  70: { id: 70, slideText: "", slideType: "Beispiel_FA2" },
  71: { id: 71, slideText: "", slideType: "FA_g1_1" },
  72: { id: 72, slideText: "", slideType: "FA_g1_2" },
  73: { id: 73, slideText: "", slideType: "Beispiel_FA3" },
  74: { id: 74, slideText: "", slideType: "Beispiel_FA4" },
  75: { id: 75, slideText: "", slideType: "Beispiel_SV0" },
  76: { id: 76, slideText: "", slideType: "Beispiel_SV1" },
  77: { id: 77, slideText: "", slideType: "Beispiel_SV2" },
  78: { id: 78, slideText: "", slideType: "SV_g1_1" },
  79: { id: 79, slideText: "", slideType: "SV_g1_2" },
  80: { id: 80, slideText: "", slideType: "Beispiel_SV3" },
  81: { id: 81, slideText: "", slideType: "Beispiel_SV4" },
  82: { id: 82, slideText: "", slideType: "Beispiel_GWG0" },
  83: { id: 83, slideText: "", slideType: "Beispiel_GWG1" },
  84: { id: 84, slideText: "", slideType: "Beispiel_GWG2" },
  85: { id: 85, slideText: "", slideType: "GWG_g1_1" },
  86: { id: 86, slideText: "", slideType: "GWG_g1_2" },
  87: { id: 87, slideText: "", slideType: "Beispiel_GWG3" },
  88: { id: 88, slideText: "", slideType: "Beispiel_GWG4" },
  89: { id: 89, slideText: "", slideType: "Ende" },
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
    slideType: "Beispiel_Attribution3",
  },
  39: {
    id: 39,
    slideText: "",
    slideType: "Beispiel_Attribution4",
  },
  40: { id: 40, slideText: "", slideType: "Beispiel_SN0" },
  41: { id: 41, slideText: "", slideType: "Beispiel_SN1" },
  42: { id: 42, slideText: "", slideType: "Beispiel_SN2" },
  43: { id: 43, slideText: "", slideType: "SN_g1_1" },
  44: { id: 44, slideText: "", slideType: "SN_g1_2" },
  45: { id: 45, slideText: "", slideType: "Beispiel_SN3" },
  46: { id: 46, slideText: "", slideType: "Beispiel_SN4" },
  47: {
    id: 47,
    slideText: "",
    slideType: "Beispiel_Konsens0",
  },
  48: {
    id: 48,
    slideText: "",
    slideType: "Beispiel_Konsens1",
  },
  49: {
    id: 49,
    slideText: "",
    slideType: "Beispiel_Konsens2",
  },
  50: { id: 50, slideText: "", slideType: "Konsens_g1_1" },
  51: { id: 51, slideText: "", slideType: "Konsens_g1_2" },
  52: {
    id: 52,
    slideText: "",
    slideType: "Beispiel_Konsens3",
  },
  53: {
    id: 53,
    slideText: "",
    slideType: "Beispiel_Konsens4",
  },
  54: {
    id: 54,
    slideText: "",
    slideType: "Beispiel_Konsistenz0",
  },
  55: {
    id: 55,
    slideText: "",
    slideType: "Beispiel_Konsistenz1",
  },
  56: {
    id: 56,
    slideText: "",
    slideType: "Beispiel_Konsistenz2",
  },
  57: {
    id: 57,
    slideText: "",
    slideType: "Konsistenz_g1_1",
  },
  58: {
    id: 58,
    slideText: "",
    slideType: "Konsistenz_g1_2",
  },
  59: {
    id: 59,
    slideText: "",
    slideType: "Beispiel_Konsistenz3",
  },
  60: {
    id: 60,
    slideText: "",
    slideType: "Beispiel_Konsistenz4",
  },
  61: {
    id: 61,
    slideText: "",
    slideType: "Beispiel_Distinktheit0",
  },
  62: {
    id: 62,
    slideText: "",
    slideType: "Beispiel_Distinktheit1",
  },
  63: {
    id: 63,
    slideText: "",
    slideType: "Beispiel_Distinktheit2",
  },
  64: {
    id: 64,
    slideText: "",
    slideType: "Distinktheit_g1_1",
  },
  65: {
    id: 65,
    slideText: "",
    slideType: "Distinktheit_g1_2",
  },
  66: {
    id: 66,
    slideText: "",
    slideType: "Beispiel_Distinktheit3",
  },
  67: {
    id: 67,
    slideText: "",
    slideType: "Beispiel_Distinktheit4",
  },
  68: { id: 68, slideText: "", slideType: "Beispiel_FA0" },
  69: { id: 69, slideText: "", slideType: "Beispiel_FA1" },
  70: { id: 70, slideText: "", slideType: "Beispiel_FA2" },
  71: { id: 71, slideText: "", slideType: "FA_g1_1" },
  72: { id: 72, slideText: "", slideType: "FA_g1_2" },
  73: { id: 73, slideText: "", slideType: "Beispiel_FA3" },
  74: { id: 74, slideText: "", slideType: "Beispiel_FA4" },
  75: { id: 75, slideText: "", slideType: "Beispiel_SV0" },
  76: { id: 76, slideText: "", slideType: "Beispiel_SV1" },
  77: { id: 77, slideText: "", slideType: "Beispiel_SV2" },
  78: { id: 78, slideText: "", slideType: "SV_g1_1" },
  79: { id: 79, slideText: "", slideType: "SV_g1_2" },
  80: { id: 80, slideText: "", slideType: "Beispiel_SV3" },
  81: { id: 81, slideText: "", slideType: "Beispiel_SV4" },
  82: { id: 82, slideText: "", slideType: "Beispiel_GWG0" },
  83: { id: 83, slideText: "", slideType: "Beispiel_GWG1" },
  84: { id: 84, slideText: "", slideType: "Beispiel_GWG2" },
  85: { id: 85, slideText: "", slideType: "GWG_g1_1" },
  86: { id: 86, slideText: "", slideType: "GWG_g1_2" },
  87: { id: 87, slideText: "", slideType: "Beispiel_GWG3" },
  88: { id: 88, slideText: "", slideType: "Beispiel_GWG4" },
  89: { id: 89, slideText: "", slideType: "Ende" },
};
