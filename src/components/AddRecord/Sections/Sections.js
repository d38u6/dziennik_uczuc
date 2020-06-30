import React from "react";
import PropTypes from "prop-types";

import Row from "../../PaperCSS/Layout/Row/Row";
import SectionContainer from "../../../containers/AddRecord/SectionContainer/SectionContainer";

const Sections = ({ sections }) => (
  <Row paper>
    {sections.map((section) => (
      <SectionContainer key={section.id} {...section} />
    ))}
  </Row>
);

Sections.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      btnCaption: PropTypes.string.isRequired,
      icon: PropTypes.string,
      desc: PropTypes.string,
    })
  ).isRequired,
};

export default Sections;
