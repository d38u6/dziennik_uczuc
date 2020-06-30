import React from "react";
import { shallow } from "enzyme";

import Modal from "./Modal";

describe("Modal component", () => {
  const onClose = jest.fn();
  const props = { title: "example", show: true, onClose, withOutBtn: false };
  const modal = shallow(<Modal {...props} />);

  it("renders `div element` with `Modal class`", () => {
    expect(modal.find("div").hasClass("Modal")).toBe(true);
  });

  [false, true].forEach((show) => {
    it("`div element` should contani `Show class` depending on the `show prop`", () => {
      const modal = shallow(<Modal {...props} show={show} />);
      expect(modal.find("div").hasClass("Show")).toBe(show);
    });
  });

  it("renders `Backdrop` component", () => {
    expect(modal.find("Backdrop").exists()).toBe(true);
  });

  it("should `call onClose` callback on `Backdrop` click", () => {
    modal.find("Backdrop").simulate("click");
    expect(onClose).toHaveBeenCalled();
  });

  it("renders `ModalBody` component", () => {
    expect(modal.find("ModalBody").exists()).toBe(true);
  });

  it("renders `ModalTitle` component with correct `title prop`", () => {
    expect(modal.find("ModalTitle").prop("title")).toBe(props.title);
  });

  it("renders `CloseButton` component", () => {
    expect(modal.find("CloseButton").exists()).toBe(true);
  });

  it("should `call onClose` callback on `CloseButton` click", () => {
    modal.find("CloseButton").simulate("click");
    expect(onClose).toHaveBeenCalledTimes(2);
  });

  [false, true].forEach((withOutBtn) => {
    it("renders `Button` component dependig on the `withOutBtn prop`", () => {
      const modal = shallow(<Modal {...props} withOutBtn={withOutBtn} />);
      expect(modal.find("Button").exists()).toBe(!withOutBtn);
    });
  });

  it("should `call onClose` callback on `Button` click", () => {
    modal.find("Button").simulate("click");
    expect(onClose).toHaveBeenCalledTimes(3);
  });
});
