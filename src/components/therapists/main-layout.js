import ImageTag from "../../utils/image-tag";
import profileImg from "../../assets/img/avatar-027dc8.png";
import { Link, useLocation } from "react-router-dom";
import MyNavbar from "../../components/navbar";
import Footer from "../../components/footer";
import Banner from "./banner";

export default function MainLayout(props) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <MyNavbar />
      <Banner />
      <div className="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-dashboard-content-wrapper">
                <div className="tutor-bg-photo bg_image bg_image--22 height-350"></div>
                <div className="rbt-tutor-information">
                  <div className="rbt-tutor-information-left">
                    <div className="thumbnail rbt-avatars size-lg">
                      <ImageTag
                        alt="Instructor"
                        width="300"
                        height="300"
                        src={profileImg}
                      />
                    </div>
                    <div className="tutor-content">
                      <h5 className="title">John Due</h5>
                      <div className="rbt-review">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="rating-count"> (15 Reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="rbt-tutor-information-right">
                    <div className="tutor-btn">
                      <Link
                        className="rbt-btn btn-md hover-icon-reverse"
                        to="#"
                      >
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">
                            Create a New Workshop
                          </span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right"></i>
                          </span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right"></i>
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-5">
                <div className="col-lg-3">
                  <div className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
                    <div className="inner">
                      <div className="content-item-content">
                        <div className="rbt-default-sidebar-wrapper">
                          <div className="section-title mb--20">
                            <h6 className="rbt-title-style-2">
                              Welcome, Jone Due
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
                                  className=""
                                  to="/instructor/instructor-profile"
                                >
                                  <i className="fa-regular fa-calendar-check"></i>
                                  <span>Appointment</span>
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  className=""
                                  to="/instructor/instructor-enrolled-course"
                                >
                                  <i className="fa-solid fa-file-invoice"></i>
                                  <span>Invoices</span>
                                </Link>
                              </li>

                              <li className="nav-item">
                                <Link
                                  className=""
                                  to="/instructor/instructor-reviews"
                                >
                                  <i className="feather-star"></i>
                                  <span>Reviews</span>
                                </Link>
                              </li>
                            </ul>
                          </nav>
                          <div className="section-title mt--40 mb--20">
                            <h6 className="rbt-title-style-2">
                              Additional{" "}
                              <span>
                                <img
                                  style={{
                                    fontSize: "15px",
                                    width: "30px",
                                    height: "30px",
                                    marginLeft: "10px",
                                    color: "black"
                                  }}
                                  src="data:image/png;base64,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"
                                  alt="coming soon"
                                />
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
                                  className=""
                                  to="/instructor/instructor-announcements"
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
                                    currentPath === "/settings" ? "active" : ""
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
                                <Link className="" to="/">
                                  <i className="feather-log-out"></i>
                                  <span>Logout</span>
                                </Link>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">{props.children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
