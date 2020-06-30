import React from "react";
import { shallow } from "enzyme";

import EditForm from "./EditForm";
import { modalFormConf } from "../../../../../../../data/fixtuers";

const props = {
  ...modalFormConf,
  options: [
    { id: "2", value: "value" },
    { id: "22", value: "value2" },
  ],
};

describe("EditForm Component", () => {
  const editForm = shallow(<EditForm {...props} />);

  it("renders `EditButton` Component", () => {
    expect(editForm.find("EditButton").exists()).toBe(true);
  });

  it("renders `ModalForm` Component", () => {
    expect(editForm.find("ModalForm").exists()).toBe(true);
  });

  it("renders correct number of `OptionItem` Components", () => {
    expect(editForm.find("OptionItem").length).toEqual(props.options.length);
  });
});
