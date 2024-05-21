import DeepakImg from "../assets/img/dpk.jpeg";

import LazyImage from "../utils/lazy-image";
import BookBtn from "./global/book-btn";
import ViewProfileBtn from "./global/view-profile-btn";

export default function TherapistCard() {
  return (
    <div className="swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-active">
      <div className="rbt-card variation-01 rbt-hover">
        <div className="rbt-card-img">
          <a href="/course-details/4">
            <LazyImage alt="Card" dim={"488-710"} src={DeepakImg} />
          </a>
        </div>
        <div className="rbt-card-body">
          <ul className="rbt-meta">
            <li>
              <i className="feather-message-circle"></i>Hindi, English
            </li>
            <li>
              <i className="feather-award"></i>3 Year Experience
            </li>
          </ul>
          <h4 className="rbt-card-title">
            <a href="/course-details/4">Deepak Kumar</a>
          </h4>
          <div style={{ marginTop: 7 }}>
            <span>
              <i className="feather-user"></i> Counseling Psychologist
            </span>
          </div>

          <div style={{ marginTop: 7 }}>
            <span>
              <i className="feather-heart"></i> Individual Counselling, Couple
              Counselling, Teen Counselling
            </span>
          </div>

          <div className="rbt-review" style={{ marginTop: 17 }}>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <span className="rating-count">(15 Reviews)</span>
          </div>
          <div
            style={{
              marginTop: 17,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <BookBtn />
            <ViewProfileBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
