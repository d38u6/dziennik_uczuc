import React from "react";
import { mount } from "enzyme";

import ErrorBoundary from "./ErrorBoundary";

describe("ErrorBoundary component", () => {
  const ThrowError = () => {
    return null;
  };

  const errorBoundary = mount(
    <ErrorBoundary>
      <ThrowError />
    </ErrorBoundary>
  );

  it("when not receive error should renders children cmp", () => {
    expect(errorBoundary.find("ThrowError").exists()).toBe(true);
  });

  it("when receive error should renders `Error` component", () => {
    errorBoundary.find("ThrowError").simulateError();
    expect(errorBoundary.find("Error"));
  });
});
