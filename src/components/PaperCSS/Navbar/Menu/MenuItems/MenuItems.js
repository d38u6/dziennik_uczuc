import React from "react";
import PropTypes from "prop-types";

import classes from "./MenuItems.module.css";

const MenuItems = ({ id, open, children }) => (
  <div
    className={[classes.MenuItems, open ? classes.Open : null].join(" ")}
    id={id + "-items"}
  >
    <ul>{children}</ul>
  </div>
);

MenuItems.propTypes = {
  id: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
};

export default MenuItems;
