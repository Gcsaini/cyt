import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import { FaBrain, FaUserMd } from "react-icons/fa"; // premium icons

// Banner data
const banners = [
  {
    id: 1,
    title: "Transform Your Mental Health with Expert Therapy",
    description: "Access verified therapists online and achieve focus, clarity, and wellbeing from the comfort of your home.",
    buttonText: "Book Your Session Now",
    link: "/view-all-therapist",
    gradient: "linear-gradient(135deg, #007f99, #00d2ff)",
    headingColor: "#ffffff",
    buttonColor: "#ffdd00",
    icon: <FaBrain size={120} color="rgba(255,255,255,0.9)" /> // Brain icon for therapy
  },
  {
    id: 2,
    title: "Grow Your Practice. Join India’s Trusted Therapist Network",
    description: "Get verified, expand your client base, manage appointments easily, and start earning as a professional therapist today.",
    buttonText: "Submit Your Resume",
    link: "/therapist-registration",
    gradient: "linear-gradient(135deg, #00b894, #00d084)",
    headingColor: "#ffffff",
    buttonColor: "#00ffcc",
    icon: <FaUserMd size={120} color="rgba(255,255,255,0.9)" /> // Doctor icon for therapists
  },
];

export default function PromotionalBannerCTA() {
  const navigate = useNavigate();

  return (
    <div className="rbt-banner-area" style={{ position: "relative", paddingBottom: 60, zIndex: 1 }}>
      <div className="container mt--60" style={{ borderRadius: 20, overflow: "hidden" }}>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="mySwiper"
          style={{ borderRadius: 20 }}
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  minHeight: 350,
                  borderRadius: 20,
                  overflow: "hidden",
                  cursor: "pointer",
                  background: banner.gradient,
                  padding: "40px",
                  color: "#fff",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
                }}
                className="banner-slide"
              >
                {/* Left Content */}
                <div style={{ flex: 1, paddingRight: 20 }}>
                  <h2
                    style={{
                      fontSize: 40,
                      fontWeight: 800,
                      marginBottom: 20,
                      lineHeight: 1.2,
                      color: banner.headingColor,
                      textShadow: "2px 2px 6px rgba(0,0,0,0.35)",
                    }}
                  >
                    {banner.title}
                  </h2>
                  <p
                    style={{
                      fontSize: 18,
                      marginBottom: 30,
                      maxWidth: 500,
                      textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
                    }}
                  >
                    {banner.description}
                  </p>
                  <button
                    onClick={() => navigate(banner.link)}
                    className="banner-button"
                    style={{ background: banner.buttonColor }}
                  >
                    {banner.buttonText}
                  </button>
                </div>

                {/* Right Content (Icon) */}
                <div style={{ flex: 1, textAlign: "center" }}>
                  {banner.icon}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Responsive CSS */}
      <style>
        {`
          .banner-button {
            padding: 16px 36px;
            border: none;
            border-radius: 10px;
            color: #000;
            font-weight: 700;
            font-size: 18px;
            cursor: pointer;
            transition: all 0.3s;
            box-shadow: 0 6px 15px rgba(0,0,0,0.25);
          }
          .banner-button:hover {
            transform: scale(1.08);
          }
          .banner-button:active {
            transform: scale(1.08);
          }

          @media (max-width: 992px) {
            .banner-slide {
              flex-direction: column !important;
              text-align: center;
            }
            .banner-slide div {
              padding: 0 !important;
            }
            .banner-slide svg {
              margin-top: 20px;
            }
          }

          @media (max-width: 768px) {
            .banner-slide h2 {
              font-size: 28px !important;
              line-height: 1.3 !important;
            }
            .banner-slide p {
              font-size: 16px !important;
            }
          }

          @media (max-width: 480px) {
            .banner-slide h2 {
              font-size: 24px !important;
              line-height: 1.4 !important;
            }
            .banner-slide p {
              font-size: 14px !important;
            }
          }
        `}
      </style>
    </div>
  );
}
