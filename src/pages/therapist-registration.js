
import MyNavbar from "../components/navbar";
import NewsLetter from "../components/home/newsletter";
import Footer from "../components/footer";
import { Dialog, DialogContent, DialogActions } from "@mui/material";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { threapistRegistrationUrl, verifyOtpUrl } from "../utils/url";
import { Link } from "react-router-dom";
import { postData, postFormData } from "../utils/actions";
import FormMessage from "../components/global/form-message";
import FormProgressBar from "../components/global/form-progressbar";
import { FaPhoneAlt } from "react-icons/fa";

export default function TherapistRegistration() 
{
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    profileType: "",
    mode: "",
    checkedValues: [],
    selectedFile: null,
  });
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

  const handleFileChange = (event) =>
    setFormData((prev) => ({ ...prev, selectedFile: event.target.files[0] }));

  const validateEmail = (email) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.toLowerCase());

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      checkedValues: checked
        ? [...prev.checkedValues, value]
        : prev.checkedValues.filter((v) => v !== value),
    }));
  };

  const handleSubmit = async () => {
    const { name, phone, email, profileType, mode, checkedValues, selectedFile } = formData;

    setError("");
    setSuccess("");

    if (!profileType) return setError("Please select profile type");
    if (!mode) return setError("Please select service mode");
    if (name.length < 5) return setError("Please enter full name");
    if (!validateEmail(email)) return setError("Please enter valid email id");
    if (phone.length !== 10) return setError("Please enter valid phone number");
    if (!checkedValues.length)
      return setError("Please check any 'Interested to serve'");
    if (!selectedFile) return setError("Please upload your resume");

    setLoading(true);
    const data = new FormData();
    data.append("file", selectedFile);
    data.append("name", name);
    data.append("phone", phone);
    data.append("email", email);
    data.append("type", profileType);
    data.append("mode", mode);
    data.append("serve", checkedValues.join(", "));

    try {
      const response = await postFormData(threapistRegistrationUrl, data);
      if (response.status) {
        setOpen(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          profileType: "",
          mode: "",
          checkedValues: [],
          selectedFile: null,
        });
        setError("");
      } else {
        setError("Something went wrong");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
    setLoading(false);
  };

  const handleOtpChange = (value) => setOtp(value.replace(/\D/g, "").slice(0, 6));
  const onClose = () => setOpen(false);

  const verifyOtp = async () => {
    setOtpError("");
    if (otp.length !== 6) return setOtpError("Please enter valid OTP");

    try {
      setLoading(true);
      const response = await postData(verifyOtpUrl, { email: formData.email, otp });
      if (response.status) {
        setOtp("");
        setOpen(false);
        setSuccess(
          "Thank you for submitting your resume. Our admin will review your profile soon. You will receive approval via email."
        );
      } else {
        setOtpError(response.message);
      }
    } catch (err) {
      setOtpError(err.response?.data?.message || "OTP verification failed");
    }
    setLoading(false);
  };

  const joinSteps = [
    { icon: "📄", title: "Submit Resume", desc: "Send us your credentials for verification." },
    { icon: "✅", title: "Receive Approval", desc: "Within 7 days, get confirmation email for eligibility." },
    { icon: "💳", title: "Activate Profile", desc: "Complete verification to activate your therapist profile." },
    { icon: "🌐", title: "Connect Independently", desc: "Manage visibility and connect with clients freely." },
  ];

  const premiumFeatures = [
    { icon: "🏅", title: "Verified Badge", desc: "Stand out with a verified professional badge." },
    { icon: "💎", title: "Featured Listings", desc: "Get featured for faster client acquisition." },
    { icon: "📊", title: "Analytics Dashboard", desc: "Track profile views and client interest." },
    { icon: "🗂", title: "Client Management", desc: "Manage appointments, payments, and feedback easily." },
    { icon: "📣", title: "Marketing Support", desc: "Optional promotion to a wider audience." },
  ];

  return (
    <>
      {/* Remove blue focus outline */}
      <style>{`
        input:focus, select:focus, textarea:focus, button:focus {
          outline: none !important;
          box-shadow: none !important;
        }
      `}</style>

      <MyNavbar />

      <div
        style={{
          background: "linear-gradient(135deg, #e6f5ea 0%, #ffffff 60%, #d9f0e6 100%)",
          padding: isMobile ? "60px 15px" : "100px 0",
        }}
      >
        <div className="container">
          <div className="row align-items-start g-5">
            {/* Left Section */}
            <div className="col-lg-7">
              <h1
                style={{
                  fontWeight: 900,
                  fontSize: isMobile ? "35px" : "60px",
                  color: "#000",
                  lineHeight: 1.2,
                }}
              >
                Join{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #020802ff, #000000ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  India’s Verified Therapist Network
                </span>
              </h1>

              <p style={{ fontSize: 18, color: "#000", maxWidth: 550 }}>
                Create your verified therapist profile today and make it easier for clients to find and trust your services.
              </p>

              <div
                style={{
                  marginTop: 20,
                  display: "inline-block",
                  padding: "8px 16px",
                  background: "#e1f5e3",
                  color: "#000",
                  borderRadius: 25,
                  fontSize: 16,
                }}
              >
                Join a growing community empowering lives every day.
              </div>

              <div style={{ marginTop: 40 }}>
                {joinSteps.map((step, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      gap: 15,
                      background: "#ffffff",
                      padding: "15px 20px",
                      borderRadius: 12,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                      marginBottom: 15,
                    }}
                  >
                    <div style={{ fontSize: 28 }}>{step.icon}</div>
                    <div>
                      <strong style={{ color: "#22bb33" }}>{step.title}</strong>
                      <p style={{ margin: 2, fontSize: 14, color: "#555" }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 30 }}>
                <h5 style={{ fontWeight: 600, marginBottom: 15 }}>Premium Features:</h5>
                <div
                  style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    flexWrap: isMobile ? "unset" : "wrap",
                    gap: 15,
                  }}
                >
                  {premiumFeatures.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        flex: isMobile ? "unset" : "1 1 45%",
                        display: "flex",
                        gap: 10,
                        background: "#fff",
                        padding: 15,
                        borderRadius: 12,
                        boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                      }}
                    >
                      <div style={{ fontSize: 28 }}>{item.icon}</div>
                      <div>
                        <strong>{item.title}</strong>
                        <p style={{ fontSize: 14, margin: 0, color: "#555" }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: 20 }}>
                <Link
                  to="/view-all-therapist"
                  style={{
                    display: "inline-block",
                    padding: "10px 20px",
                    background: "#22bb33",
                    color: "#fff",
                    borderRadius: 10,
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Check Therapist Directory
                </Link>
              </div>
            </div>

            {/* Right Section - Form */}
            <div className="col-lg-5">
              <div className="rbt-contact-form p-5 rounded shadow bg-white">
                <h4 className="title mb-3">Tell Us About You!</h4>
                <p style={{ color: "#d50000" }}>{error}</p>

                <div className="form-group mb-3">
                  <select
                    value={formData.profileType}
                    onChange={(e) => setFormData((p) => ({ ...p, profileType: e.target.value }))}
                    className="form-control"
                  >
                    <option value="">Select profile type</option>
                    <option value="Counselling Psychologist">Counselling Psychologist</option>
                    <option value="Psychiatrist">Psychiatrist</option>
                   
                    
                    <option value="Clinical Psychologist">Clinical Psychologist</option>
                    <option value="Rehabilitation Psychologist">Rehabilitation Psychologist</option>
                    <option value="Special Educator">Special Educator</option>
                    
                  </select>
                </div>

                <div className="form-group mb-3">
                  <select
                    value={formData.mode}
                    onChange={(e) => setFormData((p) => ({ ...p, mode: e.target.value }))}
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
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    className="form-control"
                  />
                </div>

                <div className="form-group mb-3">
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    className="form-control"
                  />
                </div>

                <div className="form-group mb-3">
                  <input
                    type="text"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
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
                      <input
                        type="checkbox"
                        value={val}
                        onChange={handleCheckboxChange}
                        checked={formData.checkedValues.includes(val)}
                      />
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

                {/* Call to Action */}
                <div
                  style={{
                    marginTop: 30,
                    padding: 20,
                    borderRadius: 12,
                    background: "linear-gradient(135deg, #22bb33 0%, #a1e887 100%)",
                    color: "#fff",
                    textAlign: "center",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <FaPhoneAlt size={28} />
                  <h5 style={{ fontWeight: 600, marginBottom: 5 }}>
                    Have Questions or Need Help?
                  </h5>
                  <p style={{ marginBottom: 10 }}>
                    Call us now for registration or query support.
                  </p>
                  <a
                    href="tel:+918077757951"
                    style={{
                      display: "inline-block",
                      padding: "10px 20px",
                      background: "#fff",
                      color: "#22bb33",
                      fontWeight: 600,
                      borderRadius: 10,
                      textDecoration: "none",
                    }}
                  >
                    +91 80777 57951
                  </a>
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
                onChange={(e) => handleOtpChange(e.target.value)}
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
