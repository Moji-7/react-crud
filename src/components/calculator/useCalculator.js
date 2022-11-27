import { useEffect, useState } from "react";

export const useCalculator = (num1, num2, opr) => {
  const [result, setResult] = useState();
  const calcFunction = (num1, num2, opr) => {
   //console.log(num1 + "" + num2 + "" + opr);
    let result = 0;
    switch (opr) {
      case "+":
        result = parseInt(num1) + parseInt(num2);
        break;
      case "-":
        result = parseInt(num1) - parseInt(num2);
        break;
      case "*":
        result = parseInt(num1) * parseInt(num2);
        break;
      case "/":
        result = parseInt(num1) / parseInt(num2);
        break;
      default:
        result = 0;
        break;
    }
    return result;
  };

  useEffect(() => {
    let res = calcFunction(num1, num2, opr);
    setResult(res);
  }, [num1, num2, opr]);

  return result;
};
