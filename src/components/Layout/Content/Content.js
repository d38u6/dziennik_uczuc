import React from "react";

import Row from "../../PaperCSS/Layout/Row/Row";
import Col from "../../PaperCSS/Layout/Col/Col";

import classes from "./Content.module.css";

const Content = ({ children }) => (
  <div className={classes.Content}>
    <Row>
      <Col size={{ screenSize: "Col", colSize: 12 }}>{children}</Col>
    </Row>
  </div>
);

export default Content;
