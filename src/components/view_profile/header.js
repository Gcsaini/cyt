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
  const title = `${pageData.user.name} - ${pageData.qualification} | Choose Your Therapist`;
  const description = `View ${pageData.user.name}, a qualified ${pageData.profile_type} based in ${pageData.state}. Languages: ${pageData.language_spoken}. Book a session today.`;

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

  const handleShare = (e) => {
    e.preventDefault();
    if (navigator.share) {
      navigator
        .share({
          title: pageData.user.name,
          text: "Check out this therapist profile",
          url: profileUrl,
        })
        .catch((err) => console.log("Sharing failed", err));
    } else {
      navigator.clipboard.writeText(profileUrl).then(() => {
        alert("Profile link copied to clipboard!");
      });
    }
  };

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

  return (
    <>
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
            description: `${pageData.user.name} is a ${pageData.profile_type} based in ${pageData.state}.`,
            address: { "@type": "PostalAddress", addressRegion: pageData.state },
          })}
        </script>
      </Helmet>

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
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    justifyContent: "space-between",
                    alignItems: isMobile ? "center" : "flex-start",
                  }}
                >
                  <div
                    className="rbt-tutor-information-left"
                    style={{ textAlign: isMobile ? "center" : "left" }}
                  >
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
                      <h1 className="title" style={{ color: whiteColor, fontSize: isMobile ? "28px" : "32px", margin: 4 }}>
                        {pageData.user.name}
                      </h1>
                      <h2 className="title" style={{ color: whiteColor, fontSize: isMobile ? "20px" : "24px", fontWeight: 500 }}>
                        {pageData.qualification}
                      </h2>
                      <ul className="rbt-meta rbt-meta-white mt--5">
                        <li><i className="feather-user"></i> {pageData.profile_type}</li>
                        <li><i className="feather-message-circle"></i> {pageData.language_spoken}</li>
                        <li><i className="feather-map-pin"></i> {pageData.state}</li>
                      </ul>
                    </div>
                  </div>

                  <div style={{ marginTop: isMobile ? 20 : 0 }}>
                    <div style={{ display: "flex", gap: "10px", flexDirection: isMobile ? "column" : "row" }}>
                      <button onClick={handleClick} style={{ flex: 1, backgroundColor: "white", borderRadius: 4, padding: "10px 30px", border: "1px solid #ccc", cursor: "pointer" }}>
                        Book Now
                      </button>
                      <button onClick={handleShare} style={{ flex: 1, backgroundColor: "white", borderRadius: 4, padding: "10px 30px", border: "1px solid #ccc", cursor: "pointer" }}>
                        Share Now
                      </button>
                    </div>
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
