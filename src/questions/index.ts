export interface QuestionInterface {
  id: number;
  questionType: string;
  questionText: string;
  additionalInfo: number;
}

const questions: QuestionInterface[] = [
  {
    id: 1,
    questionType: "textInput",
    questionText: "Please tell us about your day.",
    additionalInfo: 0
  },
  {
    id: 2,
    questionType: "range",
    questionText: "On a scale from 1 to 10, how was your day.",
    additionalInfo: 10
  },
  {
    id: 3,
    questionType: "textInput",
    questionText: "Please tell us about your day.",
    additionalInfo: 0
  }
];

export default questions;
