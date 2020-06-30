import React from "react";
import { mount } from "enzyme";

import ModalForm from "./ModalForm";
import { textareaConf } from "../../../data/fixtuers";

describe("ModalForm component", () => {
  const props = {
    title: "Example Title",
    show: true,
    onClose: jest.fn(),
    textareaConf,
  };
  const modalForm = mount(<ModalForm {...props} />);

  it("renders `Modal` component with correct `title prop`", () => {
    expect(modalForm.find("Modal").prop("title")).toEqual(props.title);
  });

  it("renders `Modal` component with correct `show prop`", () => {
    expect(modalForm.find("Modal").prop("show")).toEqual(props.show);
  });

  it("should `call onClose` callback when close `Modal", () => {
    modalForm.find("Modal CloseButton").simulate("click");
    expect(props.onClose).toHaveBeenCalled();
  });

  it("should renders `Textarea` with correct props", () => {
    const { style, ...textareaProps } = modalForm.find("Textarea").props();
    expect(textareaProps).toEqual(textareaConf);
  });

  it("if `render prop` exist should renders his", () => {
    const renderElment = <h1>RENDER TEST</h1>;
    const modalForm = mount(<ModalForm {...props} render={() => renderElment} />);
    expect(modalForm.contains(renderElment)).toBe(true);
  });
});
