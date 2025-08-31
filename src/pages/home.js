import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Banner from "../components/home/banner";
import Blogs from "../components/home/blogs";
import CallToAction from "../components/home/call-to-action";
import Counter from "../components/home/counter";
import Feedback from "../components/home/feedback";
import NewsLetter from "../components/home/newsletter";
import ProfileCard from "../components/home/profile-card";
import PromationalBanner from "../components/home/promational-banner";
import Services from "../components/home/services";
import HomeWorkshop from "../components/home/workshops";
import MyNavbar from "../components/navbar";
import Popup from "../components/global/popup";

export default function HomePage() {
  // const [showPopup, setShowPopup] = useState(false);

  //   useEffect(() => {
  //   const lastVisit = localStorage.getItem("popupShownAt");

  //   if (!lastVisit) {
  //     setShowPopup(true);
  //     localStorage.setItem("popupShownAt", Date.now());
  //   } else {
  //     const now = Date.now();
  //     const oneHour = 60 * 60 * 1000; // 1 hour in ms
  //     if (now - parseInt(lastVisit, 10) > oneHour) {
  //       setShowPopup(true);
  //       localStorage.setItem("popupShownAt", Date.now());
  //     }
  //   }
  // }, []);
  return (
    <div id="__next">
      <main className="">
        <MyNavbar />
        <main className="rbt-main-wrapper">
          <Banner />
          <Services />
          <ProfileCard />
          <Counter />
          <HomeWorkshop isWhite={false} />
          <Blogs />

          <PromationalBanner />
          <Feedback />
         
          <CallToAction />
          <NewsLetter />
          {/* <Popup open={showPopup} onClose={() => setShowPopup(false)} /> */}
        </main>
        <Footer />
      </main>
    </div>
  );
}
