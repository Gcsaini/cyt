import {
  EducationList,
  ExpList,
  languageSpoken,
  sessionFormatsList,
  stateList,
} from "../../../utils/static-lists";
import React, { useState, useRef, useEffect } from "react";
import { updateProfileUrl, updateUserUrl } from "../../../utils/url";
import ImageTag from "../../../utils/image-tag";
import { postData, postFormData } from "../../../utils/actions";
import FormMessage from "../../global/form-message";
import FormProgressBar from "../../global/form-progressbar";
import useTherapistStore from "../../../store/therapistStore";
export default function Profile(props) {
  const { userInfo, fetchUserInfo } = useTherapistStore();
  const { data } = props;
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [education, setEducation] = useState(data.qualification || "");
  const [license, setLicense] = useState(data.license_number || "");
  const [name, setName] = useState(data.name || "");
  const [phone, setPhone] = useState(data.phone || "");
  const [bio, setBio] = useState(data.bio || "");
  const [state, setState] = useState(data.state || "Select");
  const [gender, setGender] = useState(data.gender || "Select");
  const [ofc, setOfc] = useState(data.office_address || "");
  const [exp, setExp] = useState(data.year_of_exp || "Select");
  const [othEducation, setOthEducation] = useState(
    !EducationList.some((qualification) => data.qualification === qualification)
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [languages, setLanguages] = useState(
    data.language_spoken
      ? data.language_spoken.split(",").map((item) => item.trim())
      : []
  );
  const [sessionFormats, setSessionFormats] = useState(
    data.session_formats
      ? data.session_formats.split(",").map((item) => item.trim())
      : []
  );

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
      setEducation(e.target.value);
      setOthEducation(true);
    } else {
      setOthEducation(false);
      setEducation(e.target.value);
    }
  };

  const handleSubmit = async () => {
    setError("");
    setSuccess("");
    if (name === "") {
      setError("Name can not be empty");
      return;
    } else if (phone === "") {
      setError("Phone Number can not be empty");
      return;
    } else {
      setError("");
      setLoading(true);
      const data = {
        name: name,
        phone: phone,
        qualification: education,
        license_number: license,
        bio: bio,
        state: state,
        gender: gender,
        office_address: ofc,
        year_of_exp: exp,
        language_spoken: languages.join(", "),
        session_formats: sessionFormats.join(", "),
      };

      try {
        setLoading(true);
        const response = await postData(updateProfileUrl, data);
        if (response.status) {
          setSuccess(response.message);
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

  useEffect(() => {
    if (selectedImage) {
      updateProfile(); // Call updateProfile when selectedImage changes
    }
  }, [selectedImage]);

  const selectStyle = { lineHeight: "20px", height: "50px" };
  return (
    <div
      className="tab-pane fade active show"
      id="profile"
      role="tabpanel"
      aria-labelledby="profile-tab"
    >
      <div className="rbt-dashboard-content-wrapper">
        <div
          className="tutor-bg-photo bg_image bg_image_dash"
          style={{ height: 200 }}
        ></div>
        <div className="rbt-tutor-information">
          <div className="rbt-tutor-information-left">
            <div className="thumbnail rbt-avatars size-lg position-relative">
              <ImageTag
                alt="User profile"
                style={{ height: 120, width: 120 }}
                src={previewImage != null ? previewImage : userInfo.profile}
              />
              <div className="rbt-edit-photo-inner">
                <button
                  className="rbt-edit-photo"
                  title="Upload Photo"
                  onClick={handleImageUpload}
                >
                  {loading ? (
                    <FormProgressBar />
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
              <h5 className="title">{userInfo.name}</h5>
              <div className="rbt-review">
                <h6 className="title">{userInfo.email}</h6>
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
              <option value="">Select</option>
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
                  <option key={item == "Select" ? "" : item} value={item}>
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
                  <option value={item == "Select" ? "" : item} key={item}>
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
              value={education}
              onChange={(e) => handleEducation(e)}
            >
              {EducationList.map((item) => {
                return (
                  <option value={item == "Select" ? "" : item} key={item}>
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
                  <div class="react-select css-b62m3t-container"><span id="react-select-sortByAuthor-live-region" class="css-7pg0cj-a11yText"></span><span aria-live="polite" aria-atomic="false" aria-relevant="additions text" role="log" class="css-7pg0cj-a11yText"></span><div class="react-select__control css-13cymwt-control"><div class="react-select__value-container react-select__value-container--is-multi css-hlgwow"><div class="react-select__placeholder css-1jqq78o-placeholder" id="react-select-sortByAuthor-placeholder">Select...</div><div class="react-select__input-container css-19bb58m" data-value=""><input class="react-select__input" autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-sortByAuthor-input" spellcheck="false" tabindex="0" type="text" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" aria-activedescendant="" aria-describedby="react-select-sortByAuthor-placeholder" value="" style="color: inherit; background: 0px center; opacity: 1; width: 100%; grid-area: 1 / 2; font: inherit; min-width: 2px; border: 0px; margin: 0px; outline: 0px; padding: 0px;"/></div></div><div class="react-select__indicators css-1wy0on6"><span class="react-select__indicator-separator css-1u9des2-indicatorSeparator"></span><div class="react-select__indicator react-select__dropdown-indicator css-1xc3v61-indicatorContainer" aria-hidden="true"><svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg></div></div></div></div>
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
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </div>
        </div>
        <FormMessage error={error} success={success} />
        <div className="col-12 mt--20">
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
