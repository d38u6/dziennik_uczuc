import React from "react";
import PropTypes from "prop-types";
import classes from "./Footer.module.css";
import Icon from "../../../../UI/Icon/Icon";

export const getTimeFromUnixDate = (date) =>
  new Date(date).toLocaleTimeString().match(/[0-9]*:[0-9]*/)[0];

const Footer = ({ date, remove }) => (
  <div className={classes.Footer}>
    <span className={classes.Time}>{getTimeFromUnixDate(date)}</span>
    <div className={classes.Remove}>
      <Icon iconName={"FaTrash"} />
      <span onClick={remove}>Usuń wpis</span>
    </div>
  </div>
);

Footer.propTypes = {
  date: PropTypes.number,
  remove: PropTypes.func,
};

export default Footer;
