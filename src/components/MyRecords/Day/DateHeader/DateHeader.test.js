import React from "react";
import { mount } from "enzyme";

import DateHeader from "./DateHeader";

describe("DateHeader component", () => {
  const props = { date: "example date" };
  const dateHeader = mount(<DateHeader {...props} />);

  it("renders `div` element with correct `class name`", () => {
    expect(dateHeader.find("div").hasClass("DateHeader")).toBe(true);
  });

  it("renders `span` element with correct `class name`", () => {
    expect(dateHeader.find("span").hasClass("Date")).toBe(true);
  });

  it("renders correct `date prop`", () => {
    expect(dateHeader.find("span").text()).toEqual(props.date);
  });
});
