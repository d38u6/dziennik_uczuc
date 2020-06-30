import React from "react";
import PropTypes from "prop-types";
import classes from "./Error.module.css";
import Row from "../../PaperCSS/Layout/Row/Row";
import Col from "../../PaperCSS/Layout/Col/Col";
import Icon from "../../UI/Icon/Icon";

const Error = ({ msg }) => (
  <div className={classes.ErrorWrapper}>
    <Row paper>
      <Col>
        <div className={classes.Error}>
          <h1>
            <Icon iconName="MdError" />
            Błąd
          </h1>
          <p>{msg || "Coś poszło nie tak! Spróbuj ponownie za chwile"}</p>
        </div>
      </Col>
    </Row>
  </div>
);

Error.propTypes = {
  msg: PropTypes.string,
};

export default Error;
