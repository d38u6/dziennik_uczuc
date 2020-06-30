import React from "react";
import { mount } from "enzyme";

import Error from "./Error";

describe("Error component", () => {
  const props = { msg: "Error message" };
  const error = mount(<Error {...props} />);

  it("rednders `div element` with `ErrorWrapper class`", () => {
    expect(error.find("div").first().hasClass("ErrorWrapper")).toBe(true);
  });

  it("renders `Row` component", () => {
    expect(error.find("Row").exists()).toBe(true);
  });

  it("renders `Col` component", () => {
    expect(error.find("Col").exists()).toBe(true);
  });

  it("renders `div element` with `Error class`", () => {
    expect(error.find("div.Error").exists()).toBe(true);
  });

  it("renders `h1 element`", () => {
    expect(error.find("h1").exists()).toBe(true);
  });

  it("renders `Icon` Component inside `h1`", () => {
    expect(error.find("h1 > Icon").exists()).toBe(true);
  });

  it("renders correctly `text` inside `h1`", () => {
    expect(error.find("h1").text()).toEqual("Błąd");
  });

  it("renders correctly `msg prop`", () => {
    expect(error.find("div.Error > p").text()).toEqual(props.msg);
  });

  it("when msg prop is false should render deflaut message", () => {
    const error = mount(<Error />);
    expect(error.find("div.Error > p").text()).toEqual(
      "Coś poszło nie tak! Spróbuj ponownie za chwile"
    );
  });
});
