import { combineReducers } from "redux";
import jogReducer from "./jogReducer";
import jogs from "./jogs";
import filterIsActive from "./activateFilterReducer";

const rootReducer = combineReducers({
  jogs: jogs,
  filterIsActive: filterIsActive,
});
export default rootReducer;
