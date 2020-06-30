import React from "react";
import { mount } from "enzyme";

import CloseBtn from "./CloseBtn";

describe("CloseBtn component", () => {
  let clicked;
  const closeBtn = mount(<CloseBtn onClick={() => (clicked = true)} />);

  it("renders `Row` component", () => {
    expect(closeBtn.find("Row").exists()).toBe(true);
  });

  it("renders `span` element with correct `class name`", () => {
    expect(closeBtn.find("span").hasClass("CloseBtn")).toBe(true);
  });

  it("renders correct `text`", () => {
    expect(closeBtn.find("span").text()).toEqual("X");
  });

  it("Should call `onClick` callback on `span element click`", () => {
    clicked = false;
    closeBtn.find("span").simulate("click");
    expect(clicked).toBe(true);
  });
});
