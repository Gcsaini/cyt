import React from "react";
import "./appointment-tab-content.css";

// Define an array of appointment data
const appointments = [
  {
    id: "#Apt0001",
    name: "Adrian",
    image: "assets/img/doctors-dashboard/profile-01.jpg",
    badge: null,
    date: "11 Nov 2024 10.45 AM",
    types: ["General Visit", "Video Call"],
    email: "adrian@example.com",
    phone: "+1 504 368 6874"
  },
  {
    id: "#Apt0002",
    name: "Kelly",
    image: "assets/img/doctors-dashboard/profile-02.jpg",
    badge: "New",
    date: "05 Nov 2024 11.50 AM",
    types: ["General Visit", "Audio Call"],
    email: "kelly@example.com",
    phone: "+1 832 891 8403"
  }
  // Add more appointments as needed
];

const AppointmentTabContent = () => {
  return (
    <>
      <div
        className="tab-pane fade show active"
        id="pills-upcoming"
        role="tabpanel"
        aria-labelledby="pills-upcoming-tab"
      >
        {appointments.map((appointment, index) => (
          <div className="appointment-wrap" key={index}>
            <ul>
              <li>
                <div className="patinet-information">
                  <a href="doctor-upcoming-appointment.html">
                    <img src={appointment.image} alt="User Image" />
                  </a>
                  <div className="patient-info">
                    <p>{appointment.id}</p>
                    <h6>
                      <a href="doctor-upcoming-appointment.html">
                        {appointment.name}
                      </a>
                      {appointment.badge && (
                        <span className="badge new-tag">
                          {appointment.badge}
                        </span>
                      )}
                    </h6>
                  </div>
                </div>
              </li>
              <li className="appointment-info">
                <p>
                  <i className="fa-solid fa-clock"></i> {appointment.date}
                </p>
                <ul className="d-flex apponitment-types">
                  {appointment.types.map((type, idx) => (
                    <li key={idx}>{type}</li>
                  ))}
                </ul>
              </li>
              <li className="mail-info-patient">
                <ul>
                  <li>
                    <i className="fa-solid fa-envelope"></i> {appointment.email}
                  </li>
                  <li>
                    <i className="fa-solid fa-phone"></i> {appointment.phone}
                  </li>
                </ul>
              </li>
              <li className="appointment-action">
                <ul>
                  <li>
                    <a href="doctor-upcoming-appointment.html">
                      <i className="fa-solid fa-eye"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-comments"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-xmark"></i>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="appointment-start">
                <a href="doctor-appointment-start.html" className="start-link">
                  Start Now
                </a>
              </li>
            </ul>
          </div>
        ))}
        <div className="pagination dashboard-pagination">
          <ul>
            <li>
              <a href="#" className="page-link">
                <i className="fa-solid fa-chevron-left"></i>
              </a>
            </li>
            <li>
              <a href="#" className="page-link">
                1
              </a>
            </li>
            <li>
              <a href="#" className="page-link active">
                2
              </a>
            </li>
            <li>
              <a href="#" className="page-link">
                3
              </a>
            </li>
            <li>
              <a href="#" className="page-link">
                4
              </a>
            </li>
            <li>
              <a href="#" className="page-link">
                ...
              </a>
            </li>
            <li>
              <a href="#" className="page-link">
                <i className="fa-solid fa-chevron-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AppointmentTabContent;
