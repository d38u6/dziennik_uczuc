import React from "react";
import Row from "../../PaperCSS/Layout/Row/Row";
import classes from "./InstallContent.module.css";

const InstallContent = () => (
  <Row className={classes.InstallContentWrapper}>
    <span className={classes.InstallContent}>
      Zainstaluj aplikacje, aby mieć do niej dostęp nawet bez internetu.
    </span>
  </Row>
);

export default InstallContent;
