import ImageTag from "../../utils/image-tag";
import profileImg from "../../assets/img/avatar-027dc8.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MyNavbar from "../../components/navbar";
import Footer from "../../components/footer";
import Banner from "./banner";
import auth from "../../utils/auth";
import { defaultProfile, getUserUrl, updateUserUrl } from "../../utils/url";
import React, { useState, useRef, useEffect } from "react";
import { fetchById } from "../../utils/actions";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
export default function MainLayout(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const [pageData, setPageData] = React.useState();
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleImageUpload = () => {
    fileInputRef.current.click();
  };

  const getData = async () => {
    const res = await fetchById(`${getUserUrl}/667d355860951ac197255a39`);
    if (res && res.status) {
      setPageData(res.data);
    }
  };

  const updateProfile = async () => {
    if (selectedImage) {
      setLoading(true);
      const formData = new FormData();
      formData.append("userId", pageData._id);
      formData.append("file", selectedImage);
      try {
        setLoading(true);
        const response = await axios.post(updateUserUrl, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        if (response.data.status) {
          getData();
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (selectedImage) {
      updateProfile();
    }
  }, [selectedImage]);

  return (
    <>
      <MyNavbar />
      <Banner />
      <div className="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-dashboard-content-wrapper">
                <div className="tutor-bg-photo bg_image bg_image--22 height-350"></div>
                <div className="rbt-tutor-information">
                  <div className="rbt-tutor-information-left">
                    <div className="thumbnail rbt-avatars size-lg position-relative">
                      {pageData ? (
                        <ImageTag
                          alt="User profile"
                          style={{ height: 120, width: 120 }}
                          src={
                            previewImage != null
                              ? previewImage
                              : pageData.profile
                          }
                        />
                      ) : (
                        <ImageTag
                          alt="User profile"
                          style={{ height: 120, width: 120 }}
                          src={defaultProfile}
                        />
                      )}
                      <div className="rbt-edit-photo-inner">
                        <button
                          className="rbt-edit-photo"
                          title="Upload Photo"
                          onClick={handleImageUpload}
                        >
                          {loading ? (
                            <Box sx={{ display: "flex" }}>
                              <CircularProgress />
                            </Box>
                          ) : (
                            <i className="feather-camera"></i>
                          )}
                        </button>
                        <input
                          type="file"
                          accept="image/*"
                          ref={fileInputRef}
                          style={{ display: "none" }}
                          onChange={handleImageChange}
                        />
                      </div>
                    </div>
                    <div className="tutor-content">
                      <h5 className="title">{pageData ? pageData.name : ""}</h5>
                      <div className="rbt-review">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="rating-count"> (15 Reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="rbt-tutor-information-right">
                    <div className="tutor-btn">
                      <Link
                        className="rbt-btn btn-md hover-icon-reverse"
                        to="#"
                      >
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">
                            Create a New Workshop
                          </span>
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
              <div className="row g-5">
                <div className="col-lg-3">
                  <div className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
                    <div className="inner">
                      <div className="content-item-content">
                        <div className="rbt-default-sidebar-wrapper">
                          <div className="section-title mb--20">
                            <h6 className="rbt-title-style-2">
                              Welcome, {pageData ? pageData.name : ""}
                            </h6>
                          </div>
                          <nav className="mainmenu-nav">
                            <ul className="dashboard-mainmenu rbt-default-sidebar-list nav-tabs">
                              <li className="nav-item">
                                <Link
                                  to={"/therapist-dashboard"}
                                  className={
                                    currentPath === "/therapist-dashboard"
                                      ? "active"
                                      : ""
                                  }
                                >
                                  <i className="feather-home"></i>
                                  <span>Dashboard</span>
                                </Link>
                              </li>

                              <li className="nav-item">
                                <Link
                                  className={
                                    currentPath ===
                                    "/instructor/instructor-profile"
                                      ? "active"
                                      : ""
                                  }
                                  to="/appointment"
                                >
                                  <i className="fa-regular fa-calendar-check"></i>
                                  <span>Appointment</span>
                                </Link>
                              </li>

                              <li className="nav-item">
                                <Link className="" to="/invoices">
                                  <i className="fa-solid fa-file-invoice"></i>
                                  <span>Invoices</span>
                                </Link>
                              </li>

                              <li className="nav-item">
                                <Link className="" to="/reviews">
                                  <i className="feather-star"></i>
                                  <span>Reviews</span>
                                </Link>
                              </li>
                            </ul>
                          </nav>
                          <div className="section-title mt--40 mb--20">
                            <h6 className="rbt-title-style-2">
                              Additional{" "}
                              <span
                                style={{
                                  backgroundColor: "rgb(250, 10, 10)",
                                  padding: "5px",
                                  borderRadius: "5px",
                                  color: "#fff"
                                }}
                              >
                                Coming soon
                              </span>
                            </h6>
                          </div>
                          <nav className="mainmenu-nav">
                            <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                              <li>
                                <Link
                                  className=""
                                  to="/instructor/instructor-personal-courses"
                                >
                                  <i className="fa-solid fa-file-medical"></i>
                                  <span>Case history</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className=""
                                  to="/instructor/instructor-announcements"
                                >
                                  <i className="fa-solid fa-place-of-worship"></i>
                                  <span>Workshop/Event</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className=""
                                  to="/instructor/instructor-announcements"
                                >
                                  <i className="fa-solid fa-blog"></i>
                                  <span>Blog</span>
                                </Link>
                              </li>
                            </ul>
                          </nav>
                          <div className="section-title mt--40 mb--20">
                            <h6 className="rbt-title-style-2">User</h6>
                          </div>
                          <nav className="mainmenu-nav">
                            <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                              <li>
                                <Link
                                  className={
                                    currentPath === "/settings" ? "active" : ""
                                  }
                                  to="/settings"
                                >
                                  <i className="feather-settings"></i>
                                  <span>Edit Profile</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className={
                                    currentPath === "/change-password"
                                      ? "active"
                                      : ""
                                  }
                                  to="/change-password"
                                >
                                  <i className="feather-settings"></i>
                                  <span>Change Password</span>
                                </Link>
                              </li>

                              <li>
                                <Link
                                  onClick={() => {
                                    auth.clearAppStorage();
                                    navigate("/login");
                                  }}
                                >
                                  <i className="feather-log-out"></i>
                                  <span>Logout</span>
                                </Link>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">{props.children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
