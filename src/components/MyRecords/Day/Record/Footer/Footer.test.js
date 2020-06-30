import React from "react";
import { mount } from "enzyme";

import Footer, { getTimeFromUnixDate } from "./Footer";

describe("Record Footer componet", () => {
  let removeClicked;
  const props = { date: 2121515, remove: () => (removeClicked = true) };
  const footer = mount(<Footer {...props} />);

  it("renders `footer div` with correct `class name`", () => {
    expect(footer.find("div").first().hasClass("Footer")).toBe(true);
  });

  it("renders `span` element with correct `class name`", () => {
    expect(footer.find("span").first().hasClass("Time")).toBe(true);
  });

  it("renders `span` element with correct `class name`", () => {
    expect(footer.find("span").first().hasClass("Time")).toBe(true);
  });

  it("renders correct `time`", () => {
    expect(footer.find("span").first().text()).toEqual(
      getTimeFromUnixDate(props.date)
    );
  });

  it("renders `remove div` with correct `class name`", () => {
    expect(footer.find("div").at(1).hasClass("Remove")).toBe(true);
  });

  it("renders `Icon` component", () => {
    expect(footer.find(".Icon").exists()).toBe(true);
  });

  it("renders `span` element in `remove div` with correct `class name`", () => {
    expect(footer.find(".Remove span").exists()).toBe(true);
  });

  it("should `call remove callback` on `span element in remove div` click", () => {
    removeClicked = false;
    footer.find(".Remove span").simulate("click");
    expect(removeClicked).toBe(true);
  });
});
