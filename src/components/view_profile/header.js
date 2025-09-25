import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageTag from "../../utils/image-tag";
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

  const handleShare = async () => {
    const shareText = `${pageData.user.name}, a ${pageData.profile_type} based in ${pageData.state}. Connect and book a session today!\n\n${profileUrl}`;

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
      showCopyPrompt(shareText);
    }
  };

  const showCopyPrompt = (text) => {
    const copied = window.prompt("Copy and share this profile:", text);
    if (copied !== null) {
      navigator.clipboard.writeText(text).then(() => alert("Copied to clipboard!"));
    }
  };

  return (
    <>
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
      </Helmet>

      {/* Premium Dark Green Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #0f3d2f, #138556)",
          borderRadius: 20,
          margin: "20px auto",
          padding: isMobile ? "120px 20px 40px" : "140px 40px 50px",
          maxWidth: 1100,
          boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
          position: "relative",
          color: "#fff",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row-reverse",
            alignItems: isMobile ? "center" : "flex-start",
            gap: isMobile ? 20 : 60,
          }}
        >
          {/* Profile Picture */}
          <div
            style={{
              flexShrink: 0,
              boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
              borderRadius: 15,
              overflow: "hidden",
              marginTop: isMobile ? 20 : 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ImageTag
              alt={`${pageData.user.name} - ${pageData.qualification}`}
              src={`${imagePath}/${pageData.user.profile}`}
              style={{
                objectFit: "cover",
                borderRadius: 15,
                width: isMobile ? 180 : 280,
                height: isMobile ? 180 : 220,
              }}
            />
          </div>

          {/* Info */}
          <div
            style={{
              flex: 1,
              textAlign: isMobile ? "center" : "left",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1 style={{ color: "#fff", fontSize: isMobile ? 26 : 36, marginBottom: 5, fontWeight: 700 }}>
              {pageData.user.name}
            </h1>
            <h2 style={{ color: "#fff", fontSize: isMobile ? 18 : 24, fontWeight: 500, marginBottom: 5 }}>
              {pageData.profile_type}
            </h2>
            <h3 style={{ color: "#fff", fontSize: isMobile ? 14 : 18, fontWeight: 400, marginBottom: 10 }}>
              {pageData.qualification}
            </h3>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                gap: 15,
                justifyContent: isMobile ? "center" : "flex-start",
                fontSize: 14,
                marginBottom: 15,
              }}
            >
              <li style={{ display: "flex", alignItems: "center", gap: 5, color: "#fff" }}>
                <i className="feather-message-circle" style={{ color: "#fff" }}></i>
                <span>{pageData.language_spoken}</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: 5, color: "#fff" }}>
                <i className="feather-map-pin" style={{ color: "#fff" }}></i>
                <span>{pageData.state}</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: 5, color: "#fff" }}>
                <i className="feather-users" style={{ color: "#fff" }}></i>
                <span>{pageData.user?.gender || "-"}</span>
              </li>
            </ul>

            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 15, alignItems: isMobile ? "stretch" : "center" }}>
              <button
                onClick={handleClick}
                style={{
                  padding: "12px 25px",
                  borderRadius: 25,
                  background: "linear-gradient(90deg, #00c6ff, #0072ff)",
                  color: "#fff",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  transition: "0.3s transform",
                  minWidth: isMobile ? "100%" : 150,
                  textAlign: "center",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              >
                Book Now
              </button>

              <button
                onClick={handleShare}
                style={{
                  padding: "12px 25px",
                  borderRadius: 25,
                  background: "linear-gradient(90deg, #43e97b, #38f9d7)",
                  color: "#fff",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  transition: "0.3s transform",
                  minWidth: isMobile ? "100%" : 150,
                  textAlign: "center",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              >
                Share Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
