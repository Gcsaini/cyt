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

  const handleShare = async (e) => {
    e.preventDefault();
    const shareText = `${pageData.user.name}, a ${pageData.profile_type} based in ${pageData.state}. Connect and book a session today!`;

    if (navigator.canShare && navigator.canShare({ files: [] })) {
      try {
        const response = await fetch(`${imagePath}/${pageData.user.profile}`);
        const blob = await response.blob();
        const file = new File([blob], "profile.jpg", { type: blob.type });

        await navigator.share({
          title: `${pageData.user.name} - ${pageData.profile_type}`,
          text: shareText,
          files: [file],
          url: profileUrl,
        });
      } catch (error) {
        console.log("Sharing failed", error);
        alert("Sharing failed. Try copying the link instead.");
      }
    } else {
      navigator.clipboard.writeText(`${shareText} ${profileUrl}`).then(() => {
        alert("Profile link copied to clipboard!");
      });
    }
  };

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={profileUrl} />
        <meta property="og:image" content={`${imagePath}/${pageData.user.profile}`} />
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
                {/* Background green with gradient overlay */}
                <div
                  className="tutor-bg-photo"
                  style={{
                    position: "relative",
                    borderRadius: 12,
                    overflow: "hidden",
                    background: "linear-gradient(135deg, #00b894, #55efc4)",
                    height: 350,
                  }}
                >
                  {/* Decorative blurred circles */}
                  <div
                    style={{
                      position: "absolute",
                      top: -40,
                      right: -40,
                      width: 100,
                      height: 100,
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: "50%",
                      filter: "blur(30px)",
                      zIndex: 0,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: -30,
                      left: -30,
                      width: 120,
                      height: 120,
                      background: "rgba(255,255,255,0.08)",
                      borderRadius: "50%",
                      filter: "blur(25px)",
                      zIndex: 0,
                    }}
                  />
                </div>

                <div
                  className="rbt-tutor-information"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: -70,
                    flexWrap: isMobile ? "wrap" : "nowrap",
                  }}
                >
                  <div
                    className="rbt-tutor-information-left"
                    style={{ textAlign: isMobile ? "center" : "left", flex: 1 }}
                  >
                    <div
                      className="thumbnail rbt-avatars size-lg"
                      style={{
                        display: "inline-block",
                        borderRadius: "50%",
                        overflow: "hidden",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                        marginBottom: 10,
                      }}
                    >
                      <ImageTag
                        alt={`${pageData.user.name} - ${pageData.qualification}`}
                        width="250"
                        height="250"
                        src={`${imagePath}/${pageData.user.profile}`}
                        style={{
                          borderRadius: "50%",
                          width: isMobile ? 120 : 150,
                          height: isMobile ? 120 : 150,
                        }}
                        loading="lazy"
                      />
                    </div>
                    <h1
                      style={{
                        color: whiteColor,
                        fontSize: isMobile ? 28 : 36,
                        margin: 4,
                        fontWeight: 700,
                        animation: "fadeInUp 0.5s ease",
                      }}
                    >
                      {pageData.user.name}
                    </h1>
                    <h2
                      style={{
                        color: whiteColor,
                        fontSize: isMobile ? 20 : 24,
                        margin: 4,
                        fontWeight: 500,
                        animation: "fadeInUp 0.7s ease",
                      }}
                    >
                      {pageData.profile_type}
                    </h2>
                    <h3
                      style={{
                        color: whiteColor,
                        fontSize: isMobile ? 16 : 18,
                        fontWeight: 400,
                        marginBottom: 10,
                        animation: "fadeInUp 0.9s ease",
                      }}
                    >
                      {pageData.qualification}
                    </h3>

                    {/* Badges */}
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        flexWrap: "wrap",
                        justifyContent: isMobile ? "center" : "flex-start",
                        marginTop: 10,
                      }}
                    >
                      <span style={{ background: "rgba(255,255,255,0.2)", padding: "4px 8px", borderRadius: 8, fontSize: 14 }}>
                        <i className="feather-message-circle"></i> {pageData.language_spoken}
                      </span>
                      <span style={{ background: "rgba(255,255,255,0.2)", padding: "4px 8px", borderRadius: 8, fontSize: 14 }}>
                        <i className="feather-map-pin"></i> {pageData.state}
                      </span>
                      <span style={{ background: "rgba(255,255,255,0.2)", padding: "4px 8px", borderRadius: 8, fontSize: 14 }}>
                        <i className="feather-users"></i> {pageData.user?.gender || "-"}
                      </span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div
                    style={{
                      display: "flex",
                      gap: 10,
                      flexDirection: "row",
                      flexWrap: "wrap",
                      marginTop: isMobile ? 20 : 0,
                    }}
                  >
                    <button
                      onClick={handleClick}
                      style={{
                        flex: 1,
                        backgroundColor: "white",
                        color: "#333",
                        borderRadius: 6,
                        padding: "12px 20px",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "0.3s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f0f0f0")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
                    >
                      Book Now
                    </button>
                    <button
                      onClick={handleShare}
                      style={{
                        flex: 1,
                        backgroundColor: "white",
                        color: "#333",
                        borderRadius: 6,
                        padding: "12px 20px",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "0.3s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f0f0f0")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
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
