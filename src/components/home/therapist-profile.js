import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import useMediaQuery from "@mui/material/useMediaQuery";
import WellNessCard from "./wellness-card";
import React from "react";
import { Link } from "react-router-dom";
export default function TherapistProfile() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [tab, setTab] = React.useState(1);
  const handleClick = (id) => {
    setTab(id);
  };
  return (
    <div className="rbt-course-area bg-color-extra2 rbt-section-gap">
      <div className="container">
        <div className="row mb--60">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle bg-primary-opacity">
                Mental Health Wrokshops/Activites
              </span>
              <h2 className="title">
                {" "}
                <span className="theme-gradient">
                  Wellness Workshops by Professionals
                </span>
              </h2>
              <p>
                Join our workshops and activities designed to enhance your
                mental health and well-being. From stress management sessions to
                personal development workshops, explore a variety of
                opportunities to engage, learn, and grow.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {/* <ul
              className="rbt-portfolio-filter filter-tab-button text-center nav nav-tabs"
              id="rbt-myTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button className="active" type="button">
                  <span className="filter-text">See all</span>
                  <span className="course-number">01</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="" type="button">
                  <span className="filter-text">Support Groups</span>
                  <span className="course-number">01</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="" type="button">
                  <span className="filter-text">Student Orientations</span>
                  <span className="course-number">0</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="" type="button">
                  <span className="filter-text">Workplace Training</span>
                  <span className="course-number">0</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="" type="button">
                  <span className="filter-text">Therapeutic Activites</span>
                  <span className="course-number">0</span>
                </button>
              </li>
            </ul> */}
            <div className="advance-tab-button">
              <ul className="nav nav-tabs tab-button-style-2" id="myTab-4">
                <li>
                  <Link
                    className={tab === 1 ? "tab-button active" : "tab-button"}
                    id="home-tab-4"
                    aria-selected={tab === 1 ? "true" : "false"}
                    onClick={() => handleClick(1)}
                  >
                    <span className="title" style={{ cursor: "pointer" }}>
                      See All
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={tab === 2 ? "tab-button active" : "tab-button"}
                    id="profile-tab-4"
                    aria-selected={tab === 2 ? "true" : "false"}
                    onClick={() => handleClick(2)}
                  >
                    <span className="title" style={{ cursor: "pointer" }}>
                      Support Groups
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={tab === 3 ? "tab-button active" : "tab-button"}
                    id="contact-tab-4"
                    aria-selected={tab === 3 ? "true" : "false"}
                    onClick={() => handleClick(3)}
                  >
                    <span className="title" style={{ cursor: "pointer" }}>
                      Student Orientations
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={tab === 4 ? "tab-button active" : "tab-button"}
                    id="business-tab-4"
                    aria-selected={tab === 4 ? "true" : "false"}
                    onClick={() => handleClick(4)}
                  >
                    <span className="title" style={{ cursor: "pointer" }}>
                      Student Orientations
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={tab === 5 ? "tab-button active" : "tab-button"}
                    id="business-tab-4"
                    aria-selected={tab === 5 ? "true" : "false"}
                    onClick={() => handleClick(5)}
                  >
                    <span className="title" style={{ cursor: "pointer" }}>
                      Workplace Training
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={tab === 6 ? "tab-button active" : "tab-button"}
                    id="business-tab-4"
                    aria-selected={tab === 6 ? "true" : "false"}
                    onClick={() => handleClick(6)}
                  >
                    <span className="title" style={{ cursor: "pointer" }}>
                      Therapeutic Activites
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={tab === 7 ? "tab-button active" : "tab-button"}
                    id="business-tab-4"
                    aria-selected={tab === 7 ? "true" : "false"}
                    onClick={() => handleClick(7)}
                  >
                    <span className="title" style={{ cursor: "pointer" }}>
                      CYT Projects
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {!isMobile && (
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content mt--60" id="rbt-myTabContent">
                <div className="row g-5">
                  <WellNessCard />
                  {/* <WellNessCard />
                  <WellNessCard />
                  <WellNessCard /> */}
                </div>
              </div>
            </div>
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
                    modules={[Autoplay]}
                    className="mySwiper"
                  >
                    <SwiperSlide key={1}>
                      <WellNessCard />
                    </SwiperSlide>
                    {/* <SwiperSlide key={2}>
                      <WellNessCard />
                    </SwiperSlide>
                    <SwiperSlide key={3}>
                      <WellNessCard />
                    </SwiperSlide>
                    <SwiperSlide key={4}>
                      <WellNessCard />
                    </SwiperSlide> */}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
