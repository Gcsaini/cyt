import React from "react";
import "./upcommingappointment.css";
import { defaultProfile } from "../../../utils/url";

export default function UpcomingAppointment() {
  return (
    <div className="upcoming-appointment-card mt--40">
      <div className="title-card">
        <span>Upcoming Appointments</span>
      </div>
      <div className="upcoming-patient-info">
        <div className="info-details">
          <span className="img-avatar">
            <img src={defaultProfile} alt="Img" />
            {/* assets/img/doctors-dashboard/profile-01.jpg */}
          </span>
          <div className="name-info">
            <span>#Apt0001</span>
            <h6>Adrian Marshall</h6>
          </div>
        </div>
        <div className="date-details">
          <span>Individual Counslling</span>
          <h6>Today, 10:45 AM</h6>
        </div>
      </div>
      <div className="circle-bg"></div>
      <div className="appointment-card-footer">
        <h5>
          <i className="fa-solid fa-video"></i>Video Appointment
        </h5>
        <div className="btn-appointments">
          <a href="chat-doctor.html" className="btn">
            Accept
          </a>
          <a href="doctor-appointment-start.html" className="btn">
            Cancel
          </a>
        </div>
      </div>
    </div>
  );
}
