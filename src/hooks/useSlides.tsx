import React, { useEffect, useReducer } from "react";
import { Answer, answerID, answerTypes } from "../answers";
import provideSlides from "../lib/provideSlides";
import { SlideInterface } from "../slides";

type UserStateType = {
  user: string;
  authenticated: boolean;
};

type SetUser = { type: "set_user"; payload: UserStateType };
type SetSlides = {
  type: "set_slides";
  payload: {
    slides: SlideInterface[];
    activeSlide: number;
    slideSelection: number[];
  };
};
type SubmitSlide = {
  type: "submit_slide";
  payload: { type: string; answer: Answer };
};

type Action = SetUser | SetSlides | SubmitSlide;

type Dispatch = (action: Action) => void;

type State = {
  user: string;
  authenticated: boolean;
  slides: SlideInterface[] | undefined;
  activeSlide: number | undefined;
  slideSelection: number[] | undefined;
  answers: Record<string, Answer>;
};

type SlidesProviderProps = { children: React.ReactNode };

const SlidesStateContext = React.createContext<State | undefined>(undefined);

const SlidesDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

function slidesReducer(state: State, action: any) {
  switch (action.type) {
    case "set_user": {
      return {
        ...state,
        user: action.payload.user,
        authenticated: action.payload.authenticated,
      };
    }
    case "set_slides": {
      return {
        ...state,
        slides: action.payload.slides,
        activeSlide: action.payload.activeSlide,
        slideSelection: action.payload.slideSelection,
      };
    }
    case "submit_slide": {
      if (state.slideSelection && state.activeSlide) {
        state.answers[action.payload.type] = action.payload.answer;
        return {
          ...state,
          activeSlide:
            state?.slideSelection[
              state.slideSelection?.indexOf(state.activeSlide) + 1
            ],
        };
      } else {
        return {
          ...state,
        };
      }
    }
    default: {
      throw new Error("Unhandled action.");
    }
  }
}

function SlidesProvider({ children }: SlidesProviderProps) {
  const [state, dispatch] = useReducer(slidesReducer, {
    user: "",
    authenticated: false,
    slides: undefined,
    activeSlide: undefined,
    slideSelection: undefined,
    answers: {},
  });

  useEffect(() => {
    if (state.user) {
      const condition = parseInt(state.user.charAt(0));
      const { slidesArray, slidesSelected } = provideSlides(condition);
      dispatch({
        type: "set_slides",
        payload: {
          slides: slidesArray,
          activeSlide: slidesSelected[0],
          slideSelection: slidesSelected,
        },
      });
    }
  }, [state.user]);

  return (
    <SlidesStateContext.Provider value={state}>
      <SlidesDispatchContext.Provider value={dispatch}>
        {children}
      </SlidesDispatchContext.Provider>
    </SlidesStateContext.Provider>
  );
}

function useSlidesState() {
  const context = React.useContext(SlidesStateContext);

  return context;
}

function useSlidesDispatch() {
  const context = React.useContext(SlidesDispatchContext);

  return context;
}

export { SlidesProvider, useSlidesState, useSlidesDispatch };
