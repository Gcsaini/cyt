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
  const { profileSet, setProfileSet } = useTherapistStore();
  const { therapistInfo } = useTherapistStore();
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
  }, [getData]);

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
                                Welcome, {therapistInfo.user.name}
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
                                    <span>Home</span>
                                  </Link>
                                </li>

                                <li className="nav-item">
                                  <Link
                                    className={
                                      currentPath ===
                                      "/appointments"
                                        ? "active"
                                        : ""
                                    }
                                    
                                    to="/appointments"
                                  >
                                    <i className="fa-regular fa-calendar-check"></i>
                                    <span>Booking History</span>
                                    
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
                                    <i className="fa-pen-to-square"></i>
                                    <span>Create Events</span>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className={
                                      currentPath === "/coupons" ||
                                      currentPath === "/create-coupon"
                                        ? "active"
                                        : ""
                                    }
                                    to="/coupons"
                                  >
                                    <i className="fa-ticket"></i>
                                    <span>Create Coupons</span>
                                  </Link>
                                </li>

                                
                              </ul>
                            </nav>
                            <div className="section-title mt--40 mb--20">
                              <h6 className="rbt-title-style-2">
                                Additional{" "}
                                {/* <span
                                  style={{
                                    backgroundColor: "rgb(250, 10, 10)",
                                    padding: "5px",
                                    borderRadius: "5px",
                                    color: "#fff",
                                  }}
                                >
                                  Coming soon
                                </span> */}
                              </h6>
                            </div>
                            <nav className="mainmenu-nav">
                              <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                <li>
                                  <Link className="" to="">
                                    <i className="fa-solid fa-file-medical"></i>
                                    <span>Case history</span>
                                    <span
                                      style={{
                                        backgroundColor: "rgba(43, 194, 76, 1)",
                                        padding: "5px",
                                        marginLeft: "10px",
                                        borderRadius: "5px",
                                        color: "#fff",
                                      }}
                                    >
                                      Coming soon
                                    </span>
                                  </Link>
                                </li>
                                
                                
                                <li>
                                  <Link
                                    className=""
                                    to="/instructor/instructor-announcements"
                                  >
                                    <i className="fa-solid fa-blog"></i>
                                    <span>Blog</span>
                                    <span
                                      style={{
                                        backgroundColor: "rgba(43, 194, 76, 1)",
                                        padding: "5px",
                                        marginLeft: 10,
                                        borderRadius: "5px",
                                        color: "#fff",
                                      }}
                                    >
                                      Coming soon
                                    </span>
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    className=""
                                    to=""
                                    // to="/invoices"
                                  >
                                    <i className="fa-solid fa-file-invoice"></i>
                                    <span>Invoices</span>
                                    <span
                                      style={{
                                        backgroundColor: "rgba(43, 194, 76, 1)",
                                        padding: "5px",
                                        marginLeft: "10px",
                                        borderRadius: "5px",
                                        color: "#fff",
                                      }}
                                    >
                                      Coming soon
                                    </span>
                                  </Link>
                                </li>

                                <li className="nav-item">
                                  <Link
                                    className=""
                                    // to="/reviews"
                                    to=""
                                  >
                                    <i className="feather-star"></i>
                                    <span>Reviews</span>
                                    <span
                                      style={{
                                        backgroundColor: "rgba(43, 194, 76, 1)",
                                        padding: "5px",
                                        marginLeft: "10px",
                                        borderRadius: "5px",
                                        color: "#fff",
                                      }}
                                    >
                                      Coming soon
                                    </span>
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

                                    {profileSet ? (
                                      <CircleIcon
                                        sx={{ color: "green", marginLeft: 2 }}
                                      />
                                    ) : (
                                      <CircleIcon
                                        sx={{ color: "red", marginLeft: 2 }}
                                      />
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
                <div className="col-lg-9">{props.children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
