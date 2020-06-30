import React from "react";
import PropTypes from "prop-types";
import classes from "./ModalTitle.module.css";

const ModalTitle = ({ title }) => <h4 className={classes.ModalTitle}>{title}</h4>;

ModalTitle.propTypes = {
  title: PropTypes.string,
};

export default ModalTitle;
