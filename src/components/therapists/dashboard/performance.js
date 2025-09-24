import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import {
  FaRegUserCircle,
  FaNotesMedical,
  FaRegCalendarAlt,
  FaGift,
  FaLightbulb,
  FaTimes,
} from "react-icons/fa";

// -------------------------- Shortcut Cards --------------------------
const shortcutCards = [
  {
    title: "Edit Profile",
    icon: <FaRegUserCircle size={40} />,
    link: "/settings",
    iconBg: "linear-gradient(135deg, #FF512F, #DD2476)",
  },
  {
    title: "Therapy Bookings",
    icon: <FaNotesMedical size={40} />,
    link: "/appointments",
    iconBg: "linear-gradient(135deg, #11998e, #38ef7d)",
  },
  {
    title: "Create Event",
    icon: <FaRegCalendarAlt size={40} />,
    link: "/workshops",
    iconBg: "linear-gradient(135deg, #f7971e, #ffd200)",
  },
  {
    title: "Create Coupons",
    icon: <FaGift size={40} />,
    link: "/coupons",
    iconBg: "linear-gradient(135deg, #6a11cb, #2575fc)",
  },
];

// -------------------------- Daily Tips --------------------------
const dailyTips = [
  { icon: <FaLightbulb size={22} />, text: "Check in with clients regularly for better engagement." },
  { icon: <FaLightbulb size={22} />, text: "Update session notes after each meeting." },
  { icon: <FaLightbulb size={22} />, text: "Set reminders for upcoming client sessions." },
  { icon: <FaLightbulb size={22} />, text: "Review client progress weekly to personalize care." },
];

// -------------------------- Main Component --------------------------
export default function DashboardSections() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div style={{ padding: "20px", position: "relative" }}>
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
        `}
      </style>
    </div>
  );
}
