import { Link } from "react-router-dom";
import ImageTag from "../../../utils/image-tag";
import CourseImg from "../../../assets/img/course-017d03.jpg";
export default function InActiveWorkshop() {
  return (
    <div class="row g-5">
      <div class="col-lg-4 col-md-6 col-12">
        <div class="rbt-card variation-01 rbt-hover">
          <div class="rbt-card-img">
            <Link href="/course-details/1">
              <ImageTag
                alt="React Front To Back"
                loading="lazy"
                width="330"
                height="227"
                src={CourseImg}
              />
              <div class="rbt-badge-3 bg-white">
                <span>-34%</span>
                <span>Off</span>
              </div>
            </Link>
          </div>
          <div class="rbt-card-body">
            <div class="rbt-card-top">
              <div class="rbt-review">
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <span class="rating-count">(100 Reviews)</span>
              </div>
              <div class="rbt-bookmark-btn">
                <a
                  class="rbt-round-btn"
                  title="Bookmark"
                  href="/instructor/instructor-personal-courses#"
                >
                  <i class="feather-bookmark"></i>
                </a>
              </div>
            </div>
            <h4 class="rbt-card-title">
              <a href="/course-details/1">React Front To Back</a>
            </h4>
            <ul class="rbt-meta">
              <li>
                <i class="feather-book"></i>50 Lessons
              </li>
              <li>
                <i class="feather-users"></i>100 Students
              </li>
            </ul>
            <div class="rbt-card-bottom">
              <div class="rbt-price">
                <span class="current-price">$60</span>
                <span class="off-price">$84.99</span>
              </div>
              <a
                class="rbt-btn-link left-icon"
                href="/instructor/instructor-personal-courses#"
              >
                <i class="feather-edit"></i> Edit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
