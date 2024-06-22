import React from "react";
export default function ProfileInfoTab() {
  const [tab, setTab] = React.useState(1);
  const handleClick = (id) => {
    setTab(id);
  };
  return (
    <div
      className="rbt-advance-tab-area bg-color-white"
      style={{ paddingBottom: 50 }}
    >
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-10 offset-lg-1">
            <div className="advance-tab-button">
              <ul className="nav nav-tabs tab-button-style-2" id="myTab-4">
                <li>
                  <Link
                    className={tab === 1 ? "tab-button active" : "tab-button"}
                    id="home-tab-4"
                    aria-selected={tab === 1 ? "true" : "false"}
                    onClick={() => handleClick(1)}
                  >
                    <span className="title" style={{ cursor: "pointer" }}>
                      Overview
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={tab === 2 ? "tab-button active" : "tab-button"}
                    id="profile-tab-4"
                    aria-selected={tab === 2 ? "true" : "false"}
                    onClick={() => handleClick(2)}
                  >
                    <span className="title" style={{ cursor: "pointer" }}>
                      Location
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={tab === 3 ? "tab-button active" : "tab-button"}
                    id="contact-tab-4"
                    aria-selected={tab === 3 ? "true" : "false"}
                    onClick={() => handleClick(3)}
                  >
                    <span className="title" style={{ cursor: "pointer" }}>
                      Reviews
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={tab === 4 ? "tab-button active" : "tab-button"}
                    id="business-tab-4"
                    aria-selected={tab === 4 ? "true" : "false"}
                    onClick={() => handleClick(4)}
                  >
                    <span className="title" style={{ cursor: "pointer" }}>
                      Business hours
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-10 offset-lg-1">
            <div className="tab-content advance-tab-content-style-2">
              <div
                className={
                  tab === 1 ? "tab-pane fade active show" : "tab-pane fade"
                }
                id="home-4"
                role="tabpanel"
                aria-labelledby="home-tab-4"
              >
                <h4 className="rbt-title-style-3">About me</h4>
                <div className="content">
                  <p>
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
                  <h4 className="rbt-title-style-3">Services</h4>
                  <div className="content"></div>
                  <h4 className="rbt-title-style-3">Expertise</h4>
                  <div className="content"></div>
                </div>
              </div>
              <div
                className={
                  tab === 2 ? "tab-pane fade active show" : "tab-pane fade"
                }
                id="profile-4"
                role="tabpanel"
                aria-labelledby="profile-tab-4"
              >
                <div className="content">
                  <p>
                    Physical education ipsum dolor sit amet consectetur,
                    adipisicing elit. Tempora sequi doloremque dicta quia unde
                    odio nam minus reiciendis ullam aliquam, dolorum ab quisquam
                    cum numquam nemo iure cumque iste. Accusamus necessitatibus.
                  </p>
                </div>
              </div>
              <div
                className={
                  tab === 3 ? "tab-pane fade active show" : "tab-pane fade"
                }
                id="contact-4"
                role="tabpanel"
                aria-labelledby="contact-tab-4"
              >
                <div className="content">
                  <p>
                    Experiencing music ipsum dolor sit amet consectetur,
                    adipisicing elit. Tempora sequi doloremque dicta quia unde
                    odio nam minus reiciendis ullam aliquam, dolorum ab quisquam
                    cum numquam nemo iure cumque iste. Accusamus necessitatibus.
                  </p>
                </div>
              </div>
              <div
                className={
                  tab === 4 ? "tab-pane fade active show" : "tab-pane fade"
                }
                id="contact-4"
                role="tabpanel"
                aria-labelledby="business-tab-4"
              >
                <div className="content">
                  <p>
                    Business Housrs music ipsum dolor sit amet consectetur,
                    adipisicing elit. Tempora sequi doloremque dicta quia unde
                    odio nam minus reiciendis ullam aliquam, dolorum ab quisquam
                    cum numquam nemo iure cumque iste. Accusamus necessitatibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
