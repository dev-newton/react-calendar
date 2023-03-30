import { SET_MONTH_INDEX } from "./types";

export const setMonthIndex = (index) => (dispatch) => {
  dispatch({
    type: SET_MONTH_INDEX,
    payload: index,
  });
};
