import MyNavbar from "../components/navbar";
import NewsLetter from "../components/home/newsletter";
import Footer from "../components/footer";
import { useState } from "react";
import { Dialog, DialogContent, DialogActions } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { postData, postFormData } from "../utils/actions";
import { threapistRegistrationUrl, verifyOtpUrl } from "../utils/url";
import { profileTypeList } from "../utils/static-lists";
import FormMessage from "../components/global/form-message";
import FormProgressBar from "../components/global/form-progressbar";
import { 
  FaFileAlt, FaCheckCircle, FaUserCog, FaBroadcastTower, FaHandshake, FaMoneyBillWave, FaAward, 
  FaEdit, FaBullhorn, FaCalendarCheck 
} from "react-icons/fa";

export default function TherapistRegistration() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [profileType, setProfileType] = useState("");
  const [mode, setMode] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [otp, setOtp] = useState("");

  const handleFileChange = (event) => setSelectedFile(event.target.files[0]);
  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.toLowerCase());

  const handleSubmit = async () => {
    setError(""); 
    setSuccess("");

    if (!profileType) { setError("Please select profile type"); return; }
    if (!mode) { setError("Please select service mode"); return; }
    if (name.length < 5) { setError("Please enter full name"); return; }
    if (!validateEmail(email)) { setError("Please enter valid email id"); return; }
    if (phone.length !== 10) { setError("Please enter valid phone number"); return; }
    if (!selectedFile) { setError("Please upload your resume"); return; }

    setLoading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("type", profileType);
    formData.append("mode", mode);

    try {
      const response = await postFormData(threapistRegistrationUrl, formData);
      if (response.status) {
        setSuccess(""); setError(""); setName(""); setPhone(""); setSelectedFile(null); setOpen(true);
      } else { setError("Something went wrong"); }
    } catch (error) {
      setError(error.response?.data?.message || "Server error");
    }
    setLoading(false);
  };

  const onClose = () => setOpen(false);
  const handleChange = (value) => setOtp(value.replace(/\D/g, "").slice(0, 6));

  const verifyOtp = async () => {
    setOtpError("");
    if (otp.length !== 6) { setOtpError("Please enter valid OTP"); return; }
    try {
      setLoading(true);
      const response = await postData(verifyOtpUrl, { email, otp });
      if (response.status) { setOtpError(""); setOtp(""); setOpen(false); setSuccess("Thank you for submitting your resume. Our admin will review your profile soon."); }
      else { setOtpError(response.message); }
    } catch (error) { setSuccess(""); setOtpError(error.response?.data?.message || "Server error"); }
    setLoading(false);
  };

  return (
    <>
      <MyNavbar />

      {/* Banner */}
      <div className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30" style={{ background: "linear-gradient(90deg, #2ecc71, #2ecc71)" }}>
        <div className="container text-white text-center">
          <h2 className="title">Grow Your Practice. Join India’s Verified Therapist Network!</h2>
          <p className="lead mt-3">Set your own fees, get verified, and start taking bookings today.</p>
        </div>
      </div>

      {/* Left-Right Section */}
      <div className="container mt-5 mb-5">
        <div className="row g-5">
          {/* Left Content */}
          <div className="col-lg-6 col-12 d-flex flex-column justify-content-center">
            <h2 className="mb-4 why-join-heading">Why Join Our Therapist Network?</h2>
            <p className="notification-line">🌟 New! Activate your profile now and start receiving bookings immediately.</p>
            <p>Boost your visibility, showcase your expertise, and take control of your practice with our premium tools.</p>

            <div className="row g-3 mt-3">
              {[
                { icon: <FaFileAlt size={28} color="#22bb33" />, title: "List Your Profile" },
                { icon: <FaEdit size={28} color="#22bb33" />, title: "Edit Profile Anytime" },
                { icon: <FaBullhorn size={28} color="#22bb33" />, title: "Marketing Tools" },
                { icon: <FaCalendarCheck size={28} color="#22bb33" />, title: "Check Bookings" },
                { icon: <FaHandshake size={28} color="#22bb33" />, title: "Collaborate & Network" },
                { icon: <FaAward size={28} color="#22bb33" />, title: "Earn Credibility & Trust" },
              ].map((item, idx) => (
                <div key={idx} className="col-6">
                  <div className="premium-card d-flex align-items-center gap-3 p-3 shadow-sm hover-card">
                    <div>{item.icon}</div>
                    <div><strong>{item.title}</strong></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Activation Fee Card */}
            <div className="activation-card mt-4 p-4 shadow-sm border-radius-12 text-center">
              <h4>Activate Your Profile</h4>
              <p>Go live on our platform and start taking bookings immediately.</p>
              <p className="price-tag">₹999 Activation Fee</p>
              <p>Platform charges 15% per booking. Set your own session fees.</p>
            </div>
          </div>

          {/* Right Form */}
          <div className="col-lg-6 col-12">
            {/* Step Progress Bar - desktop only */}
            <div className="form-step-bar mb-4 d-flex justify-content-between align-items-center flex-wrap desktop-only">
              {[
                { icon: <FaFileAlt size={24} />, label: "Resume", active: true },
                { icon: <FaCheckCircle size={24} />, label: "Approval", active: false },
                { icon: <FaUserCog size={24} />, label: "Profile Settings", active: false },
                { icon: <FaBroadcastTower size={24} />, label: "Live", active: false },
              ].map((step, idx) => (
                <div key={idx} className={`step text-center ${step.active ? "active" : ""}`}>
                  <div className="step-icon mb-1">{step.icon}</div>
                  <p className="step-label">{step.label}</p>
                </div>
              ))}
            </div>

            <div className="rbt-contact-form contact-form-style-1 form-center shadow-sm p-4 border-radius-12">
              <h4 className="title text-center">Tell Us About You!</h4>
              <p style={{ color: "#d50000" }}>{error}</p>

              <div className="form-group mb-3">
                <select
                  style={{ padding: 0, border: 0, borderBottom: "2px solid #e6e3f1", borderRadius: 0, height: "50px" }}
                  value={profileType} onChange={(e) => setProfileType(e.target.value)}
                >
                  <option value={""}>Select profile type</option>
                  {profileTypeList.map(item => <option key={item} value={item}>{item}</option>)}
                </select>
              </div>

              <div className="form-group mb-3">
                <select
                  style={{ padding: 0, border: 0, borderBottom: "2px solid #e6e3f1", borderRadius: 0, height: "50px" }}
                  value={mode} onChange={(e) => setMode(e.target.value)}
                >
                  <option value={""}>Select service mode</option>
                  <option value={1}>Virtual</option>
                  <option value={2}>In-Person</option>
                  <option value={3}>Virtual & In-Person</option>
                </select>
              </div>

              <div className="form-group mb-3"><input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} /><span className="focus-border"></span></div>
              <div className="form-group mb-3"><input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><span className="focus-border"></span></div>
              <div className="form-group mb-3"><input placeholder="Phone" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} /><span className="focus-border"></span></div>

              <div className="form-group mb-3">
                <span>Resume</span>
                <input type="file" accept=".pdf" onChange={handleFileChange} className="resume-upload" />
                <span className="focus-border"></span>
              </div>

              <div className="form-submit-group">
                <p style={{ color: "#22bb33" }}>{success}</p>
                {loading ? <Box sx={{ display: "flex", justifyContent: "center" }}><CircularProgress /></Box> : (
                  <button onClick={handleSubmit} className="rbt-btn btn-md btn-gradient radius-round w-100" style={{ background: "linear-gradient(90deg,#22bb33,#28d65f)" }}>
                    <span className="btn-text">{loading ? "Please wait..." : "Submit"}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewsLetter />
      <Footer />

      <style>{`
        .why-join-heading { font-size: 32px; font-weight: bold; }
        .notification-line { background: #dff0d8; color: #3c763d; padding: 10px; border-radius: 8px; margin-bottom: 15px; font-weight: 500; }
        .form-center { margin:auto; }
        .premium-card { border-radius:12px; transition:0.3s; background:#fff; cursor:pointer; }
        .hover-card:hover { box-shadow:0 10px 35px rgba(0,0,0,0.18); transform:translateY(-5px); }
        .form-step-bar { background:#f0f0f0; border-radius:10px; padding:15px; display:flex; justify-content:space-between; }
        .form-step-bar .step { flex:1; padding:10px 0; color:#555; position:relative; transition:0.3s; z-index:1; text-align:center; }
        .form-step-bar .step.active .step-icon { transform: scale(1.4); }
        .form-step-bar .step .step-icon { margin-bottom:5px; color:#22bb33; }
        .activation-card { background: #e8f8f0; border-radius:12px; transition:0.3s; }
        .activation-card .price-tag { font-size:24px; font-weight:bold; color:#22bb33; }
        .activation-card:hover { transform: scale(1.03); box-shadow:0 10px 35px rgba(0,0,0,0.15);}
        .desktop-only { display:block; }
        @media(max-width:992px) { 
          .row.g-5 { flex-direction:column; gap:30px; }
          .form-step-bar.desktop-only { display:none; }
        }
      `}</style>
    </>
  );
}
