import {
  SET_RECORDS,
  ADD_RECORD,
  REMOVE_RECORD,
  REMOVE_ALL_RECORDS,
} from "../../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case SET_RECORDS: {
      return action.records;
    }
    case ADD_RECORD: {
      return [...state, action.record];
    }
    case REMOVE_RECORD: {
      return state.filter(({ id }) => id !== action.recordId);
    }
    case REMOVE_ALL_RECORDS: {
      return [];
    }
    default:
      return state;
  }
};
