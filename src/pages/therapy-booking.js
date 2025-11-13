import React from "react";
import Footer from "../components/footer";
import MyNavbar from "../components/navbar";
import ConsultationForm from "../components/home/consultation-form";

export default function TherapyBooking() {
  return (
    <div id="__next">
      <MyNavbar />
      <div className="rbt-banner-area rbt-banner-1" style={{ paddingTop: "30px", paddingBottom: "30px", backgroundColor: "#f8f9fa" }}>
        <div className="container mt--20">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 col-sm-12 col-12 text-center">
              <h1 className="title" style={{ fontSize: "3rem", marginBottom: "20px", color: "#228756" }}>
                Book Your Therapy Session
              </h1>
              <p className="description" style={{ fontSize: "1.2rem", color: "#666", marginBottom: "30px" }}>
                Connect with our verified therapists and start your journey towards better mental health today.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: "50px 0" }}>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-12">
            <ConsultationForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}