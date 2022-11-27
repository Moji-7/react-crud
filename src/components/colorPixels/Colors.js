import React, { createContext, useState } from "react";
import { ColorPicker } from "./ColorPicker";
import "./colors.css";
import Grids from "./Grids";
export const ColorContext = createContext();

const Colors = () => {
  const colors = ["red", "green", "blue"];
  const [activeColor, setActiveColor] = useState("");
  const value = { colors, activeColor, setActiveColor };
  //   const handleActiveColor = (activeColor) => {
  //     setActiveColor(activeColor);
  //   };

  return (
    <ColorContext.Provider value={value}>
      Colors
      <ColorPicker />
      <hr/>
      {/* color={handleActiveColor}  */}
      <Grids />
    </ColorContext.Provider>
  );
};

export default Colors;
