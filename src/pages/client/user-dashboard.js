import MyDashboard from "../../components/dashboard/my-dashboard";
import React from "react";
import UserLayout from "../../components/dashboard/user-layout";
import NewsLetter from "../components/home/newsletter";
import Footer from "../components/footer";

export default function UserDashboard() {
  return (
    <div id="__next">
      <UserLayout>
        <MyDashboard />
         <NewsLetter />
  <Footer />
      </UserLayout>
    </div>
  );
}
