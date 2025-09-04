import { Link } from "react-router-dom";
import ImageTag from "../../utils/image-tag";
import { truncateString } from "../../utils/helpers";
import { imagePath } from "../../utils/url";

export default function WellNessCard({ data }) {
  return (
    <div className="rbt-card variation-01 rbt-hover">
      <div className="rbt-card-img">
        <Link href={`/workshop-detail/${data._id}`}>
          <ImageTag
            alt={truncateString(data.title, 20)}
            loading="lazy"
            style={{ height: 200 }}
            src={`${imagePath}/${data.workshop_image}`} 
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
          <a href={`/workshop-detail/${data._id}`}>
            {truncateString(data.title, 60)}
          </a>
        </h4>
        <ul className="rbt-meta mt--15">
          <li>
            <i className="feather-message-circle"></i>
            {data.category}
          </li>
          <li>
            <i className="feather-heart"></i> {data.level}
          </li>
        </ul>
        <ul className="rbt-meta">
          <li>
            <i className="feather-calendar"></i> {data.event_date}&nbsp; (
            {data.event_time})
          </li>
          <div class="rbt-author-info">
                                By &nbsp;
                                <Link to={`/view-profile/${data.post_by._id}`}>
                                  {data.post_by.user?.name}
                                </Link>
                                &nbsp;In&nbsp;
                                <a href="#">{data.post_by.profile_type}</a>
                              </div>
        </ul>

        <div className="rbt-card-bottom mt--20">
          <Link
            to={`/workshop-detail/${data._id}`}
            className="rbt-btn btn-sm bg-primary-opacity w-100 text-center"
          >
           Check Now
          </Link>
        </div>
      </div>
    </div>
  );
}
