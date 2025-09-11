import React from "react";
import GujaratImg from "../../assets/img/Gujrat.png";
import UttarakhandImg from "../../assets/img/Uttarakhand.png";
import DelhiImg from "../../assets/img/Delhi.png";
import RajasthanImg from "../../assets/img/Rajasthan.png";
import LazyImage from "../../utils/lazy-image";

export default function State() {
  const statesToShow = [
    { name: "Uttarakhand", img: UttarakhandImg },
    { name: "Gujarat", img: GujaratImg },
    { name: "Rajasthan", img: RajasthanImg },
    { name: "Delhi", img: DelhiImg },
  ];

  return (
    <div className="rbt-category-area bg-color-white" style={{ padding: "50px 0" }}>
      <div className="container">
        {/* Heading */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h2 className="title"> Explore Therapists in Different States </h2>
            <h2 style={{ fontSize: "2rem", fontWeight: "600" }}> Available in 04 States </h2>
          </div>
        </div>

        {/* Categories */}
        <div className="row g-4">
          {statesToShow.map((state, index) => (
            <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <a
                className="rbt-cat-box rbt-cat-box-1 image-overlaping-content on-hover-content-visible"
                href="#"
                style={{ display: "flex", flexDirection: "column", height: "100%", textDecoration: "none" }}
              >
                <div className="inner" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                  <div className="thumbnail" style={{ marginBottom: 15, flexShrink: 0 }}>
                    <LazyImage
                      alt={state.name}
                      dim={"250"}
                      src={state.img}
                      style={{ width: "100%", height: "auto", objectFit: "cover" }}
                    />
                  </div>
                  <div className="content" style={{ textAlign: "center", marginTop: "auto" }}>
                    <h5 className="title">{state.name}</h5>
                    <div className="read-more-btn">
                      <span className="rbt-btn-link">
                        1 Course <i className="feather-arrow-right"></i>
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
