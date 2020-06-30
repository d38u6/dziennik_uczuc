import React from "react";
import { mount } from "enzyme";

import ConfirmModal from "./ConfirmModal";

describe("ConfirmModal component", () => {
  const onAccept = jest.fn(),
    onClose = jest.fn();
  const props = { show: true, content: "Example content", onAccept, onClose };
  const confirmModal = mount(<ConfirmModal {...props} />);

  it("renders `Modal component` with correct `show prop`", () => {
    expect(confirmModal.find("Modal").prop("show")).toBe(props.show);
  });

  it("should `call onClose` callback when `close modal`", () => {
    confirmModal.find("Modal CloseButton").simulate("click");
    expect(onClose).toHaveBeenCalled();
  });

  it("renders `p element` with `Content class`", () => {
    expect(confirmModal.find("p").hasClass("Content")).toBe(true);
  });

  it("correctly renders `content prop` inside `p element`", () => {
    expect(confirmModal.find("p").text()).toEqual(props.content);
  });

  it("renders `div element` with `Buttons class`", () => {
    expect(confirmModal.find("div.Buttons").exists()).toBe(true);
  });

  it("renders `Accept Button` with correct text", () => {
    expect(confirmModal.find("div.Buttons > Button").at(0).text()).toEqual("Tak");
  });

  it("should `call onAccept` callback when click on `Accept Button`", () => {
    confirmModal.find("div.Buttons > Button").at(0).simulate("click");
    expect(onAccept).toHaveBeenCalled();
  });

  it("renders `Denied Button` with correct text", () => {
    expect(confirmModal.find("div.Buttons > Button").at(1).text()).toEqual("Nie");
  });

  it("should `call onClose` callback when click on `Denied Button`", () => {
    confirmModal.find("div.Buttons > Button").at(1).simulate("click");
    expect(onClose).toHaveBeenCalledTimes(2);
  });
});
