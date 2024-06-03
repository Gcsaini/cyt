import MyNavbar from "../components/navbar";
import Footer from "../components/footer";
import Newsletter from "../components/home/newsletter";
import Faqs from "../components/home/faqs";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function FaqPage() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const navigate = useNavigate();
  return (
    <div id="__next">
      <MyNavbar />
      <div
        className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1"
        style={{ marginTop: isMobile || isTablet ? 70 : 50 }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <h2 className="title">FAQ</h2>
                <ul className="page-list">
                  <li className="rbt-breadcrumb-item">
                    <a
                      href={"#"}
                      onClick={() => navigate("/")}
                      style={{ cursor: "pointer" }}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <div className="icon-right">
                      <i className="feather-chevron-right"></i>
                    </div>
                  </li>
                  <li className="rbt-breadcrumb-item active">Faqs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Faqs />

      <div className="rbt-contact-me bg-color-extra2 rbt-section-gap">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="content">
                <div className="section-title text-start">
                  <h2 className="title">
                    Want to stay informed about new courses &amp; histudy?
                  </h2>
                  <p className="description mt--20">
                    Histudy educational platform ipsum dolor sit amet
                    consectetur adipisicing elit. Nam inventore praesentium
                    alias incidunt! Veritatis.
                  </p>
                  <div className="social-share-wrapper mt--30">
                    <h5>You can also follow us on:</h5>
                    <ul className="social-icon social-default transparent-with-border justify-content-start mt--30">
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
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-xl-1">
              <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                <form id="contact-form" className="w-100">
                  <div className="form-group">
                    <input name="con_name" type="text" placeholder="Name" />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <input name="con_email" type="email" placeholder="Email" />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Phone" />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Message"></textarea>
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-submit-group">
                    <button
                      type="submit"
                      className="rbt-btn radius-round btn-gradient hover-icon-reverse"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">GET IT NOW</span>
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

      <Newsletter />
      <Footer />
    </div>
  );
}
