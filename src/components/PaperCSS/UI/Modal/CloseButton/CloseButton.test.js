import React from "react";
import { mount } from "enzyme";

import CloseButton from "./CloseButton";

describe("CloseButton component", () => {
  const onClick = jest.fn();
  const closeButton = mount(<CloseButton onClick={onClick} />);

  it("renders `div element` with `CloseButton class`", () => {
    expect(closeButton.find("div").hasClass("CloseButton")).toBe(true);
  });

  it("renders `X` text inside `div element`", () => {
    expect(closeButton.find("div").text()).toEqual("X");
  });

  it("should `call onClick` callback on `div element` click", () => {
    closeButton.find("div").simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
