import MyDashboard from "../../components/dashboard/my-dashboard";
import React, { useState } from "react";
import UserLayout from "../../components/dashboard/user-layout";
import PageWrapper from "../../components/global/page-wrapper";
import DashboardStatics from "../../components/dashboard/dashboard-statics";
import DashInfo from "../../components/dashboard/dash-info";



export default function UserDashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <div id="__next">
      <UserLayout>
        <PageWrapper pageTitle={"My Dashboard"} loading={loading}>
          <DashboardStatics /> 
          <DashInfo/>      
        </PageWrapper>
      </UserLayout>
    </div>
  );
}
