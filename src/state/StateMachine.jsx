import React, { useContext } from "react";
import { Machine, assign } from "xstate";
import { useMachine } from "@xstate/react";

const stateMachine = Machine({
  id: "stateMachine",
  initial: "initial",
  context: {
    user: "",
    password: "",
    authenticated: false
  },
  states: {
    initial: {
      on: {
        INPUT_USER: {
          actions: assign({
            user: (_, event) => event.value
          })
        },
        INPUT_PASSWORD: {
          actions: assign({
            password: (_, event) => event.value
          })
        },
        UNAUTHENTICATED: {
          actions: assign({
            authenticated: false
          })
        },
        AUTHENTICATED: {
          actions: assign({
            authenticated: true
          })
        }
      }
    }
  }
});

const StateMachineState = React.createContext(undefined);
const StateMachineDispatch = React.createContext(undefined);

export function StateMachineProvider({ children }) {
  const [current, send] = useMachine(stateMachine);

  return (
    <StateMachineState.Provider value={current}>
      <StateMachineDispatch.Provider value={send}>
        {children}
      </StateMachineDispatch.Provider>
    </StateMachineState.Provider>
  );
}

export function useStateMachineState() {
  const context = useContext(StateMachineState);

  return context;
}

export function useStateMachineDispatch() {
  const context = useContext(StateMachineDispatch);

  return context;
}

export default stateMachine;
