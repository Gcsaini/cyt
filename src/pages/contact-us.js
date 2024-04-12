import MyNavbar from "../components/navbar";
import Footer from "../components/footer";
import ContactForm from "../components/contact/form";
import Header from "../components/contact/header";
import NewsLetter from "../components/home/newsletter";
export default function ContactUs() {
  return (
    <div id="__next">
      <MyNavbar />
      <Header />
      <ContactForm />
      <NewsLetter />
      <Footer />
    </div>
  );
}
