import { ADD_ALERT, REMOVE_ALERT } from "../../actions/types";
import shortid from "shortid";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ALERT: {
      return [...state, { id: shortid.generate(), ...action.alert }];
    }
    case REMOVE_ALERT: {
      return state.filter(({ id }) => id !== action.id);
    }
    default:
      return state;
  }
};

export default reducer;
