import React from "react";
import { mount } from "enzyme";

import OptionItem from "./OptionItem";

let removed;
const props = {
  value: "testValue",
  onRemove: () => (removed = true),
};

describe("OptionItem Component", () => {
  const optionItem = mount(<OptionItem {...props} />);

  it("renders `div` element with correct `class name`", () => {
    expect(optionItem.find("div").hasClass("OptionItem")).toBe(true);
  });

  it("renders correct value", () => {
    expect(optionItem.find("span").at(0).text()).toEqual(props.value);
  });

  it("renders `span` element with `'Icon' class name`", () => {
    expect(optionItem.find("span").at(1).hasClass("Icon")).toBe(true);
  });

  it("renders `Icon` Component", () => {
    expect(optionItem.find("Icon").exists()).toBe(true);
  });

  it("'Should call onRemove callback on `span icon` click", () => {
    removed = false;
    optionItem.find("span").at(1).simulate("click");
    expect(removed).toBe(true);
  });
});
