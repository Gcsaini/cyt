import Course from "../../assets/img/course-018c85.jpg";
import Avatar from "../../assets/img/avatar-027dc8.png";
import LazyImage from "../../utils/lazy-image";
export default function CourseCard() {
  return (
    <div className="col-12">
      <div className="rbt-card variation-01 rbt-hover">
        <div className="rbt-card-img">
          <a href="course-details/%5bcourseId%5d">
            <LazyImage alt="Profile Card" dim={"244-355"} src={Course} />
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
              <a className="rbt-round-btn" title="Bookmark" href="index.html#">
                <i className="feather-bookmark"></i>
              </a>
            </div>
          </div>
          <h4 className="rbt-card-title">
            <a href="course-details/%5bcourseId%5d">
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
          <p className="rbt-card-text">
            Master Python by building 100 projects in 100 days. Learn data
            science, automation, build websites, games and apps!
          </p>
          <div className="rbt-author-meta mb--10">
            <div className="rbt-avater">
              <a href="profile/%5bprofileId%5d">
                <LazyImage alt="Sophia Jaymes" dim={"33"} src={Avatar} />
              </a>
            </div>
            <div className="rbt-author-info">
              By
              <a href="profile/%5bprofileId%5d">Claudia Pruitt</a>
              In <a href="index.html#">Designing</a>
            </div>
          </div>
          <div className="rbt-card-bottom" style={{ marginBottom: 10 }}>
            <div className="rbt-price">
              <span className="current-price">$70</span>
              <span className="off-price">$20</span>
            </div>
            <a className="rbt-btn-link" href="course-details/%5bcourseId%5d">
              Learn More<i className="feather-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
