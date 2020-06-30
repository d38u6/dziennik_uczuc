import React from "react";
import { shallow } from "enzyme";

import Menu from "./Menu";

describe("Meun component", () => {
  const props = { id: "menu-button" };
  const menu = shallow(<Menu {...props} />);

  it("renders `div element` with `Menu class`", () => {
    expect(menu.find("div").hasClass("Menu")).toBe(true);
  });

  it("renders `input element` with prop type `chceckbox`", () => {
    expect(menu.find("input").prop("type")).toEqual("checkbox");
  });

  it("`input element` should containt `id prop` to equal `id prop`", () => {
    expect(menu.find("input").prop("id")).toEqual(props.id);
  });

  it("`input element` should containt `name prop` to equal `id prop`", () => {
    expect(menu.find("input").prop("name")).toEqual(props.id);
  });

  it("`input element` should be not checked default", () => {
    expect(menu.find("input").prop("checked")).toBe(false);
  });

  it("renders `MenuButton componet` with `id prop` equal to `id prop`", () => {
    expect(menu.find("MenuButton").prop("id")).toEqual(props.id);
  });

  it("renders `MenuItems component` with `id prop` equal to `id prop`", () => {
    expect(menu.find("MenuItems").prop("id")).toBe(props.id);
  });

  it("should default pass `open equal fals prop` to `MenuButton`", () => {
    expect(menu.find("MenuButton").prop("open")).toBe(false);
  });

  it("should default pass `open equal fals prop` to `MenuItems`", () => {
    expect(menu.find("MenuItems").prop("open")).toBe(false);
  });

  describe("when change input", () => {
    let oldChecked;
    let checked;
    beforeEach(() => {
      oldChecked = menu.find("input").prop("checked");
      menu.find("input").simulate("change");
      checked = menu.find("input").prop("checked");
    });

    it("should change `checked prop` in `input element`", () => {
      expect(menu.find("input").prop("checked")).toBe(!oldChecked);
    });

    it("should pass `open prop` to MenuButton depending on the `input checked prop`", () => {
      expect(menu.find("MenuButton").prop("open")).toBe(checked);
    });

    it("should pass `open prop` to MenuItems depending on the `input checked prop`", () => {
      expect(menu.find("MenuItems").prop("open")).toBe(checked);
    });
  });
});
