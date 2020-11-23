export type SlideInterface = {
  id: number;
  slideType: string;
  slideText: string;
  additionalInfo: number;
  demographic?: Record<string, string>;
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

export const object = {
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
};
