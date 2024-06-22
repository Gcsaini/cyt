import ImageTag from "../../utils/image-tag";
import profileImg from "../../assets/img/avatar-027dc8.png";
import { Link } from "react-router-dom";
import MyNavbar from "../../components/navbar";
import Footer from "../../components/footer";
import Banner from "./banner";
import { useLocation } from "react-router-dom";
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
                      <a className="rbt-btn btn-md hover-icon-reverse" href="#">
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">Create a New Workshop</span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right"></i>
                          </span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right"></i>
                          </span>
                        </span>
                      </a>
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
                              <li className="nav-item" role="presentation">
                                <Link
                                  to={"/therapist-dashboard"}
                                  className={
                                    currentPath == "/therapist-dashboard"
                                      ? "active"
                                      : ""
                                  }
                                >
                                  <i className="feather-home"></i>
                                  <span>Dashboard</span>
                                </Link>
                              </li>
                              <li className="nav-item" role="presentation">
                                <a
                                  className=""
                                  href="/instructor/instructor-profile"
                                >
                                  <i className="feather-user"></i>
                                  <span>My Profile</span>
                                </a>
                              </li>
                              <li className="nav-item" role="presentation">
                                <a
                                  className=""
                                  href="/instructor/instructor-enrolled-course"
                                >
                                  <i className="feather-book-open"></i>
                                  <span>Save Payment Method</span>
                                </a>
                              </li>
                          
                              <li className="nav-item" role="presentation">
                                <a
                                  className=""
                                  href="/instructor/instructor-reviews"
                                >
                                  <i className="feather-star"></i>
                                  <span>My Reviews</span>
                                </a>
                              </li>
                             
                            </ul>
                          </nav>
                          <div className="section-title mt--40 mb--20">
                            <h6 className="rbt-title-style-2">Additional</h6>
                          </div>
                          <nav className="mainmenu-nav">
                            <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                              <li>
                                <a
                                  className=""
                                  href="/instructor/instructor-personal-courses"
                                >
                                  <i className="feather-monitor"></i>
                                  <span>Wellness Workshops</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  className=""
                                  href="/instructor/instructor-announcements"
                                >
                                  <i className="feather-volume-2"></i>
                                  <span>Write Blog</span>
                                </a>
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
                                    currentPath == "/settings" ? "active" : ""
                                  }
                                  to="/settings"
                                >
                                  <i className="feather-settings"></i>
                                  <span>Edit Profile</span>
                                </Link>
                              </li>
                              <li>
                                <a className="" href="/">
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
