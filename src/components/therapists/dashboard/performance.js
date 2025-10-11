import React from "react";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { FaUserEdit, FaCalendarCheck, FaCalendarPlus, FaTags } from "react-icons/fa";

const shortcutCards = [
  {
    title: "Edit Profile",
    icon: <FaUserEdit size={40} />,
    link: "/settings",
    iconBg: "linear-gradient(135deg, #11998e, #38ef7d)", // luxury green
  },
  {
    title: "Therapy Bookings",
    icon: <FaCalendarCheck size={40} />,
    link: "/appointments",
    iconBg: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", // dark premium blue-gray
  },
  {
    title: "Create Event",
    icon: <FaCalendarPlus size={40} />,
    link: "/workshops",
    iconBg: "linear-gradient(135deg, #f7971e, #ffd200)", // elegant orange-gold
  },
  {
    title: "Create Coupons",
    icon: <FaTags size={40} />,
    link: "/coupons",
    iconBg: "linear-gradient(135deg, #6a11cb, #2575fc, #00d4ff)", // luxury purple-blue mix
  },
];


export default function DashboardSections() {
  const isMobile = useMediaQuery("(max-width:768px)");

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

   

    </div>
  );
}
