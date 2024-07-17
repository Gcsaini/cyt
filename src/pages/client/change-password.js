import MyPassword from "../../components/dashboard/my-password";
import UserLayout from "../../components/dashboard/user-layout";
import MainLayout from "../../components/therapists/main-layout";

export default function ChangeMyPassword() {
  return (
    <UserLayout>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Change Password</h4>
          </div>
          <div className="tab-content">
            <MyPassword />
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
