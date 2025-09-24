import useMediaQuery from "@mui/material/useMediaQuery";
import ImageTag from "../../utils/image-tag";
import { Link } from "react-router-dom";
import { getMinMaxPrice } from "../../utils/helpers";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import VerifiedIcon from "@mui/icons-material/Verified"; // ✅ Badge + Name ke aage
import PersonIcon from "@mui/icons-material/Person"; 
import LanguageIcon from "@mui/icons-material/Language"; 
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"; 
import React from "react";
import { getDecodedToken } from "../../utils/jwt";
import { postData } from "../../utils/actions";
import {
  imagePath,
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
        {/* Image + Badge */}
        <div className="rbt-card-img" style={{ position: "relative" }}>
          <Link to={`/view-profile/${pageData._id}`}>
            <ImageTag
              alt="profile image"
              src={`${imagePath}/${pageData.user.profile}`}
              style={{
                height: isMobile ? 255 : 235,
                width: "100%",
                objectFit: "cover",
              }}
            />
            {/* Verified Badge with Blue Color */}
            <div
              className="rbt-badge-group"
              style={{
                position: "absolute",
                bottom: "10px",
                right: "10px",
                zIndex: 2,
              }}
            >
              <span
                className="rbt-badge-6"
                style={{
                  backgroundColor: "#1976d2", // ✅ Blue
                  color: "#fff",
                  padding: "5px 12px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <VerifiedIcon sx={{ fontSize: 16 }} /> Verified
              </span>
            </div>
          </Link>
        </div>

        {/* Card Body */}
        <div className="rbt-card-body">
          <div className="rbt-card-top">
            <div className="rbt-review" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <h4 className="rbt-card-title" style={{ margin: 0 }}>
                <Link to={`/view-profile/${pageData._id}`}>
                  {pageData.user.name}
                </Link>
              </h4>
              {/* Verified icon next to name */}
              <VerifiedIcon sx={{ fontSize: 18, color: "#1976d2" }} />
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

          {/* Meta info with new icons */}
          <ul className="rbt-meta" style={{ marginTop: 0 }}>
            <li style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <PersonIcon sx={{ fontSize: 18 }} /> {pageData.profile_type}
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <LanguageIcon sx={{ fontSize: 18 }} /> {pageData.language_spoken}
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <MonetizationOnIcon sx={{ fontSize: 18 }} />{" "}
              <span style={{ lineHeight: "2rem" }}>
                {getMinMaxPrice(pageData.fees)}
              </span>
            </li>
          </ul>

          {/* Buttons */}
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
                padding: isMobile || isTablet ? "0 26px" : "0 10px",
              }}
            >
              View Profile
            </Link>
            <Link
              className="rbt-btn btn-gradient book-btn"
              to={`/therapist-checkout/${pageData._id}`}
              style={{
                display: "flex",
                justifyContent: "center",
                padding: isMobile || isTablet ? "0 20px" : "0 16px",
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
