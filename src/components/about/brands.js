import BrandImg from "../../assets/img/hubs124e.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ImageTag from "../../utils/image-tag";

export default function Brands() {
  return (
    <div className="rbt-brand-area bg-color-white rbt-section-gap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="section-title text-center mb--40">
              <span className="small-title w-800">Partnership with</span>
            </div>
            <ul className="brand-list brand-style-3 justify-content-center justify-content-lg-between">
              <Swiper
                spaceBetween={50}
                breakpoints={{
                  380: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 6,
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
                <SwiperSlide>
                  <li>
                    <ImageTag
                      alt="Brand"
                      height={"35"}
                      width={"103"}
                      src={BrandImg}
                    />
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li>
                    <ImageTag
                      alt="Brand"
                      height={"35"}
                      width={"103"}
                      src={BrandImg}
                    />
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li>
                    <ImageTag
                      alt="Brand"
                      height={"35"}
                      width={"103"}
                      src={BrandImg}
                    />
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li>
                    <ImageTag
                      alt="Brand"
                      height={"35"}
                      width={"103"}
                      src={BrandImg}
                    />
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li>
                    <ImageTag
                      alt="Brand"
                      height={"35"}
                      width={"103"}
                      src={BrandImg}
                    />
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li>
                    <ImageTag
                      alt="Brand"
                      height={"35"}
                      width={"103"}
                      src={BrandImg}
                    />
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li>
                    <ImageTag
                      alt="Brand"
                      height={"35"}
                      width={"103"}
                      src={BrandImg}
                    />
                  </li>
                </SwiperSlide>
              </Swiper>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
