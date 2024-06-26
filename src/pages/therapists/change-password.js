import MainLayout from "../../components/therapists/main-layout";
import Password from "../../components/therapists/settings/password";

export default function ChangePassword() {
  return (
    <MainLayout>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Change Password</h4>
          </div>
          <div className="tab-content">
            <Password />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
