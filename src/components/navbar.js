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

    // Google Tag Integration
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-GFBR3SJQT3";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-GFBR3SJQT3');
    `;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  const GREEN_STRIP_HEIGHT = 35; // desktop

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

              {/* Desktop Navigation */}
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
                        <i className="feather-user"></i> {userType === 1 ? "Profile" : "Therapist Profile"}
                      </Link>
                    ) : (
                      <Link to="/login" className="service-menu-parent">
                        <i className="feather-user"></i> Sign In/Sign Up
                      </Link>
                    )}
                  </li>
                </ul>
                <div className="rbt-btn-wrapper d-none d-xl-block">
                  <Link
                    className="rbt-btn rbt-marquee-btn marquee-auto btn-border-gradient radius-round btn-sm hover-transform-none"
                    to="/therapist-registration"
                  >
                    <span data-text="Are You a Therapist?">Are You a Therapist?</span>
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
          <div className="mobile-menu-header">
            <button className="close-menu" onClick={() => setShow(false)}>
              <i className="feather-x"></i>
            </button>
          </div>
          <ul className="mobile-menu">
            <li><Link to="/" onClick={() => setShow(false)}>Home</Link></li>
            <li><Link to="/view-all-therapist" onClick={() => setShow(false)}>Therapist Directory</Link></li>
            <li><Link to="#" onClick={() => setShow(false)}>Mind Matters Programs</Link></li>
            <li className="has-dropdown">
              <Link to="#" onClick={() => setShow(false)}>About <i className="feather-chevron-down"></i></Link>
              <ul className="submenu">
                <li><Link to="/about-us" onClick={() => setShow(false)}>About us</Link></li>
                <li><Link to="/contact-us" onClick={() => setShow(false)}>Contact us</Link></li>
              </ul>
            </li>
            <li><Link to="/faqs" onClick={() => setShow(false)}>Faqs</Link></li>
            <li>
              {userType === 1 || userType === 2 ? (
                <Link to={userType === 1 ? "/my-dashboard" : "/therapist-dashboard"} onClick={() => setShow(false)}>
                  {userType === 1 ? "Profile" : "Therapist Profile"}
                </Link>
              ) : (
                <Link to="/login" onClick={() => setShow(false)}>Sign In/Sign Up</Link>
              )}
            </li>
            <li>
              <Link to="/therapist-registration" onClick={() => setShow(false)}>Are You a Therapist?</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
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
        .top-strip-desktop .left-info { display: flex; align-items: center; }
        .top-strip-desktop .divider { margin: 0 10px; }
        .top-strip-desktop .right-info { text-align: right; }
        @media (max-width: 991px) { .top-strip-desktop { display: none; } }

        .rbt-header.rbt-header-10 {
          position: sticky;
          top: ${GREEN_STRIP_HEIGHT}px;
          z-index: 10001;
          background: #fff;
          box-shadow: 0 2px 20px rgba(0,0,0,0.08);
          border-bottom: 1px solid #f0f0f0;
        }
        @media (max-width: 991px) { .rbt-header.rbt-header-10 { top: 0; } }

        /* Mobile Menu */
        .popup-mobile-menu {
          position: fixed;
          top: 0;
          left: -100%;
          width: 80%;
          height: 100%;
          background: #fff;
          z-index: 10010;
          overflow-y: auto;
          transition: all 0.3s ease-in-out;
          box-shadow: 2px 0 12px rgba(0,0,0,0.2);
        }
        .popup-mobile-menu.active { left: 0; }
        .mobile-menu-header { display: flex; justify-content: flex-end; padding: 15px; border-bottom: 1px solid #eee; }
        .mobile-menu { list-style: none; padding: 20px; }
        .mobile-menu li { margin-bottom: 15px; }
        .mobile-menu li a { text-decoration: none; color: #333; font-weight: 500; }
        .mobile-menu .submenu { padding-left: 15px; list-style: disc; }
      `}</style>
    </>
  );
}
