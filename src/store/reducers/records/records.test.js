import reducer from "./records";
import * as actions from "../../actions/records/records";

import { generateRecords, generateRecord } from "../../../data/recordsGenerator";

const records = [...generateRecords(44)];

describe("records reducer", () => {
  it("should set records array to state", () => {
    expect(reducer([], actions.setRecords(records))).toEqual(records);
  });

  it("should add new record to state", () => {
    const record = generateRecord();
    expect(reducer(records, actions.addRecord(record))).toEqual([
      ...records,
      record,
    ]);
  });

  it("should remove record from state", () => {
    const recordId = records[2];
    expect(reducer(records, actions.removeRecord(recordId))).toEqual(
      records.filter(({ id }) => id !== recordId)
    );
  });

  it("should remove all records from state", () => {
    expect(reducer(records, actions.removeAllRecords())).toEqual([]);
  });
});
