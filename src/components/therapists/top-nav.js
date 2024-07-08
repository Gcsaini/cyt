import React from "react";
import logo1 from "../../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import ImageTag from "../../utils/image-tag";
import useTherapistStore from "../../store/therapistStore";
import { removeToken } from "../../utils/jwt";
import { defaultProfile } from "../../utils/url";
export default function DashboardTopNav() {
  const { userInfo } = useTherapistStore();
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);
  const [about, setAbout] = React.useState();
  return (
    <>
      <div className={show ? "popup-mobile-menu active" : "popup-mobile-menu"}>
        <div className="inner-wrapper">
          <div className="inner-top">
            <div className="content">
              <div className="logo">
                <Link to="/therapist-dashboard" style={{ cursor: "pointer" }}>
                  <ImageTag
                    alt="Education Logo Images"
                    width="137"
                    height="45"
                    src={logo1}
                  />
                </Link>
              </div>
              <div className="rbt-btn-close">
                <button
                  className="close-button rbt-round-btn"
                  onClick={() => setShow(false)}
                >
                  <i className="feather-x"></i>
                </button>
              </div>
            </div>
          </div>
          <nav className="mainmenu-nav">
            <ul className="mainmenu">
              <li className="position-static">
                <Link to="/therapist-dashboard" style={{ cursor: "pointer" }}>
                  Dashboard<i className="feather-chevron-down"></i>
                </Link>
              </li>
              <li className="position-static">
                <Link to="/appointments" style={{ cursor: "pointer" }}>
                  Appointments<i className="feather-chevron-down"></i>
                </Link>
              </li>

              <li className="position-static">
                <Link to="/reviews" style={{ cursor: "pointer" }}>
                  Rewiews<i className="feather-chevron-down"></i>
                </Link>
              </li>
              <li className="position-static">
                <Link to="/invoices" style={{ cursor: "pointer" }}>
                  Invoices<i className="feather-chevron-down"></i>
                </Link>
              </li>
              <li className="position-static">
                <Link to="/case-history" style={{ cursor: "pointer" }}>
                  Case History<i className="feather-chevron-down"></i>
                </Link>
              </li>
              <li className="position-static">
                <Link to="/workshop-events" style={{ cursor: "pointer" }}>
                  Workshop/Events<i className="feather-chevron-down"></i>
                </Link>
              </li>
              <li className="position-static">
                <Link to="/blogs-settings" style={{ cursor: "pointer" }}>
                  Blog<i className="feather-chevron-down"></i>
                </Link>
              </li>
              <li className="position-static">
                <Link to="/settings" style={{ cursor: "pointer" }}>
                  Edit Profile<i className="feather-chevron-down"></i>
                </Link>
              </li>
              <li className="position-static">
                <Link to="/settings" style={{ cursor: "pointer" }}>
                  Change Password<i className="feather-chevron-down"></i>
                </Link>
              </li>
              <li className="position-static">
                <Link to="/change-password" style={{ cursor: "pointer" }}>
                  Logout<i className="feather-chevron-down"></i>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <header className="rbt-header rbt-header-10">
        <div className="rbt-header-wrapper header-space-betwween header-sticky rbt-sticky">
          <div className="container-fluid">
            <div className="mainbar-row rbt-navigation-start align-items-center">
              <div className="header-left rbt-header-content">
                <div className="header-info">
                  <div className="logo">
                    <Link to="/" style={{ cursor: "pointer" }}>
                      <ImageTag
                        alt="Education Logo Images"
                        height={"50"}
                        width={"152"}
                        src={logo1}
                      />
                    </Link>
                  </div>
                </div>
                <div className="header-info d-none d-lg-block"></div>
              </div>
              <div className="rbt-main-navigation d-none d-xl-block"></div>
              <div className="header-right">
                <ul className="quick-access">
                  <li className="access-icon">
                    <a
                      className="search-trigger-active rbt-round-btn"
                      href="https://chooseyourtherapist.in"
                      target="_blank"
                    >
                      <i className="fa-solid fa-globe"></i>
                    </a>
                  </li>
                  <li>
                    <Link className="service-menu-parent" to={"/notifications"}>
                      <i className="fa-solid fa-bell"></i> &nbsp;
                    </Link>
                  </li>
                  <li className="account-access rbt-user-wrapper d-none d-xl-block">
                    <div
                      className="service-menu-parent"
                      style={{ marginRight: 30 }}
                    >
                      <div className="rbt-admin-profile ">
                        <div className="admin-thumbnail">
                          <ImageTag
                            alt="User"
                            height={"43"}
                            src={userInfo.profile || defaultProfile}
                          />
                        </div>
                        <div className="admin-info">
                          <span className="name">{userInfo.name}</span>
                        </div>
                      </div>
                    </div>
                    <div className="rbt-user-menu-list-wrapper">
                      <div className="inner">
                        <ul className="user-list-wrapper">
                          <li>
                            <Link to="instructor/instructor-dashboard">
                              <i className="feather-home"></i>
                              <span>My Dashboard</span>
                            </Link>
                          </li>

                          <li>
                            <Link to="/settings">
                              <i className="feather-shopping-bag"></i>
                              <span>Edit Profile</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/change-password">
                              <i className="feather-heart"></i>
                              <span>Change Password</span>
                            </Link>
                          </li>

                          <li>
                            <Link to="instructor/instructor-order-history">
                              <i className="feather-clock"></i>
                              <span>Order History</span>
                            </Link>
                          </li>
                        </ul>

                        <hr className="mt--10 mb--10" />
                        <ul className="user-list-wrapper">
                          <li>
                            <Link to="instructor/instructor-settings">
                              <i className="feather-settings"></i>
                              <span>Settings</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={() => {
                                removeToken();
                                navigate("/login");
                              }}
                            >
                              <i className="feather-log-out"></i>
                              <span>Logout</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>

                <div
                  className="mobile-menu-bar d-block d-xl-none"
                  onClick={() => setShow(true)}
                >
                  <div className="hamberger">
                    <button className="hamberger-button rbt-round-btn">
                      <i className="feather-menu"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
