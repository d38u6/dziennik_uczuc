import React from "react";
import { mount } from "enzyme";

import Checkbox from "./Checkbox";

describe("Checkbox component", () => {
  const onChange = jest.fn();
  const props = {
    id: "id",
    caption: "Example",
    checked: true,
    disabled: false,
    onChange,
  };
  const checkbox = mount(<Checkbox {...props} />);

  it("renders `label element` with `Checkbox class`", () => {
    expect(checkbox.find("label").hasClass("Checkbox")).toBe(true);
  });

  it("should correct `pass id prop` to label `hlmlFor prop`", () => {
    expect(checkbox.find("label").prop("htmlFor")).toEqual(props.id);
  });

  it("renders `input element` with `checkbox type`", () => {
    expect(checkbox.find("input").prop("type")).toEqual("checkbox");
  });

  it("should correct `pass id prop` to input `id prop`", () => {
    expect(checkbox.find("input").prop("id")).toEqual(props.id);
  });

  it("should correct `pass id prop` to input `name prop`", () => {
    expect(checkbox.find("input").prop("name")).toEqual(props.id);
  });

  it("should `call onChange callback` on change input", () => {
    checkbox.find("input").simulate("change");
    expect(onChange).toHaveBeenCalled();
  });

  it("should renders `correct caption`", () => {
    expect(checkbox.find("span").text()).toEqual(props.caption);
  });

  it("`span element` should contain `class` dependig on the `checked prop`", () => {
    expect(checkbox.find("span").hasClass("Checked")).toBe(props.checked);
  });
});
