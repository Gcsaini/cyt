import DeepakImg from "../../assets/img/deepbanner.png";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageTag from "../../utils/image-tag";
import { truncateString } from "../../utils/helpers";
export default function ProfileCardVert(props) {
  const { data } = props;
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <div className="swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-active">
      <div className="rbt-card variation-01">
        <div className="rbt-card-img">
          <Link to="/notfound" style={{ cursor: "pointer" }}>
            <ImageTag
              alt="Card"
              height={"488"}
              width={"710"}
              src={data.profile}
            />
          </Link>
        </div>
        <div className="rbt-card-body">
          <ul className="rbt-meta">
            <li style={{ fontSize: 16 }}>
              <i className="feather-message-circle"></i>
              {data.language_spoken}
            </li>
            <li style={{ fontSize: 16 }}>
              <i className="feather-map-pin"></i>
              {data.state}
            </li>
          </ul>

          <h4 className="rbt-card-title">
            <Link to="/notfound" style={{ cursor: "pointer" }}>
              {data.name}
            </Link>
          </h4>
          <div style={{ marginTop: 7, display: "flex" }}>
            <span>
              <i className="feather-user"></i>
            </span>
            <span style={{ fontSize: 16, marginLeft: 5 }}>
              {data.profile_type}
            </span>
          </div>

          <div style={{ marginTop: 5, display: "flex" }}>
            <span>
              <i className="feather-heart"></i>
            </span>
            <span style={{ fontSize: 16, marginLeft: 5 }}>
              {truncateString(data.serve_type)}
            </span>
          </div>

          <div
            style={{
              marginTop: 24,
              marginBottom: 10,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Link
              className="view-btn view-btn-border"
              to={`/view-profile/${data._id}`}
              style={{
                padding: isMobile ? "0 30px" : "0 22px",
                cursor: "pointer",
              }}
            >
              View Profile
            </Link>
            <Link
              className="rbt-btn btn-gradient book-btn"
              to="/notfound"
              style={{
                display: "flex",
                justifyContent: "center",
                padding: isTablet ? "0 24px" : "0 30px",
              }}
            >
              <span>&nbsp;&nbsp;Book Now&nbsp;&nbsp;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
