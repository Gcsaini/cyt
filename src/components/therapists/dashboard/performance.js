import { useMediaQuery } from "@mui/material";
import TherypyImg from "../../assets/img/therapysessioncyt.png";
import SupportImg from "../../assets/img/support.png";
import StudentImg from "../../assets/img/studentorientation.png";
import WorkplaceImg from "../../assets/img/workplacetraining.png";
import ActivitesImg from "../../assets/img/therapeutic.png";
import AssessmentImg from "../../assets/img/assessmentss.png";
import ProjectsImg from "../../assets/img/projectscyt.png";
import specialoffer from "../../assets/img/special.png";
import LazyImage from "../../utils/lazy-image";

// ✅ Notify Bar
export function NotifyBar({ title = "Dashboard currently under development" }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <div
      className="rbt-header-top-2 color-white pt--15 pb--15 mb--15"
      style={{
        backgroundColor: "rgba(43, 194, 76, 1)",
        borderRadius: "6px",
        marginTop: isMobile ? "20px" : 0,
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-5 col-12">
            <div className="fancy-menu-text fancu-menu-start">
              <p>{title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ✅ Services Section (no extra heading)
export function Services() {
  return (
    <div
      className="rbt-categories-area bg-color-white rbt-section-gapBottom"
      style={{ marginTop: 30 }}
    >
      <div className="container">
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
                  <h5 className="title">Create Profile</h5>
                  <div className="read-more-btn">
                    <span className="rbt-btn-link" to="/view-all-therapist">
                      Setting<i className="feather-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <a className="rbt-cat-box rbt-cat-box-1 text-center" href="#">
              <div className="inner">
                <div className="icons">
                  <LazyImage alt="Icons" dim={"80"} src={SupportImg} />
                </div>
                <div className="content">
                  <h5 className="title">Booking History</h5>
                  <div className="read-more-btn">
                    <span className="rbt-btn-link">
                      Check Now<i className="feather-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <a className="rbt-cat-box rbt-cat-box-1 text-center" href="#">
              <div className="inner">
                <div className="icons">
                  <LazyImage alt="Icons" dim={"80"} src={StudentImg} />
                </div>
                <div className="content">
                  <h5 className="title">Create Coupon</h5>
                  <div className="read-more-btn">
                    <span className="rbt-btn-link">
                      Click Now<i className="feather-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <a className="rbt-cat-box rbt-cat-box-1 text-center" href="#">
              <div className="inner">
                <div className="icons">
                  <LazyImage alt="Icons" dim={"80"} src={WorkplaceImg} />
                </div>
                <div className="content">
                  <h5 className="title">Create MMP</h5>
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
