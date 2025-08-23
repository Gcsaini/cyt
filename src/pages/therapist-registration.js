import ImageTag from "../utils/image-tag";
import MyNavbar from "../components/navbar";
import NewsLetter from "../components/home/newsletter";
import Footer from "../components/footer";
import ClientImg from "../assets/img/avatar-027dc8.png";
import Fabiha from "../assets/img/psychologist.png";
import ClientImg3 from "../assets/img/counselling.png";

import { useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { threapistRegistrationUrl } from "../utils/url";
import { Link } from "react-router-dom";
import { profileTypeList } from "../utils/static-lists";
export default function TherapistRegistration() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [profileType, setProfileType] = useState("");
  const [mode, setMode] = useState("");
  const [checkedValues, setCheckedValues] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async () => {
    setError("");
    setSuccess("");

    if (profileType === "") {
      setError("Please select profile type");
      return;
    } else if (mode === "") {
      setError("Please select service mode");
      return;
    } else if (name.length < 5) {
      setError("Please enter full name");
      return;
    } else if (!validateEmail(email)) {
      setError("Please enter valid email id");
      return;
    } else if (phone.length !== 10) {
      setError("Please enter valid phone number");
      return;
    } else if (checkedValues.length === 0) {
      setError("Please check any 'Interested to serve'");
      return;
    } else if (!selectedFile) {
      setError("Please upload your resume");
      return;
    } else {
      setError("");
      setLoading(true);
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("type", profileType);
      formData.append("mode", mode);
      formData.append("serve", checkedValues.join(", "));

      try {
        const response = await axios.post(threapistRegistrationUrl, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (response.data.status) {
          setSuccess(response.data.message);
          setError("");
          setName("");
          setEmail("");
          setPhone("");
          setSelectedFile(null);
          setCheckedValues([]);
        } else {
          setError("Something went wrong");
        }
      } catch (error) {
        setError(error.response.data.message);
      }
      setLoading(false);
    }
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setCheckedValues((prevCheckedValues) => {
      if (checked) {
        return [...prevCheckedValues, value];
      } else {
        return prevCheckedValues.filter((v) => v !== value);
      }
    });
  };

  return (
    <>
      <MyNavbar />
      <div className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1 mt--60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <h2 className="title">
                  Become a part of
                  <span className="theme-gradient">#ChooseYourTherapist</span>
                  and serve professionally.
                </h2>
                <ul className="page-list">
                  <li className="rbt-breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <div className="icon-right">
                      <i className="feather-chevron-right"></i>
                    </div>
                  </li>
                  <li className="rbt-breadcrumb-item active">
                    Join as Mental Health Expert
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rbt-banner-area rbt-banner-3 header-transperent-spacer">
        <div className="wrapper">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-7">
                <div className="banner-content">
                  <div className="inner">
                    <div className="section-title text-start">
                      <span className="subtitle bg-pink-opacity">
                        Why Join Us?
                      </span>
                    </div>
                    <h3 className="title">Are you a therapist?</h3>

                    <ul class="check-box-points">
                      <li>
                        Expand Your Reach: Connect with a broad client base
                        seeking professional mental health support.
                      </li>
                      <li>
                        Flexible Work Environment: Choose your hours and work
                        location, whether online or in-person.
                      </li>
                      <li>
                        Comprehensive Support: Access our extensive resources,
                        including continuous professional development and peer
                        support groups.
                      </li>
                      <li>
                        Collaborative Community: Join a network of dedicated
                        mental health professionals and benefit from
                        collaborative opportunities.
                      </li>
                      <li>
                        Marketing and Promotion: Leverage our marketing efforts
                        to increase your visibility and attract more clients.
                      </li>
                      <li>
                        Professional Growth: Participate in workshops, seminars,
                        and training programs to enhance your skills and
                        knowledge.
                      </li>
                    </ul>
                    <p class="note">
                      Please note: Therapists are not employees of Choose Your
                      Therapist LLP. They provide their services independently.
                      We approve them based on their qualifications and
                      experience criteria.
                    </p>
                    <div className="rating mb--20">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="rbt-like-total">
                      <div className="profile-share">
                        <Link
                          to="#"
                          className="avatar"
                          data-tooltip="Counselling Psychologist"
                          tabIndex="0"
                        >
                          <ImageTag
                            alt="education"
                            width="55"
                            height="55"
                            src={ClientImg}
                          />
                        </Link>
                        <Link
                          to="#"
                          className="avatar"
                          data-tooltip="Psychologist"
                          tabIndex="0"
                        >
                          <ImageTag
                            alt="education"
                            width="55"
                            height="55"
                            src={Fabiha}
                          />
                        </Link>
                        <Link
                          to="#"
                          className="avatar"
                          data-tooltip="Counselling Psychologist"
                          tabIndex="0"
                        >
                          <ImageTag
                            alt="education"
                            width="55"
                            height="55"
                            src={ClientImg3}
                          />
                        </Link>
                        <div className="more-author-text">
                          <h5 className="total-join-students">
                            Join Over 50+ Experts
                          </h5>
                          <p className="subtitle">
                            <input type="checkbox" id="criteriaCheckbox" />
                            <label htmlFor="criteriaCheckbox">
                              For more information, please refer to our criteria
                              <Link to="link">here</Link>.
                            </label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="rbt-contact-form contact-form-style-1">
                  <h4 className="title">Tell Us About You !</h4>
                  <p style={{ color: "#d50000" }}>{error}</p>
                  <div className="form-group" style={{ marginBottom: 15 }}>
                    <select
                      style={{
                        padding: 0,
                        border: 0,
                        borderBottom: "2px solid #e6e3f1",
                        borderRadius: 0,
                      }}
                      value={profileType}
                      onChange={(e) => setProfileType(e.target.value)}
                    >
                      <option value={""}>Select profile type</option>
                      {profileTypeList.map((item) => {
                        return (
                          <option value={item} key={item}>
                            {item}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: 15 }}>
                    <select
                      style={{
                        padding: 0,
                        border: 0,
                        borderBottom: "2px solid #e6e3f1",
                        borderRadius: 0,
                      }}
                      value={mode}
                      onChange={(e) => setMode(e.target.value)}
                    >
                      <option value={""}>What is your service mode</option>
                      <option value={1}>Virtual</option>
                      <option value={2}>In-Person</option>
                      <option value={3}>Virtual & In-Person</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <input
                      placeholder="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <input
                      name="phone"
                      placeholder="Phone"
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group" style={{ margin: "20px 0" }}>
                    <span>Interested to serve-</span>
                    <p className="rbt-checkbox-wrapper mb--5">
                      <input
                        type="checkbox"
                        value="Prescribe Medication(Only for Psychiatrist)"
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor="rbt-checkbox-2">
                        Prescribe Medication(Only for Psychiatrist)
                      </label>
                    </p>
                    <p className="rbt-checkbox-wrapper mb--5">
                      <input
                        type="checkbox"
                        value="Individual counselling"
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor="rbt-checkbox-1">
                        Individual counselling
                      </label>
                    </p>

                    <p className="rbt-checkbox-wrapper mb--5">
                      <input
                        type="checkbox"
                        value="Couple counselling"
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor="rbt-checkbox-2">Couple counselling</label>
                    </p>
                    <p className="rbt-checkbox-wrapper mb--5">
                      <input
                        type="checkbox"
                        value="Teen counselling"
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor="rbt-checkbox-3">Teen counselling</label>
                    </p>
                    <p className="rbt-checkbox-wrapper mb--5">
                      <input
                        type="checkbox"
                        value=" Workshops/Events conducting"
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor="rbt-checkbox-4">Workshops/Events</label>
                    </p>
                    <p className="rbt-checkbox-wrapper mb--5">
                      <input
                        type="checkbox"
                        value=" Internship/Training"
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor="rbt-checkbox-4">
                        Internship/Training
                      </label>
                    </p>
                  </div>
                  <span>Resume</span>
                  <div className="form-group">
                    <input
                      className="resume-upload"
                      type="file"
                      accept=".pdf"
                      placeholder="Upload resume"
                      style={{ padding: "11px 0 0px" }}
                      onChange={handleFileChange}
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div
                    className="rbt-lost-password text-end"
                    style={{ marginBottom: 15 }}
                  >
                    <Link className="rbt-btn-link" to="/login">
                      Already have an account Login?
                    </Link>
                  </div>
                  <div className="form-submit-group">
                    <p style={{ color: "#22bb33" }}>{success}</p>
                    {loading ? (
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <CircularProgress />
                      </Box>
                    ) : (
                      <button
                        onClick={handleSubmit}
                        className="rbt-btn btn-md btn-gradient radius-round w-100"
                      >
                        <span className="btn-text">
                          {loading ? "Please wait..." : "Submit"}
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />

      <div className="rbt-progress-parent">
        <svg
          className="rbt-back-circle svg-inner"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
        </svg>
      </div>
      <Footer />
    </>
  );
}
