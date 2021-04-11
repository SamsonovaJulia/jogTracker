import { combineReducers } from "redux";
import jogs from "./jogsReducer";
import filterIsActive from "./activateFilterReducer";

const rootReducer = combineReducers({
  jogs: jogs,
  filterIsActive: filterIsActive,
});
export default rootReducer;
