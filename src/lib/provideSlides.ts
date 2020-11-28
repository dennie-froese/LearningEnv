import { SlideInterface } from "../slides";
import Slides from "./../slides";

export default function provideSlides(condition: number) {
  const SLIDES_SELECTIONS = [
    [
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
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      71,
      72,
      73,
      74,
      75,
      76,
      77,
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      101,
      102,
      103,
      104,
      105,
      106,
      107,
      111,
      112,
      113,
      114,
      115,
    ],
    [
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
      38,
      41,
      42,
      43,
      44,
      45,
      48,
      51,
      52,
      53,
      54,
      55,
      58,
      61,
      62,
      63,
      64,
      65,
      68,
      71,
      72,
      73,
      74,
      75,
      78,
      81,
      82,
      83,
      84,
      85,
      88,
      91,
      92,
      93,
      94,
      95,
      98,
      101,
      102,
      103,
      104,
      105,
      108,
      111,
      112,
      113,
      114,
      115,
    ],
    [
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
      39,
      41,
      42,
      43,
      44,
      45,
      49,
      51,
      52,
      53,
      54,
      55,
      59,
      61,
      62,
      63,
      64,
      65,
      69,
      71,
      72,
      73,
      74,
      75,
      79,
      81,
      82,
      83,
      84,
      85,
      89,
      91,
      92,
      93,
      94,
      95,
      99,
      101,
      102,
      103,
      104,
      105,
      109,
      111,
      112,
      113,
      114,
      115,
    ],
    [
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
      40,
      41,
      42,
      43,
      44,
      45,
      50,
      51,
      52,
      53,
      54,
      55,
      60,
      61,
      62,
      63,
      64,
      65,
      70,
      71,
      72,
      73,
      74,
      75,
      80,
      81,
      82,
      83,
      84,
      85,
      90,
      91,
      92,
      93,
      94,
      95,
      100,
      101,
      102,
      103,
      104,
      105,
      110,
      111,
      112,
      113,
      114,
      115,
    ],
  ];
  const slidesArray: SlideInterface[] = [];
  const slidesSelected: number[] = SLIDES_SELECTIONS[condition - 1];

  for (let i = 0; i < SLIDES_SELECTIONS[condition - 1].length; i++) {
    slidesArray.push(Slides[SLIDES_SELECTIONS[condition - 1][i]]);
  }

  return { slidesArray, slidesSelected };
}
