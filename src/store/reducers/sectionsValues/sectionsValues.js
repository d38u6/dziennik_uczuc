import { INIT_SECTION_VALUES, ADD_VALUE, REMOVE_VALUE } from "../../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case INIT_SECTION_VALUES:
      return { ...state, [action.sectionId]: [] };
    case ADD_VALUE: {
      const { sectionName, value } = action;
      let values = [...state[sectionName], value];

      if (value.id === "textarea") {
        const areaIndex = state[sectionName].findIndex(({ id }) => id === value.id);
        if (areaIndex > -1) {
          values = [...state[sectionName]];
          values[areaIndex] = value;
        }
      }

      return {
        ...state,
        [sectionName]: values,
      };
    }
    case REMOVE_VALUE: {
      const { sectionName, valueId } = action;
      return {
        ...state,
        [sectionName]: state[sectionName].filter(({ id }) => id !== valueId),
      };
    }

    default:
      return state;
  }
};
