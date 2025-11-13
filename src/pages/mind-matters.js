import React from "react";
import Footer from "../components/footer";
import MyNavbar from "../components/navbar";
import AllWorkshop from "../components/home/all-workshop";

export default function MindMatters() {
  return (
    <div id="__next">
      <MyNavbar />
      <div className="rbt-banner-area rbt-banner-1" style={{ paddingTop: "30px", paddingBottom: "30px", backgroundColor: "#f8f9fa" }}>
        <div className="container mt--20">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 col-sm-12 col-12 text-center">
              <h1 className="title" style={{ fontSize: "3rem", marginBottom: "20px", color: "#228756" }}>
                Mind Matters Programs
              </h1>
              <p className="description" style={{ fontSize: "1.2rem", color: "#666", marginBottom: "30px" }}>
                Discover our comprehensive mental health programs designed to support your well-being journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      <AllWorkshop />

      <Footer />
    </div>
  );
}