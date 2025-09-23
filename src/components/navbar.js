import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import logo1 from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import ImageTag from "../utils/image-tag";
import { getDecodedToken, getToken } from "../utils/jwt";
export default function App() {
  const [show, setShow] = React.useState(false);
  const [service, setService] = React.useState();
  const [search, setSearch] = React.useState();
  const [userType, setUserType] = React.useState(0);

  useEffect(() => {
    const data = getToken();
    if (data) {
      const userData = getDecodedToken();
      console.log("userDataaa",userData);
      if (userData.role === 1) {
        setUserType(2);
      } else {
        setUserType(1);
      }
    }
  }, []);

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
            <p className="description">
              Because healing starts with your choice.
            </p>
            <ul className="navbar-top-left rbt-information-list justify-content-start">
              <li>
                <Link to="info@chooseyourtherapist.in">
                  <i className="feather-mail"></i>info.cyt@gmail.com
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="feather-phone"></i>+91-807-775-7951
                </Link>
              </li>
            </ul>
          </div>
          <nav className="mainmenu-nav">
            <ul className="mainmenu">
              <li className="position-static">
                <Link className="" to="/" style={{ cursor: "pointer" }}>
                  Home<i className="feather-chevron-down"></i>
                </Link>
              </li>
              <li className="position-static">
                <Link to={"/view-all-therapist"} style={{ cursor: "pointer" }}>
                  Therapist Directory
                </Link>
              </li>
              <li className="with-megamenu has-menu-child-item">
                <Link
                  className={service ? "open" : ""}
                  onClick={() => setService(service !== true)}
                >
                  Services<i className="feather-chevron-down"></i>
                </Link>
                <div
                  className={
                    service
                      ? "rbt-megamenu grid-item-2 active d-block"
                      : "rbt-megamenu grid-item-2"
                  }
                >
                  <div className="wrapper">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mega-top-banner">
                          <div className="content">
                            <h4 className="title">Therapy for You</h4>
                            <p className="description">
                              Find Your Therapist, wtih online/In-perspn mode.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row row--15">
                      <div className="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
                        <h3 className="rbt-short-title">For Individual Growth</h3>
                        <ul className="mega-menu-item">
                          <li>
                            <Link to="/services/cyt-tands">
                              Personalized Care
                            </Link>
                          </li>


                        </ul>
                      </div>
                      <div className="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
                        <h3 className="rbt-short-title">For Community & Growth</h3>
                        <ul className="mega-menu-item">
                          <li>
                            <Link className="" to="course-card-3">
                              Educational Institutions
                            </Link>
                          </li>
                          <li>
                            <Link className="" to="course-masonry">
                              Corporate Needs
                            </Link>
                          </li>

                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <ul className="nav-quick-access">
                          <li>
                            <Link to="#">
                              <i className="feather-folder-minus"></i>
                              Terms of services
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="feather-folder-minus"></i>
                              Privecy policies
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>



              <li className="position-static">
                <Link to={"/about-us"} style={{ cursor: "pointer" }}>
                  About us
                </Link>
              </li>

              <li className="position-static">
                <Link
                  to={"/contact-us"}
                  style={{ cursor: "pointer" }}
                >
                  Contact us
                </Link>
              </li>

              <li className="position-static">
                <Link to={"/faqs"} className="" style={{ cursor: "pointer" }}>
                  Faqs
                </Link>
              </li>


            </ul>
          </nav>
          <div className="mobile-menu-bottom">
            <div className="rbt-btn-wrapper mb--20">
              <Link
                className="rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 justify-content-center text-center"
                to="/login"
                style={{ cursor: "pointer" }}
              >
                <span>Get Started</span>
              </Link>
            </div>
            <div className="social-share-wrapper">
              <span className="rbt-short-title d-block">Follow ChooseYourTherapist</span>
              <ul className="social-icon social-default transparent-with-border justify-content-start mt--20">
                <li>
                  <Link to="https://www.facebook.com/cyt8113">
                    <i className="feather-facebook"></i>
                  </Link>
                </li>

                <li>
                  <Link to="https://www.instagram.com/choose.your.therapist">
                    <i className="feather-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://www.linkedin.com/company/choose-your-therapist">
                    <i className="feather-linkedin"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
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
              <div className="rbt-main-navigation d-none d-xl-block">
                <nav className="mainmenu-nav">
                  <ul className="mainmenu">
                    <li className="position-static">
                      <Link to={"/"} className="" style={{ cursor: "pointer" }}>
                        Home
                      </Link>
                    </li>
                    <li className="has-dropdown has-menu-child-item">
                      <Link to={"/view-all-therapist"} style={{ cursor: "pointer" }}>
                        Therapist Directory
                      </Link>


                    </li>
                    <li className="has-dropdown has-menu-child-item">
                      <Link to={""} style={{ cursor: "pointer" }}>
                        Mind Matters Programs
                      </Link>


                    </li>
                    <li className="has-dropdown has-menu-child-item">
                      <Link className="" to="#">
                        About<i className="feather-chevron-down"></i>
                      </Link>
                      <ul className="submenu">
                        <li className="has-dropdown">
                          <Link to={"/about-us"} style={{ cursor: "pointer" }}>
                            About us
                          </Link>
                        </li>

                        <li className="has-dropdown">
                          <Link
                            to={"/contact-us"}
                            style={{ cursor: "pointer" }}
                          >
                            Contact us
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="position-static">
                      <Link
                        className="service-menu-parent"
                        to="/faqs"
                        style={{ cursor: "pointer" }}
                      >
                        Faqs
                      </Link>
                    </li>

                  </ul>
                </nav>
              </div>
              <div className="header-right">
                <ul className="quick-access">
                  <li className="access-icon">
                    <button
                      className={
                        search
                          ? "search-trigger-active rbt-round-btn open"
                          : "search-trigger-active rbt-round-btn"
                      }
                      onClick={() => setSearch(search !== true)}
                    >
                      <i className="feather-search"></i>
                    </button>
                  </li>

                  <li className="account-access rbt-user-wrapper d-none d-xl-block">

                    {userType === 1 || userType === 2 ? (
                      <Link
                        to={userType === 1 ? "/my-dashboard" : "/therapist-dashboard"}
                        className="service-menu-parent"
                      >
                        <i className="feather-user"></i>&nbsp; {userType === 1 ? "Profile" : "Therapist Profile"}
                      </Link>
                    ) : (
                      <Link to="/login" className="service-menu-parent">
                        <i className="feather-user"></i>&nbsp;Sign In/Sign Up
                      </Link>
                    )}
                  </li>
                </ul>
                <div className="rbt-btn-wrapper d-none d-xl-block">
                  <Link
                    className="rbt-btn rbt-marquee-btn marquee-auto btn-border-gradient radius-round btn-sm hover-transform-none"
                    to="/therapist-registration"
                  >
                    <span data-text="Are Your a Therapist?">Are You a Therapist?</span>
                  </Link>
                </div>
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
          <div
            className={
              search ? "rbt-search-dropdown active" : "rbt-search-dropdown"
            }
          >
            <div className="wrapper">
              <div className="row">
                <div className="col-lg-12">
                  <form action="#">
                    <input
                      type="text"
                      placeholder="What are you looking for?"
                    />
                    <div className="submit-btn">
                      <Link
                        className="rbt-btn btn-gradient btn-md"
                        to="index.html"
                      >
                        Search
                      </Link>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>

        </div>
      </header>
    </>
  );
}
