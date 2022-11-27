import React, { createContext, useState } from "react";
import { CalcResult } from "./CalcResult";

export const calculatorContext = createContext();
export const Calculator = () => {
  const counts = [...Array(10).keys()].slice(0);
  const options = counts.map((number) => (
    <option key={number} value={number}>
      {number}
    </option>
  ));

  //let numbers = { number1: 0, number2: 0 };
  let initNumbers = [
    { name: "number1", value: 0 },
    { name: "number2", value: 0 },
  ];
  let initNumbers2 = { number1: 0, number2: 0, operator: "+" };
  const [calculatorState, setCalcState] = useState(initNumbers2);
  const handleSelectNumber = (e) => {
    const { name, value } = e.target;
    // const updated = { name: name, value: value };
    // const _new = numbers.map((x) => (x.name === name ? updated : x));
    setCalcState((prev) => {
      return { ...prev, [name]: value };
    });
  };

  //operators
  const operators = ["+", "-", "*", "/"].map((x, index) => (
    <option key={index} value={x}>
      {x}
    </option>
  ));
  //const [operator, setOperator] = useState();
  const handleOperator = (e) => {
    setCalcState((prev) => {
      return { ...prev, operator: e.target.value };
    });
  };

  // context
  const contextValue = { calculatorState };
  return (
    <div>
      <select
        name="number1"
        onClick={(e) => handleSelectNumber(e)}
        className="score"
      >
        {options}
      </select>

      <select className="score" onClick={(e) => handleOperator(e)}>
        {operators}
      </select>
      <select
        name="number2"
        onClick={(e) => handleSelectNumber(e)}
        className="score"
      >
        {options}
      </select>
      <hr />
      <b>
        in father the number is:
        {calculatorState.number1},{calculatorState.operator},
        {calculatorState.number2}
        {/* {numbers.map((x) => x.value)} */}
      </b>
      <calculatorContext.Provider value={contextValue}>
        <CalcResult />
      </calculatorContext.Provider>
    </div>
  );
};
