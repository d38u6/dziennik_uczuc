import React from "react";
import { shallow } from "enzyme";

import SectionValues from "./SectionValues";
import { valuesData } from "../../../../../data/fixtuers";

const props = { values: valuesData };

describe("SectionValues Component", () => {
  const sectionValues = shallow(<SectionValues {...props} />);

  it("renders `p` element with correct `class name` ", () => {
    expect(sectionValues.find("p").hasClass("SectionValues")).toBe(true);
  });

  it("renders `ColorValues` component with correct `values prop`", () => {
    expect(sectionValues.find("ColorValues").prop("values")).toBe(props.values);
  });
});
