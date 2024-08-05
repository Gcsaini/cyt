import React, { useEffect } from "react";
import ProfileCheckoutCard from "./profile-checkout-card";
import { getServiceFormats } from "../../utils/helpers";

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
    selectStyle: { lineHeight: "20px", height: "50px" },
  };
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const [services, setServices] = React.useState([]);
  const [sessionFormats, setSessionFormats] = React.useState([]);
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
    price: 0,
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
          price: selectedService.formats[0].price,
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
            price: selectedFormat.price,
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
      }
    } else {
      setInfo((prevInfo) => ({
        ...prevInfo,
        [name]: value,
      }));
    }
  };

  const handleSubmit = () => {
    if (info.phone.length != 10) {
      setError("Please enter phone number");
      return;
    } else if (info.service == "") {
      setError("Please select service.");
      return;
    } else if (info.whom == "") {
      setError("Please select for whom you want to take service.");
      return;
    } else if (info.format == "") {
      setError("Please select format.");
      return;
    } else if (info.gender == "") {
    } else if (info.dob) {
    }
  };

  useEffect(() => {
    if (profile) {
      const servicesres = getServiceFormats(profile);
      setServices(servicesres);
      if (servicesres.length > 0) {
        handleChange("service", servicesres[0].service);
        setSessionFormats(servicesres[0].formats);
        handleChange("format", servicesres[0].formats[0].format);
        handleChange("price", servicesres[0].formats[0].price);
      }
    }
  }, [profile]);

  return (
    <div className="checkout_area bg-color-white rbt-section-gap">
      <div className="container">
        <div className="row g-5 checkout-form">
          <div className="col-lg-7">
            <ProfileCheckoutCard pageData={profile} />
            <div className="checkout-content-wrapper mt--20">
              <div id="billing-form">
                <h4 className="checkout-title">Billing Address</h4>
                <div className="row">
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
                      <option value="" disabled selected>
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
                {profile.schedule.map((item) => {
                  return (
                    <div
                      className="single-list"
                      key={item._id}
                      style={{ marginTop: 15 }}
                    >
                      <h5 className="price-title" style={{ fontSize: "16px" }}>
                        {item.day}
                      </h5>
                      <ul
                        className="plan-offer-list"
                        style={{ borderBottom: "none", marginTop: "-10px" }}
                      >
                        {item.times.length > 0 &&
                          item.times.map((time) => {
                            return (
                              <li style={styles.listStyle} key={time._id}>
                                <i
                                  className="feather-check"
                                  style={styles.iconStyle}
                                ></i>
                                {time.open}-{time.close}
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  );
                })}
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
                    <span>₹{info.price}</span>
                  </li>
                </ul>
                <p>
                  Shipping Fee <span>0</span>
                </p>
                <p>
                  Sub Total<span>₹{info.price}</span>
                </p>

                <h4 className="mt--30">
                  Grand Total <span>₹{info.price}</span>
                </h4>
              </div>
            </div>
            <div className="plceholder-button mt--10">
              <button className="rbt-btn btn-gradient hover-icon-reverse">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
