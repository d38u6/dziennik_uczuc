import * as lsm from "./localStorageManager";
import { generateRecords } from "../../data/recordsGenerator";
import selectionOptions from "../../data/defaultSelectionOptions";

describe("Local Sotrage Manager", () => {
  describe("set and get item", () => {
    const key = "tested";
    const item = { test: "item" };

    it("should set item to localSotrage", () => {
      lsm.setItem(key, item);
      expect(JSON.parse(localStorage.getItem(key))).toEqual(item);
    });

    it("should get item from localStorage", () => {
      const expectedItem = lsm.getItem(key);
      expect(expectedItem).toEqual(item);
    });
  });

  describe("fetch and save records", () => {
    const records = [...generateRecords(103)];

    it("should save records in localStorage", () => {
      lsm.saveRecords(records);
      expect(JSON.parse(localStorage.getItem(lsm.RECORDS))).toEqual(records);
    });

    it("should fetch records from localSotrage", () => {
      const expectedRecords = lsm.fetchRecords();
      expect(expectedRecords).toEqual(records);
    });
  });

  describe("fetch and save selection options", () => {
    it("should save selection options in localStorage", () => {
      lsm.saveSelectionOpts(selectionOptions);
      expect(JSON.parse(localStorage.getItem(lsm.SELECTION_OPTIONS))).toEqual(
        selectionOptions
      );
    });

    it("should fetch selection options from localSotrage", () => {
      const expectedSelectionOptions = lsm.fetchSelectionOpts();
      expect(expectedSelectionOptions).toEqual(selectionOptions);
    });
  });
});
