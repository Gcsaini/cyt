import MyNavbar from "../components/navbar";
import Footer from "../components/footer";
import Newsletter from "../components/home/newsletter";
import Faqs from "../components/home/faqs";

import { useNavigate } from "react-router-dom";
import ContactForm from "../components/contact/form";
export default function FaqPage() {
  const navigate = useNavigate();
  return (
    <div id="__next">
      <MyNavbar />
      <div class="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb-inner text-center">
                <h2 class="title">FAQ</h2>
                <ul class="page-list">
                  <li class="rbt-breadcrumb-item">
                    <a
                      onClick={() => navigate("/")}
                      style={{ cursor: "pointer" }}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <div class="icon-right">
                      <i class="feather-chevron-right"></i>
                    </div>
                  </li>
                  <li class="rbt-breadcrumb-item active">Faqs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Faqs />

      <div class="rbt-contact-me bg-color-extra2 rbt-section-gap">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-lg-6">
              <div class="content">
                <div class="section-title text-start">
                  <h2 class="title">
                    Want to stay informed about new courses &amp; histudy?
                  </h2>
                  <p class="description mt--20">
                    Histudy educational platform ipsum dolor sit amet
                    consectetur adipisicing elit. Nam inventore praesentium
                    alias incidunt! Veritatis.
                  </p>
                  <div class="social-share-wrapper mt--30">
                    <h5>You can also follow us on:</h5>
                    <ul class="social-icon social-default transparent-with-border justify-content-start mt--30">
                      <li>
                        <a href="https://www.facebook.com/">
                          <i class="feather-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com">
                          <i class="feather-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/">
                          <i class="feather-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkdin.com/">
                          <i class="feather-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5 offset-xl-1">
              <div class="rbt-contact-form contact-form-style-1 max-width-auto">
                <form id="contact-form" class="w-100">
                  <div class="form-group">
                    <input name="con_name" type="text" placeholder="Name" />
                    <span class="focus-border"></span>
                  </div>
                  <div class="form-group">
                    <input name="con_email" type="email" placeholder="Email" />
                    <span class="focus-border"></span>
                  </div>
                  <div class="form-group">
                    <input type="text" placeholder="Phone" />
                    <span class="focus-border"></span>
                  </div>
                  <div class="form-group">
                    <textarea placeholder="Message"></textarea>
                    <span class="focus-border"></span>
                  </div>
                  <div class="form-submit-group">
                    <button
                      type="submit"
                      class="rbt-btn radius-round btn-gradient hover-icon-reverse"
                    >
                      <span class="icon-reverse-wrapper">
                        <span class="btn-text">GET IT NOW</span>
                        <span class="btn-icon">
                          <i class="feather-arrow-right"></i>
                        </span>
                        <span class="btn-icon">
                          <i class="feather-arrow-right"></i>
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
