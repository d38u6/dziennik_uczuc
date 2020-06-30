import React from "react";
import PropTypes from "prop-types";

import classes from "./MenuButton.module.css";

import Button from "../../../Button/Button";

const MenuButton = ({ id, open }) => (
  <Button>
    <label
      htmlFor={id}
      className={[classes.MenuButton, open ? classes.Open : null].join(" ")}
    >
      <div className={classes.Bar1}></div>
      <div className={classes.Bar2}></div>
      <div className={classes.Bar3}></div>
    </label>
  </Button>
);

MenuButton.propTypes = {
  id: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
};

export default MenuButton;
