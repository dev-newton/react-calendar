import { Fragment } from "react";

import { CalendarDay } from "components";
import PropTypes from "prop-types";

const CalendarGrid = ({ month }) => {
  return (
    <section className="calendar-grid">
      {month.map((row, i) => (
        <Fragment key={i}>
          {row.map((day, idx) => (
            <CalendarDay key={idx} day={day} rowIdx={i} />
          ))}
        </Fragment>
      ))}
    </section>
  );
};

CalendarGrid.propTypes = {
  month: PropTypes.array,
};

export default CalendarGrid;
