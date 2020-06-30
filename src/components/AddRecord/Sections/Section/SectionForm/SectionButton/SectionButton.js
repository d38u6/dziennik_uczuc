import React from "react";
import PropTypes from "prop-types";

import Button from "../../../../../PaperCSS/Button/Button";
import classes from "./SectionButton.module.css";
import Icon from "../../../../../UI/Icon/Icon";

const SectionButton = ({ caption, icon, onClick }) => (
  <div className={classes.SectionButton}>
    <Button block type="Secondary" onClick={onClick}>
      <Icon iconName={icon} />
      <span>{caption}</span>
    </Button>
  </div>
);

SectionButton.propTypes = {
  caption: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};

export default SectionButton;
