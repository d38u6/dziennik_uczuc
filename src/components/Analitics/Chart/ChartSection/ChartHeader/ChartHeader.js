import React from "react";
import PropTypes from "prop-types";
import Row from "../../../../PaperCSS/Layout/Row/Row";
import classes from "./ChartHeader.module.css";

const ChartHeader = ({ title, children }) => (
  <Row>
    <div className={classes.ChartHeader}>
      <h4>{title}</h4>
      {children}
    </div>
  </Row>
);
ChartHeader.propTypes = {
  title: PropTypes.string,
};

export default ChartHeader;
