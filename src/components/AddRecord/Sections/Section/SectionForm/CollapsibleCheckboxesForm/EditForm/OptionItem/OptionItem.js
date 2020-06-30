import React from "react";
import PropTypes from "prop-types";
import classes from "./OptionItem.module.css";
import Icon from "../../../../../../../UI/Icon/Icon";

const OptionItem = ({ value, onRemove }) => (
  <div className={classes.OptionItem}>
    <span>{value}</span>
    <span className={classes.Icon} onClick={onRemove}>
      <Icon iconName="FaTrash" />
    </span>
  </div>
);

OptionItem.propTypes = {
  value: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default OptionItem;
