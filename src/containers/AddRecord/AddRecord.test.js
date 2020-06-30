import React from "react";
import { shallow } from "enzyme";

import { AddRecord } from "./AddRecord";
import sectionsData from "../../data/sectionsData";
import { valuesData, generateEmptySectionsValues } from "../../data/fixtuers";
import shortid from "shortid";

const sectionsValues = generateEmptySectionsValues();

describe("Add Record container", () => {
  const props = {
    sectionsValues,
    addRecord: jest.fn(),
    addAlert: jest.fn(),
    initSectionValues: jest.fn(),
  };
  const addRecord = shallow(<AddRecord {...props} />);

  it("renders `Sections component` with `sectionData`", () => {
    expect(addRecord.find("Sections").prop("sections")).toEqual(sectionsData);
  });

  it("renders `AddRecordButton component`", () => {
    expect(addRecord.find("AddRecordButton").exists()).toBe(true);
  });

  it("should `call initSectionValues` callback for each `section`", () => {
    expect(props.initSectionValues).toHaveBeenCalledTimes(sectionsData.length);
  });

  describe("when `sectionsValues prop` contain empty sections and `click AddRecordButton`", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      addRecord.find("AddRecordButton").simulate("click");
    });

    it("should `call addAlert` callback with `Warning type`", () => {
      expect(props.addAlert.mock.calls[0][0].type).toEqual("Warning");
    });

    it("should NOT `call addRecord` callback", () => {
      expect(props.addRecord.mock.calls.length).toBe(0);
    });
  });

  describe("when `sectionsValues prop` contain only situation value and `click AddRecordButton`", () => {
    const addRecord = shallow(
      <AddRecord
        {...props}
        initSectionValues={jest.fn()}
        sectionsValues={{ ...sectionsValues, situation: valuesData }}
      />
    );
    beforeEach(() => {
      jest.clearAllMocks();
      addRecord.find("AddRecordButton").simulate("click");
    });

    it("should `call addAlert` callback with `Warning type`", () => {
      expect(props.addAlert.mock.calls[0][0].type).toEqual("Warning");
    });

    it("should NOT `call addRecord` callback", () => {
      expect(props.addRecord.mock.calls.length).toBe(0);
    });
  });

  describe("when `sectionsValues prop` contain situation, though and feelings values and `click AddRecordButton`", () => {
    const sctValues = {
      ...sectionsValues,
      situation: valuesData,
      feelings: valuesData,
      though: valuesData,
    };
    const initSectionValues = jest.fn();
    const addRecord = shallow(
      <AddRecord
        {...props}
        initSectionValues={initSectionValues}
        sectionsValues={sctValues}
      />
    );
    beforeEach(() => {
      jest.clearAllMocks();
      addRecord.find("AddRecordButton").simulate("click");
    });

    it("should `call addAlert` callback with `Success type`", () => {
      expect(props.addAlert.mock.calls[0][0].type).toEqual("Success");
    });

    it("should `call addRecord` callback with correctly sections values", () => {
      expect(props.addRecord.mock.calls[0][0].sections).toEqual(sctValues);
    });

    it("should `call addRecord` callback with correctly id", () => {
      expect(shortid.isValid(props.addRecord.mock.calls[0][0].id)).toBe(true);
    });

    it("should `call addRecord` callback with correctly date", () => {
      expect(props.addRecord.mock.calls[0][0].date).toBeLessThanOrEqual(Date.now());
    });

    it("should `call initSectionValues` callback for each `section`", () => {
      expect(initSectionValues).toHaveBeenCalledTimes(sectionsData.length);
    });
  });
});
