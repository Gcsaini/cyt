import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageTag from "../../utils/image-tag";
import { getMinMaxPrice, truncateString } from "../../utils/helpers";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import React from "react";
import { postData } from "../../utils/actions";
import {
  InsertFavriouteTherapistUrl,
  RemoveFavriouteTherapistUrl,
} from "../../utils/url";
import { getDecodedToken } from "../../utils/jwt";
export default function ProfileCardVert(props) {
  const { data, favrioutes } = props;
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [bookmark, setBookmark] = React.useState(favrioutes.includes(data._id));
  const [showBookmark, setShowBookmark] = React.useState(true);

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
    if (token) {
      if (token.role === 1) {
        setShowBookmark(false);
      }
    }
    setBookmark(favrioutes.includes(data._id));
  }, [data, favrioutes]);

  return (
    <div className="swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-active">
      <div className="rbt-card variation-01">
        <div className="rbt-card-img">
          <Link to={`/view-profile/${data._id}`} style={{ cursor: "pointer" }}>
            <ImageTag
              alt="Profile-photo"
              style={{ height: "250px" }}
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
          <div className="rbt-card-top">
            <div className="rbt-review">
              <h4 className="rbt-card-title">
                <Link
                  to={`/view-profile/${data._id}`}
                  style={{ cursor: "pointer" }}
                >
                  {data.name}
                </Link>
              </h4>
            </div>
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
              <i className="feather-eye"></i>
            </span>
            <span style={{ fontSize: 16, marginLeft: 5 }}>
              {getMinMaxPrice(data)}
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
              to={`/therapist-checkout/${data._id}`}
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
