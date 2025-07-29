import logo1 from "../assets/img/logo.png";
import ImageTag from "../utils/image-tag";
export default function Footer() {
  return (
    <div>
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <footer className="rbt-footer footer-style-1">
        <div className="footer-top">
          <div className="container">
            <div className="row row--15 mt_dec--30">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30">
                <div className="footer-widget">
                  <div className="logo">
                    <a href="index.html">
                      <ImageTag
                        alt="Edu-cause"
                        height={"50"}
                        width={"152"}
                        src={logo1}
                      />
                    </a>
                  </div>
                  <p className="description mt--20">
                    Your well-being is our priority. Discover your best self
                    with us.
                  </p>
                  <div className="contact-btn mt--30">
                    <a
                      className="rbt-btn hover-icon-reverse btn-border-gradient radius-round"
                      href="index.html#"
                    >
                      <div className="icon-reverse-wrapper">
                        <span className="btn-text">Contact With Us</span>
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
              <div className="offset-lg-1 col-lg-2 col-md-6 col-sm-6 col-12 mt--30">
                <div className="footer-widget">
                  <h5 className="ft-title">For Client</h5>
                  <ul className="ft-link">
                    <li>
                      <a href="12-marketplace">Dashboard</a>
                    </li>
                    <li>
                      <a href="04-kindergarten">Login</a>
                    </li>
                    <li>
                      <a href="13-university-classic">Register</a>
                    </li>
                    <li>
                      <a href="/terms-conditions">Services Terms</a>
                    </li>
                    <li>
                      <a href="pages/faqs">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-12 mt--30">
                <div className="footer-widget">
                  <h5 className="ft-title">For Therapist</h5>
                  <ul className="ft-link">
                    <li>
                      <a href="become-a-teacher">Join Platform</a>
                    </li>
                    <li>
                      <a href="blog-list">Dashboard</a>
                    </li>
                    <li>
                      <a href="elements/team">Login</a>
                    </li>
                    <li>
                      <a href="pages/event-list">Register</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--30">
                <div className="footer-widget">
                  <h5 className="ft-title">Get Contact</h5>
                  <ul className="ft-link">
                    <li>
                      <span>Phone: </span>
                      <a href="index.html#">+91 80777 57951</a>
                    </li>
                    <li>
                      <span>E-mail: </span>
                      <a href="info@chooseyourtherapist.in">
                        info@chooseyourtherapist.in
                      </a>
                    </li>
                    <li>
                      <span>Reg. Add. </span>
                      Laksar, Haridwar, Uttarakhand, India
                    </li>
                    
                  </ul>
                  <ul className="social-icon social-default icon-naked justify-content-start mt--20">
                    <li>
                      <a href="https://www.facebook.com/cyt8113">
                        <i className="feather-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://x.com/ChooseTherapist">
                        <i className="feather-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/chooseyourtherapist/">
                        <i className="feather-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/69243224">
                        <i className="feather-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <div className="copyright-area copyright-style-1 ptb--20">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
              <p className="rbt-link-hover text-center text-lg-start">
                © 2024{" "}
                <a href="https://chooseyourtherapist.in">
                  Choose Your Therapist LLP.
                </a>
                All Rights Reserved
              </p>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
              <ul className="copyright-link rbt-link-hover justify-content-center justify-content-lg-end mt_sm--10 mt_md--10">
                <li>
                  <a href="/terms-conditions">Terms of Service</a>
                </li>
                <li>
                  <a href="/cancellation-policy">Cancellation Policy</a>
                </li>
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="rbt-progress-parent">
        <svg
          className="rbt-back-circle svg-inner"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
        </svg>
      </div>
    </div>
  );
}
