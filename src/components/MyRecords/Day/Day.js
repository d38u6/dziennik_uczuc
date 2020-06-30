import React from "react";
import PropTypes from "prop-types";

import Row from "../../PaperCSS/Layout/Row/Row";
import Col from "../../PaperCSS/Layout/Col/Col";
import classes from "./Day.module.css";
import DateHeader from "./DateHeader/DateHeader";

const Day = ({ date, children }) => (
  <Row paper className={classes.Day}>
    <Col>
      <DateHeader date={date} />
      {children}
    </Col>
  </Row>
);

Day.propTypes = {
  dateString: PropTypes.string,
};

export default Day;
