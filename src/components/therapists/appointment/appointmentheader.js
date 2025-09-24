import React from "react";
import "./appointmentheader.css";

export default function AppointmentHeader() {
  return (
    <div className="dashboard-header-container">
      <div className="dashboard-header">
        <h3 className="dashboard-title">
          <span className="title-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#007f99"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </span>
          Session Booking History
        </h3>
      </div>

      <style>
        {`
          .dashboard-header-container {
            width: 100%;
            padding: 20px 24px 30px 24px; /* extra bottom padding for spacing */
            background: #f8f9fc;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
            border-radius: 18px;
            margin-bottom: 24px; /* space between header and cards */
            position: relative;
            z-index: 1;
          }

          .dashboard-header {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-wrap: wrap;
            gap: 16px;
          }

          .dashboard-title {
            font-size: 1.6rem;
            font-weight: 700;
            color: #007f99;
            margin: 0;
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .title-icon svg {
            display: block;
          }

          /* Mobile responsiveness */
          @media screen and (max-width: 768px) {
            .dashboard-header-container {
              padding: 16px 20px 28px 20px;
              margin-bottom: 20px;
            }

            .dashboard-title {
              font-size: 1.35rem;
            }
          }
        `}
      </style>
    </div>
  );
}
