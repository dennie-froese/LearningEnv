const SlideTypes = [
  "Willkommen",
  "Intro",
  "demographisch_intro",
  "demographisch",
  "Nachangaben_Intro",
  "NachAngaben_Schueler_1_4",
  "Nachangaben_1_4",
  "Abstract_Intro",
  "Abstract_Intro_1",
  "Abstract_Intro_2",
  "Abstract_Intro_3",
  "Abstract_Intro_4",
  "Abstract_Definition_1",
  "Abstract_Definition_2",
  "Abstract_Definition_3",
  "Abstract_Kriterium_Intro_1",
  "Abstract_Kriterium_Intro_2",
  "Abstract_Kriterium",
  "Abstract_Tabelle_1",
  "Abstract_Tabelle_2",
  "Abstract_Tabelle_3",
  "Abstract_Tabelle_4",
  "Abstract_Tabelle_5",
  "Abstract_Tabelle_6",
  "Abstract_Tabelle_7",
  "Abstract_Tabelle_8",
  "Abstract_Tabelle_9",
  "Abstract_Tabelle_10",
  "Kriterium_Formaleses_Intro",
  "Kriterium_Formaleses_Intro_1",
  "Kriterium_Orthographie_Intro",
  "Kriterium_Orthographie_Intro_1",
  "Kriterium_Orthographie_Intro_2",
  "Kriterium_Orthographie_Intro_3",
  "Kriterium_Orthographie_Richtig",
  "Kriterium_Orthographie_Falsch",
  "Kriterium_Wissenschaftlich",
  "Kriterium_Wissenschaftlich_1",
  "Kriterium_Wissenschaftlich_2",
  "Kriterium_Wissenschaftlich_3",
  "Kriterium_Wissenschaftlich_4",
  "Kriterium_Wissenschaftlich_Richtig",
  "Kriterium_Wissenschaftlich_Falsch",
  "Kriterium_Text_Organisation",
  "Kriterium_Text_Organisation_1",
  "Kriterium_Text_Organisation_Richtig",
  "Kriterium_Text_Organisation_Falsch",
  "Kriterium_Aufbau",
  "Kriterium_Aufbau_1",
  "Kriterium_Aufbau_2",
  "Lesen_Studie",
  "Lesen_Studie_1",
  "Lesen_Studie_2",
  "Lesen_Studie_Likert_1",
  "Lesen_Studie_Likert_2",
  "Lesen_Studie_Likert_3",
  "Abstract_Schreiben_Intro",
  "Abstract_Schreiben_Intro_1",
  "Abstract_Schreiben_Timer",
  "Abstract_Schreiben_Likert_1",
  "Abstract_Schreiben_Likert_2",
  "Selbstbewertung_Abstract",
  "Selbstbewertung_Abstract_1",
  "Selbstbewertung_Abstract_Inhalt",
  "Selbstbewertung_Abstract_Inhalt_Likert_1",
  "Selbstbewertung_Abstract_Inhalt_Likert_2",
  "Selbstbewertung_Abstract_Formales",
  "Selbstbewertung_Abstract_Formales_Likert_1",
  "Selbstbewertung_Abstract_Formales_Likert_2",
  "Selbstbewertung_Abstract_Orthographie",
  "Selbstbewertung_Abstract_Orthographie_Likert_1",
  "Selbstbewertung_Abstract_Orthographie_Likert_2",
  "Selbstbewertung_Abstract_Wissenschaftlich",
  "Selbstbewertung_Abstract_Wissenschaftlich_Likert_1",
  "Selbstbewertung_Abstract_Wissenschaftlich_Likert_2",
  "Selbstbewertung_Abstract_Text_Organisation",
  "Selbstbewertung_Abstract_Text_Organisation_Likert_1",
  "Selbstbewertung_Abstract_Text_Organisation_Likert_2",
  "Selbstbewertung_Abstract_Aufbau",
  "Selbstbewertung_Abstract_Aufbau_Likert_1",
  "Selbstbewertung_Abstract_Aufbau_Likert_2",
  "Selbstbewertung_Abstract_Gruppe2",
  "Selbstbewertung_Abstract_Gruppe2_Inhalt",
  "Selbstbewertung_Abstract_Gruppe2_Inhalt_Likert_1",
  "Selbstbewertung_Abstract_Gruppe2_Inhalt_Likert_2",
  "Selbstbewertung_Abstract_Gruppe2_Formales",
  "Selbstbewertung_Abstract_Gruppe2_Formales_Likert_1",
  "Selbstbewertung_Abstract_Gruppe2_Formales_Likert_2",
  "Selbstbewertung_Abstract_Gruppe2_Orthographie",
  "Selbstbewertung_Abstract_Gruppe2_Orthographie_Likert_1",
  "Selbstbewertung_Abstract_Gruppe2_Orthographie_Likert_2",
  "Selbstbewertung_Abstract_Gruppe2_Wissenschaftlich",
  "Selbstbewertung_Abstract_Gruppe2_Wissenschaftlich_Likert_1",
  "Selbstbewertung_Abstract_Gruppe2_Wissenschaftlich_Likert_2",
  "Selbstbewertung_Abstract_Gruppe2_Text_Organisation",
  "Selbstbewertung_Abstract_Gruppe2_Text_Organisation_Likert_1",
  "Selbstbewertung_Abstract_Gruppe2_Text_Organisation_Likert_2",
  "Selbstbewertung_Abstract_Gruppe2_Aufbau",
  "Selbstbewertung_Abstract_Gruppe2_Aufbau_Likert_1",
  "Selbstbewertung_Abstract_Gruppe2_Aufbau_Likert_2",
  "Kriteriurm_Verbesserung_Intro",
  "Kriteriurm_Verbesserung_Auswahl",
  "Kriteriurm_Verbesserung_Inhalt",
  "Kriteriurm_Verbesserung_Inhalt_1",
  "Kriteriurm_Verbesserung_Inhalt_Likert_1",
  "Kriteriurm_Verbesserung_Inhalt_Likert_2",
  "Kriteriurm_Verbesserung_Formales",
  "Kriteriurm_Verbesserung_Formales_1",
  "Kriteriurm_Verbesserung_Formales_Likert_1",
  "Kriteriurm_Verbesserung_Formales_Likert_2",
  "Kriteriurm_Verbesserung_Orthographie",
  "Kriteriurm_Verbesserung_Orthographie_1",
  "Kriteriurm_Verbesserung_Orthographie_Likert_1",
  "Kriteriurm_Verbesserung_Orthographie_Likert_2",
  "Kriteriurm_Verbesserung_Wissenschaftlich",
  "Kriteriurm_Verbesserung_Wissenschaftlich_1",
  "Kriteriurm_Verbesserung_Wissenschaftlich_Likert_1",
  "Kriteriurm_Verbesserung_Wissenschaftlich_Likert_2",
  "Kriteriurm_Verbesserung_Text_Organisation",
  "Kriteriurm_Verbesserung_Text_Organisation_1",
  "Kriteriurm_Verbesserung_Text_Organisation_Likert_1",
  "Kriteriurm_Verbesserung_Text_Organisation_Likert_2",
  "Kriteriurm_Verbesserung_Aufbau",
  "Kriteriurm_Verbesserung_Aufbau_1",
  "Kriteriurm_Verbesserung_Aufbau_Likert_1",
  "Kriteriurm_Verbesserung_Aufbau_Likert_2",
  "Timer_Correction",
  "Timer_Correction_Likert",
  "Timer_Correction_Likert_1",
  "Selbstbewertung_Abstract_Verbessert_Intro",
  "Selbstbewertung_Abstract_Verbessert_Inhalt",
  "Selbstbewertung_Abstract_Verbessert_Inhalt_Likert",
  "Selbstbewertung_Abstract_Verbessert_Inhalt_Likert_1",
  "Selbstbewertung_Abstract_Verbessert_Formales",
  "Selbstbewertung_Abstract_Verbessert_Formales_Likert",
  "Selbstbewertung_Abstract_Verbessert_Formales_Likert_1",
  "Selbstbewertung_Abstract_Ortographie",
  "Selbstbewertung_Abstract_Ortographie_Likert",
  "Selbstbewertung_Abstract_Ortographie_Likert_1",
  "Selbstbewertung_Abstract_Verbessert_Wissenschaftlich",
  "Selbstbewertung_Abstract_Verbessert_Wissenschaftlich_Likert",
  "Selbstbewertung_Abstract_Verbessert_Wissenschaftlich_Likert_1",
  "Selbstbewertung_Abstract_Verbessert_Text_Organisation",
  "Selbstbewertung_Abstract_Verbessert_Text_Organisation_Likert",
  "Selbstbewertung_Abstract_Verbessert_Text_Organisation_Likert_1",
  "Selbstbewertung_Abstract_Verbessert_Aufbau",
  "Selbstbewertung_Abstract_Verbessert_Aufbau_Likert",
  "Selbstbewertung_Abstract_Verbessert_Aufbau_Likert_1",
  "Selbstbewertung_Abstract_Verbessert_Gruppe2_Intro",
  "Selbstbewertung_Abstract_Verbessert_Gruppe2_Inhalt",
  "Selbstbewertung_Abstract_Verbessert_Gruppe2_Inhalt_Likert",
  "Selbstbewertung_Abstract_Verbessert_Gruppe2_Inhalt_Likert_1",
  "Selbstbewertung_Abstract_Verbessert_Gruppe2_Formales",
  "Selbstbewertung_Abstract_Verbessert_Gruppe2_Formales_Likert",
  "Selbstbewertung_Abstract_Verbessert_Gruppe2_Formales_Likert_1",
  "Selbstbewertung_Abstract_Verbessert_Gruppe2_Ortographie",
  "Selbstbewertung_Abstract_Verbessert_Gruppe2_Ortographie_Likert",
  "Selbstbewertung_Abstract_Verbessert_Gruppe2_Ortographie_Likert_1",
  "Selbstbewertung_Abstract_Verbessert_Gruppe2_Wissenschaftlich",
  "Selbstbewertung_Abstract_Verbessert_Gruppe2_Wissenschaftlich_Likert",
  "Selbstbewertung_Abstract_Verbessert_Gruppe2_Wissenschaftlich_Likert_1",
  "Selbstbewertung_Abstract_Verbessert_Gruppe2_Text_Organisation",
  "Selbstbewertung_Abstract_Verbessert_Gruppe2_Text_Organisation_Likert",
  "Selbstbewertung_Abstract_Verbessert_Gruppe2_Text_Organisation_Likert_1",
  "Selbstbewertung_Abstract_Verbessert_Gruppe2_Aufbau",
  "Selbstbewertung_Abstract_Verbessert_Gruppe2_Aufbau_Likert",
  "Selbstbewertung_Abstract_Verbessert_Gruppe2_Aufbau_Likert_1",
  "Ende",
];

type SlideType = typeof SlideTypes[number];

const slideTypePairs: { [key in SlideType]: number } = {
  Willkommen: 4,
  Intro: 5,
  demographisch_intro: 6,
  demographisch: 7,
  Nachangaben_Intro: 8,
  NachAngaben_Schueler_1_4: 9,
  Nachangaben_1_4: 10,
  Abstract_Intro: 11,
  Abstract_Intro_1: 12,
  Abstract_Intro_2: 13,
  Abstract_Intro_3: 14,
  Abstract_Intro_4: 15,
  Abstract_Definition_1: 16,
  Abstract_Definition_2: 17,
  Abstract_Definition_3: 18,
  Abstract_Kriterium_Intro_1: 19,
  Abstract_Kriterium_Intro_2: 20,
  Abstract_Kriterium: 21,
  Abstract_Tabelle_1: 22,
  Abstract_Tabelle_2: 23,
  Abstract_Tabelle_3: 24,
  Abstract_Tabelle_4: 25,
  Abstract_Tabelle_5: 26,
  Abstract_Tabelle_6: 27,
  Abstract_Tabelle_7: 28,
  Abstract_Tabelle_8: 29,
  Abstract_Tabelle_9: 30,
  Abstract_Tabelle_10: 31,
  Kriterium_Formaleses_Intro: 32,
  Kriterium_Formaleses_Intro_1: 33,
  Kriterium_Orthographie_Intro: 34,
  Kriterium_Orthographie_Intro_1: 35,
  Kriterium_Orthographie_Intro_2: 36,
  Kriterium_Orthographie_Intro_3: 37,
  Kriterium_Orthographie_Richtig: 38,
  Kriterium_Orthographie_Falsch: 39,
  Kriterium_Wissenschaftlich: 40,
  Kriterium_Wissenschaftlich_1: 41,
  Kriterium_Wissenschaftlich_2: 42,
  Kriterium_Wissenschaftlich_3: 43,
  Kriterium_Wissenschaftlich_4: 44,
  Kriterium_Wissenschaftlich_Richtig: 45,
  Kriterium_Wissenschaftlich_Falsch: 46,
  Kriterium_Text_Organisation: 47,
  Kriterium_Text_Organisation_1: 48,
  Kriterium_Text_Organisation_Richtig: 49,
  Kriterium_Text_Organisation_Falsch: 50,
  Kriterium_Aufbau: 51,
  Kriterium_Aufbau_1: 52,
  Kriterium_Aufbau_2: 53,
  Lesen_Studie: 54,
  Lesen_Studie_1: 55,
  Lesen_Studie_2: 56,
  Lesen_Studie_Likert_1: 57,
  Lesen_Studie_Likert_2: 58,
  Lesen_Studie_Likert_3: 59,
  Abstract_Schreiben_Intro: 60,
  Abstract_Schreiben_Intro_1: 61,
  Abstract_Schreiben_Timer: 62,
  Abstract_Schreiben_Likert_1: 63,
  Abstract_Schreiben_Likert_2: 64,
  Selbstbewertung_Abstract: 65,
  Selbstbewertung_Abstract_1: 66,
  Selbstbewertung_Abstract_Inhalt: 67,
  Selbstbewertung_Abstract_Inhalt_Likert_1: 68,
  Selbstbewertung_Abstract_Inhalt_Likert_2: 69,
  Selbstbewertung_Abstract_Formales: 70,
  Selbstbewertung_Abstract_Formales_Likert_1: 71,
  Selbstbewertung_Abstract_Formales_Likert_2: 72,
  Selbstbewertung_Abstract_Orthographie: 73,
  Selbstbewertung_Abstract_Orthographie_Likert_1: 74,
  Selbstbewertung_Abstract_Orthographie_Likert_2: 75,
  Selbstbewertung_Abstract_Wissenschaftlich: 76,
  Selbstbewertung_Abstract_Wissenschaftlich_Likert_1: 77,
  Selbstbewertung_Abstract_Wissenschaftlich_Likert_2: 78,
  Selbstbewertung_Abstract_Text_Organisation: 79,
  Selbstbewertung_Abstract_Text_Organisation_Likert_1: 80,
  Selbstbewertung_Abstract_Text_Organisation_Likert_2: 81,
  Selbstbewertung_Abstract_Aufbau: 82,
  Selbstbewertung_Abstract_Aufbau_Likert_1: 83,
  Selbstbewertung_Abstract_Aufbau_Likert_2: 84,
  Selbstbewertung_Abstract_Gruppe2: 85,
  Selbstbewertung_Abstract_Gruppe2_Inhalt: 86,
  Selbstbewertung_Abstract_Gruppe2_Inhalt_Likert_1: 87,
  Selbstbewertung_Abstract_Gruppe2_Inhalt_Likert_2: 88,
  Selbstbewertung_Abstract_Gruppe2_Formales: 89,
  Selbstbewertung_Abstract_Gruppe2_Formales_Likert_1: 90,
  Selbstbewertung_Abstract_Gruppe2_Formales_Likert_2: 91,
  Selbstbewertung_Abstract_Gruppe2_Orthographie: 92,
  Selbstbewertung_Abstract_Gruppe2_Orthographie_Likert_1: 93,
  Selbstbewertung_Abstract_Gruppe2_Orthographie_Likert_2: 94,
  Selbstbewertung_Abstract_Gruppe2_Wissenschaftlich: 95,
  Selbstbewertung_Abstract_Gruppe2_Wissenschaftlich_Likert_1: 96,
  Selbstbewertung_Abstract_Gruppe2_Wissenschaftlich_Likert_2: 97,
  Selbstbewertung_Abstract_Gruppe2_Text_Organisation: 98,
  Selbstbewertung_Abstract_Gruppe2_Text_Organisation_Likert_1: 99,
  Selbstbewertung_Abstract_Gruppe2_Text_Organisation_Likert_2: 100,
  Selbstbewertung_Abstract_Gruppe2_Aufbau: 101,
  Selbstbewertung_Abstract_Gruppe2_Aufbau_Likert_1: 102,
  Selbstbewertung_Abstract_Gruppe2_Aufbau_Likert_2: 103,
  Kriteriurm_Verbesserung_Intro: 104,
  Kriteriurm_Verbesserung_Auswahl: 105,
  Kriteriurm_Verbesserung_Inhalt: 106,
  Kriteriurm_Verbesserung_Inhalt_1: 107,
  Kriteriurm_Verbesserung_Inhalt_Likert_1: 108,
  Kriteriurm_Verbesserung_Inhalt_Likert_2: 109,
  Kriteriurm_Verbesserung_Formales: 110,
  Kriteriurm_Verbesserung_Formales_1: 111,
  Kriteriurm_Verbesserung_Formales_Likert_1: 112,
  Kriteriurm_Verbesserung_Formales_Likert_2: 113,
  Kriteriurm_Verbesserung_Orthographie: 114,
  Kriteriurm_Verbesserung_Orthographie_1: 115,
  Kriteriurm_Verbesserung_Orthographie_Likert_1: 116,
  Kriteriurm_Verbesserung_Orthographie_Likert_2: 117,
  Kriteriurm_Verbesserung_Wissenschaftlich: 118,
  Kriteriurm_Verbesserung_Wissenschaftlich_1: 119,
  Kriteriurm_Verbesserung_Wissenschaftlich_Likert_1: 120,
  Kriteriurm_Verbesserung_Wissenschaftlich_Likert_2: 121,
  Kriteriurm_Verbesserung_Text_Organisation: 122,
  Kriteriurm_Verbesserung_Text_Organisation_1: 123,
  Kriteriurm_Verbesserung_Text_Organisation_Likert_1: 124,
  Kriteriurm_Verbesserung_Text_Organisation_Likert_2: 125,
  Kriteriurm_Verbesserung_Aufbau: 126,
  Kriteriurm_Verbesserung_Aufbau_1: 127,
  Kriteriurm_Verbesserung_Aufbau_Likert_1: 128,
  Kriteriurm_Verbesserung_Aufbau_Likert_2: 129,
  Timer_Correction: 130,
  Timer_Correction_Likert: 131,
  Timer_Correction_Likert_1: 132,
  Selbstbewertung_Abstract_Verbessert_Intro: 133,
  Selbstbewertung_Abstract_Verbessert_Inhalt: 134,
  Selbstbewertung_Abstract_Verbessert_Inhalt_Likert: 135,
  Selbstbewertung_Abstract_Verbessert_Inhalt_Likert_1: 136,
  Selbstbewertung_Abstract_Verbessert_Formales: 137,
  Selbstbewertung_Abstract_Verbessert_Formales_Likert: 138,
  Selbstbewertung_Abstract_Verbessert_Formales_Likert_1: 139,
  Selbstbewertung_Abstract_Ortographie: 140,
  Selbstbewertung_Abstract_Ortographie_Likert: 141,
  Selbstbewertung_Abstract_Ortographie_Likert_1: 142,
  Selbstbewertung_Abstract_Verbessert_Wissenschaftlich: 143,
  Selbstbewertung_Abstract_Verbessert_Wissenschaftlich_Likert: 144,
  Selbstbewertung_Abstract_Verbessert_Wissenschaftlich_Likert_1: 145,
  Selbstbewertung_Abstract_Verbessert_Text_Organisation: 146,
  Selbstbewertung_Abstract_Verbessert_Text_Organisation_Likerts: 147,
  Selbstbewertung_Abstract_Verbessert_Text_Organisation_Likert_1: 148,
  Selbstbewertung_Abstract_Verbessert_Aufbau: 149,
  Selbstbewertung_Abstract_Verbessert_Aufbau_Likert: 150,
  Selbstbewertung_Abstract_Verbessert_Aufbau_Likert_1: 151,
  Selbstbewertung_Abstract_Verbessert_Gruppe2_Intro: 152,
  Selbstbewertung_Abstract_Verbessert_Gruppe2_Inhalt: 153,
  Selbstbewertung_Abstract_Verbessert_Gruppe2_Inhalt_Likert: 154,
  Selbstbewertung_Abstract_Verbessert_Gruppe2_Inhalt_Likert_1: 155,
  Selbstbewertung_Abstract_Verbessert_Gruppe2_Formales: 156,
  Selbstbewertung_Abstract_Verbessert_Gruppe2_Formales_Likert: 157,
  Selbstbewertung_Abstract_Verbessert_Gruppe2_Formales_Likert_1: 158,
  Selbstbewertung_Abstract_Verbessert_Gruppe2_Ortographie: 159,
  Selbstbewertung_Abstract_Verbessert_Gruppe2_Ortographie_Likert: 160,
  Selbstbewertung_Abstract_Verbessert_Gruppe2_Ortographie_Likert_1: 161,
  Selbstbewertung_Abstract_Verbessert_Gruppe2_Wissenschaftlich: 162,
  Selbstbewertung_Abstract_Verbessert_Gruppe2_Wissenschaftlich_Likert: 163,
  Selbstbewertung_Abstract_Verbessert_Gruppe2_Wissenschaftlich_Likert_1: 164,
  Selbstbewertung_Abstract_Verbessert_Gruppe2_Text_Organisation: 165,
  Selbstbewertung_Abstract_Verbessert_Gruppe2_Text_Organisation_Likert: 166,
  Selbstbewertung_Abstract_Verbessert_Gruppe2_Text_Organisation_Likert_1: 167,
  Selbstbewertung_Abstract_Verbessert_Gruppe2_Aufbau: 168,
  Selbstbewertung_Abstract_Verbessert_Gruppe2_Aufbau_Likert: 169,
  Selbstbewertung_Abstract_Verbessert_Gruppe2_Aufbau_Likert_1: 170,
  Ende: 171,
};

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
      "Vielen Dank, dass Du an unserer Studie teilnimmst. Im Folgenden wirst Du verschiedene Aufgaben bearbeiten. \n \n \nBitte befolge stets die Anweisungen, die Dir auf den einzelnen Seiten gegeben werden. Für die vollständige Teilnahme an dieser Studie erhältst du eine Aufwandsentschädigung in Höhe von 10 Euro. Das Geld wird Dir nach erfolgreichem Abschluss der Studie per Überweisung ausgezahlt, d.h. Du solltest die Seite vor Beendigung der Studie nicht verlassen. Für die Überweisung benötigen wir Deine Kontodaten, die Du am Ende der Studie angeben musst. Die Daten werden nach Beendigung der Studie anonymisiert und ausschließlich zu forschungsinternen Zwecken von den Mitarbeiter*innen der Arbeitsgruppe Bildungspsychologie der Ruhr-Universität Bochum gespeichert und verwendet. Du kannst der Speicherung und Verwendung Deiner Daten nachträglich widersprechen, musst dann jedoch die Aufwandsentschädigung zurückzahlen. Bitte beachte, dass die Löschung Deiner Daten nur so lange erfolgen kann, wie diese nicht anonymisiert wurden. \n \nBitte beachte, dass Du die Aufwandsentschädigung nur erhältst, wenn Du die Studie vollständig und entsprechend der Anweisungen bearbeitest. Das bedeutet, wenn Du einzelne Seiten z. B. ohne ernsthafte Bearbeitung „durchklickst“, oder Felder freilässt, dann können wir das in Deinen Daten sehen und können Dir die Aufwandsentschädigung für Deine Teilnahme nicht auszahlen. Die Teilnahme an dieser Studie ist freiwillig und kann jederzeit ohne negative Konsequenzen abgebrochen werden. \n \nWenn Du alles aufmerksam gelesen hast, klicke auf „Weiter“ und starte damit Deine Teilnahme an der Studie. \n \nKlicke nur auf „Weiter“, wenn Du mit den Teilnahmebedingungen einverstanden bist.",
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
      "Angaben zu Deiner Person: Fülle bitte zunächst die folgenden Angaben zu Deiner Person aus. Klicke nach der Eingabe bitte auf „Weiter“.",
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
      "Nun möchten wir Dir eine kurze Einführung in eine Textsorte geben, die für das wissenschaftliche Schreiben sehr wichtig ist: das sogenannte Abstract. \n\n\n\nDoch was ist ein Abstract überhaupt?",
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
    slideText:
      "Bitte lies dir nun die Definitionsaspekte eines Abstracts noch einmal genau durch.\n\n\nDefinition",
    slideType: "Abstract_Definition_1",
    criteriaIntroUnits: [
      "Kurze, sachliche Zusammenfassung eines wissenschaftlichen Aufsatzes",
    ],
  },
  17: {
    id: 17,
    slideText:
      "Bitte lies dir nun die Definitionsaspekte eines Abstracts noch einmal genau durch.\n\n\nDefinition",
    slideType: "Abstract_Definition_2",
    criteriaIntroUnits: [
      "Kurze, sachliche Zusammenfassung eines wissenschaftlichen Aufsatzes",
      "fasst die wichtigsten Aspekte zusammen",
    ],
  },
  18: {
    id: 18,
    slideText:
      "Bitte lies dir nun die Definitionsaspekte eines Abstracts noch einmal genau durch.\n\n\nDefinition",
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
      "Nun weißt Du, worum es sich bei der Textsorte handelt. Als nächstes erfährst Du mehr darüber, wie man ein Abstract schreibt. Dazu werden Dir gleich verschiedene Kriterien gezeigt, die ein gutes Abstract erfüllen sollte. Bitte lies dir die folgenden Kriterien aufmerksam durch.\n\n\n\n Klicke auf „Weiter“.",
    slideType: "Abstract_Kriterium_Intro_1",
  },
  20: {
    id: 20,
    slideText: "Kriterium: Inhalt des Abstracts",
    slideType: "Abstract_Kriterium_Intro_2",
  },
  21: {
    id: 21,
    slideText: "Kriterium „Inhalt“:Was sollte ein Abstract beinhalten?",
    slideType: "Abstract_Kriterium",
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
    slideType: "Abstract_Tabelle_1",
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
    slideType: "Abstract_Tabelle_2",
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
    slideType: "Abstract_Tabelle_3",
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
    slideType: "Abstract_Tabelle_4",
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
        "„Die 360 teilnehmenden Kinder (55 % männlich, 45 % weiblich) variierten im Alter von fünf bis achteinhalb Jahren.“",
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
    slideType: "Abstract_Tabelle_5",
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
        "„Die 360 teilnehmenden Kinder (55 % männlich, 45 % weiblich) variierten im Alter von fünf bis achteinhalb Jahren.“",
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
    slideType: "Abstract_Tabelle_6",
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
        "„Die 360 teilnehmenden Kinder (55 % männlich, 45 % weiblich) variierten im Alter von fünf bis achteinhalb Jahren.“",
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
    slideType: "Abstract_Tabelle_7",
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
        "„Die 360 teilnehmenden Kinder (55 % männlich, 45 % weiblich) variierten im Alter von fünf bis achteinhalb Jahren.“",
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
    slideType: "Abstract_Tabelle_8",
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
        "„Die 360 teilnehmenden Kinder (55 % männlich, 45 % weiblich) variierten im Alter von fünf bis achteinhalb Jahren.“",
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
    slideType: "Abstract_Tabelle_9",
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
        "„Die 360 teilnehmenden Kinder (55 % männlich, 45 % weiblich) variierten im Alter von fünf bis achteinhalb Jahren.“",
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
    slideType: "Abstract_Tabelle_10",
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
        "„Die 360 teilnehmenden Kinder (55 % männlich, 45 % weiblich) variierten im Alter von fünf bis achteinhalb Jahren.“",
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
    slideType: "Kriterium_Formaleses_Intro",
  },
  33: {
    id: 33,
    slideText: "Kriterium „Formales“: Was gilt es zu beachten?",
    slideType: "Kriterium_Formaleses_Intro_1",
    criteriaIntroUnits: [
      "1. Maximale Wortanzahl: 250 Wörter",
      "2. Schreiben in ganzen Sätzen",
      "3. Keine Verwendung der Ich-Form",
    ],
  },
  34: {
    id: 34,
    slideText: "Kriterium “Orthographie und Grammatik”",
    slideType: "Kriterium_Orthographie_Intro",
  },
  35: {
    id: 35,
    slideText:
      "Kriterium „Orthographie und Grammatik“:Wie sollte ein Abstract geschrieben sein?",
    slideType: "Kriterium_Orthographie_Intro_1",
    criteriaIntroUnits: ["1. Orthographisch und grammatisch korrekt schreiben"],
  },
  36: {
    id: 36,
    slideText:
      "Kriterium „Orthographie und Grammatik“:Wie sollte ein Abstract geschrieben sein?",
    slideType: "Kriterium_Orthographie_Intro_2",
    criteriaIntroUnits: [
      "1. Orthographisch und grammatisch korrekt schreiben",
      "2. Für Methoden und Ergebnisse: Präteritum (z.B. ergab, sagte) \n\nFür Fazit und Schlussfolgerungen: Präsens (z.B. ergibt, sagt)",
    ],
  },
  37: {
    id: 37,
    slideText:
      "Kriterium „Orthographie und Grammatik“:Wie sollte ein Abstract geschrieben sein?",
    slideType: "Kriterium_Orthographie_Intro_3",
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
    slideType: "Kriterium_Orthographie_Richtig",
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
    slideType: "Kriterium_Orthographie_Falsch",
    criteriaIntroUnits: [
      "1. Orthographisch und grammatisch korrekt schreiben",
      "2. Für Methoden und Ergebnisse: Präteritum (z.B. ergab, sagte) \n\nFür Fazit und Schlussfolgerungen: Präsens (z.B. ergibt, sagt)",
      "3. Nutzung eher von Aktiv- statt Passiv-Formulierungen (sagt vs. wird gesagt)",
    ],
  },
  40: {
    id: 40,
    slideText: "Kriterium “wissenschaftlicher Stil”",
    slideType: "Kriterium_Wissenschaftlich",
  },
  41: {
    id: 41,
    slideText:
      "Kriterium „wissenschaftlicher Stil“:Wie sollte ein Abstract geschrieben sein?",
    slideType: "Kriterium_Wissenschaftlich_1",
    criteriaIntroUnits: ["1. Ich schreibe für meine Leser verständlich"],
  },
  42: {
    id: 42,
    slideText:
      "Kriterium „wissenschaftlicher Stil“:Wie sollte ein Abstract geschrieben sein?",
    slideType: "Kriterium_Wissenschaftlich_2",
    criteriaIntroUnits: [
      "1. Ich schreibe für meine Leser verständlich",
      "2. Ich beziehe mich nur auf die Studie, schweife nicht ab und verallgemeinere nicht",
    ],
  },
  43: {
    id: 43,
    slideText:
      "Kriterium „wissenschaftlicher Stil“:Wie sollte ein Abstract geschrieben sein?",
    slideType: "Kriterium_Wissenschaftlich_3",
    criteriaIntroUnits: [
      "1. Ich schreibe für meine Leser verständlich",
      "2. Ich beziehe mich nur auf die Studie, schweife nicht ab und verallgemeinere nicht",
      "3. Ich schreibe objektiv und vermeide Umgangssprache (z.B. total, ein bisschen)",
    ],
  },
  44: {
    id: 44,
    slideText:
      "Kriterium „wissenschaftlicher Stil“:Wie sollte ein Abstract geschrieben sein?",
    slideType: "Kriterium_Wissenschaftlich_4",
    criteriaIntroUnits: [
      "1. Ich schreibe für meine Leser verständlich",
      "2. Ich beziehe mich nur auf die Studie, schweife nicht ab und verallgemeinere nicht",
      "3. Ich schreibe objektiv und vermeide Umgangssprache (z.B. total, ein bisschen)",
      "4. Ich drücke mich mit möglichst wenig Wörtern eindeutig aus",
    ],
  },
  45: {
    id: 45,
    slideText: "",
    slideType: "Kriterium_Wissenschaftlich_Richtig",
    criteriaIntroUnits: [
      "1. Ich schreibe für meine Leser verständlich",
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
    slideType: "Kriterium_Wissenschaftlich_Falsch",
    criteriaIntroUnits: [
      "1. Ich schreibe für meine Leser verständlich",
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
    slideType: "Kriterium_Text_Organisation",
  },
  48: {
    id: 48,
    slideText:
      "Kriterium „Organisation“:Wie schreibe ich einen sinnvoll aufgebauten Text?",
    slideType: "Kriterium_Text_Organisation_1",
    criteriaIntroUnits: [
      "1. Ich nutze zeitliche Ausdrücke (z.B. anschließend), um Verbindungen zwischen den Sätzen zu schaffen",
      "2. Ich nutze begründende Ausdrücke (z.B. folglich, deshalb, abschließend), um Verbindungen zwischen den Sätzen zu schaffen",
      "3. Ich nutze weitere Ausdrücke, um Verbindungen zwischen den Sätzen zu schaffen (z.B. damit, um…zu)",
    ],
  },
  49: {
    id: 49,
    slideText: "",
    slideType: "Kriterium_Text_Organisation_Richtig",
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
    slideType: "Kriterium_Text_Organisation_Falsch",
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
    slideType: "Kriterium_Aufbau",
  },
  52: {
    id: 52,
    slideText:
      "Den Aufbau hast du eigentlich schon kennengelernt. In unseren Beispielen haben sich nach und nach zwei vollständige Abstracts aufgebaut.",
    slideType: "Kriterium_Aufbau_1",
    header: "Kriterium „Aufbau“: Wie sollte ein Abstract aufgebaut sein?",
  },
  53: {
    id: 53,
    slideText:
      "So sollte der Aufbau eines Abstracts aussehen. Diese Reihenfolge ist logisch nachvollziehbar und die einzelnen Punkt bauen aufeinander auf. Andere Reihenfolgen (z.B. die Ergebnisse vor der Methode oder das Fazit vor den Ergebnissen) würden verwirrend sein).",
    slideType: "Kriterium_Aufbau_2",
    header: "",
  },
  54: {
    id: 54,
    slideText: "Lesen einer wissenschaftlichen Studie",
    slideType: "Lesen_Studie",
  },
  55: {
    id: 55,
    header: "Lesen einer wissenschaftlichen Studie",
    slideText:
      "Deine nächste Aufgabe ist es gleich, eine echte wissenschaftliche Studie zu einer Forschungsarbeit zu lesen. \n\n\nDiese trägt den Titel „Steigert Kaugummikauen das kognitive Leistungsvermögen?“ und wurde 2012 in der „Zeitschrift für Pädagogische Psychologie“ veröffentlicht.\n\n\nLies Dir die Studie bitte konzentriert durch. Bitte mache Dir keine Notizen. Du hast XX Minuten Zeit zum Lesen. Anschließend wirst Du eine Aufgabe zu dem Text bearbeiten. Deine verbleibende Lesezeit wird Dir auf dem Bildschirm angezeigt. Bitte nutze die ganze Zeit zum Lesen der Studie.",
    slideType: "Lesen_Studie_1",
  },
  56: {
    id: 56,
    slideText:
      "Lies Dir die Studie bitte konzentriert durch. Bitte mache Dir keine Notizen. Du hast XX Minuten Zeit zum Lesen. Anschließend wirst Du eine Aufgabe zu dem Text bearbeiten. Deine verbleibende Lesezeit wird Dir auf dem Bildschirm angezeigt. Bitte nutze die ganze Zeit zum Lesen der Studie.",
    slideType: "Lesen_Studie_2",
  },
  57: {
    id: 57,
    slideText:
      "Was denkst Du, wie gut hast du die wissenschaftliche Studie verstanden?",
    slideType: "Lesen_Studie_Likert_1",
  },
  58: {
    id: 58,
    slideText:
      "Wie leicht oder schwer fiel es Dir gerade, Dein Verständnis zur wissenschaftlichen Studie einzuschätzen?",
    slideType: "Lesen_Studie_Likert_2",
  },
  59: {
    id: 59,
    slideText:
      "Beim Einschätzen meines Verständnisses der Studie war meine geistige Denkanstrengung…",
    slideType: "Lesen_Studie_Likert_3",
  },
  60: {
    id: 60,
    slideText: "Ein Abstract schreiben",
    slideType: "Abstract_Schreiben_Intro",
  },
  61: {
    id: 61,
    slideText:
      "Schreibe ein Abstract zu der wissenschaftlichen Studie. \n\nBitte denke dazu daran, was Du vor dem Lesen zu den Kriterien eines Abstracts erfahren hast und versuche, dies in Dein Abstract einzubringen.\n\nDer Studientext wird Dir parallel während des Schreibens zur Verfügung stehen.\n\nKlicke den Weiter-Button und Du gelangst zum Schreibfeld.\n\nDu hast für das Schreiben XX Minuten Zeit.",
    slideType: "Abstract_Schreiben_Intro_1",
    header: "Ein Abstract schreiben",
  },
  62: {
    id: 62,
    slideText: "",
    slideType: "Abstract_Schreiben_Timer",
  },
  63: {
    id: 63,
    slideText:
      "Wie leicht oder schwer fiel es Dir, dein Abstract zu schreiben?",
    slideType: "Abstract_Schreiben_Likert_1",
  },
  64: {
    id: 64,
    slideText:
      "Beim Schreiben meines Abstracts war meine geistige Denk-Anstrengung insgesamt …",
    slideType: "Abstract_Schreiben_Likert_2",
  },
  65: {
    id: 65,
    slideText: "Selbstbewertung des Abstracts",
    slideType: "Selbstbewertung_Abstract",
  },
  66: {
    id: 66,
    slideText:
      "Nun ist es Deine Aufgabe, Deinen eigenen Text nach den Kriterien, die Du zu Beginn kennengelernt hast, zu bewerten.\n\nDazu erhältst Du gleich ein Bewertungsraster, das Dir dabei helfen soll, Deinen Text genau einzuschätzen.\n\nSchaue Dir jedes Kriterium und die dazugehörigen Spalten genau an und versuche, Dein Abstract genau und ehrlich anhand der einzelnen Kriterien einzuschätzen.\n\nTrage dann in das dafür vorgesehene Feld die Anzahl der Punkte ein, die Du Dir für das Kriterium geben würdest.\n\nWenn Du bereit bist zu beginnen, klicke den „Weiter“-Button.",
    slideType: "Selbstbewertung_Abstract_1",
    header: "Selbstbewertung des Abstracts",
  },
  67: {
    id: 67,
    slideText:
      "Bitte bewerte hier dein Abstract nach dem Kriterium „Inhalt“ und trage im Eingabefeld deine Bewertung ein.",
    slideType: "Selbstbewertung_Abstract_Inhalt",
  },
  68: {
    id: 68,
    slideText:
      "Wie leicht oder schwer fiel es dir, dein Abstract zum Kriterium “Inhalt” zu bewerten?",
    slideType: "Selbstbewertung_Abstract_Inhalt_Likert_1",
  },
  69: {
    id: 69,
    slideText:
      "Beim Bewerten meines Abstracts zum Kriterium “Inhalt” war meine geistige Denk-Anstrengung…",
    slideType: "Selbstbewertung_Abstract_Inhalt_Likert_2",
  },
  70: {
    id: 70,
    slideText:
      "Bitte bewerte hier dein Abstract nach dem Kriterium „Formales“ und trage im Eingabefeld deine Bewertung ein.",
    slideType: "Selbstbewertung_Abstract_Formales",
  },
  71: {
    id: 71,
    slideText:
      "Wie leicht oder schwer fiel es dir, dein Abstract zum Kriterium “Formales” zu bewerten?",
    slideType: "Selbstbewertung_Abstract_Formales_Likert_1",
  },
  72: {
    id: 72,
    slideText:
      "Beim Bewerten meines Abstracts zum Kriterium “Formales” war meine geistige Denk-Anstrengung…",
    slideType: "Selbstbewertung_Abstract_Formales_Likert_2",
  },
  73: {
    id: 73,
    slideText:
      "Bitte bewerte hier dein Abstract nach dem Kriterium „Orthographie und Grammatik“ und trage im Eingabefeld deine Bewertung ein.",
    slideType: "Selbstbewertung_Abstract_Orthographie",
  },
  74: {
    id: 74,
    slideText:
      "Wie leicht oder schwer fiel es dir, dein Abstract zum Kriterium “Orthographie und Grammatik” zu bewerten?",
    slideType: "Selbstbewertung_Abstract_Orthographie_Likert_1",
  },
  75: {
    id: 75,
    slideText:
      "Beim Bewerten meines Abstracts zum Kriterium “Orthographie und Grammatik” war meine geistige Denk-Anstrengung…",
    slideType: "Selbstbewertung_Abstract_Orthographie_Likert_2",
  },
  76: {
    id: 76,
    slideText:
      "Bitte bewerte hier dein Abstract nach dem Kriterium „wissenschaftlicher Stil“ und trage im Eingabefeld deine Bewertung ein.",
    slideType: "Selbstbewertung_Abstract_Wissenschaftlich",
  },
  77: {
    id: 77,
    slideText:
      "Wie leicht oder schwer fiel es dir, dein Abstract zum Kriterium “wissenschaftlicher Stil” zu bewerten?",
    slideType: "Selbstbewertung_Abstract_Wissenschaftlich_Likert_1",
  },
  78: {
    id: 78,
    slideText:
      "Beim Bewerten meines Abstracts zum Kriterium “wissenschaftlicher Stil” war meine geistige Denk-Anstrengung…",
    slideType: "Selbstbewertung_Abstract_Wissenschaftlich_Likert_2",
  },
  79: {
    id: 79,
    slideText:
      "Bitte bewerte hier dein Abstract nach dem Kriterium „Organisation des Textes“ und trage im Eingabefeld deine Bewertung ein.",
    slideType: "Selbstbewertung_Abstract_Text_Organisation",
  },
  80: {
    id: 80,
    slideText:
      "Wie leicht oder schwer fiel es dir, dein Abstracts zum Kriterium “Organisation des Textes”zu bewerten?",
    slideType: "Selbstbewertung_Abstract_Text_Organisation_Likert_1",
  },
  81: {
    id: 81,
    slideText:
      "Beim Bewerten meines Abstracts zum Kriterium “Organisation des Textes” war meine geistige Denk-Anstrengung…",
    slideType: "Selbstbewertung_Abstract_Text_Organisation_Likert_2",
  },
  82: {
    id: 82,
    slideText:
      "Bitte bewerte hier dein Abstract nach dem Kriterium „Aufbau“ und trage im Eingabefeld deine Bewertung ein.",
    slideType: "Selbstbewertung_Abstract_Aufbau",
  },
  83: {
    id: 83,
    slideText:
      "Wie leicht oder schwer fiel es dir, dein Abstracts zum Kriterium “Aufbau”zu bewerten?",
    slideType: "Selbstbewertung_Abstract_Aufbau_Likert_1",
  },
  84: {
    id: 84,
    slideText:
      "Beim Bewerten meines Abstracts zum Kriterium “Aufbau” war meine geistige Denk-Anstrengung…",
    slideType: "Selbstbewertung_Abstract_Aufbau_Likert_2",
  },
  85: {
    id: 85,
    slideText:
      "Nun ist es deine Aufgabe, deinen eigenen Text nach den Kriterien, die du zu Beginn kennengelernt hast, zu bewerten.\n\nDazu erhältst du gleich ein Bewertungsraster, das dir dabei helfen soll, deinen Text genau einzuschätzen.\n\nSchaue dir jedes Kriterium und die dazugehörigen Spalten genau an und versuche, dein Abstract genau und ehrlich anhand der einzelnen Kriterien einzuschätzen.\n\nTrage dann in das dafür vorgesehene Feld die Anzahl der Punkte ein, die du dir für das Kriterium geben würdest.\n\nWenn du bereit bist zu beginnen, klicke den „Weiter“-Button.",
    slideType: "Selbstbewertung_Abstract_Gruppe2",
    header: "Selbstbewertung des Abstracts",
  },
  86: {
    id: 86,
    slideText:
      "Bitte bewerte hier dein Abstract nach dem Kriterium „Inhalt“ und trage im Eingabefeld deine Bewertung ein.",
    slideType: "Selbstbewertung_Abstract_Gruppe2_Inhalt",
  },
  87: {
    id: 87,
    slideText:
      "Wie leicht oder schwer fiel es dir, dein Abstract zum Kriterium “Inhalt” zu bewerten?",
    slideType: "Selbstbewertung_Abstract_Gruppe2_Inhalt_Likert_1",
  },
  88: {
    id: 88,
    slideText:
      "Beim Bewerten meines Abstracts zum Kriterium “Inhalt” war meine geistige Denk-Anstrengung…",
    slideType: "Selbstbewertung_Abstract_Gruppe2_Inhalt_Likert_2",
  },
  89: {
    id: 89,
    slideText:
      "Bitte bewerte hier dein Abstract nach dem Kriterium „Formales“ und trage im Eingabefeld deine Bewertung ein.",
    slideType: "Selbstbewertung_Abstract_Gruppe2_Formales",
  },
  90: {
    id: 90,
    slideText:
      "Wie leicht oder schwer fiel es dir, dein Abstract zum Kriterium “Formales” zu bewerten?",
    slideType: "Selbstbewertung_Abstract_Gruppe2_Formales_Likert_1",
  },
  91: {
    id: 91,
    slideText:
      "Beim Bewerten meines Abstracts zum Kriterium “Formales” war meine geistige Denk-Anstrengung…",
    slideType: "Selbstbewertung_Abstract_Gruppe2_Formales_Likert_2",
  },
  92: {
    id: 92,
    slideText:
      "Bitte bewerte hier dein Abstract nach dem Kriterium „Orthographie und Grammatik“ und trage im Eingabefeld deine Bewertung ein.",
    slideType: "Selbstbewertung_Abstract_Gruppe2_Orthographie",
  },
  93: {
    id: 93,
    slideText:
      "Wie leicht oder schwer fiel es dir, dein Abstract zum Kriterium “Orthographie und Grammatik” zu bewerten?",
    slideType: "Selbstbewertung_Abstract_Gruppe2_Orthographie_Likert_1",
  },
  94: {
    id: 94,
    slideText:
      "Beim Bewerten meines Abstracts zum Kriterium “Orthographie und Grammatik” war meine geistige Denk-Anstrengung…",
    slideType: "Selbstbewertung_Abstract_Gruppe2_Orthographie_Likert_2",
  },
  95: {
    id: 95,
    slideText:
      "Bitte bewerte hier dein Abstract nach dem Kriterium „wissenschaftlicher Stil“ und trage im Eingabefeld deine Bewertung ein.",
    slideType: "Selbstbewertung_Abstract_Gruppe2_Wissenschaftlich",
  },
  96: {
    id: 96,
    slideText:
      "Wie leicht oder schwer fiel es dir, dein Abstract zum Kriterium “wissenschaftlicher Stil” zu bewerten?",
    slideType: "Selbstbewertung_Abstract_Gruppe2_Wissenschaftlich_Likert_1",
  },
  97: {
    id: 97,
    slideText:
      "Beim Bewerten meines Abstracts zum Kriterium “wissenschaftlicher Stil” war meine geistige Denk-Anstrengung…",
    slideType: "Selbstbewertung_Abstract_Gruppe2_Wissenschaftlich_Likert_2",
  },
  98: {
    id: 98,
    slideText:
      "Bitte bewerte hier dein Abstract nach dem Kriterium „Organisation des Textes“ und trage im Eingabefeld deine Bewertung ein.",
    slideType: "Selbstbewertung_Abstract_Gruppe2_Text_Organisation",
  },
  99: {
    id: 99,
    slideText:
      "Wie leicht oder schwer fiel es dir, dein Abstracts zum Kriterium “Organisation des Textes”zu bewerten?",
    slideType: "Selbstbewertung_Abstract_Gruppe2_Text_Organisation_Likert_1",
  },
  100: {
    id: 100,
    slideText:
      "Beim Bewerten meines Abstracts zum Kriterium “Organisation des Textes” war meine geistige Denk-Anstrengung…",
    slideType: "Selbstbewertung_Abstract_Gruppe2_Text_Organisation_Likert_2",
  },
  101: {
    id: 101,
    slideText:
      "Bitte bewerte hier dein Abstract nach dem Kriterium „Aufbau“ und trage im Eingabefeld deine Bewertung ein.",
    slideType: "Selbstbewertung_Abstract_Gruppe2_Aufbau",
  },
  102: {
    id: 102,
    slideText:
      "Wie leicht oder schwer fiel es dir, dein Abstracts zum Kriterium “Aufbau”zu bewerten?",
    slideType: "Selbstbewertung_Abstract_Gruppe2_Aufbau_Likert_1",
  },
  103: {
    id: 103,
    slideText:
      "Beim Bewerten meines Abstracts zum Kriterium “Aufbau” war meine geistige Denk-Anstrengung…",
    slideType: "Selbstbewertung_Abstract_Gruppe2_Aufbau_Likert_2",
  },
  104: {
    id: 104,
    slideText:
      "Du hast nun die Möglichkeit, zu einem der Kriterien noch einmal einige Beispiele zu sehen und danach Dein Abstract zu überarbeiten. Wähle hierzu auf der nächsten Seite das Kriterium aus, bei dem Du Dein Abstract noch am meisten verbessern kannst.\n\n\n\n\nWenn Du bereit bist zu beginnen, klicke den „Weiter“-Button.",
    slideType: "Kriteriurm_Verbesserung_Intro",
    header: "Überarbeitung",
  },
  105: {
    id: 105,
    slideText:
      "Bitte klicke auf das Kriterium, bei dem Du Dein Abstract noch am meisten verbessern kannst:",
    slideType: "Kriteriurm_Verbesserung_Auswahl",
  },
  106: {
    id: 106,
    header:
      "Versuche nachzuvollziehen, warum das Beispiel das Kriterium „Inhalt“ voll erfüllt.",
    slideText:
      "Versuche nachzuvollziehen, warum das Beispiel das Kriterium „Inhalt“ voll erfüllt.",
    slideType: "Kriteriurm_Verbesserung_Inhalt",
    criteriaIntroUnits: [
      "1. Die Beschreibung des untersuchten Problems/der Frage",
      "2. Die Versuchsobjekte oder Datengrundlage (Merkmale)",
      "3. Die Methode, mit der geforscht wurde",
      "4. Die zentralen Ergebnisse",
      "5. Ein Fazit und die wichtigsten Schlüsse, die gezogen werden können",
    ],
    criteriaExamples: [
      "Die Studie untersucht, wie viele Kinder und Jugendliche gewalthaltige Computerspiele spielen und ob ein Zusammenhang zwischen dem Spielen und Aggressionen besteht.",
      "An einem Gymnasium wurden 387 Kinder und Jugendliche zu der Häufigkeit und den Motiven ihrer Nutzung von gewalthaltigen Computerspielen mittels zweier Fragebogen befragt.",
      "Die gesammelten Ergebnisse zeigten ein sehr hohes Nutzungsverhalten bei den männlichen Teilnehmern, gleichzeitig jedoch ebenso ein erhöhtes Nutzungsverhalten bei den weiblichen TeilnehmerInnen. Spielfreude, Langeweile und Stressabbau konnten durch die Fragebögen als Motive für die Nutzung festgestellt werden.",
      " Das Wissen über das hohe Mediennutzungsverhalten der TeilnehmerInnen stellt die Grundlage für eine weiterreichende Forschung dar, durch welche Methoden zur Vermittlung von Medienkompetenz ermittelt werden können",
    ],
  },
  107: {
    id: 107,
    slideText: "",
    slideType: "Kriteriurm_Verbesserung_Inhalt_1",
    header:
      "Versuche nachzuvollziehen, warum das Beispiel das Kriterium „Inhalt“ überhaupt nicht erfüllt.",
    criteriaIntroUnits: [
      "1. Die Beschreibung des untersuchten Problems/der Frage: Hier wird die Forschungsfrage nicht genannt! Es wird nur grob das Thema umrissen, das ist nicht genau genug.",
      "2. Die Versuchsobjekte oder Datengrundlage (Merkmale): die Anzahl der TeilnehmerInnen ist falsch. Außerdem ist diese Angabe auch zu ungenau, es nahmen sowohl Kinder als auch Jugendliche teil.",
      "3. Die Methode, mit der geforscht wurde: Die Methode der Interviews wurde nicht verwendet. Die Formulierung „so Fragen beantwortet“ ist zu ungenau.",
      "4. Die zentralen Ergebnisse: Die Ergebnisse wurden falsch wiedergegeben (männlcihe wie weibliche TeilnehmerInnen zeigten erhöhtes Nutzungsverhalten).",
      "5. Ein Fazit und die wichtigsten Schlüsse, die gezogen werden können: falsches Fazit. Weitere Tests, warum die männlichen Teilnehmer weniger spielen, sind nicht das Ziel von weiteren Studien.",
    ],
  },
  108: {
    id: 108,
    slideText: "Wie leicht oder schwer fiel es Dir, das Beispiel zu verstehen?",
    slideType: "Kriteriurm_Verbesserung_Inhalt_Likert_1",
  },
  109: {
    id: 109,
    slideText:
      "Beim Bearbeiten des Beispiels war meine geistige Denk-Anstrengung…",
    slideType: "Kriteriurm_Verbesserung_Inhalt_Likert_2",
  },
  110: {
    id: 110,
    header:
      "Versuche nachzuvollziehen, warum das Beispiel das Kriterium „Formales“ voll erfüllt.",
    slideText:
      "Versuche nachzuvollziehen, warum das Beispiel das Kriterium „Formales“ voll erfüllt.",
    slideType: "Kriteriurm_Verbesserung_Formales",
    criteriaIntroUnits: [
      "1. Maximale Wortanzahl: 250 Wörter: dieses Abstract hat 107 Wörter",
      "2. Schreiben in ganzen Sätzen: hier findest du keine Stichpunkte o.Ä.",
      "3. Keine Verwendung der Ich-Form: hier findest du keine Verwendung der Ich-Form, sondern nur die der 3. Person",
    ],
    criteriaExamples: [
      "Die Studie untersucht, wie viele Kinder und Jugendliche gewalthaltige Computerspiele spielen und ob ein Zusammenhang zwischen dem Spielen und Aggressionen besteht. \n\nAn einem Gymnasium wurden 387 Kinder und Jugendliche zu der Häufigkeit und den Motiven ihrer Nutzung von gewalthaltigen Computerspielen mittels zweier Fragebogen befragt. \n\nDie gesammelten Ergebnisse zeigten ein sehr hohes Nutzungsverhalten bei den männlichen Teilnehmern, gleichzeitig jedoch ebenso ein erhöhtes Nutzungsverhalten bei den weiblichen TeilnehmerInnen. Spielfreude, Langeweile und Stressabbau konnten durch die Fragebögen als Motive für die Nutzung festgestellt werden.\n\nDas Wissen über das hohe Mediennutzungsverhalten der TeilnehmerInnen stellt die Grundlage für eine weiterreichende Forschung dar, durch welche Methoden zur Vermittlung von Medienkompetenz ermittelt werden können.",
    ],
  },
  111: {
    id: 111,
    header:
      "Versuche nachzuvollziehen, warum das Beispiel das Kriterium „Formales“ überhaupt nicht erfüllt.",
    slideText:
      "Versuche nachzuvollziehen, warum das Beispiel das Kriterium „Formales“ überhaupt nicht erfüllt.",
    slideType: "Kriteriurm_Verbesserung_Formales_1",
    criteriaIntroUnits: [
      "1. Maximale Wortanzahl: 250 Wörter: dieses Abstract hat 266 Wörter und ist damit viel zu lang",
      "2. Schreiben in ganzen Sätzen: in diesem Abstract findest du Stichpunkte",
      "3. Keine Verwendung der Ich-Form: im gesamten Abstract wird die 1. Person genutzt",
    ],
  },
  112: {
    id: 112,
    slideText: "Wie leicht oder schwer fiel es Dir, das Beispiel zu verstehen?",
    slideType: "Kriteriurm_Verbesserung_Formales_Likert_1",
  },
  113: {
    id: 113,
    slideText:
      "Beim Bearbeiten des Beispiels war meine geistige Denk-Anstrengung…",
    slideType: "Kriteriurm_Verbesserung_Formales_Likert_2",
  },
  114: {
    id: 114,
    slideText:
      "Versuche nachzuvollziehen, warum das Beispiel das Kriterium „Orthographie und Grammatik“ voll erfüllt.",
    slideType: "Kriteriurm_Verbesserung_Orthographie",
    header:
      "Versuche nachzuvollziehen, warum das Beispiel das Kriterium „Orthographie und Grammatik“ voll erfüllt.",
    criteriaIntroUnits: [
      "1. Orthographisch und grammatisch korrekt schreiben: In diesem gesamten Text sind keine Rechtschreib- oder Grammatikfehler zu finden!",
      "2. Für Methoden und Ergebnisse: Präteritum (z.B. ergab, sagte). Für Fazit und Schlussfolgerungen: Präsens (z.B. ergibt, sagt): In diesem Text sind die Verbformen dazu farblich markiert: Präteritum (grün), Präsens (blau)",
      "3. Nutzung eher von Aktiv- statt Passiv-Formulierungen (sagt vs. wird gesagt): In diesem Text wird nur eine Passivformulierung genutzt (rot markiert)!",
    ],
  },
  115: {
    id: 115,
    slideText:
      "Versuche nachzuvollziehen, warum das Beispiel das Kriterium „Orthographie und Grammatik“ überhaupt nicht erfüllt.",
    slideType: "Kriteriurm_Verbesserung_Orthographie_1",
    header:
      "Versuche nachzuvollziehen, warum das Beispiel das Kriterium „Orthographie und Grammatik“ überhaupt nicht erfüllt.",
    criteriaIntroUnits: [],
  },
  116: {
    id: 116,
    slideText: "Wie leicht oder schwer fiel es Dir, das Beispiel zu verstehen?",
    slideType: "Kriteriurm_Verbesserung_Orthographie_Likert_1",
  },
  117: {
    id: 117,
    slideText:
      "Beim Bearbeiten des Beispiels war meine geistige Denk-Anstrengung…",
    slideType: "Kriteriurm_Verbesserung_Orthographie_Likert_2",
  },
  118: {
    id: 118,
    slideText: "",
    slideType: "Kriteriurm_Verbesserung_Wissenschaftlich",
    header:
      "Versuche nachzuvollziehen, warum das Beispiel das Kriterium „Wissenschaftlicher Stil“ voll erfüllt.",
  },
  119: {
    id: 119,
    slideText: "",
    slideType: "Kriteriurm_Verbesserung_Wissenschaftlich_1",
    header:
      "Versuche nachzuvollziehen, warum das Beispiel das Kriterium „Wissenschaftlicher Stil“ überhaupt nicht erfüllt.",
  },
  120: {
    id: 120,
    slideText: "Wie leicht oder schwer fiel es Dir, das Beispiel zu verstehen?",
    slideType: "Kriteriurm_Verbesserung_Wissenschaftlich_Likert_1",
  },
  121: {
    id: 121,
    slideText:
      "Beim Bearbeiten des Beispiels war meine geistige Denk-Anstrengung…",
    slideType: "Kriteriurm_Verbesserung_Wissenschaftlich_Likert_2",
  },
  122: {
    id: 122,
    slideText: "",
    slideType: "Kriteriurm_Verbesserung_Text_Organisation",
    header:
      "Versuche nachzuvollziehen, warum das Beispiel das Kriterium „Organisation des Textes“ voll erfüllt.",
  },
  123: {
    id: 123,
    slideText: "",
    slideType: "Kriteriurm_Verbesserung_Text_Organisation_1",
    header:
      "Versuche nachzuvollziehen, warum das Beispiel das Kriterium „Organisation des Textes“ überhaupt nicht erfüllt.",
  },
  124: {
    id: 124,
    slideText: "Wie leicht oder schwer fiel es Dir, das Beispiel zu verstehen?",
    slideType: "Kriteriurm_Verbesserung_Text_Organisation_Likert_1",
  },
  125: {
    id: 125,
    slideText:
      "Beim Bearbeiten des Beispiels war meine geistige Denk-Anstrengung…",
    slideType: "Kriteriurm_Verbesserung_Text_Organisation_Likert_2",
  },
  126: {
    id: 126,
    slideText: "",
    slideType: "Kriteriurm_Verbesserung_Aufbau",
    header:
      "Versuche nachzuvollziehen, warum das Beispiel das Kriterium „Aufbau“voll erfüllt.",
  },
  127: {
    id: 127,
    slideText: "",
    slideType: "Kriteriurm_Verbesserung_Aufbau_1",
    header:
      "Versuche nachzuvollziehen, warum das Beispiel das Kriterium „Aufbau“ überhaupt nicht erfüllt.",
  },
  128: {
    id: 128,
    slideText: "Wie leicht oder schwer fiel es Dir, das Beispiel zu verstehen?",
    slideType: "Kriteriurm_Verbesserung_Aufbau_Likert_1",
  },
  129: {
    id: 129,
    slideText:
      "Beim Bearbeiten des Beispiels war meine geistige Denk-Anstrengung…",
    slideType: "Kriteriurm_Verbesserung_Aufbau_Likert_2",
  },
  130: {
    id: 130,
    slideText:
      "Hier siehst Du Dein eben verfasstes Abstract und die ausgewählten Beispiele. Versuche nun, Dein Abstract auf Basis dessen, was du aus dem Beispiel gelernt hast, nun noch zu verbessern. Du hast dafür XX Minuten Zeit.",
    slideType: "Timer_Verbesserung",
  },
  131: {
    id: 131,
    slideText:
      "Wie leicht oder schwer fiel es Dir, dein Abstract zu überarbeiten?",
    slideType: "Timer_Verbesserung_Likert",
  },
  132: {
    id: 132,
    slideText:
      "Beim Überarbeiten meines Abstracts war meine geistige Denk-Anstrengung…",
    slideType: "Timer_Verbesserung_Likert_1",
  },
  133: {
    id: 133,
    slideText:
      "Bitte bewerte nun, nach Deiner Bearbeitung, noch einmal Dein Abstract. Gehe dabei genau wie bei der 1. Selbstbewertung vor, beziehe Dich aber nun auf Deine überarbeitete Version.",
    slideType: "Selbstbewertung_Abstract_Verbessert_Intro",
    header: "2. Selbstbewertung des Abstracts",
  },
  134: {
    id: 134,
    slideText:
      "Bitte bewerte hier dein Abstract nach dem Kriterium „Inhalt“ und trage im Eingabefeld deine Bewertung ein.",
    slideType: "Selbstbewertung_Abstract_Verbessert_Inhalt",
  },
  135: {
    id: 135,
    slideText:
      "Wie leicht oder schwer fiel es dir, dein Abstract zum Kriterium “Inhalt” zu bewerten?",
    slideType: "Selbstbewertung_Abstract_Verbessert_Inhalt_Likert",
  },
  136: {
    id: 136,
    slideText:
      "Beim Bewerten meines Abstracts zum Kriterium “Inhalt” war meine geistige Denk-Anstrengung…",
    slideType: "Selbstbewertung_Abstract_Verbessert_Inhalt_Likert_1",
  },
  137: {
    id: 137,
    slideText:
      "Bitte bewerte hier dein Abstract nach dem Kriterium „Formales“ und trage im Eingabefeld deine Bewertung ein.",
    slideType: "Selbstbewertung_Abstract_Verbessert_Formales",
  },
  138: {
    id: 138,
    slideText:
      "Wie leicht oder schwer fiel es dir, dein Abstract zum Kriterium “Formales” zu bewerten?",
    slideType: "Selbstbewertung_Abstract_Verbessert_Formales_Likert",
  },
  139: {
    id: 139,
    slideText:
      "Beim Bewerten meines Abstracts zum Kriterium “Formales” war meine geistige Denk-Anstrengung…",
    slideType: "Selbstbewertung_Abstract_Verbessert_Formales_Likert_1",
  },
  140: {
    id: 140,
    slideText:
      "Bitte bewerte hier dein Abstract nach dem Kriterium „Orthographie und Grammatik“ und trage im Eingabefeld deine Bewertung ein.",
    slideType: "Selbstbewertung_Abstract_Ortographie",
  },
  141: {
    id: 141,
    slideText:
      "Wie leicht oder schwer fiel es dir, dein Abstract zum Kriterium “Orthographie und Grammatik” zu bewerten?",
    slideType: "Selbstbewertung_Abstract_Ortographie_Likert",
  },
  142: {
    id: 142,
    slideText:
      "Beim Bewerten meines Abstracts zum Kriterium “Orthographie und Grammatik” war meine geistige Denk-Anstrengung…",
    slideType: "Selbstbewertung_Abstract_Ortographie_Likert_1",
  },
  143: {
    id: 143,
    slideText:
      "Bitte bewerte hier dein Abstract nach dem Kriterium „wissenschaftlicher Stil“ und trage im Eingabefeld deine Bewertung ein.",
    slideType: "Selbstbewertung_Abstract_Verbessert_Wissenschaftlich",
  },
  144: {
    id: 144,
    slideText:
      "Wie leicht oder schwer fiel es dir, dein Abstract zum Kriterium “wissenschaftlicher Stil” zu bewerten?",
    slideType: "Selbstbewertung_Abstract_Verbessert_Wissenschaftlich_Likert",
  },
  145: {
    id: 145,
    slideText:
      "Beim Bewerten meines Abstracts zum Kriterium “wissenschaftlicher Stil” war meine geistige Denk-Anstrengung…",
    slideType: "Selbstbewertung_Abstract_Verbessert_Wissenschaftlich_Likert_1",
  },
  146: {
    id: 146,
    slideText:
      "Bitte bewerte hier dein Abstract nach dem Kriterium „Organisation des Textes“ und trage im Eingabefeld deine Bewertung ein.",
    slideType: "Selbstbewertung_Abstract_Verbessert_Text_Organisation",
  },
  147: {
    id: 147,
    slideText:
      "Wie leicht oder schwer fiel es dir, dein Abstracts zum Kriterium “Organisation des Textes”zu bewerten?",
    slideType: "Selbstbewertung_Abstract_Verbessert_Text_Organisation_Likert",
  },
  148: {
    id: 148,
    slideText:
      "Beim Bewerten meines Abstracts zum Kriterium “Organisation des Textes” war meine geistige Denk-Anstrengung…",
    slideType: "Selbstbewertung_Abstract_Verbessert_Text_Organisation_Likert_1",
  },
  149: {
    id: 149,
    slideText:
      "Bitte bewerte hier dein Abstract nach dem Kriterium „Aufbau“ und trage im Eingabefeld deine Bewertung ein.",
    slideType: "Selbstbewertung_Abstract_Verbessert_Aufbau",
  },
  150: {
    id: 150,
    slideText:
      "Wie leicht oder schwer fiel es dir, dein Abstracts zum Kriterium “Aufbau”zu bewerten?",
    slideType: "Selbstbewertung_Abstract_Verbessert_Aufbau_Likert",
  },
  151: {
    id: 151,
    slideText:
      "Beim Bewerten meines Abstracts zum Kriterium “Aufbau” war meine geistige Denk-Anstrengung…",
    slideType: "Selbstbewertung_Abstract_Verbessert_Aufbau_Likert_1",
  },
  152: {
    id: 152,
    slideText:
      "Nun ist es Deine Aufgabe, Deinen eigenen Text nach den Kriterien, die Du zu Beginn kennengelernt hast, zu bewerten. \nDazu erhältst Du gleich ein Bewertungsraster, das Dir dabei helfen soll, Deinen Text genau einzuschätzen.\nSchaue Dir jedes Kriterium genau an und versuche, Dein Abstract genau und ehrlich anhand der einzelnen Kriterien einzuschätzen. \nTrage dann in das dafür vorgesehene Feld die Anzahl der Punkte ein, die Du Dir für das Kriterium geben würdest.\n\nWenn Du bereit bist zu beginnen, klicke den „Weiter“-Button.",
    slideType: "Selbstbewertung_Abstract_Verbessert_Gruppe2_Intro",
    header: "Selbstbewertung des Abstracts",
  },
  153: {
    id: 153,
    slideText:
      "Bitte bewerte hier dein Abstract nach dem Kriterium „Inhalt“ und trage im Eingabefeld deine Bewertung ein.",
    slideType: "Selbstbewertung_Abstract_Verbessert_Gruppe2_Inhalt",
  },
  154: {
    id: 154,
    slideText:
      "Wie leicht oder schwer fiel es dir, dein Abstract zum Kriterium “Inhalt” zu bewerten?",
    slideType: "Selbstbewertung_Abstract_Verbessert_Gruppe2_Inhalt_Likert",
  },
  155: {
    id: 155,
    slideText:
      "Beim Bewerten meines Abstracts zum Kriterium “Inhalt” war meine geistige Denk-Anstrengung…",
    slideType: "Selbstbewertung_Abstract_Verbessert_Gruppe2_Inhalt_Likert_1",
  },
  156: {
    id: 156,
    slideText:
      "Bitte bewerte hier dein Abstract nach dem Kriterium „Formales“ und trage im Eingabefeld deine Bewertung ein.",
    slideType: "Selbstbewertung_Abstract_Verbessert_Gruppe2_Formales",
  },
  157: {
    id: 157,
    slideText:
      "Wie leicht oder schwer fiel es dir, dein Abstract zum Kriterium “Formales” zu bewerten?",
    slideType: "Selbstbewertung_Abstract_Verbessert_Gruppe2_Formales_Likert",
  },
  158: {
    id: 158,
    slideText:
      "Beim Bewerten meines Abstracts zum Kriterium “Formales” war meine geistige Denk-Anstrengung…",
    slideType: "Selbstbewertung_Abstract_Verbessert_Gruppe2_Formales_Likert_1",
  },
  159: {
    id: 159,
    slideText:
      "Bitte bewerte hier dein Abstract nach dem Kriterium „Orthographie und Grammatik“ und trage im Eingabefeld deine Bewertung ein.",
    slideType: "Selbstbewertung_Abstract_Verbessert_Gruppe2_Ortographie",
  },
  160: {
    id: 160,
    slideText:
      "Wie leicht oder schwer fiel es dir, dein Abstract zum Kriterium “Orthographie und Grammatik” zu bewerten?",
    slideType: "Selbstbewertung_Abstract_Verbessert_Gruppe2_Ortographie_Likert",
  },
  161: {
    id: 161,
    slideText:
      "Beim Bewerten meines Abstracts zum Kriterium “Orthographie und Grammatik” war meine geistige Denk-Anstrengung…",
    slideType:
      "Selbstbewertung_Abstract_Verbessert_Gruppe2_Ortographie_Likert_1",
  },
  162: {
    id: 162,
    slideText:
      "Bitte bewerte hier dein Abstract nach dem Kriterium „wissenschaftlicher Stil“ und trage im Eingabefeld deine Bewertung ein.",
    slideType: "Selbstbewertung_Abstract_Verbessert_Gruppe2_Wissenschaftlich",
  },
  163: {
    id: 163,
    slideText:
      "Wie leicht oder schwer fiel es dir, dein Abstract zum Kriterium “wissenschaftlicher Stil” zu bewerten?",
    slideType:
      "Selbstbewertung_Abstract_Verbessert_Gruppe2_Wissenschaftlich_Likert",
  },
  164: {
    id: 164,
    slideText:
      "Beim Bewerten meines Abstracts zum Kriterium “wissenschaftlicher Stil” war meine geistige Denk-Anstrengung…",
    slideType:
      "Selbstbewertung_Abstract_Verbessert_Gruppe2_Wissenschaftlich_Likert_1",
  },
  165: {
    id: 165,
    slideText:
      "Bitte bewerte hier dein Abstract nach dem Kriterium „Organisation des Textes“ und trage im Eingabefeld deine Bewertung ein.",
    slideType: "Selbstbewertung_Abstract_Verbessert_Gruppe2_Text_Organisation",
  },
  166: {
    id: 166,
    slideText:
      "Wie leicht oder schwer fiel es dir, dein Abstract zum Kriterium “Organisation des Textes” zu bewerten?",
    slideType:
      "Selbstbewertung_Abstract_Verbessert_Gruppe2_Text_Organisation_Likert",
  },
  167: {
    id: 167,
    slideText:
      "Beim Bewerten meines Abstracts zum Kriterium “Organisation des Textes” war meine geistige Denk-Anstrengung…",
    slideType:
      "Selbstbewertung_Abstract_Verbessert_Gruppe2_Text_Organisation_Likert_1",
  },
  168: {
    id: 168,
    slideText:
      "Bitte bewerte hier dein Abstract nach dem Kriterium „Aufbau“ und trage im Eingabefeld deine Bewertung ein.",
    slideType: "Selbstbewertung_Abstract_Verbessert_Gruppe2_Aufbau",
  },
  169: {
    id: 169,
    slideText:
      "Wie leicht oder schwer fiel es dir, dein Abstracts zum Kriterium “Aufbau”zu bewerten?",
    slideType: "Selbstbewertung_Abstract_Verbessert_Gruppe2_Aufbau_Likert",
  },
  170: {
    id: 170,
    slideText:
      "Beim Bewerten meines Abstracts zum Kriterium “Aufbau” war meine geistige Denk-Anstrengung…",
    slideType: "Selbstbewertung_Abstract_Verbessert_Gruppe2_Aufbau_Likert_1",
  },
  171: {
    id: 171,
    slideText: "Du kannst die Website nun schließen.",
    header: "Vielen Dank für Deine Teilnahme an dieser Studie!",
    slideType: "Ende",
  },
};

export default Slides;
