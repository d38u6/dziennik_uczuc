import React from "react";
import PropTypes from "prop-types";

import classes from "./Checkbox.module.css";

const Checkbox = ({ id, caption, checked, disabled, onChange }) => (
  <label htmlFor={id} className={classes.Checkbox}>
    <input
      type="checkbox"
      id={id}
      name={id}
      onChange={onChange}
      disabled={disabled}
    />
    <span className={checked ? classes.Checked : null}>{caption}</span>
  </label>
);

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  caption: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Checkbox;
