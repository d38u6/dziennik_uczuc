import React from "react";
import Row from "../../PaperCSS/Layout/Row/Row";
import { Link } from "react-router-dom";
import classes from "./NoData.module.css";

import Icon from "../../UI/Icon/Icon";
import AddRecordButton from "../../AddRecord/AddRecordButton/AddRecordButton";
import Col from "../../PaperCSS/Layout/Col/Col";

const NoData = () => (
  <Row paper className={classes.NoData}>
    <Col>
      <h1>
        <Icon iconName="GiBlackBook" />
        <span>Brak danych</span>
      </h1>
      <p>
        W Twoim dzienniku nie ma jeszcze żadnego wpisu, dodaj swój pierwszy wpis do
        dziennika
      </p>
      <Link to="/dodaj-wpis">
        <AddRecordButton />
      </Link>
    </Col>
  </Row>
);

export default NoData;
