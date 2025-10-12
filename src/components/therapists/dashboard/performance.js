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
    { title: "Edit Profile", icon: <FaUserEdit size={40} />, link: "/settings", iconBg: "linear-gradient(135deg, #11998e, #38ef7d)" },
    { title: "Therapy Bookings", icon: <FaCalendarCheck size={40} />, link: "/appointments", iconBg: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)" },
    { title: "Create Event", icon: <FaCalendarPlus size={40} />, link: "/workshops", iconBg: "linear-gradient(135deg, #f7971e, #ffd200)" },
    { title: "Create Coupons", icon: <FaTags size={40} />, link: "/coupons", iconBg: "linear-gradient(135deg, #6a11cb, #2575fc, #00d4ff)" },
  ];

  // Therapist data
  const therapistData = profileSet
    ? {
        name: therapistInfo?.user?.name || "Therapist Name",
        profileType: therapistInfo?.profile_type || "Clinical Psychologist",
        experience: therapistInfo?.year_of_exp || "N/A",
        photo: therapistInfo?.user?.profile || "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
      }
    : {
        name: "Dr. Sample Therapist",
        profileType: "Counselling Psychologist",
        experience: "5+ Years Experience",
        photo: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
      };

  // Download business card
  const downloadCard = async () => {
    if (!profileSet) return;

    const element = cardRef.current;
    const canvas = await html2canvas(element, { scale: 2, backgroundColor: "#ffffff", useCORS: true, allowTaint: true });
    const link = document.createElement("a");
    link.download = `${therapistInfo?.user?.name || "therapist"}-business-card.jpg`;
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
                color: "#333",
                textDecoration: "none",
                fontWeight: 600,
                backgroundColor: "#f8f9fa",
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

      {/* Business Card */}
      <div style={{ marginTop: "60px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
        <h2 style={{ marginBottom: "18px", fontSize: "1.8rem", fontWeight: "700", color: "#0f5132" }}>
          Show Your Business Card on Social Media
        </h2>

        <div
          ref={cardRef}
          style={{
            width: isMobile ? "90%" : "400px",
            background: "linear-gradient(135deg, #e6f7e6, #ffffff)",
            borderRadius: "20px",
            padding: "28px 24px",
            boxShadow: "0 6px 25px rgba(0,0,0,0.15)",
            textAlign: "center",
            border: "2px solid #38ef7d",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Profile Photo */}
          <div style={{ width: "90px", height: "90px", borderRadius: "50%", overflow: "hidden", margin: "0 auto 10px", border: "3px solid #38ef7d" }}>
            <img
              src={therapistData.photo || "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"}
              alt="Therapist"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              key={therapistData.photo}
            />
          </div>

          {/* Info */}
          <h3 style={{ color: "#14532d", fontSize: "1.5rem", marginBottom: "4px", fontWeight: "700" }}>{therapistData.name}</h3>
          <p style={{ color: "#0f5132", fontSize: "1rem", margin: 0, fontWeight: 500 }}>{therapistData.profileType}</p>
          <p style={{ color: "#2e7d32", fontWeight: "600", marginTop: 6, marginBottom: 10 }}>Experience: {therapistData.experience}</p>

          {/* Promotional Badge */}
          <div style={{ display: "inline-block", background: "#38ef7d", color: "#0f5132", padding: "5px 15px", borderRadius: "30px", fontSize: 12, fontWeight: 600 }}>
            ⭐ Listed on <strong>www.chooseyourtherapist.in</strong> ⭐
          </div>

          {/* Overlay if profile not ready */}
          {!profileSet && (
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(255,255,255,0.85)", borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 20, fontWeight: 600, color: "#0f5132" }}>
              Complete your profile to view your business card
            </div>
          )}
        </div>

        {/* Download Button */}
        <button
          onClick={downloadCard}
          disabled={!profileSet}
          style={{
            marginTop: "22px",
            background: !profileSet ? "#a5d6a7" : "linear-gradient(135deg, #38ef7d, #11998e)",
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
