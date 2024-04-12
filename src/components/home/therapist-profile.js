import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import useMediaQuery from "@mui/material/useMediaQuery";
import CourseCard from "./course-card";
export default function TherapistProfile() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <div className="rbt-course-area bg-color-extra2 rbt-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle bg-secondary-opacity">
                Top Popular Course
              </span>
              <h2 className="title">
                Histudy Course student <br />
                can join with us.
              </h2>
            </div>
          </div>
        </div>
        <div
          className="row row--15"
          style={{
            margin: isMobile ? "0 20px" : isTablet ? "0 0" : "0 5px",
          }}
        >
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
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
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {[1, 2, 3, 4, 5].map((item) => {
              return (
                <SwiperSlide className="mt--30" key={item}>
                  <CourseCard />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="load-more-btn mt--60 text-center">
              <a
                className="rbt-btn btn-gradient btn-lg hover-icon-reverse"
                href="index.html#"
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Load More Course (40)</span>
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
    </div>
  );
}
