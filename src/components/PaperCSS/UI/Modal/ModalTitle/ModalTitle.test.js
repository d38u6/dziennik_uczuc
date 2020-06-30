import React from "react";
import { mount } from "enzyme";

import ModalTitle from "./ModalTitle";

describe("ModalTitle component", () => {
  const props = { title: "Title" };
  const modalTitle = mount(<ModalTitle {...props} />);

  it("renders `h4 element` with `ModalTitle class`", () => {
    expect(modalTitle.find("h4").hasClass("ModalTitle")).toBe(true);
  });

  it("renders correct `title prop` inside `h4`", () => {
    expect(modalTitle.find("h4").text()).toEqual(props.title);
  });
});
