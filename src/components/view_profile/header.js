import ImageTag from "../../utils/image-tag";
import Avatar from "../../assets/img/avatar-027dc8.png";
import { whiteColor } from "../../utils/colors";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function ProfileHeader() {
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
                        src={Avatar}
                      />
                    </div>
                    <div className="tutor-content">
                      <div>
                        <h5 className="title">Deepak Kumar</h5>
                        <div className="rbt-review">
                          <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <span className="rating-count"> (15 Reviews)</span>
                        </div>
                        <ul className="rbt-meta rbt-meta-white mt--5">
                          <li>
                            <i className="feather-book"></i>Counselling
                            Psychologist
                          </li>
                          <li>
                            <i className="feather-users"></i>540+ Session
                            Completed
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
                      <i className="feather-book"></i> 50%
                    </li>
                    <li style={{ color: whiteColor }}>
                      <i className="feather-users"></i> 30+ Feedback
                    </li>
                    <ul className="social-icon social-default justify-content-start">
                      <li>
                        <a href="https://www.facebook.com">
                          <i className="feather-phone"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com">
                          <i className="feather-mail"></i>
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
