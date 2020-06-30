import React from "react";
import PropTypes from "prop-types";
import classes from "./TabsItem.module.css";

const TabsItem = ({ caption, active, onClick }) => (
  <label
    className={[classes.TabsItem, active ? classes.Active : ""].join(" ")}
    onClick={onClick}
  >
    {caption}
  </label>
);

TabsItem.propTypes = {
  caption: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default TabsItem;
