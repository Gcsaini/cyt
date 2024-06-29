import React from "react";
import "./appointment.css";

export default function Apointment() {
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
        <div className="table-responsive">
          <table className="table dashboard-table appoint-table">
            <tbody>
              {[
                {
                  id: "Apt0001",
                  name: "Adrian Marshall",
                  date: "11 Nov 2024 10.45 AM",
                  badge: "General"
                },
                {
                  id: "Apt0002",
                  name: "Kelly Stevens",
                  date: "10 Nov 2024 11.00 AM",
                  badge: "Clinic Consulting"
                },
                {
                  id: "Apt0003",
                  name: "Samuel Anderson",
                  date: "03 Nov 2024 02.00 PM",
                  badge: "General"
                },
                {
                  id: "Apt0004",
                  name: "Catherine Griffin",
                  date: "01 Nov 2024 04.15 PM",
                  badge: "Clinic Consulting"
                },
                {
                  id: "Apt0005",
                  name: "Sarah Jones",
                  date: "30 Oct 2024 01.15 PM",
                  badge: "General"
                }
              ].map((appointment, index) => (
                <tr key={index}>
                  <td>
                    <div className="patient-info-profile">
                      <div className="table-avatar">
                        <img
                          src={`assets/img/doctors-dashboard/profile-0${
                            index + 1
                          }.jpg`}
                          alt="Img"
                        />
                      </div>
                      <div className="patient-name-info">
                        <span>#{appointment.id}</span>
                        <h5>{appointment.name}</h5>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="appointment-date-created">
                      <h6>{appointment.date}</h6>
                      <span className="badge table-badge">
                        {appointment.badge}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="apponiment-actions d-flex align-items-center">
                      <a href="#" className="text-success-icon me-2">
                        <i className="fa-solid fa-check"></i>
                      </a>
                      <a href="#" className="text-danger-icon">
                        <i className="fa-solid fa-xmark"></i>
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
