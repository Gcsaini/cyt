import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateUserUrl } from "../../utils/url";
import React, { useState, useRef, useEffect } from "react";
import useTherapistStore from "../../store/therapistStore";
import { postFormData } from "../../utils/actions";
import { removeToken } from "../../utils/jwt";
import DashboardTopNav from "./top-nav";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function MainLayout(props) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const { userInfo, fetchUserInfo } = useTherapistStore();
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
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

  const updateProfile = async () => {
    if (selectedImage) {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", selectedImage);
      try {
        setLoading(true);
        const response = await postFormData(updateUserUrl, formData);
        if (response.status) {
          fetchUserInfo();
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
  };

  const handleLogout = () => {
    console.log("clicked");
    removeToken();
    navigate("/login");
  };

  useEffect(() => {
    if (selectedImage) {
      updateProfile();
    }
  }, [selectedImage]);

  return (
    <>
      <DashboardTopNav />
      <div className="rbt-dashboard-area">
        <div
          className="container"
          style={{ marginTop: 100, marginBottom: 100, maxWidth: "98%" }}
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {isMobile ? (
                  <div></div>
                ) : (
                  <div className="col-lg-3">
                    <div className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
                      <div className="inner">
                        <div className="content-item-content">
                          <div className="rbt-default-sidebar-wrapper">
                            <div className="section-title mb--20">
                              <h6 className="rbt-title-style-2">
                                Welcome, {userInfo.name}
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
                                    to="/appointments"
                                  >
                                    <i className="fa-regular fa-calendar-check"></i>
                                    <span>Appointments</span>
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
                                    color: "#fff",
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
                                      currentPath === "/settings"
                                        ? "active"
                                        : ""
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
                                  <Link to={"#"} onClick={handleLogout}>
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
                )}
                <div className="col-lg-9">{props.children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
