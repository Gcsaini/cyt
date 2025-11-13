import React from "react";
import { Link, useLocation } from "react-router-dom";
import { getToken } from "../../utils/jwt";

export default function MobileBottomNav() {
  const location = useLocation();
  const isLoggedIn = !!getToken();

  return (
    <ul className="rbt-course-menu-fixed-pos-bottom d-xl-none">
      <li className={location.pathname === "/" ? "active" : ""}>
        <Link to="/">
          <i className="feather-home"></i>
          <span>Home</span>
        </Link>
      </li>
      <li className={location.pathname === "/view-all-therapist" ? "active" : ""}>
        <Link to="/view-all-therapist">
          <i className="feather-users"></i>
          <span>Therapists</span>
        </Link>
      </li>
      <li className={location.pathname === "/mind-matters" ? "active" : ""}>
        <Link to="/mind-matters">
          <i className="feather-heart"></i>
          <span>Mind Matters</span>
        </Link>
      </li>
      <li className={location.pathname === "/plans" ? "active" : ""}>
        <Link to="/plans">
          <i className="feather-gift"></i>
          <span>Offers</span>
        </Link>
      </li>
      <li className={isLoggedIn ? (location.pathname.includes("/dashboard") || location.pathname.includes("/my-") ? "active" : "") : (location.pathname === "/login" ? "active" : "")}>
        <Link to={isLoggedIn ? "/my-dashboard" : "/login"}>
          <i className="feather-user"></i>
          <span>{isLoggedIn ? "Profile" : "Login"}</span>
        </Link>
      </li>
    </ul>
  );
}
