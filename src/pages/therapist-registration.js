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
import { profileTypeList } from "../utils/static-lists";
import { postData, postFormData } from "../utils/actions";
import FormMessage from "../components/global/form-message";
import FormProgressBar from "../components/global/form-progressbar";
import { FaPhoneAlt } from "react-icons/fa"; // Icon for CTA

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

  const joinSteps = [
    { icon: "📄", title: "Submit Resume", desc: "Send us your credentials for verification." },
    { icon: "✅", title: "Receive Approval", desc: "Within 7 days, get confirmation email for eligibility." },
    { icon: "💳", title: "Activate Profile", desc: "Complete one-time listing payment to create your profile." },
    { icon: "🌐", title: "Connect Independently", desc: "Manage visibility and connect with clients without employment constraints." },
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
      <MyNavbar />

      {/* Hero Section */}
      <div
        style={{
          background: "linear-gradient(135deg, #e6f5ea 0%, #ffffff 60%, #d9f0e6 100%)",
          padding: isMobile ? "60px 15px" : "100px 0",
        }}
      >
        <div className="container">
          <div className="row align-items-start g-5">
            <div className="col-lg-7">
              <h1
                style={{
                  fontWeight: 900,
                  fontSize: isMobile ? "40px" : "60px",
                  color: "#0f3d26",
                  lineHeight: 1.2,
                  marginBottom: 15,
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
              <p style={{
                fontSize: isMobile ? 18 : 20,
                color: "#000000ff",
                maxWidth: 550,
                lineHeight: 1.6,
              }}>
                Build your verified professional profile, increase your client base, and become part of India’s trusted mental health network.
              </p>

              <div
                style={{
                  marginTop: 20,
                  display: "inline-block",
                  padding: "8px 16px",
                  background: "#e1f5e3",
                  color: "#000a01ff",
                  fontWeight: 200,
                  borderRadius: 25,
                  fontSize: isMobile ? 16 : 18,
                }}
              >
              <p>One-time Listing Fee ₹499 Only – Pay via UPI: chooseyourtherapist@okhdfcbank – Get verified, featured, and listed on India’s trusted therapist network.
             </p> </div>

              {/* Steps Section */}
              <div style={{ marginTop: 40 }}>
                {joinSteps.map((step, idx) => (
                  <div key={idx} style={{
                    display: "flex",
                    gap: 15,
                    background: "#ffffff",
                    padding: "15px 20px",
                    borderRadius: 12,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                    marginBottom: 15,
                  }}>
                    <div style={{ fontSize: 28 }}>{step.icon}</div>
                    <div>
                      <strong style={{ color: "#22bb33" }}>{step.title}</strong>
                      <p style={{ margin: 2, fontSize: 14, color: "#555" }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Premium Features */}
              <div style={{ marginTop: 30 }}>
                <h5 style={{ fontWeight: 600, marginBottom: 15 }}>Premium Features:</h5>
                <div style={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  flexWrap: isMobile ? "unset" : "wrap",
                  gap: 15
                }}>
                  {premiumFeatures.map((item, idx) => (
                    <div key={idx} style={{
                      flex: isMobile ? "unset" : "1 1 45%",
                      display: "flex",
                      gap: 10,
                      background: "#fff",
                      padding: 15,
                      borderRadius: 12,
                      boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
                    }}>
                      <div style={{ fontSize: 28 }}>{item.icon}</div>
                      <div>
                        <strong>{item.title}</strong>
                        <p style={{ fontSize: 14, margin: 0, color: "#555" }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Check Therapist Directory Button */}
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
                    transition: "0.3s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.background = "#1f9e2b")}
                  onMouseOut={(e) => (e.currentTarget.style.background = "#22bb33")}
                >
                  Check Our Therapist Directory
                </Link>
              </div>

            </div>

            {/* Registration Form */}
            <div className="col-lg-5">
              <div className="rbt-contact-form contact-form-style-1 p-5 rounded shadow bg-white">
                <h4 className="title mb-3">Tell Us About You!</h4>
                <p style={{ color: "#d50000" }}>{error}</p>

                {/* Form Fields */}
                <div className="form-group mb-3">
                  <select value={profileType} onChange={(e) => setProfileType(e.target.value)} className="form-control">
                    <option value="">Select profile type</option>
                    {profileTypeList.map((item) => (<option key={item} value={item}>{item}</option>))}
                  </select>
                </div>

                <div className="form-group mb-3">
                  <select value={mode} onChange={(e) => setMode(e.target.value)} className="form-control">
                    <option value="">Service Mode</option>
                    <option value={1}>Virtual</option>
                    <option value={2}>In-Person</option>
                    <option value={3}>Virtual & In-Person</option>
                  </select>
                </div>

                <div className="form-group mb-3"><input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" /></div>
                <div className="form-group mb-3"><input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" /></div>
                <div className="form-group mb-3"><input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" /></div>

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
                  <input type="file" accept=".pdf" className="resume-upload" onChange={handleFileChange} />
                </div>

                <div className="form-submit-group mb-3">
                  <p style={{ color: "#22bb33" }}>{success}</p>
                  {loading ? (
                    <Box sx={{ display: "flex", justifyContent: "center" }}><CircularProgress /></Box>
                  ) : (
                    <button onClick={handleSubmit} className="rbt-btn btn-gradient radius-round w-100">Submit</button>
                  )}
                </div>

                <div className="rbt-lost-password text-end mt-2">
                  <Link className="rbt-btn-link" to="/login">Already have an account? Login</Link>
                </div>

                {/* CTA Card */}
                <div style={{
                  marginTop: 30, padding: 20, borderRadius: 12,
                  background: "linear-gradient(135deg, #22bb33 0%, #a1e887 100%)",
                  color: "#fff", textAlign: "center", boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 10
                }}>
                  <FaPhoneAlt size={28} />
                  <h5 style={{ fontWeight: 600, marginBottom: 5 }}>Have Questions or Need Help?</h5>
                  <p style={{ marginBottom: 10 }}>Call us now to get assistance with your registration or any queries.</p>
                  <a href="tel:+918077757951" style={{
                    display: "inline-block", padding: "10px 20px", background: "#fff",
                    color: "#22bb33", fontWeight: 600, borderRadius: 10, textDecoration: "none",
                    transition: "0.3s"
                  }} onMouseOver={(e) => (e.currentTarget.style.background = "#e6e6e6")}
                     onMouseOut={(e) => (e.currentTarget.style.background = "#fff")}>
                    +91 80777 57951
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Joining Criteria Section */}
      <div
        style={{
          background: "#f3faf5",
          padding: isMobile ? "60px 15px" : "100px 0",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <h2 style={{
              fontSize: isMobile ? "28px" : "40px",
              fontWeight: 900,
              color: "#0f3d26",
              marginBottom: 10,
            }}>
              Joining Criteria for Mental Health Professionals
            </h2>
            <p style={{
              fontSize: isMobile ? 16 : 18,
              color: "#1f4d2b",
              maxWidth: 650,
              margin: "0 auto",
              lineHeight: 1.6,
            }}>
              At ChooseYourTherapist.in, we connect clients with qualified and certified mental health professionals. To ensure quality, we accept applications based on the following educational qualifications recognized in India.
            </p>
          </div>

          <div style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            flexWrap: "wrap",
            gap: 25,
            justifyContent: "center",
          }}>
            {[
              {
                title: "Counselling Psychologists",
                qualification: "M.A./M.Sc. in Psychology / Counselling Psychology from a recognized university.",
                eligibility: "Must have completed relevant internships or practical training in counselling."
              },
              {
                title: "Clinical Psychologists",
                qualification: "M.Phil in Clinical Psychology from a recognized institute.",
                eligibility: "Registration with the Rehabilitation Council of India (RCI) is mandatory."
              },
              {
                title: "Special Education Professionals",
                qualification: "B.Ed in Special Education or equivalent from a recognized institution.",
                eligibility: "Must have relevant experience or certification in working with children or adults with special needs."
              },
              {
                title: "Psychiatrists",
                qualification: "M.D. in Psychiatry from a recognized medical college.",
                eligibility: "Must be registered with the Medical Council of India (MCI)/State Medical Council."
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                flex: isMobile ? "unset" : "1 1 45%",
                background: "#ffffff",
                padding: 25,
                borderRadius: 15,
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              }}>
                <h4 style={{ fontWeight: 700, color: "#22bb33", marginBottom: 12 }}>
                  {item.title}
                </h4>
                <p style={{ fontWeight: 600, marginBottom: 4 }}>Minimum Qualification:</p>
                <p style={{ marginBottom: 10 }}>{item.qualification}</p>
                <p style={{ fontWeight: 600, marginBottom: 4 }}>Eligibility:</p>
                <p>{item.eligibility}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40, textAlign: "center", maxWidth: 700, margin: "40px auto 0" }}>
            <p style={{ fontSize: isMobile ? 14 : 16, color: "#555", lineHeight: 1.6 }}>
              <strong>Additional Notes:</strong> All professionals must provide valid certificates and registration proof during registration. Only professionals meeting the above criteria will be listed on our platform. Continuous professional development is encouraged to maintain the highest quality of mental health services.
            </p>
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
              <input type="text" placeholder="OTP" value={otp} onChange={(e) => handleChange(e.target.value)} />
            </div>
          </DialogContent>
          <DialogActions>
            {loading ? <FormProgressBar /> : <button className="rbt-btn btn-gradient w-100" onClick={verifyOtp}>Submit OTP</button>}
          </DialogActions>
        </div>
      </Dialog>

      <NewsLetter />
      <Footer />
    </>
  );
}
