import { useState } from "react";
import { ColourObject } from "../components/ColouredWord";

function useHighlightableText(initialText: string, group: string) {
  const expertExamples1: Array<string> = initialText.split(" ");

  const [
    expertExamplesColourObjectArray,
    setExpertExamplesColourObjectArray,
  ] = useState<Array<ColourObject> | undefined>(
    expertExamples1 &&
      expertExamples1.map((word, i) => {
        return { word: word, colour: "white", id: i.toString(), group: group };
      })
  );

  function makeSelection(colour: string) {
    const selectionStart = +(window.getSelection()?.getRangeAt(0)
      ?.startContainer?.parentNode as HTMLElement)?.id.split("+")[0];
    const selectionEnd = +(window.getSelection()?.getRangeAt(0)?.endContainer
      ?.parentNode as HTMLElement)?.id.split("+")[0];

    const array: Array<ColourObject> | undefined =
      expertExamplesColourObjectArray &&
      expertExamplesColourObjectArray.map((wordColourObject: ColourObject) => {
        if (
          +wordColourObject.id.split("+")[0] >= selectionStart &&
          +wordColourObject.id.split("+")[0] <= selectionEnd
        ) {
          return {
            word: wordColourObject.word,
            colour: colour,
            id: wordColourObject.id,
            group: wordColourObject.group,
          };
        }
        if (colour === "white") {
          return {
            word: wordColourObject.word,
            colour: colour,
            id: wordColourObject.id,
            group: wordColourObject.group,
          };
        } else {
          return wordColourObject;
        }
      });
    setExpertExamplesColourObjectArray(array);
  }

  return { expertExamplesColourObjectArray, makeSelection };
}

export default useHighlightableText;
