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
                                    to="/workshops"
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

                            {/* ------------------- Ads / Promo Section ------------------- */}
                            <div
                              style={{
                                marginTop: 30,
                                padding: 16,
                                borderRadius: 12,
                                background: "linear-gradient(135deg, #00b874, #007f99)",
                                color: "#fff",
                                textAlign: "center",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "center",
                                  gap: 10,
                                }}
                              >
                                <i className="fas fa-bullhorn" style={{ fontSize: 32 }}></i>
                                <h6 style={{ margin: 0, fontWeight: 600 }}>Boost Your Visibility!</h6>
                                <p style={{ fontSize: 13, margin: 0 }}>
                                  Upgrade your profile to get featured to more clients
                                </p>
                                <Link
                                  to="/premium-upgrade"
                                  style={{
                                    marginTop: 8,
                                    padding: "6px 16px",
                                    backgroundColor: "#fff",
                                    color: "#007f99",
                                    borderRadius: 8,
                                    fontWeight: 600,
                                    fontSize: 14,
                                    textDecoration: "none",
                                    display: "inline-block",
                                  }}
                                >
                                  Upgrade Now
                                </Link>
                              </div>
                            </div>
                            {/* ---------------------------------------------------------- */}
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
