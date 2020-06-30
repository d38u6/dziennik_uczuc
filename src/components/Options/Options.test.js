import React from "react";
import { shallow } from "enzyme";

import Options from "./Options";

describe("Options component", () => {
  const options = shallow(<Options />);

  it("renders `RecordsOptions` component", () => {
    expect(options.find("Connect(RecordsOptions)").exists()).toBe(true);
  });

  it("renders `SelectionOptionsOptions` component", () => {
    expect(options.find("Connect(SelectionOptionsOptions)").exists()).toBe(true);
  });
});
