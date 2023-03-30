import { SET_MONTH_INDEX } from "actions/types";
import { currentMonth } from "utils/dateUtils";

const initialState = {
  monthIndex: currentMonth,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_MONTH_INDEX:
      return {
        ...state,
        monthIndex: action.payload,
      };

    default:
      return state;
  }
}
