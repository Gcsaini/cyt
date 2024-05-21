import Header from "../components/dashboard/header";
import Footer from "../components/footer";
import MyNavbar from "../components/navbar";
import MyDashboard from "../components/dashboard/my-dashboard";
import React from "react";
import { useLoaderData } from "react-router-dom";
import PageLoading from "../components/page-loading";
import ErrorPage from "./error-page";
export default function UserDashboard() {
  const user = useLoaderData();

  if (user.isLoading) {
    return <PageLoading />;
  }

  if (user.isError) {
    return <ErrorPage />;
  }

  return (
    <div id="__next">
      <MyNavbar />
      <Header />
      <MyDashboard user={user.data} />
      <Footer />
    </div>
  );
}
