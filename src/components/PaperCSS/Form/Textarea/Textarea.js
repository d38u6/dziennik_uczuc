import React from "react";
import PropTypes from "prop-types";
import classes from "./Textarea.module.css";

const Textarea = ({ placeholder, value, onChange }) => (
  <div className={classes.Textarea}>
    <textarea placeholder={placeholder} value={value} onChange={onChange} />
  </div>
);

Textarea.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Textarea;
