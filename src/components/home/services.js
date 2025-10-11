import TherypyImg from "../../assets/img/therapysessioncyt.png";
import SupportImg from "../../assets/img/support.png";
import StudentImg from "../../assets/img/studentorientation.png";
import WorkplaceImg from "../../assets/img/workplacetraining.png";
import ActivitesImg from "../../assets/img/therapeutic.png";
import AssessmentImg from "../../assets/img/assessmentss.png";
import ProjectsImg from "../../assets/img/projectscyt.png";
import specialoffer from "../../assets/img/special.png";
import LazyImage from "../../utils/lazy-image";

export default function Services() {
  return (
    <>
 
      {/* Services Section */}
      <div
        className="rbt-categories-area bg-color-white rbt-section-gapBottom"
        style={{ marginTop: 0 }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">
                  PERSONALIZED SERVICES
                </span>
                <h2 className="title">
                  <span className="theme-gradient">Personalized Care for You</span>
                </h2>
                <p style={{ textAlign: "justify" }}>
                  Personalized care that puts you first. From emotional support to
                  mental clarity, we create a safe space to nurture your unique path
                  toward lasting well-being.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-5 mt--20">
            {/* Card 1 */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <a href="/view-all-therapist" className="service-card">
                <div className="inner">
                  <div className="icons">
                    <LazyImage alt="Icons" dim={"80"} src={TherypyImg} />
                  </div>
                  <div className="content">
                    <h5 className="title">Therapist</h5>
                    <div className="read-more-btn">
                      <span className="rbt-btn-link">
                        Book Now <i className="feather-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Card 2 */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <a href="#" className="service-card">
                <div className="inner">
                  <div className="icons">
                    <LazyImage alt="Icons" dim={"80"} src={SupportImg} />
                  </div>
                  <div className="content">
                    <h5 className="title">Community </h5>
                    <div className="read-more-btn">
                      <span className="rbt-btn-link">
                        Register Now <i className="feather-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Card 3 */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <a href="#" className="service-card">
                <div className="inner">
                  <div className="icons">
                    <LazyImage alt="Icons" dim={"80"} src={StudentImg} />
                  </div>
                  <div className="content">
                    <h5 className="title">Mentorship</h5>
                    <div className="read-more-btn">
                      <span className="rbt-btn-link">
                        Register Now <i className="feather-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Card 4 */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <a href="#" className="service-card">
                <div className="inner">
                  <div className="icons">
                    <LazyImage alt="Icons" dim={"80"} src={WorkplaceImg} />
                  </div>
                  <div className="content">
                    <h5 className="title">Mindfulness</h5>
                    <div className="read-more-btn">
                      <span className="rbt-btn-link">
                        Coming Soon <i className="feather-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Card 5 */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <a href="#" className="service-card">
                <div className="inner">
                  <div className="icons">
                    <LazyImage alt="Icons" dim={"80"} src={ActivitesImg} />
                  </div>
                  <div className="content">
                    <h5 className="title">Activities</h5>
                    <div className="read-more-btn">
                      <span className="rbt-btn-link">
                        Explore <i className="feather-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Card 6 */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <a href="#" className="service-card">
                <div className="inner">
                  <div className="icons">
                    <LazyImage alt="Icons" dim={"80"} src={AssessmentImg} />
                  </div>
                  <div className="content">
                    <h5 className="title">Assessments</h5>
                    <div className="read-more-btn">
                      <span className="rbt-btn-link">
                        Take Test <i className="feather-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Card 7 */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <a href="#" className="service-card">
                <div className="inner">
                  <div className="icons">
                    <LazyImage alt="Icons" dim={"80"} src={ProjectsImg} />
                  </div>
                  <div className="content">
                    <h3 className="title">Projects</h3>
                    <div className="read-more-btn">
                      <span className="rbt-btn-link">
                        Join Now <i className="feather-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Card 8 */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <a href="#" className="service-card special-offer">
                <div className="inner">
                  <div className="icons">
                    <LazyImage alt="Icons" dim={"80"} src={specialoffer} />
                  </div>
                  <div className="content">
                    <h3 className="title">Offers</h3>
                    <div className="read-more-btn">
                      <span className="rbt-btn-link">
                        Grab Deal <i className="feather-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
     {/* Premium Banner Section */}
      <div style={{
        background: "linear-gradient(90deg, #22bb33, #1f7f25)",
        borderRadius: 12,
        padding: "20px 15px",
        marginBottom: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontWeight: 600,
        fontSize: "1.2rem",
        gap: 15,
        flexWrap: "wrap",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
      }}>
        <i className="feather-phone-call" style={{ fontSize: "1.5rem" }}></i>
        <span>To Book a Session Call Now: <a href="tel:+918077757951" style={{ color: "#fff", textDecoration: "underline" }}>+91 80777 57951</a> – Available 24/7</span>
      </div>

      {/* Inline CSS for micro-interactions */}
      <style>{`
        .service-card {
          display: block;
          background: #fff;
          border-radius: 20px;
          padding: 20px;
          text-align: center;
          transition: all 0.4s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          overflow: hidden;
          position: relative;
        }
        .service-card .icons img {
          transition: transform 0.4s ease;
        }
        .service-card:hover .icons img {
          transform: scale(1.15) rotate(3deg);
        }
        .service-card .title {
          font-weight: 700;
          font-size: 0rem;
          margin-top: 12px;
          transition: color 0.3s ease;
        }
        .service-card:hover .title {
          color: #228756;
        }
        .service-card .rbt-btn-link {
          display: inline-flex;
          align-items: center;
          font-weight: 600;
          margin-top: 10px;
          color: #007f99;
          position: relative;
          overflow: hidden;
        }
        .service-card .rbt-btn-link i {
          margin-left: 6px;
          transition: transform 0.3s ease;
        }
        .service-card:hover .rbt-btn-link i {
          transform: translateX(5px);
        }
        .service-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 20px;
          border: 2px solid transparent;
          background: linear-gradient(90deg,#228756,#007f99,#1e90ff);
          background-size: 300% 300%;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: -1;
        }
        .service-card:hover::after {
          opacity: 1;
          animation: borderGlow 3s linear infinite;
        }
        @keyframes borderGlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .special-offer {
          background: linear-gradient(135deg, #fff9e6, #fff);
          border: 2px dashed #51ad14ff;
        }
        .special-offer:hover .title {
          color: #22bfe6ff;
        }
      `}</style>

          </div>
        </div>
      </div>
    </>
  );
}
