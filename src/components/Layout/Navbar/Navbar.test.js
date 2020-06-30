import React from "react";
import { shallow } from "enzyme";

import Navbar, { ITEMS } from "./Navbar";

describe("Navbar component", () => {
  const navbar = shallow(<Navbar />);

  it("renders `Navbar` component", () => {
    expect(navbar.find("Navbar").exists()).toBe(true);
  });

  it("renders `Brand` component", () => {
    expect(navbar.find("Brand").exists()).toBe(true);
  });

  it("renders `a` element with correct text", () => {
    expect(navbar.find("Brand a").text()).toEqual("DZIENNIK UCZUĆ");
  });

  it("renders `Menu` component", () => {
    expect(navbar.find("Menu").exists()).toBe(true);
  });

  it("renders correct number of `MenuItem` componet", () => {
    expect(navbar.find("MenuItem").length).toEqual(ITEMS.length);
  });
});
