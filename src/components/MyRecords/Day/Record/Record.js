import React from "react";
import PropTypes from "prop-types";
import classes from "./Record.module.css";

import RecordSection from "./RecordSection/RecordSection";
import Footer from "./Footer/Footer";

const Record = ({ date, sections, remove }) => (
  <div className={classes.Record}>
    {sections.map((section) =>
      section.values.length > 0 ? (
        <RecordSection key={section.icon} {...section} />
      ) : null
    )}
    <Footer date={date} remove={remove} />
  </div>
);

Record.propTypes = {
  id: PropTypes.string,
  date: PropTypes.number.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      values: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired,
          color: PropTypes.string,
        })
      ),
    })
  ).isRequired,
  remove: PropTypes.func.isRequired,
};

export default Record;
