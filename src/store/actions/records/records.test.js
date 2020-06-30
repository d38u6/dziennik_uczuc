import shortid from "shortid";
import * as actions from "./records";
import {
  SET_RECORDS,
  ADD_RECORD,
  REMOVE_RECORD,
  REMOVE_ALL_RECORDS,
} from "../types";
import { generateRecords, generateRecord } from "../../../data/recordsGenerator";

describe("records actions", () => {
  describe("creates an action to set records", () => {
    let records = [...generateRecords(105)];
    let action;
    beforeEach(() => {
      action = actions.setRecords(records);
    });

    it("action should contain correctly type `SET_RECORDS`", () => {
      expect(action.type).toEqual(SET_RECORDS);
    });

    it("action should contain correctly `records array`", () => {
      expect(action.records).toEqual(records);
    });
  });

  describe("creates an action to add record", () => {
    let action;
    const record = generateRecord();
    beforeEach(() => {
      action = actions.addRecord(record);
    });

    it("action should contain correctly type `ADD_RECORD`", () => {
      expect(action.type).toEqual(ADD_RECORD);
    });

    it("action should contain `record property`", () => {
      expect(action.record).toEqual(record);
    });
  });

  describe("creates an action to remove record", () => {
    let action;
    const recordId = shortid.generate();
    beforeEach(() => {
      action = actions.removeRecord(recordId);
    });

    it("action should contain correctly type `REMOVE_RECORD`", () => {
      expect(action.type).toEqual(REMOVE_RECORD);
    });

    it("action should contain `id property`", () => {
      expect(action.recordId).toEqual(recordId);
    });
  });

  describe("creates an action to remove all records", () => {
    let action;
    beforeEach(() => {
      action = actions.removeAllRecords();
    });

    it("action should contain correctly type `REMOVE_ALL_RECORDS`", () => {
      expect(action.type).toEqual(REMOVE_ALL_RECORDS);
    });
  });
});
