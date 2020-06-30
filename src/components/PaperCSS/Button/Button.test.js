import React from "react";
import { mount } from "enzyme";

import Button from "./Button";

describe("Button component", () => {
  let onClickCallback = jest.fn();
  const props = {
    size: "Large",
    type: "Danger",
    block: true,
    disabled: false,
    onClick: onClickCallback,
  };
  const button = mount(<Button {...props} />);

  it("renders `button` elemen with `Button class name`", () => {
    expect(button.find("button").hasClass("Button")).toBe(true);
  });

  it("should call onClick callback when click on the button", () => {
    button.find("button").simulate("click");
    expect(onClickCallback).toHaveBeenCalled();
  });

  it("should contain correct class name depending on the `size prop`", () => {
    expect(button.find("button").hasClass(props.size)).toBe(true);
  });

  it("should contain correct class name depending on the `type prop`", () => {
    expect(button.find("button").hasClass(props.type)).toBe(true);
  });

  it("should contain correct class name depending on the `type block`", () => {
    expect(button.find("button").hasClass("Block")).toBe(props.block);
  });
});
