import React from "react";
import { shallow } from "enzyme";

import SectionButton from "./SectionButton";

let clicked;
const props = {
  caption: "test button",
  icon: "icon",
  onClick: () => (clicked = true),
};

describe("SectionButton Component", () => {
  const sectionButton = shallow(<SectionButton {...props} />);

  it("renders `div` element with correct `class name`", () => {
    expect(sectionButton.find("div").hasClass("SectionButton")).toBe(true);
  });

  it("renders `Button` component", () => {
    expect(sectionButton.find("Button").exists()).toBe(true);
  });

  it("renders correct `caption` in `Button` component", () => {
    expect(sectionButton.find("Button span").text()).toEqual(props.caption);
  });

  it("renders `Icon` component", () => {
    expect(sectionButton.find("Icon").exists()).toBe(true);
  });

  it("Should call onClick callback on `Button` click", () => {
    clicked = false;
    sectionButton.find("Button").simulate("click");
    expect(clicked).toBe(true);
  });
});
