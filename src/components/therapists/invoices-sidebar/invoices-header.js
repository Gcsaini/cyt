import React from "react";
import "./invoices-header.css";

export default function InvoicesHeader() {
  return (
    <>
      <div className="col-lg-15 col-xl-15">
        <div className="dashboard-header">
          <h3>Invoices</h3>
        </div>
        <div className="search-header">
          <div className="search-field">
            <input type="text" className="form-control" placeholder="Search" />
            <span className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
        </div>
        <div className="custom-table">
          <div className="table-responsive">
            <table className="table table-center mb-0">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Patient</th>
                  <th>Appointment Date</th>
                  <th>Booked on</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="javascript:void(0);"
                      className="text-blue-600"
                      data-bs-toggle="modal"
                      data-bs-target="#invoice_view"
                    >
                      #Inv-2021
                    </a>
                  </td>
                  <td>
                    <h2 className="table-avatar">
                      <a
                        href="doctor-profile.html"
                        className="avatar avatar-sm me-2"
                      >
                        <img
                          className="avatar-img rounded-3"
                          src="assets/img/doctors/doctor-thumb-02.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="doctor-profile.html">Edalin Hendry</a>
                    </h2>
                  </td>
                  <td>24 Mar 2024</td>
                  <td>21 Mar 2024</td>
                  <td>$300</td>
                  <td>
                    <div className="action-item">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_view"
                      >
                        <i className="fa-solid fa-link"></i>
                      </a>
                      <a href="javascript:void(0);">
                        <i className="fa-solid fa-print"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="javascript:void(0);"
                      className="text-blue-600"
                      data-bs-toggle="modal"
                      data-bs-target="#invoice_view"
                    >
                      #Inv-2021
                    </a>
                  </td>
                  <td>
                    <h2 className="table-avatar">
                      <a
                        href="doctor-profile.html"
                        className="avatar avatar-sm me-2"
                      >
                        <img
                          className="avatar-img rounded-3"
                          src="assets/img/doctors/doctor-thumb-05.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="doctor-profile.html">John Homes</a>
                    </h2>
                  </td>
                  <td>17 Mar 2024</td>
                  <td>14 Mar 2024</td>
                  <td>$450</td>
                  <td>
                    <div className="action-item">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_view"
                      >
                        <i className="fa-solid fa-link"></i>
                      </a>
                      <a href="javascript:void(0);">
                        <i className="fa-solid fa-print"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="javascript:void(0);"
                      className="text-blue-600"
                      data-bs-toggle="modal"
                      data-bs-target="#invoice_view"
                    >
                      #Inv-2021
                    </a>
                  </td>
                  <td>
                    <h2 className="table-avatar">
                      <a
                        href="doctor-profile.html"
                        className="avatar avatar-sm me-2"
                      >
                        <img
                          className="avatar-img rounded-3"
                          src="assets/img/doctors/doctor-thumb-03.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="doctor-profile.html">Shanta Neill</a>
                    </h2>
                  </td>
                  <td>11 Mar 2024</td>
                  <td>07 Mar 2024</td>
                  <td>$250</td>
                  <td>
                    <div className="action-item">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_view"
                      >
                        <i className="fa-solid fa-link"></i>
                      </a>
                      <a href="javascript:void(0);">
                        <i className="fa-solid fa-print"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="javascript:void(0);"
                      className="text-blue-600"
                      data-bs-toggle="modal"
                      data-bs-target="#invoice_view"
                    >
                      #Inv-2021
                    </a>
                  </td>
                  <td>
                    <h2 className="table-avatar">
                      <a
                        href="doctor-profile.html"
                        className="avatar avatar-sm me-2"
                      >
                        <img
                          className="avatar-img rounded-3"
                          src="assets/img/doctors/doctor-thumb-08.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="doctor-profile.html">Anthony Tran</a>
                    </h2>
                  </td>
                  <td>26 Feb 2024</td>
                  <td>23 Feb 2024</td>
                  <td>$320</td>
                  <td>
                    <div className="action-item">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_view"
                      >
                        <i className="fa-solid fa-link"></i>
                      </a>
                      <a href="javascript:void(0);">
                        <i className="fa-solid fa-print"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="javascript:void(0);"
                      className="text-blue-600"
                      data-bs-toggle="modal"
                      data-bs-target="#invoice_view"
                    >
                      #Inv-2021
                    </a>
                  </td>
                  <td>
                    <h2 className="table-avatar">
                      <a
                        href="doctor-profile.html"
                        className="avatar avatar-sm me-2"
                      >
                        <img
                          className="avatar-img rounded-3"
                          src="assets/img/doctors/doctor-thumb-01.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="doctor-profile.html">Susan Lingo</a>
                    </h2>
                  </td>
                  <td>18 Feb 2024</td>
                  <td>15 Feb 2024</td>
                  <td>$480</td>
                  <td>
                    <div className="action-item">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_view"
                      >
                        <i className="fa-solid fa-link"></i>
                      </a>
                      <a href="javascript:void(0);">
                        <i className="fa-solid fa-print"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="javascript:void(0);"
                      className="text-blue-600"
                      data-bs-toggle="modal"
                      data-bs-target="#invoice_view"
                    >
                      #IApt123
                    </a>
                  </td>
                  <td>
                    <h2 className="table-avatar">
                      <a
                        href="doctor-profile.html"
                        className="avatar avatar-sm me-2"
                      >
                        <img
                          className="avatar-img rounded-3"
                          src="assets/img/doctors/doctor-thumb-09.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="doctor-profile.html">Joseph Boyd</a>
                    </h2>
                  </td>
                  <td>10 Feb 2024</td>
                  <td>07 Feb 2024</td>
                  <td>$260</td>
                  <td>
                    <div className="action-item">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_view"
                      >
                        <i className="fa-solid fa-link"></i>
                      </a>
                      <a href="javascript:void(0);">
                        <i className="fa-solid fa-print"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="javascript:void(0);"
                      className="text-blue-600"
                      data-bs-toggle="modal"
                      data-bs-target="#invoice_view"
                    >
                      #Inv-2021
                    </a>
                  </td>
                  <td>
                    <h2 className="table-avatar">
                      <a
                        href="doctor-profile.html"
                        className="avatar avatar-sm me-2"
                      >
                        <img
                          className="avatar-img rounded-3"
                          src="assets/img/doctors/doctor-thumb-07.jpg"
                          alt="User Image"
                        />
                      </a>
                      <a href="doctor-profile.html">Juliet Gabriel</a>
                    </h2>
                  </td>
                  <td>28 Jan 2024</td>
                  <td>25 Jan 2024</td>
                  <td>$350</td>
                  <td>
                    <div className="action-item">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_view"
                      >
                        <i className="fa-solid fa-link"></i>
                      </a>
                      <a href="javascript:void(0);">
                        <i className="fa-solid fa-print"></i>
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

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
}
