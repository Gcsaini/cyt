import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isValidMail } from "../utils/validators";
import { registerUrl, verifyOtpUrl } from "../utils/url";
import Footer from "../components/footer";
import NewsLetter from "../components/home/newsletter";
import MyNavbar from "../components/navbar";
import ClientImg from "../assets/img/avatar-027dc8.png";
import Fabiha from "../assets/img/psychologist.png";
import ClientImg3 from "../assets/img/counselling.png";
import ImageTag from "../utils/image-tag";
import FormProgressBar from "../components/global/form-progressbar";
import FormMessage from "../components/global/form-message";
import { getDecodedToken, setToken } from "../utils/jwt";
import { postData } from "../utils/actions";
export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpView, setOtpView] = useState(false);
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError("");
    setSuccess("");
    if (name.length < 3 || name.length > 30) {
      setError("Please enter valid name");
      return;
    }

    if (phone.length !== 10) {
      setError("Please enter valid phone number");
      return;
    }

    if (email.length < 7 || !isValidMail(email)) {
      setError("Please enter valid email address");
      return;
    }
  
    const value = {
      email,
      name,
      phone,
    };
    try {
      setLoading(true);
      const response = await postData(registerUrl, value);
      if (response.status) {
        setSuccess(response.message);
        setOtpView(true);
        setError("");
      } else {
        setError(response.message);
      }
    } catch (error) {
      setError(error.response.data.message);
    }
    setLoading(false);
  };

  const handleOtp = async () => {
    setError("");

    if (otp.length !== 6) {
      setError("Please enter valid OTP");
      return;
    }
    const value = {
      email,
      otp,
    };
    try {
      setLoading(true);
      const response = await postData(verifyOtpUrl, value);
      if (response.status) {
        setSuccess(response.message);
        setError("");
        setOtp("");
        setToken(response.token);
        navigate("/my-dashboard");
      } else {
        setError("Something went wrong");
      }
    } catch (error) {
      setSuccess("");
      setError(error.response.data.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    const data = getDecodedToken();
    if (data) {
      if (data.role === 1) {
        navigate("/therapist-dashboard");
      } else {
        navigate(`/my-dashboard`);
      }
    }
  }, []);
  return (
    <div>
      <MyNavbar />
      <div className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1">
        <div className="container mt--60">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                  <h2 className="title">
                 The Right Therapist, 
                  <span className="theme-gradient"> Just for You</span>
              
                </h2>
                <ul className="page-list">
                  <li className="rbt-breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <div className="icon-right">
                      <i className="feather-chevron-right"></i>
                    </div>
                  </li>
                  <li className="rbt-breadcrumb-item active">Register</li>
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
                        Discover Mental Health Experts
                      </span>
                    </div>
                   <h1 className="title"> Because healing starts with your choice..</h1>
                                       <p className="description">
                                         Log in to access personalized support and manage
                                         appointments effortlessly. Track your mental health
                                         journey with ease and stay connected for continuous
                                         well-being.
                                       </p>
                                       <div className="rbt-like-total">
                                         <div className="profile-share">
                                           <Link
                                             to="#"
                                             className="avatar"
                                             data-tooltip="Counselling Psychologist"
                                             tabIndex="0"
                                           >
                                             <ImageTag
                                               alt="education"
                                               width="55"
                                               height="55"
                                               src={ClientImg}
                                             />
                                           </Link>
                                           <Link
                                             to="#"
                                             className="avatar"
                                             data-tooltip="Psychologist"
                                             tabIndex="0"
                                           >
                                             <ImageTag
                                               alt="education"
                                               width="55"
                                               height="55"
                                               src={Fabiha}
                                             />
                                           </Link>
                                           <Link
                                             to="#"
                                             className="avatar"
                                             data-tooltip="Counselling Psychologist"
                                             tabIndex="0"
                                           >
                                             <ImageTag
                                               alt="education"
                                               width="55"
                                               height="55"
                                               src={ClientImg3}
                                             />
                                           </Link>
                                           <div className="more-author-text">
                                             <h5 className="total-join-students">
                                                5,245+ people have already found their path to well-being.
                                             </h5>
                                             <p className="subtitle">Your well-being awaits.</p>
                                           
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                {otpView ? (
                  <div className="rbt-contact-form contact-form-style-1">
                    <h3 className="title">Verify Account</h3>
                    <FormMessage error={error} success={success} />
                    <div id="contact-form">
                      <div className="form-group">
                        <input
                          placeholder="Enter OTP"
                          type="text"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                        />
                        <span className="focus-border"></span>
                      </div>

                      <div className="form-submit-group">
                        {loading ? (
                          <FormProgressBar />
                        ) : (
                          <button
                            onClick={handleOtp}
                            type="submit"
                            className="rbt-btn btn-md btn-gradient hover-icon-reverse radius-round w-100 mt--15"
                          >
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">Verify OTP</span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right"></i>
                              </span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right"></i>
                              </span>
                            </span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="rbt-contact-form contact-form-style-1">
                    <h3 className="title">Register as User</h3>
                    <FormMessage error={error} success={success} />
                    <div id="contact-form">
                      <div className="form-group">
                        <input
                          placeholder="Full Name"
                          type="text"
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
                          placeholder="Phone"
                          type="text"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                        <span className="focus-border"></span>
                      </div>
                      <div
                        className="rbt-lost-password text-end"
                        style={{ marginBottom: 15 }}
                      >
                        <Link className="rbt-btn-link" to="/login">
                          Already have an account ?
                        </Link>
                      </div>
                      <div className="form-submit-group">
                        {loading ? (
                          <FormProgressBar />
                        ) : (
                          <button
                            onClick={handleSubmit}
                            type="submit"
                            className="rbt-btn btn-md btn-gradient hover-icon-reverse radius-round w-100"
                          >
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">Sign In</span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right"></i>
                              </span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right"></i>
                              </span>
                            </span>
                          </button>
                        )}
                      </div>
                      <div
                        className="rbt-lost-password text-end"
                        style={{ marginBottom: 15 }}
                      >
                        <Link
                          className="rbt-btn-link"
                          to="/therapist-registration"
                        >
                          Are you a therapist?
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
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
    </div>
  );
}
