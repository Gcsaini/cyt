import React from "react";
import BlogCardImg2 from "../../assets/img/web-design736e.jpg";
import LazyImage from "../../utils/lazy-image";

export default function State() {
  const categories = Array.from({ length: 8 }, (_, index) => ({
    title: `Category ${index + 1}`,
    link: "#",
    courses: 1,
    img: BlogCardImg2,
  }));

  return (
    <div className="rbt-category-area bg-color-white" style={{ padding: "50px 0" }}>
      <div className="container">
        <div className="row g-4">
          {categories.map((category, index) => (
            <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <a
                className="rbt-cat-box rbt-cat-box-1 image-overlaping-content on-hover-content-visible"
                href={category.link}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  textDecoration: "none",
                }}
              >
                <div className="inner" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                  <div className="thumbnail" style={{ marginBottom: 15, flexShrink: 0 }}>
                    <LazyImage alt={category.title} dim={"250"} src={category.img} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
                  </div>
                  <div className="content" style={{ textAlign: "center", marginTop: "auto" }}>
                    <h5 className="title">{category.title}</h5>
                    <div className="read-more-btn">
                      <span className="rbt-btn-link">
                        {category.courses} Courses <i className="feather-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
