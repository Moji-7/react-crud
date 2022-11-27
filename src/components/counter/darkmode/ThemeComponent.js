import { useState } from "react";

export const ThemeComponent = (props) => {
  const [mode, setMode] = useState();
  const sendData = (modee) => {
    setMode(modee);
    props.stateChanger(modee);
  };
  return (
    <>
      <button onClick={() => sendData("dark")}>dark</button>
      <button onClick={() => sendData("light")}>light</button>
      <span>my mode: {mode}</span>
    </>
  );
};
