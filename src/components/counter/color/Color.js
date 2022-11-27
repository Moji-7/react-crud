import React from "react";
import PropTypes from "prop-types";

const Color = (props) => {
  const style = { backgroundColor: props.color };
  return (
    <>
      <span style={style}>{props.color}</span>
    </>
  );
};

Color.propTypes = {};

export default Color;
