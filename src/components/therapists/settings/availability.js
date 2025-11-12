import React, { useEffect, useState } from "react";
import "./availability.css";
import { allTimes } from "../../../utils/static-lists";
import useTherapistStore from "../../../store/therapistStore";
import FormProgressBar from "../../global/form-progressbar";
import FormMessage from "../../global/form-message";
import { postData } from "../../../utils/actions";
import {
  updateAvailabilitiesUrl,
} from "../../../utils/url";

const Availability = () => {
  const { therapistInfo, times, setTimes, setTimesAll, addOvertime, deleteOvertime } =
    useTherapistStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleTimeChange = (day, index, type, value) => {
    setTimes(day, index, type, value);
  };

  const validateTimes = () => {
    const allEmpty = Object.values(times).every((dayTimes) =>
      dayTimes.every((timeSlot) => !timeSlot.open && !timeSlot.close)
    );

    return !allEmpty;
  };

  const handleSubmit = async () => {
    if (validateTimes()) {
      setError("");
      const schedule = transformTimesToSchedule(times);
      const data = {
        schedule: schedule,
      };
      try {
        setLoading(true);
        const response = await postData(updateAvailabilitiesUrl, data);
        if (response.status) {
          setSuccess(response.message);
          setError("");
        } else {
          setError("Something went wrong");
        }
      } catch (error) {
        setError(error.response.data.message);
      }
      setLoading(false);
    } else {
      setError("Please select fill times");
    }
  };

  const transformTimesToSchedule = (times) => {
    return Object.entries(times).reduce((schedule, [day, times]) => {
      const validTimes = times.filter(
        (time) => time.open !== "" && time.close !== ""
      );
      if (validTimes.length > 0) {
        schedule.push({ day, times: validTimes });
      }
      return schedule;
    }, []);
  };

  const transformScheduleToTimes = (schedule) => {
    const initialTimes = {
      Monday: [{ open: "", close: "" }],
      Tuesday: [{ open: "", close: "" }],
      Wednesday: [{ open: "", close: "" }],
      Thursday: [{ open: "", close: "" }],
      Friday: [{ open: "", close: "" }],
      Saturday: [{ open: "", close: "" }],
      Sunday: [{ open: "", close: "" }],
    };

    schedule.forEach(({ day, times }) => {
      if (!initialTimes[day]) {
        initialTimes[day] = []; // Initialize with an empty array if day is not present
      }
      initialTimes[day] = times.map((time) => ({
        open: time.open,
        close: time.close,
      }));
    });

    return initialTimes;
  };

  const getData = async () => {
    const transformedTimes = transformScheduleToTimes(therapistInfo.availabilities);
    setTimesAll(transformedTimes);
  };
  useEffect(() => {
    if (!validateTimes()) {
      getData();
    }
  }, [setTimes]);

  const selectStyle = { lineHeight: "20px", height: "50px" };
  return (
    <>
      <div className="rbt-table-wrapper">
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
                        <div className="rbt-form-group">
                          <select
                            style={selectStyle}
                            value={time.open}
                            onChange={(e) =>
                              handleTimeChange(
                                day,
                                index,
                                "open",
                                e.target.value
                              )
                            }
                          >
                            <option value="">Select Time &nbsp;&nbsp;</option>
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
                        <div className="rbt-form-group">
                          <select
                            style={selectStyle}
                            value={time.close}
                            onChange={(e) =>
                              handleTimeChange(
                                day,
                                index,
                                "close",
                                e.target.value
                              )
                            }
                          >
                            <option value="">
                              Select Time&nbsp;&nbsp;&nbsp;&nbsp;
                            </option>
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
      </div>
      <FormMessage error={error} success={success} />
      <div className="col-12 mt--10">
        <div className="rbt-form-group">
          {loading ? (
            <FormProgressBar />
          ) : (
            <button className="rbt-btn btn-gradient" onClick={handleSubmit}>
              Save & Next
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Availability;
