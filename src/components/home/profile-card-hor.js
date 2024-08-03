import useMediaQuery from "@mui/material/useMediaQuery";
import ImageTag from "../../utils/image-tag";
import { Link } from "react-router-dom";
import { getMinMaxPrice, truncateString } from "../../utils/helpers";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import React from "react";
import { getDecodedToken } from "../../utils/jwt";
import { postData } from "../../utils/actions";
import {
  InsertFavriouteTherapistUrl,
  RemoveFavriouteTherapistUrl,
} from "../../utils/url";
export default function ProfileCardHor({ pageData, favrioutes }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [bookmark, setBookmark] = React.useState(false);
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
    const data = getDecodedToken();
    if (data) {
      if (data.role === 1) {
        setShowBookmark(false);
      }
    }
    setBookmark(favrioutes.includes(pageData._id));
  }, [pageData, favrioutes]);

  return (
    <div className="col-12 mt--30 sal-animate">
      <div className="rbt-card variation-01 rbt-hover card-list-2">
        <div className="rbt-card-img">
          <Link to={`/view-profile/${pageData._id}`}>
            <ImageTag
              alt="profile image"
              src={pageData.profile}
              style={{ height: isMobile ? 255 : 235 }}
            />
          </Link>
        </div>
        <div className="rbt-card-body">
          <div className="rbt-card-top">
            <div className="rbt-review">
              <h4 className="rbt-card-title">
                <Link to={`/view-profile/${pageData._id}`}>
                  {pageData.name}
                </Link>
              </h4>
            </div>
            {showBookmark && (
              <div className="rbt-bookmark-btn">
                <a
                  style={{ cursor: "pointer" }}
                  className="rbt-round-btn"
                  title="Bookmark"
                  onClick={() => handleBookmark(pageData._id, bookmark)}
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
              <i className="feather-eye"></i>
              <span style={{ lineHeight: "2rem" }}>
                {truncateString(pageData.serve_type)}
              </span>
            </li>
            <li>
              <i className="feather-eye"></i>
              <span style={{ lineHeight: "2rem" }}>
                {getMinMaxPrice(pageData)}
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
