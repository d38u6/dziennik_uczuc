import React, { Fragment, useRef } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import classes from "./FileButton.module.css";

const FileButton = (props) => {
  const { onChange, ...rest } = props;
  const fileInput = useRef(null);
  return (
    <Fragment>
      <input
        className={classes.FileInput}
        type="file"
        ref={fileInput}
        onChange={onChange}
      />
      <Button {...rest} onClick={() => fileInput.current.click()}>
        {props.children}
      </Button>
    </Fragment>
  );
};
FileButton.propTypes = {
  size: PropTypes.oneOf(["Large", "Small"]),
  type: PropTypes.oneOf(["Primary", "Secondary", "Success", "Warning", "Danger"]),
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default FileButton;
