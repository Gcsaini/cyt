import AboutCyt from "../components/about/about-cyt";
import AboutUsBanner from "../components/about/banner";
import Brands from "../components/about/brands";
import CallToActionAbout from "../components/about/call-to-action";
import ServiceQuality from "../components/about/service-quality";
import TeamAbout from "../components/about/team";
import TeamBanner from "../components/about/team-banner";
import Footer from "../components/footer";
import Feedback from "../components/home/feedback";
import MyNavbar from "../components/navbar";
import NewsLetter from "../components/home/newsletter";
export default function AboutUs() {
  return (
    <div id="__next">
      <MyNavbar />
      <AboutUsBanner />
      <TeamBanner />
      <AboutCyt />
      <ServiceQuality />
      <CallToActionAbout />
      <TeamAbout />
      <Feedback />
      <Brands />
      <NewsLetter />
      <Footer />
    </div>
  );
}
