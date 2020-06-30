import React from "react";
import PropTypes from "prop-types";

import Button from "../../PaperCSS/Button/Button";
import Icon from "../../UI/Icon/Icon";
import FileButton from "../../PaperCSS/FileButton/FileButton";

const OptionButton = ({ capiton, icon, fileButton, ...props }) => {
  const ChosenButton = fileButton ? FileButton : Button;
  return (
    <ChosenButton {...props}>
      <Icon iconName={icon} /> <span>{capiton}</span>
    </ChosenButton>
  );
};

OptionButton.propTypes = {
  capiton: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.oneOf(["Primary", "Secondary", "Success", "Warning", "Danger"]),
  fileButton: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

export default OptionButton;
