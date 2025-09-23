import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useMediaQuery from "@mui/material/useMediaQuery";
import { TypeAnimation } from "react-type-animation"; // ✅ Make sure installed
import ImageTag from "../../utils/image-tag";
import { fetchById, fetchData } from "../../utils/actions";
import { GetFavriouteTherapistListUrl, getTherapistProfiles } from "../../utils/url";
import { getDecodedToken } from "../../utils/jwt";
import ErrorPage from "../../pages/error-page";
import ProfileCardVert from "./profile-card-vert";
import ClientImg from "../../assets/img/avatar-027dc8.png";
import Fabiha from "../../assets/img/psychologist.png";
import counselling1 from "../../assets/img/counselling.png";
import "swiper/css";
import "swiper/css/pagination";

export default function Banner() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [data, setData] = React.useState([]);
  const [favrioutes, setFavrioutes] = React.useState([]);

  const getData = async () => {
    try {
      const res = await fetchData(getTherapistProfiles, { priority: 1 });
      if (res.status) setData(res.data);
      else return <ErrorPage />;
    } catch (err) {
      return <ErrorPage />;
    }
  };

  const getFavrioutes = async () => {
    try {
      const res = await fetchById(GetFavriouteTherapistListUrl);
      if (res.status) setFavrioutes(res.data.therapists || []);
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    getData();
    const user = getDecodedToken();
    if (user?.role !== 1) getFavrioutes();
  }, []);

  return (
    <section
      className="rbt-banner-area rbt-banner-1"
      style={{
        paddingTop: isMobile ? "60px" : "80px",
        paddingBottom: isMobile ? "40px" : "100px",
      }}
    >
      <Helmet>
        <title>
          Top Verified Psychologists in India | Online & In-Person Therapy Sessions
        </title>
        <meta
          name="description"
          content="Find certified psychologists and therapists across India. Book online or in-person counselling sessions, mental health support, and therapy with trusted experts in Noida and beyond."
        />
        <meta
          name="keywords"
          content="verified psychologists India, online therapy India, book psychologist online, mental health counselling, in-person therapy, Noida therapists, affordable therapy sessions, certified therapists, wellness support, trusted counselling"
        />
      </Helmet>

      <div className="container mt--60">
        <div className="row justify-content-between align-items-center">
          {/* Banner Text */}
          <div
            className="col-lg-8 col-md-12 col-sm-12 col-12"
            style={{
              display: "flex",
              justifyContent: "flex-start", // left aligned
              textAlign: "left",
              flexDirection: "column",
            }}
          >
            <div className="content">
              <div className="inner">
                {!isMobile && (
                  <div
                    className="rbt-new-badge rbt-new-badge-one"
                    style={{ marginTop: isTablet ? 25 : 0 }}
                  >
                    <span className="rbt-new-badge-icon">
                      <PersonSearchIcon sx={{ color: "#228756", fontSize: 30 }} />
                    </span>{" "}
                    Trusted by People, Powered by Verified Therapists
                  </div>
                )}

                {/* H1 Banner */}
                <h1
                  className={isMobile ? "banner-text-title" : "title"}
                  aria-label="Bharat's Growing Network of Verified Therapists Connecting You to Trusted Counselling Support"
                  style={{
                    fontSize: isMobile ? "3.5rem" : "4rem",
                    lineHeight: isMobile ? "3.5rem" : "4.5rem",
                    marginTop: 0,
                    textAlign: isMobile ? "center" : "left",
                    wordBreak: "break-word",
                  }}
                >
                  Bharat's Growing Network of 

                  {isMobile && <br />}
                  <span
                    className="theme-gradient"
                    style={{
                      background: "linear-gradient(90deg, #228756, #56ab2f)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  > 
                  
                     Verified Therapists
                  </span>{" "}
                  Connecting You to{" "}
                  <span
                    className="theme-gradient-alt"
                    style={{
                      background: "linear-gradient(90deg, #004e92, #005bea)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Trusted Counselling Support
                  </span>
                </h1>

                {/* TypeAnimation hidden on mobile */}
                {!isMobile && (
                  <div style={{ minHeight: "3em", display: "flex", alignItems: "center" }}>
                    <TypeAnimation
                      sequence={[
                        "Book a Psychologist",
                        1500,
                        "Access Online Counselling",
                        1500,
                        "Meet Psychologists In-Person",
                        1500,
                        "Trusted Therapy Across States",
                        1500,
                        "Affordable Therapy Sessions",
                        1500,
                      ]}
                      wrapper="div"
                      speed={10}
                      repeat={Infinity}
                      deletionSpeed={20}
                      className="theme-gradient"
                      style={{
                        display: "inline-block",
                        fontWeight: 700,
                        lineHeight: "1.5em",
                        fontSize: "clamp(1.5rem, 3vw, 2rem)",
                        whiteSpace: "normal",
                      }}
                    />
                  </div>
                )}

                {/* Centered description on mobile */}
                <p
  className="description"
  style={{
    textAlign: isMobile ? "center" : "left",
    marginTop: "15px",
    
  }}
>
  Book{" "}
  <span style={{ color: "#004e92", fontWeight: "bold" }}>
    verified psychologists
  </span>{" "}
  online or in-person in Noida. Trusted therapist anytime.
</p>

                {/* Avatar Section */}
                <div className="rbt-like-total">
                  <div className="profile-share" style={{ justifyContent: isMobile ? "center" : "flex-start" }}>
                    {[ClientImg, Fabiha, counselling1].map((img, i) => (
                      <Link
                        key={i}
                        to="#"
                        className="avatar"
                        data-tooltip={`Verified Psychologist ${i + 1}`}
                        tabIndex="0"
                      >
                        <ImageTag
                          src={img}
                          width={55}
                          height={55}
                          alt={`Certified Psychologist Avatar ${i + 1} - Choose Your Therapist`}
                        />
                      </Link>
                    ))}

                    <div className="more-author-text" style={{ textAlign: isMobile ? "center" : "left" }}>
                      <h5 className="total-join-students">
                        Over 5,245+ already on their wellness journey.
                      </h5>
                      <p className="subtitle">Your well-being awaits.</p>
                    </div>
                  </div>
                </div>

                {/* Get Started Button */}
                <div
                  className="slider-btn"
                  style={{
                    display: "flex",
                    justifyContent: isMobile ? "center" : "flex-start",
                    marginTop: "20px",
                  }}
                >
                  <Link
                    className="rbt-btn btn-gradient hover-icon-reverse"
                    to="/view-all-therapist"
                    style={{
                      cursor: "pointer",
                     
                     
                    }}
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Check Therapist Directory</span>
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

          {/* Swiper Profiles */}
          <div
            className="col-lg-4 col-md-12 col-sm-12 col-12"
            style={{ marginTop: isMobile ? 20 : 60, marginBottom: 100 }}
          >
            {data.length > 0 && (
              <div className="content">
                <div className="pb--60 swiper rbt-dot-bottom-center banner-swiper-active">
                  <Swiper
                    breakpoints={{
                      412: { slidesPerView: 1 },
                      680: { slidesPerView: 2, spaceBetween: 30 },
                      768: { slidesPerView: 2, spaceBetween: 30 },
                      1024: { slidesPerView: 1 },
                    }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop
                    modules={[Autoplay]}
                    className="mySwiper"
                  >
                    {data.slice(0, 10).map((item) => (
                      <SwiperSlide key={item._id}>
                        <ProfileCardVert data={item} favrioutes={favrioutes} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
