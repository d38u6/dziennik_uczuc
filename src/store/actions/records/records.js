import {
  SET_RECORDS,
  ADD_RECORD,
  REMOVE_RECORD,
  REMOVE_ALL_RECORDS,
} from "../types";

export const setRecords = (records) => ({ type: SET_RECORDS, records });

export const addRecord = (record) => ({ type: ADD_RECORD, record });

export const removeRecord = (recordId) => ({ type: REMOVE_RECORD, recordId });

export const removeAllRecords = () => ({ type: REMOVE_ALL_RECORDS });
