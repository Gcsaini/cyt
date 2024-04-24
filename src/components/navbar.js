import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import logo1 from "../assets/img/logo.png";
import Avatar from "../assets/img/avatar77be.jpg";
import LazyImage from "../utils/lazy-image";
import { useNavigate } from "react-router-dom";
import TherypyImg from "../assets/img/therapy (1).png";
import SupportImg from "../assets/img/support-groups.png";
import StudentImg from "../assets/img/students.png";
import WorkplaceImg from "../assets/img/workplace.png";
import ActivitesImg from "../assets/img/activites.png";
import AssessmentImg from "../assets/img/assessments.png";
import ProjectsImg from "../assets/img/projects.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import auth from "../utils/auth";
export default function App() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [user, setUser] = React.useState();
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);
  const [about, setAbout] = React.useState();
  const [service, setService] = React.useState();
  const [search, setSearch] = React.useState();
  const [cart, setCart] = React.useState();
  function handleClick(nav) {
    navigate(nav);
  }
  React.useEffect(() => {
    const user = auth.getUserInfo();
    if (user) {
      setUser(user);
    }
  }, []);
  return (
    <>
      <div className={show ? "popup-mobile-menu active" : "popup-mobile-menu"}>
        <div className="inner-wrapper">
          <div className="inner-top">
            <div className="content">
              <div className="logo">
                <a href="index.html">
                  <img
                    alt="Education Logo Images"
                    loading="lazy"
                    width="137"
                    height="45"
                    style={{ color: "transparent" }}
                    src={logo1}
                  />
                </a>
              </div>
              <div className="rbt-btn-close" onClick={() => setShow(false)}>
                <button className="close-button rbt-round-btn">
                  <i className="feather-x"></i>
                </button>
              </div>
            </div>
            <p className="description">
              Histudy is a education website template. You can customize all.
            </p>
            <ul className="navbar-top-left rbt-information-list justify-content-start">
              <li>
                <a href="mailto:hello@example.com">
                  <i className="feather-mail"></i>example@gmail.com
                </a>
              </li>
              <li>
                <a href="index.html#">
                  <i className="feather-phone"></i>(302) 555-0107
                </a>
              </li>
            </ul>
          </div>
          <nav className="mainmenu-nav">
            <ul className="mainmenu">
              <li className="position-static">
                <a
                  className=""
                  onClick={() => {
                    handleClick("/");
                  }}
                  style={{ cursor: "pointer" }}
                  href={"#"}
                >
                  Home<i className="feather-chevron-down"></i>
                </a>
              </li>
              <li className="has-dropdown has-menu-child-item">
                <a
                  href={"#"}
                  className={about ? "open" : ""}
                  onClick={() => setAbout(about !== true)}
                >
                  About<i className="feather-chevron-down"></i>
                </a>
                <ul className={about ? "submenu active d-block" : "submenu"}>
                  <li>
                    <a
                      href={"#"}
                      onClick={() => {
                        handleClick("/about-us");
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href={"#"}
                      onClick={() => handleClick("/join-us")}
                      style={{ cursor: "pointer" }}
                    >
                      Join us
                    </a>
                  </li>
                  <li>
                    <a
                      href={"#"}
                      onClick={() => handleClick("/contact-us")}
                      style={{ cursor: "pointer" }}
                    >
                      Contact us
                    </a>
                  </li>
                </ul>
              </li>
              <li className="with-megamenu has-menu-child-item">
                <a
                  href={"#"}
                  className={service ? "open" : ""}
                  onClick={() => setService(service !== true)}
                >
                  Services<i className="feather-chevron-down"></i>
                </a>
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
                              onClick={() => {
                                handleClick("/services?id=cyt-tands");
                              }}
                              style={{ cursor: "pointer" }}
                            >
                              Therapy & Counselling
                            </button>
                          </li>
                          <li>
                            <a className="" href="/services?id=cyt-rs">
                              Therapeutic Activities
                            </a>
                          </li>
                          <li>
                            <a className="" href="course-filter-two-toggle">
                              Peer Support Groups
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
                        <h3 className="rbt-short-title">Our Solutions</h3>
                        <ul className="mega-menu-item">
                          <li>
                            <a className="" href="course-card-3">
                              Student Based Orientations
                            </a>
                          </li>
                          <li>
                            <a className="" href="course-masonry">
                              Workplace Based Training
                            </a>
                          </li>
                          <li>
                            <a className="" href="course-with-sidebar">
                              Assessments
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <ul className="nav-quick-access">
                          <li>
                            <a href="index.html#">
                              <i className="feather-folder-minus"></i>
                              Terms of services
                            </a>
                          </li>
                          <li>
                            <a href="index.html#">
                              <i className="feather-folder-minus"></i>
                              Privecy policies
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="position-static">
                <a
                  href={"#"}
                  className=""
                  onClick={() => handleClick("/plans")}
                  style={{ cursor: "pointer" }}
                >
                  Plans<i className="feather-chevron-down"></i>
                </a>
              </li>

              <li className="position-static">
                <a
                  href={"#"}
                  className=""
                  onClick={() => handleClick("/blogs")}
                  style={{ cursor: "pointer" }}
                >
                  Blogs
                </a>
              </li>
              <li className="position-static">
                <a
                  href={"#"}
                  className=""
                  onClick={() => handleClick("/faqs")}
                  style={{ cursor: "pointer" }}
                >
                  Faqs
                </a>
              </li>
            </ul>
          </nav>
          <div className="mobile-menu-bottom">
            <div className="rbt-btn-wrapper mb--20">
              <a
                className="rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 justify-content-center text-center"
                href="index.html#"
              >
                <span>Enroll Now</span>
              </a>
            </div>
            <div className="social-share-wrapper">
              <span className="rbt-short-title d-block">Find With Us</span>
              <ul className="social-icon social-default transparent-with-border justify-content-start mt--20">
                <li>
                  <a href="https://www.facebook.com/">
                    <i className="feather-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/">
                    <i className="feather-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <i className="feather-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkdin.com/">
                    <i className="feather-linkedin"></i>
                  </a>
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
                    <a href="index.html">
                      <LazyImage
                        alt="Education Logo Images"
                        dim={"50-152"}
                        src={logo1}
                      />
                    </a>
                  </div>
                </div>
                <div className="header-info d-none d-lg-block"></div>
              </div>
              <div className="rbt-main-navigation d-none d-xl-block">
                <nav className="mainmenu-nav">
                  <ul className="mainmenu">
                    <li className="position-static">
                      <a
                        href={"#"}
                        className=""
                        onClick={() => {
                          handleClick("/");
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        Home
                      </a>
                    </li>
                    <li className="has-dropdown has-menu-child-item">
                      <a className="" href="index.html#">
                        About<i className="feather-chevron-down"></i>
                      </a>
                      <ul className="submenu">
                        <li className="has-dropdown">
                          <a
                            href={"#"}
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              handleClick("/about-us");
                            }}
                          >
                            About us
                          </a>
                        </li>
                        <li className="has-dropdown">
                          <a
                            href={"#"}
                            onClick={() => handleClick("/join-us")}
                            style={{ cursor: "pointer" }}
                          >
                            Join us
                          </a>
                        </li>
                        <li className="has-dropdown">
                          <a
                            href={"#"}
                            onClick={() => handleClick("/contact-us")}
                            style={{ cursor: "pointer" }}
                          >
                            Contact us
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="with-megamenu has-menu-child-item">
                      <a className="" href="index.html#">
                        Services<i className="feather-chevron-down"></i>
                      </a>
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
                                      handleClick("/services?id=cyt-tands");
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
                                      handleClick("/services?id=cyt-tands");
                                    }}
                                  >
                                    Therapeutic Activities
                                  </button>
                                </li>
                                <li>
                                  <button
                                    className="service-menu"
                                    onClick={() => {
                                      handleClick("/services?id=cyt-tands");
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
                                      handleClick("/services?id=cyt-tands");
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
                                      handleClick("/services?id=cyt-tands");
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
                                      handleClick("/services?id=cyt-tands");
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
                                      handleClick("/services?id=cyt-tands");
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
                                      handleClick("/services?id=cyt-tands");
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
                      <button
                        className="service-menu-parent"
                        onClick={() => handleClick("/plans")}
                      >
                        Plans
                      </button>
                    </li>

                    <li className="position-static">
                      <button
                        className="service-menu-parent"
                        onClick={() => handleClick("/blogs")}
                      >
                        Blogs
                      </button>
                    </li>
                    <li className="position-static">
                      <button
                        className="service-menu-parent"
                        onClick={() => handleClick("/faqs")}
                      >
                        Faqs
                      </button>
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
                  <li className="access-icon rbt-mini-cart">
                    <button
                      className="rbt-cart-sidenav-activation rbt-round-btn"
                      onClick={() => setCart(true)}
                    >
                      <i className="feather-shopping-cart"></i>
                      <span className="rbt-cart-count">1</span>
                    </button>
                  </li>
                  <li className="account-access rbt-user-wrapper d-none d-xl-block">
                    {user ? (
                      <button className="service-menu-parent">
                        <i className="feather-user"></i> &nbsp;Profile
                      </button>
                    ) : (
                      <button
                        onClick={() => handleClick("/auth/login")}
                        className="service-menu-parent"
                      >
                        <i className="feather-user"></i>&nbsp;Login
                      </button>
                    )}{" "}
                    {user && (
                      <div className="rbt-user-menu-list-wrapper">
                        <div className="inner">
                          <div className="rbt-admin-profile">
                            <div className="admin-thumbnail">
                              <LazyImage
                                alt="User"
                                dim={"43"}
                                src={user.profile}
                              />
                            </div>
                            <div className="admin-info">
                              <span className="name">{user.name}</span>
                              <a
                                className="rbt-btn-link color-primary"
                                href="instructor/instructor-profile"
                              >
                                View Profile
                              </a>
                            </div>
                          </div>
                          <ul className="user-list-wrapper">
                            <li>
                              <a href="instructor/instructor-dashboard">
                                <i className="feather-home"></i>
                                <span>My Dashboard</span>
                              </a>
                            </li>
                            <li>
                              <a href="index.html#">
                                <i className="feather-bookmark"></i>
                                <span>Bookmark</span>
                              </a>
                            </li>
                            <li>
                              <a href="instructor/instructor-enrolled-course">
                                <i className="feather-shopping-bag"></i>
                                <span>Enrolled Courses</span>
                              </a>
                            </li>
                            <li>
                              <a href="instructor/instructor-wishlist">
                                <i className="feather-heart"></i>
                                <span>Wishlist</span>
                              </a>
                            </li>

                            <li>
                              <a href="instructor/instructor-order-history">
                                <i className="feather-clock"></i>
                                <span>Order History</span>
                              </a>
                            </li>
                          </ul>

                          <hr className="mt--10 mb--10" />
                          <ul className="user-list-wrapper">
                            <li>
                              <a href="instructor/instructor-settings">
                                <i className="feather-settings"></i>
                                <span>Settings</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={() => {
                                  auth.clearAppStorage();
                                  navigate("/auth/login");
                                }}
                              >
                                <i className="feather-log-out"></i>
                                <span>Logout</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>
                  <li className="access-icon rbt-user-wrapper d-block d-xl-none">
                    <a className="rbt-round-btn" href="index.html#">
                      <i className="feather-user"></i>
                    </a>
                    <div className="rbt-user-menu-list-wrapper">
                      <div className="inner">
                        <div className="rbt-admin-profile">
                          <div className="admin-thumbnail">
                            <LazyImage alt="User" dim={"43"} src={Avatar} />
                          </div>
                          <div className="admin-info">
                            <span className="name">Rafi Dev</span>
                            <a
                              className="rbt-btn-link color-primary"
                              href="instructor/instructor-profile"
                            >
                              View Profile
                            </a>
                          </div>
                        </div>
                        <ul className="user-list-wrapper">
                          <li>
                            <a href="instructor/instructor-dashboard">
                              <i className="feather-home"></i>
                              <span>My Dashboard</span>
                            </a>
                          </li>
                          <li>
                            <a href="index.html#">
                              <i className="feather-bookmark"></i>
                              <span>Bookmark</span>
                            </a>
                          </li>
                          <li>
                            <a href="instructor/instructor-enrolled-course">
                              <i className="feather-shopping-bag"></i>
                              <span>Enrolled Courses</span>
                            </a>
                          </li>
                          <li>
                            <a href="instructor/instructor-wishlist">
                              <i className="feather-heart"></i>
                              <span>Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a href="instructor/instructor-reviews">
                              <i className="feather-star"></i>
                              <span>Reviews</span>
                            </a>
                          </li>
                          <li>
                            <a href="instructor/404">
                              <i className="feather-list"></i>
                              <span>My Quiz Attempts</span>
                            </a>
                          </li>
                          <li>
                            <a href="instructor/instructor-order-history">
                              <i className="feather-clock"></i>
                              <span>Order History</span>
                            </a>
                          </li>
                          <li>
                            <a href="instructor/instructor-quiz-attempts">
                              <i className="feather-message-square"></i>
                              <span>Question &amp; Answer</span>
                            </a>
                          </li>
                        </ul>
                        <hr className="mt--10 mb--10" />
                        <ul className="user-list-wrapper">
                          <li>
                            <a href="index.html#">
                              <i className="feather-book-open"></i>
                              <span>Getting Started</span>
                            </a>
                          </li>
                        </ul>
                        <hr className="mt--10 mb--10" />
                        <ul className="user-list-wrapper">
                          <li>
                            <a href="instructor/instructor-settings">
                              <i className="feather-settings"></i>
                              <span>Settings</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              onClick={() => {
                                auth.clearAppStorage();
                                navigate("/auth/login");
                              }}
                            >
                              <i className="feather-log-out"></i>
                              <span>Logout</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="rbt-btn-wrapper d-none d-xl-block">
                  <a
                    className="rbt-btn rbt-marquee-btn marquee-auto btn-border-gradient radius-round btn-sm hover-transform-none"
                    href="index.html#"
                  >
                    <span data-text="Enroll Now">Enroll Now</span>
                  </a>
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
                      <a
                        className="rbt-btn btn-gradient btn-md"
                        href="index.html"
                      >
                        Search
                      </a>
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
                          <a
                            className="rbt-cat-box rbt-cat-box-1 text-center"
                            href="course-filter-one-toggle/%5bcourseId%5d"
                          >
                            <div className="inner">
                              <div className="icons">
                                <LazyImage
                                  alt="Icons"
                                  dim={"80"}
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
                          </a>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="col-12">
                          <a
                            className="rbt-cat-box rbt-cat-box-1 text-center"
                            href="course-filter-one-toggle/%5bcourseId%5d-3"
                          >
                            <div className="inner">
                              <div className="icons">
                                <LazyImage
                                  alt="Icons"
                                  dim={"80"}
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
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="col-12">
                          <a
                            className="rbt-cat-box rbt-cat-box-1 text-center"
                            href="course-filter-one-toggle/%5bcourseId%5d-4"
                          >
                            <div className="inner">
                              <div className="icons">
                                <LazyImage
                                  alt="Icons"
                                  dim={"80"}
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
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="col-12">
                          <a
                            className="rbt-cat-box rbt-cat-box-1 text-center"
                            href="course-filter-one-toggle/%5bcourseId%5d-4"
                          >
                            <div className="inner">
                              <div className="icons">
                                <LazyImage
                                  alt="Icons"
                                  dim={"80"}
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
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="col-12">
                          <a
                            className="rbt-cat-box rbt-cat-box-1 text-center"
                            href="course-filter-one-toggle/%5bcourseId%5d-2"
                          >
                            <div className="inner">
                              <div className="icons">
                                <LazyImage
                                  alt="Icons"
                                  dim={"80"}
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
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="col-12">
                          <a
                            className="rbt-cat-box rbt-cat-box-1 text-center"
                            href="course-filter-one-toggle/%5bcourseId%5d-5"
                          >
                            <div className="inner">
                              <div className="icons">
                                <LazyImage
                                  alt="Icons"
                                  dim={"80"}
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
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="col-12">
                          <a
                            className="rbt-cat-box rbt-cat-box-1 text-center"
                            href="course-filter-one-toggle/%5bcourseId%5d-6"
                          >
                            <div className="inner">
                              <div className="icons">
                                <LazyImage
                                  alt="Icons"
                                  dim={"80"}
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
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="col-12">
                          <a
                            className="rbt-cat-box rbt-cat-box-1 text-center"
                            href="course-filter-one-toggle"
                          >
                            <div className="inner">
                              <div className="icons">
                                <LazyImage
                                  alt="Icons"
                                  dim={"80"}
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
                          </a>
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
                      <a
                        className="rbt-btn btn-border icon-hover w-100 text-center"
                        href="/cart"
                      >
                        <span className="btn-text">View Cart</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                    <div className="checkout-btn mt--20">
                      <a
                        className="rbt-btn btn-gradient icon-hover w-100 text-center"
                        href="/checkout"
                      >
                        <span className="btn-text">Checkout</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="close_side_menu"
              onClick={() => setCart(false)}
              href={"#"}
            ></a>
          </div>
        </div>
      </header>
    </>
  );
}
