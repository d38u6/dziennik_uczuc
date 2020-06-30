import React from "react";
import { shallow } from "enzyme";

import FileButton from "./FileButton";

describe("FileButton component", () => {
  const onChangeCallback = jest.fn();
  const fileButton = shallow(<FileButton onChange={onChangeCallback} />);

  it("renders `input` element with `type file`", () => {
    expect(fileButton.find("input").prop("type")).toEqual("file");
  });

  it("renders `Button` component", () => {
    expect(fileButton.find("Button").exists()).toBe(true);
  });

  it("should call onChange callback on change input", () => {
    fileButton.find("input").simulate("change");
    expect(onChangeCallback).toHaveBeenCalled();
  });
});
