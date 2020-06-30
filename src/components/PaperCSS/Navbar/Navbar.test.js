import React from "react";
import { mount } from "enzyme";

import Navbar from "./Navbar";

describe("Nvbar paperCSS component", () => {
  const props = { split: true, fixed: false };
  const navbar = mount(<Navbar {...props} />);

  it("renders `nav element` with `Nav class`", () => {
    expect(navbar.find("nav").hasClass("Nav")).toBe(true);
  });

  it("should `contain or not contain class` depending on the `split prop`", () => {
    expect(navbar.find("nav").hasClass("Split")).toBe(props.split);
  });

  it("should `contain or not contain class` depending on the `fixed prop`", () => {
    expect(navbar.find("nav").hasClass("Fixed")).toBe(props.fixed);
  });
});
