import React, { useEffect, useState } from "react";
import "./style.css";
export const MyDropdown = () => {
  const items = ["movies", "sport"];
  const options = items.map((item) => {
    return (
      <option key={item} value={item}>
        {item}
      </option>
    );
  });

  const [optionSelected, setOptionSelected] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOptionSelected(value);
  };

  useEffect(() => {
    getValues();
  }, [optionSelected]);
  const [optionValues, setOptionValues] = useState();

  const getValues = () => {
    const result = ["aa", "foo", "zoo"];
    setOptionValues(result);
  };

  return (
    <>
      <div>salam</div>
      <select onChange={(e) => handleChange(e)}>{options}</select>
      <hr />
      this is options onChange
      <ul>
        {optionValues &&
          optionValues.map((x) => (
            <li
              key={x}
              className={"rand" + (Math.floor(Math.random() * 3) + 1)}
            >
              {x}
              {Math.floor(Math.random() * 3) + 1}
            </li>
          ))}
      </ul>
      <hr />
      this is selection: {optionSelected}
      <hr />
      <hr />
      <input onChange={handleChange} />
    </>
  );
};
