import React from "react";
import { Container, Typography, TextField, Button, Paper, Box, Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import MyNavbar from "../components/navbar";
import Footer from "../components/footer";

export default function LeadPage() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle lead submission logic (email, Google Sheet, backend)
    alert("Thank you for reaching out! Our team will contact you soon.");
  };

  return (
    <>
      <MyNavbar />

      <Box
        sx={{
          background: "linear-gradient(135deg, #f3f4ff, #e8ebff)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: isMobile ? "40px 15px" : "60px 20px",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            {/* LEFT SECTION */}
            <Grid item xs={12} md={6}>
              <Box sx={{ padding: 2 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: "#1a237e",
                    marginBottom: 2,
                    textAlign: isMobile ? "center" : "left",
                    fontSize: isMobile ? "1.8rem" : "2.5rem",
                  }}
                >
                  Start Your Healing Journey 🌿
                </Typography>
                <Typography
                  sx={{
                    fontSize: isMobile ? "1rem" : "1.1rem",
                    color: "#444",
                    marginBottom: 3,
                    lineHeight: 1.8,
                    textAlign: isMobile ? "center" : "left",
                  }}
                >
                  Whether you’re struggling with overthinking, anxiety, relationships, or stress — therapy can help you reconnect with peace and clarity.
                </Typography>
                <Paper
                  elevation={3}
                  sx={{
                    background: "#fff",
                    padding: 2,
                    borderRadius: 2,
                    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                    textAlign: "center",
                  }}
                >
                  <Typography sx={{ color: "#333", fontSize: 0.95 }}>
                    ✅ Confidential & Non-Judgmental Space <br />
                    ✅ Certified Psychologists (Online & Offline - NCR) <br />
                    ✅ Flexible Slots & Affordable Plans
                  </Typography>
                </Paper>
              </Box>
            </Grid>

            {/* RIGHT SECTION - FORM */}
            <Grid item xs={12} md={6}>
              <Paper
                elevation={4}
                sx={{
                  background: "#fff",
                  padding: isMobile ? "30px 20px" : "40px 30px",
                  borderRadius: 3,
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: "#1a237e",
                    textAlign: "center",
                    marginBottom: 1,
                  }}
                >
                  Book Your Consultation
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#555",
                    marginBottom: 3,
                    fontSize: 0.95,
                  }}
                >
                  Fill out the form and our team will get in touch within 24 hours.
                </Typography>

                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                  <TextField
                    label="Full Name"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ background: "#f9f9fc", borderRadius: 1 }}
                  />
                  <TextField
                    label="Email Address"
                    type="email"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ background: "#f9f9fc", borderRadius: 1 }}
                  />
                  <TextField
                    label="Contact Number"
                    type="tel"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ background: "#f9f9fc", borderRadius: 1 }}
                  />
                  <TextField
                    label="Message / Concern"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    sx={{ background: "#f9f9fc", borderRadius: 1 }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      background: "linear-gradient(135deg, #3949ab, #5c6bc0)",
                      color: "#fff",
                      padding: "12px 0",
                      borderRadius: 2,
                      fontWeight: 600,
                      textTransform: "none",
                      "&:hover": {
                        background: "linear-gradient(135deg, #303f9f, #3949ab)",
                      },
                    }}
                  >
                    Submit Inquiry
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
