import dayjs from "dayjs";
import localeData from "dayjs//plugin/localeData";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(localeData);
dayjs.extend(customParseFormat);

export const getMonth = (month = dayjs().month()) => {
  const year = dayjs().year();
  const firstDayOfMonthIndex = dayjs(new Date(year, month, 1)).day();
  let currMonthCount = 0 - firstDayOfMonthIndex;
  const dayMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currMonthCount++;
      return dayjs(new Date(year, month, currMonthCount));
    });
  });
  return dayMatrix;
};

export const isCurrentDay = (day) =>
  day.format("DD-MM-YY") === dayjs().format("DD-MM-YY");

export const getCurrentDay = dayjs().format("DD MMM YYYY");

export const getMonthAndYear = (monthIdx) =>
  dayjs(new Date(dayjs().year(), monthIdx)).format("MMMM YYYY");

export const currentMonth = dayjs().month();

export const filterRemindersByDay = (reminders, day) =>
  reminders.filter(
    (rem) => dayjs(rem.date).format("DD-MM-YY") === day.format("DD-MM-YY")
  );
