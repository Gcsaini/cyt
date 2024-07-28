import ImageTag from "../../utils/image-tag";
import Avatar from "../../assets/img/avatar-027dc8.png";
import { whiteColor } from "../../utils/colors";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function ProfileHeader(props) {
  const { pageData } = props;
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
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
                        src={pageData.profile}
                      />
                    </div>
                    <div className="tutor-content">
                      <div>
                        <h5 className="title">
                          {pageData.name}{" "}
                          {/* <span style={{ fontSize: 14 }}>
                            ({pageData.profile_code})
                          </span> */}
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
                      <i className="feather-users"></i> {pageData.city}
                    </li>
                    <ul className="social-icon social-default justify-content-start">
                      <li>
                        <a>
                          <i className="feather-bookmark"></i>
                        </a>
                      </li>
                      <li>
                        <a>
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
