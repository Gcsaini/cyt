import { Link, useLocation, useNavigate } from "react-router-dom";
import React from "react";
import useTherapistStore from "../../store/therapistStore";
import { removeToken } from "../../utils/jwt";
import DashboardTopNav from "./top-nav";
import useMediaQuery from "@mui/material/useMediaQuery";
import { checkProfileSet } from "../../utils/url";
import { fetchById } from "../../utils/actions";
import CircleIcon from "@mui/icons-material/Circle";

export default function MainLayout(props) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const { profileSet, setProfileSet, therapistInfo } = useTherapistStore();
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const handleLogout = () => {
    removeToken();
    navigate("/login");
  };

  const getData = async () => {
    try {
      const res = await fetchById(checkProfileSet);
      if (res.status) {
        setProfileSet(res.data.check);
      }
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    if (!profileSet) {
      getData();
    }
  }, [profileSet]);

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
                {!isMobile && (
                  <div className="col-lg-3">
                    <div className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
                      <div className="inner">
                        <div className="content-item-content">
                          <div className="rbt-default-sidebar-wrapper">
                            {/* Welcome Section */}
                            <div className="section-title mb--20">
                              <h6 className="rbt-title-style-2">
                                Welcome, {therapistInfo.user.name}
                              </h6>
                            </div>

                            {/* Main Dashboard Menu */}
                            <nav className="mainmenu-nav">
                              <ul className="dashboard-mainmenu rbt-default-sidebar-list nav-tabs">
                                <li className="nav-item">
                                  <Link
                                    to="/therapist-dashboard"
                                    className={
                                      currentPath === "/therapist-dashboard"
                                        ? "active"
                                        : ""
                                    }
                                  >
                                    <i className="feather-home"></i>
                                    <span>Home</span>
                                  </Link>
                                </li>

                                <li className="nav-item">
                                  <Link
                                    to="/appointments"
                                    className={
                                      currentPath === "/appointments"
                                        ? "active"
                                        : ""
                                    }
                                  >
                                    <i className="fa-regular fa-calendar-check"></i>
                                    <span>Session Booking</span>
                                  </Link>
                                </li>

                                <li className="nav-item">
                                  <Link
                                    to=""
                                    className={
                                      currentPath === "/workshops" ||
                                      currentPath === "/create-workshop"
                                        ? "active"
                                        : ""
                                    }
                                  >
                                    <i className="fa-solid fa-file-medical"></i>
                                    <span>Create Events</span>
                                  </Link>
                                </li>

                                <li className="nav-item">
                                  <Link
                                    to="/coupons"
                                    className={
                                      currentPath === "/coupons" ||
                                      currentPath === "/create-coupon"
                                        ? "active"
                                        : ""
                                    }
                                  >
                                    <i className="feather-star"></i>
                                    <span>Create Coupons</span>
                                  </Link>
                                </li>
                              </ul>
                            </nav>

                            {/* 
                              Coming Soon Section - Commented out so it does not render
                              You can uncomment later when ready 
                            */}
                            {/*
                            <div className="section-title mt--40 mb--20">
                              <h6 className="rbt-title-style-2">
                                Additional <span style={{ backgroundColor: "rgb(250, 10, 10)", padding: "5px", borderRadius: "5px", color: "#fff" }}>Coming soon</span>
                              </h6>
                            </div>
                            <nav className="mainmenu-nav">
                              <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                <li>
                                  <Link to="">
                                    <i className="fa-solid fa-place-of-worship"></i>
                                    <span>Case history</span>
                                    <span style={{ backgroundColor: "rgba(43, 194, 76, 1)", padding: "5px", marginLeft: "10px", borderRadius: "5px", color: "#fff" }}>Coming soon</span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/instructor/instructor-announcements">
                                    <i className="fa-solid fa-blog"></i>
                                    <span>Blog</span>
                                    <span style={{ backgroundColor: "rgba(43, 194, 76, 1)", padding: "5px", marginLeft: 10, borderRadius: "5px", color: "#fff" }}>Coming soon</span>
                                  </Link>
                                </li>
                              </ul>
                            </nav>
                            */}

                            {/* User Section */}
                            <div className="section-title mt--40 mb--20">
                              <h6 className="rbt-title-style-2">User</h6>
                            </div>
                            <nav className="mainmenu-nav">
                              <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                <li>
                                  <Link
                                    to="/settings"
                                    className={
                                      currentPath === "/settings" ? "active" : ""
                                    }
                                  >
                                    <i className="feather-settings"></i>
                                    <span>Edit Profile</span>
                                    {profileSet ? (
                                      <CircleIcon sx={{ color: "green", marginLeft: 2 }} />
                                    ) : (
                                      <CircleIcon sx={{ color: "red", marginLeft: 2 }} />
                                    )}
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

                {/* Main Content Area */}
                <div className="col-lg-9">{props.children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
