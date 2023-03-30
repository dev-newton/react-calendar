import { LeftOutlined, MenuOutlined, RightOutlined } from "@ant-design/icons";
import logo from "assets/jobsity_logo_small.png";
import useCalendar from "pages/Calendar/useCalendar.hook";
import PropTypes from "prop-types";

const CalendarHeader = ({ handleToggleSidebar }) => {
  const {
    handleNextMonth,
    handlePrevMonth,
    handleReset,
    monthIndex,
    getMonthAndYear,
  } = useCalendar();

  return (
    <header className="calendar-header">
      <MenuOutlined
        className="calendar-header-menu"
        onClick={handleToggleSidebar}
      />
      <img src={logo} alt="calendar-logo" className="logo" />
      <h4 className="calendar-header-title">Calendar</h4>
      <button onClick={handleReset} className="btn btn-transparent">
        Today
      </button>
      <LeftOutlined
        className="calendar-header-arrow"
        onClick={handlePrevMonth}
      />
      <RightOutlined
        className="calendar-header-arrow"
        onClick={handleNextMonth}
      />
      <h2>{getMonthAndYear(monthIndex)}</h2>
    </header>
  );
};

CalendarHeader.propTypes = {
  handleToggleSidebar: PropTypes.func,
};

export default CalendarHeader;
