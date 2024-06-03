import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import TherapistCard from "../therapist-card";

export default function TherapistProfile() {
  return (
    <div style={{ marginLeft: 30, marginRight: 30 }}>
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
      <div className="row">
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
              slidesPerView: 4,
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
          {[1, 2, 3, 4, 5].map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <TherapistCard />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
