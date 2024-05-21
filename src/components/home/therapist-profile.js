import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import useMediaQuery from "@mui/material/useMediaQuery";
import CourseCard from "./course-card";
import WellNessCard from "./wellness-card";
export default function TherapistProfile() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <div className="rbt-course-area bg-color-extra2 rbt-section-gap">
      <div className="container">
        <div className="row mb--60">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle bg-secondary-opacity">Courses</span>
              <h2 className="title">Histudy All Courses</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul
              className="rbt-portfolio-filter filter-tab-button text-center nav nav-tabs"
              id="rbt-myTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button className="active" type="button">
                  <span className="filter-text">All Course</span>
                  <span className="course-number">12</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="" type="button">
                  <span className="filter-text">featured</span>
                  <span className="course-number">4</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="" type="button">
                  <span className="filter-text">popular</span>
                  <span className="course-number">3</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="" type="button">
                  <span className="filter-text">trending</span>
                  <span className="course-number">3</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
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
      </div>
    </div>
  );
}
