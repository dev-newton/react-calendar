import { combineReducers } from "redux";

import calendarReducer from "./calendar";
import reminderReducer from "./reminder";

const reducers = {
  calendar: calendarReducer,
  reminder: reminderReducer,
};

export default combineReducers(reducers);
