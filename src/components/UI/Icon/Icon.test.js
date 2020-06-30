import React from "react";
import { mount } from "enzyme";

import Icon from "./Icon";

describe("Icon component", () => {
  const props = { iconName: "FaPlusCircle" };
  const icon = mount(<Icon {...props} />);

  it("renders `i element` with `Icon class`", () => {
    expect(icon.find("i").hasClass("Icon")).toBe(true);
  });

  it("should reneders `Icon` depending on the `iconName prop`", () => {
    expect(icon.find(props.iconName).exists()).toBe(true);
  });

  it("should renders default `Icon` when pass invalid `iconName prop`", () => {
    const icon = mount(<Icon iconName="invalidIcon" />);
    expect(icon.find("GiBlackBook").exists()).toBe(true);
  });
});
