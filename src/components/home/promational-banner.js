import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

// Banner data
const banners = [
  {
    id: 1,
    title: "Take Professional Help & Boost Your Brain Health with ChooseYourTherapist",
    description: [
      "Understand how your brain functions and how stress affects it.",
      "Get professional online therapy support from certified therapists.",
      "Start today to enhance focus, clarity, and emotional balance."
    ],
    buttonText: "Book Your Session",
    link: "/therapist-registration",
    gradient: "linear-gradient(135deg, #007f99, #00d2ff)",
    headingColor: "#ffffff",
    buttonColor: "#ffdd00"
  },
  {
    id: 2,
    title: "Join as an Independent Therapist & Grow Your Practice with ChooseYourTherapist",
    description: [
      "Work independently and help clients transform their mental health.",
      "Access our platform to reach more clients and manage your schedule efficiently.",
      "Submit your resume to become part of the certified therapist network."
    ],
    buttonText: "Submit Resume",
    link: "/therapist-submit-resume",
    gradient: "linear-gradient(135deg, #00b894, #00d084)",
    headingColor: "#ffffff",
    buttonColor: "#00ffcc"
  },
];

export default function PromotionalBannerCTA() {
  const navigate = useNavigate();

  return (
    <div
      className="rbt-banner-area"
      style={{
        position: "relative",
        paddingBottom: 60,
        zIndex: 1
      }}
    >
      <div
        className="container mt--60"
        style={{
          borderRadius: 20,
          overflow: "hidden",
        }}
      >
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
          style={{ borderRadius: 20 }}
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  minHeight: 450,
                  borderRadius: 20,
                  overflow: "hidden",
                  cursor: "pointer",
                  background: banner.gradient,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  color: "#fff",
                  padding: "40px 20px",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
                }}
              >
                {/* Headline */}
                <h2
                  style={{
                    fontSize: 40,
                    fontWeight: 800,
                    marginBottom: 25,
                    lineHeight: 1.2,
                    color: banner.headingColor,
                    textShadow: "2px 2px 6px rgba(0,0,0,0.35)",
                    wordBreak: "break-word",
                  }}
                  className="banner-heading"
                >
                  {banner.title}
                </h2>

                {/* Multi-line description */}
                {banner.description.map((line, index) => (
                  <p
                    key={index}
                    className="banner-description"
                    style={{
                      fontSize: 20,
                      marginBottom: 15,
                      maxWidth: 800,
                      textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
                    }}
                  >
                    {line}
                  </p>
                ))}

                {/* Highlighted CTA Button */}
                <button
                  onClick={() => navigate(banner.link)}
                  style={{
                    padding: "16px 36px",
                    background: banner.buttonColor,
                    border: "none",
                    borderRadius: 10,
                    color: "#000",
                    fontWeight: 700,
                    fontSize: 18,
                    cursor: "pointer",
                    transition: "all 0.3s",
                    boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.08)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  {banner.buttonText}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            .banner-heading {
              font-size: 28px !important;
              line-height: 1.3 !important;
            }
            .banner-description {
              display: none !important; /* hide description on mobile */
            }
          }
          @media (max-width: 480px) {
            .banner-heading {
              font-size: 24px !important;
              line-height: 1.4 !important;
            }
          }
        `}
      </style>
    </div>
  );
}
