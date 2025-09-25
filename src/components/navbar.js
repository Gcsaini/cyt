import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import logo1 from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import ImageTag from "../utils/image-tag";
import { getDecodedToken, getToken } from "../utils/jwt";

export default function App() {
  const [show, setShow] = React.useState(false);
  const [search, setSearch] = React.useState(false);
  const [userType, setUserType] = React.useState(0);

  useEffect(() => {
    const data = getToken();
    if (data) {
      const userData = getDecodedToken();
      if (userData.role === 1) {
        setUserType(2);
      } else {
        setUserType(1);
      }
    }
  }, []);

  const GREEN_STRIP_HEIGHT = 35; // desktop
  const GREEN_STRIP_HEIGHT_MOBILE = 20; // mobile

  return (
    <>
      {/* Top Green Strip */}
      <div className="top-strip">
        <div className="top-strip-desktop">
          <div className="left-info">
            <span><i className="feather-phone"></i> +91-807-775-7951</span>
            <span className="divider">|</span>
            <span><i className="feather-mail"></i> info.cyt@gmail.com</span>
          </div>
          <div className="right-info">
            <span><i className="feather-map-pin"></i> Block D-137, Sector 51, Noida, Uttar Pradesh 201301</span>
          </div>
        </div>
        <div className="top-strip-mobile">
          <span><i className="feather-phone"></i> +91-807-775-7951 | <i className="feather-mail"></i> info.cyt@gmail.com</span>
        </div>
      </div>

      {/* Header */}
      <header className="rbt-header rbt-header-10 header-sticky">
        <div className="rbt-header-wrapper header-space-betwween">
          <div className="container-fluid">
            <div className="mainbar-row rbt-navigation-start align-items-center">
              <div className="header-left rbt-header-content">
                <div className="header-info">
                  <div className="logo">
                    <Link to="/" style={{ cursor: "pointer" }}>
                      <ImageTag alt="Education Logo Images" height={"50"} width={"152"} src={logo1} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Main Navigation */}
              <div className="rbt-main-navigation d-none d-xl-block">
                <nav className="mainmenu-nav">
                  <ul className="mainmenu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/view-all-therapist">Therapist Directory</Link></li>
                    <li><Link to="#">Mind Matters Programs</Link></li>
                    <li className="has-dropdown">
                      <Link to="#">About <i className="feather-chevron-down"></i></Link>
                      <ul className="submenu">
                        <li><Link to="/about-us">About us</Link></li>
                        <li><Link to="/contact-us">Contact us</Link></li>
                      </ul>
                    </li>
                    <li><Link to="/faqs">Faqs</Link></li>
                  </ul>
                </nav>
              </div>

              {/* Header Right */}
              <div className="header-right">
                <ul className="quick-access">
                  <li className="access-icon">
                    <button
                      className={search ? "search-trigger-active rbt-round-btn open" : "search-trigger-active rbt-round-btn"}
                      onClick={() => setSearch(!search)}
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

                {/* Mobile Menu Button */}
                <div className="mobile-menu-bar d-block d-xl-none" onClick={() => setShow(true)}>
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

      {/* Mobile Menu */}
      <div className={show ? "popup-mobile-menu active" : "popup-mobile-menu"}>
        <div className="inner-wrapper">
          {/* existing mobile menu content */}
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        /* Top Strip */
        .top-strip {
          width: 100%;
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 10000;
        }

        .top-strip-desktop {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #2ecc71;
          color: #fff;
          padding: 0 15px;
          font-size: 14px;
          height: ${GREEN_STRIP_HEIGHT}px;
          line-height: ${GREEN_STRIP_HEIGHT}px;
        }
        .top-strip-desktop .left-info {
          display: flex;
          align-items: center;
        }
        .top-strip-desktop .divider {
          margin: 0 10px;
        }
        .top-strip-desktop .right-info {
          text-align: right;
        }

        .top-strip-mobile {
          display: none;
          background-color: #2ecc71;
          height: ${GREEN_STRIP_HEIGHT_MOBILE}px;
          line-height: ${GREEN_STRIP_HEIGHT_MOBILE}px;
          text-align: center;
          font-size: 12px;
          color: #fff;
        }

        @media (max-width: 991px) {
          .top-strip-desktop {
            display: none;
          }
          .top-strip-mobile {
            display: block;
          }
          .rbt-header.rbt-header-10 {
            top: 0; /* make header stick exactly below green strip */
          }
        }

        /* Header */
        .rbt-header.rbt-header-10 {
          position: sticky;
          top: ${GREEN_STRIP_HEIGHT}px;
          z-index: 10001;
          background: #fff;
        }

        .rbt-header-wrapper {
          padding-top: 0;
        }
      `}</style>
    </>
  );
}
