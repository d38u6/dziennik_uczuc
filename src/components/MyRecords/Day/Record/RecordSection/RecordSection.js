import React from "react";
import PropTypes from "prop-types";
import classes from "./RecordSection.module.css";

import Icon from "../../../../UI/Icon/Icon";
import ColorValues from "../../../../UI/ColorValues/ColorValues";

const RecordSection = ({ icon, values }) => (
  <span className={classes.RecordSection}>
    <Icon iconName={icon} />
    <ColorValues values={values} />
  </span>
);

RecordSection.propTypes = {
  icon: PropTypes.string,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string,
      color: PropTypes.string,
    })
  ),
};

export default RecordSection;
