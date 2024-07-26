import ProfileHeader from "../components/view_profile/header";
import ProfileInfoTab from "../components/view_profile/profile-info-tab";
import Footer from "../components/footer";
import MyNavbar from "../components/navbar";
import NewsLetter from "../components/home/newsletter";
import ProfileCourses from "../components/view_profile/courses";
import ProfileContent from "../components/view_profile/content";
import { fetchData } from "../utils/actions";
import React, { useEffect } from "react";
import { getTherapistProfile } from "../utils/url";
import ErrorPage from "./error-page";
import { useParams } from "react-router-dom";
import PageProgressBar from "../components/global/page-progress";
export default function ViewProfile() {
  const { id } = useParams();
  const [profile, setProfile] = React.useState();
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const getData = async () => {
    try {
      const res = await fetchData(getTherapistProfile + id);
      if (res.status && res.data.length > 0) {
        setProfile(res.data);
      } else {
        setError(true);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  if (error) {
    return <ErrorPage />;
  }

  return loading ? (
    <PageProgressBar />
  ) : (
    <div id="__next">
      <MyNavbar />
      <ProfileHeader pageData={profile[0]} />
      <ProfileInfoTab pageData={profile[0]} />
      <ProfileContent pageData={profile[0]} />
      <ProfileCourses />
      <NewsLetter />
      <Footer />
    </div>
  );
}
