import { TypeAnimation } from "react-type-animation";

export default function AboutUsBanner() {
  return (
    <div class="rbt-banner-area rbt-banner-8 variation-02 bg-color-extra2">
      <div class="container">
        <div class="row g-5 align-items-center">
          <div class="col-lg-10 offset-lg-1">
            <div class="content">
              <div class="inner text-center">
                <div class="rbt-new-badge rbt-new-badge-one">
                  <span class="rbt-new-badge-icon">🏆</span> The Leader in
                  Online Learning
                </div>
                <h1 class="title">
                  Read About Our
                  {/* <span class="header-caption ms-2">
                    <span class="cd-headline clip is-full-width">
                      <span class="cd-words-wrapper">
                        <b class="is-visible theme-gradient">Vission</b>
                      </span>
                    </span>
                  </span> */}
                  <TypeAnimation
                    sequence={[" Mission", 1500, " Vision", 1500]}
                    speed={10}
                    style={{ fontSize: "1em" }}
                    repeat={Infinity}
                    deletionSpeed={20}
                    className="theme-gradient"
                  />
                </h1>
                <p class="description has-medium-font-size mt--20">
                  Dive in and learn React.js from scratch! Learn Reactjs, Hooks,
                  Redux, React Routing, Animations, Next.js and way more!
                </p>
                <div class="slider-btn rbt-button-group justify-content-center">
                  <a
                    class="rbt-btn btn-gradient hover-icon-reverse"
                    href="/pages/about-us-02#"
                  >
                    <span class="icon-reverse-wrapper">
                      <span class="btn-text">Log in to Start</span>
                      <span class="btn-icon">
                        <i class="feather-arrow-right"></i>
                      </span>
                      <span class="btn-icon">
                        <i class="feather-arrow-right"></i>
                      </span>
                    </span>
                  </a>
                  <a
                    class="rbt-btn hover-icon-reverse btn-white"
                    href="/pages/about-us-02#"
                  >
                    <span class="icon-reverse-wrapper">
                      <span class="btn-text">Contact US</span>
                      <span class="btn-icon">
                        <i class="feather-arrow-right"></i>
                      </span>
                      <span class="btn-icon">
                        <i class="feather-arrow-right"></i>
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
