import React from "react";
import demoPhoto from "../../assets/img/2.png";
export default function NewWorkshop() {
  const [open, setOpen] = React.useState(false);
  const [sidebar, setSidebar] = React.useState(false);
  const handleMenuClick = () => {
    setOpen(!open);
  };

  const handleSidebarClick = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3">
        <div className="breadcrumb-inner breadcrumb-dark">
          <img
            alt="Education Images"
            loading="lazy"
            width="1920"
            height="1408"
            decoding="async"
            data-nimg="1"
            srcset="https://histudy-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg-image-10.97ff1754.jpg&w=1920&q=75"
            src="https://histudy-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg-image-10.97ff1754.jpg&w=1920&q=75"
            style={{ color: "transparent" }}
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="content">
                <div className="content text-start">
                  <ul className="page-list">
                    <li className="rbt-breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <div className="icon-right">
                        <i className="feather-chevron-right"></i>
                      </div>
                    </li>
                    <li className="rbt-breadcrumb-item active">Web Design</li>
                  </ul>
                  <h2 className="title mb--0">
                    International Education Fair 2024
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-course-details-area rbt-section-gap">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="course-details-content">
                <div className="rbt-feature-box rbt-shadow-box thuumbnail">
                  <img
                    alt="Card image"
                    fetchpriority="high"
                    width="800"
                    height="550"
                    decoding="async"
                    data-nimg="1"
                    className="w-100"
                    srcset={demoPhoto}
                    src={demoPhoto}
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="rbt-feature-box rbt-shadow-box mt--60">
                  <div className="row g-5">
                    <div className="col-lg-12">
                      <div className="section-title">
                        <h4 className="title mb--0">Event Content</h4>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <ul className="rbt-list-style-1">
                        <li>
                          <i className="feather-check"></i>Over 37 lectures and
                          55.5 hours of content!
                        </li>
                        <li>
                          <i className="feather-check"></i>Have an intermediate
                          skill level of Python programming.
                        </li>
                        <li>
                          <i className="feather-check"></i>Have a portfolio of
                          various data analysis projects.
                        </li>
                        <li>
                          <i className="feather-check"></i>Use the numpy library
                          to create and manipulate arrays.
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="rbt-list-style-1">
                        <li>
                          <i className="feather-check"></i>Live project Software
                          Testing Training Included.
                        </li>
                        <li>
                          <i className="feather-check"></i>Use the pandas module
                          with Python to create and structure data.
                        </li>
                        <li>
                          <i className="feather-check"></i>Have a portfolio of
                          various data analysis projects.
                        </li>
                        <li>
                          <i className="feather-check"></i>Create data
                          visualizations using matplotlib and the seaborn.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="rbt-feature-box rbt-shadow-box mt--60">
                  <div className="row g-5">
                    <div className="col-lg-12">
                      <div className="section-title">
                        <h4 className="title mb--20">Event Description</h4>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod te invidunt. ut labore et dolore
                        magna aliquyam erat, sed diam voluptua. At vero eos et
                        accusam. et justo duo dolores et ea rebum. Stet clita
                        kasd gubergren, no sea takimata sanctus est Lorem ipsum
                        dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                        sadipscing elitr.
                      </p>
                      <p>
                        Sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea
                        takimata sanctus est Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <div className="section-title">
                        <h4 className="title mb--20">Description</h4>
                      </div>
                      <ul className="rbt-list-style-1">
                        <li>
                          <i className="feather-check"></i>Over 37 lectures and
                          55.5 hours of content!
                        </li>
                        <li>
                          <i className="feather-check"></i>Have an intermediate
                          skill level of Python programming.
                        </li>
                        <li>
                          <i className="feather-check"></i>Have a portfolio of
                          various data analysis projects.
                        </li>
                        <li>
                          <i className="feather-check"></i>Use the numpy library
                          to create and manipulate arrays.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="course-content rbt-shadow-box mt--60">
                  <div className="section-title">
                    <h4 className="title mb--0">Event FAQ</h4>
                  </div>
                  <div className="rbt-accordion-style rbt-accordion-02 accordion mt--45">
                    <div className="accordion" id="accordionExampleb2">
                      <div className="accordion-item card">
                        <h2
                          className="accordion-header card-header"
                          id="headingTwo0"
                        >
                          <button
                            className={
                              open === true
                                ? "accordion-button"
                                : "accordion-button collapsed"
                            }
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo10"
                            aria-expanded={open === true ? "false" : "true"}
                            aria-controls="collapseTwo10"
                            onClick={() => handleMenuClick()}
                          >
                            Intro to Course and Histudy
                          </button>
                        </h2>
                        <div
                          id="collapseTwo10"
                          className={
                            open === true
                              ? "accordion-collapse collapse show"
                              : "accordion-collapse collapse"
                          }
                          aria-labelledby="headingTwo0"
                          data-bs-parent="#accordionExampleb2"
                        >
                          <div className="accordion-body card-body">
                            <p>
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Nobis, quisquam qui. Quia,
                              tempore, atque, pariatur eius nobis quas nulla
                              ipsam molestias provident fuga odio cum dolorum
                              maiores minima? Aliquam, sequi.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <div className="accordion-item card">
                        <h2
                          className="accordion-header card-header"
                          id="headingTwo0"
                        >
                          <button
                            className={
                              open === true
                                ? "accordion-button"
                                : "accordion-button collapsed"
                            }
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo10"
                            aria-expanded={open === true ? "false" : "true"}
                            aria-controls="collapseTwo10"
                            onClick={() => handleMenuClick()}
                          >
                            Intro to Course and Histudy 2
                          </button>
                        </h2>
                        <div
                          id="collapseTwo10"
                          className={
                            open === true
                              ? "accordion-collapse collapse show"
                              : "accordion-collapse collapse"
                          }
                          aria-labelledby="headingTwo0"
                          data-bs-parent="#accordionExampleb2"
                        >
                          <div className="accordion-body card-body">
                            <p>
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Nobis, quisquam qui. Quia,
                              tempore, atque, pariatur eius nobis quas nulla
                              ipsam molestias provident fuga odio cum dolorum
                              maiores minima? Aliquam, sequi.
                            </p>
                          </div>
                        </div>
                      </div> */}
                      {/* <div className="accordion-item card">
                        <h2
                          className="accordion-header card-header"
                          id="headingTwo1"
                        >
                          <button
                            className={
                              open === true
                                ? "accordion-button collapsed"
                                : "accordion-button "
                            }
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo11"
                            aria-expanded={open === true ? "true" : "false"}
                            aria-controls="collapseTwo11"
                          >
                            Course Fundamentals?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo11"
                          className={
                            open === true
                              ? "accordion-collapse collapse"
                              : "accordion-collapse collapse show"
                          }
                          aria-labelledby="headingTwo1"
                          data-bs-parent="#accordionExampleb2"
                        >
                          <div className="accordion-body card-body">
                            <p>
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Nobis, quisquam qui. Quia,
                              tempore, atque, pariatur eius nobis quas nulla
                              ipsam molestias provident fuga odio cum dolorum
                              maiores minima? Aliquam, sequi.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item card">
                        <h2
                          className="accordion-header card-header"
                          id="headingTwo2"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo12"
                            aria-expanded="false"
                            aria-controls="collapseTwo12"
                          >
                            You can develop skill and setup?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo12"
                          className="accordion-collapse collapse "
                          aria-labelledby="headingTwo2"
                          data-bs-parent="#accordionExampleb2"
                        >
                          <div className="accordion-body card-body">
                            <p>
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Nobis, quisquam qui. Quia,
                              tempore, atque, pariatur eius nobis quas nulla
                              ipsam molestias provident fuga odio cum dolorum
                              maiores minima? Aliquam, sequi.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item card">
                        <h2
                          className="accordion-header card-header"
                          id="headingTwo3"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo13"
                            aria-expanded="false"
                            aria-controls="collapseTwo13"
                          >
                            15 Things To Know About Education?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo13"
                          className="accordion-collapse collapse "
                          aria-labelledby="headingTwo3"
                          data-bs-parent="#accordionExampleb2"
                        >
                          <div className="accordion-body card-body">
                            <p>
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Nobis, quisquam qui. Quia,
                              tempore, atque, pariatur eius nobis quas nulla
                              ipsam molestias provident fuga odio cum dolorum
                              maiores minima? Aliquam, sequi.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item card">
                        <h2
                          className="accordion-header card-header"
                          id="headingTwo4"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo14"
                            aria-expanded="false"
                            aria-controls="collapseTwo14"
                          >
                            Course Description?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo14"
                          className="accordion-collapse collapse "
                          aria-labelledby="headingTwo4"
                          data-bs-parent="#accordionExampleb2"
                        >
                          <div className="accordion-body card-body">
                            <p>
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Nobis, quisquam qui. Quia,
                              tempore, atque, pariatur eius nobis quas nulla
                              ipsam molestias provident fuga odio cum dolorum
                              maiores minima? Aliquam, sequi.
                            </p>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="rbt-participants-area mt--60">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-title text-start mb--20">
                        <span className="subtitle bg-secondary-opacity">
                          Event Participants
                        </span>
                        <h2 className="title">Event Participants</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row g-5">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="rbt-team team-style-default style-two rbt-hover">
                        <div className="inner">
                          <div className="thumbnail">
                            <img
                              alt="Corporate Template"
                              loading="lazy"
                              width="415"
                              height="555"
                              decoding="async"
                              data-nimg="1"
                              srcset={demoPhoto}
                              src={demoPhoto}
                              style={{ color: "transparent" }}
                            />
                          </div>
                          <div className="content">
                            <h2 className="title">Alejandro</h2>
                            <h6 className="subtitle theme-gradient">
                              Math Teacher
                            </h6>
                            <span className="team-form">
                              <i className="feather-map-pin"></i>
                              <span className="location">CO Miego, AD,USA</span>
                            </span>
                            <p className="description">
                              Yes, I am a Depertment Teacher. I have a passion
                              for learning system.
                            </p>
                            <ul className="social-icon social-default icon-naked mt--20">
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
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="rbt-team team-style-default style-two rbt-hover">
                        <div className="inner">
                          <div className="thumbnail">
                            <img
                              alt="Corporate Template"
                              loading="lazy"
                              width="415"
                              height="555"
                              decoding="async"
                              data-nimg="1"
                              srcset="/_next/image?url=%2Fimages%2Fteam%2Fteam-02.jpg&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fimages%2Fteam%2Fteam-02.jpg&amp;w=1080&amp;q=75 2x"
                              src="/_next/image?url=%2Fimages%2Fteam%2Fteam-02.jpg&amp;w=1080&amp;q=75"
                              style={{ color: "transparent" }}
                            />
                          </div>
                          <div className="content">
                            <h2 className="title">Alejandro</h2>
                            <h6 className="subtitle theme-gradient">
                              English Teacher
                            </h6>
                            <span className="team-form">
                              <i className="feather-map-pin"></i>
                              <span className="location">CO Miego, AD,USA</span>
                            </span>
                            <p className="description">
                              Yes, I am a Depertment Teacher. I have a passion
                              for learning system.
                            </p>
                            <ul className="social-icon social-default icon-naked mt--20">
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
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="related-course mt--60">
                  <div className="row">
                    <div className="col-lg-12 mb--40">
                      <div className="section-title text-start">
                        <span className="subtitle bg-secondary-opacity">
                          Similar Event
                        </span>
                        <h2 className="title">Similar Event</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row g-5">
                    <div
                      className="col-lg-6 col-md-6 col-sm-6 col-12 mt--30"
                      data-sal-delay="150"
                      // data-sal="slide-up"
                      data-sal-duration="800"
                    >
                      <div className="rbt-card event-grid-card variation-01 rbt-hover">
                        <div className="rbt-card-img">
                          <a href="/pages/event-details/1">
                            <img
                              alt="Card image"
                              loading="lazy"
                              width="355"
                              height="240"
                              decoding="async"
                              data-nimg="1"
                              srcset={demoPhoto}
                              src={demoPhoto}
                            />
                            <div className="rbt-badge-3 bg-white">
                              <span>11 Jan</span>
                              <span>2024</span>
                            </div>
                          </a>
                        </div>
                        <div className="rbt-card-body">
                          <ul className="rbt-meta">
                            <li>
                              <i className="feather-map-pin"></i>IAC Building
                            </li>
                            <li>
                              <i className="feather-clock"></i>8:00 am - 5:00 pm
                            </li>
                          </ul>
                          <h4 className="rbt-card-title">
                            <a href="/pages/event-details/1">
                              International Education Fair 2024
                            </a>
                          </h4>
                          <div className="read-more-btn">
                            <a
                              className="rbt-btn btn-border hover-icon-reverse btn-sm radius-round"
                              href="/pages/event-details/1"
                            >
                              <span className="icon-reverse-wrapper">
                                <span className="btn-text">Get Ticket</span>
                                <span className="btn-icon">
                                  <i className="feather-arrow-right"></i>
                                </span>
                                <span className="btn-icon">
                                  <i className="feather-arrow-right"></i>
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-6 col-md-6 col-sm-6 col-12 mt--30"
                      data-sal-delay="150"
                      // data-sal="slide-up"
                      data-sal-duration="800"
                    >
                      <div className="rbt-card event-grid-card variation-01 rbt-hover">
                        <div className="rbt-card-img">
                          <a href="/pages/event-details/2">
                            <img
                              alt="Card image"
                              loading="lazy"
                              width="355"
                              height="240"
                              decoding="async"
                              data-nimg="1"
                              srcset={demoPhoto}
                              src={demoPhoto}
                              style={{ color: "transparent" }}
                            />
                            <div className="rbt-badge-3 bg-white">
                              <span>9 Mar</span>
                              <span>2024</span>
                            </div>
                          </a>
                        </div>
                        <div className="rbt-card-body">
                          <ul className="rbt-meta">
                            <li>
                              <i className="feather-map-pin"></i>Vancouver
                            </li>
                            <li>
                              <i className="feather-clock"></i>8:00 am - 5:00 pm
                            </li>
                          </ul>
                          <h4 className="rbt-card-title">
                            <a href="/pages/event-details/2">
                              Painting Art Contest 2020
                            </a>
                          </h4>
                          <div className="read-more-btn">
                            <a
                              className="rbt-btn btn-border hover-icon-reverse btn-sm radius-round"
                              href="/pages/event-details/2"
                            >
                              <span className="icon-reverse-wrapper">
                                <span className="btn-text">Get Ticket</span>
                                <span className="btn-icon">
                                  <i className="feather-arrow-right"></i>
                                </span>
                                <span className="btn-icon">
                                  <i className="feather-arrow-right"></i>
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="load-more mt--60 text-center">
                        <a
                          className="rbt-btn rbt-switch-btn btn-border"
                          href="/pages/event-details/1#"
                        >
                          <span data-text="View More Events">
                            View More Events
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt_md--60 mt_sm--60">
              <div className="course-sidebar rbt-gradient-border sticky-top rbt-shadow-box course-sidebar-top">
                <div className="inner">
                  <a
                    className="video-popup-with-text video-popup-wrapper text-center popup-video sidebar-video-hidden mb--15 d-none"
                    data-vbtype="video"
                    href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
                  >
                    <div className="video-content">
                      <img
                        alt="Video Images"
                        loading="lazy"
                        width="355"
                        height="255"
                        decoding="async"
                        data-nimg="1"
                        className="w-100 rbt-radius"
                        srcset="/_next/image?url=%2Fimages%2Fcourse%2Fcourse-01.jpg&amp;w=384&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcourse%2Fcourse-01.jpg&amp;w=750&amp;q=75 2x"
                        src="/_next/image?url=%2Fimages%2Fcourse%2Fcourse-01.jpg&amp;w=750&amp;q=75"
                        style={{ color: "transparent" }}
                      />
                      <div className="position-to-top">
                        <span className="rbt-btn rounded-player-2 with-animation">
                          <span className="play-icon"></span>
                        </span>
                      </div>
                      <span className="play-view-text d-block color-white">
                        <i className="feather-eye"></i> Preview this course
                      </span>
                    </div>
                  </a>
                  <div className="content pt--30">
                    <div className="add-to-card-button mb--15">
                      <a
                        className="rbt-btn btn-gradient icon-hover w-100 d-block text-center"
                        href="/pages/event-details/1#"
                      >
                        <span className="btn-text">Add to Cart</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                    <div className="buy-now-btn">
                      <a
                        className="rbt-btn btn-border icon-hover w-100 d-block text-center"
                        href="/pages/event-details/1#"
                      >
                        <span className="btn-text">Book Now</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                    <div
                      onClick={() => handleSidebarClick()}
                      className={
                        sidebar === true
                          ? "rbt-widget-details has-show-more active"
                          : "rbt-widget-details has-show-more"
                      }
                    >
                      <ul className="has-show-more-inner-content rbt-course-details-list-wrapper">
                        <li>
                          <span>Start Date</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            25 Jan, 2024
                          </span>
                        </li>
                        <li>
                          <span>Start Time</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            7.00Pm
                          </span>
                        </li>
                        <li>
                          <span>End Date</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            25 Jan, 2024
                          </span>
                        </li>
                        <li>
                          <span>Skill Level</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            Basic
                          </span>
                        </li>
                        <li>
                          <span>Ongoing</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            1000+
                          </span>
                        </li>
                        <li>
                          <span>Location</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            USA
                          </span>
                        </li>
                        <li>
                          <span>Certificate</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            Yes
                          </span>
                        </li>
                        <li>
                          <span>Language</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            USA
                          </span>
                        </li>
                      </ul>
                      <div
                        className={
                          sidebar === true
                            ? "rbt-show-more-btn  active"
                            : "rbt-show-more-btn"
                        }
                      >
                        Show More
                      </div>
                    </div>
                    <div className="social-share-wrapper mt--30 text-center">
                      <div className="rbt-post-share d-flex align-items-center justify-content-center">
                        <ul className="social-icon social-default transparent-with-border justify-content-center">
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
                      <hr className="mt--20" />
                      <div className="contact-with-us text-center">
                        <p>For details about the course</p>
                        <p className="rbt-badge-2 mt--10 justify-content-center w-100">
                          <i className="feather-phone mr--5"></i> Call Us:{" "}
                          <a href="/pages/event-details/1#">
                            <strong>+444 555 666 777</strong>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
