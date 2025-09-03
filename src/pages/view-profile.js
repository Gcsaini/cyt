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

/* ✅ Default Static Meta SEO */
document.title = "Choose Your Therapist | Wellness Platform";

function setOrCreateMeta(attr, key, value) {
  let element = document.querySelector(`${attr}[${key}='${value}']`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(key, value);
    document.head.appendChild(element);
  }
  return element;
}

// Preload default meta
setOrCreateMeta("meta", "name", "description").setAttribute(
  "content",
  "Discover therapist details, workshops, and professional background on our wellness platform."
);
setOrCreateMeta("meta", "property", "og:title").setAttribute("content", "Therapist Profile");
setOrCreateMeta("meta", "property", "og:description").setAttribute(
  "content",
  "Explore therapist profiles, workshops, and book therapy sessions easily."
);
setOrCreateMeta("meta", "property", "og:type").setAttribute("content", "website");

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

        // ✅ Dynamic SEO Updates
        document.title = `${res.data.name} | Therapist Profile`;

        // meta description
        const metaDesc = setOrCreateMeta("meta", "name", "description");
        metaDesc.setAttribute(
          "content",
          res.data.bio?.substring(0, 150) || "Therapist profile details."
        );

        // og:title
        setOrCreateMeta("meta", "property", "og:title").setAttribute(
          "content",
          res.data.name || "Therapist Profile"
        );

        // og:description
        setOrCreateMeta("meta", "property", "og:description").setAttribute(
          "content",
          res.data.bio?.substring(0, 150) || "Explore therapist workshops and sessions."
        );

        // og:url
        setOrCreateMeta("meta", "property", "og:url").setAttribute(
          "content",
          `${window.location.origin}/view-profile/${id}`
        );

        // ✅ og:image (profile photo)
        if (res.data.image) {
          setOrCreateMeta("meta", "property", "og:image").setAttribute(
            "content",
            res.data.image
          );
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
  );
}