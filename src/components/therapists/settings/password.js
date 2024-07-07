import React, { useState } from "react";
import { postData } from "../../../utils/actions";
import { changePasswordUrl } from "../../../utils/url";
import FormMessage from "../../global/form-message";
import FormProgressBar from "../../global/form-progressbar";
import { removeToken } from "../../../utils/jwt";
import { useNavigate } from "react-router-dom";
export default function Password() {
  const navigate = useNavigate();
  const [data, setData] = React.useState({
    password: "",
    npassword: "",
    cpassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (field, value) => {
    setData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    setError("");
    setSuccess("");

    if (data.password.length < 6) {
      setError("Please enter valid current password");
    } else if (data.npassword.length < 6 || data.cpassword.length < 6) {
      setError("Please enter valid password");
    } else if (data.npassword !== data.cpassword) {
      setError("Confirm password is not same as password");
    } else {
      setError("");
      setLoading(true);
      try {
        const response = await postData(changePasswordUrl, data);
        if (response.status) {
          setError("");
          setSuccess("Password has been changed! Redirecting to login page");
          removeToken();
          setTimeout(() => {
            navigate("/login");
          }, 5000);
        } else {
          setError("Something went wrong");
        }
      } catch (error) {
        setError(error.response.data.message);
      }
      setLoading(false);
    }
  };

  return (
    <div
      className="tab-pane fade active show"
      id="password"
      role="tabpanel"
      aria-labelledby="password-tab"
    >
      <div className="rbt-profile-row rbt-default-form row row--15">
        <div className="col-12">
          <div className="rbt-form-group">
            <label htmlFor="currentpassword">Current Password</label>
            <input
              id="currentpassword"
              type="password"
              placeholder="Current Password"
              value={data.password}
              onChange={(e) => handleChange("password", e.target.value)}
            />
          </div>
        </div>
        <div className="col-12">
          <div className="rbt-form-group">
            <label htmlFor="newpassword">New Password</label>
            <input
              id="newpassword"
              type="password"
              placeholder="New Password"
              value={data.npassword}
              onChange={(e) => handleChange("npassword", e.target.value)}
            />
          </div>
        </div>
        <div className="col-12">
          <div className="rbt-form-group">
            <label htmlFor="retypenewpassword">Re-type New Password</label>
            <input
              id="retypenewpassword"
              type="password"
              placeholder="Re-type New Password"
              value={data.cpassword}
              onChange={(e) => handleChange("cpassword", e.target.value)}
            />
          </div>
        </div>
        <FormMessage error={error} success={success} />
        <div className="col-12 mt--10">
          <div className="rbt-form-group">
            {loading ? (
              <FormProgressBar />
            ) : (
              <button className="rbt-btn btn-gradient" onClick={handleSubmit}>
                Update
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
