import React from "react";

export type ColourObject = {
  word: string;
  colour: string;
  id: string;
  group: string;
};

interface Props {
  wordColourObject: ColourObject;
}

function ColouredWord({ wordColourObject }: Props) {
  return (
    <text
      style={{
        wordWrap: "normal",
        color: wordColourObject.colour,
      }}
      id={`${wordColourObject.id}+${wordColourObject.group}`}
    >
      {wordColourObject.word}{" "}
    </text>
  );
}

export default ColouredWord;
