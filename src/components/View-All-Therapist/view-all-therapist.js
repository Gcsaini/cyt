import React from "react";
import Slider from "@mui/material/Slider";
import demoImg from "../../assets/img/2.png";
export default function ViewAllTherapist() {
  const [open, setOpen] = React.useState(false);
  const handleFilterClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="rbt-page-banner-wrapper">
        <div className="rbt-banner-image"></div>
        <div className="rbt-banner-content">
          <div className="rbt-banner-content-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <ul className="page-list">
                    <li className="rbt-breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <div className="icon-right">
                        <i className="feather-chevron-right"></i>
                      </div>
                    </li>
                    <li className="rbt-breadcrumb-item active">All Courses</li>
                  </ul>
                  <div className=" title-wrapper">
                    <h1 className="title mb--0"> All Courses</h1>
                    <a className="rbt-badge-2" href="/course-card-3#">
                      <div className="image">🎉</div> 12 Courses
                    </a>
                  </div>
                  <p className="description">
                    Courses that help beginner designers become true unicorns.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rbt-course-top-wrapper mt--40 mt_sm--20">
            <div className="container">
              <div className="row g-5 align-items-center">
                <div className="col-lg-5 col-md-12">
                  <div className="rbt-sorting-list d-flex flex-wrap align-items-center">
                    <div className="rbt-short-item">
                      <span className="course-index">
                        Showing 16 of 12<span className="ms-1">results</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-12">
                  <div className="rbt-sorting-list d-flex flex-wrap align-items-end justify-content-start justify-content-lg-end">
                    <div className="rbt-short-item">
                      <form action="#" className="rbt-search-style me-0">
                        <input type="text" placeholder="Search Your Course.." />
                        <button
                          type="submit"
                          className="rbt-search-btn rbt-round-btn"
                        >
                          <i className="feather-search"></i>
                        </button>
                      </form>
                    </div>
                    <div className="rbt-short-item">
                      <div className="view-more-btn text-start text-sm-end">
                        <button
                          onClick={handleFilterClick}
                          className="discover-filter-button discover-filter-activation rbt-btn btn-white btn-md radius-round"
                        >
                          Filter<i className="feather-filter"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    open === true
                      ? "default-exp-wrapper"
                      : "default-exp-wrapper  d-none"
                  }
                  // className="default-exp-wrapper d-none"
                >
                  <div className="filter-inner">
                    <div className="filter-select-option">
                      <div className="filter-select rbt-modern-select">
                        <span className="select-label d-block">Short By</span>
                        <select>
                          <option>Default</option>
                          <option>Latest</option>
                          <option>Popularity</option>
                          <option>Trending</option>
                          <option>Price: low to high</option>
                          <option>Price: high to low</option>
                        </select>
                      </div>
                    </div>
                    <div className="filter-select-option">
                      <div className="filter-select rbt-modern-select">
                        <span className="select-label d-block">
                          Short By Author
                        </span>
                        <select data-live-search="true" title="Select Author">
                          <option data-subtext="Experts">Janin Afsana</option>
                          <option data-subtext="Experts">Joe Biden</option>
                          <option data-subtext="Experts">Fatima Asrafy</option>
                          <option data-subtext="Experts">Aysha Baby</option>
                          <option data-subtext="Experts">Mohamad Ali</option>
                          <option data-subtext="Experts">Jone Li</option>
                          <option data-subtext="Experts">Alberd Roce</option>
                          <option data-subtext="Experts">Zeliski Noor</option>
                        </select>
                      </div>
                    </div>
                    <div className="filter-select-option">
                      <div className="filter-select rbt-modern-select">
                        <span className="select-label d-block">
                          Short By Offer
                        </span>
                        <select>
                          <option>Free</option>
                          <option>Paid</option>
                          <option>Premium</option>
                        </select>
                      </div>
                    </div>
                    <div className="filter-select-option">
                      <div className="filter-select rbt-modern-select">
                        <span className="select-label d-block">
                          Short By Category
                        </span>
                        <select data-live-search="true">
                          <option>Web Design</option>
                          <option>Graphic</option>
                          <option>App Development</option>
                          <option>Figma Design</option>
                        </select>
                      </div>
                    </div>
                    <div className="filter-select-option">
                      <div className="filter-select">
                        <span className="select-label d-block">
                          Price Range
                        </span>
                        <div className="price_filter s-filter clear">
                          <form action="#" method="GET">
                            <div id="slider-range">
                              <div className="rc-slider rc-slider-horizontal">
                                <div className="rc-slider-rail"></div>
                                <div
                                  className="rc-slider-track rc-slider-track-1"
                                  style={{
                                    left: "0%",
                                    width: "80%",
                                    backgroundColor: "#2f57ef"
                                  }}
                                ></div>
                                <div className="rc-slider-step"></div>
                                <div
                                  className="rc-slider-handle rc-slider-handle-1"
                                  style={{
                                    left: "0%",
                                    transform: "translateX(-50%)",
                                    borderColor: "#2f57ef",
                                    backgroundColor: "#2f57ef",
                                    opacity: "1",
                                    boxShadow: "none",
                                    outline: "0"
                                  }}
                                  tabindex="0"
                                  role="slider"
                                  aria-valuemin="0"
                                  aria-valuemax="500"
                                  aria-valuenow="0"
                                  aria-disabled="false"
                                  aria-orientation="horizontal"
                                ></div>
                                <Slider
                                  style={{ color: "#3EB75E" }}
                                  defaultValue={50}
                                  aria-label="Default"
                                  valueLabelDisplay="auto"
                                />
                              </div>
                            </div>
                            <div className="slider__range--output">
                              <div className="price__output--wrap">
                                <div className="price--output">
                                  <span>Price:</span>
                                  <input
                                    type="text"
                                    id="amount"
                                    readonly=""
                                    value="$50 - $3000"
                                  />
                                </div>
                                <div className="price--filter">
                                  <a
                                    className="rbt-btn btn-gradient btn-sm"
                                    href="#"
                                  >
                                    Filter
                                  </a>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rbt-section-overlayping-top rbt-section-gapBottom">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
              style={{ wordWrap: "break-word" }}
              data-sal-delay="150"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              <div className="rbt-card rbt-hover ">
                <div className="rbt-card-img">
                  <a className="thumbnail-link" href="/course-details-two/1">
                    <img
                      alt="Card image"
                      loading="lazy"
                      width="355"
                      height="240"
                      decoding="async"
                      data-nimg="1"
                      srcset={demoImg}
                      src={demoImg}
                      style={{ color: "transparent" }}
                    />
                    {/* <span className="rbt-btn btn-white icon-hover">
                      <span className="btn-text">Read More</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span> */}
                  </a>
                </div>
                {/* <div className="rbt-card-body">
                  <h4 className="rbt-card-title">
                    <a href="/course-details-two/1">
                      The Complete Histudy 2024: From Zero to Expert!
                    </a>
                  </h4>
                  <div className="rbt-card-bottom">
                    <a
                      className="transparent-button"
                      href="/course-details-two/1"
                    >
                      <i>
                        <svg
                          width="17"
                          height="12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g stroke="#27374D" fill="none" fill-rule="evenodd">
                            <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                            <path
                              stroke-linecap="square"
                              d="M.663 5.572h14.594"
                            ></path>
                          </g>
                        </svg>
                      </i>
                    </a>
                  </div>
                </div> */}
                <div className="rbt-card-body">
                  <ul className="rbt-meta">
                    <li style={{ fontSize: "16px" }}>
                      <i className="feather-message-circle"></i>Hindi, English
                    </li>
                    <li style={{ fontSize: "16px" }}>
                      <i className="feather-map-pin"></i>Uttarakhand
                    </li>
                  </ul>
                  <h4 className="rbt-card-title">
                    <a style={{ cursor: "pointer" }}>Siddhant Kataria</a>
                  </h4>
                  <div style={{ marginTop: "7px", display: "flex" }}>
                    <span>
                      <i className="feather-user"></i>
                    </span>
                    <span style={{ fontSize: "16px", marginLeft: "5px" }}>
                      Counselling Psychologist
                    </span>
                  </div>
                  <div style={{ marginTop: "5px", display: "flex" }}>
                    <span>
                      <i className="feather-heart"></i>
                    </span>
                    <span style={{ fontSize: "16px", marginLeft: "5px" }}>
                      Individual Counselling
                    </span>
                  </div>
                  <div
                    style={{
                      marginTop: "24px",
                      marginBottom: "10px",
                      display: "flex",
                      justifyContent: "space-between"
                    }}
                  >
                    <a
                      className="view-btn view-btn-border"
                      style={{ padding: "0px 10px", cursor: "pointer" }}
                    >
                      View Profile
                    </a>
                    <a
                      className="rbt-btn btn-gradient book-btn"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "0px 10px"
                      }}
                    >
                      <span>&nbsp;&nbsp;Book Now&nbsp;&nbsp;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
              style={{ wordWrap: "break-word" }}
              data-sal-delay="150"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              <div className="rbt-card rbt-hover ">
                <div className="rbt-card-img">
                  <a className="thumbnail-link" href="/course-details-two/1">
                    <img
                      alt="Card image"
                      loading="lazy"
                      width="355"
                      height="240"
                      decoding="async"
                      data-nimg="1"
                      srcset={demoImg}
                      src={demoImg}
                      style={{ color: "transparent" }}
                    />
                    {/* <span className="rbt-btn btn-white icon-hover">
                      <span className="btn-text">Read More</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span> */}
                  </a>
                </div>

                <div className="rbt-card-body">
                  <ul className="rbt-meta">
                    <li style={{ fontSize: "16px" }}>
                      <i className="feather-message-circle"></i>Hindi, English
                    </li>
                    <li style={{ fontSize: "16px" }}>
                      <i className="feather-map-pin"></i>Uttarakhand
                    </li>
                  </ul>
                  <h4 className="rbt-card-title">
                    <a style={{ cursor: "pointer" }}>Siddhant Kataria</a>
                  </h4>
                  <div style={{ marginTop: "7px", display: "flex" }}>
                    <span>
                      <i className="feather-user"></i>
                    </span>
                    <span style={{ fontSize: "16px", marginLeft: "5px" }}>
                      Counselling Psychologist
                    </span>
                  </div>
                  <div style={{ marginTop: "5px", display: "flex" }}>
                    <span>
                      <i className="feather-heart"></i>
                    </span>
                    <span style={{ fontSize: "16px", marginLeft: "5px" }}>
                      Individual Counselling
                    </span>
                  </div>
                  <div
                    style={{
                      marginTop: "24px",
                      marginBottom: "10px",
                      display: "flex",
                      justifyContent: "space-between"
                    }}
                  >
                    <a
                      className="view-btn view-btn-border"
                      style={{ padding: "0px 10px", cursor: "pointer" }}
                    >
                      View Profile
                    </a>
                    <a
                      className="rbt-btn btn-gradient book-btn"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "0px 10px"
                      }}
                    >
                      <span>&nbsp;&nbsp;Book Now&nbsp;&nbsp;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt--60">
              <nav>
                <div className="nav-links">
                  <ul className="rbt-pagination">
                    <li className="disabled">
                      <a aria-label="Previous" href="/course-card-3#">
                        <i className="feather-chevron-left"></i>
                      </a>
                    </li>
                    <li className="active">
                      <a href="/course-card-3#">1</a>
                    </li>
                    <li className="">
                      <a href="/course-card-3#">2</a>
                    </li>
                    <li className="">
                      <a aria-label="Next" href="/course-card-3#">
                        <i className="feather-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
