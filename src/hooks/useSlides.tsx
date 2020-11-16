import React, { useEffect, useReducer } from "react";
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
  };
};
type SubmitSlide = { type: "submit_slide" };

type Action = SetUser | SetSlides | SubmitSlide;

type Dispatch = (action: Action) => void;

type State = {
  user: string;
  authenticated: boolean;
  slides: SlideInterface[] | undefined;
  activeSlide: number | undefined;
  slideSelection: number[] | undefined;
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
      };
    }
    case "submit_slide": {
      return {
        ...state,
        activeSlide: 1,
        slideSelection: [1, 3, 4],
      };
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
  });

  useEffect(() => {
    if (state.user) {
      const condition = parseInt(state.user.charAt(0));
      const slides = provideSlides(condition);
      dispatch({ type: "set_slides", payload: { slides } });
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
