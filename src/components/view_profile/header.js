import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageTag from "../../utils/image-tag";
import { whiteColor } from "../../utils/colors";
import { getDecodedToken } from "../../utils/jwt";
import {
  imagePath,
  InsertFavriouteTherapistUrl,
  RemoveFavriouteTherapistUrl,
} from "../../utils/url";
import { postData } from "../../utils/actions";

export default function ProfileHeader({ pageData, favrioutes }) {
  const navigate = useNavigate();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [bookmark, setBookmark] = React.useState(false);
  const [showBookmark, setShowBookmark] = React.useState(false);

  const profileUrl = `${window.location.origin}/view-profile/${pageData._id}`;
  const title = `${pageData.user.name} - ${pageData.profile_type}`;
  const description = `${pageData.user.name} is a ${pageData.qualification} & ${pageData.profile_type} based in ${pageData.state}. Gender: ${pageData.user?.gender || "-"}.`;

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

  const handleClick = () => navigate(`/therapist-checkout/${pageData._id}`);

  const addFavrioute = async (id) => {
    try {
      const response = await postData(InsertFavriouteTherapistUrl, { therapistId: id });
      return !!response.status;
    } catch (error) {
      return false;
    }
  };

  const removeFavrioute = async (id) => {
    try {
      const response = await postData(RemoveFavriouteTherapistUrl, { therapistId: id });
      return !!response.status;
    } catch (error) {
      return false;
    }
  };

  const handleBookmark = async (id, value) => {
    setBookmark((prev) => !prev);
    const isSuccess = value ? await removeFavrioute(id) : await addFavrioute(id);
    if (!isSuccess) setBookmark(false);
  };

  // --- UPDATED SHARE FUNCTION ---
  const handleShare = async () => {
    const shareText = `${pageData.user.name}, a ${pageData.profile_type} based in ${pageData.state}. Connect and book a session today!\n\n${profileUrl}`;

    // Web Share API for mobile
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${pageData.user.name} - ${pageData.profile_type}`,
          text: shareText,
          url: profileUrl,
        });
      } catch (error) {
        console.log("Sharing failed", error);
        alert("Sharing failed. You can copy the link manually below.");
        showCopyPrompt(shareText);
      }
    } else {
      // Fallback for desktop
      showCopyPrompt(shareText);
    }
  };

  // Show a prompt with share text for all users
  const showCopyPrompt = (text) => {
    const copied = window.prompt("Copy and share this profile:", text);
    if (copied !== null) {
      navigator.clipboard.writeText(text).then(() => alert("Copied to clipboard!"));
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
        <meta property="og:image" content={`${imagePath}/${pageData.user.profile}`} />
        <meta property="og:type" content="profile" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${imagePath}/${pageData.user.profile}`} />
        <link rel="canonical" href={profileUrl} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: pageData.user.name,
            image: `${imagePath}/${pageData.user.profile}`,
            gender: pageData.user?.gender || "Not specified",
            jobTitle: pageData.qualification,
            description: description,
            address: { "@type": "PostalAddress", addressRegion: pageData.state },
          })}
        </script>
      </Helmet>

      {/* Page Content */}
      <div className="rbt-page-banner-wrapper">
        <div className="rbt-banner-image"></div>
      </div>
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
                  <div className="rbt-tutor-information-left" style={{ textAlign: isMobile ? "center" : "left" }}>
                    <div className="thumbnail rbt-avatars size-lg">
                      <ImageTag
                        alt={`${pageData.user.name} - ${pageData.qualification}`}
                        width="250"
                        height="250"
                        src={`${imagePath}/${pageData.user.profile}`}
                        style={{ borderRadius: 10, padding: 0, width: 140, height: 130 }}
                        loading="lazy"
                      />
                    </div>
                    <div className="tutor-content">
                      <h1 className="title" style={{ color: whiteColor, fontSize: isMobile ? "30px" : "36px", margin: 4 }}>
                        {pageData.user.name}
                      </h1>
                      <h2 className="title" style={{ color: whiteColor, fontSize: isMobile ? "20px" : "24px", fontWeight: 500 }}>
                        {pageData.profile_type}
                      </h2>
                      <h3 className="title" style={{ color: whiteColor, fontSize: isMobile ? "18px" : "20px", fontWeight: 400 }}>
                        {pageData.qualification}
                      </h3>
                      <ul className="rbt-meta rbt-meta-white mt--5">
                        <li><i className="feather-message-circle"></i> {pageData.language_spoken}</li>
                        <li><i className="feather-map-pin"></i> {pageData.state}</li>
                        <li><i className="feather-users"></i> {pageData.user?.gender || "-"}</li>
                      </ul>
                    </div>
                  </div>

                  {/* Buttons side by side even on mobile */}
                  <div style={{ marginTop: 20, display: "flex", gap: 10, flex: isMobile ? "1 1 100%" : "none" }}>
                    <button
                      onClick={handleClick}
                      style={{ flex: 1, backgroundColor: "white", borderRadius: 4, padding: "10px 30px", border: "1px solid #ccc", cursor: "pointer" }}
                    >
                      Book Now
                    </button>
                    <button
                      onClick={handleShare}
                      style={{ flex: 1, backgroundColor: "white", borderRadius: 4, padding: "10px 30px", border: "1px solid #ccc", cursor: "pointer" }}
                    >
                      Share Profile
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
