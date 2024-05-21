import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Client from "../../assets/img/client-01.webp";
import LazyImage from "../../utils/lazy-image";
export default function Feedback() {
  return (
    <div className="rbt-testimonial-area bg-color-extra2 rbt-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb--60">
            <div className="section-title text-center">
              <span className="subtitle bg-primary-opacity">
                THERAPIST FOR EVERYONE
              </span>
              <h2 className="title">Client's Success Story</h2>
            </div>
          </div>
        </div>
        <div className="row g-5" style={{ margin: "0 20px" }}>
          <Swiper
            spaceBetween={50}
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
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide key={1}>
              <div className="col-12">
                <div className="rbt-testimonial-box">
                  <div className="inner">
                    <div className="clint-info-wrapper">
                      <div className="thumb">
                        <LazyImage
                          alt="Clint Images"
                          dim={"494"}
                          src={Client}
                        />
                      </div>
                      <div className="client-info">
                        <h5 className="title">Priya Patel</h5>
                        <span>Client</span>
                      </div>
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        The platform connected me with a fantastic therapist who
                        truly understood my needs. I feel supported and
                        empowered to work through my challenges.
                      </p>
                      <div className="rating mt--20">
                        <a href="/elements/testimonial#">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="/elements/testimonial#">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="/elements/testimonial#">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="/elements/testimonial#">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="/elements/testimonial#">
                          <i className="fa fa-star"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key={2}>
              <div className="col-12">
                <div className="rbt-testimonial-box">
                  <div className="inner">
                    <div className="clint-info-wrapper">
                      <div className="thumb">
                        <LazyImage
                          alt="Clint Images"
                          dim={"494"}
                          src={Client}
                        />
                      </div>
                      <div className="client-info">
                        <h5 className="title">Priya Patel</h5>
                        <span>Client</span>
                      </div>
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        The platform connected me with a fantastic therapist who
                        truly understood my needs. I feel supported and
                        empowered to work through my challenges.
                      </p>
                      <div className="rating mt--20">
                        <a href="/elements/testimonial#">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="/elements/testimonial#">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="/elements/testimonial#">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="/elements/testimonial#">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="/elements/testimonial#">
                          <i className="fa fa-star"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key={3}>
              <div className="col-12">
                <div className="rbt-testimonial-box">
                  <div className="inner">
                    <div className="clint-info-wrapper">
                      <div className="thumb">
                        <LazyImage
                          alt="Clint Images"
                          dim={"494"}
                          src={Client}
                        />
                      </div>
                      <div className="client-info">
                        <h5 className="title">Priya Patel</h5>
                        <span>Client</span>
                      </div>
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        The platform connected me with a fantastic therapist who
                        truly understood my needs. I feel supported and
                        empowered to work through my challenges.
                      </p>
                      <div className="rating mt--20">
                        <a href="/elements/testimonial#">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="/elements/testimonial#">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="/elements/testimonial#">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="/elements/testimonial#">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="/elements/testimonial#">
                          <i className="fa fa-star"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key={4}>
              <div className="col-12">
                <div className="rbt-testimonial-box">
                  <div className="inner">
                    <div className="clint-info-wrapper">
                      <div className="thumb">
                        <LazyImage
                          alt="Clint Images"
                          dim={"494"}
                          src={Client}
                        />
                      </div>
                      <div className="client-info">
                        <h5 className="title">Priya Patel</h5>
                        <span>Client</span>
                      </div>
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        The platform connected me with a fantastic therapist who
                        truly understood my needs. I feel supported and
                        empowered to work through my challenges.
                      </p>
                      <div className="rating mt--20">
                        <a href="/elements/testimonial#">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="/elements/testimonial#">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="/elements/testimonial#">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="/elements/testimonial#">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="/elements/testimonial#">
                          <i className="fa fa-star"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
