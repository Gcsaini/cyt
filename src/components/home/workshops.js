import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import useMediaQuery from "@mui/material/useMediaQuery";
import WellNessCard from "./wellness-card";
import React from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../../utils/actions";
import { getWorkshopsWebUrl } from "../../utils/url";
export default function HomeWorkshop({ isWhite = false }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [data, setData] = React.useState([]);
  const [tab, setTab] = React.useState("See All");
  const handleClick = (id) => {
    setTab(id);
    getData(id);
  };

  const getData = async (tab) => {
    try {
      const res = await fetchData(getWorkshopsWebUrl, {
        category: tab === "See All" ? "" : tab,
      });
      if (res.status) {
        setData(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div
      className={`rbt-course-area rbt-section-gap`}
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 25% 25%, rgba(34, 135, 86, 0.03) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(0, 127, 153, 0.03) 0%, transparent 50%)',
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row" style={{ marginBottom: isMobile ? '40px' : '60px' }}>
          <div className="col-lg-12">
            <div className="section-title text-center" style={{ marginBottom: '40px' }}>
              <span className="subtitle" style={{
                background: 'linear-gradient(135deg, rgba(34, 135, 86, 0.1) 0%, rgba(0, 127, 153, 0.1) 100%)',
                color: '#228756',
                padding: '8px 20px',
                borderRadius: '50px',
                fontSize: '14px',
                fontWeight: '600',
                display: 'inline-block',
                marginBottom: '16px',
                border: '1px solid rgba(34, 135, 86, 0.2)'
              }}>
                Mental Health Practices & Tools
              </span>
              <h2 className="title" style={{
                fontSize: isMobile ? '2.4rem' : '3rem',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #228756 0%, #007f99 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '20px',
                lineHeight: 1.2,
                letterSpacing: '-0.02em'
              }}>
                Mind Matters Programs
              </h2>
              <p style={{
                fontSize: isMobile ? '1rem' : '1.1rem',
                color: '#64748b',
                lineHeight: 1.6,
                maxWidth: '600px',
                margin: '0 auto',
                fontWeight: '400'
              }}>
                Learn, connect, and grow with guided programs focused on building calm, clarity, and confidence.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="advance-tab-button">
              <ul className="nav nav-tabs tab-button-style-2" id="myTab-4">
                <li>
                  <Link
                    className={
                      tab === "See All" ? "tab-button active" : "tab-button"
                    }
                    id="home-tab-4"
                    aria-selected={tab === "See All" ? "true" : "false"}
                    onClick={() => handleClick("See All")}
                  >
                    <span className="title" style={{ cursor: "pointer" }}>
                      See All
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      tab === "Support Groups"
                        ? "tab-button active"
                        : "tab-button"
                    }
                    id="profile-tab-4"
                    aria-selected={tab === "Support Groups" ? "true" : "false"}
                    onClick={() => handleClick("Support Groups")}
                  >
                    <span className="title" style={{ cursor: "pointer" }}>
                      Support Groups
                    </span>
                  </Link>
                </li>
               
                <li>
                  <Link
                    className={
                      tab === "Capacity Building"
                        ? "tab-button active"
                        : "tab-button"
                    }
                    id="business-tab-4"
                    aria-selected={
                      tab === "Capacity Building" ? "true" : "false"
                    }
                    onClick={() => handleClick("Capacity Building")}
                  >
                    <span className="title" style={{ cursor: "pointer" }}>
                      Capacity Building
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      tab === "Ongoing Series"
                        ? "tab-button active"
                        : "tab-button"
                    }
                    id="business-tab-4"
                    aria-selected={
                      tab === "Ongoing Series" ? "true" : "false"
                    }
                    onClick={() => handleClick("Ongoing Series")}
                  >
                    <span className="title" style={{ cursor: "pointer" }}>
                      Ongoing Series
                    </span>
                  </Link>
                </li>
                 <li>
                  <Link
                    className={
                      tab === "Mentorship"
                        ? "tab-button active"
                        : "tab-button"
                    }
                    id="contact-tab-4"
                    aria-selected={
                      tab === "Mentorship" ? "true" : "false"
                    }
                    onClick={() => handleClick("Mentorship")}
                  >
                    <span className="title" style={{ cursor: "pointer" }}>
                     Mentorship
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {!isMobile && (
          <div className="row g-4" style={{ marginTop: 20 }}>
            {data &&
              data.slice(0, 8).map((item) => {
                return (
                  <div className="col-lg-3 col-md-6 col-12" key={item._id}>
                    <WellNessCard data={item} />
                  </div>
                );
              })}
          </div>
        )}
        {isMobile && (
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-12">
              <div className="swiper swiper-initialized swiper-horizontal viral-banner-activation rbt-arrow-between swiper-backface-hidden">
                <div className="swiper-wrapper">
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                      },
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                  >
                    {data &&
                      data.slice(0, 8).map((item) => {
                        return (
                          <SwiperSlide key={item._id}>
                            <WellNessCard data={item} />
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        )}
        {data.length > 8 && (
          <div className="row">
            <div className="col-lg-12">
              <div className="load-more-btn mt--60 text-center">
                <Link
                  className="rbt-btn btn-gradient btn-sm hover-icon-reverse"
                  to={"/all-workshop"}
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Find All Workshop</span>
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
        )}
      </div>
    </div>
  );
}
