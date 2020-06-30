import React from "react";
import { shallow } from "enzyme";

import { SectionContainer } from "./SectionContainer";

import { valuesData, generateEmptySectionsValues } from "../../../data/fixtuers";
import sectionsData from "../../../data/sectionsData";

describe("SectionContainer", () => {
  const sectionsValues = generateEmptySectionsValues();
  const props = { ...sectionsData[0], sectionsValues, addValue: jest.fn() };
  const sectionsContainer = shallow(<SectionContainer {...props} />);

  it("renders `Section component`", () => {
    expect(sectionsContainer.find("Section").exists()).toBe(true);
  });

  it("renders `SectionForm component` with default `show prop`", () => {
    expect(sectionsContainer.find("SectionForm").prop("show")).toBe(false);
  });

  it("renders `SectionValues component` with default `values prop`", () => {
    expect(sectionsContainer.find("SectionValues").prop("values")).toEqual([]);
  });

  describe("when `call setFormShow` method", () => {
    const formShow = true;
    beforeEach(() => {
      sectionsContainer.instance().setFormShow(formShow);
    });

    it("should update `formShow` state property", () => {
      expect(sectionsContainer.state().formShow).toBe(formShow);
    });

    it("should correctly pass `formShow prop` to `SectionForm`", () => {
      expect(sectionsContainer.find("SectionForm").prop("show")).toBe(formShow);
    });
  });

  describe("when `call textareaChangeHandler` method", () => {
    const value = "tested Value";
    beforeEach(() => {
      props.addValue.mockClear();
      sectionsContainer.instance().textareaChangeHandler({ target: { value } });
    });

    it("should update `textareaValue` state property", () => {
      expect(sectionsContainer.state().textareaValue).toEqual(value);
    });

    it("should correctly pass `textareaValue prop` to `SectionForm > textareaConf`", () => {
      expect(
        sectionsContainer.find("SectionForm").prop("textareaConf").value
      ).toEqual(value);
    });

    it("should `call addValue` callback with correctly `id param`", () => {
      expect(props.addValue.mock.calls[0][0]).toEqual(sectionsData[0].id);
    });

    it("should `call addValue` callback with correctly `value param`", () => {
      expect(props.addValue.mock.calls[0][1]).toEqual({
        id: "textarea",
        value,
        color: null,
      });
    });
  });

  describe("when `change sectionValues prop`", () => {
    beforeEach(() => {
      sectionsContainer.setProps({
        ...props,
        sectionsValues: { ...sectionsValues, [sectionsData[0].id]: valuesData },
      });
    });

    it("should pass new `sectionValues` prop correctly to `SectionValues cmp`", () => {
      expect(sectionsContainer.find("SectionValues").prop("values")).toEqual(
        valuesData
      );
    });
  });
});
