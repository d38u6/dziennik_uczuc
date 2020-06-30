import React from "react";
import { shallow } from "enzyme";

import ChartWithTimeScope from "./ChartWithTimeScope";

describe("ChartWithTimeScope", () => {
  const props = {
    id: "test id",
    title: "title",
    desc: "descr",
    options: {},
    data: {},
    onTimeScopeChange: jest.fn(),
  };

  const chartWithTimeScope = shallow(<ChartWithTimeScope {...props} />);

  it("renders `Chart` component with correct `props", () => {
    const { onTimeScopeChange, ...chartProps } = props;
    expect(chartWithTimeScope.find("Chart").props()).toMatchObject(chartProps);
  });

  it("renders `TimeScopeSelector` component", () => {
    expect(chartWithTimeScope.find("TimeScopeSelector").exists()).toBe(true);
  });
});
