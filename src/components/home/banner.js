import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import React from "react";
import ClientImg from "../../assets/img/avatar-027dc8.png";
import Fabiha from "../../assets/img/psychologist.png";
import counselling1 from "../../assets/img/counselling.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageTag from "../../utils/image-tag";
import { TypeAnimation } from "react-type-animation";
import { fetchById, fetchData } from "../../utils/actions";
import {
  GetFavriouteTherapistListUrl,
  getTherapistProfiles,
} from "../../utils/url";
import ErrorPage from "../../pages/error-page";
import ProfileCardVert from "./profile-card-vert";
import { getDecodedToken } from "../../utils/jwt";
export default function Banner() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [data, setData] = React.useState([]);
  const [favrioutes, setFavrioutes] = React.useState([]);
  const getData = async () => {
    try {
      const res = await fetchData(getTherapistProfiles, { priority: 1 });
      if (res.status) {
        setData(res.data);
      } else {
        return <ErrorPage />;
      }
    } catch (err) {
      return <ErrorPage />;
    }
  };



  const getFavrioutes = async () => {
    try {
      const res = await fetchById(GetFavriouteTherapistListUrl);
      if (res.status) {
        setFavrioutes(res.data.therapists || []);
      }
    } catch (err) {
      console.log(err);
    }
  };
  React.useEffect(() => {
    getData();
    const data = getDecodedToken();
    if (data) {
      if (data.role !== 1) {
        getFavrioutes();
      }
    }
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
                   Trusted by People, Powered by Verified Therapists.
                  </div>
                )}
               <h1
  className={isMobile ? "banner-text-title" : "title"}
  style={{ marginTop: isMobile ? 10 : 20, lineHeight: "2em" }}
>
  Bharat’s Growing Network of Verified Therapists for{" "}
  <span
    style={{
      display: "inline-block",
      minWidth: "120px",  // reserve space for the longest word
      height: "2em",    // fix height so banner doesn’t jump
      verticalAlign: "middle",
    }}
  >
    <TypeAnimation
      sequence={["Accessibility", 1500, "Affordability", 1500, "Wellness", 1500]}
      speed={10}
      repeat={Infinity}
      deletionSpeed={20}
      className="theme-gradient"
      style={{
        display: "inline-block",
        whiteSpace: "nowrap", // prevent line breaks
      }}
    />
  </span>
</h1>
                <p className="description">
                Professional help, whenever you need it, 
                  <strong>
                      for a healthier state of mind.
                  </strong>
                </p>
                <div className="rbt-like-total">
                  <div className="profile-share">
                    <Link
                      to="#"
                      className="avatar"
                      data-tooltip="Counselling Psychologist"
                      tabIndex="0"
                    >
                      <ImageTag
                        alt="education"
                        width="55"
                        height="55"
                        src={ClientImg}
                      />
                    </Link>
                    <Link
                      to="#"
                      className="avatar"
                      data-tooltip="Psychologist"
                      tabIndex="0"
                    >
                      <ImageTag
                        alt="education"
                        width="55"
                        height="55"
                        src={Fabiha}
                      />
                    </Link>
                    <Link
                      to="#"
                      className="avatar"
                      data-tooltip="Psychologist"
                      tabIndex="0"
                    >
                      <ImageTag
                        alt="education"
                        width="55"
                        height="55"
                        src={counselling1}
                      />
                    </Link>

                    <div className="more-author-text">
                      <h5 className="total-join-students">
                        Over 5,245+ already on their wellness journey.
                      </h5>
                      <p className="subtitle">Your well-being awaits.</p>
                    </div>
                  </div>
                </div>
                <br />
                <div className="slider-btn">
                  <Link
                    className="rbt-btn btn-gradient hover-icon-reverse"
                    to="/login"
                    style={{ cursor: "pointer" }}
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Get Started</span>
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
          <div
            className="col-lg-4 col-md-12 col-sm-12 col-12"
            style={{
              marginTop: isMobile ? 10 : 60,
              marginBottom: 100,
            }}
          >
            {data && (
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
                        {data.slice(0, 10).map((item) => {
                          return (
                            <SwiperSlide key={item._id}>
                              <ProfileCardVert
                                data={item}
                                favrioutes={favrioutes}
                              />
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
