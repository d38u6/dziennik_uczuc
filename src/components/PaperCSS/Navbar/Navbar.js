import React from "react";
import PropTypes from "prop-types";

import classes from "./Navbar.module.css";
import styles from "../Utility.module.css";

const Navbar = ({ split, fixed, children }) => (
  <nav
    className={[
      classes.Nav,
      styles.Border,
      split ? classes.Split : null,
      fixed ? classes.Fixed : null,
    ].join(" ")}
  >
    {children}
  </nav>
);

Navbar.propTypes = {
  split: PropTypes.bool,
  fixed: PropTypes.bool,
};

export default Navbar;
