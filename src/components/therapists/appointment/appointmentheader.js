import React from "react";
import "./appointmentheader.css";

export default function Appointmentheader() {
  return (
    <div className="dashboard-header">
      <h3>&nbsp;&nbsp;Client Booking</h3>
      <ul className="header-list-btns">
        <li>
          <div className="input-block dash-search-input">
            <input type="text" className="form-control" placeholder="Search" />
            <span className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
        </li>
        
      </ul>
    </div>
  );
}
