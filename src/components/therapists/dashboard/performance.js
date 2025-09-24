import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { FaUsers, FaCalendarCheck, FaWallet, FaChartPie, FaLightbulb, FaTimes } from "react-icons/fa";

const shortcutCards = [
  {
    title: "Edit Profile",
    icon: <FaUsers size={40} />,
    link: "/dashboard/profile",
    iconBg: "linear-gradient(135deg, #228756, #56ab2f)",
  },
  {
    title: "Therapy Bookings",
    icon: <FaCalendarCheck size={40} />,
    link: "/appointments",
    iconBg: "linear-gradient(135deg, #004e92, #005bea)",
  },
  {
    title: "Create Event",
    icon: <FaWallet size={40} />,
    link: "/dashboard/events",
    iconBg: "linear-gradient(135deg, #ff7e5f, #feb47b)",
  },
  {
    title: "Create Coupons",
    icon: <FaChartPie size={40} />,
    link: "/dashboard/coupons",
    iconBg: "linear-gradient(135deg, #6a11cb, #2575fc)",
  },
];

const dailyTips = [
  { icon: <FaLightbulb size={22} />, text: "Check in with clients regularly for better engagement." },
  { icon: <FaLightbulb size={22} />, text: "Update session notes after each meeting." },
  { icon: <FaLightbulb size={22} />, text: "Set reminders for upcoming client sessions." },
  { icon: <FaLightbulb size={22} />, text: "Review client progress weekly to personalize care." },
];

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

      {/* ---------- Wide Premium Pricing Section ---------- */}
      <div
        className="rbt-pricing-area"
        style={{
          marginTop: "40px",
          width: "100%", 
          maxWidth: isMobile ? "100%" : "900px", 
          marginLeft: "auto",
          marginRight: "auto",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "14px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
        }}
      >
        <div className="advance-pricing">
          <div className="inner">
            <div className="row row--0">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="pricing-left">
                  <h3 className="main-title rainbow-title">
                    Premium Dashboard Subscription
                  </h3>
                  <p className="description rainbow-subtitle">
                    Enhance your professional presence, increase client trust, and streamline your bookings with our premium monthly plan.
                  </p>
                  <div className="price-wrapper">
                   <span className="price-amount">
  <span style={{ marginRight: "4px" }}>₹</span>499 <sup>/month</sup>
</span>
                  </div>
                  <div className="pricing-btn-group">
                    <a href="#" className="rbt-btn btn-gradient w-100 text-center">
                      Subscribe Now
                    </a>
                    <a href="#" className="rbt-btn btn-border w-100 text-center">
                      Upgrade
                    </a>
                  </div>
                  <div className="rating" style={{ marginTop: "10px" }}>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                      </svg>
                    ))}
                  </div>
                  <small className="subtitle">Rated 4.5/5 by 1000+ therapists</small>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="pricing-right position-relative">
                  <div className="pricing-offer">
                    <div className="single-list">
                      <h4 className="price-title">What you get – Professional Tools</h4>
                      <ul className="plan-offer-list">
                        <li><i className="rbt feather-check"></i> Priority Profile Listing</li>
                        <li><i className="rbt feather-check"></i> Verified Profile Badge</li>
                        <li><i className="rbt feather-check"></i> Professional Tools</li>
                        <li><i className="rbt feather-check"></i> Storage for up to 30 bookings</li>
                     
                      </ul>
                    </div>
                    <div className="single-list mt--40">
                      <h4 className="price-title">Marketing & Growth Boost</h4>
                      <ul className="plan-offer-list">
                        <li><i className="rbt feather-check"></i> 4 social media posts/month</li>
                        <li><i className="rbt feather-check"></i> 1 monthly consultation call</li>
                        <li><i className="rbt feather-check"></i> No commission on bookings, earn fully</li>
                        <li><i className="rbt feather-check"></i> Analytics & insights</li>
                    
                        <li><i className="rbt feather-check"></i> 24/7 Support</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pricing-badge rainbow-badge"><span>BEST VALUE</span></div>
                </div>
              </div>
            </div>
          </div>
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
