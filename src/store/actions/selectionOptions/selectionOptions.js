import {
  SET_SELECTION_OPTIONS,
  ADD_SELECTION_OPTION,
  REMOVE_SELECTION_OPTION,
} from "../types";

export const setSelectionOptions = (selectionOptions) => ({
  type: SET_SELECTION_OPTIONS,
  selectionOptions,
});

export const addSelectionOption = (option) => ({
  type: ADD_SELECTION_OPTION,
  option,
});

export const removeSelectionOption = (optionId) => ({
  type: REMOVE_SELECTION_OPTION,
  optionId,
});
