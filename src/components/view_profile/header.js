import ImageTag from "../../utils/image-tag";
import { whiteColor } from "../../utils/colors";
import useMediaQuery from "@mui/material/useMediaQuery";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import React from "react";
import { getDecodedToken } from "../../utils/jwt";
import {
  imagePath,
  InsertFavriouteTherapistUrl,
  RemoveFavriouteTherapistUrl,
} from "../../utils/url";
import { postData } from "../../utils/actions";
export default function ProfileHeader(props) {
  const { pageData, favrioutes } = props;
  const [bookmark, setBookmark] = React.useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [showBookmark, setShowBookmark] = React.useState(false);

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

  const handleShare = (e) => {
    e.preventDefault();

    const profileUrl = `${window.location.origin}/view-profile/${pageData._id}`;

    if (navigator.share) {
      // Use native share (mobile + some browsers)
      navigator.share({
        title: pageData.name || "Therapist Profile",
        text: "Check out this therapist profile",
        url: profileUrl,
        
      }).catch((err) => {
        console.log("Sharing failed", err);
      });
    } else {
      // Fallback: copy link
      navigator.clipboard.writeText(profileUrl).then(() => {
        alert("Profile link copied to clipboard!");
      });
    }
  }

  React.useEffect(() => {
    const data = getDecodedToken();
    if (!data) return;

    if (data.role === 1) {
      setShowBookmark(false);
    } else {
      setShowBookmark(true);
      setBookmark(favrioutes.includes(pageData._id));
    }
  }, [pageData, favrioutes]);


  return (
    <>
      <div className="rbt-page-banner-wrapper">
        <div className="rbt-banner-image"></div>
      </div>
      <div
        className="rbt-dashboard-area rbt-section-overlayping-top"
        style={{ paddingBottom: 30 }}
      >
        <div className="container mt--60">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="rbt-dashboard-content-wrapper"
                style={{ marginTop: isMobile ? 60 : 0 }}
              >
                <div className="tutor-bg-photo bg_image bg_image--22 height-350"></div>
                <div
                  className="rbt-tutor-information"
                  style={{
                    display: isMobile ? "" : "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="rbt-tutor-information-left">
                    <div className="thumbnail rbt-avatars size-lg">
                      <ImageTag
                        alt="Instructor"
                        width="250"
                        height="250"
                        src={`${imagePath}/${pageData.user.profile}`}
                        style={{
                          borderRadius: 0,
                          padding: 0,
                          minWidth: 110,
                          width: 110,
                          minHeight: 120,
                          height: 120,
                        }}
                      />
                    </div>
                    <div className="tutor-content">
                      <div>
                        <h5 className="title">
                          {pageData.user.name} &nbsp;
                          <span style={{ fontSize: 14 }}>
                            ({pageData.profile_code})
                          </span>
                        </h5>
                        <div className="rbt-review">
                           <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div> 
                          <span className="rating-count">
                            {pageData.qualification}
                          </span>
                        </div>
                        <ul className="rbt-meta rbt-meta-white mt--5">
                          <li>
                            <i className="feather-user"></i>
                            {pageData.profile_type}
                          </li>
                          <li>
                            <i className="feather-message-circle"></i>
                            {pageData.language_spoken}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <ul
                    style={{
                      listStyle: "none",
                      color: whiteColor,
                      padding: 0,
                      marginBottom: 0,
                    }}
                  >
                    <li style={{ color: "#ffffff" }}>
                      <i className="feather-map-pin"></i> {pageData.state}
                    </li>
                    <li style={{ color: whiteColor }}>
                      <i className="feather-users"></i> {pageData.user?.gender || '-'}
                    </li>
                    <ul className="social-icon social-default justify-content-start">
                      {showBookmark && (
                        <li>
                          <a
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              handleBookmark(pageData._id, bookmark)
                            }
                          >
                            {bookmark ? (
                              <BookmarkAddedIcon
                                sx={{ fontSize: 24, color: "black" }}
                              />
                            ) : (
                              <BookmarkBorderIcon sx={{ fontSize: 24 }} />
                            )}
                          </a>
                        </li>
                      )}
                      <li>
                        <a onClick={handleShare} style={{ cursor: "pointer" }}>
                          <i className="feather-share"></i>
                        </a>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
