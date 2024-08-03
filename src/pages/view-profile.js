import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileHeader from "../components/view_profile/header";
import ProfileInfoTab from "../components/view_profile/profile-info-tab";
import Footer from "../components/footer";
import MyNavbar from "../components/navbar";
import NewsLetter from "../components/home/newsletter";
import { fetchById, fetchData } from "../utils/actions";
import {
  GetFavriouteTherapistListUrl,
  getTherapistProfile,
} from "../utils/url";
import ErrorPage from "./error-page";
import PageProgressBar from "../components/global/page-progress";
import ProfileWorkshop from "../components/view_profile/profile-workshop";
import { getDecodedToken } from "../utils/jwt";

export default function ViewProfile() {
  const { id } = useParams();
  const [profile, setProfile] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [favrioutes, setFavrioutes] = useState([]);

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

  const getFavrioutes = async () => {
    try {
      const res = await fetchById(GetFavriouteTherapistListUrl);
      if (res.status) {
        setFavrioutes(res.data.therapists || []);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
    const data = getDecodedToken();
    if (data && data.role !== 1) {
      getFavrioutes();
    }
  }, [id]);

  if (error) {
    return <ErrorPage />;
  }

  return loading ? (
    <PageProgressBar />
  ) : (
    <div id="__next">
      <MyNavbar />
      <ProfileHeader pageData={profile[0]} favrioutes={favrioutes} />
      <ProfileInfoTab pageData={profile[0]} />
      {profile[0].userWorkshop.length > 0 && (
        <ProfileWorkshop data={profile[0].userWorkshop} />
      )}
      <NewsLetter />
      <Footer />
    </div>
  );
}
