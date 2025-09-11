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
    <div
      className="rbt-categories-area bg-color-white rbt-section-gapBottom"
      style={{ marginTop: 80 }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle bg-primary-opacity">PERSONALIZED SERVICES</span>
              <h2 className="title">
                {" "}
                <span className="theme-gradient">
                  Personalized Care for You
                </span>
              </h2>
              <p>
                Personalized care that puts you first. From emotional support to mental clarity, we create a safe space to nurture your unique path toward lasting well-being.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-5 mt--20">
          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <a
              className="rbt-cat-box rbt-cat-box-1 text-center"
              href="/view-all-therapist"
            >
              <div className="inner">
                <div className="icons">
                  <LazyImage alt="Icons" dim={"80"} src={TherypyImg} />
                </div>
                <div className="content">
                  <h5 className="title">Wellbeing Therapy Session</h5>
                  <div className="read-more-btn">
                    <span className="rbt-btn-link"
                    to="/view-all-therapist" >
                     Book Now<i className="feather-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          
           <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <a
              className="rbt-cat-box rbt-cat-box-1 text-center"
              href="#"
            >
              <div className="inner">
                <div className="icons">
                  <LazyImage alt="Icons" dim={"80"} src={SupportImg} />
                </div>
                <div className="content">
                  <h5 className="title">Community Group Programs</h5>
                  <div className="read-more-btn">
                    <span className="rbt-btn-link">
                      Register Now<i className="feather-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          
         <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <a
              className="rbt-cat-box rbt-cat-box-1 text-center"
              href="#"
            >
              <div className="inner">
                <div className="icons">
                  <LazyImage alt="Icons" dim={"80"} src={StudentImg} />
                </div>
                <div className="content">
                  <h5 className="title">Mentorship Programs</h5>
                  <div className="read-more-btn">
                    <span className="rbt-btn-link">
                      Register Now<i className="feather-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
            
          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <a
              className="rbt-cat-box rbt-cat-box-1 text-center"
              href="#"
            >
              <div className="inner">
                <div className="icons">
                  <LazyImage alt="Icons" dim={"80"} src={WorkplaceImg} />
                </div>
                <div className="content">
                  <h5 className="title">Mindfulness Tour Initiative</h5>
                  <div className="read-more-btn">
                    <span className="rbt-btn-link">
                      Coming Soon<i className="feather-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        
           
        </div>
      </div>
    </div>
  );
}
