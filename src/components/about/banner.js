import React from "react";
import { TypeAnimation } from "react-type-animation";
import useMediaQuery from "@mui/material/useMediaQuery";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

const styles = `
.about-banner {
  position: relative;
  background: linear-gradient(135deg, #0f7a5aff, #047857, #065f46);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 90vh; /* reduced height */
  padding: 40px 20px;
  overflow: hidden;
}

.about-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 0;
}

.about-content {
  position: relative;
  z-index: 2;
  max-width: 850px;
}

/* Badge */
.about-badge {
  display: inline-flex;
  align-items: center;
  background: #fff;
  color: #065f28ff;
  padding: 8px 18px;
  border-radius: 50px;
  font-weight: 600;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Title */
.about-title {
  font-size: 46px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .about-title {
    font-size: 30px;
  }
}

/* Type animation fix */
.about-type-wrapper {
  display: inline-block;
  min-width: 200px;  /* fixed width */
  text-align: left;
  vertical-align: middle;
}

.about-type {
  background: linear-gradient(to right, #134113ff, #1a974eff); /* golden-orange */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
  display: inline-block;
}

/* Subtitle */
.about-subtitle {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 32px;
  color: #e5e5e5;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

/* Buttons */
.about-buttons {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  justify-content: center;
}

.btn {
  padding: 14px 30px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 16px;
}

.btn-primary {
  background: linear-gradient(to right, #fbbf24, #f97316);
  color: #ffffffff;
  box-shadow: 0 6px 16px rgba(251, 191, 36, 0.4);
}

.btn-primary:hover {
  transform: scale(1.05);
}

.btn-outline {
  background: rgba(8, 70, 39, 0.1);
  border: 2px solid #fff;
  color: #fff;
}

.btn-outline:hover {
  background: #fff;
  color: #065f46;
}

/* Decorative wave at bottom */
.about-wave {
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 80px;
  background: url('https://svgshare.com/i/15C2.svg') repeat-x;
  background-size: cover;
  z-index: 1;
}
`;

export default function AboutUsBanner() {
  useMediaQuery((theme) => theme.breakpoints.down("md")); 

  return (
    <>
      <style>{styles}</style>

      <section className="about-banner">
        <div className="about-overlay" />
        <div className="about-content">
          <div className="about-badge">
            <PersonSearchIcon style={{ fontSize: 24, marginRight: "6px" }} />
            <span>About CYT</span>
          </div>

          <h1 className="about-title">
            Because Therapists should be{" "}
            <span className="about-type-wrapper">
              <TypeAnimation
                sequence={[
                  "Verified ✅",
                  2000,
                  "Accessible 🌍",
                  2000,
                  "Specialized 🎯",
                  2000,
                ]}
                wrapper="span"
                speed={40}
                deletionSpeed={30}
                repeat={Infinity}
                className="about-type"
              />
            </span>
          </h1>

          <p className="about-subtitle">
            At CYT, we believe therapy should be easy to access, safe, and led
            by trusted professionals. Our mission is to connect you with the
            right therapist for your unique needs.
          </p>

          <div className="about-buttons">
            <a href="/login" className="btn btn-primary">
              Log in to Start
            </a>
            <a href="/contact" className="btn btn-outline">
              Contact Us
            </a>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="about-wave"></div>
      </section>
    </>
  );
}
