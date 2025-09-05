import { Link, useLocation, useNavigate } from "react-router-dom";
import React from "react";
import useUserStore from "../../store/userStore";
import { removeToken } from "../../utils/jwt";
import useMediaQuery from "@mui/material/useMediaQuery";
import UserDashboardTopNav from "./user-top-nav";
import DashboardFooter from "../global/dashboard-footer";
import NotifyBar from "./notify-bar";
export default function UserLayout(props) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const { userInfo } = useUserStore();
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const handleLogout = () => {
    removeToken();
    navigate("/login");
  };

  return (
    <>
      <UserDashboardTopNav />
      <div className="rbt-dashboard-area">
        <div
          className="container"
          style={{ marginTop: 100, marginBottom: 20, maxWidth: "98%" }}
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {isMobile ? (
                  <div></div>
                ) : (
                  <div className="col-lg-2">
                    <div className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
                      <div className="inner">
                        <div className="content-item-content">
                          <div className="rbt-default-sidebar-wrapper">
                            <div className="section-title mb--20">
                              <h6 className="rbt-title-style-2">
                                Welcome, {userInfo.name}
                              </h6>
                            </div>
                            <nav className="mainmenu-nav">
                              <ul className="dashboard-mainmenu rbt-default-sidebar-list nav-tabs">
                                <li className="nav-item">
                                  <Link
                                    to={"/my-dashboard"}
                                    className={
                                      currentPath === "/my-dashboard"
                                        ? "active"
                                        : ""
                                    }
                                  >
                                    <i className="feather-home"></i>
                                    <span>Dashboard</span>
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link className={
                                    currentPath === "/my-bookings"
                                      ? "active"
                                      : ""
                                  } to="/my-bookings">
                                    <i className="fa-regular fa-calendar-check"></i>
                                    <span>Appointments</span>
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    className={
                                      currentPath === "/my-therapists"
                                        ? "active"
                                        : ""
                                    }
                                    to="/my-therapists"
                                  >
                                    <i className="fa-regular fa-calendar-check"></i>
                                    <span>Favrioute Therapist</span>
                                  </Link>
                                </li>

                                <li className="nav-item">
                                  <Link className="" to="/my-workshop-bookings">
                                    <i className="feather-star"></i>
                                    <span>Event Booking</span>
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
                                      currentPath === "/my-settings"
                                        ? "active"
                                        : ""
                                    }
                                    to="/my-settings"
                                  >
                                    <i className="feather-settings"></i>
                                    <span>Edit Profile</span>
                                  </Link>
                                </li>

                                <li>
                                  <a onClick={handleLogout}>
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
                <div className="col-lg-10">
                   <NotifyBar/>
                  {props.children}
                  <div class="section-title text-center mt--100 mb--100">
                    <h2 class="title">Want to get special offers <br /> and Course updates?</h2>
                    <form action="#" class="newsletter-form-1 mt--50 radius-round">
                      <input class="rbt-border" type="email" placeholder="Enter Your E-Email" />
                      <button type="submit" class="rbt-btn btn-md btn-gradient hover-icon-reverse radius-round">
                        <span class="icon-reverse-wrapper">
                          <span class="btn-text">Subscribe</span>
                          <span class="btn-icon"><i class="feather-arrow-right"></i></span>
                          <span class="btn-icon"><i class="feather-arrow-right"></i></span>
                        </span>
                      </button>
                    </form>
                  </div>
                  <DashboardFooter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
