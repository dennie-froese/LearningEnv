import { SlideInterface } from "../slides";
import Slides from "./../slides";

export default function provideSlides(condition: number) {
  const SLIDES_SELECTIONS = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [1, 2, 4],
    [1, 3, 4],
    [1, 4],
  ];
  const slidesArray: SlideInterface[] = [];
  const slidesSelected: number[] = SLIDES_SELECTIONS[condition - 1];

  for (let i = 0; i < SLIDES_SELECTIONS[condition - 1].length; i++) {
    slidesArray.push(Slides[SLIDES_SELECTIONS[condition - 1][i]]);
  }

  return { slidesArray, slidesSelected };
}
