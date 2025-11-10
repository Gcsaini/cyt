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

  console.log("HorTherapistCard state - therapists:", therapists, "loading:", loading, "error:", error);

  useEffect(() => {
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
    <Box sx={{ py: 6, backgroundColor: '#ffffff' }}>
      <Container maxWidth={false} sx={{ px: 2.5 }}>

        {/* Recommended Therapists Heading */}
        <div style={{ marginBottom: 20, paddingLeft: isMobile ? '22px' : '25px', paddingRight: isMobile ? '22px' : '25px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ flex: 1 }}>
              <h2 style={{
                color: "#228756",
                fontSize: isMobile ? "29px" : "38px",
                fontWeight: "700",
                marginBottom: "10px"
              }}>
                Recommended Therapists
              </h2>
              <p style={{
                color: "#666",
                fontSize: "16px",
                marginBottom: "0"
              }}>
                Explore our carefully curated list of highly recommended therapists, selected for their expertise and proven track record in mental health support.
              </p>
            </div>
            {!isMobile && (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link
                  to="/view-all-therapist"
                  style={{
                    backgroundColor: '#228756',
                    color: '#fff',
                    padding: '10px 20px',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#1a6b45';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#228756';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  View All Therapists
                  <span style={{ fontSize: '16px' }}>→</span>
                </Link>
              </div>
            )}
          </div>
        </div>

        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
         {therapists.length>0 && <Swiper
            modules={[Autoplay]}
            spaceBetween={8}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={800}
            grabCursor={true}
            style={{ padding: '0 10px' }}
          >
            {therapists.map((therapist) => (
              <SwiperSlide key={therapist._id} style={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: '100%', maxWidth: '550px' }}>
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
