export default function SocialShare() {
  return (
    <div
      className="tab-pane fade active show"
      id="social"
      role="tabpanel"
      aria-labelledby="social-tab"
    >
      <form action="#" className="rbt-profile-row rbt-default-form row row--15">
        <div className="col-12">
          <div className="rbt-form-group">
            <label for="facebook">
              <i className="feather-facebook"></i> Facebook
            </label>
            <input
              id="facebook"
              type="text"
              placeholder="https://facebook.com/"
            />
          </div>
        </div>
        <div className="col-12">
          <div className="rbt-form-group">
            <label for="facebook">
              <i className="feather-facebook"></i> Instagram
            </label>
            <input
              id="facebook"
              type="text"
              placeholder="https://facebook.com/"
            />
          </div>
        </div>
        <div className="col-12">
          <div className="rbt-form-group">
            <label for="twitter">
              <i className="feather-twitter"></i> Twitter
            </label>
            <input
              id="twitter"
              type="text"
              placeholder="https://twitter.com/"
            />
          </div>
        </div>
        <div className="col-12">
          <div className="rbt-form-group">
            <label for="linkedin">
              <i className="feather-linkedin"></i> Linkedin
            </label>
            <input
              id="linkedin"
              type="text"
              placeholder="https://linkedin.com/"
            />
          </div>
        </div>
        <div className="col-12 mt--10">
          <div className="rbt-form-group">
            <a
              className="rbt-btn btn-gradient"
              href="/instructor/instructor-settings#"
            >
              Update Profile
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
