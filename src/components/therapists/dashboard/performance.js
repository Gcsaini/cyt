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
        <h2 style={{ marginBottom: "18px", fontSize: "1.8rem", fontWeight: "700", color: "#1e3a8a" }}>
          Showcase Your Professional Profile
        </h2>

        <div
          ref={cardRef}
          style={{
            width: isMobile ? "90%" : "400px",
            background: "#ffffff",
            borderRadius: "20px",
            padding: "28px 24px",
            boxShadow: "0 6px 25px rgba(0,0,0,0.15)",
            textAlign: "center",
            border: "2px solid #1e40af",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Info */}
          <h3 style={{ color: "#1e40af", fontSize: "1.5rem", marginBottom: "4px", fontWeight: "700" }}>{therapistData.name}</h3>
          <p style={{ color: "#1f2937", fontSize: "1rem", margin: 0, fontWeight: 500 }}>{therapistData.profileType}</p>
          <p style={{ color: "#1e3a8a", fontWeight: "600", marginTop: 6, marginBottom: 10 }}>{therapistData.experience}</p>

       

          {/* Overlay if profile not ready */}
          <p style={{ fontSize: "0.8rem", color: "#475569", marginTop: 8, fontWeight: 500 }}>
  ⭐ Listed on <strong>www.chooseyourtherapist.in</strong> ⭐
</p>
        </div>

        {/* Download Button */}
        <button
          onClick={downloadCard}
          disabled={!profileSet}
          style={{
            marginTop: "22px",
            background: !profileSet ? "#94a3b8" : "linear-gradient(135deg, #1e40af, #3b82f6)",
            color: "white",
            border: "none",
            padding: "10px 22px",
            borderRadius: "10px",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: !profileSet ? "not-allowed" : "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
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
