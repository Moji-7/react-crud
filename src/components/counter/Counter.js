import React, { useState } from "react";

import CounterButton from "./CounterButton";

function Counter(props) {
  const [counter, setCounter] = useState(0);
  
  const increment = (by) => {
    setCounter((prev) => prev + by);
  };
  
  const decrement = (by) => {
    setCounter((prev) => prev - by);
  };
  
  const handleReset = () => {
    setCounter(0);
  };
  return (
    <>
      <CounterButton
        by={1}
        counterIncriment={increment}
        counterDecrement={decrement}
      />
      <CounterButton
        by={5}
        counterIncriment={increment}
        counterDecrement={decrement}
      />
      <CounterButton
        by={10}
        counterIncriment={increment}
        counterDecrement={decrement}
      />
      <div>*******</div>
      <span>{counter}</span>
      <div>*******</div>
      <button onClick={handleReset}>reset</button>
    </>
  );
}

export default Counter;
