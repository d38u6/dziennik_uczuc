import React from "react";
import PropTypes from "prop-types";
import classes from "./DateHeader.module.css";

const DateHeader = ({ date }) => (
  <div className={classes.DateHeader}>
    <span className={classes.Date}>{date}</span>
  </div>
);

DateHeader.propTypes = {
  date: PropTypes.string,
};

export default DateHeader;
