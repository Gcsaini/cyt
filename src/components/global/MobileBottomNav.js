import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function MobileBottomNav() {
  const location = useLocation(); // current route check karne ke liye

  return (
    <ul className="rbt-course-menu-fixed-pos-bottom d-xl-none">
      <li className={location.pathname === "/" ? "active" : ""}>
        <Link to="/">
          <i className="feather-home"></i>
          <span>Home</span>
        </Link>
      </li>
      <li className={location.pathname === "/courses" ? "active" : ""}>
        <Link to="/courses">
          <i className="feather-book"></i>
          <span>Courses</span>
        </Link>
      </li>
      <li className={location.pathname === "/dashboard/my-profile" ? "active" : ""}>
        <Link to="/dashboard/my-profile">
          <i className="feather-user"></i>
          <span>Profile</span>
        </Link>
      </li>
      <li className={location.pathname === "/cart" ? "active" : ""}>
        <Link to="/cart">
          <i className="feather-shopping-cart"></i>
          <span>Cart</span>
        </Link>
      </li>
    </ul>
  );
}
