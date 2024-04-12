import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../utils/auth";
import request from "../utils/request";
import { redColor } from "../utils/colors";
import { isValidMail } from "../utils/validators";
import { loginUrl, registerUrl, sendOtpUrl } from "../urls";

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpView, setOtpView] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (name.length < 3 || name.length > 30) {
      setError("Please enter valid name");
      return;
    }

    if (phone.length != 10) {
      setError("Please enter valid phone number");
      return;
    }

    if (email.length < 7 || !isValidMail(email)) {
      setError("Please enter valid email address");
      return;
    }
    if (password.length < 6) {
      setError("Please enter valid password");
      return;
    }
    const value = {
      email,
      name,
    };
    setLoading(true);
    request(sendOtpUrl, { method: "POST", body: value })
      .then((response) => {
        if (!response.status) {
          setError(response.message);
        } else {
          setOtpView(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  const handleOtp = (e) => {
    e.preventDefault();
    setError("");

    if (otp.length != 6) {
      setError("Please enter valid OTP");
      return;
    }
    const value = {
      email,
      name,
      phone,
      password,
      otp,
    };
    setLoading(true);
    request(registerUrl, { method: "POST", body: value })
      .then((response) => {
        if (!response.status) {
          setError(response.message);
        } else {
          redirectUser();
        }
      })
      .catch((err) => {
        console.log(err);
        // setError(err.response.payload.error.message);
      });
    setLoading(false);
  };

  const redirectUser = () => {
    navigate(`/home`);
  };

  useEffect(() => {
    if (auth.getToken()) {
      navigate(`/home`);
    }
  }, []);
  return (
    <MDBContainer fluid className="gradient-form">
      <MDBRow>
        {otpView ? (
          <MDBCol col="6">
            <MDBContainer className="px-5">
              <div className="d-flex flex-column ms-5 px-5">
                <div className="text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    style={{ width: "185px" }}
                    alt="logo"
                  />
                  <h4 className="mt-1 mb-5 pb-1">Register Here</h4>
                </div>
                <p style={{ color: redColor }}>{error != "" ? error : ""}</p>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Enter OTP"
                  id="form1"
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />

                <div className="text-center pt-1 mb-5 pb-1">
                  <MDBBtn
                    className="mb-4 w-100 gradient-custom-2"
                    onClick={handleOtp}
                  >
                    {loading ? "Please wait" : "Sign up"}
                  </MDBBtn>
                </div>
              </div>
            </MDBContainer>
          </MDBCol>
        ) : (
          <MDBCol col="6">
            <MDBContainer className="px-5">
              <div className="d-flex flex-column ms-5 px-5">
                <div className="text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    style={{ width: "185px" }}
                    alt="logo"
                  />
                  <h4 className="mt-1 mb-5 pb-1">Register Here</h4>
                </div>
                <p style={{ color: redColor }}>{error != "" ? error : ""}</p>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Full Name"
                  id="form1"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="form1"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Phone Number"
                  id="form1"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form2"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <div className="text-center pt-1 mb-5 pb-1">
                  <MDBBtn
                    className="mb-4 w-100 gradient-custom-2"
                    onClick={handleSubmit}
                  >
                    {loading ? "Please wait" : "Send OTP"}
                  </MDBBtn>
                  <a className="text-muted" href="/auth/login">
                    Login?
                  </a>
                </div>
              </div>
            </MDBContainer>
          </MDBCol>
        )}

        <MDBCol col="6">
          <div
            className="d-flex flex-column  justify-content-center gradient-custom-2"
            style={{ height: "100vh" }}
          >
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">We are more than just a company</h4>
              <p className="small mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

// 6566cd45d980810ae4790033
