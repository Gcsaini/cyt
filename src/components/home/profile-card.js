import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { Link } from "react-router-dom";
import ErrorPage from "../../pages/error-page";
import { fetchData } from "../../utils/actions";
import { getTherapistProfiles } from "../../utils/url";
import ProfileCardHor from "./profile-card-hor";
export default function ProfileCard() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [tab, setTab] = React.useState("");
  const [data, setData] = React.useState([]);

  const getData = async (tab) => {
    try {
      const res = await fetchData(getTherapistProfiles, {
        priority: 1,
        profile_type: tab,
      });
      if (res.status) {
        setData(res.data);
      } else {
        return <ErrorPage />;
      }
    } catch (err) {
      return <ErrorPage />;
    }
  };

  const handleClick = (id) => {
    setTab(id);
    getData(id);
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div className="rbt-rbt-card-area rbt-section-gap bg-color-extra2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle bg-secondary-opacity">
                Mental Health Professional
              </span>
              <h2 className="title">
                <span className="theme-gradient">Therapist Directory </span>
              </h2>
              <p>
                Looking for the right therapist? Our comprehensive profiles make
                it easy to find a therapist who meets your needs and
                preferences. Start your search here.
              </p>
              <div className="row">
                <div className="col-lg-12">
                  <div className="advance-tab-button">
                    <ul
                      className="nav nav-tabs tab-button-style-2"
                      id="myTab-4"
                    >
                      <li>
                        <Link
                          className={
                            tab === "" ? "tab-button active" : "tab-button"
                          }
                          aria-selected={tab === "" ? "true" : "false"}
                          onClick={() => handleClick("")}
                        >
                          <span className="title" style={{ cursor: "pointer" }}>
                            See All
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            tab === "Counselling Psychologist"
                              ? "tab-button active"
                              : "tab-button"
                          }
                          id="profile-tab-4"
                          aria-selected={
                            tab === "Counselling Psychologist"
                              ? "true"
                              : "false"
                          }
                          onClick={() =>
                            handleClick("Counselling Psychologist")
                          }
                        >
                          <span className="title" style={{ cursor: "pointer" }}>
                            Counselling Psychologist
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            tab === "Clinical Psychologist"
                              ? "tab-button active"
                              : "tab-button"
                          }
                          id="contact-tab-4"
                          aria-selected={
                            tab === "Clinical Psychologist" ? "true" : "false"
                          }
                          onClick={() => handleClick("Clinical Psychologist")}
                        >
                          <span className="title" style={{ cursor: "pointer" }}>
                            Clinical Psychologist
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            tab === "Psychiatrist"
                              ? "tab-button active"
                              : "tab-button"
                          }
                          id="business-tab-4"
                          aria-selected={
                            tab === "Psychiatrist" ? "true" : "false"
                          }
                          onClick={() => handleClick("Psychiatrist")}
                        >
                          <span className="title" style={{ cursor: "pointer" }}>
                            Psychiatrist
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            tab === "Special Educator"
                              ? "tab-button active"
                              : "tab-button"
                          }
                          id="business-tab-4"
                          aria-selected={
                            tab === "Special Educator" ? "true" : "false"
                          }
                          onClick={() => handleClick("Special Educator")}
                        >
                          <span className="title" style={{ cursor: "pointer" }}>
                            Special Educator
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row--15" style={{ margin: isMobile ? 5 : 0 }}>
          <Swiper
            spaceBetween={50}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {data &&
              data.map((item) => {
                return (
                  <SwiperSlide>
                    <ProfileCardHor pageData={item} key={item._id} />{" "}
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="load-more-btn mt--60 text-center">
              <Link
                className="rbt-btn btn-gradient btn-sm hover-icon-reverse"
                to=""
              >
                <span className="icon-reverse-wrapper">
                  <Link to={"/view-all-therapist"}>
                    <span className="btn-text">Find More Experts</span>
                  </Link>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
