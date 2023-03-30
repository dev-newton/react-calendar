import apiService from "services/apiService";

import {
  SHOW_REMINDER_MODAL,
  SET_REMINDER_DATE,
  ADD_REMINDER,
  EDIT_REMINDER,
  DELETE_REMINDER,
  SET_SELECTED_REMINDER,
  GET_WEATHER_FORECAST,
} from "./types";

export const setShowReminderModal = (value) => (dispatch) => {
  dispatch({
    type: SHOW_REMINDER_MODAL,
    payload: value,
  });
};

export const setReminderDate = (value) => (dispatch) => {
  dispatch({
    type: SET_REMINDER_DATE,
    payload: value,
  });
};

export const addReminder = (reminder) => (dispatch) => {
  dispatch({
    type: ADD_REMINDER,
    payload: reminder,
  });
};

export const setSelectedReminder = (reminder) => (dispatch) => {
  dispatch({
    type: SET_SELECTED_REMINDER,
    payload: reminder,
  });
};

export const editReminder = (reminder) => (dispatch) => {
  dispatch({
    type: EDIT_REMINDER,
    payload: reminder,
  });
};

export const deleteReminder = (reminder) => (dispatch) => {
  dispatch({
    type: DELETE_REMINDER,
    payload: reminder,
  });
};

export const getWeatherForecast = (data) => async (dispatch) => {
  try {
    const response = await apiService.getForecast(data);
    dispatch({
      type: GET_WEATHER_FORECAST,
      payload: response?.data,
    });
  } catch (error) {
    throw error.response?.data.message;
  }
};
