import ImageTag from "../../utils/image-tag";
import TeamImg from "../../assets/img/neha.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import cardIcon from "../../assets/img/card-icon-14dbf.png";
import cardIcon2 from "../../assets/img/card-icon-2bee4.png";
export default function Collaborator() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <div className="rbt-author-area bg-gradient-8 rbt-section-gap">
      <div className="container">
        <div className="row mb--60">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h2 className="title">Our Collaborator</h2>
            </div>
          </div>
        </div>
        <div className="rbt-instructor">
          <div className="single-course-author">
            <div className="media row align-items-center g-5">
              <div className="col-lg-3 col-xl-3 offset-xl-2">
                <div className="thumbnail">
                  <a
                    href=""
                    style={{
                      display: isMobile ? "flex" : "",
                      justifyContent: isMobile ? "center" : "normal",
                    }}
                  >
                    <ImageTag
                      alt="Author Images"
                      style={{
                        width: isMobile ? "90%" : "100%",
                        height: isMobile ? 350 : "auto",
                      }}
                      src={TeamImg}
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="media-body ml--15">
                  <div className="author-info text-left">
                    <h2 className="title color-white mb--0">Ms. Neha Sharma</h2>
                    <span className="b3 color-white">Office Space Collaborator, Noida</span>
                  </div>
                  <div className="content mt--20">
                    <p className="description color-white">
                      You can run Histudy easily. Any School, University,
                      College can be use this histudy education template for
                      their educational purpose. A university can be success
                      you.
                    </p>
                    <ul className="social-icon color-white social-default transparent-with-border justify-content-start mt--15">
                      <li>
                        <a href="https://www.facebook.com/">
                          <i className="feather-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com">
                          <i className="feather-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/">
                          <i className="feather-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkdin.com/">
                          <i className="feather-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                    <ul
                      className="course-feature-list"
                      style={{ marginTop: 10 }}
                    >
                      <li>
                        <div className="icon">
                          <ImageTag
                            alt="Icon Image"
                            width="40"
                            height="40"
                            src={cardIcon}
                          />
                        </div>
                        <div className="feature-content">
                          <h4 className="featute-title">
                            300K+ <span>Got Hired</span>
                          </h4>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <ImageTag
                            alt="Icon Image"
                            width="40"
                            height="40"
                            src={cardIcon2}
                          />
                        </div>
                        <div className="feature-content">
                          <h4 className="featute-title">
                            10K+ <span>Enrolled</span>
                          </h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
