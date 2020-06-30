import React from "react";
import { mount } from "enzyme";

import ColorValues, { renderValue } from "./ColorValues";
import { valuesData } from "../../../data/fixtuers";

describe("ColorValues component", () => {
  const props = { values: valuesData };
  const colorValues = mount(<ColorValues {...props} />);

  it("renders correct number of `span element`", () => {
    expect(colorValues.find("span").length).toEqual(props.values.length);
  });

  props.values.forEach((value, i, array) => {
    it("should contain `value` depending on the `values prop`", () => {
      expect(colorValues.contains(renderValue(value, i, array))).toBe(true);
    });
  });

  it("should not renders any `span element` when `values prop` is empty array", () => {
    const colorValues = mount(<ColorValues values={[]} />);
    expect(colorValues.find("span").length).toEqual(0);
  });
});
