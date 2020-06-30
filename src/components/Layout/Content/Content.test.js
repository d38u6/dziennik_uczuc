import React from "react";
import { mount } from "enzyme";

import Content from "./Content";

describe("Content component", () => {
  const content = mount(<Content />);

  it("renders `div` element with correct `class name`", () => {
    expect(content.find("div").first().hasClass("Content")).toBe(true);
  });

  it("renders `Row` component", () => {
    expect(content.find("Row").exists()).toBe(true);
  });

  it("renders `Col` component", () => {
    expect(content.find("Col").exists()).toBe(true);
  });
});
