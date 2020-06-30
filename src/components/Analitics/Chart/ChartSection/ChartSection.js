import React from "react";
import Row from "../../../PaperCSS/Layout/Row/Row";
import Col from "../../../PaperCSS/Layout/Col/Col";
import classes from "./ChartSection.module.css";

const ChartSection = ({ children }) => (
  <Row paper>
    <Col className={classes.ChartSection}>{children}</Col>
  </Row>
);

export default ChartSection;
