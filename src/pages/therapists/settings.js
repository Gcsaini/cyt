import MainLayout from "../../components/therapists/main-layout";
import Profile from "../../components/therapists/settings/profile";
import Availability from "../../components/therapists/settings/availability";
import PaymentDetails from "../../components/therapists/settings/payment-details";
import React from "react";
import { Link } from "react-router-dom";
import TherapistFees from "../../components/therapists/settings/therapist-fees";
import ServicesAndExperties from "../../components/therapists/settings/services-and-experties";
import useTherapistStore from "../../store/therapistStore";

export default function ProfileSettings() {
  const { therapistInfo, fetchTherapistInfo } = useTherapistStore();
  const [tab, setTab] = React.useState(0);
  const style = {
    cursor: "pointer",
  };

  const isEmpty = () => {
    return Object.values(therapistInfo).every(
      (value) => value === "" || (Array.isArray(value) && value.length === 0)
    );
  };

  React.useEffect(() => {
    if (isEmpty) {
      fetchTherapistInfo();
    }
  }, []);

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
                </Link>
              </li>
              <li>
                <Link
                  className={tab === 5 ? "tab-button active" : "tab-button"}
                  aria-selected={tab === 5 ? "true" : "false"}
                  onClick={() => setTab(5)}
                  style={style}
                >
                  <span className="title">Payments</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            {tab === 0 && <Profile />}
            {tab === 2 && <ServicesAndExperties />}
            {tab === 3 && <Availability />}
            {tab === 4 && <TherapistFees />}
            {tab === 5 && <PaymentDetails />}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
