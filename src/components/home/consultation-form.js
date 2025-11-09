import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { postData } from "../../utils/actions";
import { SubmitConsultationUrl } from "../../utils/url";

export default function ConsultationForm() {
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
      const response = await postData(SubmitConsultationUrl, {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        concern: formData.concern.trim()
      });

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
    <div className="content" style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
      <div className="inner">
        <div style={{ marginBottom: 20 }}>
          <h3 style={{
            color: "#228756",
            fontSize: isMobile ? "24px" : "28px",
            fontWeight: "600",
            marginBottom: "10px"
          }}>
            15-Minute Free Therapy
          </h3>
          <p style={{
            color: "#666",
            fontSize: "16px",
            marginBottom: "20px"
          }}>
Talk to a certified psychologist for free and discover how therapy can help you feel better.
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

        <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px 15px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "16px",
                outline: "none",
                transition: "border-color 0.3s",
                boxSizing: "border-box"
              }}
              onFocus={(e) => e.target.style.borderColor = "#228756"}
              onBlur={(e) => e.target.style.borderColor = "#ddd"}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px 15px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "16px",
                outline: "none",
                transition: "border-color 0.3s",
                boxSizing: "border-box"
              }}
              onFocus={(e) => e.target.style.borderColor = "#228756"}
              onBlur={(e) => e.target.style.borderColor = "#ddd"}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px 15px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "16px",
                outline: "none",
                transition: "border-color 0.3s",
                boxSizing: "border-box"
              }}
              onFocus={(e) => e.target.style.borderColor = "#228756"}
              onBlur={(e) => e.target.style.borderColor = "#ddd"}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <textarea
              name="concern"
              placeholder="Tell us about your concern (optional)"
              value={formData.concern}
              onChange={handleChange}
              rows={4}
              style={{
                width: "100%",
                padding: "12px 15px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "16px",
                outline: "none",
                transition: "border-color 0.3s",
                resize: "vertical",
                minHeight: "80px",
                boxSizing: "border-box"
              }}
              onFocus={(e) => e.target.style.borderColor = "#228756"}
              onBlur={(e) => e.target.style.borderColor = "#ddd"}
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
            {loading ? "Submitting..." : "Request Consultation"}
          </button>
        </form>
      </div>
    </div>
  );
}