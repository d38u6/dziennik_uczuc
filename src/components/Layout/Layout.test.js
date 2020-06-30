import React from "react";
import { shallow } from "enzyme";

import Layout from "./Layout";

describe("Layout component", () => {
  const layout = shallow(<Layout />);

  it("renders `Navbar` component", () => {
    expect(layout.find("Navbar").exists()).toBe(true);
  });

  it("renders `Content` component", () => {
    expect(layout.find("Content").exists()).toBe(true);
  });
});
