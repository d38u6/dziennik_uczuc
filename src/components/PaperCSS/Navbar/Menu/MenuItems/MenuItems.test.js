import React from "react";
import { mount } from "enzyme";

import MenuItems from "./MenuItems";

describe("MenuItems component", () => {
  const props = { id: "menu", open: true };
  const menuItems = mount(<MenuItems {...props} />);

  it("renders `div element` with `MenuItems class`", () => {
    expect(menuItems.find("div").hasClass("MenuItems")).toBe(true);
  });

  it("should contain `id prop` depending on the `id prop`", () => {
    expect(menuItems.find("div").prop("id")).toBe(props.id + "-items");
  });

  it("should contain `Open class` depending on the `open prop`", () => {
    expect(menuItems.find("div").hasClass("Open")).toBe(props.open);
  });

  it("renders `ul element`", () => {
    expect(menuItems.find("ul").exists()).toBe(true);
  });
});
