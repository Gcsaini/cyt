import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Footer from "../components/footer";
import MyNavbar from "../components/navbar";
import ConsultationForm from "../components/home/consultation-form";
import NewsLetter from "../components/home/newsletter";

export default function TherapyBooking() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  return (
    <div id="__next">
      <MyNavbar />
      {/* Hero Section */}
      <div className="rbt-banner-area rbt-banner-1" style={{
        paddingTop: isMobile ? "40px" : "80px",
        paddingBottom: isMobile ? "40px" : "80px",
        background: "linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 50%, #e8f5e8 100%)",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Background Pattern */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23228756' fill-opacity='0.1'%3e%3ccircle cx='30' cy='30' r='2'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
          backgroundSize: "60px 60px"
        }}></div>

        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-10 col-md-12 col-sm-12 col-12">
              <div className="row align-items-center">
                {/* Left Content */}
                <div className="col-lg-7 col-md-12 text-center text-lg-start">
                  {/* Free Badge */}
                  <div style={{
                    display: "inline-block",
                    background: "linear-gradient(135deg, #228756 0%, #56ab2f 100%)",
                    color: "white",
                    padding: isMobile ? "6px 16px" : "8px 20px",
                    borderRadius: "25px",
                    fontSize: isMobile ? "12px" : "14px",
                    fontWeight: "700",
                    marginBottom: isMobile ? "15px" : "20px",
                    boxShadow: "0 4px 15px rgba(34, 135, 86, 0.3)",
                    textTransform: "uppercase",
                    letterSpacing: "1px"
                  }}>
                    🎁 Completely Free
                  </div>

                  {/* Main Heading */}
                  <h1 className="title" style={{
                    fontSize: isMobile ? "clamp(2rem, 8vw, 2.8rem)" : "clamp(3rem, 4vw, 4.2rem)",
                    marginBottom: isMobile ? "12px" : "15px",
                    color: "#228756",
                    fontWeight: "800",
                    lineHeight: "1.1",
                    textShadow: "0 2px 4px rgba(0,0,0,0.1)"
                  }}>
                    Get Your <span style={{
                      background: "linear-gradient(135deg, #228756 0%, #56ab2f 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    }}>Free 15-Minute</span> Consultation
                  </h1>

                  {/* Subheading */}
                  <h2 style={{
                    fontSize: isMobile ? "clamp(1.1rem, 4vw, 1.4rem)" : "clamp(1.4rem, 2vw, 1.8rem)",
                    color: "#2d5a47",
                    fontWeight: "600",
                    marginBottom: isMobile ? "15px" : "20px",
                    lineHeight: "1.3"
                  }}>
                    Talk with a Professional Psychologist Today
                  </h2>

                  {/* Description */}
                  <p className="description" style={{
                    fontSize: isMobile ? "clamp(0.95rem, 4vw, 1.1rem)" : "clamp(1.1rem, 1.5vw, 1.3rem)",
                    color: "#555",
                    marginBottom: isMobile ? "20px" : "30px",
                    lineHeight: "1.6",
                    maxWidth: isMobile ? "100%" : "500px"
                  }}>
                    Take the first step towards better mental health. Our experienced psychologists are here to listen, understand, and guide you through your journey.
                  </p>

                  {/* Trust Indicators - Compact */}
                  <div style={{
                    display: "flex",
                    justifyContent: isMobile ? "center" : "flex-start",
                    alignItems: "center",
                    gap: isMobile ? "15px" : "20px",
                    marginBottom: isMobile ? "15px" : "20px",
                    flexWrap: "wrap"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ color: "#228756", fontSize: isMobile ? "16px" : "18px" }}>✓</span>
                      <span style={{ fontSize: isMobile ? "12px" : "14px", color: "#228756", fontWeight: "500" }}>Verified</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ color: "#228756", fontSize: isMobile ? "16px" : "18px" }}>✓</span>
                      <span style={{ fontSize: isMobile ? "12px" : "14px", color: "#228756", fontWeight: "500" }}>Confidential</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ color: "#228756", fontSize: isMobile ? "16px" : "18px" }}>✓</span>
                      <span style={{ fontSize: isMobile ? "12px" : "14px", color: "#228756", fontWeight: "500" }}>No Hidden Costs</span>
                    </div>
                  </div>
                </div>

                {/* Right Content - Form */}
                <div className="col-lg-5 col-md-12" style={{ marginTop: isMobile ? "30px" : "0" }}>
                  <div style={{
                    backgroundColor: "white",
                    padding: isMobile ? "20px" : "30px",
                    borderRadius: "15px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    border: "2px solid #e8f5e8"
                  }}>
                    <ConsultationForm showHeading={false} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <NewsLetter />

      <Footer />
    </div>
  );
}