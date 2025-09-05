import MyDashboard from "../../components/dashboard/my-dashboard";
import React from "react";
import UserLayout from "../../components/dashboard/user-layout";



export default function UserDashboard() {
  return (
    <div id="__next">
      <UserLayout>
        <MyDashboard />
      
      </UserLayout>
    </div>
  );
}
