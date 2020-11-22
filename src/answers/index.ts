export interface Answer {
  zeit: number;
  version?: string;
  vpn?: string;
  code?: string;
  Alter?: string;
  Geschlecht?: string;
  Geburtssprache1?: string;
  Abiturnote?: string;
  Studiengang1?: string;
  Studiengang2?: string;
  Tippen?: string;
  Semester_Hochschule?: string;
  NachAngaben_1?: string;
  NachAngaben_2?: string;
  NachAngaben_3?: string;
  NachAngaben_4?: string;
  NachAngaben_5?: string;
  NachAngaben_6?: string;
  NachAngaben_7?: string;
  NachAngaben_8?: string;
  NachAngaben_9?: string;
  NachAngaben_10?: string;
  NachAngaben_11?: string;
  NachAngaben_12?: string;
  NachAngaben_13?: string;
  NachAngaben_14?: string;
  NachAngaben_15?: string;
  NachAngaben_16?: string;
  NachAngaben_17?: string;
  NachAngaben_18?: string;
  NachAngaben_19?: string;
  NachAngaben_20?: string;
  NachAngaben_21?: string;
  NachAngaben_22?: string;
  Text_Attribution?: string;
  Text_SN?: string;
  Text_Konsens?: string;
  Text_Konsistenz?: string;
  Text_Distinktheit?: string;
  Text_FA?: string;
  Text_SV?: string;
  example_Attribution?: string;
  Text_GWG?: string;
  Ausdenken_Attribution1?: string;
  Ausdenken_Attribution2?: string;
  Attribution_g1_1_1?: string;
  Attribution_g1_1_2?: string;
  Attribution_g1_1_3?: string;
  Attribution_g1_1_4?: string;
  Attribution_g1_2_1?: string;
  Attribution_g1_2_2?: string;
  Attribution_g1_2_3?: string;
  Attribution_g1_2_4?: string;
  Ausdenken_Attribution3?: string;
  Ausdenken_Attribution4?: string;
  example_SN?: string;
  Ausdenken_SN1?: string;
  Ausdenken_SN2?: string;
  SN_g1_1_1?: string;
  SN_g1_1_2?: string;
  SN_g1_1_3?: string;
  SN_g1_1_4?: string;
  SN_g1_2_1?: string;
  SN_g1_2_2?: string;
  SN_g1_2_3?: string;
  SN_g1_2_4?: string;
  Ausdenken_SN3?: string;
  Ausdenken_SN4?: string;
  example_Konsens?: string;
  Ausdenken_Konsens1?: string;
  Konsens_g1_1_1?: string;
  Konsens_g1_1_2?: string;
  Konsens_g1_1_3?: string;
  Konsens_g1_2_1?: string;
  Konsens_g1_2_2?: string;
  Konsens_g1_2_3?: string;
  Ausdenken_Konsens3?: string;
  Ausdenken_Konsens4?: string;
  example_Konsistenz?: string;
  Ausdenken_Konsistenz1?: string;
  Ausdenken_Konsistenz2?: string;
  Konsistenz_g1_1_1?: string;
  Konsistenz_g1_1_2?: string;
  Konsistenz_g1_1_3?: string;
  Konsistenz_g1_1_4?: string;
  Konsistenz_g1_1_5?: string;
  Konsistenz_g1_2_1?: string;
  Konsistenz_g1_2_2?: string;
  Konsistenz_g1_2_3?: string;
  Konsistenz_g1_2_4?: string;
  Konsistenz_g1_2_5?: string;
  Ausdenken_Konsistenz3?: string;
  Ausdenken_Konsistenz4?: string;
  example_Distinktheit?: string;
  Ausdenken_Distinktheit1?: string;
  Ausdenken_Distinktheit2?: string;
  Distinktheit_g1_1_1?: string;
  Distinktheit_g1_1_2?: string;
  Distinktheit_g1_1_3?: string;
  Distinktheit_g1_1_4?: string;
  Distinktheit_g1_2_1?: string;
  Distinktheit_g1_2_2?: string;
  Distinktheit_g1_2_3?: string;
  Distinktheit_g1_2_4?: string;
  Ausdenken_Distinktheit3?: string;
  Ausdenken_Distinktheit4?: string;
  example_FA?: string;
  Ausdenken_FA1?: string;
  Ausdenken_FA2?: string;
  FA_g1_1_1?: string;
  FA_g1_1_2?: string;
  FA_g1_1_3?: string;
  FA_g1_1_4?: string;
  FA_g1_1_5?: string;
  FA_g1_2_1?: string;
  FA_g1_2_2?: string;
  FA_g1_2_3?: string;
  FA_g1_2_4?: string;
  FA_g1_2_5?: string;
  Ausdenken_FA3?: string;
  Ausdenken_FA4?: string;
  example_SV?: string;
  Ausdenken_SV1?: string;
  Ausdenken_SV2?: string;
  SV_g1_1_1?: string;
  SV_g1_1_2?: string;
  SV_g1_1_3?: string;
  SV_g1_2_1?: string;
  SV_g1_2_2?: string;
  SV_g1_2_3?: string;
  Ausdenken_SV3?: string;
  Ausdenken_SV4?: string;
  example_GWG?: string;
  Ausdenken_GWG1?: string;
  Ausdenken_GWG2?: string;
  GWG_g1_1_1?: string;
  GWG_g1_1_2?: string;
  GWG_g1_1_3?: string;
  GWG_g1_1_4?: string;
  GWG_g1_2_1?: string;
  GWG_g1_2_2?: string;
  GWG_g1_2_3?: string;
  GWG_g1_2_4?: string;
  Ausdenken_GWG3?: string;
  Ausdenken_GWG4?: string;
}

export const answerTypes: string[] = [
  "select",
  "Vpn",
  "Code",
  "Willkommen",
  "Intro",
  "demographisch",
  "demographisch_intro",
  "Nachangaben_1_5",
  "NachAngaben_6_11",
  "Nachangaben_12_17",
  "Nachangaben_18_22",
  "Konzept_Intro",
  "Konzept_Attribution",
  "Konzept_SN",
  "Konzept_Konsens",
  "Konzept_Konsistenz",
  "Konzept_Distinktheit",
  "Konzept_FA",
  "Konzept_SV",
  "Konzept_GWG",
  "Text_Intro",
  "Text_Text",
  "Definition_Intro",
  "Definition_Attribution",
  "Definition_SN",
  "Definition_Konsens",
  "Definition_Konsistenz",
  "Definition_Distinktheit",
  "Definition_FA",
  "Definition_SV",
  "Definition_GWG",
  "Beispiel_Intro",
  "Beispiel_Attribution0",
  "Beispiel_Attribution1",
  "Beispiel_Attribution2",
  "Attribution_g1_1",
  "Attribution_g1_2",
  "Beispiel_Attribution3",
  "Beispiel_Attribution4",
  "Beispiel_SN0",
  "Beispiel_SN1",
  "Beispiel_SN2",
  "SN_g1_1",
  "SN_g1_2",
  "Beispiel_SN3",
  "Beispiel_SN4",
  "Beispiel_Konsens0",
  "Beispiel_Konsens1",
  "Beispiel_Konsens2",
  "Konsens_g1_1",
  "Konsens_g1_2",
  "Beispiel_Konsens3",
  "Beispiel_Konsens4",
  "Beispiel_Konsistenz0",
  "Beispiel_Konsistenz1",
  "Beispiel_Konsistenz2",
  "Konsistenz_g1_1",
  "Konsistenz_g1_2",
  "Beispiel_Konsistenz3",
  "Beispiel_Konsistenz4",
  "Beispiel_Distinktheit0",
  "Beispiel_Distinktheit1",
  "Beispiel_Distinktheit2",
  "Distinktheit_g1_1",
  "Distinktheit_g1_2",
  "Beispiel_Distinktheit3",
  "Beispiel_Distinktheit4",
  "Beispiel_FA0",
  "Beispiel_FA1",
  "Beispiel_FA2",
  "FA_g1_1",
  "FA_g1_2",
  "Beispiel_FA3",
  "Beispiel_FA4",
  "Beispiel_SV0",
  "Beispiel_SV1",
  "Beispiel_SV2",
  "SV_g1_1",
  "SV_g1_2",
  "Beispiel_SV3",
  "Beispiel_SV4",
  "Beispiel_GWG0",
  "Beispiel_GWG1",
  "Beispiel_GWG2",
  "GWG_g1_1",
  "GWG_g1_2",
  "Beispiel_GWG3",
  "Beispiel_GWG4",
  "Ende",
];

export type Answers = {
  select: { answer: Answer };
  Vpn: { answer: Answer };
  Code: { answer: Answer };
  Willkommen: { answer: Answer };
  Intro: { answer: Answer };
  demographisch: { answer: Answer };
  demographisch_intro: { answer: Answer };
  Nachangaben_1_5: { answer: Answer };
  NachAngaben_6_11: { answer: Answer };
  Nachangaben_12_17: { answer: Answer };
  Nachangaben_18_22: { answer: Answer };
  Konzept_Intro: { answer: Answer };
  Konzept_Attribution: { answer: Answer };
  Konzept_SN: { answer: Answer };
  Konzept_Konsens: { answer: Answer };
  Konzept_Konsistenz: { answer: Answer };
  Konzept_Distinktheit: { answer: Answer };
  Konzept_FA: { answer: Answer };
  Konzept_SV: { answer: Answer };
  Konzept_GWG: { answer: Answer };
  Text_Intro: { answer: Answer };
  Text_Text: { answer: Answer };
  Definition_Intro: { answer: Answer };
  Definition_Attribution: { answer: Answer };
  Definition_SN: { answer: Answer };
  Definition_Konsens: { answer: Answer };
  Definition_Konsistenz: { answer: Answer };
  Definition_Distinktheit: { answer: Answer };
  Definition_FA: { answer: Answer };
  Definition_SV: { answer: Answer };
  Definition_GWG: { answer: Answer };
  Beispiel_Intro: { answer: Answer };
  Beispiel_Attribution0: { answer: Answer };
  Beispiel_Attribution1: { answer: Answer };
  Beispiel_Attribution2: { answer: Answer };
  Attribution_g1_1: { answer: Answer };
  Attribution_g1_2: { answer: Answer };
  Beispiel_Attribution3: { answer: Answer };
  Beispiel_Attribution4: { answer: Answer };
  Beispiel_SN0: { answer: Answer };
  Beispiel_SN1: { answer: Answer };
  Beispiel_SN2: { answer: Answer };
  SN_g1_1: { answer: Answer };
  SN_g1_2: { answer: Answer };
  Beispiel_SN3: { answer: Answer };
  Beispiel_SN4: { answer: Answer };
  Beispiel_Konsens0: { answer: Answer };
  Beispiel_Konsens1: { answer: Answer };
  Beispiel_Konsens2: { answer: Answer };
  Konsens_g1_1: { answer: Answer };
  Konsens_g1_2: { answer: Answer };
  Beispiel_Konsens3: { answer: Answer };
  Beispiel_Konsens4: { answer: Answer };
  Beispiel_Konsistenz0: { answer: Answer };
  Beispiel_Konsistenz1: { answer: Answer };
  Beispiel_Konsistenz2: { answer: Answer };
  Konsistenz_g1_1: { answer: Answer };
  Konsistenz_g1_2: { answer: Answer };
  Beispiel_Konsistenz3: { answer: Answer };
  Beispiel_Konsistenz4: { answer: Answer };
  Beispiel_Distinktheit0: { answer: Answer };
  Beispiel_Distinktheit1: { answer: Answer };
  Beispiel_Distinktheit2: { answer: Answer };
  Distinktheit_g1_1: { answer: Answer };
  Distinktheit_g1_2: { answer: Answer };
  Beispiel_Distinktheit3: { answer: Answer };
  Beispiel_Distinktheit4: { answer: Answer };
  Beispiel_FA0: { answer: Answer };
  Beispiel_FA1: { answer: Answer };
  Beispiel_FA2: { answer: Answer };
  FA_g1_1: { answer: Answer };
  FA_g1_2: { answer: Answer };
  Beispiel_FA3: { answer: Answer };
  Beispiel_FA4: { answer: Answer };
  Beispiel_SV0: { answer: Answer };
  Beispiel_SV1: { answer: Answer };
  Beispiel_SV2: { answer: Answer };
  SV_g1_1: { answer: Answer };
  SV_g1_2: { answer: Answer };
  Beispiel_SV3: { answer: Answer };
  Beispiel_SV4: { answer: Answer };
  Beispiel_GWG0: { answer: Answer };
  Beispiel_GWG1: { answer: Answer };
  Beispiel_GWG2: { answer: Answer };
  GWG_g1_1: { answer: Answer };
  GWG_g1_2: { answer: Answer };
  Beispiel_GWG3: { answer: Answer };
  Beispiel_GWG4: { answer: Answer };
  Ende: { answer: Answer };
};
