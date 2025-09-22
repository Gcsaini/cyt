import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageTag from "../../utils/image-tag";
import { whiteColor } from "../../utils/colors";
import { getDecodedToken } from "../../utils/jwt";
import { imagePath } from "../../utils/url";
import { motion } from "framer-motion";

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

    if (navigator.share && /Mobi|Android/i.test(navigator.userAgent)) {
      try {
        await navigator.share({
          title: title,
          text: shareText,
          url: shareUrl,
        });
      } catch (error) {
        console.log("Sharing failed", error);
        alert("Sharing failed. You can copy the link manually.");
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
        alert("Profile link copied to clipboard!");
      } catch (error) {
        console.log("Clipboard copy failed", error);
        alert("Unable to copy link. Please copy manually: " + shareUrl);
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
                    flexWrap: isMobile ? "wrap" : "nowrap",
                  }}
                >
                  {/* Profile Picture & Info */}
                  <div className="rbt-tutor-information-left" style={{ textAlign: isMobile ? "center" : "left" }}>
                    <div
                      className="thumbnail rbt-avatars size-lg"
                      style={{
                        width: isMobile ? 140 : 180,
                        height: isMobile ? 140 : 180,
                        borderRadius: "50%",
                        overflow: "hidden",
                        marginBottom: 10,
                        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                      }}
                    >
                      <ImageTag
                        alt={`${pageData.user.name} - ${pageData.qualification}`}
                        width={isMobile ? 140 : 180}
                        height={isMobile ? 140 : 180}
                        src={`${imagePath}/${pageData.user.profile}`}
                        style={{ borderRadius: "50%", width: "100%", height: "100%", objectFit: "cover" }}
                        loading="lazy"
                      />
                    </div>

                    <div className="tutor-content">
                      <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ color: whiteColor, fontSize: isMobile ? 30 : 36, margin: 4 }}
                      >
                        {pageData.user.name}
                      </motion.h1>

                      <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ color: whiteColor, fontSize: isMobile ? 20 : 24, fontWeight: 500 }}
                      >
                        {pageData.profile_type}
                      </motion.h2>

                      <motion.h3
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        style={{ color: whiteColor, fontSize: isMobile ? 18 : 20, fontWeight: 400 }}
                      >
                        {pageData.qualification}
                      </motion.h3>

                      <ul className="rbt-meta rbt-meta-white mt--5" style={{ display: "flex", gap: 10, flexWrap: "wrap", padding: 0, listStyle: "none" }}>
                        <li><i className="feather-message-circle"></i> {pageData.language_spoken}</li>
                        <li><i className="feather-map-pin"></i> {pageData.state}</li>
                        <li><i className="feather-users"></i> {pageData.user?.gender || "-"}</li>
                      </ul>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div style={{ marginTop: isMobile ? 20 : 0, display: "flex", gap: 10, flex: isMobile ? "1 1 100%" : "none" }}>
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
