import React from "react";
import { mount } from "enzyme";

import AddButton from "./AddButton";

describe("AddButton Component", () => {
  let added;
  const addButton = mount(<AddButton onAdd={() => (added = true)} />);

  it("renders `div element` with AddButton `class name`", () => {
    expect(addButton.find("div").hasClass("AddButton")).toBe(true);
  });

  it("renders `Button` component", () => {
    expect(addButton.find("Button").exists()).toBe(true);
  });

  it("renders correct `Button caption`", () => {
    expect(addButton.find("Button").text()).toEqual("DODAJ");
  });

  it("renders `Icon` component", () => {
    expect(addButton.find("Icon").exists()).toBe(true);
  });

  it("Should call onAdd callback on `Button click`", () => {
    added = false;
    addButton.find("Button").simulate("click");
    expect(added).toBe(true);
  });
});
