import React from "react";
import PropTypes from "prop-types";

import Button from "../../../../../../../PaperCSS/Button/Button";
import Icon from "../../../../../../../UI/Icon/Icon";

const EditButton = ({ onClick }) => (
  <Button block size="Small" onClick={onClick}>
    <Icon iconName="FaEdit" />
    Edytuj
  </Button>
);

EditButton.propTypes = {
  onClick: PropTypes.func,
};

export default EditButton;
