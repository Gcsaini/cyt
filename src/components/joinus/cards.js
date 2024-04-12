import LazyImage from "../../utils/lazy-image";
import ServiceImg from "../../assets/img/service-01.webp";
import ServiceImg2 from "../../assets/img/service-03.webp";
import ServiceImg3 from "../../assets/img/service-04.webp";
export default function JoinCards() {
  return (
    <div class="rbt-article-content-wrapper">
      <div class="row row--15 mt_dec--30">
        <div class="col-lg-4 col-xl-4 col-xxl-4 col-md-6 col-sm-6 col-12 mt--30">
          <div class="service-card service-card-6 bg-color bg-card-color-1">
            <div class="inner">
              <div class="icon">
                <LazyImage alt="Shape" dim={"60"} src={ServiceImg} />
                <LazyImage
                  alt="Shape"
                  dim={"60"}
                  src={ServiceImg}
                  class="opacity_image"
                />
              </div>
              <div class="content">
                <h6 class="title">
                  <a href="/elements/service#">Grow Confident</a>
                </h6>
                <p class="description">
                  English Learning looking for random paragraphs, you've come to
                  the right place. When a random.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-xl-4 col-xxl-4 col-md-6 col-sm-6 col-12 mt--30">
          <div class="service-card service-card-6 bg-color bg-card-color-2">
            <div class="inner">
              <div class="icon">
                <LazyImage alt="Shape" dim={"60"} src={ServiceImg2} />
                <LazyImage
                  alt="Shape"
                  dim={"60"}
                  src={ServiceImg2}
                  class="opacity_image"
                />
              </div>
              <div class="content">
                <h6 class="title">
                  <a href="/elements/service#">Accive Good Job</a>
                </h6>
                <p class="description">
                  Javascript Learning looking for random paragraphs, you've come
                  to the right place. When a random.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-xl-4 col-xxl-4 col-md-6 col-sm-6 col-12 mt--30">
          <div class="service-card service-card-6 bg-color bg-card-color-3">
            <div class="inner">
              <div class="icon">
                <LazyImage alt="Shape" dim={"60"} src={ServiceImg3} />
                <LazyImage
                  alt="Shape"
                  dim={"60"}
                  src={ServiceImg3}
                  class="opacity_image"
                />
              </div>
              <div class="content">
                <h6 class="title">
                  <a href="/elements/service#">Best Learning</a>
                </h6>
                <p class="description">
                  Angular Learning looking for random paragraphs, you've come to
                  the right place. When a random.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
