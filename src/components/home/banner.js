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

  // State for top therapists section
  const [topTherapists, setTopTherapists] = useState([]);
  const [topTherapistsLoading, setTopTherapistsLoading] = useState(true);

  // Fetch top therapists data
  useEffect(() => {
    const getTopTherapists = async () => {
      try {
        const res = await fetchData(getTherapistProfiles);
        if (res.status && res.data) {
          // Get all therapists data
          const allTherapists = res.data || [];

          // First, get all priority 1 therapists
          const priorityTherapists = allTherapists.filter(therapist => therapist.priority === 1);

          // If we have less than 10 priority therapists, fill with other therapists
          let recommendedTherapists = [...priorityTherapists];

          if (recommendedTherapists.length < 10) {
            const remainingNeeded = 10 - recommendedTherapists.length;
            const otherTherapists = allTherapists.filter(therapist => therapist.priority !== 1).slice(0, remainingNeeded);
            recommendedTherapists = [...recommendedTherapists, ...otherTherapists];
          }

          // Limit to 10 therapists for mobile view
          setTopTherapists(recommendedTherapists.slice(0, 10));
        }
      } catch (error) {
        console.log("Error fetching top therapists:", error);
        // Fallback to empty array
        setTopTherapists([]);
      } finally {
        setTopTherapistsLoading(false);
      }
    };

    getTopTherapists();
  }, []);

  return (
    <section
        className="rbt-banner-area rbt-banner-1"
        style={{
          paddingTop: isMobile ? "30px" : "40px",
          marginTop: isMobile ? "-50px" : "0px",
          paddingBottom: isMobile ? "40px" : "30px",
          marginBottom: isMobile ? "10px" : "20px",

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
                    {/* Professional App-like Mobile Banner */}
                    <div style={{
                      background: "linear-gradient(135deg, #228756 0%, #2d8a5a 25%, #36b477 50%, #2d8a5a 75%, #228756 100%)",
                      borderRadius: "0 0 24px 24px",
                      padding: "20px",
                      margin: "0 -20px 20px -20px",
                      boxShadow: "0 8px 32px rgba(34, 135, 86, 0.3), 0 4px 16px rgba(0,0,0,0.1)",
                      position: "relative",
                      overflow: "hidden"
                    }}>
                      {/* Decorative background elements */}
                      <div style={{
                        position: "absolute",
                        top: "-50px",
                        right: "-50px",
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.1)",
                        filter: "blur(20px)"
                      }}></div>
                      <div style={{
                        position: "absolute",
                        bottom: "-30px",
                        left: "-30px",
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.08)",
                        filter: "blur(15px)"
                      }}></div>
                      <div style={{
                        position: "absolute",
                        top: "20px",
                        left: "20px",
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.6)"
                      }}></div>
                      <div style={{
                        position: "absolute",
                        top: "60px",
                        right: "40px",
                        width: "2px",
                        height: "2px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.4)"
                      }}></div>
                      <div style={{
                        position: "absolute",
                        bottom: "40px",
                        left: "60px",
                        width: "3px",
                        height: "3px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.5)"
                      }}></div>

                      {/* Header Section */}
                      <div style={{ textAlign: "center", marginBottom: "20px", position: "relative", zIndex: 1 }}>
                        <h1 style={{
                          fontSize: "clamp(2.2rem, 10vw, 2.8rem)",
                          fontWeight: "900",
                          color: "white",
                          marginBottom: "10px",
                          lineHeight: "1.1",
                          textShadow: "0 4px 8px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)",
                          letterSpacing: "-0.02em"
                        }}>
                          Find Your Afffordable Therapist
                        </h1>
                        <p style={{
                          color: "rgba(255,255,255,0.95)",
                          fontSize: "15px",
                          fontWeight: "500",
                          margin: "0",
                          lineHeight: "1.4",
                          textShadow: "0 1px 2px rgba(0,0,0,0.2)"
                        }}>
                          Professional mental health support at your fingertips
                        </p>
                      </div>

                      {/* Compact Search Bar */}
                      <div style={{
                        backgroundColor: "rgba(255,255,255,0.98)",
                        borderRadius: "16px",
                        padding: "14px 18px",
                        marginBottom: "18px",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.12), 0 2px 8px rgba(34, 135, 86, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        border: "1px solid rgba(255,255,255,0.2)",
                        backdropFilter: "blur(10px)",
                        position: "relative",
                        zIndex: 1
                      }}>
                        <div style={{
                          backgroundColor: "#228756",
                          borderRadius: "10px",
                          width: "32px",
                          height: "32px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 2px 8px rgba(34, 135, 86, 0.3)"
                        }}>
                          <i className="feather-search" style={{
                            color: "white",
                            fontSize: "14px"
                          }}></i>
                        </div>
                        <input
                          type="text"
                          placeholder="Search therapists..."
                          style={{
                            border: "none",
                            outline: "none",
                            flex: 1,
                            fontSize: "15px",
                            color: "#333",
                            background: "transparent",
                            fontWeight: "500",
                            placeholder: "#999"
                          }}
                        />
                        <div style={{
                          background: "linear-gradient(135deg, #228756 0%, #36b477 100%)",
                          borderRadius: "12px",
                          padding: "8px 16px",
                          color: "white",
                          fontSize: "13px",
                          fontWeight: "700",
                          cursor: "pointer",
                          boxShadow: "0 3px 12px rgba(34, 135, 86, 0.4)",
                          transition: "all 0.2s ease",
                          border: "1px solid rgba(255,255,255,0.2)"
                        }}
                        onMouseOver={(e) => {
                          e.target.style.transform = "translateY(-1px)";
                          e.target.style.boxShadow = "0 4px 16px rgba(34, 135, 86, 0.5)";
                        }}
                        onMouseOut={(e) => {
                          e.target.style.transform = "translateY(0)";
                          e.target.style.boxShadow = "0 3px 12px rgba(34, 135, 86, 0.4)";
                        }}>
                          Search
                        </div>
                      </div>

                      {/* Quick Action Buttons */}
                      <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "16px",
                        marginBottom: "24px",
                        position: "relative",
                        zIndex: 1
                      }}>
                        <Link to="/therapy-booking" style={{
                          backgroundColor: "rgba(255,255,255,0.98)",
                          borderRadius: "20px",
                          padding: "20px 16px",
                          textDecoration: "none",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "10px",
                          boxShadow: "0 8px 24px rgba(0,0,0,0.12), 0 4px 12px rgba(34, 135, 86, 0.15)",
                          transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                          border: "1px solid rgba(255,255,255,0.3)",
                          backdropFilter: "blur(15px)",
                          position: "relative",
                          overflow: "hidden"
                        }}
                        onMouseOver={(e) => {
                          e.target.style.transform = "translateY(-4px) scale(1.02)";
                          e.target.style.boxShadow = "0 12px 32px rgba(0,0,0,0.18), 0 6px 16px rgba(34, 135, 86, 0.25)";
                        }}
                        onMouseOut={(e) => {
                          e.target.style.transform = "translateY(0) scale(1)";
                          e.target.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12), 0 4px 12px rgba(34, 135, 86, 0.15)";
                        }}>
                          <div style={{
                            position: "absolute",
                            top: "-20px",
                            right: "-20px",
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, rgba(34, 135, 86, 0.1) 0%, rgba(54, 180, 119, 0.1) 100%)",
                            filter: "blur(10px)"
                          }}></div>
                          <div style={{
                            background: "linear-gradient(135deg, #228756 0%, #36b477 100%)",
                            borderRadius: "16px",
                            width: "48px",
                            height: "48px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 6px 16px rgba(34, 135, 86, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
                            position: "relative",
                            zIndex: 1
                          }}>
                            <i className="feather-calendar" style={{
                              color: "white",
                              fontSize: "20px"
                            }}></i>
                          </div>
                          <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                            <div style={{
                              fontSize: "14px",
                              fontWeight: "700",
                              color: "#333",
                              marginBottom: "3px",
                              textShadow: "0 1px 2px rgba(0,0,0,0.05)"
                            }}>
                              Book Consultation
                            </div>
                            <div style={{
                              fontSize: "12px",
                              color: "#666",
                              fontWeight: "500"
                            }}>
                              15 min free call
                            </div>
                          </div>
                        </Link>

                        <Link to="/view-all-therapist" style={{
                          backgroundColor: "rgba(255,255,255,0.98)",
                          borderRadius: "20px",
                          padding: "20px 16px",
                          textDecoration: "none",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "10px",
                          boxShadow: "0 8px 24px rgba(0,0,0,0.12), 0 4px 12px rgba(34, 135, 86, 0.15)",
                          transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                          border: "1px solid rgba(255,255,255,0.3)",
                          backdropFilter: "blur(15px)",
                          position: "relative",
                          overflow: "hidden"
                        }}
                        onMouseOver={(e) => {
                          e.target.style.transform = "translateY(-4px) scale(1.02)";
                          e.target.style.boxShadow = "0 12px 32px rgba(0,0,0,0.18), 0 6px 16px rgba(34, 135, 86, 0.25)";
                        }}
                        onMouseOut={(e) => {
                          e.target.style.transform = "translateY(0) scale(1)";
                          e.target.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12), 0 4px 12px rgba(34, 135, 86, 0.15)";
                        }}>
                          <div style={{
                            position: "absolute",
                            top: "-15px",
                            left: "-15px",
                            width: "35px",
                            height: "35px",
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, rgba(54, 180, 119, 0.1) 0%, rgba(34, 135, 86, 0.1) 100%)",
                            filter: "blur(8px)"
                          }}></div>
                          <div style={{
                            background: "linear-gradient(135deg, #36b477 0%, #228756 100%)",
                            borderRadius: "16px",
                            width: "48px",
                            height: "48px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 6px 16px rgba(34, 135, 86, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
                            position: "relative",
                            zIndex: 1
                          }}>
                            <i className="feather-users" style={{
                              color: "white",
                              fontSize: "20px"
                            }}></i>
                          </div>
                          <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                            <div style={{
                              fontSize: "14px",
                              fontWeight: "700",
                              color: "#333",
                              marginBottom: "3px",
                              textShadow: "0 1px 2px rgba(0,0,0,0.05)"
                            }}>
                              Find Therapists
                            </div>
                            <div style={{
                              fontSize: "12px",
                              color: "#666",
                              fontWeight: "500"
                            }}>
                              Browse directory
                            </div>
                          </div>
                        </Link>
                      </div>

                    </div>



                    {/* Top Therapists Section */}
                    <div style={{ padding: "0 20px", marginBottom: "100px" }}>
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "20px",
                        padding: "16px 20px",
                        backgroundColor: "rgba(255,255,255,0.9)",
                        borderRadius: "16px",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                        border: "1px solid rgba(34, 135, 86, 0.1)",
                        backdropFilter: "blur(10px)"
                      }}>
                        <h3 style={{
                          fontSize: "20px",
                          fontWeight: "800",
                          color: "#333",
                          margin: "0",
                          background: "linear-gradient(135deg, #228756 0%, #36b477 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text"
                        }}>
                          Top Therapists
                        </h3>
                        <Link to="/view-all-therapist" style={{
                          color: "#228756",
                          textDecoration: "none",
                          fontSize: "15px",
                          fontWeight: "700",
                          padding: "8px 16px",
                          borderRadius: "12px",
                          backgroundColor: "rgba(34, 135, 86, 0.1)",
                          transition: "all 0.2s ease",
                          border: "1px solid rgba(34, 135, 86, 0.2)"
                        }}
                        onMouseOver={(e) => {
                          e.target.style.backgroundColor = "rgba(34, 135, 86, 0.15)";
                          e.target.style.transform = "translateX(2px)";
                        }}
                        onMouseOut={(e) => {
                          e.target.style.backgroundColor = "rgba(34, 135, 86, 0.1)";
                          e.target.style.transform = "translateX(0)";
                        }}>
                          View All →
                        </Link>
                      </div>

                      {/* Horizontal Scrollable Therapist Cards */}
                      <div style={{
                        display: "flex",
                        gap: "12px",
                        overflowX: "auto",
                        paddingBottom: "8px",
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                        WebkitOverflowScrolling: "touch"
                      }}
                      className="hide-scrollbar">
                        {/* Therapist Cards */}
                        {topTherapistsLoading ? (
                          // Loading skeleton
                          Array.from({ length: 10 }).map((_, index) => (
                            <div
                              key={index}
                              style={{
                                minWidth: "140px",
                                backgroundColor: "white",
                                borderRadius: "16px",
                                padding: "16px",
                                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                                border: "1px solid #f0f0f0",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "8px"
                              }}
                            >
                              <div style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "50%",
                                backgroundColor: "#f0f0f0",
                                animation: "shimmer 1.5s infinite"
                              }} />
                              <div style={{ textAlign: "center", width: "100%" }}>
                                <div style={{
                                  height: "14px",
                                  backgroundColor: "#f0f0f0",
                                  marginBottom: "4px",
                                  borderRadius: "4px",
                                  animation: "shimmer 1.5s infinite"
                                }} />
                                <div style={{
                                  height: "12px",
                                  backgroundColor: "#f0f0f0",
                                  marginBottom: "4px",
                                  borderRadius: "4px",
                                  animation: "shimmer 1.5s infinite"
                                }} />
                              </div>
                            </div>
                          ))
                        ) : topTherapists.length > 0 ? (
                          topTherapists.map((therapist) => (
                            <Link
                              key={therapist._id}
                              to={`/therapist-checkout/${therapist._id}`}
                              style={{
                                minWidth: "150px",
                                backgroundColor: "rgba(255,255,255,0.98)",
                                borderRadius: "20px",
                                padding: "18px 16px",
                                boxShadow: "0 6px 20px rgba(0,0,0,0.1), 0 2px 8px rgba(34, 135, 86, 0.08)",
                                border: "1px solid rgba(255,255,255,0.3)",
                                textDecoration: "none",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "10px",
                                transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                backdropFilter: "blur(10px)",
                                position: "relative",
                                overflow: "hidden"
                              }}
                              onMouseOver={(e) => {
                                e.target.style.transform = "translateY(-4px) scale(1.02)";
                                e.target.style.boxShadow = "0 12px 32px rgba(0,0,0,0.15), 0 4px 16px rgba(34, 135, 86, 0.12)";
                              }}
                              onMouseOut={(e) => {
                                e.target.style.transform = "translateY(0) scale(1)";
                                e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1), 0 2px 8px rgba(34, 135, 86, 0.08)";
                              }}
                            >
                              {/* Decorative background element */}
                              <div style={{
                                position: "absolute",
                                top: "-25px",
                                right: "-25px",
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, rgba(34, 135, 86, 0.08) 0%, rgba(54, 180, 119, 0.08) 100%)",
                                filter: "blur(12px)"
                              }}></div>
                              <div style={{
                                width: "64px",
                                height: "64px",
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, #f8f9fa 0%, #e8f5e8 100%)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "3px solid #228756",
                                overflow: "hidden",
                                boxShadow: "0 4px 16px rgba(34, 135, 86, 0.2), inset 0 1px 0 rgba(255,255,255,0.3)",
                                position: "relative",
                                zIndex: 1
                              }}>
                                {therapist.user?.profile ? (
                                  <ImageTag
                                    src={`${imagePath}/${therapist.user.profile}`}
                                    alt={therapist.user?.name || 'Therapist'}
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      objectFit: "cover"
                                    }}
                                  />
                                ) : (
                                  <i className="feather-user" style={{
                                    color: "#228756",
                                    fontSize: "24px"
                                  }}></i>
                                )}
                              </div>
                              <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                                <div style={{
                                  fontSize: "15px",
                                  fontWeight: "800",
                                  color: "#333",
                                  marginBottom: "4px",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  maxWidth: "130px",
                                  textShadow: "0 1px 2px rgba(0,0,0,0.05)",
                                  cursor: "default",
                                  userSelect: "none"
                                }}>
                                  {therapist.user?.name || 'Therapist'}
                                </div>
                                <div style={{
                                  fontSize: "13px",
                                  color: "#228756",
                                  marginBottom: "6px",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  maxWidth: "130px",
                                  fontWeight: "600",
                                  cursor: "default",
                                  userSelect: "none"
                                }}>
                                  {therapist.profile_type || 'Counselor'}
                                </div>
                                <div style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "3px",
                                  justifyContent: "center",
                                  backgroundColor: "rgba(34, 135, 86, 0.08)",
                                  borderRadius: "12px",
                                  padding: "4px 8px",
                                  cursor: "default",
                                  userSelect: "none"
                                }}>
                                  {[1,2,3,4,5].map((star) => (
                                    <i key={star} className="feather-star" style={{
                                      fontSize: "11px",
                                      color: star <= 4 ? "#FFD700" : "#ddd",
                                      filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.1))"
                                    }}></i>
                                  ))}
                                  <span style={{
                                    fontSize: "11px",
                                    color: "#228756",
                                    marginLeft: "4px",
                                    fontWeight: "700"
                                  }}>
                                    4.8
                                  </span>
                                </div>
                              </div>
                            </Link>
                          ))
                        ) : (
                          // No therapists available
                          <div style={{
                            padding: "20px",
                            textAlign: "center",
                            color: "#666",
                            fontSize: "14px"
                          }}>
                            No therapists available
                          </div>
                        )}
                      </div>

                      <style jsx>{`
                        .hide-scrollbar::-webkit-scrollbar {
                          display: none;
                        }
                        .hide-scrollbar {
                          -ms-overflow-style: none;
                          scrollbar-width: none;
                        }
                      `}</style>
                    </div>


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
