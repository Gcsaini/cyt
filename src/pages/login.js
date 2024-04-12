import React from "react";
import Footer from "../components/footer";
import NewsLetter from "../components/home/newsletter";
import MyNavbar from "../components/navbar";
export default function Login() {
  return (
    <div>
      <MyNavbar />
      <div className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <h2 className="title">Login &amp; Register</h2>
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
                    Login &amp; Register
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rbt-elements-area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row gy-5 row--30">
            <div className="col-lg-6">
              <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                <h3 className="title">Login</h3>
                <form className="max-width-auto">
                  <div className="form-group">
                    <input
                      name="email"
                      type="text"
                      placeholder="Username or email *"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <input
                      name="con_email"
                      type="password"
                      placeholder="Password *"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="row mb--30">
                    <div className="col-lg-6">
                      <div className="rbt-checkbox">
                        <input
                          type="checkbox"
                          id="rememberme"
                          name="rememberme"
                        />
                        <label for="rememberme">Remember me</label>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="rbt-lost-password text-end">
                        <a className="rbt-btn-link" href="login#">
                          Lost your password?
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="form-submit-group">
                    <button
                      type="submit"
                      className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Log In</span>
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
            <div className="col-lg-6">
              <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                <h3 className="title">Register</h3>
                <form className="max-width-auto">
                  <div className="form-group">
                    <input
                      name="register-email"
                      type="email"
                      placeholder="Email address *"
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <input
                      name="register_user"
                      type="text"
                      placeholder="Username *"
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <input
                      name="register_password"
                      type="password"
                      placeholder="Password *"
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <input
                      name="register_conpassword"
                      type="password"
                      placeholder="Confirm Password *"
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-submit-group">
                    <button
                      type="submit"
                      className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Register</span>
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
    </div>
  );
}
