import React from "react";
import classes from "./ModalBody.module.css";

const ModalBody = ({ children }) => (
  <div className={classes.ModalBody}>{children}</div>
);

export default ModalBody;
