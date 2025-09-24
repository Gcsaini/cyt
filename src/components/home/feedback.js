import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // ✅ Face Icon

export default function Feedback() {
  const testimonials = [
    {
      name: "Priya Patel",
      feedback:
        "The platform connected me with a fantastic therapist who truly understood my needs. I feel supported and empowered to work through my challenges.",
    },
    {
      name: "Prakshit",
      feedback:
        "I’ve had an incredible experience with my therapist. She’s helped me navigate tough times and I’ve learned so much about myself.",
    },
    {
      name: "Nandini",
      feedback:
        "This platform has been a lifesaver. My therapist is compassionate and skilled, providing the support I need to cope with my depression.",
    },
    {
      name: "Shivani",
      feedback:
        "Finding a therapist who really listens and understands me has made a world of difference. The platform made the process easy and stress-free.",
    },
  ];

  return (
    <div className="rbt-testimonial-area bg-color-extra2 rbt-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb--60">
            <div className="section-title text-center">
              <span className="subtitle bg-primary-opacity">CLIENT INSIGHTS</span>
              <h2 className="title">Express How We’re Doing</h2>
              <p>
                Your insights help us improve and ensure we are offering the
                best possible support for your mental health journey.
              </p>
            </div>
          </div>
        </div>

        {/* Swiper Section */}
        <div className="row g-5" style={{ margin: "0 20px" }}>
          <Swiper
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="col-12">
                  <div
                    className="rbt-testimonial-box"
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div className="inner" style={{ flexGrow: 1 }}>
                      <div
                        className="clint-info-wrapper"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <div className="thumb">
                          {/* ✅ Only Face Icon */}
                          <AccountCircleIcon
                            style={{ fontSize: 60, color: "#228756" }}
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">{t.name}</h5>
                          <span>Client</span>
                        </div>
                      </div>
                      <div className="description" style={{ marginTop: 15 }}>
                        <p className="subtitle-3">{t.feedback}</p>
                        <div className="rating mt--20">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <i key={i} className="fa fa-star"></i>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
