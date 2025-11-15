import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";


// Banner data
const banners = [
  {
    id: 1,
    title: "Transform Your Mental Health with Expert Therapy",
    description: "Access verified therapists online and achieve focus, clarity, and wellbeing from the comfort of your home.",
    buttonText: "Book Your Session Now",
    link: "/view-all-therapist",
    gradient: "linear-gradient(135deg, #5b9e5eff 0%, #4CAF50 100%)",
    headingColor: "#ffffff",
    buttonColor: "#60db66ff",
    
  },
  {
    id: 2,
    title: "Grow Your Practice. Join India’s Trusted Therapist Network",
    description: "Get verified, expand your client base, manage appointments easily, and start earning as a professional therapist today.",
    buttonText: "Submit Your Resum",
    link: "/therapist-registration",
    gradient: "linear-gradient(135deg, #457046ff 0%, #66BB6A 100%)",
    headingColor: "#ffffff",
    buttonColor: "#60db66ff",
   
  },
];

export default function PromotionalBannerCTA() {
  const navigate = useNavigate();

  return (
    <div className="rbt-banner-area" style={{
      position: "relative",
      paddingBottom: 60,
      zIndex: 1,
      background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)',
      overflow: 'hidden'
    }}>
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 30%, rgba(34, 135, 86, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(0, 127, 153, 0.03) 0%, transparent 50%)',
        pointerEvents: 'none'
      }}></div>

      <div className="container mt--60" style={{
        borderRadius: 24,
        overflow: "hidden",
        position: 'relative',
        zIndex: 1,
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.08)'
      }}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="mySwiper"
          style={{
            borderRadius: 24,
            overflow: 'hidden'
          }}
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  minHeight: "30vh",
                  borderRadius: 20,
                  overflow: "hidden",
                  cursor: "pointer",
                  background: banner.gradient,
                  padding: "30px",
                  color: "#fff",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
                }}
                className="banner-slide"
              >
                {/* Left Content */}
                <div style={{ flex: 1, paddingRight: 20 }}>
                  <h2
                    style={{
                      fontSize: 32,
                      fontWeight: 700,
                      marginBottom: 15,
                      lineHeight: 1.3,
                      color: banner.headingColor,
                      textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
                    }}
                  >
                    {banner.title}
                  </h2>
                  <p
                    style={{
                      fontSize: 16,
                      marginBottom: 25,
                      maxWidth: 500,
                      textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                      lineHeight: 1.5,
                    }}
                  >
                    {banner.description}
                  </p>
                </div>

                {/* Right Content (Button) */}
                <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <button
                    onClick={() => navigate(banner.link)}
                    className="banner-button"
                    style={{ background: banner.buttonColor }}
                  >
                    {banner.buttonText}
                  </button>
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
              height: auto !important;
              min-height: 400px !important;
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
