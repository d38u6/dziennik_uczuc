import React from "react";
import { mount } from "enzyme";

import Backdrop from "./Backdrop";

describe("Backdrop component", () => {
  const onClick = jest.fn();
  const backdrop = mount(<Backdrop onClick={onClick} />);

  it("renders `div element` with `Backdrop class`", () => {
    expect(backdrop.find("div").hasClass("Backdrop")).toBe(true);
  });

  it("should `call onClick` callback on `div element` click", () => {
    backdrop.find("div").simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
