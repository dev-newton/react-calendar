import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setMonthIndex } from "actions/calender";
import {
  addReminder,
  deleteReminder,
  editReminder,
  setReminderDate,
  setSelectedReminder,
  setShowReminderModal,
  getWeatherForecast,
} from "actions/reminder";
import { Form } from "antd";
import dayjs from "dayjs";
import {
  getMonth,
  isCurrentDay,
  currentMonth,
  getMonthAndYear,
  getCurrentDay,
} from "utils/dateUtils";
import { objHasFalseValue } from "utils/mainUtil";

const useCalendar = () => {
  const { monthIndex } = useSelector((state) => state.calendar);
  const {
    showReminderModal,
    reminderDate,
    savedReminders,
    selectedReminder,
    weatherForecast,
  } = useSelector((state) => state.reminder);

  const [currMonth, setCurrMonth] = useState(getMonth());
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const [isForecast, setIsForecast] = useState(false);
  const [time, setTime] = useState(
    selectedReminder ? selectedReminder.time : null
  );
  const [timeObj, setTimeObj] = useState(
    selectedReminder ? dayjs(selectedReminder.timeObj) : null
  );
  const [formData, setFormData] = useState({
    title: selectedReminder ? selectedReminder.title : "",
    city: selectedReminder ? selectedReminder.city : "",
  });

  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const dateTime = `${dayjs(timeObj).format("YYYY-MM-DD")}T${time}`;

  // Data to make API call to forecast weather
  const weatherInfo = {
    city: formData.city,
    datetime: dateTime,
  };

  // UPDATE MONTH INDEX WHEN "monthIndex" changes
  useEffect(() => {
    setCurrMonth(getMonth(monthIndex));
  }, [monthIndex]);

  // UPDATE savedReminders storage WHEN "savedReminders" changes
  useEffect(() => {
    localStorage.setItem("savedReminders", JSON.stringify(savedReminders));
  }, [savedReminders]);

  useEffect(() => {
    if (!showReminderModal) {
      getSelectedReminder(null);
      setIsForecast(false);
    }
    /* eslint-disable */
  }, [showReminderModal]);

  //   CALENDAR HEADER FUNCTIONALITY
  const handlePrevMonth = () => dispatch(setMonthIndex(monthIndex - 1));
  const handleNextMonth = () => dispatch(setMonthIndex(monthIndex + 1));
  const handleReset = () => dispatch(setMonthIndex(currentMonth));
  const handleToggleSidebar = () => setToggleSidebar((prev) => !prev);

  // CALENDAR DAY FUNCTIONALITY
  const handleDayClick = (d = getCurrentDay) => {
    dispatch(setReminderDate(d));
    openReminderModal();
  };

  // REMINDER FUNCTIONALITY
  const openReminderModal = () => dispatch(setShowReminderModal(true));
  const handleOk = () => dispatch(setShowReminderModal(false));
  const handleCancel = () => dispatch(setShowReminderModal(false));
  const getSelectedReminder = (rem) => dispatch(setSelectedReminder(rem));
  const deleteSelectedReminder = (rem) => dispatch(deleteReminder(rem));
  const getForecast = () => {
    setIsForecast(false);
    try {
      dispatch(getWeatherForecast(weatherInfo));
      setIsForecast(true);
    } catch (e) {
      console.log(e);
      setIsForecast(false);
    }
  };

  const handleDeleteReminder = (rem) => {
    deleteSelectedReminder(selectedReminder);
    handleOk();
  };

  // FORM FUNCTIONALITY
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTimeChange = (timeObject, timeString) => {
    setTimeObj(timeObject);
    setTime(timeString);
  };

  const handleFormSubmit = () => {
    const data = {
      id: selectedReminder ? selectedReminder.id : Date.now(),
      title: formData.title,
      date: reminderDate,
      time,
      timeObj,
      city: formData.city,
    };

    if (objHasFalseValue(data)) {
      return;
    }

    if (selectedReminder) {
      dispatch(editReminder(data));
    } else {
      dispatch(addReminder(data));
    }

    handleOk();
  };

  return {
    toggleSidebar,
    setToggleSidebar,
    currMonth,
    getMonthAndYear,
    monthIndex,
    isCurrentDay,
    savedReminders,
    timeObj,
    time,
    form,
    formData,
    reminderDate,
    isForecast,
    weatherForecast,
    selectedReminder,
    showReminderModal,
    getForecast,
    getSelectedReminder,
    handleToggleSidebar,
    handleNextMonth,
    handlePrevMonth,
    handleReset,
    handleCancel,
    handleDayClick,
    handleInputChange,
    handleTimeChange,
    handleFormSubmit,
    handleDeleteReminder,
    openReminderModal,
  };
};

export default useCalendar;
