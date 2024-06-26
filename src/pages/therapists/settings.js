import MainLayout from "../../components/therapists/main-layout";
import Password from "../../components/therapists/settings/password";
import SocialShare from "../../components/therapists/settings/social-share";
import Profile from "../../components/therapists/settings/profile";
import Availability from "../../components/therapists/settings/availability";
import Sees from "../../components/therapists/settings/sees";
import React from "react";
import { Link } from "react-router-dom";

export default function ProfileSettings() {
  const [tab, setTab] = React.useState(0);
  const style = {
    cursor: "pointer"
  };
  return (
    <MainLayout>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Edit Profile</h4>
          </div>
          <div className="advance-tab-button mb--30">
            <ul
              className="nav nav-tabs tab-button-style-2 justify-content-start"
              id="settinsTab-4"
              role="tablist"
            >
              <li>
                <Link
                  className={tab === 0 ? "tab-button active" : "tab-button"}
                  aria-selected={tab === 0 ? "true" : "false"}
                  onClick={() => setTab(0)}
                  style={style}
                >
                  <span className="title">Profile</span>
                </Link>
              </li>
              <li>
                <Link
                  className={tab === 1 ? "tab-button active" : "tab-button"}
                  aria-selected={tab === 1 ? "true" : "false"}
                  onClick={() => setTab(1)}
                  style={style}
                >
                  <span className="title">Password</span>
                </Link>
              </li>
              <li>
                <Link
                  className={tab === 2 ? "tab-button active" : "tab-button"}
                  aria-selected={tab === 2 ? "true" : "false"}
                  onClick={() => setTab(2)}
                  style={style}
                >
                  <span className="title">Offerings</span>
                </Link>
              </li>
              <li>
                <Link
                  className={tab === 3 ? "tab-button active" : "tab-button"}
                  aria-selected={tab === 3 ? "true" : "false"}
                  onClick={() => setTab(3)}
                  style={style}
                >
                  <span className="title">Availability</span>
                </Link>
              </li>
              <li>
                <Link
                  className={tab === 4 ? "tab-button active" : "tab-button"}
                  aria-selected={tab === 4 ? "true" : "false"}
                  onClick={() => setTab(4)}
                  style={style}
                >
                  <span className="title">Fees</span>
                  {/* fees section present in sees file  */}
                </Link>
              </li>
              <li>
                <Link
                  className={tab === 5 ? "tab-button active" : "tab-button"}
                  aria-selected={tab === 5 ? "true" : "false"}
                  onClick={() => setTab(5)}
                  style={style}
                >
                  <span className="title">More</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            {tab === 0 && <Profile />}
            {tab === 1 && <Password />}
            {tab === 2 && <SocialShare />}
            {tab === 3 && <Availability />}
            {tab === 4 && <Sees />}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
