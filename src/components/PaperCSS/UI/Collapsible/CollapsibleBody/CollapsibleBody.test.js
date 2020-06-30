import React from "react";
import { mount } from "enzyme";

import CollapsibleBody from "./CollapsibleBody";

describe("CollapsibleBody component", () => {
  const props = { show: true };
  const collapsibleBody = mount(<CollapsibleBody {...props} />);

  it("renders `div element` with `CollapsibleBody class`", () => {
    expect(collapsibleBody.find("div").hasClass("CollapsibleBody")).toBe(true);
  });

  it("`div element` should contain `Show class` depending on the `show prop`", () => {
    [false, true].forEach((show) => {
      const collapsibleBody = mount(<CollapsibleBody show={show} />);
      expect(collapsibleBody.find("div").hasClass("Show")).toBe(show);
    });
  });
});
