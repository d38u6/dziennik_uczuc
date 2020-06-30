import React from "react";
import PropTypes from "prop-types";

import Button from "../../../../../../../PaperCSS/Button/Button";
import Icon from "../../../../../../../UI/Icon/Icon";
import classes from "./AddButton.module.css";

const AddButton = ({ onAdd }) => (
  <div className={classes.AddButton}>
    <Button block size="Small" type="Success" onClick={onAdd}>
      <Icon iconName="FaPlusCircle" />
      DODAJ
    </Button>
  </div>
);

AddButton.propTypes = {
  onAdd: PropTypes.func,
};

export default AddButton;
