import React, { useContext, useState } from "react";
import { ColorContext } from "./Colors";

const Grids = () => {
  const boxCount = 3;
  const grids = [];

  const { colors, activeColor, setActiveColor } = useContext(ColorContext);
  const [boxColor, setBoxColor] = useState();
  const handleClick = (e) => {
    e.preventDefault();
    setBoxColor(activeColor);
  };
  const makeTds = (i) => {
    let tds = [];
    for (let j = 0; j < boxCount; j++) {
      tds.push(
        <td>
          <div className="box" onClick={handleClick} key={i + "_" + j}></div>
        </td>
      );
    }
    return tds;
  };

  for (let i = 0; i < boxCount; i++) {
    let thisTd = makeTds(i);
    grids.push(
      <tr key={i}>
        <td
          className="box"
          onClick={(e) => handleClick(e)}
          style={{ backgroundColor: boxColor }}
        ></td>
      </tr>
    );
  }

  return (
    <>
      Grids
      <table>{grids}</table>
      activecolor is : {activeColor}
    </>
  );
};

export default Grids;
