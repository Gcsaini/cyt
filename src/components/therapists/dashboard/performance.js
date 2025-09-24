import React, { useState } from "react";
import { useMediaQuery, LinearProgress } from "@mui/material";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaCalendarCheck,
  FaWallet,
  FaChartPie,
  FaCertificate,
  FaUserCircle,
  FaClock,
  FaLightbulb,
  FaTimes,
} from "react-icons/fa";

const shortcutCards = [
  {
    title: "My Clients",
    icon: <FaUsers size={40} />, // ⬆️ bigger
    link: "/dashboard/clients",
    iconBg: "linear-gradient(135deg, #228756, #56ab2f)",
  },
  {
    title: "My Sessions",
    icon: <FaCalendarCheck size={40} />,
    link: "/dashboard/sessions",
    iconBg: "linear-gradient(135deg, #004e92, #005bea)",
  },
  {
    title: "Earnings",
    icon: <FaWallet size={40} />,
    link: "/dashboard/earnings",
    iconBg: "linear-gradient(135deg, #ff7e5f, #feb47b)",
  },
  {
    title: "Reports",
    icon: <FaChartPie size={40} />,
    link: "/dashboard/reports",
    iconBg: "linear-gradient(135deg, #6a11cb, #2575fc)",
  },
];

const profileTips = [
  { icon: <FaCertificate size={24} />, text: "Add new certifications" },
  { icon: <FaUserCircle size={24} />, text: "Update your profile photo" },
  { icon: <FaClock size={24} />, text: "Set your availability schedule" },
];

const dailyTips = [
  { icon: <FaLightbulb size={22} />, text: "Check in with clients regularly for better engagement." },
  { icon: <FaLightbulb size={22} />, text: "Update session notes after each meeting." },
  { icon: <FaLightbulb size={22} />, text: "Set reminders for upcoming client sessions." },
  { icon: <FaLightbulb size={22} />, text: "Review client progress weekly to personalize care." },
];

export default function DashboardSections() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const profileCompletion = 65;
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div style={{ padding: "20px", position: "relative" }}>
      {/* ---------- Complete Your Profile Section ---------- */}
      <section
        style={{
          padding: "30px 20px",
          backgroundColor: "#f8f9fc",
          borderRadius: "12px",
          marginBottom: "30px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        }}
      >
        <div style={{ marginBottom: 22, textAlign: "center" }}>
          <h2 style={{ margin: 0, fontSize: isMobile ? "1.9rem" : "2.2rem" }}>
            Complete Your Profile
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: isMobile ? "1.15rem" : "1.25rem",
              color: "#555",
            }}
          >
            Enhance your visibility and reach more clients
          </p>
        </div>

        <div style={{ margin: "22px 0" }}>
          <LinearProgress
            variant="determinate"
            value={profileCompletion}
            sx={{
              height: 16,
              borderRadius: 6,
              backgroundColor: "#e0e0e0",
              "& .MuiLinearProgress-bar": {
                borderRadius: 6,
                background: "linear-gradient(90deg, #228756, #007f99)",
              },
            }}
          />
          <div style={{ textAlign: "right", fontSize: "1rem", marginTop: 6 }}>
            {profileCompletion}% completed
          </div>
        </div>

        {/* Profile tips */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: 12 }}>
          {profileTips.map((tip, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "16px 20px",
                borderRadius: 10,
                backgroundColor: "#fff",
                boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              className="hover-effect"
            >
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #228756, #007f99)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                }}
              >
                {tip.icon}
              </div>
              <span style={{ fontSize: isMobile ? 16 : 18, fontWeight: 500 }}>
                {tip.text}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Dashboard Shortcuts Section ---------- */}
      <div className="dashboard-shortcuts" style={{ marginTop: "22px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
            gap: "24px",
          }}
        >
          {shortcutCards.map((card, index) => (
            <Link
              to={card.link}
              key={index}
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
              className="shortcut-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.08)";
              }}
            >
              <div
                style={{
                  marginBottom: "16px",
                  width: "82px",
                  height: "82px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: card.iconBg,
                  color: "#fff",
                }}
              >
                {card.icon}
              </div>
              <span
                style={{
                  fontSize: isMobile ? "1.3rem" : "1.4rem",
                  textAlign: "center",
                }}
              >
                {card.title}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* ---------- Floating Daily Tips Tooltip ---------- */}
      {showTooltip && (
        <div
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            width: isMobile ? "92%" : 360,
            backgroundColor: "#fff",
            borderRadius: 14,
            boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
            padding: "20px",
            zIndex: 999,
            animation: "fadeInUp 0.8s ease",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <h4 style={{ margin: 0, fontSize: "1.25rem", color: "#228756" }}>
              Daily Tips
            </h4>
            <FaTimes
              style={{ cursor: "pointer", fontSize: 20 }}
              onClick={() => setShowTooltip(false)}
            />
          </div>
          <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
            {dailyTips.map((tip, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "8px 0",
                  fontSize: 16,
                  color: "#333",
                }}
              >
                <span style={{ color: "#007f99" }}>{tip.icon}</span>
                <span>{tip.text}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .hover-effect:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 15px rgba(0,0,0,0.12);
          }
        `}
      </style>
    </div>
  );
}
