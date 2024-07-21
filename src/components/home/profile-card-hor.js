import useMediaQuery from "@mui/material/useMediaQuery";
import ImageTag from "../../utils/image-tag";
import { Link } from "react-router-dom";
import { truncateString } from "../../utils/helpers";
export default function ProfileCardHor({ pageData }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <div className="col-12 mt--30 sal-animate">
      <div className="rbt-card variation-01 rbt-hover card-list-2">
        <div className="rbt-card-img">
          <Link to="">
            <ImageTag
              alt="profile image"
              src={pageData.profile}
              style={{ height: isMobile ? 255 : "auto" }}
            />
          </Link>
        </div>
        <div className="rbt-card-body">
          {/* <div className="rbt-card-top">
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
              <Link className="rbt-round-btn" title="Bookmark" to="">
                <i className="feather-bookmark"></i>
              </Link>
            </div>
          </div> */}
          <h4 className="rbt-card-title">
            <Link to="">{pageData.name}</Link>
          </h4>
          <ul className="rbt-meta" style={{ marginTop: 0 }}>
            <li>
              <i className="feather-user"></i>
              {pageData.profile_type}
            </li>
            <li>
              <i className="feather-message-circle"></i>
              {pageData.language_spoken}
            </li>

            <li>
              <i className="feather-message-circle"></i>
              <span style={{ lineHeight: "2rem" }}>
                {truncateString(pageData.serve_type)}
              </span>
            </li>
          </ul>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Link
              className="view-btn view-btn-border"
              to={`/view-profile/${pageData._id}`}
              style={{
                padding: isMobile || isTablet ? "0 24px" : "0 16px",
              }}
            >
              View Profile
            </Link>
            <Link
              className="rbt-btn btn-gradient book-btn"
              to=""
              style={{
                display: "flex",
                justifyContent: "center",
                padding: isMobile || isTablet ? "0 26px" : "0 20px",
              }}
            >
              <span>Book Now</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
