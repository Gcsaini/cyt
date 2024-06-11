import Img from "../../assets/img/Individual.png";
import Img2 from "../../assets/img/couple.png";
import Img3 from "../../assets/img/teen.png";
import bgImg1 from "../../assets/img/individualbg.png";
import bgImg2 from "../../assets/img/couplebg.png";
import bgImg3 from "../../assets/img/teenbg.png";
import LazyImage from "../../utils/lazy-image";
export default function PlansCards() {
  return (
    <div class="rbt-article-content-wrapper">
      <div class="row mb--60 mt--60">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <h4 class="title">Counselling & Therapy Plans</h4>
          </div>
        </div>
      </div>
      <div class="row row--15 mt_dec--30">
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mt--30">
          <div class="rbt-flipbox variation-2">
            <div class="rbt-flipbox-wrap rbt-service rbt-service-1 card-bg-1">
              <div class="rbt-flipbox-front rbt-flipbox-face inner">
                <div class="front-thumb w-100">
                  <LazyImage alt="card-icon" dim={"300-490"} src={Img} />
                </div>
                <div class="content">
                  <h5 class="title">
                    <a href="/elements/service#">Individual Counselling (For Myself)</a>
                  </h5>
                  <ul class="rbt-list-style-3">
                    <li>
                      <i class="feather-heart"></i> Work-Related Stress
                    </li>
                    <li>
                      <i class="feather-flag"></i>  Burnout Prevention
                    </li>
                    <li>
                      <i class="feather-eye"></i> Emotional Support
                    </li>
                    <li>
                      <i class="feather-edit-2"></i> Career Transitions
                    </li>
                    <li>
                      <i class="feather-battery-charging"></i> Stress Management
                    </li>
                  </ul>
                  <a
                    class="rbt-btn-link stretched-link"
                    href="/elements/service#"
                  >
                    Learn More<i class="feather-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div class="rbt-flipbox-back rbt-flipbox-face inner">
                <div class="flip-back-top">
                  <div class="back-thumb w-100">
                    <LazyImage alt="card-icon" dim={"300-490"} src={bgImg1} />
                  </div>
                  <p>
                  Individual counseling offers a unique opportunity to explore and resolve personal challenges. 
                  With customized sessions and proven therapeutic techniques, 
                  therapists work with you to foster a healthier, more fulfilling life.
                  </p>
                </div>
                <a
                  class="rbt-btn rbt-switch-btn btn-white btn-sm"
                  href="/elements/service#"
                >
                  <span data-text="Learn More">Learn More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mt--30">
          <div class="rbt-flipbox variation-2">
            <div class="rbt-flipbox-wrap rbt-service rbt-service-1 card-bg-2">
              <div class="rbt-flipbox-front rbt-flipbox-face inner">
                <div class="front-thumb w-100">
                  <LazyImage alt="card-icon" dim={"300-490"} src={Img2} />
                </div>
                <div class="content">
                  <h5 class="title">
                    <a href="/elements/service#">Couple Counselling (For Myself and My Partner)</a>
                  </h5>
                  <ul class="rbt-list-style-3">
                    <li>
                      <i class="feather-heart"></i>Strengthened Emotional Bond
                    </li>
                    <li>
                      <i class="feather-flag"></i> Conflict Resolution
                    </li>
                    <li>
                      <i class="feather-eye"></i> Rebuilding Trust
                    </li>
                    <li>
                      <i class="feather-edit-2"></i> Enhanced Mutual Respect and Appreciation
                    </li>
                    <li>
                      <i class="feather-battery-charging"></i> Understanding Patterns and Dynamics
                    </li>
                  </ul>
                  <a
                    class="rbt-btn-link stretched-link"
                    href="/elements/service#"
                  >
                    Learn More<i class="feather-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div class="rbt-flipbox-back rbt-flipbox-face inner">
                <div class="flip-back-top">
                  <div class="back-thumb w-100">
                    <LazyImage alt="card-icon" dim={"300-490"} src={bgImg3} />
                  </div>
                  <p>
                  Couple counseling is a collaborative process where we work together to understand and 
                  address your relationship concerns. Through tailored sessions and proven therapeutic techniques, 
                  Therapists aim to help you navigate challenges and
                   build a stronger, healthier, and more fulfilling relationship.
                  </p>
                </div>
                <a
                  class="rbt-btn rbt-switch-btn btn-white btn-sm"
                  href="/elements/service#"
                >
                  <span data-text="Learn More">Learn More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mt--30">
          <div class="rbt-flipbox variation-2">
            <div class="rbt-flipbox-wrap rbt-service rbt-service-1 card-bg-3">
              <div class="rbt-flipbox-front rbt-flipbox-face inner">
                <div class="front-thumb w-100">
                  <LazyImage alt="card-icon" dim={"300-490"} src={Img3} />
                </div>
                <div class="content">
                  <h5 class="title">
                    <a href="/elements/service#">Teen Counseling (For My Child)</a>
                  </h5>
                  <ul class="rbt-list-style-3">
                    <li>
                      <i class="feather-heart"></i> Health and Wellness
                    </li>
                    <li>
                      <i class="feather-flag"></i> Literacy and Language
                    </li>
                    <li>
                      <i class="feather-eye"></i> Social-Emotional Learning
                    </li>
                    <li>
                      <i class="feather-edit-2"></i> Visual and Creative Arts
                    </li>
                    <li>
                      <i class="feather-battery-charging"></i> Thinking and
                      Learning
                    </li>
                  </ul>
                  <a
                    class="rbt-btn-link stretched-link"
                    href="/elements/service#"
                  >
                    Learn More<i class="feather-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div class="rbt-flipbox-back rbt-flipbox-face inner">
                <div class="flip-back-top">
                  <div class="back-thumb w-100">
                    <LazyImage alt="card-icon" dim={"300-490"} src={bgImg2} />
                  </div>
                  <p>
                    Babies enjoy classrooms made for exploring with teachers who
                    support today’s big milestones.
                  </p>
                </div>
                <a
                  class="rbt-btn rbt-switch-btn btn-white btn-sm"
                  href="/elements/service#"
                >
                  <span data-text="Learn More">Learn More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
