import ImageTag from "../utils/image-tag";
import MyNavbar from "../components/navbar";
import NewsLetter from "../components/home/newsletter";
import Footer from "../components/footer";
import ClientImg from "../assets/img/client-01a92c.png";
export default function TherapistRegistration() {
  return (
    <>
      <MyNavbar />
      <div className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1 mt--60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <h2 className="title">Become A Therapist</h2>
                <ul className="page-list">
                  <li className="rbt-breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <div className="icon-right">
                      <i className="feather-chevron-right"></i>
                    </div>
                  </li>
                  <li className="rbt-breadcrumb-item active">
                    Become a Teacher
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rbt-banner-area rbt-banner-3 header-transperent-spacer">
        <div className="wrapper">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-7 order-2 order-lg-1">
                <div className="banner-content">
                  <div className="inner">
                    <div className="section-title text-start">
                      <span className="subtitle bg-pink-opacity">
                        THE BEST THEME FOR
                      </span>
                    </div>
                    <h1 className="title">
                      Online Learning <br />
                      Managemnt System
                    </h1>
                    <p className="description">
                      We are experienced in educationl platform and skilled
                      strategies for the success of our online learning.
                    </p>
                    <div className="rating mb--20">
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a className="px-1" href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a className="px-1" href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                    </div>
                    <div className="rbt-like-total">
                      <div className="profile-share">
                        <a
                          href="#"
                          className="avatar"
                          data-tooltip="Rafi Dev"
                          tabindex="0"
                        >
                          <ImageTag
                            alt="education"
                            width="55"
                            height="55"
                            src={ClientImg}
                          />
                        </a>
                        <a
                          href="#"
                          className="avatar"
                          data-tooltip="Mark"
                          tabindex="0"
                        >
                          <ImageTag
                            alt="education"
                            width="55"
                            height="55"
                            src={ClientImg}
                          />
                        </a>
                        <a
                          href="#"
                          className="avatar"
                          data-tooltip="Jordan"
                          tabindex="0"
                        >
                          <ImageTag
                            alt="education"
                            width="55"
                            height="55"
                            src={ClientImg}
                          />
                        </a>
                        <div className="more-author-text">
                          <h5 className="total-join-students">
                            Join Over 3000+ Students
                          </h5>
                          <p className="subtitle">
                            Have a new ideas every week.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 order-1 order-lg-2">
                <div className="rbt-contact-form contact-form-style-1">
                  <h3 className="title">Join Us</h3>
                  <form id="contact-form">
                    <div className="form-group" style={{ marginBottom: 15 }}>
                      <select
                        style={{
                          padding: 0,
                          border: 0,
                          borderBottom: "2px solid #e6e3f1",
                          borderRadius: 0,
                        }}
                      >
                        <option>Select profile type</option>
                        <option>Counselling Psychologist</option>
                        <option>Clinical Psychologist</option>
                        <option>Psychiatrist</option>
                        <option>Special educator</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input
                        name="con_name"
                        type="text"
                        placeholder="Full Name"
                      />
                      <span className="focus-border"></span>
                    </div>
                    <div className="form-group">
                      <input
                        name="con_email"
                        placeholder="Email"
                        type="email"
                      />
                      <span className="focus-border"></span>
                    </div>
                    <div className="form-group">
                      <input name="phone" placeholder="Phone" type="text" />
                      <span className="focus-border"></span>
                    </div>
                    <div className="form-group">
                      <input
                        class="resume-upload"
                        type="file"
                        accept=".pdf"
                        placeholder="Upload resume"
                        style={{ padding: "11px 0 0px" }}
                      />
                      <span className="focus-border"></span>
                    </div>
                    <div className="form-submit-group">
                      <button
                        type="submit"
                        className="rbt-btn btn-md btn-gradient hover-icon-reverse radius-round w-100"
                      >
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">Submit</span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right"></i>
                          </span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right"></i>
                          </span>
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />

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
      <Footer />
    </>
  );
}
