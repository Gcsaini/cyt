import { Link, useLocation, useNavigate } from "react-router-dom";
import React from "react";
import useTherapistStore from "../../store/therapistStore";
import { removeToken } from "../../utils/jwt";
import DashboardTopNav from "./top-nav";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function MainLayout(props) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const { therapistInfo } = useTherapistStore();
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const handleLogout = () => {
    removeToken();
    navigate("/login");
  };

  return (
    <>
      <DashboardTopNav />
      <div className="rbt-dashboard-area">
        <div
          className="container"
          style={{ marginTop: 100, marginBottom: 100, maxWidth: "98%" }}
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {isMobile ? (
                  <div></div>
                ) : (
                  <div className="col-lg-3">
                    <div className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
                      <div className="inner">
                        <div className="content-item-content">
                          <div className="rbt-default-sidebar-wrapper">
                            <div className="section-title mb--20">
                              <h6 className="rbt-title-style-2">
                                Welcome, {therapistInfo.name}
                              </h6>
                            </div>
                            <nav className="mainmenu-nav">
                              <ul className="dashboard-mainmenu rbt-default-sidebar-list nav-tabs">
                                <li className="nav-item">
                                  <Link
                                    to={"/therapist-dashboard"}
                                    className={
                                      currentPath === "/therapist-dashboard"
                                        ? "active"
                                        : ""
                                    }
                                  >
                                    <i className="feather-home"></i>
                                    <span>Dashboard</span>
                                  </Link>
                                </li>

                                <li className="nav-item">
                                  <Link
                                    className={
                                      currentPath ===
                                      "/instructor/instructor-profile"
                                        ? "active"
                                        : ""
                                    }
                                    to="/appointments"
                                  >
                                    <i className="fa-regular fa-calendar-check"></i>
                                    <span>Appointments</span>
                                  </Link>
                                </li>

                                <li className="nav-item">
                                  <Link className="" to="/invoices">
                                    <i className="fa-solid fa-file-invoice"></i>
                                    <span>Invoices</span>
                                  </Link>
                                </li>

                                <li className="nav-item">
                                  <Link className="" to="/reviews">
                                    <i className="feather-star"></i>
                                    <span>Reviews</span>
                                  </Link>
                                </li>
                              </ul>
                            </nav>
                            <div className="section-title mt--40 mb--20">
                              <h6 className="rbt-title-style-2">
                                Additional{" "}
                                <span
                                  style={{
                                    backgroundColor: "rgb(250, 10, 10)",
                                    padding: "5px",
                                    borderRadius: "5px",
                                    color: "#fff",
                                  }}
                                >
                                  Coming soon
                                </span>
                              </h6>
                            </div>
                            <nav className="mainmenu-nav">
                              <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                <li>
                                  <Link
                                    className=""
                                    to="/instructor/instructor-personal-courses"
                                  >
                                    <i className="fa-solid fa-file-medical"></i>
                                    <span>Case history</span>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className={
                                      currentPath === "/workshops" ||
                                      currentPath === "/create-workshop"
                                        ? "active"
                                        : ""
                                    }
                                    to="/workshops"
                                  >
                                    <i className="fa-solid fa-place-of-worship"></i>
                                    <span>Workshop/Event</span>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className=""
                                    to="/instructor/instructor-announcements"
                                  >
                                    <i className="fa-solid fa-blog"></i>
                                    <span>Blog</span>
                                  </Link>
                                </li>
                              </ul>
                            </nav>
                            <div className="section-title mt--40 mb--20">
                              <h6 className="rbt-title-style-2">User</h6>
                            </div>
                            <nav className="mainmenu-nav">
                              <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                <li>
                                  <Link
                                    className={
                                      currentPath === "/settings"
                                        ? "active"
                                        : ""
                                    }
                                    to="/settings"
                                  >
                                    <i className="feather-settings"></i>
                                    <span>Edit Profile</span>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className={
                                      currentPath === "/change-password"
                                        ? "active"
                                        : ""
                                    }
                                    to="/change-password"
                                  >
                                    <i className="feather-settings"></i>
                                    <span>Change Password</span>
                                  </Link>
                                </li>

                                <li>
                                  <a
                                    onClick={handleLogout}
                                    style={{ cursor: "pointer" }}
                                  >
                                    <i className="feather-log-out"></i>
                                    <span>Logout</span>
                                  </a>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="col-lg-9">{props.children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
