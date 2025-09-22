import { useState } from "react";
import { Helmet } from "react-helmet-async";
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
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { profileTypeList } from "../utils/static-lists";
import { postData, postFormData } from "../utils/actions";
import FormMessage from "../components/global/form-message";
import FormProgressBar from "../components/global/form-progressbar";
import { threapistRegistrationUrl, verifyOtpUrl } from "../utils/url";

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
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [otp, setOtp] = useState("");

  const handleFileChange = (event) => setSelectedFile(event.target.files[0]);
  const validateEmail = (email) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.toLowerCase());

  const handleSubmit = async () => {
    setError("");
    setSuccess("");

    if (!profileType) return setError("Please select profile type");
    if (!mode) return setError("Please select service mode");
    if (name.length < 5) return setError("Please enter full name");
    if (!validateEmail(email)) return setError("Please enter valid email id");
    if (phone.length !== 10) return setError("Please enter valid phone number");
    if (checkedValues.length === 0) return setError("Please check at least one 'Interested to serve'");
    if (!selectedFile) return setError("Please upload your resume");

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
      } else setError("Something went wrong");
    } catch (error) {
      setError(error.response?.data?.message || "Error submitting form");
    }
    setLoading(false);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setCheckedValues((prev) =>
      checked ? [...prev, value] : prev.filter((v) => v !== value)
    );
  };

  const onClose = () => setOpen(false);

  const handleChange = (value) => setOtp(value.replace(/\D/g, "").slice(0, 6));

  const verifyOtp = async () => {
    setOtpError("");
    if (otp.length !== 6) return setOtpError("Please enter valid OTP");
    try {
      setLoading(true);
      const response = await postData(verifyOtpUrl, { email, otp });
      if (response.status) {
        setOtp("");
        setOpen(false);
        setSuccess(
          "Thank you for submitting your resume. Our admin will review your profile soon. You will receive approval via email."
        );
      } else setOtpError(response.message);
    } catch (error) {
      setOtpError(error.response?.data?.message || "Error verifying OTP");
    }
    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Therapist Registration | Join Verified Therapist Network Across India</title>
        <meta
          name="description"
          content="Register as a therapist with Choose Your Therapist LLP. Build your profile, showcase qualifications, and connect with clients across India."
        />
        <meta name="keywords" content="therapist registration India, psychologist signup, counselling professional network, verified therapists, mental health practitioner registration" />
        <link rel="canonical" href="https://www.chooseyourtherapist.in/therapist-registration" />

        {/* Open Graph */}
        <meta property="og:title" content="Therapist Registration | Join Verified Network" />
        <meta property="og:description" content="List yourself as a trusted and verified therapist in India. Build visibility, manage bookings, and connect with clients nationwide." />
        <meta property="og:image" content="https://www.chooseyourtherapist.in/assets/img/psychologist.png" />
        <meta property="og:url" content="https://www.chooseyourtherapist.in/therapist-registration" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Therapist Registration | Verified Therapist Network India" />
        <meta name="twitter:description" content="Join Choose Your Therapist LLP. Showcase your expertise and connect with clients through our verified therapist network." />
        <meta name="twitter:image" content="https://www.chooseyourtherapist.in/assets/img/psychologist.png" />
      </Helmet>

      <MyNavbar />
      <div className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1 mt--60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <h1 className="title">
                  Therapist Registration in India – Verified Psychologists & Counsellors
                </h1>
                <ul className="page-list">
                  <li className="rbt-breadcrumb-item"><Link to="/">Home</Link></li>
                  <li><div className="icon-right"><i className="feather-chevron-right"></i></div></li>
                  <li className="rbt-breadcrumb-item active">List Yourself as a Professional</li>
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
              {/* Left Content */}
              <div className="col-lg-7">
                <div className="banner-content">
                  <div className="inner">
                    <div className="section-title text-start">
                      <span className="subtitle bg-pink-opacity">Why Join Us?</span>
                    </div>
                    <h2 className="title">Build Your Therapist Profile & Connect With Clients Nationwide</h2>
                    <ul className="check-box-points">
                      <li>Verified Network: Be part of Bharat’s growing network of trusted and verified therapists.</li>
                      <li>Enhanced Visibility: Showcase your expertise and reach more clients with your dedicated profile.</li>
                      <li>Booking & Documentation Support: Access tools for client management and maintaining progress records efficiently.</li>
                      <li>SEO Optimization: Boost your profile visibility on search engines and attract more clients online.</li>
                      <li>Collaborative Community: Join a network of mental health professionals and exchange knowledge with peers.</li>
                    </ul>
                    <p className="note">
                      Therapists on our platform are <strong>independent practitioners</strong>, not employees of Choose Your Therapist LLP. 
                      Each therapist is approved based on recognized qualifications (e.g., M.A./M.Sc. in Psychology, M.Phil. in Clinical Psychology, Psychiatric Social Work, or equivalent), relevant training, certifications, and professional experience.
                    </p>
                    <div className="rbt-like-total">
                      <div className="profile-share">
                        <ImageTag alt="Client" src={ClientImg} width={55} height={55} />
                        <ImageTag alt="Psychologist" src={Fabiha} width={55} height={55} />
                        <ImageTag alt="Counselling" src={ClientImg3} width={55} height={55} />
                        <div className="more-author-text">
                          <h5 className="total-join-students">100+ Resumes Received</h5>
                          <p className="subtitle">For more information, please refer to our criteria <Link to="link">here</Link>.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Form */}
              <div className="col-lg-5">
                <div className="rbt-contact-form contact-form-style-1">
                  <h3 className="title">Tell Us About You</h3>
                  <p style={{ color: "#d50000" }}>{error}</p>

                  {/* Profile Type */}
                  <div className="form-group">
                    <select value={profileType} onChange={(e) => setProfileType(e.target.value)}>
                      <option value="">Select profile type</option>
                      {profileTypeList.map((item) => <option value={item} key={item}>{item}</option>)}
                    </select>
                  </div>

                  {/* Mode */}
                  <div className="form-group">
                    <select value={mode} onChange={(e) => setMode(e.target.value)}>
                      <option value="">Select service mode</option>
                      <option value={1}>Virtual</option>
                      <option value={2}>In-Person</option>
                      <option value={3}>Virtual & In-Person</option>
                    </select>
                  </div>

                  {/* Name, Email, Phone */}
                  <div className="form-group"><input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} /></div>
                  <div className="form-group"><input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                  <div className="form-group"><input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} /></div>

                  {/* Interested to serve checkboxes */}
                  <span>Interested to Serve</span>
                  <div className="form-group">
                    {["Prescribe Medication(Only for Psychiatrist)", "Individual counselling", "Couple counselling", "Teen counselling", "Workshops/Events conducting", "Internship/Training"].map((val, idx) => (
                      <p key={idx}>
                        <input type="checkbox" value={val} onChange={handleCheckboxChange} /> {val}
                      </p>
                    ))}
                  </div>

                  {/* Resume */}
                  <span>Resume</span>
                  <div className="form-group">
                    <input type="file" accept=".pdf" onChange={handleFileChange} />
                  </div>

                  {/* Submit */}
                  <div className="form-submit-group">
                    <p style={{ color: "#22bb33" }}>{success}</p>
                    {loading ? <Box sx={{ display: "flex", justifyContent: "center" }}><CircularProgress /></Box> :
                      <button onClick={handleSubmit} className="rbt-btn btn-md btn-gradient radius-round w-100">Submit</button>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OTP Dialog */}
      <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
        <div style={{ padding: "8px" }}>
          <h5>Enter OTP</h5>
          <FormMessage success={success} error={otpError} />
          <DialogContent dividers>
            <div className="col-md-6 col-12 mb--10">
              <label htmlFor="otp">OTP*</label>
              <input type="text" placeholder="OTP" id="otp" value={otp} onChange={(e) => handleChange(e.target.value)} />
            </div>
          </DialogContent>
          <DialogActions>
            {loading ? <FormProgressBar /> :
              <button className="rbt-btn btn-gradient hover-icon-reverse" onClick={verifyOtp}>Submit</button>}
          </DialogActions>
        </div>
      </Dialog>

      <NewsLetter />
      <Footer />
    </>
  );
}
