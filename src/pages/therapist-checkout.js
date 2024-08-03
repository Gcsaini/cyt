import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/footer";
import MyNavbar from "../components/navbar";
import NewsLetter from "../components/home/newsletter";
import { fetchById, fetchData } from "../utils/actions";
import { getTherapistProfile } from "../utils/url";
import ErrorPage from "./error-page";
import PageProgressBar from "../components/global/page-progress";
import TherapistCheckout from "../components/view_profile/checkout";

export default function TherapistCheckoutPage() {
  const { id } = useParams();
  const [profile, setProfile] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [favrioutes, setFavrioutes] = useState([]);

  const getData = async () => {
    try {
      const res = await fetchData(getTherapistProfile + id);
      console.log("resss", res);
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
    console.log("inresss");
    getData();
  }, [id]);

  if (error) {
    return <ErrorPage />;
  }
  console.log("profiii", profile);
  return loading ? (
    <PageProgressBar />
  ) : (
    <div id="__next">
      <MyNavbar />
      <div className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1">
        <div className="container">
          <div className="row mt--60">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <h2 className="title">Checkout</h2>
                <ul className="page-list">
                  <li className="rbt-breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <div className="icon-right">
                      <i className="feather-chevron-right"></i>
                    </div>
                  </li>
                  <li className="rbt-breadcrumb-item active">Checkout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {profile.length > 0 && <TherapistCheckout profile={profile[0]} />}
      <NewsLetter />
      <Footer />
    </div>
  );
}
