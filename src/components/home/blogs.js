import BlogCardImg from "../../assets/img/blog1.png";
import BlogCardImg2 from "../../assets/img/blog2.png";
import BlogCardImg3 from "../../assets/img/blog3.png";
import BlogCardImg4 from "../../assets/img/blog5.png";
import ImageTag from "../../utils/image-tag";
export default function Blogs() {
  return (
    <div className="rbt-rbt-blog-area rbt-section-gap" style={{
      background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 25% 25%, rgba(34, 135, 86, 0.03) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(0, 127, 153, 0.03) 0%, transparent 50%)',
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row g-5 align-items-center" style={{ marginBottom: '30px' }}>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="section-title">
              <span className="subtitle" style={{
                background: 'linear-gradient(135deg, rgba(34, 135, 86, 0.1) 0%, rgba(0, 127, 153, 0.1) 100%)',
                color: '#228756',
                padding: '8px 16px',
                borderRadius: '50px',
                fontSize: '14px',
                fontWeight: '600',
                display: 'inline-block',
                marginBottom: '16px',
                border: '1px solid rgba(34, 135, 86, 0.2)'
              }}>
                Blog Post
              </span>
              <h2 className="title" style={{
                fontSize: '2.8rem',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #228756 0%, #007f99 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0',
                lineHeight: 1.2,
                letterSpacing: '-0.02em'
              }}>
                Mental Health Chronicles
              </h2>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="read-more-btn text-start text-md-end">
              <a
                className="rbt-btn btn-gradient hover-icon-reverse"
                href="404-3"
                style={{
                  background: 'linear-gradient(135deg, #228756 0%, #1a6b45 100%)',
                  color: '#fff',
                  padding: '14px 28px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: '600',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 4px 15px rgba(34, 135, 86, 0.3)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #1a6b45 0%, #228756 100%)';
                  e.target.style.transform = 'translateY(-3px) scale(1.02)';
                  e.target.style.boxShadow = '0 8px 25px rgba(34, 135, 86, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #228756 0%, #1a6b45 100%)';
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 4px 15px rgba(34, 135, 86, 0.3)';
                }}
              >
                <div className="icon-reverse-wrapper">
                  <span className="btn-text">See All Articles</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="rbt-card variation-02 height-330 rbt-hover">
              <div className="rbt-card-img">
                <a href="blog-details/%5bblogId%5d">
                  <ImageTag
                    alt="Card"
                    height={"300"}
                    width={"580"}
                    src={BlogCardImg}
                  />
                </a>
              </div>
              <div className="rbt-card-body">
                <h3 className="rbt-card-title">
                  <a href="blog-details/%5bblogId%5d">
                    The Art of Setting Boundaries without Feeling Guilty
                  </a>
                </h3>
                <p className="rbt-card-text">
                  Have you ever found yourself saying “yes” when deep down you wanted to scream “no”? 
                </p>
                <div className="rbt-card-bottom">
                  <a
                    className="transparent-button"
                    href="blog-details/%5bblogId%5d"
                  >
                    Learn More
                    <i>
                      <svg
                        width="17"
                        height="12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g stroke="#27374D" fill="none" fillRule="evenodd">
                          <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                          <path
                            strokeLinecap="square"
                            d="M.663 5.572h14.594"
                          ></path>
                        </g>
                      </svg>
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="rbt-card card-list variation-02 rbt-hover">
              <div className="rbt-card-img">
                <a href="blog-details/%5bblogId%5d-2">
                  <ImageTag
                    alt="Card"
                    height={"300"}
                    width={"580"}
                    src={BlogCardImg2}
                  />
                </a>
              </div>
              <div className="rbt-card-body">
                <h5 className="rbt-card-title">
                  <a href="blog-details/%5bblogId%5d-2">
                   Is Your Relationship Missing the Intimacy?
                  </a>
                </h5>
                <div className="rbt-card-bottom">
                  <a
                    className="transparent-button"
                    href="blog-details/%5bblogId%5d-2"
                  >
                    Read Article
                    <i>
                      <svg
                        width="17"
                        height="12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g stroke="#27374D" fill="none" fillRule="evenodd">
                          <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                          <path
                            strokeLinecap="square"
                            d="M.663 5.572h14.594"
                          ></path>
                        </g>
                      </svg>
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div className="rbt-card card-list variation-02 rbt-hover mt--30">
              <div className="rbt-card-img">
                <a href="blog-details/%5bblogId%5d-3">
                  <ImageTag
                    alt="Card"
                    height={"300"}
                    width={"580"}
                    src={BlogCardImg3}
                  />
                </a>
              </div>
              <div className="rbt-card-body">
                <h5 className="rbt-card-title">
                  <a href="blog-details/%5bblogId%5d-3">
                   How to Help a Friend during a Panic Attack ?
                  </a>
                </h5>
                <div className="rbt-card-bottom">
                  <a
                    className="transparent-button"
                    href="blog-details/%5bblogId%5d-3"
                  >
                    Read Article
                    <i>
                      <svg
                        width="17"
                        height="12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g stroke="#27374D" fill="none" fillRule="evenodd">
                          <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                          <path
                            strokeLinecap="square"
                            d="M.663 5.572h14.594"
                          ></path>
                        </g>
                      </svg>
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div className="rbt-card card-list variation-02 rbt-hover mt--30">
              <div className="rbt-card-img">
                <a href="blog-details/%5bblogId%5d-4">
                  <ImageTag
                    alt="Card"
                    height={"300"}
                    width={"580"}
                    src={BlogCardImg4}
                  />
                </a>
              </div>
              <div className="rbt-card-body">
                <h5 className="rbt-card-title">
                  <a href="blog-details/%5bblogId%5d-4">
                    Effective Communication Strategies for Couples
                  </a>
                </h5>
                <div className="rbt-card-bottom">
                  <a
                    className="transparent-button"
                    href="blog-details/%5bblogId%5d-4"
                  >
                    Read Article
                    <i>
                      <svg
                        width="17"
                        height="12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g stroke="#27374D" fill="none" fillRule="evenodd">
                          <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                          <path
                            strokeLinecap="square"
                            d="M.663 5.572h14.594"
                          ></path>
                        </g>
                      </svg>
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
