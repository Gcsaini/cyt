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
import {
  FaPhoneAlt,
  FaUserTie,
  FaStar,
  FaHandshake,
  FaCheckCircle,
} from "react-icons/fa";
import { Helmet } from "react-helmet";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function TherapistRegistration() {
  // --- form & UI state
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

  // responsive
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));

  useEffect(() => {
    // nothing special here, but keeping for parity with previous versions
  }, []);

  // --- helpers
  const handleFileChange = (event) =>
    setFormData((prev) => ({ ...prev, selectedFile: event.target.files[0] }));

  const validateEmail = (email) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      (email || "").toLowerCase()
    );

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      checkedValues: checked
        ? [...prev.checkedValues, value]
        : prev.checkedValues.filter((v) => v !== value),
    }));
  };

  // --- submit registration (keeps backend as-is)
  const handleSubmit = async () => {
    const { name, phone, email, profileType, mode, checkedValues, selectedFile } =
      formData;

    setError("");
    setSuccess("");

    if (!profileType) return setError("Please select profile type");
    if (!mode) return setError("Please select service mode");
    if (!name || name.trim().length < 5) return setError("Please enter full name");
    if (!validateEmail(email)) return setError("Please enter valid email id");
    if (!phone || phone.trim().length !== 10) return setError("Please enter valid phone number");
    if (!checkedValues.length) return setError("Please check any 'Interested to serve'");
    if (!selectedFile) return setError("Please upload your resume");

    setLoading(true);
    const data = new FormData();
    data.append("file", selectedFile);
    data.append("name", name.trim());
    data.append("phone", phone.trim());
    data.append("email", email.trim());
    data.append("type", profileType);
    data.append("mode", mode);
    data.append("serve", checkedValues.join(", "));

    try {
      const response = await postFormData(threapistRegistrationUrl, data);
      // expecting same response structure as before: response.status truthy on success
      if (response && response.status) {
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
        setSuccess(""); // success message will show after OTP verify
      } else {
        setError(response?.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  // --- OTP verify
  const handleOtpChange = (value) => setOtp(value.replace(/\D/g, "").slice(0, 6));
  const onClose = () => setOpen(false);

  const verifyOtp = async () => {
    setOtpError("");
    if (otp.length !== 6) return setOtpError("Please enter valid OTP");

    try {
      setLoading(true);
      const response = await postData(verifyOtpUrl, { email: formData.email, otp });
      if (response && response.status) {
        setOtp("");
        setOpen(false);
        setSuccess(
          "Thank you for submitting your resume. Our admin will review your profile soon. You will receive approval via email."
        );
      } else {
        setOtpError(response?.message || "OTP verification failed");
      }
    } catch (err) {
      setOtpError(err?.response?.data?.message || "OTP verification failed");
    }
    setLoading(false);
  };

  // --- FAQ content (expanded set, visible both left+right)
  const faqs = [
    {
      question: "Who can register as a therapist?",
      answer:
        "Counselling Psychologists, Clinical Psychologists, Psychiatrists, Special Educators, and Rehabilitation Psychologists with valid Indian qualifications can register. See eligibility below.",
    },
    {
      question: "What are the Indian qualification criteria?",
      answer:
        "Counselling Psychologist: M.A./M.Sc in Psychology or Counselling (2+ yrs experience recommended). Clinical Psychologist: M.Phil/PhD in Clinical Psychology + RCI registration required. Psychiatrist: MBBS + MD/DNB in Psychiatry + Medical Council registration. Special Educator: B.Ed. (Special Education) or equivalent (RCI recommended). Rehabilitation Psychologist: M.Sc/M.Phil in Rehabilitation Psychology (RCI recommended).",
    },
    {
      question: "What is the benefit of registering?",
      answer:
        "Profile visibility — your verified profile becomes discoverable by users searching for mental health professionals, helping you build credibility and showcase your expertise.",
    },
    {
      question: "Do I get leads directly?",
      answer:
        "This platform currently focuses on profile visibility. Clients can discover and view your profile; contact flow depends on your chosen settings and approval status.",
    },
    {
      question: "Can I register for virtual sessions only?",
      answer: "Yes — select 'Virtual' in Service Mode. You can also choose 'In-Person' or 'Virtual & In-Person'.",
    },
    {
      question: "How long does verification take?",
      answer:
        "Verification typically takes 24–48 hours. Our admin team manually reviews educational and professional documents before making the profile public.",
    },
    {
      question: "What documents should I upload?",
      answer:
        "Upload a PDF resume/CV highlighting your qualifications, registration numbers (if any), and experience. Ensure the document clearly lists degrees and institutions.",
    },
    {
      question: "Can I update my profile after approval?",
      answer:
        "Yes. After approval you can log in and update your profile details, add specialities, or upload new documents as needed.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Therapist Registration — Increase Profile Visibility | Choose Your Therapist</title>
        <meta
          name="description"
          content="Register as a verified therapist (Counselling, Clinical, Psychiatrist, Special Educator, Rehabilitation) to increase profile visibility among clients in India."
        />
        <meta
          name="keywords"
          content="Therapist registration India, counselling psychologist registration, clinical psychologist registration, psychiatrist registration, special educator registration, profile visibility"
        />
      </Helmet>

      {/* ---------- Styles (single place) ---------- */}
      <style>{`
        /* Base */
        body { background: #fff; font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; color: #0f172a; }
        * { box-sizing: border-box; }

        /* Focus resets */
        input:focus, select:focus, textarea:focus, button:focus { outline: none !important; box-shadow: none !important; }

        /* Premium banner - lighter / soft green */
        .premium-banner {
          width: 100%;
          background: linear-gradient(120deg, #f0fff4 0%, #adfab7ff 40%, #d2faceff 100%);
          padding: 88px 20px;
          text-align: center;
          color: #064e3b;
        }
        .premium-banner h1 {
          margin: 0;
          font-size: 50px;
          font-weight: 900;
          letter-spacing: -0.5px;
        }
        .premium-banner p {
          margin: 12px 0 0;
          font-size: 18px;
          font-weight: 500;
          color: #065f46;
        }

        @media (max-width: 768px) {
          .premium-banner { padding: 48px 16px; }
          .premium-banner h1 { font-size: 30px; }
          .premium-banner p { font-size: 15px; }
        }

        /* Main container spacing */
        .main-section {
          background: #fff;
          padding: 64px 20px;
        }
        .row-flex {
          display: flex;
          gap: 30px;
          align-items: flex-start;
          flex-wrap: wrap;
        }
        .col-left { flex: 1 1 55%; min-width: 300px; }
        .col-right { flex: 1 1 40%; min-width: 300px; }

        /* Left side styles */
        .headline { font-size: 40px; font-weight: 900; margin: 0 0 12px; color: #0f172a; line-height: 1.08; }
        .subhead { font-size: 16px; color: #334155; margin-bottom: 22px; max-width: 720px; }

        .criteria-card {
          background: #f8fffa;
          border-left: 4px solid #16a34a;
          padding: 18px 20px;
          margin-top: 18px;
          color: #065f46;
        }
        .criteria-card h4 { margin: 0 0 10px; font-size: 18px; }
        .criteria-card ul { margin: 0; padding-left: 18px; font-size: 14.5px; color: #065f46; }

        /* Benefits grid */
        .benefits-grid {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 28px;
        }
        .benefit-card {
          background: #fff;
          flex: 1 1 45%;
          min-width: 220px;
          border-radius: 12px;
          padding: 16px 18px;
          box-shadow: 0 8px 20px rgba(3,7,18,0.06);
          display: flex;
          gap: 14px;
          align-items: center;
        }
        .benefit-title { font-weight: 700; font-size: 19px; margin: 0; color: #0f172a; }
        .benefit-desc { margin: 4px 0 0; font-size: 14px; color: #475569; font-weight: 500; }

        /* Right side form card */
        .form-card {
          background: #fff;
          padding: 26px;
          box-shadow: 0 12px 30px rgba(2,6,23,0.06);
          border-left: 6px solid #16a34a;
        }
        .form-card h3 { margin: 0 0 10px; color: #065f46; font-size: 20px; font-weight: 800; }
        .form-control { width: 100%; padding: 12px 14px; border: 1px solid #e6e9ef; border-radius: 8px; font-size: 15px; color: #0f172a; }
        .form-control:focus { border-color: #16a34a; }

        .checkbox-list p { margin: 8px 0; display: flex; align-items: center; gap: 10px; font-weight: 500; color: #0f172a; }

        /* Premium submit */
        .premium-btn {
          background: linear-gradient(135deg, #16a34a, #22c55e);
          color: #fff;
          font-weight: 800;
          font-size: 18px;
          border-radius: 10px;
          padding: 14px 18px;
          border: none;
          width: 100%;
          cursor: pointer;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .premium-btn:hover { transform: translateY(-3px); box-shadow: 0 12px 30px rgba(2,6,23,0.12); }

        .support-card {
          margin-top: 22px;
          background: linear-gradient(135deg, #e8fff3, #dffdec);
          color: #065f46;
          padding: 18px;
          text-align: center;
          border-radius: 10px;
        }
        .support-card a { text-decoration: none; display: inline-block; margin-top: 10px; background: #fff; color: #16a34a; padding: 8px 16px; border-radius: 8px; font-weight: 700; }

        /* FAQ section */
        .faq-section {
          background: #f8fafb;
          padding: 64px 20px;
          margin-top: 22px;
        }
        .faq-section h2 { text-align: center; font-size: 32px; margin-bottom: 28px; color: #064e3b; font-weight: 900; }
        .faq-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .faq-item {
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(2,6,23,0.04);
        }
        .faq-item h5 { margin: 0 0 8px; color: #065f46; font-size: 16px; font-weight: 700; }
        .faq-item p { margin: 0; color: #334155; font-size: 15px; line-height: 1.45; }

        @media (max-width: 992px) {
          .col-left { flex: 1 1 100%; }
          .col-right { flex: 1 1 100%; }
          .benefit-card { flex: 1 1 100%; }
          .faq-grid { grid-template-columns: 1fr; }
          .premium-banner { padding: 48px 16px; }
        }
      `}</style>

      {/* ---------- Page content ---------- */}
      <MyNavbar />

      {/* Banner */}
      <div className="premium-banner" role="banner" aria-label="Premium banner: get discovered as a verified therapist">
        <h1>Get Discovered as a Verified Therapist</h1>
        <p>Enhance your profile visibility and connect with clients looking for qualified mental health professionals.</p>
      </div>

      {/* Main registration + left content */}
      <div className="main-section">
        <div className="container">
          <div className="row-flex">
            {/* LEFT: Content, criteria, benefits */}
            <div className="col-left">
              <h1 className="headline">Let Clients <span style={{ color: "#16a34a" }}>Discover Your Profile</span></h1>
              <p className="subhead">
                Submit your professional profile to increase your discoverability. Our platform helps qualified mental health professionals
                (counsellors, clinical psychologists, psychiatrists and special educators) present their qualifications and service modes clearly to clients.
              </p>

              {/* Eligibility criteria */}
              <div className="criteria-card" aria-labelledby="eligibility-heading">
                <h3 id="eligibility-heading">Eligibility Criteria (India)</h3>
                <ul>
                  <li><strong>Counselling Psychologist:</strong> M.A./M.Sc in Psychology or Counselling (2+ years experience recommended). RCI registration optional.</li>
                  <li><strong>Clinical Psychologist:</strong> M.Phil or PhD in Clinical Psychology. RCI registration mandatory.</li>
                  <li><strong>Psychiatrist:</strong> MBBS + MD/DNB (Psychiatry). Valid Medical Council registration required.</li>
                  <li><strong>Special Educator:</strong> B.Ed. (Special Education) or equivalent. RCI registration recommended.</li>
                  <li><strong>Rehabilitation Psychologist:</strong> M.Sc/M.Phil in Rehabilitation Psychology. RCI registration recommended.</li>
                </ul>
              </div>

              {/* Benefits */}
              <div className="benefits-grid" aria-hidden={false}>
                <div className="benefit-card">
                  <FaUserTie color="#16a34a" size={90} />
                  <div>
                    <p className="benefit-title">Verified Profile</p>
                    <p className="benefit-desc">Build trust and become verified professionals stand out when clients search.</p>
                  </div>
                </div>

                <div className="benefit-card">
                  <FaHandshake color="#16a34a" size={90} />
                  <div>
                    <p className="benefit-title">Enhanced Visibility</p>
                    <p className="benefit-desc">Your profile gets highlighted to clients searching for services you offer.</p>
                  </div>
                </div>

                <div className="benefit-card">
                  <FaStar color="#16a34a" size={90} />
                  <div>
                    <p className="benefit-title">Professional Credibility</p>
                    <p className="benefit-desc">Showcase credentials, experience, and service modes to attract the right audience.</p>
                  </div>
                </div>

                <div className="benefit-card">
                  <FaCheckCircle color="#16a34a" size={90} />
                  <div>
                    <p className="benefit-title">Profile Support</p>
                    <p className="benefit-desc">Guidance to optimise your profile for better discoverability and clarity.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Registration form */}
            <div className="col-right">
              <div className="form-card" role="form" aria-labelledby="registration-heading">
                <h2 id="registration-heading">Registration Form</h2>

                {/* error / success */}
                {error ? <p style={{ color: "#dc2626", fontWeight: 700 }}>{error}</p> : null}
                {success ? <p style={{ color: "#16a34a", fontWeight: 700 }}>{success}</p> : null}

                {/* Profile Type */}
                <div style={{ margin: "14px 0" }}>
                  <select
                    className="form-control"
                    value={formData.profileType}
                    onChange={(e) => setFormData((p) => ({ ...p, profileType: e.target.value }))}
                    aria-label="Select profile type"
                  >
                    <option value="">Select profile type</option>
                    <option value="Counselling Psychologist">Counselling Psychologist</option>
                    <option value="Psychiatrist">Psychiatrist</option>
                    <option value="Clinical Psychologist">Clinical Psychologist</option>
                    <option value="Special Educator">Special Educator</option>
                    <option value="Rehabilitation Psychologist">Rehabilitation Psychologist</option>
                  </select>
                </div>

                {/* Service Mode */}
                <div style={{ margin: "14px 0" }}>
                  <select
                    className="form-control"
                    value={formData.mode}
                    onChange={(e) => setFormData((p) => ({ ...p, mode: e.target.value }))}
                    aria-label="Select service mode"
                  >
                    <option value="">Service Mode</option>
                    <option value={1}>Virtual</option>
                    <option value={2}>In-Person</option>
                    <option value={3}>Virtual & In-Person</option>
                  </select>
                </div>

                {/* Name */}
                <div style={{ margin: "14px 0" }}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="form-control"
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    aria-label="Full name"
                  />
                </div>

                {/* Email */}
                <div style={{ margin: "14px 0" }}>
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    aria-label="Email address"
                  />
                </div>

                {/* Phone */}
                <div style={{ margin: "14px 0" }}>
                  <input
                    type="text"
                    placeholder="Phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                    aria-label="Phone number"
                  />
                </div>

                {/* Interested to serve */}
                <div style={{ margin: "14px 0" }}>
                  <div style={{ fontWeight: 700, marginBottom: 8 }}>Interested to serve:</div>
                  <div className="checkbox-list" role="group" aria-label="Interested services">
                    {[
                      "Prescribe Medication (Psychiatrist only)",
                      "Individual Counselling",
                      "Couple Counselling",
                      "Teen Counselling",
                      "Workshops / Events",
                      "Internship / Training",
                    ].map((val, i) => (
                      <p key={i}>
                        <input
                          type="checkbox"
                          id={`serve-${i}`}
                          value={val}
                          onChange={handleCheckboxChange}
                          checked={formData.checkedValues.includes(val)}
                          aria-checked={formData.checkedValues.includes(val)}
                        />
                        <label htmlFor={`serve-${i}`} style={{ marginLeft: 8 }}>{val}</label>
                      </p>
                    ))}
                  </div>
                </div>

                {/* Upload resume */}
                <div style={{ margin: "14px 0" }}>
                  <div style={{ fontWeight: 700 }}>Upload Resume (PDF)</div>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    style={{ marginTop: 8 }}
                    aria-label="Upload resume PDF"
                  />
                </div>

                {/* Submit */}
                <div style={{ marginTop: 18 }}>
                  {loading ? (
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <CircularProgress />
                    </Box>
                  ) : (
                    <button className="premium-btn" onClick={handleSubmit} aria-label="Submit registration">
                      Submit
                    </button>
                  )}
                </div>

                <div style={{ marginTop: 12, textAlign: "right" }}>
                  <Link to="/login" className="rbt-btn-link">Already have an account? Login</Link>
                </div>

                {/* Support */}
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section (both sides visible; grid auto-splits) */}
      <section className="faq-section" aria-labelledby="faq-heading">
        <div className="container">
          <h2 id="faq-heading">Frequently Asked Questions</h2>
          <div className="faq-grid" role="list">
            {faqs.map((f, idx) => (
              <article className="faq-item" key={idx} role="listitem" aria-labelledby={`faq-q-${idx}`}>
                <h5 id={`faq-q-${idx}`}>{f.question}</h5>
                <p>{f.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

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
              aria-label="OTP input"
            />
          </DialogContent>
          <DialogActions>
            {loading ? (
              <FormProgressBar />
            ) : (
              <button className="premium-btn" onClick={verifyOtp} aria-label="Submit OTP">
                Submit OTP
              </button>
            )}
          </DialogActions>
        </div>
      </Dialog>

      {/* Newsletter & Footer */}
      <NewsLetter />
      <Footer />
    </>
  );
}
