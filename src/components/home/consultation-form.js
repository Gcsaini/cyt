import React, { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import { postJsonDataNoAuth } from "../../utils/actions";
import { SubmitConsultationUrl } from "../../utils/url";

export default function ConsultationForm() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    concern: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

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
        setMessage("Thank you! Your consultation request has been submitted successfully. We'll get back to you soon.");
        setMessageType("success");
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
      width: isMobile ? "100%" : "auto",
      boxSizing: "border-box",
      maxWidth: isMobile ? "100%" : "none"
    }}>
      <div className="inner">
        <div style={{ marginBottom: 20, backgroundColor: "#228756", color: "white", padding: "15px", borderRadius: "10px", textAlign: "center" }}>
          <h3 style={{
            color: "white",
            fontSize: isMobile ? "clamp(18px, 5vw, 22px)" : "28px",
            fontWeight: "600",
            marginBottom: "8px",
            whiteSpace: isMobile ? "nowrap" : "normal",
            overflow: isMobile ? "hidden" : "visible",
            textOverflow: isMobile ? "ellipsis" : "clip"
          }}>
            15-Minute Free Consultation
          </h3>
          <p style={{
            color: "white",
            fontSize: isMobile ? "clamp(9px, 2.5vw, 11px)" : "12px",
            marginBottom: "0",
            whiteSpace: isMobile ? "nowrap" : "normal",
            overflow: isMobile ? "hidden" : "visible",
            textOverflow: isMobile ? "ellipsis" : "clip"
          }}>
            A free consultation to explore your therapy needs with a psychologist.
          </p>
        </div>

        {message && (
          <div style={{
            padding: "12px 16px",
            marginBottom: "20px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "500",
            backgroundColor: messageType === "success" ? "#d4edda" : "#f8d7da",
            color: messageType === "success" ? "#155724" : "#721c24",
            border: `1px solid ${messageType === "success" ? "#c3e6cb" : "#f5c6cb"}`
          }}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{
          maxWidth: "400px",
          width: isMobile ? "100%" : "auto",
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
    </div>
  );
}