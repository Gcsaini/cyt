import { TypeAnimation } from "react-type-animation";

export default function AboutUsBanner() {
  return (
    <div className="rbt-banner-area rbt-banner-8 variation-02 bg-color-extra2">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-10 offset-lg-1">
            <div className="content">
              <div className="inner text-center">
                <div className="rbt-new-badge rbt-new-badge-one">
                  <span className="rbt-new-badge-icon">🏆</span> Discover Mental
                  Health Experts.
                </div>
                <h1 className="title">
                  Read About Our
                  {/* <span className="header-caption ms-2">
                    <span className="cd-headline clip is-full-width">
                      <span className="cd-words-wrapper">
                        <b className="is-visible theme-gradient">Vission</b>
                      </span>
                    </span>
                  </span> */}
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
                  Choose Your Therapist LLP was founded in 2020 amidst the
                  COVID-19 pandemic to address the growing need for accessible
                  mental health care.
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
