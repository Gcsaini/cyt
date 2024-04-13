export default function BlogHeader() {
  return (
    <div className="rbt-page-banner-wrapper mt--60">
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
                  <li className="rbt-breadcrumb-item active">All Blog</li>
                </ul>
                <div className=" title-wrapper">
                  <h1 className="title mb--0">All Blog</h1>
                  <a className="rbt-badge-2" href="/blog-grid#">
                    <div className="image">🎉</div> 20 Articles
                  </a>
                </div>
                <p className="description">
                  Blog that help beginner designers become true unicorns.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
