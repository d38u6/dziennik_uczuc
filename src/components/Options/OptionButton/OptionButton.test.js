import React from "react";
import { mount } from "enzyme";

import OptionButton from "./OptionButton";

describe("OptionButton component", () => {
  let onClickCalled, onChangeCalled;
  const props = {
    capiton: "Example Caption",
    icon: "Icon",
    type: "Success",
    fileButton: false,
    onClick: () => (onClickCalled = true),
    onChange: () => (onChangeCalled = true),
  };
  const optionButton = mount(<OptionButton {...props} />);

  it("renders `Button` componet with correct `type prop`", () => {
    expect(optionButton.find("Button").prop("type")).toEqual(props.type);
  });

  it("renders `Icon` componet with correct `iconName prop`", () => {
    expect(optionButton.find("Icon").prop("iconName")).toEqual(props.icon);
  });

  it("renders correct `Caption` text", () => {
    expect(optionButton.find("Button span").text()).toEqual(props.capiton);
  });

  describe("when `fileButton prop` set to false", () => {
    it("not renders `FileButton` componet when fileButton prop set to false", () => {
      expect(optionButton.find("FileButton").exists()).toBe(false);
    });

    it("should `call onClick callback` on `Button click`", () => {
      onClickCalled = false;
      optionButton.find("Button").simulate("click");
      expect(onClickCalled).toBe(true);
    });
  });

  describe("when `fileButton prop` set to true", () => {
    const optionButtonFile = mount(<OptionButton {...props} fileButton={true} />);
    it("renders `FileButton` componet when fileButton prop set to false", () => {
      expect(optionButtonFile.find("FileButton").exists()).toBe(true);
    });

    it("should `call onChange callback` on `FileButton` change", () => {
      onChangeCalled = false;
      optionButtonFile.find("FileButton").simulate("change");
      expect(onChangeCalled).toBe(true);
    });
  });
});
