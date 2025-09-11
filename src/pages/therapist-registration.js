import ImageTag from "../utils/image-tag";
import MyNavbar from "../components/navbar";
import NewsLetter from "../components/home/newsletter";
import Footer from "../components/footer";
import ClientImg from "../assets/img/avatar-027dc8.png";
import Fabiha from "../assets/img/psychologist.png";
import ClientImg3 from "../assets/img/counselling.png";
import {
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { threapistRegistrationUrl, verifyOtpUrl } from "../utils/url";
import { Link } from "react-router-dom";
import { profileTypeList } from "../utils/static-lists";
import { postData, postFormData } from "../utils/actions";
import FormMessage from "../components/global/form-message";
import FormProgressBar from "../components/global/form-progressbar";
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
  const [open, setOpen] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [otp, setOtp] = useState("");

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
        const response = await postFormData(threapistRegistrationUrl, formData);
        if (response.status) {
          setSuccess("");
          setError("");
          setName("");
          setPhone("");
          setSelectedFile(null);
          setCheckedValues([]);
          setOpen(true);
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

  const onClose = () => {
    setOpen(false);
  }

  const handleChange = (value) => {
    const formattedValue = value.replace(/\D/g, "").slice(0, 6);
    setOtp(formattedValue);
  }

  const verifyOtp = async () => {
    setOtpError("");
    if (otp.length !== 6) {
      setOtpError("Please enter valid OTP");
      return;
    }
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
        setOpen(false);
        setSuccess("Thank you for submitting your resume. Our admin will review your profile soon. You will receive approval via email.")
      } else {
        setOtpError(response.message);
      }
    } catch (error) {
      setSuccess("");
      setOtpError(error.response.data.message);
    }
    setLoading(false);
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
                 A Therapist Network
                  <span className="theme-gradient"> Across India</span>
              
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
                  <li className="rbt-breadcrumb-item active">.
                    List Yourself as a Counselling Psychologist/Clinical Psychologist/Psychiatrist
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
                    <h4 className="title">Are you a therapist?</h4>

                    <ul className="check-box-points">
  <li>
    Verified Network: Be part of Bharat’s growing network of trusted and verified therapists.
  </li>
  <li>
    Enhanced Visibility: Showcase your expertise and reach more clients with your dedicated profile.
  </li>
  <li>
    Booking & Documentation Support: Access tools for client management and maintaining progress records efficiently.
  </li>
  <li>
    SEO Optimization: Boost your profile visibility on search engines and attract more clients online.
  </li>
  <li>
    Collaborative Community: Join a network of mental health professionals and exchange knowledge with peers.
  </li>
</ul>


  <p className="note">
  Therapists on our platform are <strong>independent practitioners</strong>, not employees of Choose Your Therapist LLP. 
  Each therapist is approved based on recognized qualifications (e.g., M.A./M.Sc. in Psychology, M.Phil. in Clinical Psychology, Psychiatric Social Work, or equivalent), relevant training, certifications, and professional experience.  
  We empower mental health professionals with enhanced visibility, profile SEO optimization, client booking & documentation tools, 
  and growth opportunities while building a verified therapist network across India.

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
                            100 + Resume Recieved
                          </h5>
                          <p className="subtitle">
                            <input type="checkbox" id="criteriaCheckbox" />
                            <label htmlFor="criteriaCheckbox">
                              For more information, please refer to our criteria
                              <Link to="link"> here.</Link>
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
                  handleChange(e.target.value)
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
