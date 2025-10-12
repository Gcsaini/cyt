import React, { useRef } from "react";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { FaUserEdit, FaCalendarCheck, FaCalendarPlus, FaTags, FaDownload } from "react-icons/fa";
import html2canvas from "html2canvas";
import useTherapistStore from "../../../store/therapistStore";

export default function DashboardSections() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const cardRef = useRef(null);
  const { therapistInfo, profileSet } = useTherapistStore();

  // Shortcut cards
  const shortcutCards = [
    { title: "Edit Profile", icon: <FaUserEdit size={40} />, link: "/settings", iconBg: "linear-gradient(135deg, #3b82f6, #2563eb)" },
    { title: "Therapy Bookings", icon: <FaCalendarCheck size={40} />, link: "/appointments", iconBg: "linear-gradient(135deg, #0f172a, #1e293b)" },
    { title: "Create Event", icon: <FaCalendarPlus size={40} />, link: "/workshops", iconBg: "linear-gradient(135deg, #14b8a6, #0d9488)" },
    { title: "Create Coupons", icon: <FaTags size={40} />, link: "/coupons", iconBg: "linear-gradient(135deg, #6366f1, #4f46e5)" },
  ];

  // Therapist data
  const therapistData = profileSet
    ? {
        name: therapistInfo?.user?.name || "Therapist Name",
        profileType: therapistInfo?.profile_type || "Clinical Psychologist",
        experience: therapistInfo?.year_of_exp || "N/A",
      }
    : {
        name: "Your Name Here",
        profileType: "Profile not created",
        experience: "Add your experience after creating profile",
      };

  // Download business card
  const downloadCard = async () => {
    const element = cardRef.current;
    const canvas = await html2canvas(element, { scale: 2, backgroundColor: "#ffffff" });
    const link = document.createElement("a");
    link.download = `${profileSet ? therapistInfo?.user?.name : "default"}-business-card.jpg`;
    link.href = canvas.toDataURL("image/jpeg");
    link.click();
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Dashboard shortcuts */}
      <div className="dashboard-shortcuts" style={{ marginTop: "22px" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: "24px" }}>
          {shortcutCards.map((card, index) => (
            <Link
              key={index}
              to={card.link}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "28px",
                borderRadius: "14px",
                color: "#1f2937",
                textDecoration: "none",
                fontWeight: 600,
                backgroundColor: "#f9fafb",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.12)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.08)"; }}
            >
              <div style={{ marginBottom: "16px", width: "82px", height: "82px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: card.iconBg, color: "#fff" }}>
                {card.icon}
              </div>
              <span style={{ fontSize: isMobile ? "1.3rem" : "1.4rem", textAlign: "center" }}>{card.title}</span>
            </Link>
          ))}
        </div>
      </div>
{/* Business Card Section */}
<div style={{ marginTop: "60px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
  <h2 style={{ marginBottom: "18px", fontSize: "1.8rem", fontWeight: "700", color: "#065f46" }}>
    Showcase Your Professional Profile
  </h2>

  <div
    ref={cardRef}
    style={{
      width: isMobile ? "90%" : "400px",
      background: "linear-gradient(145deg, #e6f4ea, #d1f1c4)",
      borderRadius: "20px",
      padding: "28px 24px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
      textAlign: "center",
      borderLeft: "6px solid #16a34a",
      borderBottom: "6px solid #16a34a",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'Inter', sans-serif",
      color: "#065f46",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "scale(1.05)";
      e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.25)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.18)";
    }}
  >
    {/* Top-right decorative corner */}
    <div style={{
      position: "absolute",
      top: "-15px",
      right: "-15px",
      width: "40px",
      height: "40px",
      background: "#22c55e",
      borderRadius: "50%",
      opacity: 0.3,
      transform: "rotate(45deg)",
      transition: "transform 0.3s ease",
    }}></div>

    {/* Bottom-left decorative corner */}
    <div style={{
      position: "absolute",
      bottom: "-15px",
      left: "-15px",
      width: "40px",
      height: "40px",
      background: "#16a34a",
      borderRadius: "50%",
      opacity: 0.3,
      transform: "rotate(-45deg)",
      transition: "transform 0.3s ease",
    }}></div>

    {/* Name */}
    <h3 style={{ fontSize: "2.1rem", marginBottom: "6px", fontWeight: "800" }}>{therapistData.name}</h3>
    
    {/* Profile Type */}
    <p style={{ fontSize: "1.3rem", margin: 0, fontWeight: 500 }}>{therapistData.profileType}</p>
    
    {/* Experience with label */}
    <p style={{ fontSize: "1rem", marginTop: 6, marginBottom: 10, fontWeight: 600 }}>
      Experience: {therapistData.experience}
    </p>

    {/* Listed Badge */}
    <p
      style={{
        fontSize: "0.85rem",
        fontWeight: 600,
        marginTop: 12,
        padding: "6px 12px",
        borderRadius: "12px",
        background: "linear-gradient(135deg, #16a34a, #22c55e)",
        color: "#ffffff",
        display: "inline-block",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
    >
      www.chooseyourtherapist.in
    </p>
  </div>

  {/* Download Button */}
  <button
    onClick={downloadCard}
    disabled={!profileSet}
    style={{
      marginTop: "22px",
      background: !profileSet ? "#94a3b8" : "linear-gradient(135deg, #16a34a, #22c55e)",
      color: "white",
      border: "none",
      padding: "10px 22px",
      borderRadius: "10px",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: !profileSet ? "not-allowed" : "pointer",
      boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
      display: "flex",
      alignItems: "center",
      gap: "6px",
    }}
  >
    <FaDownload /> Download JPG
  </button>
</div>




    </div>
  );
}
