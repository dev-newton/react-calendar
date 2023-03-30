import {
  CalendarHeader,
  CalendarGrid,
  CalendarSidebar,
  ReminderModal,
} from "components";

import useCalendar from "./useCalendar.hook";
import "./Calendar.styles.scss";

const Calendar = () => {
  const { toggleSidebar, handleToggleSidebar, currMonth, showReminderModal } =
    useCalendar();

  return (
    <>
      {showReminderModal && <ReminderModal />}
      <div className="calendar">
        <CalendarHeader handleToggleSidebar={handleToggleSidebar} />
        <div className={`${toggleSidebar ? "row" : ""}`}>
          {toggleSidebar && <CalendarSidebar />}
          <CalendarGrid month={currMonth} />
        </div>
      </div>
    </>
  );
};

export default Calendar;
