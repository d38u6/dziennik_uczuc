import React from "react";
import classes from "./Form.module.css";

const Form = ({ children }) => (
  <fieldset className={classes.Form}>{children}</fieldset>
);

export default Form;
