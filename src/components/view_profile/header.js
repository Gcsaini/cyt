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
import { Link, useNavigate } from "react-router-dom";
import BookBtn from "../global/book-btn";
import { Helmet } from "react-helmet-async";

export default function ProfileHeader(props) {
  const navigate = useNavigate();
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const { pageData, favrioutes } = props;
  const [bookmark, setBookmark] = React.useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [showBookmark, setShowBookmark] = React.useState(false);

  const profileUrl = `${window.location.origin}/view-profile/${pageData._id}`;
  const title = `${pageData.user.name} - ${pageData.qualification} | Choose Your Therapist`;
  const description = `View ${pageData.user.name}, a qualified ${pageData.profile_type} based in ${pageData.state}. Languages: ${pageData.language_spoken}. Book a session today.`;

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
    if (navigator.share) {
      navigator
        .share({
          title: pageData.name || "Therapist Profile",
          text: "Check out this therapist profile",
          url: profileUrl,
        })
        .catch((err) => {
          console.log("Sharing failed", err);
        });
    } else {
      navigator.clipboard.writeText(profileUrl).then(() => {
        alert("Profile link copied to clipboard!");
      });
    }
  };

  const handleClick = () => {
    navigate(`/therapist-checkout/${pageData._id}`);
  };

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
      {/* ✅ SEO Helmet */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={profileUrl} />
        <meta
          property="og:image"
          content={`${imagePath}/${pageData.user.profile}`}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content={`${imagePath}/${pageData.user.profile}`}
        />

        {/* Canonical */}
        <link rel="canonical" href={profileUrl} />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: pageData.user.name,
            image: `${imagePath}/${pageData.user.profile}`,
            gender: pageData.user?.gender || "Not specified",
            jobTitle: pageData.qualification,
            description: `${pageData.user.name} is a ${pageData.profile_type} based in ${pageData.state}.`,
            address: {
              "@type": "PostalAddress",
              addressRegion: pageData.state,
            },
          })}
        </script>
      </Helmet>

      {/* ✅ Page Content */}
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
                style={{ marginTop: isMobile ? 100 : 0 }}
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
                        alt={`${pageData.user.name} - ${pageData.qualification}`}
                        width="250"
                        height="250"
                        src={`${imagePath}/${pageData.user.profile}`}
                        style={{
                          borderRadius: 10,
                          padding: 0,
                          minWidth: 130,
                          width: 140,
                          minHeight: 140,
                          height: 130,
                        }}
                        loading="lazy"
                      />
                    </div>
                    <div className="tutor-content">
                      <div>
                        <div className="rbt-review">
                          <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        {/* ✅ Semantic Headings */}
                        <h1 className="title">{pageData.user.name}</h1>
                        <h2 className="title">{pageData.qualification}</h2>

                        <ul className="rbt-meta rbt-meta-white mt--5">
                          <li>
                            <i className="feather-user"></i>
                            {pageData.profile_type}
                          </li>
                          <li>
                            <i className="feather-message-circle"></i>
                            {pageData.language_spoken}
                          </li>
                          <li>
                            <i className="feather-map-pin"></i> {pageData.state}
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
                    <li style={{ color: whiteColor }}>
                      <i className="feather-users"></i>{" "}
                      {pageData.user?.gender || "-"}
                    </li>

                    <li>
                      <div
                        className="mt--15"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          gap: "10px",
                        }}
                      >
                        <button
                          onClick={handleClick}
                          style={{
                            flex: 1,
                            backgroundColor: "white",
                            borderRadius: "4px",
                            padding: "10px 30px",
                            border: "1px solid #ccc",
                            cursor: "pointer",
                            transition: "background-color 0.3s",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.backgroundColor = "#f0f0f0")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.backgroundColor = "white")
                          }
                        >
                          Book Now
                        </button>

                        <button
                          onClick={handleShare}
                          style={{
                            flex: 1,
                            backgroundColor: "white",
                            borderRadius: "4px",
                            padding: "10px 30px",
                            border: "1px solid #ccc",
                            cursor: "pointer",
                            transition: "background-color 0.3s",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.backgroundColor = "#f0f0f0")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.backgroundColor = "white")
                          }
                        >
                          Share Now
                        </button>
                      </div>
                    </li>
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
