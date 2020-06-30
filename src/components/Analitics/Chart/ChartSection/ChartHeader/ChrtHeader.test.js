import React from "react";
import { mount } from "enzyme";

import ChartHeader from "./ChartHeader";

const props = { title: "Example Title" };

describe("ChartHeader component", () => {
  const chartHeader = mount(<ChartHeader {...props} />);

  it("renders `Row` component", () => {
    expect(chartHeader.find("Row").exists()).toBe(true);
  });

  it("renders `div` element with correct `class name`", () => {
    expect(chartHeader.find(".Row > div").hasClass("ChartHeader")).toBe(true);
  });

  it("renders `h4` element with correct `Title`", () => {
    expect(chartHeader.find("h4").text()).toEqual(props.title);
  });
});
