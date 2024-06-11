import ProfileHeader from "../components/view_profile/header";
import ProfileInfoTab from "../components/view_profile/profile-info-tab";
import Footer from "../components/footer";
import MyNavbar from "../components/navbar";
import NewsLetter from "../components/home/newsletter";
import ProfileCourses from "../components/view_profile/courses";
import ProfileContent from "../components/view_profile/content";
export default function ViewProfile() {
  return (
    <div id="__next">
      <MyNavbar />
      <ProfileHeader />
      <ProfileInfoTab />
      <ProfileContent />
      <ProfileCourses />
      <NewsLetter />
      <Footer />
    </div>
  );
}
