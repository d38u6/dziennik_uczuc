import React from "react";
import classes from "./Brand.module.css";

const Brand = ({ children }) => (
  <div className={classes.Brand}>
    <h3>{children}</h3>
  </div>
);

export default Brand;
