import shortid from "shortid";
import * as actions from "./sectionsValues";
import { INIT_SECTION_VALUES, ADD_VALUE, REMOVE_VALUE } from "../types";

describe("sections values actions", () => {
  describe("creates an action to init section values", () => {
    const sectionId = "feelings";
    let action;
    beforeEach(() => {
      action = actions.initSectionValues(sectionId);
    });

    it("action should contain correctly type `INIT_SECTION_VALUES`", () => {
      expect(action.type).toEqual(INIT_SECTION_VALUES);
    });

    it("action should contain correctly `sectionId property`", () => {
      expect(action.sectionId).toEqual(sectionId);
    });
  });

  describe("creates an action to add value", () => {
    const sectionName = "feelings";
    const value = { id: shortid.generate(), value: "test", color: "blue" };
    let action;
    beforeEach(() => {
      action = actions.addValue(sectionName, value);
    });

    it("action should contain correctly type `ADD_VALUE`", () => {
      expect(action.type).toEqual(ADD_VALUE);
    });

    it("action should contain correctly `section name property`", () => {
      expect(action.sectionName).toEqual(sectionName);
    });

    it("action should contain correctly `value property`", () => {
      expect(action.value).toEqual(value);
    });
  });

  describe("creates an action to remove value", () => {
    const sectionName = "feelings";
    const valueId = shortid.generate();
    let action;
    beforeEach(() => {
      action = actions.removeValue(sectionName, valueId);
    });

    it("action should contain correctly type `REMOVE_VALUE`", () => {
      expect(action.type).toEqual(REMOVE_VALUE);
    });

    it("action should contain correctly `section name property`", () => {
      expect(action.sectionName).toEqual(sectionName);
    });

    it("action should contain correctly `value property`", () => {
      expect(action.valueId).toEqual(valueId);
    });
  });
});
