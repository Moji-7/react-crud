import React, { useState } from "react";
import PropTypes from "prop-types";

function CounterButton(props) {
  const myStyle = { fontSize: "50px" };
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + props.by);
    props.counterIncriment(props.by);
  };
  const decrement = () => {
    setCounter(counter - props.by);
    props.counterDecrement(props.by);
  };

  return (
    <>
      <button style={myStyle} onClick={increment}>
        +
      </button>
      <button style={myStyle} onClick={decrement}>
        -
      </button>
      {counter}
    </>
  );
}

CounterButton.propTypes = {};

export default CounterButton;
