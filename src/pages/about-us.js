import AboutCyt from "../components/about/about-cyt";
import AboutUsBanner from "../components/about/banner";
import CallToActionAbout from "../components/about/call-to-action";
import ServiceQuality from "../components/about/service-quality";
import TeamBanner from "../components/about/team-banner";
import Footer from "../components/footer";
import Feedback from "../components/home/feedback";
import MyNavbar from "../components/navbar";
import NewsLetter from "../components/home/newsletter";
import InterSection from "../components/about/inter-section";
import Collaborator from "../components/about/collaborator";
export default function AboutUs() {
  return (
    <div id="__next">
      <MyNavbar />
      <AboutUsBanner />
      <TeamBanner />
    
      <AboutCyt />
      <ServiceQuality />
      <CallToActionAbout />
      <InterSection />
      <Feedback />

      <NewsLetter />
      <Footer />
    </div>
  );
}
