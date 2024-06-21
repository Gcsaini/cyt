import MainLayout from "../../components/therapists/main-layout";
import Password from "../../components/therapists/settings/password";
import SocialShare from "../../components/therapists/settings/social-share";
import Profile from "../../components/therapists/settings/profile";
import React from "react";

export default function ProfileSettings() {
  const [tab, setTab] = React.useState(0);
  const style = {
    cursor: "pointer",
  };
  return (
    <MainLayout>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Profile Set</h4>
          </div>
          <div className="advance-tab-button mb--30">
            <ul
              className="nav nav-tabs tab-button-style-2 justify-content-start"
              id="settinsTab-4"
              role="tablist"
            >
              <li role="presentation">
                <a
                  className={tab === 0 ? "tab-button active" : "tab-button"}
                  aria-selected={tab === 0 ? "true" : "false"}
                  onClick={() => setTab(0)}
                  style={style}
                >
                  <span className="title">Profile</span>
                </a>
              </li>
              <li role="presentation">
                <a
                  className={tab === 1 ? "tab-button active" : "tab-button"}
                  aria-selected={tab === 1 ? "true" : "false"}
                  onClick={() => setTab(1)}
                  style={style}
                >
                  <span className="title">Password</span>
                </a>
              </li>
              <li role="presentation">
                <a
                  className={tab === 2 ? "tab-button active" : "tab-button"}
                  aria-selected={tab === 2 ? "true" : "false"}
                  onClick={() => setTab(2)}
                  style={style}
                >
                  <span className="title">Social Share</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            {tab === 0 && <Profile />}
            {tab === 1 && <Password />}
            {tab === 2 && <SocialShare />}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
