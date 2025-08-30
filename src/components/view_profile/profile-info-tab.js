import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { successColor } from "../../utils/colors";
import { getFormatsByServiceId, getServices, getValidServices } from "../../utils/helpers";
export default function ProfileInfoTab({ pageData }) {
  const [tab, setTab] = React.useState(1);
  const [services, setServices] = React.useState();
  const [formats, setFormats] = React.useState();
  const handleClick = (id) => {
    setTab(id);
  };

  const listStyle = {
    fontSize: 34,
    color: successColor,
  };

  const listStyleTime = {
    fontSize: 24,
    color: successColor,
  };

  const setConfig = async (profile) => {
    const validServices = await getValidServices(profile.fees);
    setServices(validServices);
  };

  useEffect(() => {
    setConfig(pageData);
  }, [pageData])

  return (
    <div
      className="rbt-advance-tab-area bg-color-white"
      style={{ paddingBottom: 50 }}
    >
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-10 offset-lg-1">
            <div className="advance-tab-button">
              <ul className="nav nav-tabs tab-button-style-2" id="myTab-4">
                <li>
                  <Link
                    className={tab === 1 ? "tab-button active" : "tab-button"}
                    id="home-tab-4"
                    aria-selected={tab === 1 ? "true" : "false"}
                    onClick={() => handleClick(1)}
                  >
                    <span className="title" style={{ cursor: "pointer" }}>
                      Overview
                    </span>
                  </Link>
                </li>
                <li>
                  {/* <Link
                    className={tab === 2 ? "tab-button active" : "tab-button"}
                    id="profile-tab-4"
                    aria-selected={tab === 2 ? "true" : "false"}
                    onClick={() => handleClick(2)}
                  >
                    <span className="title" style={{ cursor: "pointer" }}>
                      Location
                    </span>
                  </Link>*/}
                </li>
                <li>
                  <Link
                    className={tab === 3 ? "tab-button active" : "tab-button"}
                    id="contact-tab-4"
                    aria-selected={tab === 3 ? "true" : "false"}
                    onClick={() => handleClick(3)}
                  >
                    <span className="title" style={{ cursor: "pointer" }}>
                      Fees
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={tab === 4 ? "tab-button active" : "tab-button"}
                    id="business-tab-4"
                    aria-selected={tab === 4 ? "true" : "false"}
                    onClick={() => handleClick(4)}
                  >
                    <span className="title" style={{ cursor: "pointer" }}>
                      Availability{" "}
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-10 offset-lg-1">
            <div className="tab-content advance-tab-content-style-2">
              <div
                className={
                  tab === 1 ? "tab-pane fade active show" : "tab-pane fade"
                }
                id="home-4"
                role="tabpanel"
                aria-labelledby="home-tab-4"
              >
                <h4 className="rbt-title-style-3">About me</h4>
                <div className="content">
                  <p>{pageData.user.bio}</p>
                  <h4 className="rbt-title-style-3">Services</h4>
                  <div className="content">
                    <div className="row g-3">
                      {pageData.services.split(",").map((item, index) => {
                        return (
                          <div className="col-lg-4 col-md-6 col-12" key={item}>
                            <ul className="plan-offer-list">
                              <li>
                                <i className="feather-check"></i> &nbsp;{item}
                              </li>
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <h4 className="rbt-title-style-3" style={{ marginTop: 20 }}>
                    Expertise
                  </h4>
                  <div className="content">
                    <div className="row g-3">
                      {pageData.experties.split(",").map((item, index) => {
                        return (
                          <div className="col-lg-4 col-md-6 col-12" key={item}>
                            <ul className="plan-offer-list">
                              <li>
                                <i className="feather-check"></i> &nbsp;{item}
                              </li>
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  tab === 2 ? "tab-pane fade active show" : "tab-pane fade"
                }
                id="profile-4"
                role="tabpanel"
                aria-labelledby="profile-tab-4"
              >
                <div className="content">
                  <p>
                    Physical education ipsum dolor sit amet consectetur,
                    adipisicing elit. Tempora sequi doloremque dicta quia unde
                    odio nam minus reiciendis ullam aliquam, dolorum ab quisquam
                    cum numquam nemo iure cumque iste. Accusamus necessitatibus.
                  </p>
                </div>
              </div>
              <div
                className={
                  tab === 3 ? "tab-pane fade active show" : "tab-pane fade"
                }
                id="contact-4"
                role="tabpanel"
                aria-labelledby="contact-tab-4"
              >
                <div className="content">
                  {services && services.map((item) => {
                    return <div key={item._id}>
                      <h4 className="rbt-title-style-3" >
                       {item.name}
                      </h4>
                      <div className="col-lg-6 col-md-12 col-12">
                        <ul className="rbt-list-style-2">
                          {item.formats.map((format) => {
                            return <li key={format._id}>
                              <i className="feather-check"></i>{format.type.toUpperCase().charAt(0) + format.type.slice(1)} : ₹
                              {format.fee}
                            </li>
                          })}
                        </ul>
                      </div>
                    </div>
                  })}
                </div>
               
              </div>
              <div
                className={
                  tab === 4 ? "tab-pane fade active show" : "tab-pane fade"
                }
                id="contact-4"
                role="tabpanel"
                aria-labelledby="business-tab-4"
              >
                <div className="content">
                  {pageData.availabilities &&
                    pageData.availabilities.map((item,index) => {
                      return (
                        <div key={index} className="rbt-title-style-3">
                          <h4>{item.day}</h4>
                          {item.times.map((time,index) => {
                            return (
                              <span
                                style={{ marginRight: 40, fontSize: 16 }}
                                key={index}
                              >
                                <WatchLaterIcon style={listStyleTime} />
                                &nbsp;{time.open}-{time.close}
                              </span>
                            );
                          })}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
