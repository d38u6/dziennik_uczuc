import { INIT_SECTION_VALUES, ADD_VALUE, REMOVE_VALUE } from "../types";

export const initSectionValues = (id) => ({
  type: INIT_SECTION_VALUES,
  sectionId: id,
});

export const addValue = (sectionName, value) => ({
  type: ADD_VALUE,
  sectionName,
  value,
});
export const removeValue = (sectionName, valueId) => ({
  type: REMOVE_VALUE,
  sectionName,
  valueId,
});
