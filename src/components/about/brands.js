import LazyImage from "../../utils/lazy-image";
import BrandImg from "../../assets/img/brand-018b2a.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Brands() {
  return (
    <div class="rbt-brand-area bg-color-white rbt-section-gap">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12">
            <div class="section-title text-center mb--40">
              <span class="small-title w-600">
                The Best Trasted Client in This Education World
              </span>
            </div>
            <ul class="brand-list brand-style-3 justify-content-center justify-content-lg-between">
              <Swiper
                spaceBetween={50}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 5,
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
                {[1, 2, 3, 4, 5, 6, 7].map((item) => {
                  return (
                    <SwiperSlide key={item}>
                      <li>
                        <a href="/pages/about-us-02#">
                          <LazyImage
                            alt="Brand"
                            dim={"35-103"}
                            src={BrandImg}
                          />
                        </a>
                      </li>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
