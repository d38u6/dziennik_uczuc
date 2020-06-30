import React from "react";
import { shallow } from "enzyme";

import Day from "./Day";

describe("Day component", () => {
  const props = { date: "example date" };
  const day = shallow(<Day {...props} />);

  it("renders `Row` component with `correct class name`", () => {
    expect(day.find("Row").hasClass("Day")).toBe(true);
  });

  it("renders `Col` component", () => {
    expect(day.find("Col").exists()).toBe(true);
  });

  it("renders `DateHeader` component with `correct date prop`", () => {
    expect(day.find("DateHeader").prop("date")).toEqual(props.date);
  });
});
