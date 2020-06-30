import React from "react";
import { shallow } from "enzyme";

import CollapsibleCheckboxesForm from "./CollapsibleCheckboxesForm";

let changed;
const props = {
  caption: "Test Collapsible",
  open: true,
  toggleOpen: () => {},
  checkboxesConf: {
    checkboxes: [
      { id: "1", value: "value", checked: false },
      { id: "2", value: "value2", checked: true },
    ],
    onChange: () => (changed = true),
    disabled: false,
  },
};

describe("CollapsibleCheckboxesForm Component", () => {
  const collapsibleCheckboxesForm = shallow(
    <CollapsibleCheckboxesForm {...props} />
  );

  it("renders `Collapsible` component", () => {
    expect(collapsibleCheckboxesForm.find("Collapsible").exists()).toBe(true);
  });

  it("renders correct `number` of `Checkbox` components", () => {
    expect(collapsibleCheckboxesForm.find("Checkbox").length).toEqual(
      props.checkboxesConf.checkboxes.length
    );
  });

  it("Should call `onChange` callback on `Checkbox change`", () => {
    changed = false;
    collapsibleCheckboxesForm.find("Checkbox").at(0).simulate("change");
    expect(changed).toBe(true);
  });
});
