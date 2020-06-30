import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import classes from "./Col.module.css";

export const sizeToClassName = (size) =>
  `${size.screenSize || "Col"}-${size.colSize}`;

const Col = ({
  size = { screenSize: "Col", colSize: 12 },
  display,
  fill,
  className,
  children,
}) => {
  let sizeClasses;
  if (_.isArray(size)) {
    sizeClasses = size.map((size) => classes[sizeToClassName(size)]).join(" ");
  } else {
    sizeClasses = classes[sizeToClassName(size)];
  }

  return (
    <div
      className={[
        fill ? classes["Col-fill"] : sizeClasses,
        classes.Col,
        classes[display],
        className || "",
      ].join(" ")}
    >
      {children}
    </div>
  );
};

const sizeType = PropTypes.shape({
  screenSize: PropTypes.oneOf(["Xs", "Sm", "Md", "Lg", "Col"]),
  colSize: function (props, name, cmpName) {
    if (props[name] < 1 || props[name] > 12) {
      return new Error(
        "Invalid prop `" +
          name +
          "` supplied to" +
          " `" +
          cmpName +
          "`. Validation failed."
      );
    }
  },
});

Col.propTypes = {
  size: PropTypes.oneOfType([sizeType, PropTypes.arrayOf(sizeType)]),
  display: PropTypes.oneOf(["Align-top", "Align-middle", "Align-bottom "]),
  fill: PropTypes.bool,
  className: PropTypes.string,
};

export default Col;
