import React from "react";
import { mount } from "enzyme";

import InstallBtn from "./InstallBtn";

describe("InstallBtn component", () => {
  let clicked;
  const installBtn = mount(<InstallBtn onClick={() => (clicked = true)} />);

  it("renders `Row` component with correct `class name`", () => {
    expect(installBtn.find("Row").hasClass("InstallBtnWrapper")).toBe(true);
  });

  it("renders `button` element with correct `class name`", () => {
    expect(installBtn.find("button").hasClass("InstallBtn")).toBe(true);
  });

  it("renders correct `text`", () => {
    expect(installBtn.find("button span").text()).toEqual("Zainstaluj");
  });

  it("renders `Icon` component", () => {
    expect(installBtn.find("Icon").exists()).toBe(true);
  });

  it("Should call `onClick` callback on `span element click`", () => {
    clicked = false;
    installBtn.find("button").simulate("click");
    expect(clicked).toBe(true);
  });
});
