import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import useMediaQuery from "@mui/material/useMediaQuery";
import WellNessCard from "./wellness-card";
import React from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../../utils/actions";
import { getWorkshopsWebUrl } from "../../utils/url";
export default function HomeWorkshop({ isWhite = false }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [data, setData] = React.useState([]);
  const [tab, setTab] = React.useState("See All");
  const handleClick = (id) => {
    setTab(id);
    getData(id);
  };

  const getData = async (tab) => {
    try {
      const res = await fetchData(getWorkshopsWebUrl, {
        category: tab === "See All" ? "" : tab,
      });
      if (res.status) {
        setData(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className={`rbt-course-area rbt-section-gap`}>
      <div className="container">
        <div className="row" style={{ marginBottom: '40px' }}>
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle">
                Mental Health Practices & Tools
              </span>
              <h2 className="title">
                Mind Matters Programs
              </h2>
              <p>
                Learn, connect, and grow with guided programs focused on building calm, clarity, and confidence.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="advance-tab-button">
              <ul className="nav nav-tabs tab-button-style-2" id="myTab-4">
                <li>
                  <Link
                    className={
                      tab === "See All" ? "tab-button active" : "tab-button"
                    }
                    id="home-tab-4"
                    aria-selected={tab === "See All" ? "true" : "false"}
                    onClick={() => handleClick("See All")}
                  >
                    <span className="title" style={{ cursor: "pointer" }}>
                      See All
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      tab === "Support Groups"
                        ? "tab-button active"
                        : "tab-button"
                    }
                    id="profile-tab-4"
                    aria-selected={tab === "Support Groups" ? "true" : "false"}
                    onClick={() => handleClick("Support Groups")}
                  >
                    <span className="title" style={{ cursor: "pointer" }}>
                      Support Groups
                    </span>
                  </Link>
                </li>
               
                <li>
                  <Link
                    className={
                      tab === "Capacity Building"
                        ? "tab-button active"
                        : "tab-button"
                    }
                    id="business-tab-4"
                    aria-selected={
                      tab === "Capacity Building" ? "true" : "false"
                    }
                    onClick={() => handleClick("Capacity Building")}
                  >
                    <span className="title" style={{ cursor: "pointer" }}>
                      Capacity Building
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      tab === "Ongoing Series"
                        ? "tab-button active"
                        : "tab-button"
                    }
                    id="business-tab-4"
                    aria-selected={
                      tab === "Ongoing Series" ? "true" : "false"
                    }
                    onClick={() => handleClick("Ongoing Series")}
                  >
                    <span className="title" style={{ cursor: "pointer" }}>
                      Ongoing Series
                    </span>
                  </Link>
                </li>
                 <li>
                  <Link
                    className={
                      tab === "Mentorship"
                        ? "tab-button active"
                        : "tab-button"
                    }
                    id="contact-tab-4"
                    aria-selected={
                      tab === "Mentorship" ? "true" : "false"
                    }
                    onClick={() => handleClick("Mentorship")}
                  >
                    <span className="title" style={{ cursor: "pointer" }}>
                     Mentorship
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {!isMobile && (
          <div className="row g-4" style={{ marginTop: 20 }}>
            {data &&
              data.slice(0, 8).map((item) => {
                return (
                  <div className="col-lg-3 col-md-6 col-12" key={item._id}>
                    <WellNessCard data={item} />
                  </div>
                );
              })}
          </div>
        )}
        {isMobile && (
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-12">
              <div className="swiper swiper-initialized swiper-horizontal viral-banner-activation rbt-arrow-between swiper-backface-hidden">
                <div className="swiper-wrapper">
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                      },
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                  >
                    {data &&
                      data.slice(0, 8).map((item) => {
                        return (
                          <SwiperSlide key={item._id}>
                            <WellNessCard data={item} />
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        )}
        {data.length > 8 && (
          <div className="row">
            <div className="col-lg-12">
              <div className="load-more-btn mt--60 text-center">
                <Link
                  className="rbt-btn btn-gradient btn-sm hover-icon-reverse"
                  to={"/all-workshop"}
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Find All Workshop</span>
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
        )}
      </div>
    </div>
  );
}
