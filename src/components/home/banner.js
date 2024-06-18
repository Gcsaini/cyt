import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import React from "react";
import DeepakImg from "../../assets/img/dpk.jpeg";
import fabiha from "../../assets/img/fabbanner.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageTag from "../../utils/image-tag";
import { TypeAnimation } from "react-type-animation";
export default function Banner() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [hideShow, setHideShow] = React.useState(false);

  function handleClick(nav) {
    navigate(nav);
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      setHideShow((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rbt-banner-area rbt-banner-1">
      <div className="container mt--60">
        <div className="row justify-content-between align-items-center">
          <div
            className="col-lg-8 col-md-12 col-sm-12 col-12"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="content">
              <div className="inner">
                {isMobile ? (
                  <div style={{ marginTop: 15 }}></div>
                ) : (
                  <div
                    className="rbt-new-badge rbt-new-badge-one"
                    style={{ marginTop: isTablet ? 25 : 0 }}
                  >
                    <span className="rbt-new-badge-icon">
                      <PersonSearchIcon
                        sx={{ color: "#228756", fontSize: 30 }}
                      />
                    </span>{" "}
                    Discover mental health experts.
                  </div>
                )}
                <h3
                  className={isMobile ? "banner-text-title" : "title"}
                  style={{ marginTop: isMobile ? 10 : 20 }}
                >
                  Find Therapist Solutions with{" "}
                  <span className="header-caption ms-2">
                    <span className="cd-headline rotate-1">
                      {/* <span className="cd-words-wrapper">
                        <b
                          className={
                            hideShow
                              ? "is-visible theme-gradient"
                              : "is-hidden theme-gradient"
                          }
                        >
                          Personalized & Holistic
                        </b>
                        <b
                          className={
                            hideShow
                              ? "is-hidden theme-gradient"
                              : "is-visible theme-gradient"
                          }
                        >
                          Affordable & Supportive
                        </b>
                      </span> */}
                      <br />
                      <TypeAnimation
                        sequence={[
                          "ChooseYourTherapist.in",
                          1500,
                          "Online/In-Person Mode",
                          1500,
                          "Holistic Approach.",
                          1500,
                      
                         
                        ]}
                        speed={10}
                        style={{ fontSize: "1em" }}
                        repeat={Infinity}
                        deletionSpeed={20}
                        className="theme-gradient"
                      />
                    </span>
                  </span>
                  <br />
                </h3>
                <p className="description">
                  we provide mental health experts every step of the way to your
                  <strong> well-being.</strong>
                </p>
                <div className="rating mb--20">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="slider-btn">
                  <a
                    className="rbt-btn btn-gradient hover-icon-reverse"
                    onClick={() => navigate("/therapist-registration")}
                    style={{ cursor: "pointer" }}
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Therapist Registration</span>
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
          <div
            className="col-lg-4 col-md-12 col-sm-12 col-12"
            style={{
              marginTop: isMobile ? 10 : 60,
              marginBottom: 100,
            }}
          >
            <div className="content">
              <div className=" pb--60 swiper rbt-dot-bottom-center banner-swiper-active">
                <div className="swiper swiper-wrapper swiper-cards swiper-3d swiper-initialized swiper-horizontal swiper-watch-progress">
                  <div className="swiper-wrapper">
                    <Swiper
                      style={{
                        width: "100%",
                      }}
                      breakpoints={{
                        412: {
                          slidesPerView: 1,
                        },
                        680: {
                          slidesPerView: 2,
                          spaceBetween: 30,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 30,
                        },
                        1024: {
                          slidesPerView: 1,
                        },
                      }}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      loop={true}
                      modules={[Autoplay]}
                      className="mySwiper"
                    >
                      <SwiperSlide key={1}>
                        <div className="swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-active">
                          <div className="rbt-card variation-01">
                            <div className="rbt-card-img">
                              <a
                                onClick={() => {
                                  handleClick("/notfound");
                                }}
                                style={{ cursor: "pointer" }}
                              >
                                <ImageTag
                                  alt="Card"
                                  height={"488"}
                                  width={"710"}
                                  src={DeepakImg}
                                />
                              </a>
                            </div>
                            <div className="rbt-card-body">
                              <ul className="rbt-meta">
                                <li style={{ fontSize: 16 }}>
                                  <i className="feather-message-circle"></i>
                                  Hindi, English
                                </li>
                                <li style={{ fontSize: 16 }}>
                                  <i className="feather-map-pin"></i>Uttarakhand
                                </li>
                              </ul>
                              
                              <h4 className="rbt-card-title">
                                <a
                                  onClick={() => {
                                    handleClick("/notfound");
                                  }}
                                  style={{ cursor: "pointer" }}
                                >
                                  Deepak Kumar
                                </a>
                              </h4>
                              <div style={{ marginTop: 7, display: "flex" }}>
                                <span>
                                  <i className="feather-user"></i>
                                </span>
                                <span style={{ fontSize: 16, marginLeft: 5 }}>
                                  Counseling Psychologist
                                </span>
                              </div>

                              <div style={{ marginTop: 5, display: "flex" }}>
                                <span>
                                  <i className="feather-heart"></i>
                                </span>
                                <span style={{ fontSize: 16, marginLeft: 5 }}>
                                  Individual Counselling, Couple Counselling
                          
                                </span>
                              </div>

                              <div
                                style={{
                                  marginTop: 24,
                                  marginBottom: 10,
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <a
                                  className="view-btn view-btn-border"
                                  onClick={() => {
                                    handleClick("/notfound");
                                  }}
                                  style={{
                                    padding: isMobile ? "0 30px" : "0 22px",
                                    cursor: "pointer",
                                  }}
                                >
                                  View Profile
                                </a>
                                <a
                                  className="rbt-btn btn-gradient book-btn"
                                  onClick={() => {
                                    handleClick("/notfound");
                                  }}
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    padding: isTablet ? "0 24px" : "0 30px",
                                  }}
                                >
                                  <span>&nbsp;&nbsp;Book Now&nbsp;&nbsp;</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide key={2}>
                        <div className="swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-active">
                          <div className="rbt-card variation-01">
                            <div className="rbt-card-img">
                              <a
                                onClick={() => {
                                  handleClick("/notfound");
                                }}
                                style={{ cursor: "pointer" }}
                              >
                                <ImageTag
                                  alt="Card"
                                  height={"488"}
                                  width={"710"}
                                  src={fabiha}
                                />
                              </a>
                            </div>
                            <div className="rbt-card-body">
                              <ul className="rbt-meta">
                                <li style={{ fontSize: 16 }}>
                                  <i className="feather-message-circle"></i>
                                  Hindi, English
                                </li>
                                <li style={{ fontSize: 16 }}>
                                  <i className="feather-map-pin"></i>Uttar Pradesh
                                </li>
                              </ul>
                             
                              <h4 className="rbt-card-title">
                                <a
                                  onClick={() => {
                                    handleClick("/notfound");
                                  }}
                                  style={{ cursor: "pointer" }}
                                >
                                 Fabiha Sultana Shaik
                                </a>
                              </h4>
                              <div style={{ marginTop: 7, display: "flex" }}>
                                <span>
                                  <i className="feather-user"></i>
                                </span>
                                <span style={{ fontSize: 16, marginLeft: 5 }}>
                                  Psychologist
                                </span>
                              </div>

                              <div style={{ marginTop: 5, display: "flex" }}>
                                <span>
                                  <i className="feather-heart"></i>
                                </span>
                                <span style={{ fontSize: 16, marginLeft: 5 }}>
                                  Individual Counselling, Couple Counselling,
                                  Teen Counselling
                                </span>
                              </div>
                              <div
                                style={{
                                  marginTop: 24,
                                  marginBottom: 10,
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <a
                                  className="view-btn view-btn-border"
                                  onClick={() => {
                                    handleClick("/notfound");
                                  }}
                                  style={{
                                    padding: isMobile ? "0 30px" : "0 22px",
                                    cursor: "pointer",
                                  }}
                                >
                                  View Profile
                                </a>
                                <a
                                  className="rbt-btn btn-gradient book-btn"
                                  onClick={() => {
                                    handleClick("/notfound");
                                  }}
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    padding: isTablet ? "0 24px" : "0 30px",
                                  }}
                                >
                                  <span>&nbsp;&nbsp;Book Now&nbsp;&nbsp;</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
