import MyNavbar from "../components/navbar";
import Footer from "../components/footer";
import CallToAction from "../components/home/call-to-action";
import Newsletter from "../components/home/newsletter";
import PlansHeader from "../components/plans/header";
import PlansCards from "../components/plans/plan-cards";
import RelaxationCards from "../components/plans/realaxation";
export default function Plans() {
  return (
    <div id="__next">
      <MyNavbar />
      <PlansHeader />
      <PlansCards />
      {/* <PromationalBanner /> */}
     {/* RelaxationCards /> */}
      <CallToAction />
      <Newsletter />
      <Footer />
    </div>
  );
}
