import React from "react";
import { mount } from "enzyme";

import InstallContent from "./InstallContent";

describe("InstallContent component", () => {
  const installContent = mount(<InstallContent />);

  it("renders `Row` component with correct `class name`", () => {
    expect(installContent.find("Row").hasClass("InstallContentWrapper")).toBe(true);
  });

  it("renders `span` element with correct `class name`", () => {
    expect(installContent.find("span").hasClass("InstallContent")).toBe(true);
  });
});
