import React from "react";
import { mount } from "enzyme";

import Textarea from "./Textarea";

describe("Textarea Component", () => {
  const onChange = jest.fn();
  const props = { placeholder: "Example", value: "value", onChange };
  const textarea = mount(<Textarea {...props} />);

  it("renders `div` element with `Textarea class`", () => {
    expect(textarea.find("div").hasClass("Textarea")).toBe(true);
  });

  it("renders `textarea` element", () => {
    expect(textarea.find("textarea").exists()).toBe(true);
  });

  it("correct pass `placeholder prop` to `textarea` element", () => {
    expect(textarea.find("textarea").prop("placeholder")).toEqual(props.placeholder);
  });

  it("correct pass `value prop` to `textarea` element", () => {
    expect(textarea.find("textarea").prop("value")).toEqual(props.value);
  });

  it("should `call onChang callback` on chaneg textarea", () => {
    textarea.find("textarea").simulate("change");
    expect(onChange).toHaveBeenCalled();
  });
});
