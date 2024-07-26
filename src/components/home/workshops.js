import "swiper/css";
import "swiper/css/pagination";
import WellNessCard from "./wellness-card";
import React from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../../utils/actions";
import { getWorkshopWebUrl } from "../../utils/url";
export default function HomeWorkshop() {
  const [data, setData] = React.useState([]);
  const [tab, setTab] = React.useState("See All");
  const handleClick = (id) => {
    setTab(id);
    getData(id);
  };

  const getData = async (tab) => {
    try {
      const res = await fetchData(getWorkshopWebUrl, {
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
    <div className="rbt-course-area bg-color-extra2 rbt-section-gap">
      <div className="container">
        <div className="row mb--60">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle bg-primary-opacity">
                Mental Health Wrokshops/Activites
              </span>
              <h2 className="title">
                {" "}
                <span className="theme-gradient">
                  Wellness Workshops by Professionals
                </span>
              </h2>
              <p>
                Join our workshops and activities designed to enhance your
                mental health and well-being. From stress management sessions to
                personal development workshops, explore a variety of
                opportunities to engage, learn, and grow.
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
                      tab === "Student Orientations"
                        ? "tab-button active"
                        : "tab-button"
                    }
                    id="contact-tab-4"
                    aria-selected={
                      tab === "Student Orientations" ? "true" : "false"
                    }
                    onClick={() => handleClick("Student Orientations")}
                  >
                    <span className="title" style={{ cursor: "pointer" }}>
                      Student Orientations
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      tab === "Workplace Training"
                        ? "tab-button active"
                        : "tab-button"
                    }
                    id="business-tab-4"
                    aria-selected={
                      tab === "Workplace Training" ? "true" : "false"
                    }
                    onClick={() => handleClick("Workplace Training")}
                  >
                    <span className="title" style={{ cursor: "pointer" }}>
                      Workplace Training
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      tab === "Therapeutic Activities"
                        ? "tab-button active"
                        : "tab-button"
                    }
                    id="business-tab-4"
                    aria-selected={
                      tab === "Therapeutic Activities" ? "true" : "false"
                    }
                    onClick={() => handleClick("Therapeutic Activities")}
                  >
                    <span className="title" style={{ cursor: "pointer" }}>
                      Therapeutic Activities
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: 20 }}>
          <div className="col-12">
            {data &&
              data.map((item) => {
                return <WellNessCard data={item} key={item._id} />;
              })}
          </div>
        </div>

        {data.length > 5 && (
          <div className="row">
            <div className="col-lg-12">
              <div className="load-more-btn mt--60 text-center">
                <Link
                  className="rbt-btn btn-gradient btn-sm hover-icon-reverse"
                  to=""
                >
                  <span className="icon-reverse-wrapper">
                    <Link to={"/all-workshop"} className="btn-text">
                      Find All Workshop
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
        )}
      </div>
    </div>
  );
}
