import React from "react";
import { mount } from "enzyme";

import RecordSection from "./RecordSection";
import { valuesData } from "../../../../../data/fixtuers";

describe("RecordSection component", () => {
  const props = { icon: "icon1", values: valuesData };
  const recordSection = mount(<RecordSection {...props} />);

  it("renders `span` element with correct `class name`", () => {
    expect(recordSection.find("span").first().hasClass("RecordSection")).toBe(true);
  });

  it("renders `Icon` component", () => {
    expect(recordSection.find("Icon").exists()).toBe(true);
  });

  it("correct pass `icon` prop to `Icon` component", () => {
    expect(recordSection.find("Icon").prop("iconName")).toEqual(props.icon);
  });

  it("renders `ColorValues` component", () => {
    expect(recordSection.find("ColorValues").exists()).toBe(true);
  });

  it("correct pass `values` prop to `ColorValues` component", () => {
    expect(recordSection.find("ColorValues").prop("values")).toEqual(props.values);
  });
});
