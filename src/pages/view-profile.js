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

/* ✅ Static Meta SEO */
document.title = "Therapist Profile | Wellness Platform";
const metaDescription = document.querySelector("meta[name='description']");
if (metaDescription) {
  metaDescription.setAttribute(
    "content",
    "Discover therapist details, workshops, and professional background on our wellness platform."
  );
} else {
  const meta = document.createElement("meta");
  meta.name = "description";
  meta.content =
    "Discover therapist details, workshops, and professional background on our wellness platform.";
  document.head.appendChild(meta);
}

const ogTitle = document.createElement("meta");
ogTitle.setAttribute("property", "og:title");
ogTitle.content = "Therapist Profile";
document.head.appendChild(ogTitle);

const ogDesc = document.createElement("meta");
ogDesc.setAttribute("property", "og:description");
ogDesc.content =
  "Explore therapist profiles, workshops, and book therapy sessions easily.";
document.head.appendChild(ogDesc);

const ogType = document.createElement("meta");
ogType.setAttribute("property", "og:type");
ogType.content = "website";
document.head.appendChild(ogType);

export default function ViewProfile() {
  const { id } = useParams();
  const [profile, setProfile] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [favrioutes, setFavrioutes] = useState([]);

  const getData = async () => {
    try {
      const res = await fetchData(getTherapistProfile + id);
      if (res.status && Object.keys(res.data).length > 0) {
        setProfile(res.data);

        // ✅ Dynamic SEO Update
        document.title = `${res.data.name} | Therapist Profile`;
        const meta = document.querySelector("meta[name='description']");
        if (meta) {
          meta.setAttribute("content", res.data.bio?.substring(0, 150) || "");
        }
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
      <ProfileHeader pageData={profile} favrioutes={favrioutes} />
      <ProfileInfoTab pageData={profile} />
      {profile && profile.workshops.length > 0 && (
        <ProfileWorkshop data={profile.workshops} />
      )}
      <NewsLetter />
      <Footer />
    </div>
  );}