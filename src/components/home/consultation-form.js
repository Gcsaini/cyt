import React, { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import { postJsonDataNoAuth } from "../../utils/actions";
import { SubmitConsultationUrl } from "../../utils/url";

export default function ConsultationForm({ showHeading = true }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    concern: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const errors = [];

    if (!formData.name.trim()) {
      errors.push("Name is required");
    }

    if (!formData.phone.trim()) {
      errors.push("Phone number is required");
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      errors.push("Please enter a valid 10-digit phone number");
    }

    if (!formData.email.trim()) {
      errors.push("Email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.push("Please enter a valid email address");
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous messages
    setMessage("");
    setMessageType("");

    // Validate form
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setMessage(validationErrors.join(", "));
      setMessageType("error");
      return;
    }

    setLoading(true);

    try {
      const dataToSend = {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        concern: formData.concern.trim()
      };

      console.log("Sending consultation data:", dataToSend);

      // Try different data structures that the backend might expect
      const response = await postJsonDataNoAuth(SubmitConsultationUrl, dataToSend);

      // If that doesn't work, try wrapped in 'data' object
      // const response = await postJsonDataNoAuth(SubmitConsultationUrl, { data: dataToSend });

      // Or try with different field names
      // const response = await postJsonDataNoAuth(SubmitConsultationUrl, {
      //   full_name: formData.name.trim(),
      //   phone_number: formData.phone.trim(),
      //   email_address: formData.email.trim(),
      //   message: formData.concern.trim()
      // });

      console.log("Consultation response:", response);

      if (response.status) {
        setShowSuccessPopup(true);
        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          concern: ""
        });
      } else {
        setMessage(response.message || "Failed to submit consultation request. Please try again.");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Consultation submission error:", error);
      setMessage("An error occurred while submitting your request. Please try again later.");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="content" style={{
      backgroundColor: "white",
      padding: isMobile ? "20px" : "25px",
      borderRadius: "15px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
      border: "2px solid #228756",
      width: "100%",
      maxWidth: "800px",
      margin: "0 auto",
      boxSizing: "border-box"
    }}>
      <div className="inner">
        {showHeading && (
          <div style={{ marginBottom: 20, backgroundColor: "#e8f5e8", color: "#228756", padding: "15px", borderRadius: "10px", textAlign: "center", border: "2px solid #228756" }}>
            <h3 style={{
              color: "#228756",
              fontSize: isMobile ? "clamp(16px, 4.5vw, 20px)" : "32px",
              fontWeight: "600",
              marginBottom: "8px",
              whiteSpace: isMobile ? "nowrap" : "normal",
              overflow: isMobile ? "hidden" : "visible",
              textOverflow: isMobile ? "ellipsis" : "clip"
            }}>
              15-Minute Free Consultation
            </h3>
            <p style={{
              color: "#228756",
              fontSize: isMobile ? "clamp(8px, 2.2vw, 10px)" : "11px",
              marginBottom: "0",
              whiteSpace: isMobile ? "nowrap" : "normal",
              overflow: isMobile ? "hidden" : "visible",
              textOverflow: isMobile ? "ellipsis" : "clip"
            }}>
              A free consultation to explore your therapy needs with a psychologist.
            </p>
          </div>
        )}

        {message && messageType === "error" && (
          <div style={{
            padding: "12px 16px",
            marginBottom: "20px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "500",
            backgroundColor: "#f8d7da",
            color: "#721c24",
            border: "1px solid #f5c6cb"
          }}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{
          maxWidth: "700px",
          width: "100%",
          margin: "0 auto",
          boxSizing: "border-box"
        }}>
          <div style={{ marginBottom: "15px", position: "relative" }}>
            <PersonIcon style={{ position: "absolute", left: 12, top: 12, color: "#228756", fontSize: 20 }} />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px 15px 12px 40px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "16px",
                outline: "none",
                transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
                boxSizing: "border-box"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#228756";
                e.target.style.transform = "scale(1.02)";
                e.target.style.boxShadow = "0 0 8px rgba(34, 135, 86, 0.3)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#ddd";
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          <div style={{ marginBottom: "15px", position: "relative" }}>
            <PhoneIcon style={{ position: "absolute", left: 12, top: 12, color: "#228756", fontSize: 20 }} />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px 15px 12px 40px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "16px",
                outline: "none",
                transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
                boxSizing: "border-box"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#228756";
                e.target.style.transform = "scale(1.02)";
                e.target.style.boxShadow = "0 0 8px rgba(34, 135, 86, 0.3)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#ddd";
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          <div style={{ marginBottom: "15px", position: "relative" }}>
            <EmailIcon style={{ position: "absolute", left: 12, top: 12, color: "#228756", fontSize: 20 }} />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px 15px 12px 40px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "16px",
                outline: "none",
                transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
                boxSizing: "border-box"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#228756";
                e.target.style.transform = "scale(1.02)";
                e.target.style.boxShadow = "0 0 8px rgba(34, 135, 86, 0.3)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#ddd";
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          <div style={{ marginBottom: "20px", position: "relative" }}>
            <MessageIcon style={{ position: "absolute", left: 12, top: 12, color: "#228756", fontSize: 20 }} />
            <textarea
              name="concern"
              placeholder="Tell us about your concern (optional)"
              value={formData.concern}
              onChange={handleChange}
              rows={4}
              style={{
                width: "100%",
                padding: "12px 15px 12px 40px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "16px",
                outline: "none",
                transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
                resize: "vertical",
                minHeight: "80px",
                boxSizing: "border-box"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#228756";
                e.target.style.transform = "scale(1.02)";
                e.target.style.boxShadow = "0 0 8px rgba(34, 135, 86, 0.3)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#ddd";
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px 20px",
              backgroundColor: loading ? "#ccc" : "#228756",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "background-color 0.3s",
              boxSizing: "border-box"
            }}
            onMouseOver={(e) => {
              if (!loading) e.target.style.backgroundColor = "#1a6b45";
            }}
            onMouseOut={(e) => {
              if (!loading) e.target.style.backgroundColor = "#228756";
            }}
          >
            {loading ? "Submitting..." : "Request a Call "}
          </button>
        </form>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 10000,
            animation: "fadeIn 0.3s ease-out"
          }}
          onClick={() => setShowSuccessPopup(false)}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
              borderRadius: isMobile ? "15px" : "20px",
              padding: isMobile ? "20px" : "30px",
              width: "90%",
              maxWidth: isMobile ? "320px" : "400px",
              textAlign: "center",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
              border: "3px solid #228756",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              animation: "slideUp 0.4s ease-out"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowSuccessPopup(false)}
              style={{
                position: "absolute",
                top: isMobile ? "10px" : "15px",
                right: isMobile ? "10px" : "15px",
                background: "none",
                border: "none",
                fontSize: isMobile ? "20px" : "24px",
                color: "#666",
                cursor: "pointer",
                padding: "5px",
                borderRadius: "50%",
                width: isMobile ? "30px" : "35px",
                height: isMobile ? "30px" : "35px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease"
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#f0f0f0";
                e.target.style.color = "#333";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#666";
              }}
            >
              ×
            </button>

            {/* Therapy Icon */}
            <div style={{
              width: isMobile ? "70px" : "80px",
              height: isMobile ? "70px" : "80px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #228756 0%, #56ab2f 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
              boxShadow: "0 8px 25px rgba(34, 135, 86, 0.4)"
            }}>
              <svg
                width={isMobile ? "35" : "40"}
                height={isMobile ? "35" : "40"}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "white" }}
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill="currentColor"
                />
                <circle cx="8.5" cy="8.5" r="1.5" fill="white"/>
                <circle cx="15.5" cy="8.5" r="1.5" fill="white"/>
                <path
                  d="M12 17c-1.5 0-3-1-3-3s1.5-3 3-3 3 1 3 3-1.5 3-3 3z"
                  fill="white"
                />
              </svg>
            </div>

            {/* Title */}
            <h2 style={{
              color: "#228756",
              fontSize: isMobile ? "20px" : "24px",
              fontWeight: "700",
              marginBottom: "15px",
              textShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}>
              Success!
            </h2>

            {/* Message */}
            <p style={{
              color: "#333",
              fontSize: isMobile ? "14px" : "16px",
              lineHeight: "1.6",
              marginBottom: "25px",
              fontWeight: "500"
            }}>
              Thank you! Your consultation request has been submitted successfully. Our therapist will reach out to you within 10 minutes.
            </p>

            {/* Action Button */}
            <button
              onClick={() => setShowSuccessPopup(false)}
              style={{
                background: "linear-gradient(135deg, #228756 0%, #56ab2f 100%)",
                color: "white",
                border: "none",
                padding: isMobile ? "10px 25px" : "12px 30px",
                borderRadius: "25px",
                fontSize: isMobile ? "14px" : "16px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(34, 135, 86, 0.3)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                minWidth: isMobile ? "120px" : "140px"
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 6px 20px rgba(34, 135, 86, 0.4)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 15px rgba(34, 135, 86, 0.3)";
              }}
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) translateY(30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
    </div>
  );
}