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
            <label html="firstname">First Name</label>
            <input id="firstname" type="text" value="John" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="rbt-form-group">
            <label html="lastname">Last Name</label>
            <input id="lastname" type="text" value="Due" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="rbt-form-group">
            <label html="username">User Name</label>
            <input id="username" type="text" value="johndue" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="rbt-form-group">
            <label html="phonenumber">Phone Number</label>
            <input id="phonenumber" type="tel" value="+1-202-555-0174" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="rbt-form-group">
            <label html="skill">Skill/Occupation</label>
            <input id="skill" type="text" value="Full Stack Developer" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="filter-select rbt-modern-select">
            <label html="displayname" className="">
              Display name publicly as
            </label>
            <select id="displayname" className="w-100">
              <option>John Due</option>
              <option>John</option>
              <option>Due</option>
              <option>Due John</option>
              <option>johndue</option>
            </select>
          </div>
        </div>
        <div className="col-12">
          <div className="rbt-form-group">
            <label html="bio">Bio</label>
            <textarea id="bio" cols="20" rows="5">
              I'm the Front-End Developer for #Rainbow IT in Bangladesh, OR. I
              have serious passion for UI effects, animations and creating
              intuitive, dynamic user experiences.
            </textarea>
          </div>
        </div>
        <div className="col-12 mt--20">
          <div className="rbt-form-group">
            <a
              className="rbt-btn btn-gradient"
              href="/instructor/instructor-settings#"
            >
              Update Info
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
