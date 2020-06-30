import * as actions from "./selectionOptions";
import {
  SET_SELECTION_OPTIONS,
  ADD_SELECTION_OPTION,
  REMOVE_SELECTION_OPTION,
} from "../types";
import options from "../../../data/defaultSelectionOptions";

describe("sections options actions", () => {
  describe("creates an action to set selection options", () => {
    let action;
    beforeEach(() => {
      action = actions.setSelectionOptions([...options]);
    });

    it("action should contain correctly type `SET_SELECTION_OPTIONS`", () => {
      expect(action.type).toEqual(SET_SELECTION_OPTIONS);
    });

    it("action should contain correctly `selectionOptions property`", () => {
      expect(action.selectionOptions).toEqual(options);
    });
  });

  describe("creates an action to add selection option", () => {
    const option = options[2];
    let action;
    beforeEach(() => {
      action = actions.addSelectionOption(option);
    });

    it("action should contain correctly type `ADD_SELECTION_OPTION`", () => {
      expect(action.type).toEqual(ADD_SELECTION_OPTION);
    });

    it("action should contain correctly `option property`", () => {
      expect(action.option).toEqual(option);
    });
  });

  describe("creates an action to remove selection option", () => {
    const optionId = options[2].id;
    let action;
    beforeEach(() => {
      action = actions.removeSelectionOption(optionId);
    });

    it("action should contain correctly type `REMOVE_SELECTION_OPTION`", () => {
      expect(action.type).toEqual(REMOVE_SELECTION_OPTION);
    });

    it("action should contain correctly `optionId property`", () => {
      expect(action.optionId).toEqual(optionId);
    });
  });
});
