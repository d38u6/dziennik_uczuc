import React from "react";

import Col from "../../../PaperCSS/Layout/Col/Col";

const Section = ({ children }) => (
  <Col size={{ screenSize: "Sm", colSize: 3 }}>{children}</Col>
);

export default Section;
