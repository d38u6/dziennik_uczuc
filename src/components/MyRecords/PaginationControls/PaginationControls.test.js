import React from "react";
import { mount } from "enzyme";

import PaginationControls from "./PaginationControls";

describe("PaginationControls component", () => {
  let onPrevCalled, onNextCalled;
  const props = {
    onPrev: () => (onPrevCalled = true),
    onNext: () => (onNextCalled = true),
    allowPrev: true,
    allowNext: true,
  };
  const paginationControls = mount(<PaginationControls {...props} />);

  it("renders `div` element with correct `class name`", () => {
    expect(paginationControls.find("div").hasClass("PaginationControls")).toBe(true);
  });

  it("renders `prev Button` with correct `caption`", () => {
    expect(paginationControls.find("Button").first().text()).toEqual("< Poprzednie");
  });

  it("renders `next Button` with correct `caption`", () => {
    expect(paginationControls.find("Button").at(1).text()).toEqual("Następne >");
  });

  it("correct pass `allowPrev prop` to `prev Button`", () => {
    expect(paginationControls.find("Button").first().prop("disabled")).toBe(
      !props.allowPrev
    );
  });

  it("correct pass `allowNext prop` to `next Button`", () => {
    expect(paginationControls.find("Button").at(1).prop("disabled")).toBe(
      !props.allowNext
    );
  });

  it("should `call onPrev callback` on prev Button click", () => {
    onPrevCalled = false;
    paginationControls.find("Button").first().simulate("click");
    expect(onPrevCalled).toBe(true);
  });

  it("should `call onNext callback` on next Button click", () => {
    onNextCalled = false;
    paginationControls.find("Button").at(1).simulate("click");
    expect(onNextCalled).toBe(true);
  });
});
