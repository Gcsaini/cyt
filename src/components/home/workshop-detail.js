import React from "react";
import demoPhoto from "../../assets/img/2.png";
import LazyImage from "../../utils/lazy-image";
import BgImage from "../../assets/img/bg-image-10.png";
import { Link } from "react-router-dom";
import ImageTag from "../../utils/image-tag";
import { truncateString } from "../../utils/helpers";
import { getDateDifference } from "../../utils/time";
import WellNessCard from "./wellness-card";
export default function WorkshopDetail(props) {
  const { data, workshopByThisUser, moreWorkshop } = props;
  const [open, setOpen] = React.useState(false);
  const [sidebar, setSidebar] = React.useState(false);
  const handleMenuClick = () => {
    setOpen(!open);
  };

  const handleSidebarClick = () => {
    setSidebar(!sidebar);
  };

  console.log("dataaaa", data);

  return (
    <>
      <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3">
        <div className="breadcrumb-inner breadcrumb-dark">
          <LazyImage alt="BG Image" width="1920" height="1408" src={BgImage} />
        </div>
        <div className="container mt--40">
          <div className="row">
            <div className="col-lg-8">
              <div className="content">
                <div className="content text-start">
                  <ul className="page-list">
                    <li className="rbt-breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <div className="icon-right">
                        <i className="feather-chevron-right"></i>
                      </div>
                    </li>
                    <li className="rbt-breadcrumb-item active">
                      Workshop Detail
                    </li>
                  </ul>
                  <h2 className="title mb--0">{data.title}</h2>
                  <p class="description">{data.short_desc}</p>
                  <div class="rbt-author-meta mb--20">
                    <div class="rbt-avater">
                      <Link href={`view-profile/${data.post_by._id}`}>
                        <ImageTag
                          alt={data.post_by.name}
                          src={data.post_by.profile}
                        />
                      </Link>
                    </div>
                    <div class="rbt-author-info">
                      By &nbsp;
                      <Link href={`view-profile/${data.post_by._id}`}>
                        {data.post_by.name}
                      </Link>
                      &nbsp;In&nbsp;
                      <a href="#">{data.post_by.profile_type}</a>
                    </div>
                  </div>
                  <ul class="rbt-meta">
                    <li>
                      <i class="feather-calendar"></i>
                      {data.event_date} &nbsp; {data.event_time} (
                      {data.duration})
                    </li>
                    <li>
                      <i class="feather-award"></i> {data.level}
                    </li>
                    <li>
                      <i class="feather-globe"></i> {data.language}
                    </li>
                  </ul>
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
                  <ImageTag
                    alt="Card image"
                    width="800"
                    height="550"
                    className="w-100"
                    src={data.workshop_image}
                  />
                </div>

                <div className="rbt-feature-box rbt-shadow-box mt--60">
                  <div className="row g-5">
                    <div className="col-lg-12">
                      <div className="section-title">
                        <h4 className="title mb--20">Event Description</h4>
                      </div>
                      <div dangerouslySetInnerHTML={{ __html: data.desc }} />
                    </div>
                  </div>
                </div>
                <div
                  class="rbt-instructor rbt-shadow-box intructor-wrapper mt--30"
                  id="intructor"
                >
                  <div class="about-author border-0 pb--0 pt--0">
                    <div class="section-title mb--30">
                      <h4 class="rbt-title-style-3">Instructor</h4>
                    </div>
                    <div class="media align-items-center">
                      <div class="thumbnail">
                        <Link href={`view-profile/${data.post_by._id}`}>
                          <ImageTag
                            alt="Author Images"
                            width="250"
                            height="250"
                            src={data.post_by.profile}
                          />
                        </Link>
                      </div>
                      <div class="media-body">
                        <div class="author-info">
                          <h5 class="title" style={{ lineHeight: 0.24 }}>
                            <Link
                              class="hover-flip-item-wrapper"
                              href={`view-profile/${data.post_by._id}`}
                            >
                              {data.post_by.name}
                            </Link>
                          </h5>
                          <span class="b3 subtitle">
                            {data.post_by.profile_type}
                          </span>
                          <ul class="rbt-meta mb--5 mt--5">
                            <li>
                              <span style={{ lineHeight: "2rem" }}>
                                <b>Experties: </b>
                                {data.post_by.experties}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div class="content">
                          <p class="description">
                            <span style={{ fontSize: 15 }}>
                              <b>Bio: </b>
                            </span>
                            {truncateString(data.post_by.bio, 90)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {workshopByThisUser.length > 0 && (
                  <div className="related-course mt--60">
                    <div class="row g-5 align-items-end mb--20">
                      <div class="col-lg-12 col-md-12 col-12">
                        <div class="section-title">
                          <span class="subtitle bg-pink-opacity">
                            Top Workshop
                          </span>
                          <h4 class="title">
                            More Wroskhop By
                            <strong class="color-primary ms-3">
                              {data.post_by.name}
                            </strong>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="row g-5">
                      {workshopByThisUser.map((item) => {
                        return (
                          <div className="col-lg-6 col-md-6 col-sm-6 col-12 sal-animate">
                            <WellNessCard data={item} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-4 mt_md--60 mt_sm--60">
              <div className="course-sidebar rbt-gradient-border sticky-top rbt-shadow-box course-sidebar-top">
                <div className="inner">
                  <div class="rbt-price-wrapper d-flex flex-wrap align-items-center justify-content-between">
                    <div class="rbt-price">
                      <span class="current-price">₹{data.price}</span>
                      <span class="off-price" style={{ fontSize: 15 }}>
                        ₹{data.mrp}
                      </span>
                    </div>
                    <div class="discount-time">
                      <span class="rbt-badge color-danger bg-color-danger-opacity">
                        <i class="feather-clock"></i>{" "}
                        {getDateDifference(data.event_date)} days left!
                      </span>
                    </div>
                  </div>
                  <div className="video-popup-with-text video-popup-wrapper text-center popup-video sidebar-video-hidden mb--15 mt--20">
                    <div className="video-content">
                      <ImageTag
                        alt={data.title}
                        width="355"
                        height="255"
                        src={data.workshop_image}
                      />
                    </div>
                  </div>
                  <div className="content pt--30">
                    <div className="add-to-card-button mb--15">
                      <Link
                        className="rbt-btn btn-gradient icon-hover w-100 d-block text-center"
                        href="#"
                      >
                        <span className="btn-text">Book Now</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </Link>
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
                            {data.event_date}
                          </span>
                        </li>
                        <li>
                          <span>Start Time</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            {data.event_time}
                          </span>
                        </li>

                        <li>
                          <span>Skill Level</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            {data.level}
                          </span>
                        </li>
                        <li>
                          <span>Location</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            Online
                          </span>
                        </li>

                        <li>
                          <span>Language</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            {data.language}
                          </span>
                        </li>
                      </ul>
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
                        <p>For details about the workshop</p>
                        <p className="rbt-badge-2 mt--10 justify-content-center w-100">
                          <i className="feather-phone mr--5"></i> Call Us:
                          <a href="#">
                            <strong>+91 90121 74819</strong>
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
      <div class="rbt-course-action-bottom rbt-course-action-active">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-6">
              <div class="section-title text-center text-md-start">
                <h5 class="title mb--0">{data.title}</h5>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 mt_sm--15">
              <div class="course-action-bottom-right rbt-single-group">
                <div class="rbt-single-list rbt-price large-size justify-content-center">
                  <span class="current-price color-primary">₹{data.price}</span>
                  <span class="off-price">₹{data.mrp}</span>
                </div>
                <div class="rbt-single-list action-btn">
                  <a
                    class="rbt-btn btn-gradient hover-icon-reverse btn-md"
                    href="#"
                  >
                    <span class="icon-reverse-wrapper">
                      <span class="btn-text">Book Now</span>
                      <span class="btn-icon">
                        <i class="feather-arrow-right"></i>
                      </span>
                      <span class="btn-icon">
                        <i class="feather-arrow-right"></i>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {moreWorkshop.length > 0 && (
        <div class="rbt-related-course-area bg-color-white pt--60 rbt-section-gapBottom">
          <div class="container">
            <div class="section-title mb--30">
              <span class="subtitle bg-primary-opacity">
                More Similar Wrokshops
              </span>
              <h4 class="title">Related Wrokshops</h4>
            </div>
            <div class="row g-5">
              {moreWorkshop.map((item) => {
                return (
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12 sal-animate">
                    <WellNessCard data={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <div class="rbt-separator-mid">
        <div class="container">
          <hr class="rbt-separator m-0" />
        </div>
      </div>
    </>
  );
}
