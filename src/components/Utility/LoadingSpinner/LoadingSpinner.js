import React from "react";
import Row from "../../PaperCSS/Layout/Row/Row";
import Col from "../../PaperCSS/Layout/Col/Col";
import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => (
  <div className={classes.SpinnerWrapper}>
    <Row paper>
      <Col>
        <div className={classes.LdsGrid}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Col>
    </Row>
  </div>
);

export default LoadingSpinner;
