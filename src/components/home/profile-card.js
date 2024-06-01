import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Profile from "../../assets/img/founder.png";
import fab from "../../assets/img/fab.png";
import ayushi from "../../assets/img/ayushi.png";
import anjali from "../../assets/img/anjali.png";
import BookBtn from "../global/book-btn";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageTag from "../../utils/image-tag";
export default function ProfileCard() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <div className="rbt-rbt-card-area rbt-section-gap bg-color-extra2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle bg-secondary-opacity">
                Mental Health Professional
              </span>
              <h2 className="title">Recommended Experts</h2>
            </div>
          </div>
        </div>
        <div className="row row--15" style={{ margin: isMobile ? 5 : 0 }}>
          <Swiper
            spaceBetween={50}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="col-12 mt--30 sal-animate">
                <div className="rbt-card variation-01 rbt-hover card-list-2">
                  <div className="rbt-card-img">
                    <a href="">
                      <ImageTag
                        alt="Card"
                        height={"324"}
                        width={"231"}
                        src={Profile}
                      />
                    </a>
                  </div>
                  <div className="rbt-card-body">
                    <div className="rbt-card-top">
                      <div className="rbt-review">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="rating-count">(15 Reviews)</span>
                      </div>
                      <div className="rbt-bookmark-btn">
                        <a className="rbt-round-btn" title="Bookmark" href="">
                          <i className="feather-bookmark"></i>
                        </a>
                      </div>
                    </div>
                    <h4 className="rbt-card-title">
                      <a href="">Deepak Kumar</a>
                    </h4>
                    <ul className="rbt-meta" style={{ marginTop: 1 }}>
                      <li>
                        <i className="feather-book"></i>Available
                      </li>

                      <li>
                        <i className="feather-user"></i>Counselling Psychologist
                      </li>
                      <li>
                        <i className="feather-message-circle"></i> English,
                        Hindi
                      </li>
                      <li>
                        <div style={{ display: "flex" }}>
                          <span>
                            <i className="feather-heart"></i>
                          </span>
                          <span style={{ lineHeight: "18px" }}>
                            Individual Counselling, Couple Counselling, Teen
                            Counselling
                          </span>
                        </div>
                      </li>
                    </ul>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: 5,
                      }}
                    >
                      <a
                        className="view-btn view-btn-border"
                        href=""
                        style={{
                          padding: isMobile || isTablet ? "0 24px" : "0 16px",
                        }}
                      >
                        View Profile
                      </a>
                      <a
                        className="rbt-btn btn-gradient book-btn"
                        href=""
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          padding: isMobile || isTablet ? "0 26px" : "0 20px",
                        }}
                      >
                        <span>Book Now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-12 mt--30 sal-animate">
                <div className="rbt-card variation-01 rbt-hover card-list-2">
                  <div className="rbt-card-img">
                    <a href="">
                      <ImageTag
                        alt="Card"
                        height={"324"}
                        width={"231"}
                        src={fab}
                      />
                    </a>
                  </div>
                  <div className="rbt-card-body">
                    <div className="rbt-card-top">
                      <div className="rbt-review">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="rating-count">(15 Reviews)</span>
                      </div>
                      <div className="rbt-bookmark-btn">
                        <a className="rbt-round-btn" title="Bookmark" href="">
                          <i className="feather-bookmark"></i>
                        </a>
                      </div>
                    </div>
                    <h4 className="rbt-card-title">
                      <a href="">Fabiha Sultana Shaik</a>
                    </h4>
                    <ul className="rbt-meta" style={{ marginTop: 1 }}>
                      <li>
                        <i className="feather-book"></i>Available
                      </li>
                      <li>
                        <i className="feather-user"></i>Counselling Psychologist
                      </li>
                      <li>
                        <i className="feather-message-circle"></i> English,
                        Hindi
                      </li>
                      <li>
                        <div style={{ display: "flex" }}>
                          <span>
                            <i className="feather-heart"></i>
                          </span>
                          <span style={{ lineHeight: "18px" }}>
                            Individual Counselling, Couple Counselling, Teen
                            Counselling
                          </span>
                        </div>
                      </li>
                    </ul>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: 5,
                      }}
                    >
                      <a
                        className="view-btn view-btn-border"
                        href=""
                        style={{
                          padding: isMobile || isTablet ? "0 24px" : "0 16px",
                        }}
                      >
                        View Profile
                      </a>
                      <a
                        className="rbt-btn btn-gradient book-btn"
                        href=""
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          padding: isMobile || isTablet ? "0 26px" : "0 20px",
                        }}
                      >
                        <span>Book Now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-12 mt--30 sal-animate">
                <div className="rbt-card variation-01 rbt-hover card-list-2">
                  <div className="rbt-card-img">
                    <a href="">
                      <ImageTag
                        alt="Card"
                        height={"324"}
                        width={"231"}
                        src={ayushi}
                      />
                    </a>
                  </div>
                  <div className="rbt-card-body">
                    <div className="rbt-card-top">
                      <div className="rbt-review">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="rating-count">(15 Reviews)</span>
                      </div>
                      <div className="rbt-bookmark-btn">
                        <a className="rbt-round-btn" title="Bookmark" href="">
                          <i className="feather-bookmark"></i>
                        </a>
                      </div>
                    </div>
                    <h4 className="rbt-card-title">
                      <a href="/course-details">Ayushi Pandwal</a>
                    </h4>
                    <ul className="rbt-meta" style={{ marginTop: 1 }}>
                      <li>
                        <i className="feather-book"></i>Available
                      </li>
                      <li>
                        <i className="feather-user"></i>Counselling Psychologist
                      </li>
                      <li>
                        <i className="feather-message-circle"></i> English,
                        Hindi
                      </li>
                      <li>
                        <div style={{ display: "flex" }}>
                          <span>
                            <i className="feather-heart"></i>
                          </span>
                          <span style={{ lineHeight: "18px" }}>
                            Individual Counselling, Couple Counselling, Teen
                            Counselling
                          </span>
                        </div>
                      </li>
                    </ul>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: 5,
                      }}
                    >
                      <a
                        className="view-btn view-btn-border"
                        href=""
                        style={{
                          padding: isMobile || isTablet ? "0 24px" : "0 16px",
                        }}
                      >
                        View Profile
                      </a>
                      <a
                        className="rbt-btn btn-gradient book-btn"
                        href=""
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          padding: isMobile || isTablet ? "0 26px" : "0 20px",
                        }}
                      >
                        <span>Book Now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-12 mt--30 sal-animate">
                <div className="rbt-card variation-01 rbt-hover card-list-2">
                  <div className="rbt-card-img">
                    <a href="">
                      <ImageTag
                        alt="Card"
                        height={"324"}
                        width={"231"}
                        src={anjali}
                      />
                    </a>
                  </div>
                  <div className="rbt-card-body">
                    <div className="rbt-card-top">
                      <div className="rbt-review">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="rating-count">(15 Reviews)</span>
                      </div>
                      <div className="rbt-bookmark-btn">
                        <a className="rbt-round-btn" title="Bookmark" href="">
                          <i className="feather-bookmark"></i>
                        </a>
                      </div>
                    </div>
                    <h4 className="rbt-card-title">
                      <a href="/course-details">Anjali Suyal</a>
                    </h4>
                    <ul className="rbt-meta" style={{ marginTop: 1 }}>
                      <li>
                        <i className="feather-book"></i>Available
                      </li>
                      <li>
                        <i className="feather-user"></i>Counselling Psychologist
                      </li>
                      <li>
                        <i className="feather-message-circle"></i> English,
                        Hindi
                      </li>
                      <li>
                        <div style={{ display: "flex" }}>
                          <span>
                            <i className="feather-heart"></i>
                          </span>
                          <span style={{ lineHeight: "18px" }}>
                            Individual Counselling, Couple Counselling, Teen
                            Counselling
                          </span>
                        </div>
                      </li>
                    </ul>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: 5,
                      }}
                    >
                      <a
                        className="view-btn view-btn-border"
                        href=""
                        style={{
                          padding: isMobile || isTablet ? "0 24px" : "0 16px",
                        }}
                      >
                        View Profile
                      </a>
                      <a
                        className="rbt-btn btn-gradient book-btn"
                        href=""
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          padding: isMobile || isTablet ? "0 26px" : "0 20px",
                        }}
                      >
                        <span>Book Now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="load-more-btn mt--60 text-center">
              <a
                className="rbt-btn btn-gradient btn-sm hover-icon-reverse"
                href=""
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Find More Experts</span>
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
