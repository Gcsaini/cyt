import React, { useState, useEffect } from "react";
import TherapistCard from "./TherapistCard";
import { Container, Typography, Box, CircularProgress } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { fetchData } from "../../utils/actions";
import { getTherapistProfiles } from "../../utils/url";
import ErrorPage from "../../pages/error-page";

const HorTherapistCards = () => {
  const [therapists, setTherapists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = async () => {
    try {
      const res = await fetchData(getTherapistProfiles, { priority: 1 });
      if (res.status) {
        setTherapists(res.data || []);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  console.log("therapist", therapists);

  useEffect(() => {
    getData();
  }, []);

  if (error) {
    return <ErrorPage />;
  }

  if (loading) {
    return (
      <Box sx={{ py: 8, backgroundColor: '#f8f9fa', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth={false} sx={{ px: 2.5 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 'bold',
              mb: 2,
              color: '#333',
            }}
          >
            Meet Our Expert <span style={{ color: '#228756' }}>Therapists</span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#666',
              fontSize: '1.9rem',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Connect with verified, experienced professionals ready to help you on your journey
          </Typography>
        </Box>

        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
         {therapists.length>0 && <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 5,
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
              <SwiperSlide key={therapist.id} style={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: '100%', maxWidth: '320px' }}>
                  <TherapistCard therapist={therapist} />
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
