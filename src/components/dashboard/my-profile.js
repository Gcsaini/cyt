import DashboardSideMenu from "./side-menu";
import HeaderProfile from "./header-profile";
export default function MyProfile(props) {
  return (
    <div className="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <HeaderProfile user={props.user} />
            <div className="row g-5">
              <DashboardSideMenu user={props.user} />
              <div className="col-lg-9">
                <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                  <div className="content">
                    <div className="section-title">
                      <h4 className="rbt-title-style-3">My Profile</h4>
                    </div>
                    <div className="rbt-profile-row row row--15">
                      <div className="col-lg-4 col-md-4">
                        <div className="rbt-profile-content b2">
                          Registration Date
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-8">
                        <div className="rbt-profile-content b2">
                          February 25, 2025 6:01 am
                        </div>
                      </div>
                    </div>
                    <div className="rbt-profile-row row row--15 mt--15">
                      <div className="col-lg-4 col-md-4">
                        <div className="rbt-profile-content b2">Full Name</div>
                      </div>
                      <div className="col-lg-8 col-md-8">
                        <div className="rbt-profile-content b2">John</div>
                      </div>
                    </div>

                    <div className="rbt-profile-row row row--15 mt--15">
                      <div className="col-lg-4 col-md-4">
                        <div className="rbt-profile-content b2">Email</div>
                      </div>
                      <div className="col-lg-8 col-md-8">
                        <div className="rbt-profile-content b2">
                          example@gmail.com
                        </div>
                      </div>
                    </div>
                    <div className="rbt-profile-row row row--15 mt--15">
                      <div className="col-lg-4 col-md-4">
                        <div className="rbt-profile-content b2">
                          Phone Number
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-8">
                        <div className="rbt-profile-content b2">
                          +1-202-555-0174
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
