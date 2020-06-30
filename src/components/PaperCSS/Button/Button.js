import React from "react";
import PropTypes from "prop-types";

import classes from "./Button.module.css";

const Button = ({ size, type, block, disabled, onClick, children }) => (
  <button
    className={[
      classes.Button,
      block ? classes.Block : null,
      classes[size],
      classes[type],
    ].join(" ")}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  size: PropTypes.oneOf(["Large", "Small"]),
  type: PropTypes.oneOf(["Primary", "Secondary", "Success", "Warning", "Danger"]),
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
