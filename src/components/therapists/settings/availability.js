import React, { useState } from "react";
import { FaPlus } from "react-icons/fa"; // Importing a plus icon

const Availability = () => {
  const [schedule, setSchedule] = useState([
    {
      day: "Monday",
      open: "",
      close: "",
      overtime: false,
      overtimeOpen: "",
      overtimeClose: ""
    },
    {
      day: "Tuesday",
      open: "",
      close: "",
      overtime: false,
      overtimeOpen: "",
      overtimeClose: ""
    },
    {
      day: "Wednesday",
      open: "",
      close: "",
      overtime: false,
      overtimeOpen: "",
      overtimeClose: ""
    },
    {
      day: "Thursday",
      open: "",
      close: "",
      overtime: false,
      overtimeOpen: "",
      overtimeClose: ""
    },
    {
      day: "Friday",
      open: "",
      close: "",
      overtime: false,
      overtimeOpen: "",
      overtimeClose: ""
    },
    {
      day: "Saturday",
      open: "",
      close: "",
      overtime: false,
      overtimeOpen: "",
      overtimeClose: ""
    },
    {
      day: "Sunday",
      open: "",
      close: "",
      overtime: false,
      overtimeOpen: "",
      overtimeClose: ""
    }
  ]);

  const handleChange = (index, field, value) => {
    const newSchedule = [...schedule];
    newSchedule[index][field] = value;
    setSchedule(newSchedule);
  };
  console.log(schedule);

  const handleCheckboxChange = (index) => {
    const newSchedule = [...schedule];
    newSchedule[index].overtime = !newSchedule[index].overtime;
    setSchedule(newSchedule);
  };

  const handleOvertimeClick = (index) => {
    const newSchedule = [...schedule];
    newSchedule[index].overtime = true;
    setSchedule(newSchedule);
  };

  return (
    <div>
      <h4>Availability Schedule</h4>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Open Time</th>
            <th>Close Time</th>
            <th>Overtime</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((daySchedule, index) => (
            <tr key={daySchedule.day}>
              <td>{daySchedule.day}</td>
              <td>
                <input
                  type="time"
                  value={daySchedule.open}
                  onChange={(e) => handleChange(index, "open", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="time"
                  value={daySchedule.close}
                  onChange={(e) => handleChange(index, "close", e.target.value)}
                />
              </td>
              <td>
                {daySchedule.overtime ? (
                  <>
                    <input
                      type="time"
                      value={daySchedule.overtimeOpen}
                      onChange={(e) =>
                        handleChange(index, "overtimeOpen", e.target.value)
                      }
                      placeholder="Open"
                    />
                    <input
                      type="time"
                      value={daySchedule.overtimeClose}
                      onChange={(e) =>
                        handleChange(index, "overtimeClose", e.target.value)
                      }
                      placeholder="Close"
                    />
                  </>
                ) : (
                  <FaPlus
                    onClick={() => handleOvertimeClick(index)}
                    style={{ cursor: "pointer" }}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Availability;
