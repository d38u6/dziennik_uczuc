import React from "react";
import PropTypes from "prop-types";
import classes from "./InstallBtn.module.css";
import Icon from "../../UI/Icon/Icon";
import Row from "../../PaperCSS/Layout/Row/Row";

const InstallBtn = ({ onClick }) => (
  <Row className={classes.InstallBtnWrapper}>
    <button onClick={onClick} className={classes.InstallBtn}>
      <Icon iconName="GiBlackBook" />
      <span>Zainstaluj</span>
    </button>
  </Row>
);

InstallBtn.propTypes = {
  onClick: PropTypes.func,
};

export default InstallBtn;
