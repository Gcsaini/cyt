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
      style={{ marginTop: 90 }}
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
                Looking for comprehensive support that honors your unique needs? Our services are built to cater to your individual mental, emotional, and spiritual health, helping you achieve complete and lasting well-being.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-5 mt--20">
          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <a
              className="rbt-cat-box rbt-cat-box-1 text-center"
              href="course-filter-one-toggle/%5bcourseId%5d"
            >
              <div className="inner">
                <div className="icons">
                  <LazyImage alt="Icons" dim={"80"} src={TherypyImg} />
                </div>
                <div className="content">
                  <h5 className="title">Therapy Session</h5>
                  <div className="read-more-btn">
                    <span className="rbt-btn-link">
                      Start Now<i className="feather-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <a
              className="rbt-cat-box rbt-cat-box-1 text-center"
              href="course-filter-one-toggle/%5bcourseId%5d-3"
            >
              <div className="inner">
                <div className="icons">
                  <LazyImage alt="Icons" dim={"80"} src={SupportImg} />
                </div>
                <div className="content">
                  <h5 className="title">Support Groups</h5>
                  <div className="read-more-btn">
                    <span className="rbt-btn-link">
                      Join Now<i className="feather-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <a
              className="rbt-cat-box rbt-cat-box-1 text-center"
              href="course-filter-one-toggle/%5bcourseId%5d-4"
            >
              <div className="inner">
                <div className="icons">
                  <LazyImage alt="Icons" dim={"80"} src={StudentImg} />
                </div>
                <div className="content">
                  <h5 className="title">Wellness Hours</h5>
                  <div className="read-more-btn">
                    <span className="rbt-btn-link">
                      Enroll Now<i className="feather-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <a
              className="rbt-cat-box rbt-cat-box-1 text-center"
              href="course-filter-one-toggle/%5bcourseId%5d-2"
            >
              <div className="inner">
                <div className="icons">
                  <LazyImage alt="Icons" dim={"80"} src={WorkplaceImg} />
                </div>
                <div className="content">
                  <h5 className="title">Mindful Tour</h5>
                  <div className="read-more-btn">
                    <span className="rbt-btn-link">
                      Book Now<i className="feather-arrow-right"></i>
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
