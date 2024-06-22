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
              <span className="subtitle bg-primary-opacity">SERVICES</span>
              <h2 className="title">
                {" "}
                <span className="theme-gradient">
                  What are you looking for ?
                </span>
              </h2>
              <p>
                Are you looking for solutions to achieve holistic well-being?
                Our services are designed to support your mental, emotional, and
                spiritual health.
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
                      3 Plans Active<i className="feather-arrow-right"></i>
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
                      Coming Soon<i className="feather-arrow-right"></i>
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
                  <h5 className="title">Student Orientations</h5>
                  <div className="read-more-btn">
                    <span className="rbt-btn-link">
                      Coming Soon<i className="feather-arrow-right"></i>
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
                  <h5 className="title">Workplace Training</h5>
                  <div className="read-more-btn">
                    <span className="rbt-btn-link">
                      Coming Soon<i className="feather-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <a
              className="rbt-cat-box rbt-cat-box-1 text-center"
              href="course-filter-one-toggle/%5bcourseId%5d-5"
            >
              <div className="inner">
                <div className="icons">
                  <LazyImage alt="Icons" dim={"80"} src={ActivitesImg} />
                </div>
                <div className="content">
                  <h5 className="title">Therapeutic Activites</h5>
                  <div className="read-more-btn">
                    <span className="rbt-btn-link">
                      Coming Soon<i className="feather-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <a
              className="rbt-cat-box rbt-cat-box-1 text-center"
              href="course-filter-one-toggle/%5bcourseId%5d-6"
            >
              <div className="inner">
                <div className="icons">
                  <LazyImage alt="Icons" dim={"80"} src={AssessmentImg} />
                </div>
                <div className="content">
                  <h5 className="title">Assessments</h5>
                  <div className="read-more-btn">
                    <span className="rbt-btn-link">
                      Coming Soon<i className="feather-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <a
              className="rbt-cat-box rbt-cat-box-1 text-center"
              href="course-filter-one-toggle"
            >
              <div className="inner">
                <div className="icons">
                  <LazyImage alt="Icons" dim={"80"} src={ProjectsImg} />
                </div>
                <div className="content">
                  <h5 className="title">CYT Projects</h5>
                  <div className="read-more-btn">
                    <span className="rbt-btn-link">
                      Coming Soon<i className="feather-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <a
              className="rbt-cat-box rbt-cat-box-1 text-center"
              href="course-filter-one-toggle"
            >
              <div className="inner">
                <div className="icons">
                  <LazyImage alt="Icons" dim={"80"} src={specialoffer} />
                </div>
                <div className="content">
                  <h5 className="title">Special Offers</h5>
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
