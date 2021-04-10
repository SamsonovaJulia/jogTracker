import { combineReducers } from "redux";
import jogReducer from "./jogReducer";
import jogs from "./jogsReducer";
import filterIsActive from "./activateFilterReducer";

const rootReducer = combineReducers({
  jogs: jogs,
  filterIsActive: filterIsActive,
  jogsNew: jogReducer,
});
export default rootReducer;
