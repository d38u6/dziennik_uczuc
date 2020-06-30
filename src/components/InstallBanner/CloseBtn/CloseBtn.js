import React from "react";
import PropTypes from "prop-types";

import classes from "./CloseBtn.module.css";
import Row from "../../PaperCSS/Layout/Row/Row";

const CloseBtn = ({ onClick }) => (
  <Row>
    <span className={classes.CloseBtn} onClick={onClick}>
      X
    </span>
  </Row>
);

CloseBtn.propTypes = {
  onClick: PropTypes.func,
};

export default CloseBtn;
