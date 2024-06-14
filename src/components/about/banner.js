import { TypeAnimation } from "react-type-animation";
import useMediaQuery from "@mui/material/useMediaQuery";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
export default function AboutUsBanner() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <div className="rbt-banner-area rbt-banner-8 variation-02 bg-color-extra2">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-10 offset-lg-1">
            <div className="content">
              <div className="inner text-center">
              <div
                    className="rbt-new-badge rbt-new-badge-one"
                    
                  >
                    <span className="rbt-new-badge-icon">
                      <PersonSearchIcon
                        sx={{ color: "#228756", fontSize: 30 }}
                      />
                    </span>{" "}
                    Discover mental health experts.
                  </div>
                <h1 className="title">
                  Read About Our
                  {isMobile ? <br /> : ""}
                  <TypeAnimation
                    sequence={[" Background", 1500, " Vision", 1500]}
                    speed={10}
                    style={{ fontSize: "1em" }}
                    repeat={Infinity}
                    deletionSpeed={20}
                    className="theme-gradient"
                  />
                </h1>
                <p className="description has-medium-font-size mt--20">
                 
                </p>
                <div className="slider-btn rbt-button-group justify-content-center">
                  <a
                    className="rbt-btn btn-gradient hover-icon-reverse"
                    href="/pages/about-us-02#"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Log in to Start</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </a>
                  <a
                    className="rbt-btn hover-icon-reverse btn-white"
                    href="/pages/about-us-02#"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Contact US</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
