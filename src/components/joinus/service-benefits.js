import Img from "../../assets/img/kindergarten-03-frontadc5.jpg";
import Img2 from "../../assets/img/kindergarten-01-fronta3e4.jpg";
import Img3 from "../../assets/img/kindergarten-02-front210a.jpg";
import bgImg1 from "../../assets/img/kindergarten-01-back618d.jpg";
import bgImg2 from "../../assets/img/kindergarten-03-back6149.jpg";
import bgImg3 from "../../assets/img/kindergarten-04-backab08.jpg";
import LazyImage from "../../utils/lazy-image";
import { Link, useNavigate } from "react-router-dom";
export default function ServiceBenefits() {
  const navigate = useNavigate();
  return (
    <div class="rbt-article-content-wrapper">
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
                    <Link to="#">Appointment Scheduling</Link>
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
                  <Link
                    style={{ cursor: "pointer" }}
                    class="rbt-btn-link stretched-link"
                    onClick={() => navigate("/therapist-registration")}
                  >
                    Learn More<i class="feather-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div class="rbt-flipbox-back rbt-flipbox-face inner">
                <div class="flip-back-top">
                  <div class="back-thumb w-100">
                    <LazyImage alt="card-icon" dim={"300-490"} src={bgImg1} />
                  </div>
                  <p>
                    Babies enjoy classrooms made for exploring with teachers who
                    support today’s big milestones.
                  </p>
                </div>
                <Link
                  class="rbt-btn rbt-switch-btn btn-white btn-sm"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/therapist-registration")}
                >
                  <span data-text="Learn More">Learn More</span>
                </Link>
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
                    <Link to="#">Toddler/Twos</Link>
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
                  <Link
                    class="rbt-btn-link stretched-link"
                    onClick={() => navigate("/therapist-registration")}
                    style={{ cursor: "pointer" }}
                  >
                    Learn More<i class="feather-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div class="rbt-flipbox-back rbt-flipbox-face inner">
                <div class="flip-back-top">
                  <div class="back-thumb w-100">
                    <LazyImage alt="card-icon" dim={"300-490"} src={bgImg3} />
                  </div>
                  <p>
                    Babies enjoy classrooms made for exploring with teachers who
                    support today’s big milestones.
                  </p>
                </div>
                <Link
                  class="rbt-btn rbt-switch-btn btn-white btn-sm"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/therapist-registration")}
                >
                  <span data-text="Learn More">Learn More</span>
                </Link>
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
                    <Link to="#">Time-Saving Features</Link>
                  </h5>
                  <ul class="rbt-list-style-3">
                    <li>
                      <i class="feather-heart"></i> Follow-Up Receipts
                    </li>
                    <li>
                      <i class="feather-flag"></i> Create Case History
                    </li>
                    <li>
                      <i class="feather-eye"></i> Record Client's Invoices
                    </li>
                    <li>
                      <i class="feather-edit-2"></i> Share Feedback Form
                    </li>
                  </ul>
                </div>
              </div>
              <div class="rbt-flipbox-back rbt-flipbox-face inner">
                <div class="flip-back-top">
                  <div class="back-thumb w-100">
                    <LazyImage alt="card-icon" dim={"300-490"} src={bgImg2} />
                  </div>
                  <p>
                    Our dashboard saves you time so you can focus on what
                    matters most—your clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
