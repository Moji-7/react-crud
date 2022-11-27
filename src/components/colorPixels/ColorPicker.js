import React, { useContext, useState } from "react";
import { ColorContext } from "./Colors";

export const ColorPicker = () => {
  let { colors, activeColor, setActiveColor } = useContext(ColorContext);

  const boxes = [];
  colors.forEach((element) => {
    boxes.push(
      <button
        onClick={(e) => handleClick(e, element)}
        className={element}
        key={element}
      >
        {element}
      </button>
    );
    const handleClick = (e, elem) => {
      e.preventDefault();
      setActiveColor(elem);
    };
  });

  return (
    <>
      color Color
      <div className="box">{boxes}</div>
      active color is {activeColor}
    </>
  );
};
