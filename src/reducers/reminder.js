import {
  SET_REMINDER_DATE,
  SHOW_REMINDER_MODAL,
  ADD_REMINDER,
  EDIT_REMINDER,
  DELETE_REMINDER,
  SET_SELECTED_REMINDER,
  GET_WEATHER_FORECAST,
} from "actions/types";
import { getCurrentDay } from "utils/dateUtils";

const initReminders = () => {
  const storageReminders = localStorage.getItem("savedReminders");
  const parsedReminders = storageReminders ? JSON.parse(storageReminders) : [];

  return parsedReminders;
};

const initialState = {
  showReminderModal: false,
  reminderDate: getCurrentDay,
  savedReminders: initReminders(),
  selectedReminder: null,
  weatherForecast: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_REMINDER_MODAL:
      return {
        ...state,
        showReminderModal: action.payload,
      };

    case SET_REMINDER_DATE:
      return {
        ...state,
        reminderDate: action.payload,
      };

    case ADD_REMINDER:
      return {
        ...state,
        savedReminders: [...state.savedReminders, action.payload],
      };

    case SET_SELECTED_REMINDER:
      return {
        ...state,
        selectedReminder: action.payload,
      };

    case EDIT_REMINDER:
      return {
        ...state,
        savedReminders: state.savedReminders.map((rem) => {
          return rem.id === action.payload.id ? action.payload : rem;
        }),
      };

    case DELETE_REMINDER:
      return {
        ...state,
        savedReminders: state.savedReminders.filter(
          (rem) => rem.id !== action.payload.id
        ),
      };

    case GET_WEATHER_FORECAST:
      return {
        ...state,
        weatherForecast: action.payload,
      };

    default:
      return state;
  }
}
