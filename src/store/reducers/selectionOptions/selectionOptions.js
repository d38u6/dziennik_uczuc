import {
  SET_SELECTION_OPTIONS,
  ADD_SELECTION_OPTION,
  REMOVE_SELECTION_OPTION,
} from "../../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case SET_SELECTION_OPTIONS: {
      return action.selectionOptions;
    }
    case ADD_SELECTION_OPTION: {
      return [...state, action.option];
    }
    case REMOVE_SELECTION_OPTION: {
      return state.filter(({ id }) => id !== action.optionId);
    }
    default:
      return state;
  }
};
