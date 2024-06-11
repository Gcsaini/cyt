import ImageTag from "../utils/image-tag";
import MyNavbar from "../components/navbar";
import NewsLetter from "../components/home/newsletter";
import Footer from "../components/footer";
import ClientImg from "../assets/img/avatar-027dc8.png";
import Deepak from "../assets/img/counselling.png";
import ClientImg3 from "../assets/img/psychologist.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { threapistRegistrationUrl } from "../utils/url";
export default function TherapistRegistration() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [profileType, setProfileType] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async () => {
    setError("");
    if (phone.length !== 10) {
      setError("Please enter valid phone number");
      return;
    } else if (!validateEmail(email)) {
      setError("Please enter valid email id");
      return;
    } else if (!selectedFile) {
      setError("Please upload your resume");
      return;
    } else if (profileType == "") {
      setError("Please select profile type");
      return;
    } else {
      setError("");
      setLoading(true);
      const formData = new FormData();
      formData.append("resume", selectedFile);
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("type", profileType);

      try {
        const response = await axios.post(threapistRegistrationUrl, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (response.data.status) {
          setSuccess(response.data.message);
        } else {
          setError("Something went wrong");
        }
      } catch (error) {
        console.log(error);
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
      <MyNavbar />
      <div className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1 mt--60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <h2 className="title">Join <span className="theme-gradient">#ChooseYourTherapist</span> and serve professionaly with us!</h2>
                <ul className="page-list">
                  <li className="rbt-breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <div className="icon-right">
                      <i className="feather-chevron-right"></i>
                    </div>
                  </li>
                  <li className="rbt-breadcrumb-item active">
                    Join as Mental Health Expert
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rbt-banner-area rbt-banner-3 header-transperent-spacer">
        <div className="wrapper">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-7">
                <div className="banner-content">
                  <div className="inner">
                    <div className="section-title text-start">
                      <span className="subtitle bg-pink-opacity">
                        Serve with #ChooseYourTherapist
                      </span>
                    </div>
                    <h3 className="title">
                    Essential Registration Information
                    </h3>
                    <p className="description">
                    <p>Ensure a smooth registration by following our guidelines. For full details, see our <a href="#">terms and conditions here</a>.</p>
                    </p>
                    <div className="rating mb--20">
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a className="px-1" href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a className="px-1" href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                       <a className="px-1" href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                    </div>
                    <div className="rbt-like-total">
                      <div className="profile-share">
                        <a
                          href="#"
                          className="avatar"
                          data-tooltip="Psychologist"
                          tabIndex="0"
                        >
                          <ImageTag
                            alt="education"
                            width="55"
                            height="55"
                            src={ClientImg}
                          />
                        </a>
                        <a
                          href="#"
                          className="avatar"
                          data-tooltip="Psychologist"
                          tabIndex="0"
                        >
                          <ImageTag
                            alt="education"
                            width="55"
                            height="55"
                            src={ClientImg3

                            }
                          />
                        </a>
                        <a
                          href="#"
                          className="avatar"
                          data-tooltip="Counselling Psychologist"
                          tabIndex="0"
                        >
                          <ImageTag
                            alt="education"
                            width="55"
                            height="55"
                            src={Deepak}
                          />
                        </a>
                        <div className="more-author-text">
                          <h5 className="total-join-students">
                            Join Over 1000+ Experts
                          </h5>
                          <p className="subtitle">
                          Keep your practice dynamic with client's need.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="rbt-contact-form contact-form-style-1">
                  <h4 className="title">Submit Resume here !</h4>
                  <p style={{ color: "#d50000" }}>{error}</p>
                  <div className="form-group" style={{ marginBottom: 15 }}>
                    <select
                      style={{
                        padding: 0,
                        border: 0,
                        borderBottom: "2px solid #e6e3f1",
                        borderRadius: 0,
                      }}
                      value={profileType}
                      onChange={(e) => setProfileType(e.target.value)}
                    >
                      <option value={""}>Select profile type</option>
                      <option value={"Counselling Psychologist"}>
                        Counselling Psychologist
                      </option>
                      <option value={"Clinical Psychologist"}>
                        Clinical Psychologist
                      </option>
                      <option value={"Psychiatrist"}>Psychiatrist</option>
                      <option value={"Special educator"}>
                        Special educator
                      </option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <input
                      placeholder="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <input
                      name="phone"
                      placeholder="Phone"
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <input
                      className="resume-upload"
                      type="file"
                      accept=".pdf"
                      placeholder="Upload resume"
                      style={{ padding: "11px 0 0px" }}
                      onChange={handleFileChange}
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-submit-group">
                    <p style={{ color: "#b9f6ca" }}>{success}</p>
                    <button
                      onClick={handleSubmit}
                      className="rbt-btn btn-md btn-gradient radius-round w-100"
                    >
                      <span className="btn-text">
                        {loading ? "Please wait..." : "Submit"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />

      <div className="rbt-progress-parent">
        <svg
          className="rbt-back-circle svg-inner"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
        </svg>
      </div>
      <Footer />
    </>
  );
}
