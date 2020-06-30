import React from "react";
import PropTypes from "prop-types";

import classes from "./Collapsible.module.css";

import CollapsibleTitle from "./CollapsibleTitle/CollapsibleTitle";
import CollapsibleBody from "./CollapsibleBody/CollapsibleBody";

const Collapsible = ({ title, open, onToggleOpen, children }) => {
  return (
    <div className={classes.Collapsible}>
      <CollapsibleTitle title={title} open={open} onClick={onToggleOpen} />
      <CollapsibleBody show={open}>{children}</CollapsibleBody>
    </div>
  );
};

Collapsible.propTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.bool,
  onToggleOpen: PropTypes.func,
};

export default Collapsible;
