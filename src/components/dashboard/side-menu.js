import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../utils/auth";
export default function DashboardSideMenu(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const url = location.pathname;
  return (
    <div className="col-lg-3">
      <div className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
        <div className="inner">
          <div className="content-item-content">
            <div className="rbt-default-sidebar-wrapper">
              <div className="section-title mb--20">
                <h6 className="rbt-title-style-2">
                  Welcome, {props.user.name}
                </h6>
              </div>
              <nav className="mainmenu-nav">
                <ul className="dashboard-mainmenu rbt-default-sidebar-list nav-tabs">
                  <li className="nav-item">
                    <Link
                      className={url === -"/my-dashboard" ? "active" : ""}
                      to="/my-dashboard"
                    >
                      <i className="feather-home"></i>
                      <span>Da</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={url === "/my-profile" ? "active" : ""}
                      to="/my-profile"
                    >
                      <i className="feather-user"></i>
                      <span>My Profile</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className=""
                      href="/instructor/instructor-enrolled-course"
                    >
                      <i className="feather-book-open"></i>
                      <span>Set Appointment</span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className=""
                      to="/instructor/instructor-order-history"
                    >
                      <i className="feather-shopping-bag"></i>
                      <span>Order History</span>
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="section-title mt--40 mb--20">
                <h6 className="rbt-title-style-2">Other</h6>
              </div>
              <nav className="mainmenu-nav">
                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                  <li>
                    <Link className="" to="/instructor/instructor-settings">
                      <i className="feather-settings"></i>
                      <span>Settings</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=""
                      onClick={() => {
                        auth.clearAppStorage();
                        navigate("/auth/login");
                      }}
                    >
                      <i className="feather-log-out"></i>
                      <span>Logout</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
