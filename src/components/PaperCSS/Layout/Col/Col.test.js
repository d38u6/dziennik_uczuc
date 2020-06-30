import React from "react";
import { mount } from "enzyme";

import Col, { sizeToClassName } from "./Col";

describe("Col component", () => {
  const props = {
    size: { screenSize: "Md", colSize: 12 },
    display: "Align-top",
    fill: false,
    className: "classname",
  };
  const col = mount(<Col {...props} />);

  it("renders `div element` with `Col class`", () => {
    expect(col.find("div").hasClass("Col")).toBe(true);
  });

  it("should `contain class` depending on the `size prop`", () => {
    expect(col.find("div").hasClass(sizeToClassName(props.size))).toBe(
      true && !props.fill
    );
  });

  it("should `contain class` depending on the `array size prop`", () => {
    let size = [
      { screenSize: "Md", colSize: 12 },
      { screenSize: "Xs", colSize: 12 },
    ];
    let col = mount(<Col {...props} size={size} />);
    size.forEach((s) =>
      expect(col.find("div").hasClass(sizeToClassName(s))).toBe(true && !props.fill)
    );
  });

  it("should `contain class` depending on the `fill prop`", () => {
    expect(col.find("div").hasClass("Col-fill")).toBe(props.fill);
  });

  it("should `contain class` depending on the `display prop`", () => {
    expect(col.find("div").hasClass(props.display)).toBe(true);
  });
});
