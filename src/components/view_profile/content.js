import BestSellerImg from "../../assets/img/card-icon-11b092.png";
import ImageTag from "../../utils/image-tag";
export default function ProfileContent() {
  return (
    <div className="rbt-advance-tab-area rbt-section-gap bg-color-extra2">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-12 mt--30">
            <div className="profile-content rbt-shadow-box">
              <h4 className="rbt-title-style-3">About Me</h4>
              <div className="row g-5">
                <div className="col-lg-8">
                  <p className="mt--10 mb--20">
                    Hello, I'm a Counseling Psychologist committed to supporting
                    your mental health and overall well-being. My approach to
                    counseling is grounded in cognitive restructuring, a
                    powerful technique that helps you identify and challenge
                    negative thought patterns.
                    <b /> <b /> By doing so, we can work together to replace
                    these thoughts with healthier, more adaptive ways of
                    thinking, leading to improved emotional and mental health.
                    In addition to cognitive restructuring, I embrace a holistic
                    wellness approach. <b /> <b /> I believe that true wellness
                    involves balancing all aspects of your life, and I strive to
                    integrate strategies that promote overall well-being.
                    Whether it’s through mindfulness practices, stress
                    management techniques, or lifestyle adjustments, I aim to
                    provide comprehensive support tailored to your unique needs.
                  </p>

                  <ul className="rbt-information-list mt--15">
                    <li>
                      <a href="/profile/1#">
                        <i className="feather-phone"></i>+918077757951
                      </a>
                    </li>
                    <li>
                      <a href="mailto:hello@example.com">
                        <i className="feather-mail"></i>
                        deepak@chooseyourtherapist.in
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
  );
}
