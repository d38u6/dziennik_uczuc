import React from "react";
import { mount } from "enzyme";

import MenuItem from "./MenuItem";

describe("MenuItem component", () => {
  it("renders `li element`", () => {
    expect(
      mount(<MenuItem />)
        .find("li")
        .exists()
    ).toBe(true);
  });
});
