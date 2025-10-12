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

          {/* Service Cards */}
          <div className="row g-5 mt--20">
            {[
              { img: TherypyImg, title: "Therapist", btn: "Book Now", link: "/view-all-therapist" },
              { img: SupportImg, title: "Community", btn: "Register Now", link: "#" },
              { img: StudentImg, title: "Mentorship", btn: "Register Now", link: "#" },
              { img: WorkplaceImg, title: "Mindfulness", btn: "Coming Soon", link: "#" },
              { img: ActivitesImg, title: "Activities", btn: "Explore", link: "#" },
              { img: AssessmentImg, title: "Assessments", btn: "Take Test", link: "#" },
              { img: ProjectsImg, title: "Projects", btn: "Join Now", link: "#" },
              { img: specialoffer, title: "Offers", btn: "Grab Deal", link: "#", special: true },
            ].map((card, index) => (
              <div className="col-lg-3 col-md-6 col-sm-6 col-6" key={index}>
                <a href={card.link} className={`service-card ${card.special ? "special-offer" : ""}`}>
                  <div className="inner">
                    <div className="icons">
                      <LazyImage alt={card.title} dim={"80"} src={card.img} />
                    </div>
                    <div className="content">
                      <h3 className="title">{card.title}</h3>
                      <div className="read-more-btn">
                        <span className="rbt-btn-link">
                          {card.btn} <i className="feather-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Premium Banner Section */}
          <div className="premium-banner">
            <i className="feather-phone-call banner-icon"></i>
            <span className="premium-text">
              To Book a Session Call Now:{" "}
              <a
                href="tel:+918077757951"
                style={{
                  color: "#fff",
                  textDecoration: "underline",
                  fontWeight: 700,
                }}
              >
                +91 80777 57951
              </a>{" "}
              – Available 24/7
            </span>
          </div>

          {/* About Us Section */}
          <div className="about-section row align-items-center">
            {/* Left: Text */}
            <div className="col-lg-7 col-md-12 about-text">
              <h2 className="about-title">About Choose Your Therapist</h2>
              <p>
                <strong>Choose Your Therapist</strong> is a growing network of independent
                mental health professionals dedicated to providing accessible, confidential,
                and compassionate care. Our platform connects you directly with licensed
                therapists, psychologists, and counselors who work independently to help
                you find the right support. Whether you're looking for personal growth,
                emotional healing, or professional guidance, our mission is to make mental
                wellness approachable for everyone — with trust, transparency, and care
                at its core.
              </p>
            </div>

            {/* Right: Icon Grid (6 Cards) */}
            <div className="col-lg-5 col-md-12 about-icons">
              <div className="icon-grid">
                <div className="icon-box">
                  <i className="feather-heart"></i>
                  <span>Compassionate Care</span>
                </div>
                <div className="icon-box">
                  <i className="feather-users"></i>
                  <span>Trusted Professionals</span>
                </div>
                <div className="icon-box">
                  <i className="feather-globe"></i>
                  <span>Nationwide Network</span>
                </div>
                <div className="icon-box">
                  <i className="feather-shield"></i>
                  <span>Confidential & Safe</span>
                </div>
                <div className="icon-box">
                  <i className="feather-award"></i>
                  <span>Certified Experts</span>
                </div>
                <div className="icon-box">
                  <i className="feather-clipboard"></i>
                  <span>Structured Programs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Inline CSS */}
          <style>{`
            .premium-banner {
              background: linear-gradient(90deg, #22bb33, #1f7f25);
              border-radius: 12px;
              padding: 20px 15px;
              margin-top: 40px;
              margin-bottom: 30px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #fff;
              font-weight: 600;
              font-size: 1.9rem;
              gap: 15px;
              flex-wrap: wrap;
              box-shadow: 0 4px 15px rgba(0,0,0,0.1);
              text-align: center;
              transition: 0.3s ease;
            }
            .premium-banner:hover { background: linear-gradient(90deg, #28c23f, #249b2e); }
            .banner-icon { font-size: 1.7rem; }

            /* Animated text on mobile */
            @media (max-width: 768px) {
              .banner-icon { display: none !important; }
              .premium-banner {
                overflow: hidden;
              }
              .premium-text {
                display: inline-block;
                white-space: nowrap;
                padding-left: 100%;
                animation: scrollText 12s linear infinite;
              }
              @keyframes scrollText {
                0%   { transform: translateX(0%); }
                100% { transform: translateX(-100%); }
              }
            }

            /* Service Cards */
            .service-card { display: block; background: #fff; border-radius: 20px; padding: 20px; text-align: center; transition: all 0.4s ease; box-shadow: 0 4px 12px rgba(0,0,0,0.08); overflow: hidden; position: relative; }
            .service-card .icons img { transition: transform 0.4s ease; }
            .service-card:hover .icons img { transform: scale(1.15) rotate(3deg); }
            .service-card .title { font-weight: 700; font-size: 1.5rem; margin-top: 12px; transition: color 0.3s ease; }
            .service-card:hover .title { color: #228756; }
            .service-card .rbt-btn-link { display: inline-flex; align-items: center; font-weight: 600; margin-top: 10px; color: #007f99; position: relative; overflow: hidden; }
            .service-card .rbt-btn-link i { margin-left: 6px; transition: transform 0.3s ease; }
            .service-card:hover .rbt-btn-link i { transform: translateX(5px); }
            .service-card::after { content: ""; position: absolute; inset: 0; border-radius: 20px; border: 2px solid transparent; background: linear-gradient(90deg,#228756,#007f99,#1e90ff); background-size: 300% 300%; opacity: 0; transition: opacity 0.4s ease; z-index: -1; }
            .service-card:hover::after { opacity: 1; animation: borderGlow 3s linear infinite; }
            @keyframes borderGlow { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
            .special-offer { background: linear-gradient(135deg, #fff9e6, #fff); border: 2px dashed #51ad14ff; }
            .special-offer:hover .title { color: #22bfe6ff; }

            /* About Section */
            .about-section { margin-top: 20px; padding: 60px 30px; background: linear-gradient(180deg, #f9fafb, #ffffff); border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
            .about-title { font-size: 3.9 rem; font-weight: 800; color: #1f7f25; margin-bottom: 25px; }
            .about-text p { font-size: 1.49 rem; color: #333; text-align: justify; line-height: 1.9; margin: 0; letter-spacing: 0.3px; }
            .about-text strong { color: #1f7f25; }
            .about-icons { display: flex; justify-content: center; }
            .icon-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 25px; }
            .icon-box { background: #fff; border-radius: 16px; padding: 25px; box-shadow: 0 3px 12px rgba(0,0,0,0.08); text-align: center; transition: all 0.3s ease; }
            .icon-box i { font-size: 2.9rem; color: #22bb33; margin-bottom: 10px; }
            .icon-box span { display: block; font-weight: 700; color: #333; font-size: 1.25rem; }
            .icon-box:hover { transform: translateY(-6px); box-shadow: 0 6px 18px rgba(34,187,51,0.2); }

            /* Mobile Adjustments */
            @media (max-width: 992px) {
              .about-section { text-align: center; padding: 50px 20px; }
              .about-title { font-size: 3rem; }
              .about-text p { font-size: 1.45rem; line-height: 1.8; }
              .icon-grid { grid-template-columns: repeat(2, 1fr); margin-top: 30px; gap: 20px; }
              .icon-box span { font-size: 1.2rem; }
              .icon-box i { font-size: 2.7rem; }
            }
            @media (max-width: 576px) {
              .about-title { font-size: 2.6rem; }
              .about-text p { font-size: 1.3rem; line-height: 1.7; }
              .icon-grid { grid-template-columns: repeat(2, 1fr); gap: 15px; }
              .icon-box i { font-size: 2.5rem; }
              .icon-box span { font-size: 1.15rem; }
            }
          `}</style>
        </div>
      </div>
    </>
  );
}
