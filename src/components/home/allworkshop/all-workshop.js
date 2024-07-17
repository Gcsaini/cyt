import { Link } from "react-router-dom";
import demoPhoto from "../../../assets/img/2.png";
export default function AllWorkshops() {
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
                    <li className="rbt-breadcrumb-item active">All Event</li>
                  </ul>
                  <div className=" title-wrapper">
                    <h1 className="title mb--0">All Event</h1>
                    <a className="rbt-badge-2" href="/pages/event-list#">
                      <div className="image">🎉</div> 9 Events
                    </a>
                  </div>
                  <p className="description">
                    Event that help beginner designers become true unicorns.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rbt-counterup-area rbt-section-overlayping-top rbt-section-gapBottom">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="rbt-card card-list-2 event-list-card variation-01 rbt-hover">
                <div className="rbt-card-img">
                  <Link to={"/new-workshop"}>
                    <img
                      alt="Card image"
                      fetchpriority="high"
                      width="355"
                      height="240"
                      decoding="async"
                      data-nimg="1"
                      srcset={demoPhoto}
                      src={demoPhoto}
                      style={{ color: "transparent" }}
                    />
                    <div className="rbt-badge-3 bg-white">
                      <span>11 Jan</span>
                      <span>2024</span>
                    </div>
                  </Link>
                </div>
                <div className="rbt-card-body">
                  <ul className="rbt-meta">
                    <li>
                      <i className="feather-map-pin"></i>IAC
                    </li>
                    <li>
                      <i className="feather-clock"></i>8:00 am - 5:00 pm
                    </li>
                  </ul>
                  <h4 className="rbt-card-title">
                    <a href="/new-workshop">
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
            <div className="col-lg-6 col-md-6 col-12">
              <div className="rbt-card card-list-2 event-list-card variation-01 rbt-hover">
                <div className="rbt-card-img">
                  <a href="/pages/event-details/2">
                    <img
                      alt="Card image"
                      fetchpriority="high"
                      width="355"
                      height="240"
                      decoding="async"
                      data-nimg="1"
                      srcset="/_next/image?url=%2Fimages%2Fevent%2Fgrid-type-02.jpg&amp;w=384&amp;q=75 1x, /_next/image?url=%2Fimages%2Fevent%2Fgrid-type-02.jpg&amp;w=750&amp;q=75 2x"
                      src="/_next/image?url=%2Fimages%2Fevent%2Fgrid-type-02.jpg&amp;w=750&amp;q=75"
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
            <div className="col-lg-6 col-md-6 col-12">
              <div className="rbt-card card-list-2 event-list-card variation-01 rbt-hover">
                <div className="rbt-card-img">
                  <a href="/pages/event-details/3">
                    <img
                      alt="Card image"
                      fetchpriority="high"
                      width="355"
                      height="240"
                      decoding="async"
                      data-nimg="1"
                      srcset="/_next/image?url=%2Fimages%2Fevent%2Fgrid-type-03.jpg&amp;w=384&amp;q=75 1x, /_next/image?url=%2Fimages%2Fevent%2Fgrid-type-03.jpg&amp;w=750&amp;q=75 2x"
                      src="/_next/image?url=%2Fimages%2Fevent%2Fgrid-type-03.jpg&amp;w=750&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                    <div className="rbt-badge-3 bg-white">
                      <span>10 Oct</span>
                      <span>2024</span>
                    </div>
                  </a>
                </div>
                <div className="rbt-card-body">
                  <ul className="rbt-meta">
                    <li>
                      <i className="feather-map-pin"></i>Paris
                    </li>
                    <li>
                      <i className="feather-clock"></i>8:00 am - 5:00 pm
                    </li>
                  </ul>
                  <h4 className="rbt-card-title">
                    <a href="/pages/event-details/3">
                      Histudy Education Fair 2024
                    </a>
                  </h4>
                  <div className="read-more-btn">
                    <a
                      className="rbt-btn btn-border hover-icon-reverse btn-sm radius-round"
                      href="/pages/event-details/3"
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
            <div className="col-lg-6 col-md-6 col-12">
              <div className="rbt-card card-list-2 event-list-card variation-01 rbt-hover">
                <div className="rbt-card-img">
                  <a href="/pages/event-details/4">
                    <img
                      alt="Card image"
                      fetchpriority="high"
                      width="355"
                      height="240"
                      decoding="async"
                      data-nimg="1"
                      srcset="/_next/image?url=%2Fimages%2Fevent%2Fgrid-type-04.jpg&amp;w=384&amp;q=75 1x, /_next/image?url=%2Fimages%2Fevent%2Fgrid-type-04.jpg&amp;w=750&amp;q=75 2x"
                      src="/_next/image?url=%2Fimages%2Fevent%2Fgrid-type-04.jpg&amp;w=750&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                    <div className="rbt-badge-3 bg-white">
                      <span>8 Jan</span>
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
                    <a href="/pages/event-details/4">
                      Elegant Light Box Paper Cut Dioramas
                    </a>
                  </h4>
                  <div className="read-more-btn">
                    <a
                      className="rbt-btn btn-border hover-icon-reverse btn-sm radius-round"
                      href="/pages/event-details/4"
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
            <div className="col-lg-6 col-md-6 col-12">
              <div className="rbt-card card-list-2 event-list-card variation-01 rbt-hover">
                <div className="rbt-card-img">
                  <a href="/pages/event-details/5">
                    <img
                      alt="Card image"
                      fetchpriority="high"
                      width="355"
                      height="240"
                      decoding="async"
                      data-nimg="1"
                      srcset="/_next/image?url=%2Fimages%2Fevent%2Fgrid-type-05.jpg&amp;w=384&amp;q=75 1x, /_next/image?url=%2Fimages%2Fevent%2Fgrid-type-05.jpg&amp;w=750&amp;q=75 2x"
                      src="/_next/image?url=%2Fimages%2Fevent%2Fgrid-type-05.jpg&amp;w=750&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                    <div className="rbt-badge-3 bg-white">
                      <span>12 Mar</span>
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
                    <a href="/pages/event-details/5">
                      Most Effective Ways Education's Problem.
                    </a>
                  </h4>
                  <div className="read-more-btn">
                    <a
                      className="rbt-btn btn-border hover-icon-reverse btn-sm radius-round"
                      href="/pages/event-details/5"
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
            <div className="col-lg-6 col-md-6 col-12">
              <div className="rbt-card card-list-2 event-list-card variation-01 rbt-hover">
                <div className="rbt-card-img">
                  <a href="/pages/event-details/6">
                    <img
                      alt="Card image"
                      fetchpriority="high"
                      width="355"
                      height="240"
                      decoding="async"
                      data-nimg="1"
                      srcset="/_next/image?url=%2Fimages%2Fevent%2Fgrid-type-06.jpg&amp;w=384&amp;q=75 1x, /_next/image?url=%2Fimages%2Fevent%2Fgrid-type-06.jpg&amp;w=750&amp;q=75 2x"
                      src="/_next/image?url=%2Fimages%2Fevent%2Fgrid-type-06.jpg&amp;w=750&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                    <div className="rbt-badge-3 bg-white">
                      <span>11 Oct</span>
                      <span>2024</span>
                    </div>
                  </a>
                </div>
                <div className="rbt-card-body">
                  <ul className="rbt-meta">
                    <li>
                      <i className="feather-map-pin"></i>Paris
                    </li>
                    <li>
                      <i className="feather-clock"></i>8:00 am - 5:00 pm
                    </li>
                  </ul>
                  <h4 className="rbt-card-title">
                    <a href="/pages/event-details/6">
                      Top 7 Common About Education.
                    </a>
                  </h4>
                  <div className="read-more-btn">
                    <a
                      className="rbt-btn btn-border hover-icon-reverse btn-sm radius-round"
                      href="/pages/event-details/6"
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
            <div className="col-lg-12 mt--60">
              <nav>
                <div className="nav-links">
                  <ul className="rbt-pagination">
                    <li className="disabled">
                      <a aria-label="Previous" href="/pages/event-list#">
                        <i className="feather-chevron-left"></i>
                      </a>
                    </li>
                    <li className="active">
                      <a href="/pages/event-list#">1</a>
                    </li>
                    <li className="">
                      <a href="/pages/event-list#">2</a>
                    </li>
                    <li className="">
                      <a aria-label="Next" href="/pages/event-list#">
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
