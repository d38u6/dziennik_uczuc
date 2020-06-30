import React from "react";
import { mount } from "enzyme";

import CollapsibleTitle from "./CollapsibleTitle";

describe("CollapsibleTitle component", () => {
  const onClick = jest.fn();
  const props = { title: "Test title", open: false, onClick };
  const collapsibleTitle = mount(<CollapsibleTitle {...props} />);

  it("renders `span element` with `CollapsibleTitle class`", () => {
    expect(collapsibleTitle.find("span").hasClass("CollapsibleTitle")).toBe(true);
  });

  it("renders `Icon` component with `iconName prop` depending on the `open prop`", () => {
    expect(collapsibleTitle.find("Icon").prop("iconName")).toEqual(
      props.open ? "IoIosArrowUp" : "IoIosArrowDown"
    );
  });

  it("correct renders `title prop`", () => {
    expect(collapsibleTitle.find("span").text()).toEqual(props.title);
  });
});
