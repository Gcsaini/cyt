import { useNavigate } from "react-router-dom";

export default function CallToActionAbout() {
  const navigate = useNavigate();
  return (
    <div className="rbt-call-to-action-area rbt-section-gap bg-gradient-8">
      <div className="rbt-callto-action rbt-cta-default style-6">
        <div className="container">
          <div className="row g-5 align-items-center content-wrapper">
            <div className="col-xxl-3 col-xl-3 col-lg-6">
              <div className="inner">
                <div className="content text-start">
                  <h2 className="title color-white mb--0">
                    Are You a Therapist?
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="inner-content text-start">
                <p className="color-white">
                  Access your personalized dashboard on our platform to
                  seamlessly connect online with clients to serve and manage
                  your profile with ease.
                </p>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-6">
              <div className="call-to-btn text-start text-xl-end">
                <a
                  style={{ cursor: "pointer" }}
                  className="rbt-btn btn-white hover-icon-reverse"
                  onClick={() => navigate("/therapist-registration")}
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Subscribe CYT</span>
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
  );
}
