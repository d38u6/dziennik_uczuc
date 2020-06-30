import React from "react";
import { mount } from "enzyme";

import AddRecordButton from "./AddRecordButton";

describe("AddRecordButton Component", () => {
  let clicked;
  const addRecordButton = mount(
    <AddRecordButton onClick={() => (clicked = true)} />
  );

  it("renders `Row` component", () => {
    expect(addRecordButton.find("Row").exists()).toBe(true);
  });

  it("renders `Col` component", () => {
    expect(addRecordButton.find("Col").exists()).toBe(true);
  });

  it("renders `Button` component", () => {
    expect(addRecordButton.find("Button").exists()).toBe(true);
  });

  it("renders `Button` caption", () => {
    expect(addRecordButton.find("Button").text()).toEqual("DODAJ WPIS");
  });

  it("renders `Icon` component", () => {
    expect(addRecordButton.find("Icon").exists()).toBe(true);
  });

  it("Should call onClick callback on `Button` click", () => {
    clicked = false;
    addRecordButton.find("Button").simulate("click");
    expect(clicked).toBe(true);
  });
});
