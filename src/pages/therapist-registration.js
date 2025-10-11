import ImageTag from "../utils/image-tag";
import MyNavbar from "../components/navbar";
import NewsLetter from "../components/home/newsletter";
import Footer from "../components/footer";
import {
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useState, useEffect } from "react";
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
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [otp, setOtp] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    if (!checkedValues.length) return setError("Please check any 'Interested to serve'");
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
        setEmail("");
        setProfileType("");
        setMode("");
        setSelectedFile(null);
        setCheckedValues([]);
        setOpen(true);
      } else setError("Something went wrong");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
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
    } catch (err) {
      setOtpError(err.response?.data?.message || "OTP verification failed");
    }
    setLoading(false);
  };

  const qualificationCriteria = [
    { type: "Psychologist", icon: "🧠", criteria: "M.A./M.Sc in Psychology, Clinical Training" },
    { type: "Counsellor", icon: "🤝", criteria: "Relevant Diploma/Certification in Counselling" },
    { type: "Psychiatrist", icon: "💊", criteria: "MBBS + Psychiatry Specialization" },
    { type: "Social Worker", icon: "🌱", criteria: "M.Phil in Psychiatric Social Work or equivalent" },
  ];

  const joinSteps = [
    { icon: "📄", title: "Submit Resume", desc: "Send us your credentials for verification." },
    { icon: "✅", title: "Receive Approval", desc: "Within 7 days, get confirmation email for eligibility." },
    { icon: "💳", title: "Activate Profile", desc: "Complete one-time listing payment to create your profile." },
    { icon: "🌐", title: "Connect Independently", desc: "Manage visibility and connect with clients without employment constraints." },
  ];

  return (
    <>
      <MyNavbar />

      {/* Hero Section */}
      <div
        className="rbt-hero-section"
        style={{
          background: "linear-gradient(135deg, #dff6ff 0%, #ffffff 60%, #e0f7ff 100%)",
          padding: isMobile ? "60px 0 50px" : "100px 0",
        }}
      >
        <div className="container">
          <div className="row align-items-start g-5">
            <div className="col-lg-7">
              <h1
                style={{
                  fontWeight: 700,
                  fontSize: isMobile ? "28px" : "44px",
                  color: "#002b5b",
                  lineHeight: 1.3,
                }}
              >
                Join <span className="theme-gradient">India’s Verified Therapist Network</span>
              </h1>
              <p
                style={{
                  marginTop: 15,
                  fontSize: isMobile ? 16 : 18,
                  color: "#5a5a5a",
                  maxWidth: 550,
                }}
              >
                Build your verified professional profile, increase your client base, and become part of India’s largest mental health network. Remain fully independent while benefiting from a trusted platform for verified mental health professionals.
              </p>

              {/* Premium Steps Section */}
              <div style={{ marginTop: 30 }}>
                <h5 style={{ fontWeight: 600, marginBottom: 15 }}>Steps to Join:</h5>
                <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
                  {joinSteps.map((step, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        background: "#ffffff",
                        borderRadius: 12,
                        padding: "15px 20px",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
                        gap: 15,
                      }}
                    >
                      <div style={{ fontSize: 28 }}>{step.icon}</div>
                      <div>
                        <strong>{step.title}</strong>
                        <p style={{ margin: 2, fontSize: 14, color: "#555" }}>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing & Why Join */}
              <div style={{ marginTop: 30 }}>
                <div
                  style={{
                    background: "#fff",
                    padding: 20,
                    borderRadius: 15,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
                  }}
                >
                  <h5 style={{ fontWeight: 600, marginBottom: 15 }}>Pricing & Subscription:</h5>
                  <ul style={{ paddingLeft: 20, fontSize: isMobile ? 14 : 16, color: "#002b5b" }}>
                    <li>💰 List your profile at ₹499 only (one-time)</li>
                    <li>📅 Subscription charges: ₹999/month</li>
                  </ul>
                </div>

                <h5 style={{ fontWeight: 600, marginTop: 20 }}>Why Join?</h5>
                <ul style={{ color: "#002b5b", fontSize: isMobile ? 14 : 16, marginTop: 10 }}>
                  <li>🌿 Verified professional profile enhances credibility</li>
                  <li>🤝 Access a trusted network of mental health professionals</li>
                  <li>📈 Expand your client reach nationwide and globally</li>
                  <li>📝 Easy booking, scheduling, and documentation tools</li>
                  <li>🔍 Improve online visibility with profile SEO</li>
                </ul>

                <div style={{ marginTop: 20 }}>
                  <Link
                    to="/view-all-therapist"
                    style={{
                      display: "inline-block",
                      padding: "10px 20px",
                      background: "#007bff",
                      color: "#fff",
                      borderRadius: 10,
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "0.3s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.background = "#0056b3")}
                    onMouseOut={(e) => (e.currentTarget.style.background = "#007bff")}
                  >
                    Check Our Therapist Directory
                  </Link>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="col-lg-5">
              <div className="rbt-contact-form contact-form-style-1 p-5 rounded shadow bg-white">
                <h4 className="title mb-3">Tell Us About You!</h4>
                <p style={{ color: "#d50000" }}>{error}</p>

                <div className="form-group mb-3">
                  <select
                    value={profileType}
                    onChange={(e) => setProfileType(e.target.value)}
                    className="form-control"
                  >
                    <option value="">Select profile type</option>
                    {profileTypeList.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group mb-3">
                  <select
                    value={mode}
                    onChange={(e) => setMode(e.target.value)}
                    className="form-control"
                  >
                    <option value="">Service Mode</option>
                    <option value={1}>Virtual</option>
                    <option value={2}>In-Person</option>
                    <option value={3}>Virtual & In-Person</option>
                  </select>
                </div>

                <div className="form-group mb-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="form-group mb-3">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="form-group mb-3">
                  <input
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="form-group mb-3">
                  <span>Interested to serve:</span>
                  {[
                    "Prescribe Medication(Only for Psychiatrist)",
                    "Individual counselling",
                    "Couple counselling",
                    "Teen counselling",
                    "Workshops/Events conducting",
                    "Internship/Training",
                  ].map((val, i) => (
                    <p key={i} className="rbt-checkbox-wrapper mb-1">
                      <input type="checkbox" value={val} onChange={handleCheckboxChange} />
                      <label>{val}</label>
                    </p>
                  ))}
                </div>

                <div className="form-group mb-3">
                  <span>Resume</span>
                  <input
                    type="file"
                    accept=".pdf"
                    className="resume-upload"
                    onChange={handleFileChange}
                  />
                </div>

                <div className="form-submit-group mb-3">
                  <p style={{ color: "#22bb33" }}>{success}</p>
                  {loading ? (
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <CircularProgress />
                    </Box>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      className="rbt-btn btn-gradient radius-round w-100"
                    >
                      Submit
                    </button>
                  )}
                </div>

                <div className="rbt-lost-password text-end mt-2">
                  <Link className="rbt-btn-link" to="/login">
                    Already have an account? Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OTP Dialog */}
      <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
        <div style={{ padding: 16 }}>
          <h5>Enter OTP</h5>
          <FormMessage success={success} error={otpError} />
          <DialogContent dividers>
            <div className="col-md-6 col-12 mb-3">
              <label htmlFor="otp">OTP*</label>
              <input
                type="text"
                placeholder="OTP"
                value={otp}
                onChange={(e) => handleChange(e.target.value)}
              />
            </div>
          </DialogContent>
          <DialogActions>
            {loading ? (
              <FormProgressBar />
            ) : (
              <button className="rbt-btn btn-gradient w-100" onClick={verifyOtp}>
                Submit OTP
              </button>
            )}
          </DialogActions>
        </div>
      </Dialog>

      <NewsLetter />
      <Footer />
    </>
  );
}
