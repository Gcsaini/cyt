export default function AboutCyt() {
  return (
    <div className="rbt-about-area about-style-1 bg-color-extra2 rbt-section-gap">
      <div className="container">
        <div className="row g-5 align-items-start">
          <div className="col-lg-6">
            <div className="content">
              <h2
                className="title mb--0 sal-animate"
                data-sal="slide-up"
                data-sal-duration="700"
              >
                About the platform where we provide you a path for your mental
                wellness.
              </h2>
            </div>
          </div>
          <div
            className="col-lg-6 sal-animate"
            data-sal="slide-up"
            data-sal-duration="700"
          >
            <p className="mb--40 mb_sm--20">
            Choose Your Therapist LLP was founded in 2020 amidst the
                  COVID-19 pandemic to address the growing need for accessible
                  mental health care. CYT is a registered mental health platform
              operating under the legal frameworks of the MCA (Ministry of
              Corporate Affairs) and MSME (Micro, Small, and Medium
              Enterprises). Our platform serves as a bridge between individuals
              seeking mental health support and experienced counselors.
            </p>
            <div className="readmore-btn">
              <a className="rbt-moderbt-btn" href="/elements/about#">
                <span className="moderbt-btn-text">Join us</span>
                <i className="feather-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
