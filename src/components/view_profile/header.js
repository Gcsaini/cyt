import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageTag from "../../utils/image-tag";
import { whiteColor } from "../../utils/colors";
import { imagePath } from "../../utils/url";

export default function ProfileHeader({ pageData }) {
  const navigate = useNavigate();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const profileUrl = `${window.location.origin}/view-profile/${pageData._id}`;
  const title = `${pageData.user.name} - ${pageData.profile_type}`;
  const description = `${pageData.user.name} is a ${pageData.qualification} & ${pageData.profile_type} based in ${pageData.state}. Gender: ${pageData.user?.gender || "-"}.`;

  const handleClick = () => navigate(`/therapist-checkout/${pageData._id}`);

  const handleShare = async () => {
    const shareText = `${pageData.user.name}, a ${pageData.profile_type} based in ${pageData.state}. Connect and book a session today!`;
    const shareUrl = profileUrl;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${pageData.user.name} - ${pageData.profile_type}`,
          text: shareText,
          url: shareUrl,
        });
      } catch (error) {
        console.log("Sharing cancelled or failed:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
        alert("Profile link copied to clipboard! Paste it anywhere to share.");
      } catch (error) {
        console.log("Clipboard write failed:", error);
        alert("Sharing not supported. Please copy the link manually.");
      }
    }
  };

  return (
    <>
      {/* SEO + Open Graph */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={profileUrl} />
        <meta
          property="og:image"
          content={`${imagePath}/${pageData.user.profile}`}
        />
        <meta property="og:type" content="profile" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content={`${imagePath}/${pageData.user.profile}`}
        />
        <link rel="canonical" href={profileUrl} />
      </Helmet>

      {/* Embedded CSS for animation */}
      <style>
        {`
          .fade-in {
            opacity: 0;
            transform: translateY(-20px);
            animation: fadeInUp 0.8s forwards;
          }
          .fade-in.delay-1 { animation-delay: 0.3s; }
          .fade-in.delay-2 { animation-delay: 0.6s; }
          .fade-in.delay-3 { animation-delay: 0.9s; }

          @keyframes fadeInUp {
            to { opacity: 1; transform: translateY(0); }
          }

          .profile-image-square {
            width: 180px;
            height: 180px;
            border-radius: 12px;
            overflow: hidden;
            object-fit: cover;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            margin: 0 auto;
          }

          @media (min-width: 1024px) {
            .profile-image-square {
              width: 220px;
              height: 220px;
            }
          }
        `}
      </style>

      {/* Page Content */}
      <div className="rbt-dashboard-area rbt-section-overlayping-top" style={{ paddingBottom: 30 }}>
        <div className="container mt--60">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-dashboard-content-wrapper" style={{ marginTop: isMobile ? 100 : 0 }}>
                <div className="tutor-bg-photo bg_image bg_image--22 height-350"></div>
                <div
                  className="rbt-tutor-information"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {/* Profile Image + Info */}
                  <div
                    className="rbt-tutor-information-left"
                    style={{ textAlign: isMobile ? "center" : "left" }}
                  >
                    <div className="thumbnail rbt-avatars size-lg">
                      <ImageTag
                        alt={`${pageData.user.name} - ${pageData.qualification}`}
                        width="220"
                        height="220"
                        src={`${imagePath}/${pageData.user.profile}`}
                        className="profile-image-square"
                        loading="lazy"
                      />
                    </div>

                    <div className="tutor-content">
                      <h1
                        className="title fade-in"
                        style={{
                          color: whiteColor,
                          fontSize: isMobile ? "28px" : "36px",
                          margin: 4,
                        }}
                      >
                        {pageData.user.name}
                      </h1>

                      <h2
                        className="title fade-in delay-1"
                        style={{
                          color: whiteColor,
                          fontSize: isMobile ? "20px" : "24px",
                          fontWeight: 500,
                        }}
                      >
                        {pageData.profile_type}
                      </h2>

                      <h3
                        className="title fade-in delay-2"
                        style={{
                          color: whiteColor,
                          fontSize: isMobile ? "18px" : "20px",
                          fontWeight: 400,
                        }}
                      >
                        {pageData.qualification}
                      </h3>

                      <ul className="rbt-meta rbt-meta-white mt--5 fade-in delay-3">
                        <li>
                          <i className="feather-message-circle"></i>{" "}
                          {pageData.language_spoken}
                        </li>
                        <li>
                          <i className="feather-map-pin"></i> {pageData.state}
                        </li>
                        <li>
                          <i className="feather-users"></i>{" "}
                          {pageData.user?.gender || "-"}
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div
                    style={{
                      marginTop: 20,
                      display: "flex",
                      gap: 10,
                      flex: isMobile ? "1 1 100%" : "none",
                    }}
                  >
                    <button
                      onClick={handleClick}
                      style={{
                        flex: 1,
                        backgroundColor: "white",
                        borderRadius: 4,
                        padding: "10px 30px",
                        border: "1px solid #ccc",
                        cursor: "pointer",
                      }}
                    >
                      Book Now
                    </button>
                    <button
                      onClick={handleShare}
                      style={{
                        flex: 1,
                        backgroundColor: "white",
                        borderRadius: 4,
                        padding: "10px 30px",
                        border: "1px solid #ccc",
                        cursor: "pointer",
                      }}
                    >
                      Share Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
