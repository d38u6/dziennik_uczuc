import React from "react";
import { shallow } from "enzyme";

import Tabs from "./Tabs";

describe("Tabs component", () => {
  const onItemClick = jest.fn();
  const props = {
    items: [
      { id: "1", caption: "example", active: true },
      { id: "2", caption: "example2", active: false },
    ],
    onItemClick,
  };
  const tabs = shallow(<Tabs {...props} />);

  it("renders `Row component`", () => {
    expect(tabs.find("Row").exists()).toBe(true);
  });

  it("renders correct numbers of `TabsItem component`", () => {
    expect(tabs.find("TabsItem").length).toEqual(props.items.length);
  });

  it("should `call onItemClick` function on `TabsItem` click", () => {
    tabs.find("TabsItem").first().simulate("click");
    expect(onItemClick).toHaveBeenCalled();
  });

  it("correct pass `caption item property` to `TabsItem` components", () => {
    tabs.find("TabsItem").forEach((item, i) => {
      expect(item.prop("caption")).toEqual(props.items[i].caption);
    });
  });

  it("correct pass `active item property` to `TabsItem` components", () => {
    tabs.find("TabsItem").forEach((item, i) => {
      expect(item.prop("active")).toEqual(props.items[i].active);
    });
  });
});
