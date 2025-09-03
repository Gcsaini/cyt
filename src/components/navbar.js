import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import logo1 from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import TherypyImg from "../assets/img/therapy (1).png";
import SupportImg from "../assets/img/support-groups.png";
import StudentImg from "../assets/img/students.png";
import WorkplaceImg from "../assets/img/workplace.png";
import ActivitesImg from "../assets/img/activites.png";
import AssessmentImg from "../assets/img/assessments.png";
import ProjectsImg from "../assets/img/projects.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageTag from "../utils/image-tag";
import { getDecodedToken, getToken } from "../utils/jwt";
export default function App() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [show, setShow] = React.useState(false);
  const [about, setAbout] = React.useState();
  const [service, setService] = React.useState();
  const [search, setSearch] = React.useState();
  const [cart, setCart] = React.useState();
  const [isToken, setIsToken] = React.useState(false);
  const [isUser, setIsUser] = React.useState(false);

  useEffect(() => {
    const data = getToken();
    if (data) {
      setIsToken(true);
      const userData = getDecodedToken();
      if (userData.role === 1) {
        setIsUser(false);
      } else {
        setIsUser(true);
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
                      <Link to={"/view-all-therapist"}style={{ cursor: "pointer" }}>
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
              
              <li className="with-megamenu has-menu-child-item">
                <Link
                  className={about ? "open" : ""}
                  onClick={() => setAbout(about !== true)}
                >
                   About<i className="feather-chevron-down"></i>
                </Link>
              
                      <ul className="submenu">
                        <li className="mega-menu-item">
                          <Link to={"/about-us"} style={{ cursor: "pointer" }}>
                            About us
                          </Link>
                        </li>

                        <li className="mega-menu-item">
                          <Link
                            to={"/contact-us"}
                            style={{ cursor: "pointer" }}
                          >
                            Contact us
                          </Link>
                        </li>
                      </ul>
                    </li> <li className="position-static">
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
                to="index.html"
              >
                <span>Enroll Now</span>
              </Link>
            </div>
            <div className="social-share-wrapper">
              <span className="rbt-short-title d-block">Find With Us</span>
              <ul className="social-icon social-default transparent-with-border justify-content-start mt--20">
                <li>
                  <Link to="https://www.facebook.com/">
                    <i className="feather-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://www.twitter.com/">
                    <i className="feather-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com/">
                    <i className="feather-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://www.linkdin.com/">
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
                   
                    {/* <li className="with-megamenu has-menu-child-item">
                      <Link className="" to="index.html#">
                        Services<i className="feather-chevron-down"></i>
                      </Link>
                      <div className="rbt-megamenu grid-item-2">
                        <div className="wrapper">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="mega-top-banner">
                                <div className="content">
                                  <h4 className="title">Developer hub</h4>
                                  <p className="description">
                                    Start building fast, with code samples, key
                                    resources and more.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row row--15">
                            <div className="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
                              <h3 className="rbt-short-title">Our Solutions</h3>
                              <ul className="mega-menu-item">
                                <li>
                                  <button
                                    className="service-menu"
                                    onClick={() => {
                                      handleClick("/services/cyt-tands");
                                    }}
                                    style={{ cursor: "pointer" }}
                                  >
                                    Therapy & Counselling
                                  </button>
                                </li>
                                <li>
                                  <button
                                    className="service-menu"
                                    onClick={() => {
                                      handleClick("/services/cyt-rs");
                                    }}
                                  >
                                    Therapeutic Activities
                                  </button>
                                </li>
                                <li>
                                  <button
                                    className="service-menu"
                                    onClick={() => {
                                      handleClick("/services/cyt-tands");
                                    }}
                                    style={{ cursor: "pointer" }}
                                  >
                                    Peer Support Groups
                                  </button>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
                              <h3 className="rbt-short-title">Our Solutions</h3>
                              <ul className="mega-menu-item">
                                <li>
                                  <button
                                    className="service-menu"
                                    onClick={() => {
                                      handleClick("/services/cyt-tands");
                                    }}
                                    style={{ cursor: "pointer" }}
                                  >
                                    Student Based Orientations
                                  </button>
                                </li>
                                <li>
                                  <button
                                    className="service-menu"
                                    onClick={() => {
                                      handleClick("/services/cyt-tands");
                                    }}
                                    style={{ cursor: "pointer" }}
                                  >
                                    Workplace Based Training
                                  </button>
                                </li>
                                <li>
                                  <button
                                    className="service-menu"
                                    onClick={() => {
                                      handleClick("/services/cyt-tands");
                                    }}
                                    style={{ cursor: "pointer" }}
                                  >
                                    Assessments
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <ul className="nav-quick-access">
                                <li>
                                  <button
                                    className="service-menu"
                                    onClick={() => {
                                      handleClick("/services/cyt-tands");
                                    }}
                                    style={{ cursor: "pointer" }}
                                  >
                                    <i className="feather-folder-minus"></i>{" "}
                                    Terms of services
                                  </button>
                                </li>
                                <li>
                                  <button
                                    className="service-menu"
                                    onClick={() => {
                                      handleClick("/services/cyt-tands");
                                    }}
                                    style={{ cursor: "pointer" }}
                                  >
                                    {" "}
                                    <i className="feather-folder-minus"></i>
                                    Privecy policies
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li> 
                    <li className="position-static">
                      <Link
                        className="service-menu-parent"
                        to="/plans"
                        style={{ cursor: "pointer" }}
                      >
                        Service Plans
                      </Link>
                    </li>*/}
                    <li className="has-dropdown has-menu-child-item">
                      <Link to={"/view-all-therapist"}style={{ cursor: "pointer" }}>
                        Therapist Directory
                      </Link>
                      
                     
                    </li>
                    <li className="has-dropdown has-menu-child-item">
                      <Link className="" to="#">
                      Services<i className="feather-chevron-down"></i>
                      </Link>
                      <ul className="submenu">
                        <li className="has-dropdown">
                          <Link to={"/Support Groups"} style={{ cursor: "pointer" }}>
                      For Personalized Wellbeing
                          </Link>
                        </li>

                        <li className="has-dropdown">
                          <Link
                            to={"/Student Orientations"}
                            style={{ cursor: "pointer" }}
                          >
                            For Educational Institutions 
                          </Link>
                        </li>
                        <li className="has-dropdown">
                          <Link
                            to={"/Student Orientations"}
                            style={{ cursor: "pointer" }}
                          >
                            For Corporate Needs 
                          </Link>
                        </li>
                        
                      
                       
                      </ul>
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
                    {/* <li className="position-static">
                      <button
                        className="service-menu-parent"
                        onClick={() => handleClick("/blogs")}
                        style={{ cursor: "pointer" }}
                      >
                        Blogs
                      </button>
                    </li> */}
                    <li className="position-static">
                      <Link
                        className="service-menu-parent"
                        to="/faqs"
                        style={{ cursor: "pointer" }}
                      >
                        Faqs
                      </Link>
                    </li>
                      <li className="position-static">
                      <Link
                        className="service-menu-parent"
                        to="/more"
                        style={{ cursor: "pointer" }}
                      >
                       More
                      </Link>
                    </li>
                    {/* <li className="position-static">
                      <button
                        className="service-menu-parent"
                        to={"#"}
                        onClick={() => handleClick("/join-us")}
                      >
                        Join us
                      </button>
                    </li> */}
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
                  {/* <li className="access-icon rbt-mini-cart">
                    <button
                      className="rbt-cart-sidenav-activation rbt-round-btn"
                      onClick={() => setCart(true)}
                    >
                      <i className="feather-shopping-cart"></i>
                      <span className="rbt-cart-count">1</span>
                    </button>
                  </li> */}
                  <li className="account-access rbt-user-wrapper d-none d-xl-block">
                    {isToken ? (
                      isUser ? (
                        <Link
                          to="/my-dashboard"
                          className="service-menu-parent"
                        >
                          <i className="feather-user"></i>&nbsp;Profile
                        </Link>
                      ) : (
                        <Link
                          to="/therapist-dashboard"
                          className="service-menu-parent"
                        >
                          <i className="feather-user"></i>&nbsp;Profile
                        </Link>
                      )
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
              <div className="row" style={{ marginBottom: 80 }}>
                <div className="rbt-categories-area bg-color-white">
                  <div className="container">
                    <Swiper
                      style={{
                        "--swiper-pagination-bottom": 0,
                        height: isMobile || isTablet ? 220 : 320,
                      }}
                      spaceBetween={50}
                      breakpoints={{
                        560: {
                          slidesPerView: 1,
                          spaceBetween: 40,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 30,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 20,
                        },
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      modules={[Autoplay, Pagination]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <div className="col-12">
                          <Link
                            className="rbt-cat-box rbt-cat-box-1 text-center"
                            to="course-filter-one-toggle/%5bcourseId%5d"
                          >
                            <div className="inner">
                              <div className="icons">
                                <ImageTag
                                  alt="Icons"
                                  height={"80"}
                                  src={TherypyImg}
                                />
                              </div>
                              <div className="content">
                                <h5 className="title">Therapy Session</h5>
                                <div className="read-more-btn">
                                  <span className="rbt-btn-link">
                                    3 Plans Active
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="col-12">
                          <Link
                            className="rbt-cat-box rbt-cat-box-1 text-center"
                            to="course-filter-one-toggle/%5bcourseId%5d-3"
                          >
                            <div className="inner">
                              <div className="icons">
                                <ImageTag
                                  alt="Icons"
                                  height={"80"}
                                  src={SupportImg}
                                />
                              </div>
                              <div className="content">
                                <h5 className="title">Peer Support Groups</h5>
                                <div className="read-more-btn">
                                  <span className="rbt-btn-link">
                                    Coming Soon
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="col-12">
                          <Link
                            className="rbt-cat-box rbt-cat-box-1 text-center"
                            to="course-filter-one-toggle/%5bcourseId%5d-4"
                          >
                            <div className="inner">
                              <div className="icons">
                                <ImageTag
                                  alt="Icons"
                                  height={"80"}
                                  src={StudentImg}
                                />
                              </div>
                              <div className="content">
                                <h5 className="title">
                                  Student based Orientations
                                </h5>
                                <div className="read-more-btn">
                                  <span className="rbt-btn-link">
                                    Coming Soon
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="col-12">
                          <Link
                            className="rbt-cat-box rbt-cat-box-1 text-center"
                            to="course-filter-one-toggle/%5bcourseId%5d-4"
                          >
                            <div className="inner">
                              <div className="icons">
                                <ImageTag
                                  alt="Icons"
                                  height={"80"}
                                  src={StudentImg}
                                />
                              </div>
                              <div className="content">
                                <h5 className="title">
                                  Student based Orientations
                                </h5>
                                <div className="read-more-btn">
                                  <span className="rbt-btn-link">
                                    Coming Soon
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="col-12">
                          <Link
                            className="rbt-cat-box rbt-cat-box-1 text-center"
                            to="course-filter-one-toggle/%5bcourseId%5d-2"
                          >
                            <div className="inner">
                              <div className="icons">
                                <ImageTag
                                  alt="Icons"
                                  height={"80"}
                                  src={WorkplaceImg}
                                />
                              </div>
                              <div className="content">
                                <h5 className="title">
                                  Workplace based Training
                                </h5>
                                <div className="read-more-btn">
                                  <span className="rbt-btn-link">
                                    Coming Soon
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="col-12">
                          <Link
                            className="rbt-cat-box rbt-cat-box-1 text-center"
                            to="course-filter-one-toggle/%5bcourseId%5d-5"
                          >
                            <div className="inner">
                              <div className="icons">
                                <ImageTag
                                  alt="Icons"
                                  height={"80"}
                                  src={ActivitesImg}
                                />
                              </div>
                              <div className="content">
                                <h5 className="title">Therapeutic Activites</h5>
                                <div className="read-more-btn">
                                  <span className="rbt-btn-link">
                                    Coming Soon
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="col-12">
                          <Link
                            className="rbt-cat-box rbt-cat-box-1 text-center"
                            to="course-filter-one-toggle/%5bcourseId%5d-6"
                          >
                            <div className="inner">
                              <div className="icons">
                                <ImageTag
                                  alt="Icons"
                                  height={"80"}
                                  src={AssessmentImg}
                                />
                              </div>
                              <div className="content">
                                <h5 className="title">Assessments</h5>
                                <div className="read-more-btn">
                                  <span className="rbt-btn-link">
                                    Coming Soon
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="col-12">
                          <Link
                            className="rbt-cat-box rbt-cat-box-1 text-center"
                            to="course-filter-one-toggle"
                          >
                            <div className="inner">
                              <div className="icons">
                                <ImageTag
                                  alt="Icons"
                                  height={"80"}
                                  src={ProjectsImg}
                                />
                              </div>
                              <div className="content">
                                <h5 className="title">CYT Projects</h5>
                                <div className="read-more-btn">
                                  <span className="rbt-btn-link">
                                    Coming Soon
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </SwiperSlide>
                    </Swiper>

                    <div className="row g-5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cart ? "cart-sidenav-menu-active" : "rbt-cart-side-menu"}
          >
            <div
              className={
                cart
                  ? "rbt-cart-side-menu side-menu-active"
                  : "rbt-cart-side-menu"
              }
            >
              <div className="inner-wrapper">
                <div className="inner-top">
                  <div className="content">
                    <div className="title">
                      <h4 className="title mb--0">Your shopping cart</h4>
                    </div>
                    <div className="rbt-btn-close" id="btn_sideNavClose">
                      <button
                        className="minicart-close-button rbt-round-btn"
                        onClick={() => setCart(false)}
                      >
                        <i className="feather-x"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <nav className="side-nav w-100">
                  <div className="rbt-minicart-wrapper"></div>
                </nav>
                <div className="rbt-minicart-footer">
                  <hr className="mb--0" />
                  <div className="rbt-cart-subttotal">
                    <p className="subtotal">
                      <strong>Subtotal:</strong>
                    </p>
                    <p className="price">$0</p>
                  </div>
                  <hr className="mb--0" />
                  <div className="rbt-minicart-bottom mt--20">
                    <div className="view-cart-btn">
                      <Link
                        className="rbt-btn btn-border icon-hover w-100 text-center"
                        to="/cart"
                      >
                        <span className="btn-text">View Cart</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                    <div className="checkout-btn mt--20">
                      <Link
                        className="rbt-btn btn-gradient icon-hover w-100 text-center"
                        to="/checkout"
                      >
                        <span className="btn-text">Checkout</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link
              className="close_side_menu"
              onClick={() => setCart(false)}
            ></Link>
          </div>
        </div>
      </header>
    </>
  );
}
