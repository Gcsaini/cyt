import React, { useState } from "react";
import { FaPlus } from "react-icons/fa"; // Importing a plus icon
import "./availability.css";

const Availability = () => {
  const [schedule, setSchedule] = useState([
    {
      day: "Monday",
      date: "",
      open: "",
      close: "",
      overtime: []
    },
    {
      day: "Tuesday",
      date: "",
      open: "",
      close: "",
      overtime: []
    },
    {
      day: "Wednesday",
      date: "",
      open: "",
      close: "",
      overtime: []
    },
    {
      day: "Thursday",
      date: "",
      open: "",
      close: "",
      overtime: []
    },
    {
      day: "Friday",
      date: "",
      open: "",
      close: "",
      overtime: []
    },
    {
      day: "Saturday",
      date: "",
      open: "",
      close: "",
      overtime: []
    },
    {
      day: "Sunday",
      date: "",
      open: "",
      close: "",
      overtime: []
    }
  ]);

  const handleChange = (index, field, value) => {
    const newSchedule = [...schedule];
    newSchedule[index][field] = value;
    setSchedule(newSchedule);
  };

  const handleOvertimeChange = (dayIndex, overtimeIndex, field, value) => {
    const newSchedule = [...schedule];
    newSchedule[dayIndex].overtime[overtimeIndex][field] = value;
    setSchedule(newSchedule);
  };

  const handleAddOvertime = (index) => {
    const newSchedule = [...schedule];
    if (newSchedule[index].overtime.length < 5) {
      newSchedule[index].overtime.push({ open: "", close: "" });
      setSchedule(newSchedule);
    }
  };

  return (
    <>
      <div>
        <div className="table-container">
          <table className="availability-table">
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
                  <td data-label="Day">{daySchedule.day}</td>

                  <td data-label="Open Time">
                    <input
                      type="time"
                      value={daySchedule.open}
                      onChange={(e) =>
                        handleChange(index, "open", e.target.value)
                      }
                    />
                  </td>
                  <td data-label="Close Time">
                    <input
                      type="time"
                      value={daySchedule.close}
                      onChange={(e) =>
                        handleChange(index, "close", e.target.value)
                      }
                    />
                  </td>
                  <td data-label="Overtime">
                    {daySchedule.overtime.map((overtime, overtimeIndex) => (
                      <div key={overtimeIndex} className="overtime-row">
                        <input
                          type="time"
                          value={overtime.open}
                          onChange={(e) =>
                            handleOvertimeChange(
                              index,
                              overtimeIndex,
                              "open",
                              e.target.value
                            )
                          }
                        />
                        <input
                          type="time"
                          value={overtime.close}
                          onChange={(e) =>
                            handleOvertimeChange(
                              index,
                              overtimeIndex,
                              "close",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    ))}
                    {daySchedule.overtime.length < 5 && (
                      <FaPlus
                        onClick={() => handleAddOvertime(index)}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="col-12 mt--10">
        <div className="rbt-form-group">
          <a
            className="rbt-btn btn-gradient"
            href="/instructor/instructor-settings#"
          >
            Save & Next
          </a>
        </div>
      </div>
    </>
  );
};

export default Availability;
