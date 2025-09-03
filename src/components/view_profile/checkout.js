import React, { useEffect } from "react";
import ProfileCheckoutCard from "./profile-checkout-card";
import { getFormatsByServiceId, getServices } from "../../utils/helpers";
import "react-datepicker/dist/react-datepicker.css";
import "./checkout-styles.css";
import FormMessage from "../global/form-message";
import { postData } from "../../utils/actions";
import { ApplyCouponUrl, BookTherapistUrl, BookTherapistUrlAnomalously, verifyOtpUrl } from "../../utils/url";
import { useNavigate } from "react-router-dom";
import FormProgressBar from "../global/form-progressbar";
import useUserStore from "../../store/userStore";
import {
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { toast } from "react-toastify";
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
  const [couponError, setCouponError] = React.useState("");
  const [otpError, setOtpError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState("");
  const [services, setServices] = React.useState([]);
  const [selectedService, setSelectedService] = React.useState({});
  const [selectedFormat, setSelectedFormat] = React.useState({});
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
    relation_with_client: "",
    notes: "",
    age: "",
    amount: 0,
    therapist: profile._id,
    is_logged_in: false,
    user_id: userInfo._id || "",
  });

  const [amountInfo, setAmountInfo] = React.useState({
    coupon: "",
    amount: 0,
    tax: 0,
    subtotal: 0,
    discount: 0,
    afterdiscount: 0
  })


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
        }));
        setAmountInfo((prev) => ({
          ...prev,
          amount: selectedService.formats[0].price,
          afterdiscount: selectedService.formats[0].price
        }))
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
        setAmountInfo((prev) => ({
          ...prev,
          amount: selectedFormat.price,
          afterdiscount: selectedFormat.price
        }))
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
          ["relation_with_client"]: "",
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
      const formattedValue = value.replace(/\D/g, "").slice(0, 6);
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
    if (!info.is_logged_in && info.phone.length !== 10) {
      setError("Please enter phone number");
      return;
    } else if (Object.keys(selectedService).length === 0) {
      setError("Please select service.");
      return;
    }
    else if (!info.is_logged_in && !userInfo.email && info.email === "") {
      setError("Please Enter Email id.");
      return;
    } else if (info.whom === "") {
      setError("Please select for whom you want to take service.");
      return;
    } else if (Object.keys(selectedFormat).length === 0) {
      setError("Please select format.");
      return;
    } else if (info.whom == "For Other" && info.cname.length < 4) {
      setError("Please enter valid clinet name.");
      return;
    } else if (info.whom == "For Other" && info.relation_with_client === "") {
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
        info.amount = amountInfo.afterdiscount;

        const response = await postData(BookTherapistUrl, info);
        if (response.status) {
          setBookingId(response.data.id);
          setOpen(true);
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

  const handleFormatChange = (e) => {
    const selected = sessionFormats.find((item) => item._id === e.target.value);
    setSelectedFormat(selected || {});
    setInfo((prev) => ({
      ...prev,
      format: selected.type,
      service: selectedService.name,
      amount: selected.fee
    }))
    setAmountInfo((prev)=>({
      ...prev,
      amount:selected.fee,
      afterdiscount:selected.fee-prev.discount
    }))
  };

  const setConfig = async (profile) => {
    const validServices = await getServices(profile.fees);
    setServices(validServices);

    if (validServices.length > 0) {
      const firstService = validServices[0];
      setSelectedService(firstService);

      setInfo((prev) => ({
        ...prev,
        service: firstService.name,
      }));

      const formats = await getFormatsByServiceId(profile.fees, firstService._id);
      setSessionFormats(formats);

      if (formats.length > 0) {
        const firstFormat = formats[0];
        setSelectedFormat(firstFormat);

        setInfo((prev) => ({
          ...prev,
          format: firstFormat.type,
          amount: firstFormat.fee,
        }));
        setAmountInfo((prev) => ({
          ...prev,
          amount: firstFormat.fee,
          afterdiscount: firstFormat.fee
        }))
      }
      setInfo((prev) => ({
        ...prev,
        therapist: profile._id,
        is_logged_in: userInfo.email ? true : false,
        user_id: userInfo._id || "",
        email: userInfo.email || "",
      }));
    }
  };


  useEffect(() => {
    if (profile) {
      setConfig(profile);
    }
  }, [profile]);


  useEffect(() => {
    const formats = getFormatsByServiceId(profile.fees, selectedService._id);
    setSessionFormats(formats);
  }, [selectedService])

  const handleCouponApply = async () => {
    setCouponError("");
    try {
      const reqData = {
        therapist_id: profile._id,
        code: amountInfo.coupon,
        apply_for: "Therapist"
      }
      console.log("applying....");
      const res = await postData(ApplyCouponUrl, reqData);
      console.log("apply res", res);
      if (res?.status && res?.data) {
        const { discount_type, discount_value } = res.data;

        let discount = 0;

        if (discount_type === "flat") {
          discount = discount_value;
        } else if (discount_type === "percentage") {
          discount = (amountInfo.amount * discount_value) / 100;
        }


        discount = Math.min(discount, amountInfo.amount);
        setAmountInfo((prev) => ({
          ...prev,
          discount,
          afterdiscount: prev.amount - discount,
        }));
        toast.success("Coupon applied successfully!");
      } else {

        setCouponError(res.message);;
        toast.error(res?.message || "Invalid coupon");
      }


    } catch (error) {
      setCouponError(error.response.data.message || "Error applying coupon");
    }

  }

  console.log("user info", info);
  console.log("amount info", amountInfo);


  return (
    <div className="checkout_area bg-color-white ">
      <div className="container">
        <div className="row g-5 checkout-form">
          <div className="col-lg-7">
            <ProfileCheckoutCard pageData={profile} />
            <div className="checkout-content-wrapper mt--20">
              <div id="billing-form">
                <h4 className="checkout-title">Booking Details</h4>
                <FormMessage success={success} error={error} />
                <div className="row mt--15">

                  {!info.is_logged_in &&

                    <>
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
                      <div className="col-md-6 col-12 mb--10">
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
                      </div>
                    </>
                  }

                  <div className="col-md-6 col-12 mb--20">
                    <label htmlFor="service">Service</label>
                    <select
                      id="service"
                      style={styles.selectStyle}
                      name="service"
                      value={selectedService._id}
                      onChange={(e) =>
                        setSelectedService(services.find(s => s._id === e.target.value))
                      }
                    >
                      {services.map((item) => {
                        return (
                          <option value={item._id} key={item._id}>
                            {item.name}
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
                      value={selectedFormat._id || ""}
                      onChange={handleFormatChange}
                    >
                      <option value="" selected>
                        Select
                      </option>
                      {sessionFormats.map((item) => {
                        return (
                          <option value={item._id} key={item._id}>
                            {item.type.toUpperCase().charAt(0) + item.type.slice(1)}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  {info.is_logged_in && <div className="col-md-6 col-12 mb--20">
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
                        <label htmlFor="relation_with_client">
                          Relation With Client
                        </label>
                        <select
                          id="relation_with_client"
                          style={styles.selectStyle}
                          value={info.relation_with_client}
                          name="relation_with_client"
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
                    </>
                  )}
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
                  <div className="col-md-6 col-12 mb--10">
                    <label htmlFor="name">Major Concern</label>
                    <textarea
                      placeholder="write your major concern here."
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
                  Service <span>Total</span>
                </h4>
                <ul>
                  <li>
                    {info.service}&nbsp;({info.format})
                    <span>₹{amountInfo.amount}</span>
                  </li>
                </ul>
             
                <p>
                  Sub Total<span>₹{amountInfo.amount}</span>
                </p>
                {
                  amountInfo.discount!=0 && <p>
                  Coupon Discount<span>₹{amountInfo.discount}</span>
                </p>
                }
                <div className="mt--10" style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
                  <div >
                    <input
                      type="text"
                      placeholder="Coupon?"
                      id="coupon"
                      name="coupon"
                      value={amountInfo.coupon}
                      onChange={(e) =>
                        setAmountInfo((prev) => ({
                          ...prev,
                          coupon: e.target.value
                        }))
                      }
                      style={{ marginBottom: 0 }}
                    />
                    {couponError && <span style={{ color: "red", fontSize: "12px", }}>{couponError}</span>}
                  </div>
                  <div >
                    <a class="rbt-btn btn-sm" onClick={handleCouponApply}>Apply</a>
                  </div>
                </div>

                <h4 className="mt--30">
                  Grand Total <span style={{fontSize:"26px",}}>₹{amountInfo.afterdiscount}</span>
                </h4>
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
