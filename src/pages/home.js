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

export default function HomePage() {
  return (
    <div id="__next">
      <main className="">
        <MyNavbar />
        <main className="rbt-main-wrapper">
          <Banner />
          <Services />
          <ProfileCard />
          <Counter />
          <PromationalBanner />
          <HomeWorkshop />
          <Feedback />
          <Blogs />
          <CallToAction />
          <NewsLetter />
        </main>
        <Footer />
      </main>
    </div>
  );
}
