import React from "react";
import { shallow } from "enzyme";

import NoData from "./NoData";

describe("NoData component", () => {
  const noData = shallow(<NoData />);

  it("renders `Row component` with `NoData class`", () => {
    expect(noData.find("Row").hasClass("NoData")).toBe(true);
  });

  it("renders `Col component`", () => {
    expect(noData.find("Col").exists()).toBe(true);
  });

  it("renders `h1 element`", () => {
    expect(noData.find("h1").exists()).toBe(true);
  });

  it("renders `Icon component` inside `h1`", () => {
    expect(noData.find("h1 Icon").exists()).toBe(true);
  });

  it("renders `default text` inside `h1`", () => {
    expect(noData.find("h1 span").text()).toEqual("Brak danych");
  });

  it("renders `default text` inside `p`", () => {
    expect(noData.find("p").text()).toEqual(
      "W Twoim dzienniku nie ma jeszcze żadnego wpisu, dodaj swój pierwszy wpis do dziennika"
    );
  });

  it("renders `Link` with `to prop equal /dodaj-wpis`", () => {
    expect(noData.find("Link").prop("to")).toEqual("/dodaj-wpis");
  });

  it("renders `AddRecordBtn component` inside `Link`", () => {
    expect(noData.find("Link > AddRecordButton").exists()).toBe(true);
  });
});
