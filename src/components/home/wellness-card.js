import { Link } from "react-router-dom";
import ImageTag from "../../utils/image-tag";
import { truncateString } from "../../utils/helpers";

export default function WellNessCard({ data }) {
  return (
    <div className="col-lg-3 col-md-6 col-12">
      <div className="rbt-card variation-01 rbt-hover">
        <div className="rbt-card-img">
          <Link href="/course-details/1">
            <ImageTag
              alt={truncateString(data.title, 20)}
              loading="lazy"
              style={{ height: 200 }}
              src={data.workshop_image}
            />
          </Link>
        </div>
        <div className="rbt-card-body">
          <div className="rbt-card-top">
            <div className="rbt-price">
              <span className="current-price">₹{data.price}</span>
              <span className="off-price">₹{data.mrp}</span>
            </div>
            <div className="rbt-bookmark-btn"></div>
          </div>
          <h4 className="rbt-card-title" style={{ fontSize: 16 }}>
            <a href="/course-details/1">{truncateString(data.title, 60)}</a>
          </h4>
          <ul className="rbt-meta mt--15">
            <li>
              <i className="feather-book"></i>
              {data.language}
            </li>
            <li>
              <i className="feather-users"></i> {data.level}
            </li>
          </ul>
          <ul className="rbt-meta">
            <li>
              <i className="feather-book"></i> {data.event_date}
            </li>
          </ul>

          <div class="rbt-card-bottom mt--20">
            <Link
              to={data.content_pdf}
              target="_blank"
              className="rbt-btn btn-sm bg-primary-opacity w-100 text-center"
            >
              Content PDF
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
