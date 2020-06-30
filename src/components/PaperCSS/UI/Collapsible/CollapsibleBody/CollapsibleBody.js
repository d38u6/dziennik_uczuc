import React from "react";
import PropTypes from "prop-types";

import classes from "./CollapsibleBody.module.css";

const CollapsibleBody = ({ show, children }) => (
  <div className={[classes.CollapsibleBody, show ? classes.Show : null].join(" ")}>
    {children}
  </div>
);

CollapsibleBody.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default CollapsibleBody;
