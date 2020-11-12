import { SlideInterface } from "../slides";
import Slides from "./../slides";

const SLIDES_COND = [
  [1, 2, 4],
  [1, 2, 4],
  [1, 3, 4],
  [1, 4],
];

export default function provideSlides(condition: number) {
  const slidesArray: SlideInterface[] = [];

  for (let i = 0; i < SLIDES_COND[condition - 1].length; i++) {
    slidesArray.push(Slides[i]);
  }

  return slidesArray;
}
