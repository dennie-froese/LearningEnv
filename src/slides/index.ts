export type SlideInterface = {
  id: number;
  slideType: string;
  slideText: string;
  additionalInfo: number;
};

const SlideIDs = [1, 2, 3, 4, 5];

type SlideID = typeof SlideIDs[number];

const Slides: { [key in SlideID]: SlideInterface } = {
  1: {
    id: 1,
    slideType: "intro",
    slideText:
      "This is the intro slide, Here should be some relevant information",
    additionalInfo: 0,
  },
  2: {
    id: 2,
    slideType: "range",
    slideText: "On a scale from 1 to 10, how was your day.",
    additionalInfo: 10,
  },
  3: {
    id: 3,
    slideType: "textInput",
    slideText: "Please tell us about your day.",
    additionalInfo: 0,
  },
  4: {
    id: 4,
    slideType: "textInput",
    slideText: "Please tell us about you.",
    additionalInfo: 0,
  },
  5: {
    id: 5,
    slideType: "finish",
    slideText:
      "Thank you very much for taking part in our survey, this is the last slide",
    additionalInfo: 0,
  },
};

export default Slides;

const object = {
  select: {
    zeit: 2972,
    version: "Bedingung_1",
  },
  Vpn: {
    zeit: 5723,
    Vpn: "198",
  },
  Code: {
    zeit: 5723,
    Vpn: "198",
    Code: "_",
  },
  Willkommen: {
    zeit: 1516,
  },
  Intro: {
    zeit: 4951,
  },
  demographisch: {
    zeit: 23907,
    Alter: "53",
    Geschlecht: "m",
    Geburtssprache1: "jhkgkg",
    Geburtssprache2: "-",
    Abiturnote: "2.2",
    Studiengang1: "gsgdg",
    Studiengang2: "fdhdhd",
    Tippen: "Bachelor of Arts/Science 1-Fach",
    Semester_Hochschule: "6",
  },
  demographisch_intro: {
    zeit: 9665,
  },
  "Nachangaben_1-5": {
    zeit: 10058,
    NachAngaben_1: "2",
    NachAngaben_2: "3",
    NachAngaben_3: "3",
    NachAngaben_4: "2",
    NachAngaben_5: "3",
  },
  "NachAngaben_6-11": {
    zeit: 6710,
    NachAngaben_6: "2",
    NachAngaben_7: "3",
    NachAngaben_8: "4",
    NachAngaben_9: "3",
    NachAngaben_10: "3",
    NachAngaben_11: "3",
  },
  "Nachangaben_12-17": {
    zeit: 11334,
    NachAngaben_12: "3",
    NachAngaben_13: "2",
    NachAngaben_14: "4",
    NachAngaben_15: "3",
    NachAngaben_16: "3",
    NachAngaben_17: "3",
  },
  "Nachangaben_18-22": {
    zeit: 6942,
    NachAngaben_18: "1",
    NachAngaben_19: "4",
    NachAngaben_20: "3",
    NachAngaben_21: "3",
    NachAngaben_22: "2",
  },
  Konzept_Intro: {
    zeit: 4712,
  },
  Konzept_Attribution: {
    zeit: 352780,
    Text_Attribution: "gsghrhe",
  },
  Konzept_SN: {
    zeit: 10218,
    Text_SN: "gegegewgg",
  },
  Konzept_Konsens: {
    zeit: 1117,
    Text_Konsens: "-",
  },
  Konzept_Konsistenz: {
    zeit: 1310,
    Text_Konsistenz: "gwrt wt w",
  },
  Konzept_Distinktheit: {
    zeit: 1758,
    Text_Distinktheit: "zw4z wz4z",
  },
  Konzept_FA: {
    zeit: 1593,
    Text_FA: "fhd ",
  },
  Konzept_SV: {
    zeit: 2929,
    Text_SV: "-",
  },
  Konzept_GWG: {
    zeit: 1756,
    Text_GWG: "kztjrr",
  },
  Text_Intro: {
    zeit: 6775,
  },
  Text_Text: {
    zeit: 239275,
  },
  Definition_Intro: {
    zeit: 4984,
  },
  Definition_Attribution: {
    zeit: 3583,
  },
  Definition_SN: {
    zeit: 716,
  },
  Definition_Konsens: {
    zeit: 578,
  },
  Definition_Konsistenz: {
    zeit: 791,
  },
  Definition_Distinktheit: {
    zeit: -106,
  },
  Definition_FA: {
    zeit: 149,
  },
  Definition_SV: {
    zeit: 1306,
  },
  Definition_GWG: {
    zeit: 655,
  },
  Beispiel_Intro: {
    zeit: 765,
  },
  Beispiel_Attribution0: {
    zeit: 8516,
    example_Attribution:
      "gsdjtj rt urtu r e twwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
  },
  Beispiel_Attribution1: {
    zeit: 2131,
    Ausdenken_Attribution1: "6",
  },
  Beispiel_Attribution2: {
    zeit: 2079,
    Ausdenken_Attribution2: "5",
  },
  Attribution_g1_1: {
    zeit: 32864,
    Attribution_g1_1_1: "1",
    Attribution_g1_1_2: "1",
    Attribution_g1_1_3: "1",
    Attribution_g1_1_4: "1",
  },
  Attribution_g1_2: {
    zeit: 48877,
    Attribution_g1_1_1: "1",
    Attribution_g1_1_2: "1",
    Attribution_g1_1_3: "1",
    Attribution_g1_1_4: "1",
    Attribution_g1_2_1: "1",
    Attribution_g1_2_2: "1",
    Attribution_g1_2_3: "2",
    Attribution_g1_2_4: "0.5",
  },
  Beispiel_Attribution3: {
    zeit: 174329,
    Ausdenken_Attribution3: "7",
  },
  Beispiel_Attribution4: {
    zeit: 1684,
    Ausdenken_Attribution4: "7",
  },
  Beispiel_SN0: {
    zeit: 11602,
    example_SN:
      "fa e w tfgfggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg gweggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg",
  },
  Beispiel_SN1: {
    zeit: 2441,
    Ausdenken_SN1: "5",
  },
  Beispiel_SN2: {
    zeit: 4506,
    Ausdenken_SN2: "4",
  },
  SN_g1_1: {
    zeit: 38178,
    SN_g1_1_1: "2",
    SN_g1_1_2: "2",
    SN_g1_1_3: "2",
    SN_g1_1_4: "0",
  },
  SN_g1_2: {
    zeit: 143275,
    SN_g1_1_1: "2",
    SN_g1_1_2: "2",
    SN_g1_1_3: "2",
    SN_g1_1_4: "0",
    SN_g1_2_1: "2",
    SN_g1_2_2: "1",
    SN_g1_2_3: "2",
    SN_g1_2_4: "0.5",
  },
  Beispiel_SN3: {
    zeit: 98722,
    Ausdenken_SN3: "4",
  },
  Beispiel_SN4: {
    zeit: 3862,
    Ausdenken_SN4: "3",
  },
  Beispiel_Konsens0: {
    zeit: 31341,
    example_Konsens:
      "jd hd ez ru tr wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
  },
  Beispiel_Konsens1: {
    zeit: 2292,
    Ausdenken_Konsens1: "4",
  },
  Beispiel_Konsens2: {
    zeit: 3372,
    Ausdenken_Konsens2: "7",
  },
  Konsens_g1_1: {
    zeit: 5979,
    Konsens_g1_1_1: "2",
    Konsens_g1_1_2: "1",
    Konsens_g1_1_3: "0",
  },
  Konsens_g1_2: {
    zeit: 18776,
    Konsens_g1_2_1: "2",
    Konsens_g1_2_2: "2",
    Konsens_g1_2_3: "0",
  },
  Beispiel_Konsens3: {
    zeit: 17661,
    Ausdenken_Konsens3: "6",
  },
  Beispiel_Konsens4: {
    zeit: 2539,
    Ausdenken_Konsens4: "7",
  },
  Beispiel_Konsistenz0: {
    zeit: 4432,
    example_Konsistenz: "dhdh dr d",
  },
  Beispiel_Konsistenz1: {
    zeit: 1767,
    Ausdenken_Konsistenz1: "2",
  },
  Beispiel_Konsistenz2: {
    zeit: 2488,
    Ausdenken_Konsistenz2: "3",
  },
  Konsistenz_g1_1: {
    zeit: 8596,
    Konsistenz_g1_1_1: "1",
    Konsistenz_g1_1_2: "1",
    Konsistenz_g1_1_3: "2",
    Konsistenz_g1_1_4: "1",
    Konsistenz_g1_1_5: "1",
  },
  Konsistenz_g1_2: {
    zeit: 6767,
    Konsistenz_g1_2_1: "2",
    Konsistenz_g1_2_2: "1",
    Konsistenz_g1_2_3: "1",
    Konsistenz_g1_2_4: "2",
    Konsistenz_g1_2_5: "0",
  },
  Beispiel_Konsistenz3: {
    zeit: 2768,
    Ausdenken_Konsistenz3: "3",
  },
  Beispiel_Konsistenz4: {
    zeit: 1997,
    Ausdenken_Konsistenz4: "5",
  },
  Beispiel_Distinktheit0: {
    zeit: 5426,
    example_Distinktheit: "hfdg sg sgs 35 q",
  },
  Beispiel_Distinktheit1: {
    zeit: 1836,
    Ausdenken_Distinktheit1: "7",
  },
  Beispiel_Distinktheit2: {
    zeit: 1333,
    Ausdenken_Distinktheit2: "6",
  },
  Distinktheit_g1_1: {
    zeit: 6341,
    Distinktheit_g1_1_1: "1",
    Distinktheit_g1_1_2: "1",
    Distinktheit_g1_1_3: "2",
    Distinktheit_g1_1_4: "0.5",
  },
  Distinktheit_g1_2: {
    zeit: 5925,
    Distinktheit_g1_2_1: "2",
    Distinktheit_g1_2_2: "1",
    Distinktheit_g1_2_3: "1",
    Distinktheit_g1_2_4: "0",
  },
  Beispiel_Distinktheit3: {
    zeit: 3421,
    Ausdenken_Distinktheit3: "2",
  },
  Beispiel_Distinktheit4: {
    zeit: 2638,
    Ausdenken_Distinktheit4: "6",
  },
  Beispiel_FA0: {
    zeit: 3574,
    example_FA: "fwafwa f af a",
  },
  Beispiel_FA1: {
    zeit: 2895,
    Ausdenken_FA1: "4",
  },
  Beispiel_FA2: {
    zeit: 2038,
    Ausdenken_FA2: "6",
  },
  FA_g1_1: {
    zeit: 7749,
    FA_g1_1_1: "2",
    FA_g1_1_2: "1",
    FA_g1_1_3: "1",
    FA_g1_1_4: "1",
    FA_g1_1_5: "1",
  },
  FA_g1_2: {
    zeit: 20501,
    FA_g1_2_1: "2",
    FA_g1_2_2: "2",
    FA_g1_2_3: "1",
    FA_g1_2_4: "1",
    FA_g1_2_5: "1",
  },
  Beispiel_FA3: {
    zeit: 5882,
    Ausdenken_FA3: "3",
  },
  Beispiel_FA4: {
    zeit: 6518,
    Ausdenken_FA4: "5",
  },
  Beispiel_SV0: {
    zeit: 5385,
    example_SV: "hee etttttttttttttt",
  },
  Beispiel_SV1: {
    zeit: 1912,
    Ausdenken_SV1: "5",
  },
  Beispiel_SV2: {
    zeit: 1549,
    Ausdenken_SV2: "3",
  },
  SV_g1_1: {
    zeit: 8547,
    SV_g1_1_1: "1",
    SV_g1_1_2: "2",
    SV_g1_1_3: "0.5",
  },
  SV_g1_2: {
    zeit: 4164,
    SV_g1_2_1: "1",
    SV_g1_2_2: "2",
    SV_g1_2_3: "0",
  },
  Beispiel_SV3: {
    zeit: 2602,
    Ausdenken_SV3: "3",
  },
  Beispiel_SV4: {
    zeit: 2658,
    Ausdenken_SV4: "5",
  },
  Beispiel_GWG0: {
    zeit: 3594,
    example_GWG: "3wgbss",
  },
  Beispiel_GWG1: {
    zeit: 1919,
    Ausdenken_GWG1: "6",
  },
  Beispiel_GWG2: {
    zeit: 1404,
    Ausdenken_GWG2: "4",
  },
  GWG_g1_1: {
    zeit: 5962,
    GWG_g1_1_1: "2",
    GWG_g1_1_2: "1",
    GWG_g1_1_3: "1",
    GWG_g1_1_4: "1",
  },
  GWG_g1_2: {
    zeit: 8486,
    GWG_g1_2_1: "2",
    GWG_g1_2_2: "1",
    GWG_g1_2_3: "1",
    GWG_g1_2_4: "0.5",
  },
  Beispiel_GWG3: {
    zeit: 2946,
    Ausdenken_GWG3: "2",
  },
  Beispiel_GWG4: {
    zeit: 1679,
    Ausdenken_GWG4: "5",
  },
  Ende: {
    zeit: 20109,
  },
};
