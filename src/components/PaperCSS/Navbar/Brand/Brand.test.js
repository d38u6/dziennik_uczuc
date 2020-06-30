import React from "react";
import { mount } from "enzyme";

import Brand from "./Brand";

describe("Brand component", () => {
  const brand = mount(<Brand />);

  it("renders `div element` with `Brand class", () => {
    expect(brand.find("div").hasClass("Brand")).toBe(true);
  });

  it("renders `h3 element`", () => {
    expect(brand.find("h3").exists()).toBe(true);
  });
});
