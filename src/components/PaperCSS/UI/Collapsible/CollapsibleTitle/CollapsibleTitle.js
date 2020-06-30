import React from "react";
import PropTypes from "prop-types";

import classes from "./CollapsibleTitle.module.css";
import Icon from "../../../../UI/Icon/Icon";

const CollapsibleTitle = ({ title, open, onClick }) => {
  return (
    <span className={classes.CollapsibleTitle} onClick={onClick}>
      {title}
      <Icon iconName={open ? "IoIosArrowUp" : "IoIosArrowDown"} />
    </span>
  );
};

CollapsibleTitle.propTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

export default CollapsibleTitle;
