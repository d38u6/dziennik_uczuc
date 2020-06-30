import React from "react";
import { mount } from "enzyme";

import ChartBody from "./ChartBody";

describe("ChartBody component", () => {
  const chartBody = mount(<ChartBody />);

  it("renders `Row` component", () => {
    expect(chartBody.find("Row").exists()).toBe(true);
  });

  it("renders `Col` component with correct `class name`", () => {
    expect(chartBody.find("Col").hasClass("Col")).toBe(true);
  });
});
