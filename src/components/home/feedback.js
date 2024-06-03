import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Client from "../../assets/img/anime6.png";
import ClientM from "../../assets/img/anime3.png";
import LazyImage from "../../utils/lazy-image";
import ImageTag from "../../utils/image-tag";
export default function Feedback() {
  return (
    <div className="rbt-testimonial-area bg-color-extra2 rbt-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb--60">
            <div className="section-title text-center">
              <span className="subtitle bg-primary-opacity">
                CLIENT INSIGHTS
              </span>
              <h2 className="title">Express How We’re Doing</h2>
              <p>
                Your insights help us improve and ensure we are offering the
                best possible support for your mental health journey. Whether
                you have suggestions, comments, or success stories, please share
                them with us.
              </p>
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
                        <ImageTag
                          alt="Client Image"
                          height={"494"}
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
                        empowered to work through my challenges. My therapist’s
                        insight and guidance have been invaluable in helping me
                        manage my stress and improve my mental health.
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
                        <ImageTag
                          alt="Client Image"
                          height={"494"}
                          src={ClientM}
                        />
                      </div>
                      <div className="client-info">
                        <h5 className="title">Prakshit</h5>
                        <span>Client</span>
                      </div>
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        I’ve had an incredible experience with my therapist
                        through this platform. She’s helped me navigate some
                        tough times and I’ve learned so much about myself. I
                        appreciate the convenience and quality of care provided.
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
                        <ImageTag
                          alt="Client Image"
                          height={"494"}
                          src={Client}
                        />
                      </div>
                      <div className="client-info">
                        <h5 className="title">Nandini</h5>
                        <span>Client</span>
                      </div>
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        This platform has been a lifesaver. My therapist is
                        compassionate and skilled, providing the support I need
                        to cope with my depression. I feel heard and validated,
                        and I’m making real progress thanks to her guidance.
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
                        <ImageTag
                          alt="Client Image"
                          height={"494"}
                          src={Client}
                        />
                      </div>
                      <div className="client-info">
                        <h5 className="title">Shivani</h5>
                        <span>Client</span>
                      </div>
                    </div>
                    <div className="description">
                      <p className="subtitle-3">
                        Finding a therapist who really listens and understands
                        me has made a world of difference. The platform made the
                        process easy and stress-free. I now feel more confident
                        and equipped to handle my anxiety.
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
