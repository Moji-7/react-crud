import React from "react";
import Color from "./Color";

export const ColorRenderer = () => {
  const colors = ["red", "green", "blue"];
  return (
    <>
      {colors.map((x, index) => (
        <div key={index}>
          
          <Color key={x} color={x} />
        </div>
      ))}
    </>
  );
};
