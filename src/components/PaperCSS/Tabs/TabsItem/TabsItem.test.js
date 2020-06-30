import React from "react";
import { mount } from "enzyme";

import TabsItem from "./TabsItem";

describe("TabsItem component", () => {
  const props = { caption: "example", active: false };
  const tabsItem = mount(<TabsItem {...props} />);

  it("renders `label element` with `TabsItem class`", () => {
    expect(tabsItem.find("label").hasClass("TabsItem")).toBe(true);
  });

  it("`label` should contain `Active class` depending on the `active prop`", () => {
    expect(tabsItem.find("label").hasClass("Active")).toBe(props.active);
  });

  it("correct renders `caption prop`", () => {
    expect(tabsItem.find("label").text()).toEqual(props.caption);
  });
});
