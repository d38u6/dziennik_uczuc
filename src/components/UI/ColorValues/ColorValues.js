import React from "react";
import PropTypes from "prop-types";

function firstLetterToUpperCase(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export function renderValue({ id, color, value }, i, { length }) {
  return value ? (
    <span key={id} style={{ color: color || "#41403e" }}>
      {value && i + 1 < length
        ? `${i === 0 ? firstLetterToUpperCase(value) : value}, `
        : `${i === 0 ? firstLetterToUpperCase(value) : value}.`}
    </span>
  ) : null;
}

const ColorValues = ({ values }) => <>{values.map(renderValue)}</>;

ColorValues.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      color: PropTypes.string,
    })
  ).isRequired,
};

export default ColorValues;
