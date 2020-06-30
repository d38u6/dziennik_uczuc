import React from "react";
import { mount } from "enzyme";

import LoadingSpinner from "./LoadingSpinner";

describe("LoadingSpinner component", () => {
  const loadingSpinner = mount(<LoadingSpinner />);

  it("renders `div elemetn` with `SpinnerWrapper class`", () => {
    expect(loadingSpinner.find("div").at(0).hasClass("SpinnerWrapper"));
  });

  it("renders `Row component`", () => {
    expect(loadingSpinner.find("Row").exists()).toBe(true);
  });

  it("renders `Col component`", () => {
    expect(loadingSpinner.find("Col").exists()).toBe(true);
  });

  it("renders `div element` with `LdsGrid class`", () => {
    expect(loadingSpinner.find("div.LdsGrid").exists()).toBe(true);
  });

  it("`LdsGrid div` should contain nine `div`", () => {
    expect(loadingSpinner.find("div.LdsGrid > div").length).toBe(9);
  });
});
