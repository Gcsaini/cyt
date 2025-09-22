<div
  className="rbt-tutor-information"
  style={{
    display: "flex",
    flexDirection: isMobile ? "column" : "row", // stack on mobile
    justifyContent: "space-between",
    alignItems: isMobile ? "center" : "flex-start",
  }}
>
  <div className="rbt-tutor-information-left" style={{ textAlign: isMobile ? "center" : "left" }}>
    <div className="thumbnail rbt-avatars size-lg">
      <ImageTag
        alt={`${pageData.user.name} - ${pageData.qualification}`}
        width="250"
        height="250"
        src={`${imagePath}/${pageData.user.profile}`}
        style={{
          borderRadius: 10,
          padding: 0,
          width: isMobile ? 140 : 140,
          height: isMobile ? 130 : 130,
        }}
        loading="lazy"
      />
    </div>
    <div className="tutor-content">
      <h1
        className="title"
        style={{ color: whiteColor, fontSize: isMobile ? "28px" : "32px", margin: 4 }}
      >
        {pageData.user.name}
      </h1>
      <h2
        className="title"
        style={{ color: whiteColor, fontSize: isMobile ? "20px" : "24px", fontWeight: 500, wordBreak: "break-word" }}
      >
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
