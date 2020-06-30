import React from "react";
import PropTypes from "prop-types";

import Button from "../../PaperCSS/Button/Button";
import classes from "./PaginationControls.module.css";

const PaginationControls = ({ onPrev, onNext, allowPrev, allowNext }) => (
  <div className={classes.PaginationControls}>
    <Button type="Secondary" disabled={!allowPrev} onClick={onPrev}>
      {"< Poprzednie"}
    </Button>
    <Button type="Secondary" disabled={!allowNext} onClick={onNext}>
      {"Następne >"}
    </Button>
  </div>
);

PaginationControls.propTypes = {
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  allowPrev: PropTypes.bool.isRequired,
  allowNext: PropTypes.bool.isRequired,
};

export default PaginationControls;
