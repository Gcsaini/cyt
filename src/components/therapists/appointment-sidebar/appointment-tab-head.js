import React from "react";
import "./appointment-tab-head.css";

export default function AppointmentTabHead() {
  return (
    <div className="appointment-tab-head">
      <div className="appointment-tabs">
        <ul className="nav nav-pills inner-tab" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-upcoming-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-upcoming"
              type="button"
              role="tab"
              aria-controls="pills-upcoming"
              aria-selected="true"
            >
              Upcoming<span>21</span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-cancel-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-cancel"
              type="button"
              role="tab"
              aria-controls="pills-cancel"
              aria-selected="false"
              tabIndex="-1"
            >
              Cancelled<span>16</span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-complete-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-complete"
              type="button"
              role="tab"
              aria-controls="pills-complete"
              aria-selected="false"
              tabIndex="-1"
            >
              Completed<span>214</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="filter-head">
        <div className="position-relative daterange-wraper me-2">
          <div className="input-groupicon calender-input">
            <input
              type="text"
              className="form-control date-range bookingrange"
              placeholder="From Date - To Date"
            />
          </div>
          <i className="fa-solid fa-calendar-days"></i>
        </div>
        <div className="form-sorts dropdown">
          <a
            href="javascript:void(0);"
            className="dropdown-toggle"
            id="table-filter"
          >
            <i className="fa-solid fa-filter me-2"></i>Filter By
          </a>
          <div className="filter-dropdown-menu">
            <div className="filter-set-view">
              <div className="accordion" id="accordionExample">
                <div className="filter-set-content">
                  <div className="filter-set-content-head">
                    <a
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Name<i className="fa-solid fa-chevron-right"></i>
                    </a>
                  </div>
                  <div
                    className="filter-set-contents accordion-collapse collapse show"
                    id="collapseTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <ul>
                      <li>
                        <div className="input-block dash-search-input w-100">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                          />
                          <span className="search-icon">
                            <i className="fa-solid fa-magnifying-glass"></i>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="filter-set-content">
                  <div className="filter-set-content-head">
                    <a
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Appointment Type
                      <i className="fa-solid fa-chevron-right"></i>
                    </a>
                  </div>
                  <div
                    className="filter-set-contents accordion-collapse collapse show"
                    id="collapseOne"
                    data-bs-parent="#accordionExample"
                  >
                    <ul>
                      <li>
                        <div className="filter-checks">
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks"></span>
                            <span className="check-title">All Type</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="filter-checks">
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks"></span>
                            <span className="check-title">Video Call</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="filter-checks">
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks"></span>
                            <span className="check-title">Audio Call</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="filter-checks">
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks"></span>
                            <span className="check-title">Chat</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="filter-checks">
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks"></span>
                            <span className="check-title">Direct Visit</span>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="filter-set-content">
                  <div className="filter-set-content-head">
                    <a
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Visit Type<i className="fa-solid fa-chevron-right"></i>
                    </a>
                  </div>
                  <div
                    className="filter-set-contents accordion-collapse collapse show"
                    id="collapseThree"
                    data-bs-parent="#accordionExample"
                  >
                    <ul>
                      <li>
                        <div className="filter-checks">
                          <label className="checkboxs">
                            <input type="checkbox" checked="" />
                            <span className="checkmarks"></span>
                            <span className="check-title">All Visit</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="filter-checks">
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks"></span>
                            <span className="check-title">General</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="filter-checks">
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks"></span>
                            <span className="check-title">Consultation</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="filter-checks">
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks"></span>
                            <span className="check-title">Follow-up</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="filter-checks">
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks"></span>
                            <span className="check-title">Direct Visit</span>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="filter-reset-btns">
                <a href="appointments.html" className="btn btn-light">
                  Reset
                </a>
                <a href="appointments.html" className="btn btn-primary">
                  Filter Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
