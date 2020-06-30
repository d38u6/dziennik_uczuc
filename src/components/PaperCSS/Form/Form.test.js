import React from "react";
import { mount } from "enzyme";

import Form from "./Form";

describe("Form component", () => {
  it("renders `fieldset` element with `From` class name", () => {
    expect(
      mount(<Form />)
        .find("fieldset")
        .hasClass("Form")
    ).toBe(true);
  });
});
