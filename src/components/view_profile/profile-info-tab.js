import React from "react";
import { Link } from "react-router-dom";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { successColor } from "../../utils/colors";
export default function ProfileInfoTab({ pageData }) {
  const [tab, setTab] = React.useState(1);
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
                  <Link
                    className={tab === 2 ? "tab-button active" : "tab-button"}
                    id="profile-tab-4"
                    aria-selected={tab === 2 ? "true" : "false"}
                    onClick={() => handleClick(2)}
                  >
                    <span className="title" style={{ cursor: "pointer" }}>
                      Location
                    </span>
                  </Link>
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
                      Business hours
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
                  <p>{pageData.bio}</p>
                  <h4 className="rbt-title-style-3">Services</h4>
                  <div className="content">
                    {pageData.services.split(",").map((item, index) => {
                      return (
                        <span style={{ marginRight: 40 }} key={item}>
                          <TrendingFlatIcon style={listStyle} />
                          &nbsp;{item}
                        </span>
                      );
                    })}
                  </div>
                  <h4 className="rbt-title-style-3" style={{ marginTop: 20 }}>
                    Expertise
                  </h4>
                  <div className="content">
                    {pageData.experties.split(",").map((item, index) => {
                      return (
                        <span style={{ marginRight: 40 }} key={item}>
                          <TrendingFlatIcon style={listStyle} />
                          &nbsp;{item}
                        </span>
                      );
                    })}
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
                  {(pageData.ica !== "" ||
                    pageData.icip !== "" ||
                    pageData.icv !== "") && (
                    <>
                      <h4 className="rbt-title-style-3">
                        Individual Counselling
                      </h4>
                      <div className="col-lg-6 col-md-12 col-12">
                        <ul className="rbt-list-style-2">
                          {pageData.ica !== "" && (
                            <li>
                              <i className="feather-check"></i>Audio : ₹
                              {pageData.ica}
                            </li>
                          )}
                          {pageData.icip !== "" && (
                            <li>
                              <i className="feather-check"></i> In-Person Call :
                              ₹{pageData.icip}
                            </li>
                          )}
                          {pageData.icv !== "" && (
                            <li>
                              <i className="feather-check"></i> Video : ₹
                              {pageData.icv}
                            </li>
                          )}
                        </ul>
                      </div>
                    </>
                  )}
                </div>
                <div className="content">
                  {(pageData.tca !== "" ||
                    pageData.tcip !== "" ||
                    pageData.tcv !== "") && (
                    <>
                      <h4 className="rbt-title-style-3">Teen Counselling</h4>
                      <div className="col-lg-6 col-md-12 col-12">
                        <ul className="rbt-list-style-2">
                          {pageData.tca !== "" && (
                            <li>
                              <i className="feather-check"></i>Audio : ₹
                              {pageData.tca}
                            </li>
                          )}
                          {pageData.tcip !== "" && (
                            <li>
                              <i className="feather-check"></i> In-Person Call :
                              ₹{pageData.tcip}
                            </li>
                          )}
                          {pageData.tcv !== "" && (
                            <li>
                              <i className="feather-check"></i> Video : ₹
                              {pageData.tcv}
                            </li>
                          )}
                        </ul>
                      </div>
                    </>
                  )}
                </div>
                <div className="content">
                  {(pageData.cca !== "" ||
                    pageData.ccip !== "" ||
                    pageData.ccv !== "") && (
                    <>
                      <h4 className="rbt-title-style-3">Couple Counselling</h4>
                      <div className="col-lg-6 col-md-12 col-12">
                        <ul className="rbt-list-style-2">
                          {pageData.cca !== "" && (
                            <li>
                              <i className="feather-check"></i>Audio : ₹
                              {pageData.cca}
                            </li>
                          )}
                          {pageData.ccip !== "" && (
                            <li>
                              <i className="feather-check"></i> In-Person Call :
                              ₹{pageData.ccip}
                            </li>
                          )}
                          {pageData.ccv !== "" && (
                            <li>
                              <i className="feather-check"></i> Video : ₹
                              {pageData.ccv}
                            </li>
                          )}
                        </ul>
                      </div>
                    </>
                  )}
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
                  {pageData.schedule &&
                    pageData.schedule.map((item) => {
                      return (
                        <div key={item.day} className="rbt-title-style-3">
                          <h4>{item.day}</h4>
                          {item.times.map((time) => {
                            return (
                              <span
                                style={{ marginRight: 40, fontSize: 16 }}
                                key={time}
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
