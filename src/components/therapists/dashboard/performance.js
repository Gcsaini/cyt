import React, { useRef, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { FaUserEdit, FaCalendarCheck, FaCalendarPlus, FaTags, FaDownload } from "react-icons/fa";
import html2canvas from "html2canvas";
import useTherapistStore from "../../../store/therapistStore";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar
} from "recharts";

export default function DashboardSections() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const cardRef = useRef(null);
  const { therapistInfo, profileSet } = useTherapistStore();

  const profileCompletion = profileSet ? 90 : 0;

  const shortcutCards = [
    { title: "Edit Profile", icon: <FaUserEdit size={40} />, link: "/settings", iconBg: "linear-gradient(135deg, #3b82f6, #2563eb)", tooltip: "Update your personal profile" },
    { title: "Therapy Bookings", icon: <FaCalendarCheck size={40} />, link: "/appointments", iconBg: "linear-gradient(135deg, #0f172a, #1e293b)", tooltip: "Manage all your therapy sessions", badge: 3 },
    { title: "Create Event", icon: <FaCalendarPlus size={40} />, link: "/workshops", iconBg: "linear-gradient(135deg, #14b8a6, #0d9488)", tooltip: "Add new workshops or events" },
    { title: "Create Coupons", icon: <FaTags size={40} />, link: "/coupons", iconBg: "linear-gradient(135deg, #6366f1, #4f46e5)", tooltip: "Generate discount coupons" },
  ];

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

  const downloadCard = async () => {
    const element = cardRef.current;
    const canvas = await html2canvas(element, { scale: 2, backgroundColor: "#ffffff" });
    const link = document.createElement("a");
    link.download = `${profileSet ? therapistInfo?.user?.name : "default"}-business-card.jpg`;
    link.href = canvas.toDataURL("image/jpeg");
    link.click();
  };

  const sessionData = [
    { month: "Jan", Completed: 8, Cancelled: 2 },
    { month: "Feb", Completed: 12, Cancelled: 1 },
    { month: "Mar", Completed: 10, Cancelled: 0 },
    { month: "Apr", Completed: 15, Cancelled: 3 },
    { month: "May", Completed: 18, Cancelled: 1 },
    { month: "Jun", Completed: 14, Cancelled: 2 },
    { month: "Jul", Completed: 20, Cancelled: 0 },
    { month: "Aug", Completed: 22, Cancelled: 1 },
  ];

  const miniGraphData = [
    { name: "Profile", value: profileCompletion },
  ];

  useEffect(() => {
    const container = document.getElementById("shape-container");
    const colors = ["rgba(34,197,94,0.15)", "rgba(22,163,74,0.15)", "rgba(132,204,22,0.1)"];
    for (let i = 0; i < 8; i++) {
      const shape = document.createElement("div");
      shape.className = "floating-shape";
      shape.style.width = 80 + Math.random() * 60 + "px";
      shape.style.height = 80 + Math.random() * 60 + "px";
      shape.style.left = Math.random() * 80 + "%";
      shape.style.top = Math.random() * 80 + "%";
      shape.style.background = colors[Math.floor(Math.random() * colors.length)];
      shape.style.borderRadius = Math.random() > 0.5 ? "50%" : "30%";
      shape.style.animationDuration = 6 + Math.random() * 6 + "s";
      container.appendChild(shape);
    }
  }, []);

  return (
    <div style={{ padding: "20px", position: "relative" }}>
      <div id="shape-container" style={{ position: "absolute", width: "100%", height: "100%", pointerEvents: "none" }}></div>

      {/* Top 4 shortcut cards */}
      <div style={{ marginTop: "22px", display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: "24px" }}>
        {shortcutCards.map((card, index) => (
          <Link
            key={index}
            to={card.link}
            style={{
              position: "relative",
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

            {card.badge && (
              <span
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "#ef4444",
                  color: "#fff",
                  borderRadius: "50%",
                  width: "22px",
                  height: "22px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.8rem",
                  fontWeight: "600",
                }}
              >
                {card.badge}
              </span>
            )}

            <span style={{ fontSize: isMobile ? "1.4rem" : "1.5rem", textAlign: "center" }}>{card.title}</span>
          </Link>
        ))}
      </div>

      {/* Profile completion + Graphs */}
      <div style={{ display: isMobile ? "block" : "flex", gap: "40px", marginTop: "50px" }}>
        {/* Profile Completion */}
        <div style={{ width: isMobile ? "100%" : "200px", marginBottom: isMobile ? "20px" : 0, textAlign: "center" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#065f46", marginBottom: "16px" }}>Profile Completion</h3>
          <svg width="150" height="150">
            <circle cx="75" cy="75" r="65" stroke="#d1f1c4" strokeWidth="10" fill="none" />
            <circle
              cx="75"
              cy="75"
              r="65"
              stroke="#16a34a"
              strokeWidth="10"
              fill="none"
              strokeDasharray={2 * Math.PI * 65}
              strokeDashoffset={2 * Math.PI * 65 * (1 - profileCompletion / 100)}
              strokeLinecap="round"
              transform="rotate(-90 75 75)"
            />
            <text x="75" y="80" textAnchor="middle" fontSize="24" fill="#065f46" fontWeight="700">{profileCompletion}%</text>
          </svg>

          <div style={{ marginTop: "15px", height: isMobile ? "80px" : "120px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={miniGraphData}>
                <Bar dataKey="value" fill="#16a34a" radius={[6,6,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Monthly Sessions Graph */}
        <div style={{ flex: 1, height: isMobile ? "250px" : "300px" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#065f46", marginBottom: "16px" }}>Monthly Sessions</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sessionData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="Completed" stroke="#16a34a" strokeWidth={3} activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="Cancelled" stroke="#ef4444" strokeWidth={3} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Green divider line */}
      <hr style={{ border: "0", height: "2px", background: "#16a34a", margin: "40px 0" }} />

      {/* Business Card + Letter Section */}
      <div style={{ display: isMobile ? "block" : "flex", gap: isMobile ? "30px" : "40px" }}>
        {/* Business Card */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
          <div
            ref={cardRef}
            style={{
              width: isMobile ? "100%" : "400px",
              background: "linear-gradient(145deg, #e6f4ea, #d1f1c4)",
              borderRadius: "20px",
              padding: "28px 24px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
              textAlign: "center",
              borderLeft: "6px solid #16a34a",
              borderBottom: "6px solid #16a34a",
              position: "relative",
              overflow: "hidden",
              fontFamily: "'Inter', sans-serif",
              color: "#065f46",
            }}
          >
            <h3 style={{ fontSize: "2.4rem", marginBottom: "6px", fontWeight: "800" }}>{therapistData.name}</h3>
            <p style={{ fontSize: "1.4rem", margin: 0, fontWeight: 500 }}>{therapistData.profileType}</p>
            <p style={{ fontSize: "1.25rem", marginTop: 6, marginBottom: 10, fontWeight: 600 }}>Experience: {therapistData.experience}</p>
            <p style={{ fontSize: "0.95rem", fontWeight: 600, marginTop: 12, padding: "6px 12px", borderRadius: "12px", background: "linear-gradient(135deg, #16a34a, #22c55e)", color: "#ffffff", display: "inline-block" }}>www.chooseyourtherapist.in</p>
          </div>

          <button
            onClick={downloadCard}
            disabled={!profileSet}
            style={{
              background: !profileSet ? "#94a3b8" : "linear-gradient(135deg, #16a34a, #22c55e)",
              color: "white",
              border: "none",
              padding: "12px 26px",
              borderRadius: "10px",
              fontSize: "1.15rem",
              fontWeight: "600",
              cursor: !profileSet ? "not-allowed" : "pointer",
              boxShadow: "0 6px 15px rgba(0,0,0,0.18)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FaDownload /> Download JPG
          </button>
        </div>

        {/* Letter Section */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "16px", padding: "28px", background: "#f1f5f9", borderRadius: "18px", boxShadow: "0 12px 35px rgba(0,0,0,0.12)", border: "2px solid #d1fae5" }}>
          <h2 style={{ fontSize: "2.1rem", fontWeight: "700", color: "#065f46" }}>A Letter to {therapistData.name}</h2>
          <p style={{ fontSize: "1.25rem", lineHeight: "1.8", color: "#1f2937", textAlign: "justify", margin: 0 }}>
            <span style={{ float: "left", fontSize: "3rem", fontWeight: "700", lineHeight: "1", marginRight: "6px", color: "#16a34a" }}>E</span>
            very day, you dedicate your time, knowledge, and heart to helping others navigate their challenges. Your empathy and patience create safe spaces where people can heal and grow. Know that your efforts do not go unnoticed. The impact you make in each life is immeasurable, and your passion inspires both your clients and the broader community.
          </p>
          <p style={{ fontSize: "1.25rem", lineHeight: "1.8", color: "#1f2937", textAlign: "justify", margin: 0 }}>
            We are honored to showcase your work through this platform, allowing more people to connect with your expertise and benefit from your care.
          </p>
          <p style={{ fontSize: "1.25rem", lineHeight: "1.8", color: "#1f2937", textAlign: "justify", margin: 0 }}>
            With gratitude and admiration,<br /> <strong>The ChooseYourTherapist.in Team</strong>
          </p>
        </div>
      </div>

      <style>{`
        .floating-shape {
          position: absolute;
          opacity: 0.15;
          animation-name: floatShape;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        @keyframes floatShape {
          0% { transform: translateY(0) rotate(0deg);}
          50% { transform: translateY(-20px) rotate(45deg);}
          100% { transform: translateY(0) rotate(0deg);}
        }
      `}</style>
    </div>
  );
}
