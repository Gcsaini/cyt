import ImageTag from "../../utils/image-tag";
import img from "../../assets/img/wellness.jpeg";
import { Link } from "react-router-dom";
export default function WellNessCard() {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
      <div className="rbt-card variation-01 rbt-hover">
        <div className="rbt-card-img">
          <Link to="">
            <ImageTag alt="Card image" width="355" height="244" src={img} />
          </Link>
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
              <Link
                className="rbt-round-btn"
                title="Bookmark"
                to="/03-online-school#"
              >
                <i className="feather-bookmark"></i>
              </Link>
            </div>
          </div>
          <h4 className="rbt-card-title">
            <Link to="/course-details/1">Pehchaan - self awareness</Link>
          </h4>
          <ul className="rbt-meta">
            <li>
              <i className="feather-book"></i>2 Hours
            </li>
            <li>
              <i className="feather-users"></i>50 Seats
            </li>
          </ul>
          <div className="rbt-card-bottom">
            <div className="rbt-price">
              <span className="current-price">800 INR</span>
              <span className="off-price">1000 INR</span>
            </div>
            <Link className="rbt-btn-link" to="/course-details/1">
              Registration Soon<i className="feather-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
