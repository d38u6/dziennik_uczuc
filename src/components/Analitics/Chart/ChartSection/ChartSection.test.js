import React from "react";
import { mount } from "enzyme";

import ChartSection from "./ChartSection";

describe("ChartSection component", () => {
  const chartSection = mount(<ChartSection />);

  it("renders `Row` component", () => {
    expect(chartSection.find("Row").exists()).toBe(true);
  });

  it("renders `Col` component with correct `class name`", () => {
    expect(chartSection.find("Col").hasClass("ChartSection")).toBe(true);
  });
});
