import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import logo1 from "../../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageTag from "../../utils/image-tag";
import useTherapistStore from "../../store/therapistStore";
import { removeToken } from "../../utils/jwt";
import { defaultProfile } from "../../utils/url";
export default function DashboardTopNav() {
  const { userInfo, fetchUserInfo } = useTherapistStore();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
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
                <Link to="/" style={{ cursor: "pointer" }}>
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
                <Link className="" to="/" style={{ cursor: "pointer" }}>
                  Home<i className="feather-chevron-down"></i>
                </Link>
              </li>
              <li className="has-dropdown has-menu-child-item">
                <Link
                  className={about ? "open" : ""}
                  onClick={() => setAbout(about !== true)}
                >
                  About<i className="feather-chevron-down"></i>
                </Link>
                <ul className={about ? "submenu active d-block" : "submenu"}>
                  <li>
                    <Link to={"/about-us"} style={{ cursor: "pointer" }}>
                      About us
                    </Link>
                  </li>

                  <li>
                    <Link to={"/contact-us"} style={{ cursor: "pointer" }}>
                      Contact us
                    </Link>
                  </li>
                </ul>
              </li>

              {/* <li>
                <Link
                  to={"#"}
                  onClick={() => handleClick("/join-us")}
                  style={{ cursor: "pointer" }}
                >
                  Join us
                </Link>
              </li> */}
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
                  <li class="access-icon">
                    <a
                      class="search-trigger-active rbt-round-btn"
                      href="https://chooseyourtherapist.in"
                      target="_blank"
                    >
                      <i class="fa-solid fa-globe"></i>
                    </a>
                  </li>
                  <li>
                    <Link className="service-menu-parent" to={"/notifications"}>
                      <i class="fa-solid fa-bell"></i> &nbsp;
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
                            <Link to="index.html#">
                              <i className="feather-bookmark"></i>
                              <span>Bookmark</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="instructor/instructor-enrolled-course">
                              <i className="feather-shopping-bag"></i>
                              <span>Enrolled Courses</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="instructor/instructor-wishlist">
                              <i className="feather-heart"></i>
                              <span>Wishlist</span>
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
