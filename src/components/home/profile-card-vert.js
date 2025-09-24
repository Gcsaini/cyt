import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageTag from "../../utils/image-tag";
import { getMinMaxPrice } from "../../utils/helpers";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import React from "react";
import { postData } from "../../utils/actions";
import {
  imagePath,
  InsertFavriouteTherapistUrl,
  RemoveFavriouteTherapistUrl,
} from "../../utils/url";
import { getDecodedToken } from "../../utils/jwt";
import VerifiedIcon from "@mui/icons-material/Verified";
import RecommendIcon from "@mui/icons-material/ThumbUpAlt"; // ✅ Recommended icon

export default function ProfileCardVert(props) {
  const { data, favrioutes } = props;
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [bookmark, setBookmark] = React.useState(favrioutes.includes(data._id));
  const [showBookmark, setShowBookmark] = React.useState(true);
  const [fees, setFees] = React.useState([]);

  const handleBookmark = (id, value) => {
    setBookmark((prevBookmark) => !prevBookmark);
    let isSuccess = true;
    if (value) {
      isSuccess = removeFavrioute(id);
    } else {
      isSuccess = addFavrioute(id);
    }
    if (!isSuccess) {
      setBookmark(false);
    }
  };

  const addFavrioute = async (id) => {
    try {
      const response = await postData(InsertFavriouteTherapistUrl, {
        therapistId: id,
      });
      return !!response.status;
    } catch (error) {
      return false;
    }
  };

  const removeFavrioute = async (id) => {
    try {
      const response = await postData(RemoveFavriouteTherapistUrl, {
        therapistId: id,
      });
      return !!response.status;
    } catch (error) {
      return false;
    }
  };

  React.useEffect(() => {
    const token = getDecodedToken();
    if (token && token.role === 1) {
      setShowBookmark(false);
    }
    setBookmark(favrioutes.includes(data._id));
    setFees(data.fees);
  }, [data, favrioutes]);

  return (
    <div className="swiper-slide">
      <div className="rbt-card variation-01">
        {/* Profile Image */}
        <div className="rbt-card-img" style={{ position: "relative" }}>
          <Link to={`/view-profile/${data._id}`} style={{ cursor: "pointer" }}>
            <ImageTag
              alt="Profile-photo"
              style={{ height: "250px", width: "100%", objectFit: "cover" }}
              src={`${imagePath}/${data.user.profile}`}
            />

            {/* Badge */}
            <div
              className="rbt-badge-group"
              style={{
                position: "absolute",
                bottom: "10px",
                left: "10px",
                zIndex: 2,
              }}
            >
              {data.priority === 1 && (
                <span
                  className="rbt-badge-6"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    backgroundColor: "#15aa3a",
                    color: "#fff",
                    padding: "5px 14px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontWeight: "600",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                  }}
                >
                  <RecommendIcon sx={{ fontSize: 16 }} />
                  Recommended
                </span>
              )}
              {data.priority === 2 && (
                <span
                  className="rbt-badge-6"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    backgroundColor: "#1976d2",
                    color: "#fff",
                    padding: "5px 14px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontWeight: "600",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                  }}
                >
                  <VerifiedIcon sx={{ fontSize: 16 }} />
                  Verified
                </span>
              )}
            </div>
          </Link>
        </div>

        {/* Card Body */}
        <div className="rbt-card-body">
          {/* Language & State */}
          <ul className="rbt-meta">
            <li style={{ fontSize: 16 }}>
              <i className="fas fa-globe"></i> {data.language_spoken}
            </li>
            <li style={{ fontSize: 16 }}>
              <i className="fas fa-map-marker-alt"></i> {data.state}
            </li>
          </ul>

          {/* Name + Icon + Bookmark */}
          <div className="rbt-card-top" style={{ display: "flex", justifyContent: "space-between" }}>
            <h4 className="rbt-card-title" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Link to={`/view-profile/${data._id}`} style={{ cursor: "pointer" }}>
                {data.user.name}
              </Link>
              {data.priority === 1 && <RecommendIcon sx={{ fontSize: 18, color: "#15aa3a" }} />}
              {data.priority === 2 && <VerifiedIcon sx={{ fontSize: 18, color: "#1976d2" }} />}
            </h4>

            {showBookmark && (
              <div className="rbt-bookmark-btn">
                <a
                  style={{ cursor: "pointer" }}
                  className="rbt-round-btn"
                  title="Bookmark"
                  onClick={() => handleBookmark(data._id, bookmark)}
                >
                  {bookmark ? (
                    <BookmarkAddedIcon sx={{ fontSize: 24 }} />
                  ) : (
                    <BookmarkBorderIcon sx={{ fontSize: 24 }} />
                  )}
                </a>
              </div>
            )}
          </div>

          {/* Stars under name */}
          <div className="rbt-review" style={{ marginTop: 4 }}>
            <div className="rating" style={{ color: "#f5a623" }}>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>

          {/* Profile Type */}
          <div style={{ marginTop: 7, display: "flex", alignItems: "center" }}>
            <i className="fas fa-user-md"></i>
            <span style={{ fontSize: 16, marginLeft: 5 }}>{data.profile_type}</span>
          </div>

          {/* Fees */}
          <div style={{ marginTop: 5, display: "flex", alignItems: "center" }}>
            <i className="fas fa-credit-card"></i>
            <span style={{ fontSize: 16, marginLeft: 5 }}>
              {getMinMaxPrice(fees)} per session
            </span>
          </div>

          {/* Buttons */}
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
                padding: "0 27px",
                cursor: "pointer",
              }}
            >
              View Profile
            </Link>

            <Link
              className="rbt-btn btn-gradient book-btn"
              to={`/therapist-checkout/${data._id}`}
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "0 27px",
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
