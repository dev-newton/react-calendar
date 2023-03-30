import { useEffect, useState } from "react";

import useCalendar from "pages/Calendar/useCalendar.hook";
import PropTypes from "prop-types";
import { filterRemindersByDay } from "utils/dateUtils";

const CalendarDay = ({ day, rowIdx }) => {
  const { isCurrentDay, handleDayClick, savedReminders, getSelectedReminder } =
    useCalendar();

  const [dayReminders, setDayReminders] = useState([]);

  useEffect(() => {
    const reminders = filterRemindersByDay(savedReminders, day);
    setDayReminders(reminders);
  }, [savedReminders, day]);

  return (
    <div className="calendar-day">
      <header className="calendar-day-header">
        {rowIdx === 0 && (
          <p className="day-text">{day.format("dddd").toUpperCase()}</p>
        )}

        <p className={`day-number ${isCurrentDay(day) ? "active" : ""}`}>
          {`${Number(day.format("DD"))} ${
            Number(day.format("D")) === 1 ? day.format("MMM") : ""
          }`}
        </p>
      </header>
      <div
        onClick={() => handleDayClick(day.format("DD MMM YYYY"))}
        className="reminder-wrapper"
      >
        {dayReminders?.map((rem, i) => (
          <div
            key={i}
            onClick={() => getSelectedReminder(rem)}
            className="reminder-item"
          >
            {rem.title}
          </div>
        ))}
      </div>
    </div>
  );
};

CalendarDay.propTypes = {
  day: PropTypes.instanceOf(Object).isRequired,
  rowIdx: PropTypes.number,
};

export default CalendarDay;
