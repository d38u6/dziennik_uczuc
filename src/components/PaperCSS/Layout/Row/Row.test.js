import React from "react";
import { mount } from "enzyme";

import Row from "./Row";

describe("Row component", () => {
  const props = { position: "Center", paper: true, className: "classname" };
  const row = mount(<Row {...props} />);

  it("renders `div element` with `Row class`", () => {
    expect(row.find("div").hasClass("Row")).toBe(true);
  });

  it("should `contain class` dependnig on the `position prop`", () => {
    expect(row.find("div").hasClass(props.position)).toBe(true);
  });

  it("should `contain Paper class` dependnig on the `paper prop`", () => {
    expect(row.find("div").hasClass("Paper")).toBe(props.paper);
  });

  it("should `contain class` dependnig on the `className prop`", () => {
    expect(row.find("div").hasClass(props.className)).toBe(true);
  });
});
