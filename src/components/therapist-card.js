import DeepakImg from "../assets/img/dpk.jpeg";
import ImageTag from "../utils/image-tag";
import BookBtn from "./global/book-btn";
import OutlineBtn from "./global/outline-btn";

export default function TherapistCard() {
  return (
    <div className="swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-active">
      <div className="rbt-card variation-01">
        <div className="rbt-card-img">
          <a href="">
            <ImageTag alt="Card" height={"488"} width={"710"} src={DeepakImg} />
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
            <a href="">Deepak Kumar</a>
          </h4>
          <div style={{ marginTop: 7, display: "flex" }}>
            <span>
              <i className="feather-user"></i>
            </span>
            <span style={{ fontSize: 16, marginLeft: 5 }}>
              Counseling Psychologist
            </span>
          </div>

          <div style={{ marginTop: 5, display: "flex" }}>
            <span>
              <i className="feather-heart"></i>
            </span>
            <span style={{ fontSize: 16, marginLeft: 5 }}>
              Individual Counselling, Couple Counselling, Teen Counselling
            </span>
          </div>

          <div className="rbt-review" style={{ marginTop: 12 }}>
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
              marginTop: 20,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <OutlineBtn title={"View Profile"} />
            <BookBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
