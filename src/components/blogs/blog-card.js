export default function BlogCard() {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
      <div className="rbt-card variation-02 rbt-hover">
        <div className="rbt-card-img">
          <a href="/blog-details/30">
            <img
              alt="Card image"
              fetchpriority="high"
              width="450"
              height="267"
              decoding="async"
              data-nimg="1"
              style="color: transparent"
              srcset="
                  /_next/image?url=%2Fimages%2Fblog%2Fblog-grid-02.jpg&amp;w=640&amp;q=75  1x,
                  /_next/image?url=%2Fimages%2Fblog%2Fblog-grid-02.jpg&amp;w=1080&amp;q=75 2x
                "
              src="/_next/image?url=%2Fimages%2Fblog%2Fblog-grid-02.jpg&amp;w=1080&amp;q=75"
            />
          </a>
        </div>
        <div className="rbt-card-body">
          <h5 className="rbt-card-title">
            <a href="/blog-details/30">The Modern Rules Of Education.</a>
          </h5>
          <p className="rbt-card-text">
            It is a long established fact that a reader.
          </p>
          <div className="rbt-card-bottom">
            <a className="transparent-button" href="/blog-details/30">
              Learn More
              <i>
                <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="#27374D" fill="none" fillRule="evenodd">
                    <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                    <path stroke-linecap="square" d="M.663 5.572h14.594"></path>
                  </g>
                </svg>
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
