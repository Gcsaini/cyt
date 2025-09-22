import React from "react";
import { Helmet } from "react-helmet-async";
import demoPhoto from "../../assets/img/2.png";
import LazyImage from "../../utils/lazy-image";
import BgImage from "../../assets/img/bg-image-10.png";
import { Link } from "react-router-dom";
import ImageTag from "../../utils/image-tag";
import { truncateString } from "../../utils/helpers";
import { getDateDifference } from "../../utils/time";
import WellNessCard from "./wellness-card";
import { imagePath } from "../../utils/url";

export default function WorkshopDetail(props) {
  const { data, workshopByThisUser, moreWorkshop } = props;
  const [sidebar, setSidebar] = React.useState(false);

  const handleSidebarClick = () => setSidebar(!sidebar);

  const shareTitle = data.title;
  const shareDesc = truncateString(data.short_desc, 160);
  const shareImage = `${imagePath}/${data.workshop_image}`;
  const currentUrl = window.location.href;

  return (
    <>
      {/* SEO & Social Meta Tags */}
      <Helmet>
        <title>{data.title} | Mind Matters Programs</title>
        <meta name="description" content={shareDesc} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={shareTitle} />
        <meta property="og:description" content={shareDesc} />
        <meta property="og:image" content={shareImage} />
        <meta property="og:url" content={currentUrl} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={shareTitle} />
        <meta name="twitter:description" content={shareDesc} />
        <meta name="twitter:image" content={shareImage} />
      </Helmet>

      {/* Breadcrumb & Banner */}
      <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3">
        <div className="breadcrumb-inner breadcrumb-dark">
          <LazyImage alt="BG Image" width="1920" height="1408" src={BgImage} />
        </div>
        <div className="container mt--40">
          <div className="row">
            <div className="col-lg-8">
              <div className="content text-start">
                <ul className="page-list">
                  <li className="rbt-breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <div className="icon-right">
                      <i className="feather-chevron-right"></i>
                    </div>
                  </li>
                  <li className="rbt-breadcrumb-item active">Mind Matters Programs</li>
                </ul>
                <h1 className="title mb--0">{data.title}</h1>
                <p className="description">{data.short_desc}</p>
                <div className="rbt-author-meta mb--20">
                  <div className="rbt-avater">
                    <Link to={`/view-profile/${data.post_by._id}`}>
                      <ImageTag
                        alt={data.post_by.user.name}
                        src={`${imagePath}/${data.post_by.user.profile}`}
                      />
                    </Link>
                  </div>
                  <div className="rbt-author-info">
                    By &nbsp;
                    <Link to={`/view-profile/${data.post_by._id}`}>
                      {data.post_by.user.name}
                    </Link>
                    &nbsp;|&nbsp;
                    <span>{data.post_by.profile_type}</span>
                  </div>
                </div>
                <ul className="rbt-meta">
                  <li>
                    <i className="feather-calendar"></i> {data.event_date} &nbsp; {data.event_time} ({data.duration})
                  </li>
                  <li>
                    <i className="feather-award"></i> {data.level}
                  </li>
                  <li>
                    <i className="feather-globe"></i> {data.language}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Workshop Details */}
      <section className="rbt-course-details-area rbt-section-gap">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <article className="course-details-content">
                <div className="rbt-feature-box rbt-shadow-box thuumbnail">
                  <ImageTag
                    alt={data.title}
                    width="800"
                    height="550"
                    className="w-100"
                    src={shareImage}
                  />
                </div>

                <div className="rbt-feature-box rbt-shadow-box mt--60">
                  <div className="row g-5">
                    <div className="col-lg-12">
                      <h2 className="title mb--20">Event Description</h2>
                      <div dangerouslySetInnerHTML={{ __html: data.desc }} />
                    </div>
                  </div>
                </div>

                {/* Instructor */}
                <div className="rbt-instructor rbt-shadow-box intructor-wrapper mt--30" id="intructor">
                  <div className="about-author border-0 pb--0 pt--0">
                    <h3 className="rbt-title-style-3 mb--30">By Listed Therapist</h3>
                    <div className="row g-5 media align-items-center">
                      <div className="col-lg-6 col-md-6 col-sm-6 thumbnail rbt-avatars size-lg">
                        <ImageTag
                          alt={data.post_by.user.name}
                          width="110"
                          height="120"
                          src={`${imagePath}/${data.post_by.user.profile}`}
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 media-body">
                        <h4>
                          <Link to={`/view-profile/${data.post_by._id}`}>
                            {data.post_by.user.name}
                          </Link>
                        </h4>
                        <span>{data.post_by.profile_type}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* More Workshops by same user */}
                {workshopByThisUser.length > 0 && (
                  <div className="related-course mt--60">
                    <h3>More Workshops by {data.post_by.user.name}</h3>
                    <div className="row g-5">
                      {workshopByThisUser.map((item) => (
                        <div key={item._id} className="col-lg-6 col-md-6 col-sm-6 col-12 sal-animate">
                          <WellNessCard data={item} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 mt_md--60 mt_sm--60">
              <aside className="course-sidebar rbt-gradient-border sticky-top rbt-shadow-box course-sidebar-top">
                {/* Price & Register */}
                <div className="inner">
                  <div className="rbt-price-wrapper d-flex flex-wrap align-items-center justify-content-between">
                    <div className="rbt-price">
                      <span className="current-price">₹{data.price}</span>
                      <span className="off-price" style={{ fontSize: 15 }}>₹{data.mrp}</span>
                    </div>
                    <div className="discount-time">
                      <span className="rbt-badge color-danger bg-color-danger-opacity">
                        <i className="feather-clock"></i> {getDateDifference(data.event_date)} days left!
                      </span>
                    </div>
                  </div>

                  <div className="add-to-card-button mb--15 mt--20">
                    <Link
                      className="rbt-btn btn-gradient icon-hover w-100 d-block text-center"
                      to={`/workshop-booking/${data._id}`}
                    >
                      <span className="btn-text">Register Now</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </Link>
                  </div>

                  {/* Sidebar Details */}
                  <div
                    onClick={handleSidebarClick}
                    className={sidebar ? "rbt-widget-details has-show-more active" : "rbt-widget-details has-show-more"}
                  >
                    <ul className="has-show-more-inner-content rbt-course-details-list-wrapper">
                      <li><span>Start Date</span><span className="rbt-feature-value rbt-badge-5">{data.event_date}</span></li>
                      <li><span>End Date</span><span className="rbt-feature-value rbt-badge-5">{data.event_end_date}</span></li>
                      <li><span>Start Time</span><span className="rbt-feature-value rbt-badge-5">{data.event_time}</span></li>
                      <li><span>Level</span><span className="rbt-feature-value rbt-badge-5">{data.level}</span></li>
                      <li><span>Language</span><span className="rbt-feature-value rbt-badge-5">{data.language}</span></li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
