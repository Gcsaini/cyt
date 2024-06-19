import LazyImage from "../../utils/lazy-image";
import ContactImg from "../../assets/img/contact.webp";
export default function ContactForm() {
  return (
    <div className="rbt-contact-address undefined">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="thumbnail">
              <LazyImage alt="Contact" dim={"550-500"} src={ContactImg} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="rbt-contact-form contact-form-style-1 max-width-auto">
              <h3 className="title">We’re Here to Help</h3>
              <form
                id="contact-form"
                method="POST"
                className="rainbow-dynamic-form max-width-auto"
              >
                <div className="form-group">
                  <input
                    name="contact-name"
                    id="contact-name"
                    type="text"
                    placeholder="Name"
                  />
                  <span className="focus-border"></span>
                </div>
                <div className="form-group">
                  <input
                    name="contact-phone"
                    type="email"
                    placeholder="Email"
                  />
                  <span className="focus-border"></span>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Your Subject"
                  />
                  <span className="focus-border"></span>
                </div>
                <div className="form-group">
                  <textarea
                    name="contact-message"
                    id="contact-message"
                    placeholder="Message"
                  ></textarea>
                  <span className="focus-border"></span>
                </div>
                <div className="form-submit-group">
                  <button
                    name="submit"
                    type="submit"
                    id="submit"
                    className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
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
  );
}
