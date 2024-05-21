import MyNavbar from "../components/navbar";
import Footer from "../components/footer";
import JoinHeader from "../components/joinus/header";
import Content from "../components/joinus/content";
import ServiceBenefits from "../components/joinus/service-benefits";
import Subscriptions from "../components/joinus/subscription";
import CallToAction from "../components/home/call-to-action";
import FAQs from "../components/home/faqs";
import Newsletter from "../components/home/newsletter";
export default function JoinUs() {
  return (
    <div id="__next">
      <MyNavbar />
      <div className="rbt-overlay-page-wrapper mt--60">
        <JoinHeader />
        <div className="rbt-putchase-guide-area breadcrumb-style-max-width rbt-section-gapBottom">
          <ServiceBenefits />
          <Content />
        </div>
      </div>
      <CallToAction />
      <FAQs />
      <Newsletter />
      <Footer />
    </div>
  );
}
