import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { getDecodedToken, getToken } from "../utils/jwt";

export default function BottomNavigation() {
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [userType, setUserType] = useState(0);
  const [cookiesAccepted, setCookiesAccepted] = useState(true);

  useEffect(() => {
    const data = getToken();
    if (data) {
      const userData = getDecodedToken();
      if (userData.role === 1) {
        setUserType(2);
      } else {
        setUserType(1);
      }
    }

    // Check if cookies are accepted
    const isAccepted = localStorage.getItem("cookiesAccepted") === "true";
    setCookiesAccepted(isAccepted);
  }, []);

  // Only show on mobile
  if (!isMobile) return null;

  const profilePath = userType === 1 ? "/my-dashboard" : userType === 2 ? "/therapist-dashboard" : "/login";

  const navItems = [
    {
      id: "home",
      label: "Home",
      icon: "feather-home",
      path: "/",
      active: location.pathname === "/"
    },
    {
      id: "therapists",
      label: "Therapists",
      icon: "feather-users",
      path: "/view-all-therapist",
      active: location.pathname === "/view-all-therapist"
    },
    {
      id: "book",
      label: "Book",
      icon: "feather-phone",
      path: "/therapy-booking",
      active: location.pathname === "/therapy-booking"
    },
    {
      id: "profile",
      label: "Profile",
      icon: "feather-user",
      path: profilePath,
      active: location.pathname === "/my-dashboard" || location.pathname === "/therapist-dashboard" || location.pathname === "/login"
    },
    {
      id: "offer",
      label: "Offer",
      icon: "feather-package",
      path: "/mind-matters",
      active: location.pathname === "/mind-matters"
    }
  ];

  return (
    <div className={`bottom-navigation ${!cookiesAccepted ? 'with-cookie-banner' : ''}`}>
      <div className="bottom-nav-container">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={`bottom-nav-item ${item.active ? 'active' : ''}`}
          >
            <div className="nav-icon">
              <i className={item.icon}></i>
            </div>
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .bottom-navigation {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: #ffffff;
          border-top: 1px solid #e8e8e8;
          box-shadow: 0 -4px 20px rgba(0,0,0,0.08);
          z-index: 9999;
          padding-bottom: 0;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .bottom-nav-container {
          display: flex;
          height: 70px;
          padding: 0 12px;
          align-items: center;
        }

        .bottom-nav-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: #8e8e93;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 12px;
          margin: 6px;
          position: relative;
          padding: 4px 0;
          min-height: 50px;
        }

        .bottom-nav-item:hover {
          background-color: rgba(142, 142, 147, 0.1);
          transform: translateY(-1px);
        }

        .bottom-nav-item.active {
          color: #228756;
          background-color: rgba(34, 135, 86, 0.12);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(34, 135, 86, 0.25);
        }

        .bottom-nav-item.active::before {
          content: '';
          position: absolute;
          top: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 32px;
          height: 4px;
          background: linear-gradient(135deg, #228756 0%, #56ab2f 100%);
          border-radius: 2px;
          box-shadow: 0 2px 4px rgba(34, 135, 86, 0.3);
        }

        .nav-icon {
          margin-bottom: 3px;
          transition: transform 0.2s ease;
        }

        .nav-icon i {
          font-size: 22px;
          display: block;
          transition: all 0.2s ease;
        }

        .bottom-nav-item.active .nav-icon i {
          transform: scale(1.1);
        }

        .nav-label {
          font-size: 10px;
          font-weight: 600;
          text-align: center;
          line-height: 1.2;
          letter-spacing: 0.3px;
          text-transform: uppercase;
        }

        /* Active state styling */
        .bottom-nav-item.active .nav-icon i {
          color: #228756;
        }

        .bottom-nav-item.active .nav-label {
          color: #228756;
          font-weight: 700;
        }

        /* Ripple effect for touch */
        .bottom-nav-item:active {
          transform: translateY(0);
          transition: transform 0.1s ease;
        }

        /* Safe area for iPhone X and newer */
        @supports (padding-bottom: env(safe-area-inset-bottom)) {
          .bottom-navigation {
            padding-bottom: env(safe-area-inset-bottom, 0);
          }
        }

        /* Adjust for cookie banner */
        .bottom-navigation.with-cookie-banner {
          bottom: 100px; /* Account for cookie banner height + margin */
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .bottom-navigation {
            background: rgba(28, 28, 30, 0.95);
            border-top-color: rgba(142, 142, 147, 0.3);
          }

          .bottom-nav-item {
            color: #98989d;
          }

          .bottom-nav-item:hover {
            background-color: rgba(142, 142, 147, 0.2);
          }

          .bottom-nav-item.active {
            background-color: rgba(34, 135, 86, 0.2);
          }
        }
      `}</style>
    </div>
  );
}