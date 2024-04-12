import LazyImage from "../../utils/lazy-image";
export default function ServiceDetails(props) {
  return (
    <div class="rbt-blog-details-area rbt-section-gapBottom breadcrumb-style-max-width">
      <div class="blog-content-wrapper rbt-article-content-wrapper">
        <div class="content">
          <div class="post-thumbnail mb--30 position-relative wp-block-image alignwide">
            <figure>
              <LazyImage
                alt="Blog"
                dim={"645-1085"}
                src={`https://dev.chooseyourtherapist.in/images/${props.data.image}`}
              />
              <figcaption>{props.data.image_caption}</figcaption>
            </figure>
          </div>
          <p>{props.data.long_desc}</p>
          <blockquote class="wp-block-quote">
            <p>{props.data.quote}</p>
            <cite>
              <a href={"#"}>{props.data.author}</a>
            </cite>
          </blockquote>
          <div
            style={{
              height: 110,
              width: "100%",
              background: "#eae9ea",
              marginBottom: 20,
            }}
          >
            <div style={{ justifyContent: "center", display: "flex" }}>
              <span style={{ fontSize: 12, padding: 0, margin: 0 }}>
                Advertisement
              </span>
            </div>
          </div>

          {props.data.content.map((item, index) => {
            return (
              <>
                <h4>{item.heading}</h4>
                <div
                  style={{ marginBottom: 20 }}
                  dangerouslySetInnerHTML={{
                    __html: item.desc,
                  }}
                ></div>
                {props.data.content.length > 1 && index === 1 && (
                  <div
                    class="wp-block-gallery columns-3 is-cropped"
                    style={{ marginTop: 20 }}
                  >
                    <ul class="blocks-gallery-grid">
                      {props.data.images.map((img) => {
                        return (
                          <li class="blocks-gallery-item">
                            <figure>
                              <LazyImage
                                alt={props.data.img_caption}
                                dim={"143-255"}
                                class="radius-4"
                                src={`https://dev.chooseyourtherapist.in/images/${img}`}
                              />
                            </figure>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </>
            );
          })}

          <div class="tagcloud" style={{ marginTop: 20 }}>
            {props.data.tags.map((tag) => {
              return <a href="/">{tag}</a>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
