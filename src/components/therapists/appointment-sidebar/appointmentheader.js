import React from "react";
import "./appointmentheader.css";

export default function Appointmentheader() {
  return (
    <div className="dashboard-header">
      <h3>Appointments</h3>
      <ul className="header-list-btns">
        <li>
          <div className="input-block dash-search-input">
            <input type="text" className="form-control" placeholder="Search" />
            <span className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
        </li>
        <li>
          <div className="view-icons">
            <a href="appointments.html" className="active">
              <i className="fa-solid fa-list"></i>
            </a>
          </div>
        </li>
        <li>
          <div className="view-icons">
            <a href="doctor-appointments-grid.html">
              <i className="fa-solid fa-th"></i>
            </a>
          </div>
        </li>
        <li>
          <div className="view-icons">
            <a href="#">
              <i className="fa-solid fa-calendar-check"></i>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
