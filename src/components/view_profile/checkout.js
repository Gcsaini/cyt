import React, { useEffect } from "react";
import ProfileCheckoutCard from "./profile-checkout-card";
import { getServiceFormats } from "../../utils/helpers";
import "react-datepicker/dist/react-datepicker.css";
import "./checkout-styles.css";
import FormMessage from "../global/form-message";
import { postData } from "../../utils/actions";
import { BookTherapistUrl, BookTherapistUrlAnomalously, verifyOtpUrl } from "../../utils/url";
import { useNavigate } from "react-router-dom";
import FormProgressBar from "../global/form-progressbar";
import useUserStore from "../../store/userStore";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
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
export default function TherapistCheckout({ profile }) {
  const { userInfo } = useUserStore();
  const navigate = useNavigate();
  const [error, setError] = React.useState("");
  const [otpError, setOtpError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState("");
  const [services, setServices] = React.useState([]);
  const [sessionFormats, setSessionFormats] = React.useState([]);
  const [other, setOther] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [otp, setOtp] = React.useState("");
  const [bookingId, setBookingId] = React.useState();

  const [info, setInfo] = React.useState({
    name: userInfo.name || "",
    phone: "",
    email: "",
    service: "",
    format: "",
    whom: userInfo.email ? "" : "Self",
    cname: "",
    realtion_with_client: "",
    notes: "",
    age: "",
    amount: 0,
    therapist: profile._id,
    isLoggedIn: false
  });


  const handleChange = (name, value) => {
    if (name === "name" || name === "notes") {
      setInfo((prevInfo) => ({
        ...prevInfo,
        [name]: value,
      }));
    } else if (name === "service") {
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
          ["age"]: "",
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
    } else if (name === "age") {
      const formattedValue = value.replace(/\D/g, "");
      setInfo((prevInfo) => ({
        ...prevInfo,
        [name]: formattedValue,
      }));
    }
    else if (name === "otp") {
      const formattedValue = value.replace(/\D/g, "").slice(0, 6); // only numbers, max 6 digits
      setOtp(formattedValue);
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
    }
    else if (!userInfo.email && info.email === "") {
      setError("Please Enter Email id.");
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
    } else if (info.whom == "For Other" && info.age === "") {
      setError("Please enter age  of client.");
      return;
    } else if (info.whom === "For Other" && (info.age < 7 || info.age > 90)) {
      setError("Please enter valid age");
      return;
    } else {
      setError("");
      setLoading(true);
      try {
        setLoading(true);
        const response = await postData(info.isLoggedIn ? BookTherapistUrl : BookTherapistUrlAnomalously, info);
        if (response.status) {
          if (info.isLoggedIn) {
            setSuccess(response.message);
            if (response.data.id !== "") {
              navigate(`/payment-pending/${response.data.id}`);
            }
          } else {
            setBookingId(response.data.id);
            setOpen(true);
          }

        } else {
          setError(response.message);

        }
      } catch (error) {
        console.log(error);
        setError(error?.response?.data?.message);
      }
      setLoading(false);
    }
  };

  const onClose = () => {
    setOpen(false);
  }

  const verifyOtp = async () => {
    setOtpError("");
    if (otp.length !== 6) {
      setOtpError("Please enter valid OTP");
      return;
    }
    let email = info.email;
    const value = {
      email,
      otp,
    };
    try {
      setLoading(true);
      const response = await postData(verifyOtpUrl, value);
      if (response.status) {
        setOtpError("");
        setOtp("");
        navigate(`/payment-pending/${bookingId}`);
      } else {
        setOtpError(response.message);
      }
    } catch (error) {
      setSuccess("");
      setOtpError(error.response.data.message);
    }
    setLoading(false);
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
    if (userInfo && userInfo.email) {
      info.isLoggedIn = true
    }
  }, [profile]);

  return (
    <div className="checkout_area bg-color-white ">
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
                    <label htmlFor="name">Full Name*</label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={info.name}
                      id="name"
                      name="name"
                      onChange={
                        !userInfo?.name
                          ? (e) => handleChange(e.target.name, e.target.value)
                          : undefined
                      }
                    />
                  </div>

                  <div className="col-md-6 col-12 mb--10">
                    <label htmlFor="phone">Whatsapp no*</label>
                    <input
                      type="text"
                      placeholder="Whatsapp number"
                      id="phone"
                      name="phone"
                      value={info.phone || ""}
                      onChange={(e) =>
                        handleChange(e.target.name, e.target.value)
                      }
                    />
                  </div>
                  {!info.isLoggedIn && <div className="col-md-6 col-12 mb--10">
                    <label htmlFor="phone">Email*</label>
                    <input
                      type="text"
                      placeholder="Email"
                      id="email"
                      name="email"
                      value={info.email}
                      onChange={(e) =>
                        handleChange(e.target.name, e.target.value)
                      }
                    />
                  </div>}

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
                  {info.isLoggedIn && <div className="col-md-6 col-12 mb--20">
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
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Self">Self</option>
                      <option value="For Other">For Other</option>
                    </select>
                  </div>}

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
                          <option value="Brother">Cousine</option>
                          <option value="Sister">Sister</option>
                          <option value="Sister">Daughter</option>
                          <option value="Sister">Son</option>
                          <option value="Spouse">Spouse</option>
                          <option value="Mother">Mother</option>
                          <option value="Father">Father</option>
                          <option value="Father">Grand Father</option>
                          <option value="Father">Grand Mother</option>
                        </select>
                      </div>

                      <div className="col-md-6 col-12 mb--10">
                        <label htmlFor="dob">Age</label>
                        <input
                          type="text"
                          placeholder="Age"
                          id="age"
                          name="age"
                          value={info.age}
                          onChange={(e) =>
                            handleChange(e.target.name, e.target.value)
                          }
                        />
                      </div>
                    </>
                  )}
                  <div className="col-md-6 col-12 mb--10">
                    <label htmlFor="name">Additional Notes</label>
                    <textarea
                      placeholder="Additional Notes"
                      id="notes"
                      name="notes"
                      value={info.notes}
                      onChange={(e) =>
                        handleChange(e.target.name, e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="col-12 mb--20">
              <div className="checkout-cart-total">
                <h4 style={{ fontSize: 24 }}>For Offline Session</h4>

                <div className="single-list" style={{ marginTop: 15 }}>
                  <h5 className="price-title" style={{ fontSize: "16px" }}>
                    Address
                  </h5>

                  <div
                    className="row plan-offer-list"
                    style={{ borderBottom: "none", marginTop: "-10px" }}
                  >
                    <h6>
                      Gate No-3, D-137, near LPS GLOBAL SCHOOL, Block D, Sector
                      51, Noida, Uttar Pradesh 201301
                    </h6>
                  </div>

                  <div
                    className="row plan-offer-list"
                    style={{ borderBottom: "none", marginTop: "-10px" }}
                  >
                    <a
                      href="https://maps.app.goo.gl/2byXtVajMfGuLRSF8?g_st=ipc"
                      style={{ color: "#20c2a6" }}
                      target="_blank"
                    >
                      Map Location
                    </a>
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
                  Tax <span>0</span>
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
                    <span className="btn-text">Continue</span>
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
      <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth >
        <div style={{ padding: "8px" }}>
          <h5>Enter OTP</h5>
          <FormMessage success={success} error={otpError} />
          <DialogContent dividers>
            <div className="col-md-6 col-12 mb--10">
              <label htmlFor="phone">OTP*</label>
              <input
                type="text"
                placeholder="OTP"
                id="otp"
                value={otp}
                name="otp"
                onChange={(e) =>
                  handleChange(e.target.name, e.target.value)
                }
              />
            </div>
          </DialogContent>
          <DialogActions>
            <div className="plceholder-button mt--10">
              {loading ? (
                <FormProgressBar />
              ) : (
                <button
                  className="rbt-btn btn-gradient hover-icon-reverse"
                  onClick={verifyOtp}
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Submit</span>
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
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
