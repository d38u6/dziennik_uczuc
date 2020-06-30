import { combineReducers } from "redux";

import selectionOptions from "./selectionOptions/selectionOptions";
import sectionsValues from "./sectionsValues/sectionsValues";
import records from "./records/records";
import alerts from "./alerts/alerts";

export default combineReducers({
  selectionOptions,
  sectionsValues,
  records,
  alerts,
});
