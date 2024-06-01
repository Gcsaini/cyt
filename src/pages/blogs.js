import BlogHeader from "../components/blogs/header";
import Footer from "../components/footer";
import MyNavbar from "../components/navbar";
import Blogs from "../components/blogs/all-blogs";
import NewsLetter from "../components/home/newsletter";
export default function AllBlogs() {
  return (
    <div id="__next">
      <MyNavbar />
      <BlogHeader />
      <Blogs />
      <NewsLetter />
      <Footer />
    </div>
  );
}
