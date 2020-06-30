import React from "react";
import Row from "../../../../PaperCSS/Layout/Row/Row";
import Col from "../../../../PaperCSS/Layout/Col/Col";
import classes from "./ChartBody.module.css";

const ChartBody = ({ children }) => (
  <Row position="Center">
    <Col
      size={[
        { screenSize: "Sm", colSize: 12 },
        { screenSize: "Md", colSize: 10 },
        { screenSize: "Lg", colSize: 8 },
      ]}
      className={classes.Col}
    >
      {children}
    </Col>
  </Row>
);

export default ChartBody;
