import React from "react";
import { shallow } from "enzyme";

import MenuItem from "./MenuItem";

describe("MenuItem component", () => {
  const props = { to: "link", icon: "icon", caption: "text" };
  const menuItem = shallow(<MenuItem {...props} />);

  it("renders `MenuItem` component", () => {
    expect(menuItem.find("MenuItem").exists()).toBe(true);
  });

  it("renders `Link` component with correct `to` props", () => {
    expect(menuItem.find("Link").prop("to")).toEqual(props.to);
  });

  it("renders `Icon` component with correct `iconName` prop", () => {
    expect(menuItem.find("Icon").prop("iconName")).toEqual(props.icon);
  });

  it("correct renders `caption` prop", () => {
    expect(menuItem.find("Link span").text()).toEqual(props.caption);
  });
});
