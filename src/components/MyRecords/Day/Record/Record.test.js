import React from "react";
import { shallow } from "enzyme";

import Record from "./Record";
import { valuesData } from "../../../../data/fixtuers";

describe("Record component", () => {
  const props = {
    id: "id",
    date: 1245648620,
    sections: [
      { icon: "icon1", values: valuesData },
      { icon: "icon12", values: valuesData },
    ],
    remove: () => {},
  };
  const record = shallow(<Record {...props} />);

  it("renders `div` element with correct `class name`", () => {
    expect(record.find("div").hasClass("Record")).toBe(true);
  });

  it("renders correct number of `RecordSection` component", () => {
    expect(record.find("RecordSection").length).toEqual(props.sections.length);
  });

  it("renders `Footer` component", () => {
    expect(record.find("Footer").exists()).toBe(true);
  });

  it("correct pass `date` prop to `Footer` component", () => {
    expect(record.find("Footer").prop("date")).toEqual(props.date);
  });

  it("correct pass `remove` prop to `Footer` component", () => {
    expect(record.find("Footer").prop("remove")).toEqual(props.remove);
  });

  it("correct pass `sections > icon` prop to `RecordSection` component", () => {
    record.find("RecordSection").forEach((cmp, index) => {
      expect(cmp.prop("icon")).toEqual(props.sections[index].icon);
    });
  });

  it("correct pass `sections > values` prop to `RecordSection` component", () => {
    record.find("RecordSection").forEach((cmp, index) => {
      expect(cmp.prop("values")).toEqual(props.sections[index].values);
    });
  });
});
