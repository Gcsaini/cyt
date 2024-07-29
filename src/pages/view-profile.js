import ProfileHeader from "../components/view_profile/header";
import ProfileInfoTab from "../components/view_profile/profile-info-tab";
import Footer from "../components/footer";
import MyNavbar from "../components/navbar";
import NewsLetter from "../components/home/newsletter";
import { fetchData } from "../utils/actions";
import React, { useEffect } from "react";
import { getTherapistProfile } from "../utils/url";
import ErrorPage from "./error-page";
import { useParams } from "react-router-dom";
import PageProgressBar from "../components/global/page-progress";
import HomeWorkshop from "../components/home/workshops";
import ProfileWorkshop from "../components/view_profile/profile-workshop";
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
      {profile[0].userWorkshop.length > 0 && (
        <ProfileWorkshop data={profile[0].userWorkshop} />
      )}
      <NewsLetter />
      <Footer />
    </div>
  );
}
