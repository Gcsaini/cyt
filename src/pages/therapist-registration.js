import ImageTag from "../utils/image-tag";
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
import { FaPhoneAlt, FaUserTie, FaStar, FaHandshake, FaCheckCircle } from "react-icons/fa";

export default function TherapistRegistration() {
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

  return (
    <>
      <style>{`
        input:focus, select:focus, textarea:focus, button:focus {
          outline: none !important;
          box-shadow: none !important;
        }
      `}</style>

      <MyNavbar />

      <div
        style={{
          background: "linear-gradient(145deg, #ecfdf5, #ffffff)",
          padding: isMobile ? "60px 20px" : "100px 0",
        }}
      >
        <div className="container">
          <div
            className="row align-items-center g-5"
            style={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}
          >
            {/* LEFT SIDE CONTENT */}
            <div className="col-lg-6" style={{ paddingRight: isMobile ? 0 : 30 }}>
              <h1
                style={{
                  fontSize: isMobile ? "36px" : "60px",
                  fontWeight: 900,
                  color: "#000",
                  lineHeight: 1.2,
                  marginBottom: 20,
                }}
              >
                Let Clients <span style={{ color: "#059669" }}>Find You</span> Effortlessly
              </h1>

              <p style={{ fontSize: "18px", color: "#333", maxWidth: 550 }}>
                Join India’s trusted network of mental health professionals.
                Submit your profile and start receiving verified leads from clients seeking support.
              </p>

              <div
                style={{
                  marginTop: 25,
                  background: "#dcfce7",
                  borderLeft: "5px solid #16a34a",
                  padding: "15px 20px",
                  borderRadius: 10,
                }}
              >
                <p style={{ margin: 0, fontSize: "16px", color: "#166534" }}>
                  🌿 <strong>We value your expertise!</strong>  
                  Let’s make mental health accessible — together.
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 15,
                  marginTop: 40,
                }}
              >
                {[FaUserTie, FaHandshake, FaStar, FaCheckCircle].map((Icon, i) => (
                  <div
                    key={i}
                    style={{
                      flex: "1 1 45%",
                      background: "#fff",
                      borderRadius: 12,
                      padding: "18px 20px",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
                      display: "flex",
                      alignItems: "center",
                      gap: 15,
                    }}
                  >
                    <Icon color="#16a34a" size={30} />
                    <div style={{ fontWeight: 600, color: "#1e293b" }}>
                      {i === 0 && "Verified Listing"}
                      {i === 1 && "Grow Your Reach"}
                      {i === 2 && "Client Trust Boost"}
                      {i === 3 && "Lead Support"}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="col-lg-6">
              <div
                className="p-5 rounded shadow bg-white"
                style={{ borderLeft: "5px solid #16a34a" }}
              >
                <h3 style={{ marginBottom: 10, fontWeight: 700, color: "#065f46" }}>
                  Therapist Registration Form
                </h3>
                <p style={{ color: "#d32f2f", fontWeight: 500 }}>{error}</p>

                <div className="form-group mb-3">
                  <select
                    value={formData.profileType}
                    onChange={(e) => setFormData((p) => ({ ...p, profileType: e.target.value }))}
                    className="form-control"
                  >
                    <option value="">Select profile type</option>
                    <option value="Psychologist">Psychologist</option>
                    <option value="Psychiatrist">Psychiatrist</option>
                    <option value="Counsellor">Counsellor</option>
                    <option value="Therapist">Therapist</option>
                    <option value="Clinical Psychologist">Clinical Psychologist</option>
                    <option value="Rehabilitation Psychologist">Rehabilitation Psychologist</option>
                    <option value="Clinical Nutritionist">Clinical Nutritionist</option>
                    <option value="Life Coach">Life Coach</option>
                    <option value="Wellness Coach">Wellness Coach</option>
                    <option value="Social Worker">Social Worker</option>
                    <option value="Other">Other</option>
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

                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                  className="form-control mb-3"
                />

                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                  className="form-control mb-3"
                />

                <input
                  type="text"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                  className="form-control mb-3"
                />

                <div className="form-group mb-3">
                  <span>Interested to serve:</span>
                  {[
                    "Prescribe Medication (Psychiatrist only)",
                    "Individual Counselling",
                    "Couple Counselling",
                    "Teen Counselling",
                    "Workshops / Events",
                    "Internship / Training",
                  ].map((val, i) => (
                    <p key={i} className="rbt-checkbox-wrapper mb-1">
                      <input
                        type="checkbox"
                        value={val}
                        onChange={handleCheckboxChange}
                        checked={formData.checkedValues.includes(val)}
                      />
                      <label style={{ marginLeft: 6 }}>{val}</label>
                    </p>
                  ))}
                </div>

                <div className="form-group mb-3">
                  <span>Upload Resume (PDF)</span>
                  <input
                    type="file"
                    accept=".pdf"
                    className="form-control mt-1"
                    onChange={handleFileChange}
                  />
                </div>

                <div className="form-submit-group mb-3">
                  <p style={{ color: "#16a34a" }}>{success}</p>
                  {loading ? (
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <CircularProgress />
                    </Box>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      className="rbt-btn btn-gradient radius-round w-100"
                      style={{
                        background: "linear-gradient(135deg, #16a34a, #22c55e)",
                        border: "none",
                        padding: "10px 0",
                        color: "#fff",
                        fontWeight: 600,
                        borderRadius: 10,
                      }}
                    >
                      Submit
                    </button>
                  )}
                </div>

                <div className="text-end mt-2">
                  <Link className="rbt-btn-link" to="/login">
                    Already have an account? Login
                  </Link>
                </div>
              </div>

              {/* Support Card */}
              <div
                style={{
                  marginTop: 30,
                  background: "linear-gradient(135deg, #16a34a, #22c55e)",
                  color: "#fff",
                  padding: "20px",
                  borderRadius: 12,
                  textAlign: "center",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                }}
              >
                <FaPhoneAlt size={26} />
                <h5 style={{ fontWeight: 600, margin: "10px 0 5px" }}>
                  Have Questions or Need Help?
                </h5>
                <p>Call us now for registration or query support</p>
                <a
                  href="tel:+918077757951"
                  style={{
                    display: "inline-block",
                    padding: "10px 20px",
                    background: "#fff",
                    color: "#16a34a",
                    fontWeight: 600,
                    borderRadius: 8,
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

      {/* OTP Dialog */}
      <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
        <div style={{ padding: 16 }}>
          <h5>Enter OTP</h5>
          <FormMessage success={success} error={otpError} />
          <DialogContent dividers>
            <input
              type="text"
              placeholder="OTP"
              value={otp}
              onChange={(e) => handleOtpChange(e.target.value)}
              className="form-control"
            />
          </DialogContent>
          <DialogActions>
            {loading ? (
              <FormProgressBar />
            ) : (
              <button
                className="rbt-btn btn-gradient w-100"
                style={{
                  background: "linear-gradient(135deg, #16a34a, #22c55e)",
                  color: "#fff",
                  fontWeight: 600,
                }}
                onClick={verifyOtp}
              >
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
