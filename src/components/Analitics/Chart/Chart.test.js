import React from "react";
import { shallow } from "enzyme";

import Chart from "./Chart";

describe("Chart Component", () => {
  const chart = shallow(<Chart id="test chart" />);

  it("renders `ChartBody` component", () => {
    expect(chart.find("ChartBody").exists()).toBe(true);
  });

  it("renders `ChartApex - 'r' ` component", () => {
    expect(chart.find("r").exists()).toBe(true);
  });
});
