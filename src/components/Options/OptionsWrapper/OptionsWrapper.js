import React from "react";
import PropTypes from "prop-types";

import Row from "../../PaperCSS/Layout/Row/Row";
import Col from "../../PaperCSS/Layout/Col/Col";
import classes from "./OptionsWrapper.module.css";

const OptionsWrapper = ({ title, children }) => (
  <Row paper>
    <Col className={classes.OptionsWrapper}>
      <h3>{title}</h3>
      {children}
    </Col>
  </Row>
);

OptionsWrapper.propTypes = {
  title: PropTypes.string.isRequired,
};

export default OptionsWrapper;
