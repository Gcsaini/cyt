import Footer from "../components/footer";
import NewWorkshop from "../components/home/newworkshop";
import MyNavbar from "../components/navbar";

export default function NewWorkshops() {
  return (
    <div id="__next">
      <main className="">
        <MyNavbar />
        <main className="rbt-main-wrapper">
          <NewWorkshop />
        </main>
        <Footer />
      </main>
    </div>
  );
}
