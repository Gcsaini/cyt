import TextImg from "../../assets/img/Choose.png";
import ImageTag from "../../utils/image-tag";
export default function CallToAction() {
  return (
    <div
      className="rbt-callto-action-area"
      style={{
        paddingBottom: 60,
        paddingTop: 60,
        paddingLeft: 15,
        paddingRight: 15,
        background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 80%, rgba(34, 135, 86, 0.04) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0, 127, 153, 0.04) 0%, transparent 50%)',
        pointerEvents: 'none'
      }}></div>

      <div className="rbt-callto-action rbt-cta-default style-2" style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%)',
        backdropFilter: 'blur(20px)',
        borderRadius: '24px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08), 0 8px 16px rgba(0, 0, 0, 0.04)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative background elements */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '150px',
          height: '150px',
          background: 'linear-gradient(135deg, rgba(34, 135, 86, 0.1) 0%, rgba(0, 127, 153, 0.1) 100%)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          left: '-30px',
          width: '100px',
          height: '100px',
          background: 'linear-gradient(135deg, rgba(0, 127, 153, 0.08) 0%, rgba(34, 135, 86, 0.08) 100%)',
          borderRadius: '50%',
          filter: 'blur(30px)'
        }}></div>

        <div className="container content-wrapper overflow-hidden" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row gy-5 align-items-center">
            <div className="col-lg-8">
              <div className="inner">
                <div className="content text-left">
                  <h3
                    className="title sal-animate"
                    data-sal="slide-up"
                    data-sal-duration="400"
                    data-sal-delay="200"
                    style={{
                      fontSize: '2.2rem',
                      fontWeight: '800',
                      color: '#1e293b',
                      marginBottom: '16px',
                      lineHeight: 1.3,
                      letterSpacing: '-0.02em'
                    }}
                  >
                    Contact us today to learn more and express your interest!
                  </h3>
                  <h6 className="subtitle sal-animate" style={{
                    fontSize: '1.1rem',
                    color: '#64748b',
                    fontWeight: '500',
                    marginBottom: '0',
                    lineHeight: 1.5
                  }}>
                    The best choice to serve with{" "}
                    <span style={{
                      background: 'linear-gradient(135deg, #228756 0%, #007f99 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontWeight: '700'
                    }}>
                      #ChooseYourTherapist
                    </span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="call-to-btn text-start text-lg-end position-relative sal-animate">
                <div className="slider-btn">
                  <a
                    className="rbt-btn btn-gradient hover-icon-reverse"
                    href="/contact-us"
                    style={{
                      background: 'linear-gradient(135deg, #228756 0%, #1a6b45 100%)',
                      color: '#fff',
                      padding: '16px 32px',
                      borderRadius: '50px',
                      textDecoration: 'none',
                      fontSize: '16px',
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
                      e.target.style.transform = 'translateY(-3px) scale(1.05)';
                      e.target.style.boxShadow = '0 8px 25px rgba(34, 135, 86, 0.4)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background = 'linear-gradient(135deg, #228756 0%, #1a6b45 100%)';
                      e.target.style.transform = 'translateY(0) scale(1)';
                      e.target.style.boxShadow = '0 4px 15px rgba(34, 135, 86, 0.3)';
                    }}
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Get Started</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="shape-text-image" style={{
                  opacity: 0.8,
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))'
                }}>
                  <ImageTag
                    alt="Education"
                    height={"397"}
                    width={"397"}
                    className="rbt-rotatation-round"
                    src={TextImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
