import React from "react";
import { shallow } from "enzyme";

import Collapsible from "./Collapsible";

describe("Collapsible component", () => {
  const onToggleOpen = jest.fn();
  const props = { title: "Test Title", open: false, onToggleOpen };
  const collapsible = shallow(<Collapsible {...props} />);

  it("renders `div element` with `Collapsible class` ", () => {
    expect(collapsible.find("div").hasClass("Collapsible")).toBe(true);
  });

  it("renders `CollapsibleTitle` component", () => {
    expect(collapsible.find("CollapsibleTitle").exists()).toBe(true);
  });

  it("`CollapsibleTitle` should contain `title prop`", () => {
    expect(collapsible.find("CollapsibleTitle").prop("title")).toEqual(props.title);
  });

  it("`CollapsibleTitle` should contain `open prop`", () => {
    expect(collapsible.find("CollapsibleTitle").prop("open")).toEqual(props.open);
  });

  it("should `call onToggleOpen function` on `CollapsibleTitle` click", () => {
    collapsible.find("CollapsibleTitle").simulate("click");
    expect(onToggleOpen).toHaveBeenCalled();
  });

  it("renders `CollapsibleBody` component", () => {
    expect(collapsible.find("CollapsibleBody").exists()).toBe(true);
  });

  it("`CollapsibleBody` should contain `show prop` depending on the `open prop`", () => {
    expect(collapsible.find("CollapsibleBody").prop("show")).toEqual(props.open);
  });
});
