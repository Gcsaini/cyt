import MainLayout from "../../components/therapists/main-layout";
import Password from "../../components/therapists/settings/password";
import SocialShare from "../../components/therapists/settings/social-share";
import Profile from "../../components/therapists/settings/profile";
import Availability from "../../components/therapists/settings/availability";
import React from "react";
import { Link } from "react-router-dom";
import Fees from "../../components/therapists/settings/fees";
import { fetchById } from "../../utils/actions";
import { getTherapist } from "../../utils/url";
import PaymentDetails from "../../components/therapists/settings/paymentDetails";

export default function ProfileSettings() {
  const [tab, setTab] = React.useState(0);
  const [pageData, setPageData] = React.useState();
  const style = {
    cursor: "pointer",
  };

  const getData = async () => {
    const res = await fetchById(`${getTherapist}/66745e8460951ac197255942`);
    console.log("res", res);
    if (res && res.status) {
      setPageData(res.data);
    }
  };
  React.useEffect(() => {
    getData();
  }, []);
  console.log("p", pageData);
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
              {/* <li>
                <Link
                  className={tab === 1 ? "tab-button active" : "tab-button"}
                  aria-selected={tab === 1 ? "true" : "false"}
                  onClick={() => setTab(1)}
                  style={style}
                >
                  <span className="title">Password</span>
                </Link>
              </li> */}
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
                  <span className="title">Payment Details</span>
                </Link>
              </li>
              <li>
                <Link
                  className={tab === 6 ? "tab-button active" : "tab-button"}
                  aria-selected={tab === 6 ? "true" : "false"}
                  onClick={() => setTab(6)}
                  style={style}
                >
                  <span className="title">More</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            {tab === 0 && pageData && <Profile data={pageData} />}
            {tab === 1 && <Password />}
            {tab === 2 && <SocialShare />}
            {tab === 3 && <Availability />}
            {tab === 4 && <Fees />}
            {tab === 5 && <PaymentDetails />}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
