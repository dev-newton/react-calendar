import { PlusCircleOutlined } from "@ant-design/icons";
import useCalendar from "pages/Calendar/useCalendar.hook";

const CreateReminderButton = () => {
  const { handleDayClick } = useCalendar();

  return (
    <button onClick={() => handleDayClick()} className="btn btn-reminder">
      <PlusCircleOutlined className="btn btn-reminder-icon" />
      <span>Create Reminder</span>
    </button>
  );
};

export default CreateReminderButton;
