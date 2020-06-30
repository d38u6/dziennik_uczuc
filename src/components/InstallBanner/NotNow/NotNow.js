import React from "react";
import PropTypes from "prop-types";
import Row from "../../PaperCSS/Layout/Row/Row";
import classes from "./NotNow.module.css";

const NotNow = ({ onClick }) => (
  <Row className={classes.NotNowWrapper}>
    <span className={classes.NotNow} onClick={onClick}>
      Nie teraz
    </span>
  </Row>
);

NotNow.propTypes = {
  onClick: PropTypes.func,
};

export default NotNow;
