import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaHandshake, FaGlobe, FaLeaf, FaBrain, FaHeart, FaUserFriends } from "react-icons/fa";

// Brand items with static subtle gradients
const brands = [
  { icon: FaHandshake, gradient: "linear-gradient(135deg, #0097b2, #00c2cc)", title: "Collaboration & Partnership" },
  { icon: FaGlobe, gradient: "linear-gradient(135deg, #2a9d8f, #007f99)", title: "Global Presence" },
  { icon: FaLeaf, gradient: "linear-gradient(135deg, #00d9a5, #006d77)", title: "Sustainable Practices" },
  { icon: FaBrain, gradient: "linear-gradient(135deg, #0097b2, #7ed957)", title: "Expert Knowledge" },
  { icon: FaHeart, gradient: "linear-gradient(135deg, #00c2ff, #007f99)", title: "Client Care & Support" },
  { icon: FaUserFriends, gradient: "linear-gradient(135deg, #2a9d8f, #014f86)", title: "Community Engagement" },
];

export default function BrandsSection() {
  return (
    <div className="rbt-brand-area bg-color-white rbt-section-gap">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-3">
            <div className="brand-content-left">
              <h4 className="mb--0">Collaborating with Professional Psychologists & Therapists</h4>
            </div>
          </div>

          <div className="col-lg-9">
            <Swiper
              spaceBetween={30}
              breakpoints={{
                380: { slidesPerView: 2, spaceBetween: 15 },
                640: { slidesPerView: 3, spaceBetween: 20 },
                768: { slidesPerView: 4, spaceBetween: 25 },
                1024: { slidesPerView: 5, spaceBetween: 30 },
              }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              modules={[Autoplay]}
            >
              {brands.map((brand, index) => {
                const Icon = brand.icon;
                return (
                  <SwiperSlide key={index}>
                    <div style={{ textAlign: "center" }}>
                      <div
                        className="brand-icon"
                        style={{ background: brand.gradient }}
                      >
                        <div className="shape-circle"></div>
                        <Icon style={{ zIndex: 1, color: "#fff", fontSize: 36 }} />
                      </div>
                      <h4
                        style={{
                          fontSize: 16,
                          marginTop: 10,
                          fontWeight: 600,
                          color: "#007f99",
                        }}
                      >
                        {brand.title}
                      </h4>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>

      <style>
        {`
          .brand-icon {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            overflow: hidden;
            transition: box-shadow 0.3s;
            margin: auto;
          }

          .brand-icon:hover {
            box-shadow: 0 12px 25px rgba(0, 151, 178, 0.5);
          }

          .shape-circle {
            position: absolute;
            width: 120px;
            height: 120px;
            border-radius: 50%;
            border: 2px solid rgba(255,255,255,0.2);
            top: -10px;
            left: -10px;
            z-index: 0;
          }

          .brand-swiper .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
}
