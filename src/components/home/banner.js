import React, { useState, useEffect, useRef } from "react";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useMediaQuery from "@mui/material/useMediaQuery";

import ImageTag from "../../utils/image-tag";

import ConsultationForm from "./consultation-form";
import { fetchData } from "../../utils/actions";
import { getTherapistProfiles, imagePath } from "../../utils/url";
// Therapist avatar images
import ClientImg from "../../assets/img/avatar-027dc8.png";
import Fabiha from "../../assets/img/psychologist.png";
import counselling1 from "../../assets/img/counselling.png";

// Therapist Image Slider Component
const BannerSlider = ({ isMobile }) => {
  const [therapists, setTherapists] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [imageLoadingStates, setImageLoadingStates] = useState({});
  const imageStartTimes = useRef({});

  // Analytics tracking functions
  const trackEvent = (eventName, parameters = {}) => {
    if (window.gtag) {
      window.gtag('event', eventName, {
        event_category: 'therapist_slider',
        event_label: 'banner_slider',
        ...parameters
      });
    }
  };

  const trackSliderView = () => {
    trackEvent('slider_view', {
      therapist_count: therapists.length,
      slide_count: Math.ceil(therapists.length / 3)
    });
  };

  const trackImageHover = (therapistId, therapistName) => {
    trackEvent('image_hover', {
      therapist_id: therapistId,
      therapist_name: therapistName
    });
  };

  const trackSlideChange = (newSlideIndex) => {
    trackEvent('slide_change', {
      slide_index: newSlideIndex,
      total_slides: Math.ceil(therapists.length / 3)
    });
  };

  const trackImageLoad = (therapistId, loadTime) => {
    trackEvent('image_load', {
      therapist_id: therapistId,
      load_time_ms: loadTime,
      performance: loadTime < 1000 ? 'fast' : loadTime < 3000 ? 'medium' : 'slow'
    });
  };

  // Fetch therapist data
  useEffect(() => {
    const getTherapists = async () => {
      try {
        const res = await fetchData(getTherapistProfiles);
        if (res.status && res.data) {
          // Filter to only show recommended therapists (priority === 1) and limit to 10
          const recommendedTherapists = (res.data || []).filter(therapist => therapist.priority === 1).slice(0, 10);
          setTherapists(recommendedTherapists);
        }
      } catch (error) {
        console.log("Error fetching therapists:", error);
        // Fallback to empty array
        setTherapists([]);
      } finally {
        setLoading(false);
      }
    };

    getTherapists();
  }, []);

  // Auto-rotate slides with smooth animation
  useEffect(() => {
    if (therapists.length >= 3) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => {
          const newSlide = (prev + 1) % Math.ceil(therapists.length / 3);
          trackSlideChange(newSlide);
          return newSlide;
        });
      }, isMobile ? 4000 : 5000); // Faster rotation on mobile for better engagement

      return () => clearInterval(timer);
    }
  }, [therapists.length, isMobile]);

  // Track slider view when component mounts and data loads
  useEffect(() => {
    if (!loading && therapists.length >= 3) {
      trackSliderView();
    }
  }, [loading, therapists.length]);

  if (loading || therapists.length < 3) {
    return (
      <div style={{
        borderRadius: isMobile ? "12px" : "10px",
        border: "2px solid #228756",
        height: isMobile ? "120px" : "100px",
        backgroundColor: "#f8f9fa",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div style={{ color: "#228756", fontSize: "14px" }}>Loading...</div>
      </div>
    );
  }

  // Handle image loading states for progressive loading
  const handleImageLoadStart = (therapistId) => {
    imageStartTimes.current[therapistId] = Date.now();
  };

  const handleImageLoad = (therapistId) => {
    const startTime = imageStartTimes.current[therapistId];
    if (startTime) {
      const loadTime = Date.now() - startTime;
      trackImageLoad(therapistId, loadTime);
    }
    setImageLoadingStates(prev => ({
      ...prev,
      [therapistId]: true
    }));
  };

  const handleImageError = (therapistId) => {
    setImageLoadingStates(prev => ({
      ...prev,
      [therapistId]: false
    }));
    trackEvent('image_load_error', {
      therapist_id: therapistId
    });
  };

  // Get current 3 therapists for the slide
  const startIndex = currentSlide * 3;
  const currentTherapists = therapists.slice(startIndex, startIndex + 3);

  return (
    <div style={{
      position: "relative",
      borderRadius: isMobile ? "12px" : "15px",
      overflow: "hidden",
      boxShadow: "0 8px 32px rgba(34, 135, 86, 0.15)",
      border: "2px solid #228756",
      height: isMobile ? "140px" : "130px",
      backgroundColor: "white",
      animation: "slideInUp 0.6s ease-out"
    }}>
      {/* Recommended Therapists Ribbon */}
      <div style={{
        position: "absolute",
        top: isMobile ? "15px" : "20px",
        right: "0",
        zIndex: 10,
        background: "linear-gradient(135deg, #36b477ff 0%, #35c06fff 50%, #2c7754ff 100%)",
        color: "#fff",
        padding: isMobile ? "10px 6px" : "12px 8px",
        fontSize: isMobile ? "10px" : "11px",
        fontWeight: "700",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4px",
        borderRadius: "0 0 0 20px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.3), 0 2px 6px rgba(0,0,0,0.2)",
        textShadow: "0 1px 2px rgba(0,0,0,0.3)",
        border: "1px solid rgba(255,255,255,0.2)",
        backdropFilter: "blur(8px)",
        writingMode: "vertical-rl",
        textOrientation: "mixed"
      }}>
        Recommended
      </div>
      {/* Therapist Images Row with Enhanced Animation */}
      <div style={{
        display: "flex",
        height: "100%",
        alignItems: "center",
        transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      }}>
        {currentTherapists.map((therapist, index) => (
          <div
            key={`${therapist._id || index}-${currentSlide}`}
            style={{
              flex: 1,
              height: "100%",
              position: "relative",
              overflow: "hidden",
              cursor: isMobile ? "default" : "pointer",
              animation: `slideInFromDirection ${isMobile ? 0.6 : 0.8}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * (isMobile ? 0.1 : 0.15)}s both`,
              "--slide-direction": index === 0 ? "left" : index === 1 ? "bottom" : "right"
            }}
          >
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              {/* Progressive loading blur placeholder */}
              {!imageLoadingStates[therapist._id] && (
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 1.5s infinite",
                  borderRadius: "8px",
                  filter: "blur(10px)"
                }} />
              )}

              <ImageTag
                src={`${imagePath}/${therapist.user?.profile || 'default-profile.png'}`}
                alt={therapist.user?.name || 'Therapist'}
                loading="lazy"
                onLoad={() => handleImageLoad(therapist._id)}
                onError={() => handleImageError(therapist._id)}
                onLoadStart={() => handleImageLoadStart(therapist._id)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  filter: imageLoadingStates[therapist._id] ? "brightness(1) contrast(1.05) saturate(1.1)" : "blur(10px) brightness(0.8)",
                  transform: "scale(1)",
                  imageRendering: "auto",
                  opacity: imageLoadingStates[therapist._id] ? 1 : 0.7
                }}
                onMouseOver={isMobile ? undefined : (e) => {
                  if (imageLoadingStates[therapist._id]) {
                    e.target.style.transform = "scale(1.08) rotate(1deg)";
                    e.target.style.filter = "brightness(1.1) contrast(1.1) saturate(1.2)";
                    e.target.style.boxShadow = "0 8px 25px rgba(34, 135, 86, 0.3)";
                    trackImageHover(therapist._id, therapist.user?.name || 'Unknown');
                  }
                }}
                onMouseOut={isMobile ? undefined : (e) => {
                  if (imageLoadingStates[therapist._id]) {
                    e.target.style.transform = "scale(1) rotate(0deg)";
                    e.target.style.filter = "brightness(1) contrast(1.05) saturate(1.1)";
                    e.target.style.boxShadow = "none";
                  }
                }}
              />
            </div>

            {/* Subtle overlay gradient */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(45deg, rgba(34, 135, 86, 0.1) 0%, transparent 70%)",
              pointerEvents: "none"
            }}></div>
          </div>
        ))}
      </div>



      {/* Custom CSS Animations */}
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes slideInFromDirection {
          from {
            opacity: 0;
            transform: translateX(var(--slide-direction-left, 0)) translateY(var(--slide-direction-bottom, 0)) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(0) scale(1);
          }
        }

        /* Direction-specific animations */
        [style*="--slide-direction: left"] {
          --slide-direction-left: -50px;
          --slide-direction-bottom: 0;
        }

        [style*="--slide-direction: bottom"] {
          --slide-direction-left: 0;
          --slide-direction-bottom: 50px;
        }

        [style*="--slide-direction: right"] {
          --slide-direction-left: 50px;
          --slide-direction-bottom: 0;
        }

      `}</style>
    </div>
  );
};




export default function Banner() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));


  return (
    <section
        className="rbt-banner-area rbt-banner-1"
        style={{
          paddingTop: isMobile ? "40px" : "30px",
          marginTop: isMobile ? "0px" : "0px",
          paddingBottom: isMobile ? "40px" : "30px",
          marginBottom: isMobile ? "10px" : "20px",
          backgroundColor: isMobile ? "#228756" : "transparent",
        }}
      >

      <Helmet>
        <title>
          India's Growing Network of Verified Therapists Connecting You to Trusted Counselling Support | Choose Your Therapist
        </title>
        <meta
          name="description"
          content="Connect with our trusted network of psychologists in Noida through Choose Your Therapist. Book affordable in-person or online therapy sessions, mental health counseling, and expert support from local psychologists near you."
        />
        <meta
          name="keywords"
          content="Affordable Psychologists, Network of Psychologists, Online Therapy, In-Person Therapy, Mental Health Counseling, Expert Psychologists, Choose Your Therapist, Psychologists in Noida, Local Therapy Noida"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://chooseyourtherapist.in/" />
      </Helmet>

      <div className="container mt--20">
        <div className="row justify-content-between align-items-center">
          {/* Banner Text */}
          <div
            className="col-lg-8 col-md-12 col-sm-12 col-12"
            style={{
              display: "flex",
              justifyContent: "flex-start", // left aligned
              textAlign: "left",
              flexDirection: "column",
            }}
          >
            <div className="content">
              <div className="inner">
                {!isMobile && (
                  <div
                    className="rbt-new-badge rbt-new-badge-one"
                    style={{ marginTop: isTablet ? 25 : 0 }}
                  >
                    <span className="rbt-new-badge-icon">
                      <PersonSearchIcon sx={{ color: "#228756", fontSize: 30 }} />
                    </span>{" "}
                    Trusted by People, Powered by Verified Therapists
                  </div>
                )}





                {/* H1 Banner */}
                {!isMobile && (
                  <h1
                    className="title"
                    aria-label="Bharat's Growing Network of Verified Therapists Connecting You to Trusted Counselling Support"
                    style={{
                      fontSize: "4rem",
                      lineHeight: "4.5rem",
                      marginTop: 0,
                      textAlign: "left",
                      wordBreak: "break-word",
                    }}
                  >
                    India's Growing Network of{" "}
                    <span
                      className="theme-gradient"
                      style={{
                        background: "linear-gradient(90deg, #228756, #56ab2f)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Verified Therapists
                    </span>{" "}
                    Connecting You to{" "}
                    <span
                      className="theme-gradient-alt"
                      style={{
                        background: "linear-gradient(90deg, #004e92, #005bea)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Trusted Counselling Support
                    </span>
                  </h1>
                )}



                {isMobile && (
                  <>
                    {/* Main Banner Heading */}
                    <div style={{
                      textAlign: "center",
                      marginBottom: "15px",
                      width: "100%",
                      boxSizing: "border-box",
                      overflow: "hidden"
                    }}>
                      <h1 style={{
                        fontSize: "clamp(1.8rem, 6vw, 2.4rem)",
                        fontWeight: "700",
                        color: "#10422aff",
                        marginBottom: "10px",
                        lineHeight: "1.1",
                        textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                      }}>
                        Find Your{" "}
                        <span style={{
                          position: "relative",
                          color: "#228756"
                        }}>
                          Affordable
                          <span style={{
                            position: "absolute",
                            bottom: "-8px",
                            left: "-8px",
                            right: "-8px",
                            height: "6px",
                            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='6' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0 3 Q 7.5 0, 15 3 T 30 3 T 45 3 T 60 3' stroke='%23ffd700' stroke-width='2' fill='none' stroke-linecap='round'/%3e%3c/svg%3e")`,
                            backgroundRepeat: "repeat-x",
                            backgroundPosition: "0 50%",
                            transform: "rotate(-0.5deg)",
                            opacity: 1
                          }}></span>
                        </span>{" "}
                        <span style={{
                          fontFamily: "'Dancing Script', cursive",
                          fontSize: "1.1em",
                          color: "#10422aff",
                          fontWeight: "600"
                        }}>
                          Therapist
                        </span>
                      </h1>
                      <p style={{
                        fontSize: "1.1rem",
                        color: "#2d5a47",
                        fontWeight: "500",
                        marginBottom: "0",
                        lineHeight: "1.3",
                        padding: "0 10px"
                      }}>
                       Start your journey to mental clarity and emotional balance.
                      </p>

                      {/* Feature Pills */}
                      <div style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "6px",
                        marginTop: "15px",
                        flexWrap: "wrap",
                        alignItems: "center",
                        width: "100%",
                        boxSizing: "border-box",
                        padding: "0 5px"
                      }}>
                        <div style={{
                          backgroundColor: "#f1ff71f5",
                          padding: "6px 10px",
                          borderRadius: "18px",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                          fontSize: "0.78rem",
                          fontWeight: "500",
                          color: "#000000ff",
                          whiteSpace: "nowrap",
                          minHeight: "28px",
                          display: "flex",
                          alignItems: "center",
                          flex: "1 1 auto",
                          minWidth: "0",
                          maxWidth: "calc(33.333% - 4px)"
                        }}>
                          💰 Affordable Therapists
                        </div>
                        <div style={{
                          backgroundColor: "#6cff98c9",
                          padding: "6px 10px",
                          borderRadius: "18px",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                          fontSize: "0.78rem",
                          fontWeight: "500",
                          color: "#000000ff",
                          whiteSpace: "nowrap",
                          minHeight: "28px",
                          display: "flex",
                          alignItems: "center",
                          flex: "1 1 auto",
                          minWidth: "0",
                          maxWidth: "calc(33.333% - 4px)"
                        }}>
                          📞 Free Follow-Up
                        </div>
                        <div style={{
                          backgroundColor: "#fc97ffc9",
                          padding: "6px 10px",
                          borderRadius: "18px",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                          fontSize: "0.78rem",
                          fontWeight: "500",
                          color: "#000000ff",
                          whiteSpace: "nowrap",
                          minHeight: "28px",
                          display: "flex",
                          alignItems: "center",
                          flex: "1 1 auto",
                          minWidth: "0",
                          maxWidth: "calc(33.333% - 4px)"
                        }}>
                          🌐 Multilingual Support
                        </div>
                      </div>
                    </div>

                    {/* Banner Slider for Ads - Mobile Only */}
                    <div style={{ marginTop: "15px", marginBottom: "15px" }}>
                      <BannerSlider isMobile={true} />
                    </div>

                    <ConsultationForm showHeading={false} />
                  </>
                )}





                {/* Centered description on mobile */}
                <p
                  className="description"
                  style={{
                    textAlign: isMobile ? "center" : "left",
                    marginTop: "15px",
                    color: isMobile ? "black" : "inherit",
                  }}
                >
                  Book{" "}
                  <span style={{ color: "#004e92", fontWeight: "bold" }}>
                    verified psychologists
                  </span>{" "}
                  online or in-person in Noida. Trusted therapist anytime.
                </p>

                {!isMobile && (
                  <>
                    {/* Avatar Section */}
                    <div className="rbt-like-total">
                      <div className="profile-share" style={{ justifyContent: "flex-start" }}>
                        {[ClientImg, Fabiha, counselling1].map((img, i) => (
                          <Link
                            key={i}
                            to="#"
                            className="avatar"
                            data-tooltip={`Verified Psychologist ${i + 1}`}
                            tabIndex="0"
                          >
                            <ImageTag
                              src={img}
                              width={55}
                              height={55}
                              alt={`Certified Psychologist Avatar ${i + 1} - Choose Your Therapist`}
                            />
                          </Link>
                        ))}

                        <div className="more-author-text" style={{ textAlign: "left" }}>
                          <h5 className="total-join-students">
                            Over 5,245+ already on their wellness journey.
                          </h5>
                          <p className="subtitle">Your well-being awaits.</p>
                        </div>
                      </div>
                    </div>

                    {/* Get Started Button */}
                    <div
                      className="slider-btn"
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        marginTop: "20px",
                      }}
                    >
                      <Link
                        className="rbt-btn btn-gradient hover-icon-reverse"
                        to="/view-all-therapist"
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">Check Therapist Directory</span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right"></i>
                          </span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right"></i>
                          </span>
                        </span>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Consultation Form */}
          {!isMobile && (
            <div
              className="col-lg-4 col-md-12 col-sm-12 col-12"
              style={{ marginTop: 20, marginBottom: 30 }}
            >
              <div style={{
                backgroundColor: "white",
                padding: isMobile ? "20px" : "30px",
                borderRadius: "15px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                border: "2px solid #e8f5e8",
                marginBottom: "20px"
              }}>
                <ConsultationForm showHeading={false} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
