import React from "react";
import PropTypes from "prop-types";

import classes from "./CloseButton.module.css";

const CloseButton = ({ onClick }) => (
  <div className={classes.CloseButton} onClick={onClick}>
    X
  </div>
);

CloseButton.propTypes = {
  onClick: PropTypes.func,
};

export default CloseButton;
