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
              <h2 class="title">We're committed to making your mental health our top priority.</h2>
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
                    <a href="/pages/about-us-02#">Holistic wellness</a>
                  </h6>
                  <p class="description">
                  We take a holistic approach to mental health, considering all aspects 
                  of your life and well-being to provide comprehensive care.
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
                    <a href="/pages/about-us-02#">Easy to Access</a>
                  </h6>
                  <p class="description">
                  We offer convenient access to therapy through our online 
                  platform, making it easier for you to get the help you need.
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
                    <a href="/pages/about-us-02#">Personalized Care</a>
                  </h6>
                  <p class="description">
                  We tailor our services to meet your individual needs, ensuring you 
                  receive personalized care that addresses your specific concerns.
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
                    <a href="/pages/about-us-02#">Qualified Experts</a>
                  </h6>
                  <p class="description">
                  Our platform offers a diverse range of therapists with expertise 
                  in various modalities and specialties,allowing you to find a therapist 
                   that best fits your needs.
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
