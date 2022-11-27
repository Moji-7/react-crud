import { useReducer } from "react";

let initNumbers2 = { number1: 0, number2: 0, operator: "+", result: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "+":
      return { ...state, result: state.number1 + state.number2 };
    default:
      return state;
  }
};

export const useMyReducer = () => {
  const [calcState, dispach] = useReducer(reducer, initNumbers2);
  return [calcState, dispach];
};
