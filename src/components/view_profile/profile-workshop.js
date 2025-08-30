import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import WellNessCard from "../home/wellness-card";
export default function ProfileWorkshop({ data }) {
  console.log("workshop data", data);
  return (
    <div className={`rbt-course-area ${"bg-color-extra2"} rbt-section-gap`}>
      <div className="container">
        <div className="row mb--60">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle bg-primary-opacity">
                Mental Health Wrokshops/Activites
              </span>
              <h2 className="title">
                <span className="theme-gradient">
                  Wellness Workshops by Professionals
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row g-4" style={{ marginTop: 20 }}>
          {data &&
            data.map((item) => {
              return (
                <div className="col-lg-4 col-md-6 col-12" key={item._id}>
                  <WellNessCard data={item} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
