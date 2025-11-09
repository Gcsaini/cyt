import React from "react";

import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useMediaQuery from "@mui/material/useMediaQuery";
import { TypeAnimation } from "react-type-animation"; // ✅ Make sure installed
import ImageTag from "../../utils/image-tag";

import ConsultationForm from "./consultation-form";
import ClientImg from "../../assets/img/avatar-027dc8.png";
import Fabiha from "../../assets/img/psychologist.png";
import counselling1 from "../../assets/img/counselling.png";


export default function Banner() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));


  return (
    <section
      className="rbt-banner-area rbt-banner-1"
      style={{
        paddingTop: isMobile ? "0px" : "0px",
        marginTop: isMobile ? "-40px" : "-60px",
        paddingBottom: isMobile ? "0px" : "0px", // no negative padding
        marginBottom: isMobile ? "20px" : "40px", // ye bottom gap kam karega
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

      <div className="container mt--60">
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
                {/* Google Rating + Tagline (Only Mobile) */}
                {isMobile && (
                  <div style={{ textAlign: "center", marginBottom: 10 }}>
                    {/* Google Business Link (Top Icon) */}
                    <a
                      href="https://share.google/eHqCWD5en5vV2ZSyV
" // <-- apna Google Business link daalo
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 2,
                      }}
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                        alt="Google Business"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </a>

                    {/* ⭐ Google Rating */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: 12,
                      }}
                    >
                      {/* 5 Golden Stars */}
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} style={{ color: "#f4b400", fontSize: "1.8rem" }}>★</span>
                      ))}

                      {/* Rating Text */}
                      <span
                        style={{
                          fontWeight: 700,
                          fontSize: "1.3rem",
                          color: "#222",
                        }}
                      >
                        4.9/5 Google Rating
                      </span>
                    </div>

                    {/* Tagline with animation */}
                    <div
                      style={{
                        display: "inline-block",
                        padding: "8px 18px",
                        fontSize: "1.05rem",
                        color: "#fff",
                        fontWeight: 600,
                        borderRadius: "22px",
                        background: "linear-gradient(135deg, #228756, #007f99)",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                        animation: "fadeIn 1s ease-in-out, pulse 2s infinite",
                      }}
                    >
                      Because Healing Starts With Your Choice
                    </div>
                  </div>
                )}




                {/* H1 Banner */}
                <h1
                  className={isMobile ? "banner-text-title" : "title"}
                  aria-label="Bharat's Growing Network of Verified Therapists Connecting You to Trusted Counselling Support"
                  style={{
                    fontSize: isMobile ? "3.5rem" : "4rem",
                    lineHeight: isMobile ? "3.5rem" : "4.5rem",
                    marginTop: 0,
                    textAlign: isMobile ? "center" : "left",
                    wordBreak: "break-word",
                  }}
                >
                  India's Growing Network of
                  {isMobile ? <br /> : " "} {/* ✅ Mobile = break, Laptop = space */}

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


                {/* TypeAnimation hidden on mobile */}
                {!isMobile && (
                  <div style={{ minHeight: "3em", display: "flex", alignItems: "center" }}>
                    <TypeAnimation
                      sequence={[
                        "Book a Psychologist",
                        1500,
                        "Access Online Counselling",
                        1500,
                        "Meet Psychologists In-Person",
                        1500,
                        "Trusted Therapy Across States",
                        1500,
                        "Affordable Therapy Sessions",
                        1500,
                      ]}
                      wrapper="div"
                      speed={10}
                      repeat={Infinity}
                      deletionSpeed={20}
                      className="theme-gradient"
                      style={{
                        display: "inline-block",
                        fontWeight: 700,
                        lineHeight: "1.5em",
                        fontSize: "clamp(1.5rem, 3vw, 2rem)",
                        whiteSpace: "normal",
                      }}
                    />
                  </div>
                )}

                {/* Centered description on mobile */}
                <p
                  className="description"
                  style={{
                    textAlign: isMobile ? "center" : "left",
                    marginTop: "15px",

                  }}
                >
                  Book{" "}
                  <span style={{ color: "#004e92", fontWeight: "bold" }}>
                    verified psychologists
                  </span>{" "}
                  online or in-person in Noida. Trusted therapist anytime.
                </p>

                {/* Avatar Section */}
                <div className="rbt-like-total">
                  <div className="profile-share" style={{ justifyContent: isMobile ? "center" : "flex-start" }}>
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

                    <div className="more-author-text" style={{ textAlign: isMobile ? "center" : "left" }}>
                      <h5 className="total-join-students">
                        Over 5,245+ already on their wellness journey.
                      </h5>
                      <p className="subtitle">Your well-being awa</p>
                    </div>
                  </div>
                </div>

                {/* Get Started Button */}
                <div
                  className="slider-btn"
                  style={{
                    display: "flex",
                    justifyContent: isMobile ? "center" : "flex-start",
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
              </div>
            </div>
          </div>

          {/* Consultation Form */}
          <div
            className="col-lg-4 col-md-12 col-sm-12 col-12"
            style={{ marginTop: isMobile ? 20 : 60, marginBottom: 100 }}
          >
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
