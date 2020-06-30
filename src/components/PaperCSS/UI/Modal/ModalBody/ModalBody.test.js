import React from "react";
import { mount } from "enzyme";

import ModalBody from "./ModalBody";

describe("ModalBody component", () => {
  it("renders `div element` with `ModalBody class`", () => {
    expect(
      mount(<ModalBody />)
        .find("div")
        .hasClass("ModalBody")
    ).toBe(true);
  });
});
