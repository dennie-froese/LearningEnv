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

type Answers = [
  { select: Answer },
  { Vpn: Answer },
  { Code: Answer },
  { Willkommen: Answer },
  { Intro: Answer },
  { demographisch: Answer },
  { demographisch_intro: Answer },
  { Nachangaben_1_5: Answer },
  { NachAngaben_6_11: Answer },
  { Nachangaben_12_17: Answer },
  { Nachangaben_18_22: Answer },
  { Konzept_Intro: Answer },
  { Konzept_Attribution: Answer },
  { Konzept_SN: Answer },
  { Konzept_Konsens: Answer },
  { Konzept_Konsistenz: Answer },
  { Konzept_Distinktheit: Answer },
  { Konzept_FA: Answer },
  { Konzept_SV: Answer },
  { Konzept_GWG: Answer },
  { Text_Intro: Answer },
  { Text_Text: Answer },
  { Definition_Intro: Answer },
  { Definition_Attribution: Answer },
  { Definition_SN: Answer },
  { Definition_Konsens: Answer },
  { Definition_Konsistenz: Answer },
  { Definition_Distinktheit: Answer },
  { Definition_FA: Answer },
  { Definition_SV: Answer },
  { Definition_GWG: Answer },
  { Beispiel_Intro: Answer },
  { Beispiel_Attribution0: Answer },
  { Beispiel_Attribution1: Answer },
  { Beispiel_Attribution2: Answer },
  { Attribution_g1_1: Answer },
  { Attribution_g1_2: Answer },
  { Beispiel_Attribution3: Answer },
  { Beispiel_Attribution4: Answer },
  { Beispiel_SN0: Answer },
  { Beispiel_SN1: Answer },
  { Beispiel_SN2: Answer },
  { SN_g1_1: Answer },
  { SN_g1_2: Answer },
  { Beispiel_SN3: Answer },
  { Beispiel_SN4: Answer },
  { Beispiel_Konsens0: Answer },
  { Beispiel_Konsens1: Answer },
  { Beispiel_Konsens2: Answer },
  { Konsens_g1_1: Answer },
  { Konsens_g1_2: Answer },
  { Beispiel_Konsens3: Answer },
  { Beispiel_Konsens4: Answer },
  { Beispiel_Konsistenz0: Answer },
  { Beispiel_Konsistenz1: Answer },
  { Beispiel_Konsistenz2: Answer },
  { Konsistenz_g1_1: Answer },
  { Konsistenz_g1_2: Answer },
  { Beispiel_Konsistenz3: Answer },
  { Beispiel_Konsistenz4: Answer },
  { Beispiel_Distinktheit0: Answer },
  { Beispiel_Distinktheit1: Answer },
  { Beispiel_Distinktheit2: Answer },
  { Distinktheit_g1_1: Answer },
  { Distinktheit_g1_2: Answer },
  { Beispiel_Distinktheit3: Answer },
  { Beispiel_Distinktheit4: Answer },
  { Beispiel_FA0: Answer },
  { Beispiel_FA1: Answer },
  { Beispiel_FA2: Answer },
  { FA_g1_1: Answer },
  { FA_g1_2: Answer },
  { Beispiel_FA3: Answer },
  { Beispiel_FA4: Answer },
  { Beispiel_SV0: Answer },
  { Beispiel_SV1: Answer },
  { Beispiel_SV2: Answer },
  { SV_g1_1: Answer },
  { SV_g1_2: Answer },
  { Beispiel_SV3: Answer },
  { Beispiel_SV4: Answer },
  { Beispiel_GWG0: Answer },
  { Beispiel_GWG1: Answer },
  { Beispiel_GWG2: Answer },
  { GWG_g1_1: Answer },
  { GWG_g1_2: Answer },
  { Beispiel_GWG3: Answer },
  { Beispiel_GWG4: Answer },
  { Ende: Answer }
];

export default Answers;
