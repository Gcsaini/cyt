import TextImg from "../../assets/img/Choose.png";
import ImageTag from "../../utils/image-tag";
export default function CallToAction() {
  return (
    <div
      className="rbt-callto-action-area bg-color-extra2"
      style={{
        paddingBottom: 50,
        paddingTop: 50,
        paddingLeft: 15,
        paddingRight: 15,
      }}
    >
      <div className="rbt-callto-action rbt-cta-default style-2">
        <div className="container content-wrapper overflow-hidden">
          <div className="row gy-5 align-items-center">
            <div className="col-lg-8">
              <div className="inner">
                <div className="content text-left">
                  <h3
                    className="title sal-animate"
                    data-sal="slide-up"
                    data-sal-duration="400"
                    data-sal-delay="200"
                  >
                    Contact us today to learn more and express your interest!
                  </h3>
                  <h6 className="subtitle sal-animate">
                    The best choice to serve with #ChooseYourTherapist
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="call-to-btn text-start text-lg-end position-relative sal-animate">
                <div className="slider-btn">
                  <a
                    className="rbt-btn btn-gradient hover-icon-reverse"
                    href="/contact-us"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Get Started</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="shape-text-image">
                  <ImageTag
                    alt="Education"
                    height={"397"}
                    width={"397"}
                    className="rbt-rotatation-round"
                    src={TextImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
