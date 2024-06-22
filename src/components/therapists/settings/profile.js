import ImageTag from "../../../utils/image-tag";
import AvatarImg from "../../../assets/img/avatar-0332e4.png";
export default function Profile() {
  return (
    <div
      className="tab-pane fade active show"
      id="profile"
      role="tabpanel"
      aria-labelledby="profile-tab"
    >
      <div className="rbt-dashboard-content-wrapper">
        <div className="tutor-bg-photo bg_image bg_image--22 height-245"></div>
        <div className="rbt-tutor-information">
          <div className="rbt-tutor-information-left">
            <div className="thumbnail rbt-avatars size-lg position-relative">
              <ImageTag
                alt="Instructor"
                width="300"
                height="300"
                src={AvatarImg}
              />
              <div className="rbt-edit-photo-inner">
                <button className="rbt-edit-photo" title="Upload Photo">
                  <i className="feather-camera"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="rbt-tutor-information-right">
            <div className="tutor-btn">
              <a
                className="rbt-btn btn-sm btn-border color-white radius-round-10"
                href="/instructor/instructor-settings#"
              >
                Edit Cover Photo
              </a>
            </div>
          </div>
        </div>
      </div>
      <form action="#" className="rbt-profile-row rbt-default-form row row--15">
    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
        <div className="rbt-form-group">
            <label htmlFor="profiletype">Profile Type</label>
            <select id="profiletype">
                <option value="Counselling Psychologist">Counselling Psychologist</option>
                <option value="Clinical Psychologist">Clinical Psychologist</option>
                <option value="Psychiatrist">Psychiatrist</option>
                <option value="Special Educator">Special Educator</option>
            </select>
        </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
        <div className="rbt-form-group">
            <label htmlFor="licensenumber">License Number (if applicable)</label>
            <input id="licensenumber" type="text" value="12345" />
        </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
        <div className="rbt-form-group">
            <label htmlFor="profilename">Profile Code</label>
            <input id="profilename" type="text" value="Sam-cyt1203" />
        </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
        <div className="rbt-form-group">
            <label htmlFor="fullname">Full Name</label>
            <input id="fullname" type="text" value="Samiksha Seth" />
        </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
        <div className="rbt-form-group">
            <label htmlFor="gender">Gender</label>
            <select id="gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-binary">Non-binary</option>
                <option value="Other">Other</option>
            </select>
        </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
        <div className="rbt-form-group">
            <label htmlFor="emailaddress">Email Address</label>
            <input id="emailaddress" type="email" value="sam@gmail.com" />
        </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
        <div className="rbt-form-group">
            <label htmlFor="phonenumber">Phone Number</label>
            <input id="phonenumber" type="tel" value="+91-202-555-0174" />
        </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
        <div className="rbt-form-group">
            <label htmlFor="state">State</label>
            <select id="state">
                <option value="Uttarakhand">Uttarakhand</option>
                {/* Add other state options */}
            </select>
        </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
        <div className="rbt-form-group">
            <label htmlFor="city">City</label>
            <select id="city">
                <option value="Dehradun">Dehradun</option>
                {/* Add other city options */}
            </select>
        </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
        <div className="rbt-form-group">
            <label htmlFor="office">Office Address (if Any)</label>
            <input id="office" type="text" value="123, XYZ Street, Dehradun" />
        </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
        <div className="rbt-form-group">
            <label htmlFor="experience">Years of Experience</label>
            <select id="experience">
                <option value="1">1</option>
                <option value="2" selected>2</option>
                <option value="3">3</option>
                {/* Add more options if needed */}
            </select>
        </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
        <div className="rbt-form-group">
            <label htmlFor="services">Services Offered</label>
            <textarea id="services" cols="20" rows="2"></textarea>
        </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
        <div className="rbt-form-group">
            <label htmlFor="expertise">Areas of Expertise</label>
            <textarea id="expertise" cols="20" rows="2"></textarea>
        </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
        <div className="rbt-form-group">
            <label htmlFor="qualification">Higher Qualifications</label>
            <textarea id="qualification" cols="20" rows="2"></textarea>
        </div>
    </div>
    <div className="col-12">
        <div className="rbt-form-group">
            <label htmlFor="bio">About Me</label>
            <textarea id="bio" cols="20" rows="5">I am a dedicated Psychologist with a profound passion for mental health and well-being. With a background in psychological assessments and client progress monitoring, I specialize in providing empathetic and personalized care. My strong critical thinking skills and effective communication enable me to create a supportive environment that fosters personal growth and positive change.</textarea>
        </div>
    </div>
    <div className="col-12 mt--20">
        <div className="rbt-form-group">
            <button className="rbt-btn btn-gradient" type="submit">Update Info</button>
        </div>
    </div>
</form>

    </div>
  );
}
