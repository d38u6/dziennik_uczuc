import React from "react";
import { mount } from "enzyme";

import Section from "./Section";

describe("Section Component", () => {
  it("renders `Col` component", () => {
    expect(
      mount(<Section />)
        .find("Col")
        .exists()
    ).toBe(true);
  });
});
