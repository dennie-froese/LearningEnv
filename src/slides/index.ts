export interface SlideInterface {
  id: number;
  slideType: string;
  slideText: string;
  additionalInfo: number;
}

const SlideIDs = [1, 2, 3, 4];

type SlideID = typeof SlideIDs[number];

const Slides: { [key in SlideID]: SlideInterface } = {
  1: {
    id: 1,
    slideType: "textInput",
    slideText: "Please tell us about your day.",
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
};

export default Slides;
