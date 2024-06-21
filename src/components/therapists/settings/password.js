export default function Password() {
  return (
    <div
      className="tab-pane fade active show"
      id="password"
      role="tabpanel"
      aria-labelledby="password-tab"
    >
      <form action="#" className="rbt-profile-row rbt-default-form row row--15">
        <div className="col-12">
          <div className="rbt-form-group">
            <label for="currentpassword">Current Password</label>
            <input
              id="currentpassword"
              type="password"
              placeholder="Current Password"
            />
          </div>
        </div>
        <div className="col-12">
          <div className="rbt-form-group">
            <label for="newpassword">New Password</label>
            <input
              id="newpassword"
              type="password"
              placeholder="New Password"
            />
          </div>
        </div>
        <div className="col-12">
          <div className="rbt-form-group">
            <label for="retypenewpassword">Re-type New Password</label>
            <input
              id="retypenewpassword"
              type="password"
              placeholder="Re-type New Password"
            />
          </div>
        </div>
        <div className="col-12 mt--10">
          <div className="rbt-form-group">
            <a
              className="rbt-btn btn-gradient"
              href="/instructor/instructor-settings#"
            >
              Update Password
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
