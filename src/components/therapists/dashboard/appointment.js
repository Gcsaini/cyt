import React from "react";
import "./appointment.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Appointment() {
  const appointments = [
    {
      id: "Apt0001",
      name: "Adrian Marshall",
      date: "11 Nov 2024 10.45 AM",
      badge: "General",
      imgSrc: "assets/img/doctors-dashboard/profile-01.jpg"
    },
    {
      id: "Apt0002",
      name: "Kelly Stevens",
      date: "10 Nov 2024 11.00 AM",
      badge: "Clinic Consulting",
      imgSrc: "assets/img/doctors-dashboard/profile-02.jpg"
    },
    {
      id: "Apt0003",
      name: "Samuel Anderson",
      date: "03 Nov 2024 02.00 PM",
      badge: "General",
      imgSrc: "assets/img/doctors-dashboard/profile-03.jpg"
    },
    {
      id: "Apt0004",
      name: "Catherine Griffin",
      date: "01 Nov 2024 04.15 PM",
      badge: "Clinic Consulting",
      imgSrc: "assets/img/doctors-dashboard/profile-04.jpg"
    },
    {
      id: "Apt0005",
      name: "Sarah Jones",
      date: "30 Oct 2024 01.15 PM",
      badge: "General",
      imgSrc: "assets/img/doctors-dashboard/profile-05.jpg"
    }
  ];

  return (
    <div className="dashboard-card w-100">
      <div className="dashboard-card-head">
        <div className="header-title">
          <h5>Appointment</h5>
        </div>
        <div className="dropdown header-dropdown">
          <a
            className="dropdown-toggle nav-tog"
            data-bs-toggle="dropdown"
            href="#"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Last 7 Days
          </a>
          <div className="dropdown-menu dropdown-menu-end">
            <a href="#" className="dropdown-item">
              Today
            </a>
            <a href="#" className="dropdown-item">
              This Month
            </a>
            <a href="#" className="dropdown-item">
              Last 7 Days
            </a>
          </div>
        </div>
      </div>
      <div className="dashboard-card-body">
        <div className="appointment-list">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="appointment-item">
              <div className="patient-info-profile">
                <a href="appointments.html" className="table-avatar">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="avatar"
                  />
                  {/* {appointment.imgSrc} */}
                </a>
                <div className="patient-name-info">
                  <span>#{appointment.id}</span>
                  <p>
                    <a href="appointments.html">{appointment.name}</a>
                  </p>
                </div>
              </div>
              <div className="appointment-date-created">
                <p className="date-part">{appointment.date}</p>
                <span className="badge table-badge">{appointment.badge}</span>
              </div>
              <div className="apponiment-actions d-flex align-items-center">
                <a href="#" className="text-success-icon me-2">
                  <i className="fa-solid fa-check"></i>
                </a>
                <a href="#" className="text-danger-icon">
                  <i className="fa-solid fa-xmark"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
