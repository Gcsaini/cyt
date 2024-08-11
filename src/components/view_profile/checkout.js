import React, { useEffect } from "react";
import ProfileCheckoutCard from "./profile-checkout-card";
import { getServiceFormats } from "../../utils/helpers";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./checkout-styles.css";
import { generateHourlyIntervals } from "../../utils/time";
import FormMessage from "../global/form-message";
import { postData } from "../../utils/actions";
import { BookTherapistUrl } from "../../utils/url";
import { useNavigate } from "react-router-dom";
import FormProgressBar from "../global/form-progressbar";
export default function TherapistCheckout({ profile }) {
  const styles = {
    iconStyle: {
      fontSize: 12,
      width: 20,
      height: 20,
    },
    listStyle: {
      lineHeight: "18px",
      marginBottom: 0,
    },
    selectedIconStyle: {
      fontSize: 12,
      width: 20,
      height: 20,
      backgroundColor: "#fff",
      color: "#2d54e6",
      boxShadow: "0 0 10px rgba(0,0,0,.1)",
    },
    selectStyle: { lineHeight: "20px", height: "50px" },
  };
  const navigate = useNavigate();
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState("");
  const [services, setServices] = React.useState([]);
  const [sessionFormats, setSessionFormats] = React.useState([]);
  const [disabledDates, setDisabledDates] = React.useState([]);
  const [selectedDate, setSelectedDate] = React.useState("");
  const [availableTimes, setAvailableTimes] = React.useState([]);
  const [other, setOther] = React.useState(false);
  const [info, setInfo] = React.useState({
    phone: "",
    service: "",
    format: "",
    whom: "",
    cname: "",
    realtion_with_client: "",
    gender: "",
    dob: "",
    date: "",
    open_time: "",
    close_time: "",
    amount: 0,
    therapist: profile._id,
  });

  const handleChange = (name, value) => {
    if (name === "service") {
      const selectedService = services.find(
        (service) => service.service === value
      );
      if (selectedService) {
        setSessionFormats(selectedService.formats);
        setInfo((prevInfo) => ({
          ...prevInfo,
          service: value,
          format: selectedService.formats[0].format,
          amount: selectedService.formats[0].price,
        }));
      }
    } else if (name === "format") {
      const selectedFormat = sessionFormats.find(
        (format) => format.format === value
      );
      if (selectedFormat && Object.keys(selectedFormat).length > 0) {
        setInfo((prevInfo) => {
          const updatedInfo = {
            ...prevInfo,
            format: selectedFormat.format,
            amount: selectedFormat.price,
          };
          return updatedInfo;
        });
      }
    } else if (name === "whom") {
      setInfo((prevInfo) => ({
        ...prevInfo,
        [name]: value,
      }));
      if (value === "For Other") {
        setOther(true);
      } else {
        setOther(false);
        setInfo((prevInfo) => ({
          ...prevInfo,
          ["cname"]: "",
          ["realtion_with_client"]: "",
          ["gender"]: "",
          ["dob"]: "",
        }));
      }
    } else if (name === "phone") {
      const formattedValue = value.replace(/\D/g, "");
      if (formattedValue.length <= 10) {
        setInfo((prevInfo) => ({
          ...prevInfo,
          [name]: formattedValue,
        }));
      }
    } else {
      setInfo((prevInfo) => ({
        ...prevInfo,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async () => {
    setSuccess("");
    if (info.phone.length !== 10) {
      setError("Please enter phone number");
      return;
    } else if (info.service === "") {
      setError("Please select service.");
      return;
    } else if (info.whom === "") {
      setError("Please select for whom you want to take service.");
      return;
    } else if (info.format === "") {
      setError("Please select format.");
      return;
    } else if (info.whom == "For Other" && info.cname.length < 4) {
      setError("Please enter valid clinet name.");
      return;
    } else if (info.whom == "For Other" && info.realtion_with_client === "") {
      setError("Please select relation with client.");
      return;
    } else if (info.whom == "For Other" && info.gender === "") {
      setError("Please select gender.");
      return;
    } else if (info.whom == "For Other" && info.dob === "") {
      setError("Please enter date of birht of client.");
      return;
    } else if (info.open_time === "" && info.close_time === "") {
      setError("Please select the time you want to start.");
      return;
    } else {
      setError("");
      setLoading(true);
      try {
        setLoading(true);
        const response = await postData(BookTherapistUrl, info);
        if (response.status) {
          setSuccess(response.message);
          if (response.data.id !== "") {
            navigate(`/payment-pending/${response.data.id}`);
            setLoading(false);
          }
        } else {
          setError("Something went wrong");
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setError(error?.response?.data?.message);
        setLoading(false);
      }
    }
  };

  const handleDate = (date) => {
    setSelectedDate(date);
    setInfo((prevInfo) => ({
      ...prevInfo,
      ["date"]: date,
    }));
    const times = filterTimesForSelectedDate(date);
    setAvailableTimes([]);
    setAvailableTimes(times);
  };

  const handleTimeSelect = (open, close) => {
    setInfo((prev) => ({ ...prev, open_time: open, close_time: close }));
  };

  const generateDisabledDates = (availability) => {
    const today = new Date();
    const disabled = [];

    disabled.push(today);

    const availableDays = availability.map((avail) => avail.day);
    const allDays = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    allDays.forEach((day) => {
      if (!availableDays.includes(day)) {
        for (let i = 0; i < 365; i++) {
          const date = new Date();
          date.setDate(today.getDate() + i);
          if (date.toLocaleString("en-US", { weekday: "long" }) === day) {
            disabled.push(date);
          }
        }
      }
    });

    setDisabledDates(disabled);
    return disabled;
  };

  const findFirstAvailableDate = (disabled) => {
    const today = new Date();
    for (let i = 0; i < 365; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      if (!isDateDisabled(date, disabled)) {
        return date;
      }
    }
    return null;
  };

  const isDateDisabled = (date, disabledDates) => {
    return disabledDates.some(
      (disabledDate) =>
        disabledDate.getFullYear() === date.getFullYear() &&
        disabledDate.getMonth() === date.getMonth() &&
        disabledDate.getDate() === date.getDate()
    );
  };

  const filterTimesForSelectedDate = (date) => {
    const day = date.toLocaleString("en-US", { weekday: "long" });
    const scheduleForDay = profile.schedule.find((avail) => avail.day === day);
    return scheduleForDay ? scheduleForDay.times : [];
  };

  useEffect(() => {
    if (profile) {
      const servicesres = getServiceFormats(profile);
      setServices(servicesres);
      if (servicesres.length > 0) {
        setInfo((prevInfo) => ({
          ...prevInfo,
          format: servicesres[0].formats[0].format,
          service: servicesres[0].service,
          amount: servicesres[0].formats[0].price,
        }));
        setSessionFormats(servicesres[0].formats);
      }
    }
    if (profile.schedule.length > 0) {
      const disabled = generateDisabledDates(profile.schedule);
      const defaultDate = findFirstAvailableDate(disabled);
      setSelectedDate(defaultDate);
      setInfo((prevInfo) => ({
        ...prevInfo,
        ["date"]: defaultDate,
      }));
      if (defaultDate) {
        const times = filterTimesForSelectedDate(defaultDate);
        setAvailableTimes(times);
      }
    }
  }, [profile]);

  console.log("proffilee", info);
  return (
    <div className="checkout_area bg-color-white rbt-section-gap">
      <div className="container">
        <div className="row g-5 checkout-form">
          <div className="col-lg-7">
            <ProfileCheckoutCard pageData={profile} />
            <div className="checkout-content-wrapper mt--20">
              <div id="billing-form">
                <h4 className="checkout-title">Billing Address</h4>
                <FormMessage success={success} error={error} />
                <div className="row mt--15">
                  <div className="col-md-6 col-12 mb--10">
                    <label htmlFor="name">First Name*</label>
                    <input
                      type="text"
                      placeholder="First Name"
                      value={profile.name}
                      id="name"
                    />
                  </div>

                  <div className="col-md-6 col-12 mb--10">
                    <label htmlFor="phone">Phone no*</label>
                    <input
                      type="text"
                      placeholder="Phone number"
                      id="phone"
                      name="phone"
                      value={info.phone || ""}
                      onChange={(e) =>
                        handleChange(e.target.name, e.target.value)
                      }
                    />
                  </div>
                  <div className="col-md-6 col-12 mb--20">
                    <label htmlFor="service">Service</label>
                    <select
                      id="service"
                      style={styles.selectStyle}
                      name="service"
                      value={info.service}
                      onChange={(e) =>
                        handleChange(e.target.name, e.target.value)
                      }
                    >
                      {services.map((item) => {
                        return (
                          <option value={item.service} key={item.service}>
                            {item.service}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="col-md-6 col-12 mb--20">
                    <label htmlFor="format">Session Formats</label>
                    <select
                      id="format"
                      style={styles.selectStyle}
                      name="format"
                      value={info.format}
                      onChange={(e) =>
                        handleChange(e.target.name, e.target.value)
                      }
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      {sessionFormats.map((item) => {
                        return (
                          <option value={item.format} key={item.format}>
                            {item.format}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="col-md-6 col-12 mb--20">
                    <label htmlFor="gender">For Whom</label>
                    <select
                      id="gender"
                      style={styles.selectStyle}
                      value={info.whom}
                      name="whom"
                      onChange={(e) =>
                        handleChange(e.target.name, e.target.value)
                      }
                    >
                      <option value="" disabled selected>
                        Select
                      </option>
                      <option value="Self">Self</option>
                      <option value="For Other">For Other</option>
                    </select>
                  </div>

                  {other && (
                    <>
                      <div className="col-md-6 col-12 mb--10">
                        <label htmlFor="client_name">Client Name*</label>
                        <input
                          type="text"
                          placeholder="Client Name"
                          id="client_name"
                          name="cname"
                          value={info.cname}
                          onChange={(e) =>
                            handleChange(e.target.name, e.target.value)
                          }
                        />
                      </div>
                      <div className="col-md-6 col-12 mb--10">
                        <label htmlFor="realtion_with_client">
                          Relation With Client
                        </label>
                        <select
                          id="realtion_with_client"
                          style={styles.selectStyle}
                          value={info.realtion_with_client}
                          name="realtion_with_client"
                          onChange={(e) =>
                            handleChange(e.target.name, e.target.value)
                          }
                        >
                          <option value="" disabled selected>
                            Select
                          </option>
                          <option value="Brother">Brother</option>
                          <option value="Sister">Sister</option>
                          <option value="Spouse">Spouse</option>
                          <option value="Mother">Mother</option>
                          <option value="Father">Father</option>
                        </select>
                      </div>
                      <div className="col-md-6 col-12 mb--20">
                        <label htmlFor="gender">Gender</label>
                        <select
                          id="gender"
                          style={styles.selectStyle}
                          name="gender"
                          value={info.gender}
                          onChange={(e) =>
                            handleChange(e.target.name, e.target.value)
                          }
                        >
                          <option value="" disabled selected>
                            Select
                          </option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Non-binary">Non-binary</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="col-md-6 col-12 mb--10">
                        <label htmlFor="dob">Date of birth</label>
                        <input
                          type="date"
                          id="dob"
                          name="dob"
                          max="2024-08-10"
                          value={info.dob}
                          onChange={(e) =>
                            handleChange(e.target.name, e.target.value)
                          }
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="col-12 mb--20">
              <div className="checkout-cart-total">
                <h4 style={{ fontSize: 24 }}>Availabilities</h4>
                <DatePicker
                  selected={selectedDate}
                  minDate={new Date()}
                  onChange={handleDate}
                  excludeDates={disabledDates}
                  className="custom-datepicker"
                />

                <div className="single-list" style={{ marginTop: 15 }}>
                  <h5 className="price-title" style={{ fontSize: "16px" }}>
                    {selectedDate &&
                      selectedDate.toLocaleString("en-US", {
                        weekday: "long",
                      })}
                  </h5>

                  <div
                    className="row plan-offer-list"
                    style={{ borderBottom: "none", marginTop: "-10px" }}
                  >
                    {availableTimes &&
                      availableTimes.length > 0 &&
                      availableTimes.map((time) => {
                        return generateHourlyIntervals(
                          time.open,
                          time.close
                        ).map((item, index) => {
                          return (
                            <div
                              className="col-lg-6"
                              key={index}
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                handleTimeSelect(item.open, item.close)
                              }
                            >
                              <li style={styles.listStyle}>
                                <i
                                  className="feather-check"
                                  style={
                                    info.open_time === item.open &&
                                    info.close_time === item.close
                                      ? styles.selectedIconStyle
                                      : styles.iconStyle
                                  }
                                ></i>
                                {item.open}-{item.close}
                              </li>
                            </div>
                          );
                        });
                      })}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mb--30">
              <div className="checkout-cart-total">
                <h4>
                  Product <span>Total</span>
                </h4>
                <ul>
                  <li>
                    {info.service}&nbsp;({info.format})
                    <span>₹{info.amount}</span>
                  </li>
                </ul>
                <p>
                  Shipping Fee <span>0</span>
                </p>
                <p>
                  Sub Total<span>₹{info.amount}</span>
                </p>

                <h4 className="mt--30">
                  Grand Total <span>₹{info.amount}</span>
                </h4>
              </div>
            </div>
            <div className="plceholder-button mt--10">
              {loading ? (
                <FormProgressBar />
              ) : (
                <button
                  className="rbt-btn btn-gradient hover-icon-reverse"
                  onClick={handleSubmit}
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Place order</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
