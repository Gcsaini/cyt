import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import useMediaQuery from "@mui/material/useMediaQuery";
import WellNessCard from "../home/wellness-card";
export default function ProfileCourses() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <div className="rbt-course-area bg-color-white rbt-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul
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
            </ul>
          </div>
        </div>
        {!isMobile && (
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content mt--60" id="rbt-myTabContent">
                <div className="row g-5">
                  <WellNessCard />
                  <WellNessCard />
                  <WellNessCard />
                  <WellNessCard />
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
                    <SwiperSlide key={2}>
                      <WellNessCard />
                    </SwiperSlide>
                    <SwiperSlide key={3}>
                      <WellNessCard />
                    </SwiperSlide>
                    <SwiperSlide key={4}>
                      <WellNessCard />
                    </SwiperSlide>
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
