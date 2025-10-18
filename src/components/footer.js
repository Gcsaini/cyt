import { useState, useEffect } from "react";
import logo1 from "../assets/img/logo.png";
import ImageTag from "../utils/image-tag";

export default function Footer() {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  useEffect(() => {
    const isAccepted = localStorage.getItem("cookiesAccepted") === "true";
    setCookiesAccepted(isAccepted);
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setCookiesAccepted(true);
  };

  return (
    <div style={{ position: "relative" }}>
      {/* 🍪 Cookie Consent Banner */}
      {!cookiesAccepted && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",
            maxWidth: "600px",
            background: "#f0fff4",
            border: "1px solid #a5d6a7",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            padding: "16px 20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 9999,
            animation: "fadeIn 0.4s ease-in-out",
          }}
        >
          <div
            style={{
              color: "#1b5e20",
              textAlign: "center",
              fontSize: "15px",
              lineHeight: 1.5,
              marginBottom: "12px",
            }}
          >
            🍪 We use cookies to enhance your browsing experience and ensure a
            secure connection. Please read our{" "}
            <a
              href="/privacy-policy"
              style={{
                color: "#2e7d32",
                fontWeight: 600,
                textDecoration: "underline",
              }}
            >
              Privacy Policy
            </a>
            .
          </div>
          <button
            onClick={handleAcceptCookies}
            style={{
              background: "#2e7d32",
              color: "#fff",
              border: "none",
              borderRadius: "25px",
              padding: "8px 30px",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "15px",
              boxShadow: "0 2px 6px rgba(46,125,50,0.2)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.background = "#1b5e20")}
            onMouseOut={(e) => (e.target.style.background = "#2e7d32")}
          >
            Accept
          </button>
        </div>
      )}

      {/* Animation CSS */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translate(-50%, 20px); }
            to { opacity: 1; transform: translate(-50%, 0); }
          }

          @media (max-width: 600px) {
            .cookie-banner {
              width: 95%;
              padding: 14px 16px;
              font-size: 14px;
            }
          }
        `}
      </style>

      {/* Separator */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      {/* Footer Content */}
      <footer className="rbt-footer footer-style-1">
        <div className="footer-top">
          <div className="container">
            <div className="row row--15 mt_dec--30">
              {/* Logo & Tagline */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30">
                <div className="footer-widget">
                  <div className="logo">
                    <a href="/">
                      <ImageTag
                        alt="Choose Your Therapist"
                        height={"50"}
                        width={"152"}
                        src={logo1}
                      />
                    </a>
                  </div>
                  <p className="description mt--20">
                    Because healing starts with your choice.
                  </p>
                  <div className="contact-btn mt--30">
                    <a
                      className="rbt-btn hover-icon-reverse btn-border-gradient radius-round"
                      href="/contact-us"
                    >
                      <div className="icon-reverse-wrapper">
                        <span className="btn-text">Connect With Us</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </div>
                    </a>
                  </div>

                  <div className="mt-4">
                    <h5 className="ft-title">Quick Links</h5>
                    <ul className="ft-link">
                      <li><a href="/how-it-works">How It Works</a></li>
                      <li><a href="/faqs">FAQ</a></li>
                      <li><a href="/emergency-support">Emergency Support</a></li>
                      <li><a href="/mentorship-for-students">Student Mentorship</a></li>
                      <li><a href="/therapist-registration">Therapist Registration</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* For Clients */}
              <div className="col-lg-2 col-md-6 col-sm-6 col-12 mt--30">
                <div className="footer-widget">
                  <h5 className="ft-title">For Clients</h5>
                  <ul className="ft-link">
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Sign Up</a></li>
                    <li><a href="/view-all-therapist">Therapist Directory</a></li>
                  </ul>
                  <h5 className="ft-title mt-3">Services for Daily Life Issues</h5>
                  <ul className="ft-link">
                    <li><a href="#">Stress & Anxiety Management</a></li>
                    <li><a href="#">Depression Support</a></li>
                    <li><a href="#">Relationship & Marriage Counseling</a></li>
                    <li><a href="#">Teen & Adolescent Guidance</a></li>
                    <li><a href="#">Workplace Stress & Burnout</a></li>
                    <li><a href="#">Self-Esteem & Confidence Building</a></li>
                    <li><a href="#">Mindfulness & Meditation</a></li>
                  </ul>
                </div>
              </div>

              {/* For Students */}
              <div className="col-lg-2 col-md-6 col-sm-6 col-12 mt--30">
                <div className="footer-widget">
                  <h5 className="ft-title">Mentorship for Students</h5>
                  <ul className="ft-link">
                    <li><a href="#">Internship & Practical Training</a></li>
                    <li><a href="#">Career Mentorship</a></li>
                    <li><a href="#">Research Guidance</a></li>
                    <li><a href="#">Workshops & Webinars</a></li>
                    <li><a href="#">Networking Opportunities</a></li>
                    <li><a href="#">Case Study Discussions</a></li>
                    <li><a href="#">Resume & Portfolio Support</a></li>
                    <li><a href="#">Clinical Skills Development</a></li>
                    <li><a href="#">Ethical Practice & Guidelines</a></li>
                  </ul>
                </div>
              </div>

              {/* For Therapists */}
              <div className="col-lg-2 col-md-6 col-sm-6 col-12 mt--30">
                <div className="footer-widget">
                  <h5 className="ft-title">For Therapists</h5>
                  <ul className="ft-link">
                    <li><a href="/login">Login</a></li>
                    <li><a href="/therapist-registration">Sign Up</a></li>
                  </ul>
                  <h5 className="ft-title mt-3">Professional Types</h5>
                  <ul className="ft-link">
                    <li><a href="#">Counselling Psychologist</a></li>
                    <li><a href="#">Clinical Psychologist</a></li>
                    <li><a href="#">Psychiatrist</a></li>
                    <li><a href="#">Special Educator</a></li>
                  </ul>
                </div>
              </div>

              {/* Contact Info */}
              <div className="col-lg-2 col-md-6 col-sm-6 col-12 mt--30">
                <div className="footer-widget">
                  <h5 className="ft-title">Get Contact</h5>
                  <ul className="ft-link">
                    <li>
                      <span>Phone: </span>
                      <a href="tel:+918077757951">+91 80777 57951</a>
                    </li>
                    <li>
                      <span>E-mail: </span>
                      <a href="mailto:Chooseyourtherapist@gmail.com">Chooseyourtherapist@gmail.com</a>
                    </li>
                    <li>
                      <span>Official Address: </span>
                      Gate No-3, D-137, near LPS GLOBAL SCHOOL, Block D, Sector 51, Noida, Uttar Pradesh 201301, India
                    </li>
                  </ul>
                  <ul className="social-icon social-default icon-naked justify-content-start mt--20">
                    <li><a href="#"><i className="feather-facebook"></i></a></li>
                    <li><a href="#"><i className="feather-twitter"></i></a></li>
                    <li><a href="#"><i className="feather-instagram"></i></a></li>
                    <li><a href="#"><i className="feather-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Disclaimer Section */}
      <div className="container mt-4 mb-4">
        <div
          style={{
            background: "#f5f5f5",
            padding: "15px 20px",
            borderRadius: 8,
            fontSize: 14,
            lineHeight: 1.5,
          }}
        >
          <strong>Disclaimer:</strong> This platform is a{" "}
          <u>network of independent therapists</u>. All therapists work independently, and the
          platform only connects you to a therapist. If you face any difficulty connecting to a
          therapist, you can contact <strong>+91 80777 57951</strong>. For{" "}
          <u>emergency situations</u>, please contact the free helpline{" "}
          <strong>Tele Manas Toll-Free: 1800 89 14416</strong>.
        </div>
      </div>

      {/* Bottom Section */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      <div className="copyright-area copyright-style-1 ptb--20">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
              <p className="rbt-link-hover text-center text-lg-start">
                © 2024{" "}
                <a href="https://chooseyourtherapist.in">
                  Choose Your Therapist LLP.
                </a>{" "}
                All Rights Reserved
              </p>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
              <ul className="copyright-link rbt-link-hover justify-content-center justify-content-lg-end mt_sm--10 mt_md--10">
                <li><a href="/terms-conditions">Terms of Service</a></li>
                <li><a href="/cancellation-policy">Cancellation Policy</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
