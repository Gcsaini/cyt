import React, { useState } from "react";

const Availability = () => {
  const initialTimes = {
    Monday: [{ open: "", close: "" }],
    Tuesday: [{ open: "", close: "" }],
    Wednesday: [{ open: "", close: "" }],
    Thursday: [{ open: "", close: "" }],
    Friday: [{ open: "", close: "" }],
    Saturday: [{ open: "", close: "" }],
    Sunday: [{ open: "", close: "" }]
  };

  const [times, setTimes] = useState(initialTimes);

  const allTimes = [
    "12:00am",
    "01:00am",
    "01:30am",
    "02:00am",
    "02:30am",
    "03:00am",
    "03:30am",
    "04:00am",
    "04:30am",
    "05:00am",
    "05:30am",
    "06:00am",
    "06:30am",
    "07:00am",
    "07:30am",
    "08:00am",
    "08:30am",
    "09:00am",
    "09:30am",
    "10:00am",
    "10:30am",
    "11:00am",
    "11:30am",
    "12:00pm",
    "01:00pm",
    "01:30pm",
    "02:00pm",
    "02:30pm",
    "03:00pm",
    "03:30pm",
    "04:00pm",
    "04:30pm",
    "05:00pm",
    "05:30pm",
    "06:00pm",
    "06:30pm",
    "07:00pm",
    "07:30pm",
    "08:00pm",
    "08:30pm",
    "09:00pm",
    "09:30pm",
    "10:00pm",
    "10:30pm",
    "11:00pm",
    "11:30pm"
  ];

  const handleTimeChange = (day, index, type, event) => {
    const newTimes = { ...times };
    newTimes[day][index][type] = event.target.value;
    setTimes(newTimes);
  };

  const addOvertime = (day) => {
    const newTimes = { ...times };
    newTimes[day].push({ open: "", close: "" });
    setTimes(newTimes);
  };

  const deleteOvertime = (day, index) => {
    const newTimes = { ...times };
    newTimes[day].splice(index, 1);
    setTimes(newTimes);
  };

  return (
    <>
      <table className="rbt-table table table-borderless">
        <thead>
          <tr>
            <th>Days</th>
            <th>Opens at</th>
            <th>Closes at</th>
            <th>Add More</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(times).map((day) => (
            <React.Fragment key={day}>
              {times[day].map((time, index) => (
                <tr key={`${day}-${index}`}>
                  <th>{index === 0 ? day : ""}</th>
                  <td>
                    <div className="col-lg-6">
                      <div className="rbt-modern-select bg-transparent height-45">
                        <select
                          className="form-select"
                          value={time.open}
                          onChange={(event) =>
                            handleTimeChange(day, index, "open", event)
                          }
                          style={{ padding: "10px" }}
                        >
                          <option value="">Select Time</option>
                          {allTimes.map((timeOption) => (
                            <option key={timeOption} value={timeOption}>
                              {timeOption}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="col-lg-6">
                      <div className="rbt-modern-select bg-transparent height-45">
                        <select
                          className="form-select"
                          value={time.close}
                          onChange={(event) =>
                            handleTimeChange(day, index, "close", event)
                          }
                          style={{ padding: "10px" }}
                        >
                          <option value="">Select Time</option>
                          {allTimes.map((timeOption) => (
                            <option key={timeOption} value={timeOption}>
                              {timeOption}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </td>
                  <td>
                    {index === 0 ? (
                      <a
                        className="rbt-btn btn-gradient btn-sm"
                        href="#"
                        onClick={() => addOvertime(day)}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </a>
                    ) : (
                      <a
                        className="rbt-btn btn-gradient btn-sm"
                        href="#"
                        onClick={() => deleteOvertime(day, index)}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>

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
