import Footer from "../components/footer";
import AllWorkshops from "../components/home/all-workshop";
import MyNavbar from "../components/navbar";

export default function AllWorkshop() {
  return (
    <div id="__next">
      <main className="">
        <MyNavbar />
        <main className="rbt-main-wrapper">
          <AllWorkshops />
        </main>
        <Footer />
      </main>
    </div>
  );
}
