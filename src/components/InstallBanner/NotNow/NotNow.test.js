import React from "react";
import { mount } from "enzyme";

import NotNow from "./NotNow";

describe("NotNow component", () => {
  let clicked;
  const notNow = mount(<NotNow onClick={() => (clicked = true)} />);

  it("renders `Row` component with correct `class name`", () => {
    expect(notNow.find("Row").hasClass("NotNowWrapper")).toBe(true);
  });

  it("renders `span` element with correct `class name`", () => {
    expect(notNow.find("span").hasClass("NotNow")).toBe(true);
  });

  it("renders correct `text`", () => {
    expect(notNow.find("span").text()).toEqual("Nie teraz");
  });

  it("Should call `onClick` callback on `span element click`", () => {
    clicked = false;
    notNow.find("span").simulate("click");
    expect(clicked).toBe(true);
  });
});
