import TextImg from "../../assets/img/cta-text9c0f.png";
import LazyImage from "../../utils/lazy-image";
export default function CallToAction() {
  return (
    <div
      className="rbt-callto-action-area bg-color-extra2"
      style={{ paddingBottom: 50, paddingTop: 50 }}
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
                    Ready to start creating a standard website?
                  </h3>
                  <h6 className="subtitle sal-animate">
                    Finest choice for your home &amp; office
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="call-to-btn text-start text-lg-end position-relative sal-animate">
                <a
                  className="rbt-btn rbt-switch-btn rbt-switch-y"
                  href="/elements/call-to-action#"
                >
                  <span data-text="Purchase Histudy">Purchase Histudy</span>
                </a>
                <div className="shape-text-image">
                  <LazyImage
                    alt="Education"
                    dim={"397"}
                    class="rbt-rotatation-round"
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
