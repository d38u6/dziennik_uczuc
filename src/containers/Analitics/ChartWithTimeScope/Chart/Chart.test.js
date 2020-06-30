import React from "react";
import { shallow } from "enzyme";

import Chart from "./Chart";

describe("Chart container", () => {
  const props = {
    id: "testid",
    title: "chart",
    desc: "mydesc",
    options: { test: "teste" },
    data: { good: 3, bad: 2 },
  };
  const chart = shallow(<Chart {...props} />);

  it("renders `ChartSection` component", () => {
    expect(chart.find("ChartSection").exists()).toBe(true);
  });

  it("renders `ChartHeader` component with correct `title prop`", () => {
    expect(chart.find("ChartHeader").prop("title")).toEqual(props.title);
  });

  it("renders `Chart` component with correct `props`", () => {
    const { title, data, ...propsWithOutData } = props;
    expect(chart.find("Chart").props()).toMatchObject(propsWithOutData);
  });

  it("`createChartData method` should return correctly {categories, data} object", () => {
    const object = chart.instance().createChartData(props.data);
    expect(object).toEqual({ data: [3, 2], categories: ["good", "bad"] });
  });
});
