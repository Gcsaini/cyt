import React from "react";
import AllCourse from "../components/View-All-Therapist/view-all-therapist";
import Footer from "../components/footer";
import NewsLetter from "../components/home/newsletter";
import MyNavbar from "../components/navbar";

export default function ViewAllTherapistPage() {
  return (
    <div id="__next">
      <main className="">
        <MyNavbar />
        <main className="rbt-main-wrapper">
          <AllCourse />
          <NewsLetter />
        </main>
        <Footer />
      </main>
    </div>
  );
}
