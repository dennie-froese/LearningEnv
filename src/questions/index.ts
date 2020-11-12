export interface QuestionInterface {
  id: number;
  questionType: string;
  questionText: string;
  additionalInfo: number;
}

const QuestionIDs = [1, 2, 3, 4];

type QuestionID = typeof QuestionIDs[number];

const Questions: { [key in QuestionID]: QuestionInterface } = {
  1: {
    id: 1,
    questionType: "textInput",
    questionText: "Please tell us about your day.",
    additionalInfo: 0,
  },
  2: {
    id: 2,
    questionType: "range",
    questionText: "On a scale from 1 to 10, how was your day.",
    additionalInfo: 10,
  },
  3: {
    id: 3,
    questionType: "textInput",
    questionText: "Please tell us about your day.",
    additionalInfo: 0,
  },
  4: {
    id: 4,
    questionType: "textInput",
    questionText: "Please tell us about you.",
    additionalInfo: 0,
  },
};

export default Questions;
