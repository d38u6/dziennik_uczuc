import React from "react";
import PropTypes from "prop-types";

import classes from "./Row.module.css";

const Row = ({ position, paper, className, children }) => (
  <div
    className={[
      classes.Row,
      classes[position],
      paper ? classes.Paper : null,
      className,
    ].join(" ")}
  >
    {children}
  </div>
);

Row.propTypes = {
  position: PropTypes.oneOf([
    "Right",
    "Center",
    "Edges",
    "Spaces",
    "Top",
    "Middle",
    "Bottom",
  ]),
  paper: PropTypes.bool,
  className: PropTypes.string,
};

export default Row;
