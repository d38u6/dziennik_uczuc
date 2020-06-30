import React from "react";
import { shallow } from "enzyme";

import Sections from "./Sections";
import sectionsData from "../../../data/sectionsData";

const props = { sections: sectionsData };

describe("Sections Component", () => {
  const sections = shallow(<Sections {...props} />);

  it("renders `Row` component", () => {
    expect(sections.find("Row").exists()).toBe(true);
  });

  it("renders correct numbers of `SectionContainer` component", () => {
    expect(sections.find("Connect(SectionContainer)").length).toEqual(
      props.sections.length
    );
  });

  it("each `SectionContainer` component should contain correct props", () => {
    sections.find("Connect(SectionContainer)").forEach((cmp, i) => {
      expect(cmp.props()).toEqual(props.sections[i]);
    });
  });
});
