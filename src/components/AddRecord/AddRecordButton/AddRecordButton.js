import React from "react";
import PropTypes from "prop-types";

import Row from "../../PaperCSS/Layout/Row/Row";
import Col from "../../PaperCSS/Layout/Col/Col";
import Button from "../../PaperCSS/Button/Button";
import Icon from "../../UI/Icon/Icon";

const AddRecordButton = ({ onClick }) => (
  <Row position="Center">
    <Col size={{ screenSize: "Sm", colSize: 4 }}>
      <Button block type="Success" onClick={onClick}>
        <Icon iconName="FaPlusCircle" />
        DODAJ WPIS
      </Button>
    </Col>
  </Row>
);

AddRecordButton.propTypes = {
  onClick: PropTypes.func,
};

export default AddRecordButton;
