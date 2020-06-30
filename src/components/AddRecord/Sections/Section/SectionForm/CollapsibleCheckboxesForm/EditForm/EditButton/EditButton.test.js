import React from "react";
import { mount } from "enzyme";

import EditButton from "./EditButton";

describe("EditButton Component", () => {
  let clicked;
  const editButton = mount(<EditButton onClick={() => (clicked = true)} />);

  it("renders `Button` component", () => {
    expect(editButton.find("Button").exists()).toBe(true);
  });

  it("renders correct `caption` in `Button` component", () => {
    expect(editButton.find("Button").text()).toEqual("Edytuj");
  });

  it("renders `Icon` component", () => {
    expect(editButton.find("Icon").exists()).toBe(true);
  });

  it("Should call `onClick` callback on `Button` click", () => {
    clicked = false;
    editButton.find("Button").simulate("click");
    expect(clicked).toBe(true);
  });
});
