import LazyImage from "../../utils/lazy-image";
import BulbImg from "../../assets/img/001-bulbf434.png";
import HatImg from "../../assets/img/002-hat387c.png";
import IdCard from "../../assets/img/003-id-cardae63.png";
import PassImg from "../../assets/img/004-pass56c5.png";
export default function ServiceQuality() {
  return (
    <div class="rbt-rbt-card-area bg-color-white rbt-section-gap">
      <div class="container">
        <div class="row mb--60">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <h2 class="title">Providing</h2>
            </div>
          </div>
        </div>
        <div class="row row--15 mt_dec--30">
          <div class="col-lg-4 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-12 mt--30">
            <div class="service-card service-card-6">
              <div class="inner">
                <div class="icon">
                  <LazyImage alt="icons" dim={"60"} src={BulbImg} />
                </div>
                <div class="content">
                  <h6 class="title">
                    <a href="/pages/about-us-02#">Your Apply</a>
                  </h6>
                  <p class="description">
                    English Learning looking for random paragraphs, you've come
                    to the right place. When a random.
                  </p>
                </div>
                <span class="number-text">1</span>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-12 mt--30">
            <div class="service-card service-card-6">
              <div class="inner">
                <div class="icon">
                  <LazyImage alt="icons" dim={"60"} src={HatImg} />
                </div>
                <div class="content">
                  <h6 class="title">
                    <a href="/pages/about-us-02#">We Connect</a>
                  </h6>
                  <p class="description">
                    Javascript Learning looking for random paragraphs, you've
                    come to the right place. When a random.
                  </p>
                </div>
                <span class="number-text">2</span>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-12 mt--30">
            <div class="service-card service-card-6">
              <div class="inner">
                <div class="icon">
                  <LazyImage alt="icons" dim={"60"} src={IdCard} />
                </div>
                <div class="content">
                  <h6 class="title">
                    <a href="/pages/about-us-02#">You Get Ready</a>
                  </h6>
                  <p class="description">
                    Angular Learning looking for random paragraphs, you've come
                    to the right place. When a random.
                  </p>
                </div>
                <span class="number-text">3</span>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-12 mt--30">
            <div class="service-card service-card-6">
              <div class="inner">
                <div class="icon">
                  <LazyImage alt="icons" dim={"60"} src={PassImg} />
                </div>
                <div class="content">
                  <h6 class="title">
                    <a href="/pages/about-us-02#">Completed</a>
                  </h6>
                  <p class="description">
                    Php Learning looking for random paragraphs, you've come to
                    the right place. When a random.
                  </p>
                </div>
                <span class="number-text">4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
