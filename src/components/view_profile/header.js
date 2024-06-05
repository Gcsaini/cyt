import ImageTag from "../../utils/image-tag";
import Avatar from "../../assets/img/avatar-027dc8.png";
import { whiteColor } from "../../utils/colors";
import BestSellerImg from "../../assets/img/card-icon-11b092.png";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function ProfileHeader() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <>
      <div className="rbt-page-banner-wrapper">
        <div className="rbt-banner-image"></div>
      </div>
      <div className="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom">
        <div className="container mt--60">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-dashboard-content-wrapper">
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
                          <i className="feather-book"></i>Counselling Psychologist
                        </li>
                        <li>
                          <i className="feather-users"></i>540+ Session Completed 
                        </li>
                      </ul>
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
            <div className="col-lg-12 mt--30">
              <div className="profile-content rbt-shadow-box">
                <h4 className="rbt-title-style-3">About Me</h4>
                <div className="row g-5">
                  <div className="col-lg-8">
                    <p className="mt--10 mb--20">
                    Hello, I'm a Counseling Psychologist committed to supporting your mental health and overall well-being. My approach to counseling is grounded in cognitive restructuring, a powerful technique that helps you identify and challenge negative thought patterns. 
                    <b/>  <b/> By doing so, we can work together to replace these thoughts with healthier, more adaptive ways of thinking, leading to improved emotional and mental health.

In addition to cognitive restructuring, I embrace a holistic wellness approach. <b/> <b/> I believe that true wellness involves balancing all aspects of your life, and I strive to integrate strategies that promote overall well-being. Whether it’s through mindfulness practices, stress management techniques, or lifestyle adjustments, I aim to provide comprehensive support tailored to your unique needs.

                    </p>

                    <ul className="rbt-information-list mt--15">
                      <li>
                        <a href="/profile/1#">
                          <i className="feather-phone"></i>+918077757951
                        </a>
                      </li>
                      <li>
                        <a href="mailto:hello@example.com">
                          <i className="feather-mail"></i>deepak@chooseyourtherapist.in
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-2 offset-lg-2">
                    <div className="feature-sin best-seller-badge text-end h-100">
                      <span className="rbt-badge-2 w-100 text-center badge-full-height">
                        <span className="image">
                          <ImageTag
                            alt="Best Seller Icon"
                            width="50"
                            height="50"
                            src={BestSellerImg}
                          />
                        </span>
                        Approved
                      </span>
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
