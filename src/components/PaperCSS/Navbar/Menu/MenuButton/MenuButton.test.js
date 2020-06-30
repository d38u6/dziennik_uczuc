import React from "react";
import { mount } from "enzyme";

import MenuButton from "./MenuButton";

describe("MenuItems component", () => {
  const props = { id: "menu", open: true };
  const menuButton = mount(<MenuButton {...props} />);

  it("renders `Button component`", () => {
    expect(menuButton.find("Button").exists()).toBe(true);
  });

  it("renders `label element` with `MenuButton class`", () => {
    expect(menuButton.find("label").hasClass("MenuButton")).toBe(true);
  });

  it("should contain `htmlFor prop` depending on the `id prop`", () => {
    expect(menuButton.find("label").prop("htmlFor")).toBe(props.id);
  });

  it("should contain `Open class` depending on the `open prop`", () => {
    expect(menuButton.find("label").hasClass("Open")).toBe(props.open);
  });

  it("should renders three `div` inside `label`", () => {
    expect(menuButton.find("label div").length).toEqual(3);
  });

  it("`div` inside `label` should contain `Bar class`", () => {
    menuButton.find("label div").forEach((div) => {
      expect(div.hasClass(/Bar/)).toBe(true);
    });
  });
});
