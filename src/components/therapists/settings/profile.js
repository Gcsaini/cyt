import ImageTag from "../../../utils/image-tag";
import {
  EducationList,
  ExpList,
  languageSpoken,
  sessionFormatsList,
  stateList,
} from "../../../utils/static-lists";
import React, { useState, useRef } from "react";
import { defaultProfile, updateProfile } from "../../../utils/url";
import axios from "axios";
import { errorColor, successColor } from "../../../utils/colors";
export default function Profile(props) {
  const fileInputRef = useRef(null);
  const [education, setEducation] = useState();
  const [license, setLicense] = useState();
  const [name, setName] = useState(props.data && props.data.name);
  const [phone, setPhone] = useState();
  const [bio, setBio] = useState();
  const [state, setState] = useState();
  const [gender, setGender] = useState();
  const [ofc, setOfc] = useState();
  const [exp, setExp] = useState();
  const [othEducation, setOthEducation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [languages, setLanguages] = useState([]);
  const [sessionFormats, setSessionFormats] = useState([]);

  const handleLanguages = (event) => {
    const { value, checked } = event.target;
    setLanguages((prevCheckedValues) => {
      if (checked) {
        return [...prevCheckedValues, value];
      } else {
        return prevCheckedValues.filter((v) => v !== value);
      }
    });
  };

  const handleSessionFormats = (event) => {
    const { value, checked } = event.target;
    setSessionFormats((prevCheckedValues) => {
      if (checked) {
        return [...prevCheckedValues, value];
      } else {
        return prevCheckedValues.filter((v) => v !== value);
      }
    });
  };

  const handleEducation = (e) => {
    if (e.target.value === "Other (Please specify)") {
      setOthEducation(true);
    } else {
      setOthEducation(false);
      setEducation(e.target.value);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async () => {
    setError("");
    setSuccess("");
    console.log("name", name);
    if (name === "") {
      setError("Name can not be empty");
      return;
    } else if (phone === "") {
      setError("Phone Number can not be empty");
      return;
    } else {
      setError("");
      setLoading(true);
      const formData = new FormData();
      formData.append("file", selectedImage);
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("education", education);
      formData.append("license", license);
      formData.append("bio", bio);
      formData.append("state", state);
      formData.append("gender", gender);
      formData.append("ofc", ofc);
      formData.append("exp", exp);
      formData.append("languages", languages.join(", "));
      formData.append("sessionFormats", sessionFormats.join(", "));

      try {
        setLoading(true);
        const response = await axios.post(updateProfile, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (response.data.status) {
          setSuccess(response.data.message);
          setError("");
        } else {
          setError("Something went wrong");
        }
      } catch (error) {
        setError(error.response.data.message);
      }
      setLoading(false);
    }
  };
  const selectStyle = { lineHeight: "20px", height: "50px" };
  return (
    <div
      className="tab-pane fade active show"
      id="profile"
      role="tabpanel"
      aria-labelledby="profile-tab"
    >
      <div className="rbt-dashboard-content-wrapper">
        <div className="" style={{ height: 150 }}></div>
        <div className="rbt-tutor-information">
          <div className="rbt-tutor-information-left">
            <div className="thumbnail rbt-avatars size-lg position-relative">
              <ImageTag
                alt="Instructor"
                style={{ height: 120, width: 120 }}
                src={selectedImage || defaultProfile}
              />
              <div className="rbt-edit-photo-inner">
                <button
                  className="rbt-edit-photo"
                  title="Upload Photo"
                  onClick={handleImageUpload}
                >
                  <i className="feather-camera"></i>
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
          </div>
        </div>
      </div>
      <div className="rbt-profile-row rbt-default-form row row--15">
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="rbt-form-group">
            <label htmlFor="profiletype">Profile Type</label>
            <select id="profiletype" style={selectStyle} disabled>
              <option value="Counselling Psychologist">
                Counselling Psychologist
              </option>
            </select>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="rbt-form-group">
            <label htmlFor="licensenumber">
              License Number (if applicable)
            </label>
            <input
              id="licensenumber"
              type="text"
              value={license}
              onChange={(e) => setLicense(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="rbt-form-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              id="fullname"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="rbt-form-group">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              style={selectStyle}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-binary">Non-binary</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="rbt-form-group">
            <label htmlFor="phonenumber">Phone Number</label>
            <input
              id="phonenumber"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="rbt-form-group">
            <label htmlFor="state">State</label>
            <select
              id="state"
              style={selectStyle}
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              {stateList.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="rbt-form-group">
            <label htmlFor="office">Office Address (if Any)</label>
            <input
              id="office"
              type="text"
              value={ofc}
              onChange={(e) => setOfc(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="rbt-form-group">
            <label htmlFor="experience">Years of Experience</label>
            <select
              id="experience"
              style={selectStyle}
              value={exp}
              onChange={(e) => setExp(e.target.value)}
            >
              {ExpList.map((item) => {
                return (
                  <option value={item} key={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="rbt-form-group">
            <label htmlFor="qualification">Higher Qualifications</label>
            <select
              id="qualification"
              style={selectStyle}
              onChange={(e) => handleEducation(e)}
            >
              {EducationList.map((item) => {
                return (
                  <option value={item} key={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        {othEducation && (
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="rbt-form-group">
              <label htmlFor="licensenumber">Education</label>
              <input
                id="Education"
                type="text"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
              />
            </div>
          </div>
        )}
        <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt--15 mb--15">
          <div className="rbt-form-group">
            <label htmlFor="Language">Language Spoken</label>
            <div className="row">
              {languageSpoken.map((item) => {
                return (
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12" key={item}>
                    <p className="rbt-checkbox-wrapper mb--5">
                      <input
                        id={`language-checkbox-${item}`}
                        type="checkbox"
                        value={item}
                        checked={languages.includes(item)}
                        onChange={handleLanguages}
                      />
                      <label htmlFor={`language-checkbox-${item}`}>
                        {item}
                      </label>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt--6 mb--15">
          <div className="rbt-form-group">
            <label htmlFor="session">Session Formats</label>
            <div className="row">
              {sessionFormatsList.map((item) => {
                return (
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12" key={item}>
                    <p className="rbt-checkbox-wrapper mb--5">
                      <input
                        id={`session-checkbox-${item}`}
                        type="checkbox"
                        value={item}
                        checked={sessionFormats.includes(item)}
                        onChange={handleSessionFormats}
                      />
                      <label htmlFor={`session-checkbox-${item}`}>{item}</label>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="rbt-form-group">
            <label htmlFor="bio">About Me</label>
            <textarea
              id="bio"
              cols="20"
              rows="5"
              onChange={(e) => setBio(e.target.value)}
            >
              {bio}
            </textarea>
          </div>
        </div>
        <div className="col-12">
          <span style={{ color: successColor }}>{success}</span>
          <span style={{ color: errorColor }}>{error}</span>
        </div>
        <div className="col-12 mt--20">
          <div className="rbt-form-group">
            <button className="rbt-btn btn-gradient" onClick={handleSubmit}>
              Update Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
