import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Banner from "../../assets/img/Therapyforallll.png";
import Banner2 from "../../assets/img/joinushere.png";
import ImageTag from "../../utils/image-tag";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function PromationalBanner() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <div className="rbt-banner-area">
      <div className="container mt--60">
        <div className="row mb--60">
          <div className="col-lg-12">
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
                    <div
                      className="swiper-slide"
                      style={{
                        width: "100%",
                      }}
                    >
                      <div className="thumbnail">
                        <a href="">
                          <ImageTag
                            alt="Banner"
                            dim={"425-1305"}
                            class={"rbt-radius w-100"}
                            src={Banner}
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide key={2}>
                    <div
                      className="swiper-slide"
                      style={{
                        width: "100%",
                      }}
                    >
                      <div className="thumbnail">
                        <a href="">
                          <ImageTag
                            alt="Banner"
                            heigth="425"
                            width="1305"
                            class={"rbt-radius w-100"}
                            src={Banner2}
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide key={3}>
                    <div
                      className="swiper-slide"
                      style={{
                        width: "100%",
                      }}
                    >
                      <div className="thumbnail">
                        <a href="">
                          <ImageTag
                            alt="Banner"
                            dim={"425-1305"}
                            class={"rbt-radius w-100"}
                            src={Banner}
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
