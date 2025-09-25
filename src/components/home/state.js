import React, { useState } from "react";
import { stateList } from "../../utils/static-lists";

import GujaratImg from "../../assets/img/Gujrat.png";
import UttarakhandImg from "../../assets/img/Uttarakhand.png";
import DelhiImg from "../../assets/img/Delhi.png";
import RajasthanImg from "../../assets/img/Rajasthan.png";

const fallbackImage = GujaratImg;

const stateImages = {
  Gujarat: GujaratImg,
  Uttarakhand: UttarakhandImg,
  Delhi: DelhiImg,
  Rajasthan: RajasthanImg,
};

export default function State() {
  const [visibleCount, setVisibleCount] = useState(8);
  const filteredStates = stateList.filter((state) => state !== "Select");

  const handleLoadMore = () => setVisibleCount((prev) => prev + 8);

  return (
    <div className="state-section">
      <div className="state-container">
        {/* Header */}
        <div className="state-header">
          <h2>Explore Therapists Across India</h2>
          <div className="state-subtitle">
            <hr />
            <span>
              Available in <span className="highlight">{filteredStates.length}</span> states
            </span>
            <hr />
          </div>
        </div>

        {/* State Cards */}
        <div className="state-cards">
          {filteredStates.slice(0, visibleCount).map((state, index) => (
            <a key={index} href="#" className="state-card">
              <div
                className="state-image"
                style={{ backgroundImage: `url(${stateImages[state] || fallbackImage})` }}
              ></div>
              <div className="state-name">{state}</div>
            </a>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < filteredStates.length && (
          <div className="state-loadmore">
            <button onClick={handleLoadMore}>View More</button>
          </div>
        )}
      </div>

      {/* Premium CSS */}
      <style jsx>{`
        .state-section {
          padding: 50px 20px;
          background: #f9f9f9;
        }
        .state-container {
          max-width: 1200px;
          margin: auto;
        }
        .state-header {
          text-align: center;
          margin-bottom: 30px;
        }
        .state-header h2 {
          font-size: 2.9rem;
          font-weight: 700;
          color: #1b2124;
          margin-bottom: 10px;
        }
        .state-subtitle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .state-subtitle hr {
          flex: 1;
          height: 1px;
          border: none;
          background: #b7b7b7;
        }
        .state-subtitle .highlight {
          color: #5a4bda;
          font-weight: 600;
        }
        .state-cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 16px;
        }
        .state-card {
          display: flex;
          align-items: center;
          width: calc(50% - 8px);
          max-width: 280px; /* increased width for laptop */
          height: 100px; /* slightly taller */
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
          overflow: hidden;
          text-decoration: none;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .state-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.18);
        }
        .state-image {
          width: 80px; /* increased image size */
          height: 80px;
          background-size: cover;
          background-position: center;
          margin: 0 20px;
          border-radius: 8px;
          transition: transform 0.3s;
        }
        .state-card:hover .state-image {
          transform: scale(1.15);
        }
        .state-name {
          font-weight: 700;
          font-size: 1.8rem; /* increased font size */
          color: #000;
        }
        .state-loadmore {
          margin-top: 30px;
          text-align: center;
        }
        .state-loadmore button {
          background: linear-gradient(135deg, #5a4bda, #4437b8);
          color: #fff;
          font-weight: 600;
          font-size: 1.1rem; /* slightly bigger text */
          padding: 14px 40px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .state-loadmore button:hover {
          background: linear-gradient(135deg, #4437b8, #5a4bda);
          transform: scale(1.05);
          box-shadow: 0 6px 18px rgba(68, 55, 184, 0.4);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .state-card {
            max-width: 48%;
            height: 95px;
          }
          .state-image {
            width: 70px;
            height: 70px;
          }
          .state-name {
            font-size: 1.15rem;
          }
        }

        @media (max-width: 768px) {
          .state-card {
            width: 100%;
            height: 90px;
            margin-bottom: 16px;
          }
          .state-image {
            width: 70px;
            height: 70px;
            margin: 0 16px;
          }
          .state-name {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
