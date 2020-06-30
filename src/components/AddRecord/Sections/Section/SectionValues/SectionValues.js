import React from "react";
import PropTypes from "prop-types";

import ColorValues from "../../../../UI/ColorValues/ColorValues";
import classes from "./SectionValues.module.css";

const SectionValues = ({ values }) => (
  <p className={classes.SectionValues}>
    <ColorValues values={values} />
  </p>
);

SectionValues.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      color: PropTypes.string,
    })
  ).isRequired,
};

export default SectionValues;
