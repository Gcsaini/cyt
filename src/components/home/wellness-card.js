// WellnessGridCombined.js
import React from "react";
import { Link } from "react-router-dom";
import ImageTag from "../../utils/image-tag";
import { truncateString } from "../../utils/helpers";
import { imagePath } from "../../utils/url";
import { FaCalendarAlt, FaHeart, FaTag } from "react-icons/fa";

export default function WellnessGridCombined({ dataList = [] }) {
  if (!Array.isArray(dataList)) dataList = [];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "20px",
        justifyContent: "center",
        padding: "16px",
      }}
    >
      {dataList.map((data) => (
        <div
          key={data._id}
          style={{
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
            transition: "transform 0.3s, box-shadow 0.3s",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            cursor: "pointer",
            maxWidth: 300,
            margin: "auto", // center on mobile
          }}
          className="wellness-card"
        >
          {/* Image */}
          <Link to={`/workshop-detail/${data._id}`} style={{ display: "block" }}>
            <ImageTag
              alt={truncateString(data.title, 20)}
              loading="lazy"
              style={{
                height: 200,
                width: "100%",
                objectFit: "cover",
                transition: "transform 0.3s",
              }}
              src={`${imagePath}/${data.workshop_image}`}
            />
          </Link>

          {/* Card Body */}
          <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
            {/* Price */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontWeight: 600, fontSize: 16, color: "#007f99" }}>₹{data.price}</div>
              <div style={{ fontSize: 14, color: "#888", textDecoration: "line-through" }}>₹{data.mrp}</div>
            </div>

            {/* Title */}
            <h4 style={{ margin: 0, fontSize: 16, fontWeight: 600, color: "#333" }}>
              <Link to={`/workshop-detail/${data._id}`} style={{ textDecoration: "none", color: "inherit" }}>
                {truncateString(data.title, 60)}
              </Link>
            </h4>

            {/* Meta Info */}
            <div style={{ display: "flex", gap: 12, fontSize: 13, color: "#555" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <FaTag color="#007f99" /> {data.category}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <FaHeart color="#ff4d4f" /> {data.level}
              </div>
            </div>

            {/* Date & Time */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#555" }}>
              <FaCalendarAlt color="#28a745" /> {data.event_date} ({data.event_time})
            </div>

            {/* Check Now Button */}
            <Link
              to={`/workshop-detail/${data._id}`}
              style={{
                marginTop: 12,
                padding: "10px 0",
                background: "linear-gradient(135deg, #007f99, #00d2ff)",
                color: "#fff",
                borderRadius: 12,
                textAlign: "center",
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Check Now
            </Link>
          </div>

          {/* Hover Effect */}
          <style>
            {`
              .wellness-card:hover img {
                transform: scale(1.05);
              }
            `}
          </style>
        </div>
      ))}
    </div>
  );
}
