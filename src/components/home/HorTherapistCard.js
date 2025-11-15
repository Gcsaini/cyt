import React, { useState, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import ProfileCardHor from "./profile-card-hor";
import { Container, Box, CircularProgress } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";
import { fetchData } from "../../utils/actions";
import { getTherapistProfiles } from "../../utils/url";
import ErrorPage from "../../pages/error-page";

const HorTherapistCards = () => {
  const [therapists, setTherapists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  // Temporary fallback data for testing
  const fallbackData = [
    {
      _id: "1",
      user: { name: "Dr. Test Therapist", profile: "default-profile.png" },
      profile_type: "Clinical Psychologist",
      language_spoken: "English, Hindi",
      state: "Delhi",
      year_of_exp: "5",
      services_offered: "Anxiety, Depression, Couples Therapy",
      priority: 1
    }
  ];

  console.log("HorTherapistCard state - therapists:", therapists, "loading:", loading, "error:", error);

  useEffect(() => {
    const getData = async () => {
      try {
        console.log("Fetching therapist profiles...");
        const res = await fetchData(getTherapistProfiles);
        console.log("API Response:", res);
        if (res.status) {
          // Filter to only show recommended therapists (priority === 1)
          const recommendedTherapists = (res.data || []).filter(therapist => therapist.priority === 1);
          setTherapists(recommendedTherapists);
          console.log("Recommended therapists data:", recommendedTherapists);
        } else {
          setError(true);
          console.log("API returned error status");
        }
      } catch (err) {
        console.log("API Error:", err);
        console.log("Using fallback data for testing");
        // Filter fallback data to only show recommended (assuming priority 1)
        const recommendedFallback = fallbackData.filter(therapist => therapist.priority === 1);
        setTherapists(recommendedFallback);
        // setError(true); // Comment out to show fallback data
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (error) {
    return <ErrorPage />;
  }

  if (loading) {
    return (
      <Box sx={{ py: 8, backgroundColor: '#ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{
      py: isMobile ? 4 : 6,
      background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 80%, rgba(34, 135, 86, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0, 127, 153, 0.03) 0%, transparent 50%)',
        pointerEvents: 'none'
      }
    }}>
      <Container maxWidth={false} sx={{ px: isMobile ? 2 : 3, position: 'relative', zIndex: 1 }}>

        {/* Recommended Therapists Heading */}
        <div style={{
          marginBottom: isMobile ? 24 : 32,
          paddingLeft: isMobile ? '16px' : '20px',
          paddingRight: isMobile ? '16px' : '20px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: isMobile ? '16px' : '20px'
          }}>
            <div style={{ flex: 1 }}>
              <h2 style={{
                background: 'linear-gradient(135deg, #228756 0%, #007f99 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: isMobile ? "28px" : "42px",
                fontWeight: "800",
                marginBottom: isMobile ? "12px" : "16px",
                lineHeight: 1.2,
                letterSpacing: '-0.02em'
              }}>
                Recommended Therapists
              </h2>
              <p style={{
                color: "#64748b",
                fontSize: isMobile ? "15px" : "17px",
                marginBottom: "0",
                lineHeight: 1.6,
                fontWeight: "400"
              }}>
                Explore our carefully curated list of highly recommended therapists, selected for their expertise and proven track record in mental health support.
              </p>
            </div>
            {!isMobile && (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link
                  to="/view-all-therapist"
                  style={{
                    background: 'linear-gradient(135deg, #228756 0%, #1a6b45 100%)',
                    color: '#fff',
                    padding: '14px 28px',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontWeight: '600',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    boxShadow: '0 4px 15px rgba(34, 135, 86, 0.3)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #1a6b45 0%, #228756 100%)';
                    e.target.style.transform = 'translateY(-3px) scale(1.02)';
                    e.target.style.boxShadow = '0 8px 25px rgba(34, 135, 86, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #228756 0%, #1a6b45 100%)';
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 4px 15px rgba(34, 135, 86, 0.3)';
                  }}
                >
                  View All Therapists
                  <span style={{ fontSize: '18px', transition: 'transform 0.3s ease' }}>→</span>
                </Link>
              </div>
            )}
          </div>
        </div>

        <Box sx={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: isMobile ? '20px' : '24px',
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
          p: isMobile ? 2 : 3,
          mx: isMobile ? 2 : 0
        }}>
         {therapists.length>0 && <Swiper
            modules={[Autoplay]}
            spaceBetween={isMobile ? 12 : 16}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: isMobile ? 1 : 2,
                spaceBetween: isMobile ? 12 : 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={1000}
            grabCursor={true}
            style={{
              padding: isMobile ? '0 8px' : '0 12px',
              borderRadius: '16px'
            }}
          >
            {therapists.map((therapist) => (
              <SwiperSlide key={therapist._id} style={{
                display: 'flex',
                justifyContent: 'center',
                padding: isMobile ? '8px 0' : '12px 0'
              }}>
                <Box sx={{
                  width: '100%',
                  maxWidth: isMobile ? '100%' : '550px',
                  transform: 'translateZ(0)', // Hardware acceleration
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    transition: 'transform 0.3s ease'
                  }
                }}>
                  <ProfileCardHor pageData={therapist} favrioutes={[]} showOnlyBookButton={true} />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
}
        </Box>
{/* 
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2" sx={{ color: '#666' }}>
            Showing {therapists.length} of 500+ therapists.
            <Box
              component="button"
              sx={{
                color: '#228756',
                fontWeight: 500,
                ml: 1,
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                textDecoration: 'underline',
                '&:hover': {
                  textDecoration: 'none',
                },
              }}
            >
              View all therapists
            </Box>
          </Typography>
        </Box> */}
      </Container>
    </Box>
  );
};

export default HorTherapistCards;
