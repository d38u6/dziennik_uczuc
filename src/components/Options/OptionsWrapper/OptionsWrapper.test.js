import React from "react";
import { mount } from "enzyme";

import OptionsWrapper from "./OptionsWrapper";

describe("OptionsWrapper component", () => {
  const props = { title: "Example Title" };
  const optionsWrapper = mount(<OptionsWrapper {...props} />);

  it("renders `Row` componet", () => {
    expect(optionsWrapper.find("Row").exists()).toBe(true);
  });

  it("renders `Col` componet with correct `class name`", () => {
    expect(optionsWrapper.find("Col").hasClass("OptionsWrapper")).toBe(true);
  });

  it("renders `title` in `h3` element", () => {
    expect(optionsWrapper.find("h3").text()).toEqual(props.title);
  });
});
