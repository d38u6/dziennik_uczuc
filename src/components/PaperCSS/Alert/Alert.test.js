import React from "react";
import { shallow } from "enzyme";

import Alert from "./Alert";

jest.useFakeTimers();

describe("Alert Component", () => {
  let onCloseCalled;
  const props = {
    content: "Exapmle alert",
    type: "Success",
    onClose: () => (onCloseCalled = true),
    showMs: 1444,
  };

  let alert;
  beforeEach(() => {
    jest.spyOn(global, "setTimeout");
    const useEffect = jest.spyOn(React, "useEffect");
    useEffect.mockImplementationOnce((f) => f());
    alert = shallow(<Alert {...props} />);
  });

  it("renders `div` element with correct `class name` ", () => {
    expect(alert.find("div").hasClass("Alert")).toBe(true);
  });

  it("renders `div` element with correct `type class name` ", () => {
    expect(alert.find("div").hasClass(props.type)).toBe(true);
  });

  it("renders `content` ", () => {
    expect(alert.find("div").childAt(0).text()).toEqual(props.content);
  });

  it("renders `span` element with `BtnClose class` ", () => {
    expect(alert.find("div span").hasClass("BtnClose")).toBe(true);
  });

  it("renders `X` text in span element ", () => {
    expect(alert.find("div span").text()).toEqual("X");
  });

  it("after 50ms should not contain `Hidden class name`", () => {
    jest.advanceTimersByTime(50);
    expect(alert.find("div").hasClass("Hidden")).toBe(false);
  });

  it("and after showMs time, should contain `Hidden class name`", () => {
    jest.advanceTimersByTime(props.showMs);
    expect(alert.find("div").hasClass("Hidden")).toBe(true);
  });

  it("and after 250ms, should call `onClose callback`", () => {
    onCloseCalled = false;
    jest.advanceTimersByTime(250);
    expect(onCloseCalled).toBe(true);
  });
});
