import {
  CalendarOutlined,
  ClockCircleOutlined,
  DeleteOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { Form, Modal, TimePicker } from "antd";
import useCalendar from "pages/Calendar/useCalendar.hook";

const ReminderModal = () => {
  const {
    showReminderModal,
    formData,
    form,
    timeObj,
    reminderDate,
    selectedReminder,
    handleDeleteReminder,
    handleInputChange,
    handleTimeChange,
    handleCancel,
    handleFormSubmit,
    getForecast,
    weatherForecast,
    isForecast,
  } = useCalendar();

  return (
    <div>
      <Modal
        title={`${selectedReminder ? "Edit" : "New"}  Reminder`}
        open={showReminderModal}
        onOk={form.submit}
        onCancel={handleCancel}
        className="reminder-modal"
        width={400}
      >
        <Form
          form={form}
          className="form"
          onFinish={handleFormSubmit}
          requiredMark
        >
          <div className="form-row">
            <div className="form-icon"></div>
            <input
              className="input input-lg"
              type="text"
              name="title"
              placeholder="Add title"
              value={formData.title}
              onChange={handleInputChange}
              maxLength={30}
              required
            />
          </div>
          <div className="form-row">
            <CalendarOutlined className="form-icon" />
            <p>{reminderDate}</p>
          </div>
          <div className="form-row">
            <ClockCircleOutlined className="form-icon" />
            <TimePicker value={timeObj} onChange={handleTimeChange} />
          </div>
          <div className="form-row">
            <EnvironmentOutlined className="form-icon" />
            <input
              className="input input-md"
              type="text"
              name="city"
              placeholder="Add a city"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-row">
            <div className="form-icon"></div>
            {/* eslint-disable  */}

            <button
              className="btn btn-weather"
              onClick={getForecast}
              type="button"
              style={{
                backgroundColor: !timeObj || !formData.city ? "grey" : "",
              }}
              disabled={!timeObj && !formData.city}
            >
              Get Weather Forecast
            </button>
          </div>
          <div className="form-row">
            <div className="form-icon"></div>
            {isForecast && <p>{weatherForecast?.days[0].temp}°F</p>}
          </div>
        </Form>
        <DeleteOutlined
          onClick={() => handleDeleteReminder(selectedReminder)}
          className="delete"
        />
      </Modal>
    </div>
  );
};

export default ReminderModal;
