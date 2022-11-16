import React, { useState } from "react";
import PropTypes from "prop-types";

const RadioList = (props) => {
  const _options = ["male", "female"];
  const [gender, setGender] = useState("");
  const handleChange = (e) => {
    setGender(e.target.value);
  };
  return (
    <>
      <div>RadioList</div>
      {_options.map((item, index) => (
        <div key={index}>
          <input type="radio" value={item} checked={gender===item} onChange={(e) => handleChange(e)} />
          {item}
        </div>
      ))}
      <br />
      {`your gender:${gender}`}
    </>
  );
};

RadioList.propTypes = {};

export default RadioList;
