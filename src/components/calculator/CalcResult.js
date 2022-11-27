import React, { useContext, useEffect, useReducer, useState } from "react";
import { calculatorContext } from "./Calculator";
import { useCalculator } from "./useCalculator";
import { useMyReducer } from "./useCalculatorReducer";

export const CalcResult = () => {
  //get context
  const { calculatorState } = useContext(calculatorContext);
  //calc Result state ==> useCustom hook
  let result = useCalculator(
    calculatorState.number1,
    calculatorState.number2,
    calculatorState.operator
  );
  //method 3
 
  const [calcState, dispach] = useMyReducer();
  //   const [rr, dispatch] = useReducer(reducer, initState);
  useEffect(() => {

    dispach({
      type: calculatorState.operator,
    });
  }, [calculatorState.operator]);
  return (
    <div>
      operator is {calculatorState.operator} and in child result is : {result}
      <div>result2: {calcState.result}</div>
    </div>
  );
};
