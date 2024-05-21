import ImageTag from "../../utils/image-tag";
import img from "../../assets/img/course-017d03.jpg";
export default function WellNessCard() {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
      <div className="rbt-card variation-01 rbt-hover">
        <div className="rbt-card-img">
          <a href="">
            <ImageTag alt="Card image" width="355" height="244" src={img} />
            <div className="rbt-badge-3 bg-white">
              <span>-20%</span>
              <span>Off</span>
            </div>
          </a>
        </div>
        <div className="rbt-card-body">
          <div className="rbt-card-top">
            <div className="rbt-review">
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span className="rating-count">(15 Reviews)</span>
            </div>
            <div className="rbt-bookmark-btn">
              <a
                className="rbt-round-btn"
                title="Bookmark"
                href="/03-online-school#"
              >
                <i className="feather-bookmark"></i>
              </a>
            </div>
          </div>
          <h4 className="rbt-card-title">
            <a href="/course-details/1">
              The Complete Histudy 2024: From Zero to Expert!
            </a>
          </h4>
          <ul className="rbt-meta">
            <li>
              <i className="feather-book"></i>12 Lessons
            </li>
            <li>
              <i className="feather-users"></i>50 Students
            </li>
          </ul>
          <div className="rbt-card-bottom">
            <div className="rbt-price">
              <span className="current-price">$70</span>
              <span className="off-price">$20</span>
            </div>
            <a className="rbt-btn-link" href="/course-details/1">
              Learn More<i className="feather-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
