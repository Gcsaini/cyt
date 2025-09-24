import React from "react";
import "./appointmentheader.css";

export default function AppointmentHeader() {
  return (
    <div className="premium-header-container">
      <div className="premium-header">
        {/* Icon + Title wrapper */}
        <div className="premium-title-wrapper">
          <span className="premium-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#007f99"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </span>
          <h3 className="premium-title">Check Your Session Booking Here</h3>
        </div>
      </div>

      <style>
        {`
          .premium-header-container {
            width: 100%;
            padding: 40px 36px;
            background: #f8f9fc;
            box-shadow: 0 12px 28px rgba(0,0,0,0.12);
            border-radius: 22px;
            margin-bottom: 32px;
            position: relative;
          }

          .premium-header {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 16px;
            flex-wrap: wrap;
          }

          .premium-title-wrapper {
            display: flex;
            align-items: center;
            gap: 16px;
          }

          .premium-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #e6f7fa;
            border-radius: 50%;
            width: 52px;
            height: 52px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.15);
          }

          .premium-icon svg {
            width: 28px;
            height: 28px;
            stroke: #007f99;
          }

          .premium-title {
            font-size: 2.4rem; /* larger for desktop */
            font-weight: 800;
            color: #000;
            margin: 0;
            position: relative;
          }

          .premium-title::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -8px;
            width: 100px; 
            height: 5px;
            background: linear-gradient(90deg, #00b874, #00d2ff);
            border-radius: 3px;
          }

          @media screen and (max-width: 768px) {
            .premium-header-container {
              padding: 28px 20px;
              margin-bottom: 28px;
            }

            .premium-title {
              font-size: 2.2rem; /* larger for mobile */
            }

            .premium-icon {
              width: 44px;
              height: 44px;
            }

            .premium-icon svg {
              width: 24px;
              height: 24px;
            }

            .premium-title::after {
              width: 70px;
              height: 4px;
            }
          }
        `}
      </style>
    </div>
  );
}
