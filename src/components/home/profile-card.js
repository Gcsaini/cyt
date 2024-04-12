import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Profile from "../../assets/img/course-list-0164e2.jpg";
import LazyImage from "../../utils/lazy-image";
export default function ProfileCard() {
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
        <div className="row row--15">
          <Swiper
            spaceBetween={50}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 40,
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
            <SwiperSlide>
              <div className="col-12 mt--30 sal-animate">
                <div className="rbt-card variation-01 rbt-hover card-list-2">
                  <div className="rbt-card-img">
                    <a href="/course-details">
                      <LazyImage alt="Card" dim={"324-231"} src={Profile} />
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
                        <a
                          className="rbt-round-btn"
                          title="Bookmark"
                          href="/elements/card#"
                        >
                          <i className="feather-bookmark"></i>
                        </a>
                      </div>
                    </div>
                    <h4 className="rbt-card-title">
                      <a href="/course-details">React Front To Back</a>
                    </h4>
                    <ul className="rbt-meta">
                      <li>
                        <i className="feather-book"></i>12 Lessons
                      </li>
                      <li>
                        <i className="feather-users"></i>50 Students
                      </li>
                    </ul>
                    <p className="rbt-card-text">
                      It is a long established fact that a reader will be
                      distracted.
                    </p>
                    <div className="rbt-author-meta mb--10">
                      <div className="rbt-avater">
                        <a href="/profile">
                          <LazyImage
                            alt="Sophia Jaymes"
                            dim={"33"}
                            src={Profile}
                          />
                        </a>
                      </div>
                      <div className="rbt-author-info">
                        By <a href="/profile">Angela</a> In
                        <a href="/elements/card#">Development</a>
                      </div>
                    </div>
                    <div className="rbt-card-bottom">
                      <div className="rbt-price">
                        <span className="current-price">$60</span>
                        <span className="off-price">$120</span>
                      </div>
                      <a className="rbt-btn-link" href="/course-details">
                        Learn More<i className="feather-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-12 mt--30">
                <div className="rbt-card variation-01 rbt-hover card-list-2">
                  <div className="rbt-card-img">
                    <a href="/course-details">
                      <LazyImage alt="Card" dim={"324-231"} src={Profile} />
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
                        <a
                          className="rbt-round-btn"
                          title="Bookmark"
                          href="/elements/card#"
                        >
                          <i className="feather-bookmark"></i>
                        </a>
                      </div>
                    </div>
                    <h4 className="rbt-card-title">
                      <a href="/course-details">React Front To Back</a>
                    </h4>
                    <ul className="rbt-meta">
                      <li>
                        <i className="feather-book"></i>12 Lessons
                      </li>
                      <li>
                        <i className="feather-users"></i>50 Students
                      </li>
                    </ul>
                    <p className="rbt-card-text">
                      It is a long established fact that a reader will be
                      distracted.
                    </p>
                    <div className="rbt-author-meta mb--10">
                      <div className="rbt-avater">
                        <a href="/profile">
                          <LazyImage
                            alt="Sophia Jaymes"
                            dim={"33"}
                            src={Profile}
                          />
                        </a>
                      </div>
                      <div className="rbt-author-info">
                        By <a href="/profile">Angela</a> In
                        <a href="/elements/card#">Development</a>
                      </div>
                    </div>
                    <div className="rbt-card-bottom">
                      <div className="rbt-price">
                        <span className="current-price">$60</span>
                        <span className="off-price">$120</span>
                      </div>
                      <a className="rbt-btn-link" href="/course-details">
                        Learn More<i className="feather-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-12 mt--30">
                <div className="rbt-card variation-01 rbt-hover card-list-2">
                  <div className="rbt-card-img">
                    <a href="/course-details">
                      <LazyImage alt="Card" dim={"324-231"} src={Profile} />
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
                        <a
                          className="rbt-round-btn"
                          title="Bookmark"
                          href="/elements/card#"
                        >
                          <i className="feather-bookmark"></i>
                        </a>
                      </div>
                    </div>
                    <h4 className="rbt-card-title">
                      <a href="/course-details">React Front To Back</a>
                    </h4>
                    <ul className="rbt-meta">
                      <li>
                        <i className="feather-book"></i>12 Lessons
                      </li>
                      <li>
                        <i className="feather-users"></i>50 Students
                      </li>
                    </ul>
                    <p className="rbt-card-text">
                      It is a long established fact that a reader will be
                      distracted.
                    </p>
                    <div className="rbt-author-meta mb--10">
                      <div className="rbt-avater">
                        <a href="/profile">
                          <LazyImage
                            alt="Sophia Jaymes"
                            dim={"33"}
                            src={Profile}
                          />
                        </a>
                      </div>
                      <div className="rbt-author-info">
                        By <a href="/profile">Angela</a> In
                        <a href="/elements/card#">Development</a>
                      </div>
                    </div>
                    <div className="rbt-card-bottom">
                      <div className="rbt-price">
                        <span className="current-price">$60</span>
                        <span className="off-price">$120</span>
                      </div>
                      <a className="rbt-btn-link" href="/course-details">
                        Learn More<i className="feather-arrow-right"></i>
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
