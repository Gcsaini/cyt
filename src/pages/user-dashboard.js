import Header from "../components/dashboard/header";
import Footer from "../components/footer";
import MyNavbar from "../components/navbar";
import MyDashboard from "../components/dashboard/my-dashboard";
import request from "../utils/request";
import React from "react";
import { getUserUrl } from "../utils/url";
import auth from "../utils/auth";
import { Suspense } from "react";
import PageLoading from "../components/page-loading";
export default function UserDashboard() {
  const [user, setUser] = React.useState();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    function getUser() {
      setLoading(true);
      request(`${getUserUrl}/${auth.getUserInfo().id}`, { method: "GET" })
        .then((response) => {
          setLoading(false);
          setUser(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getUser();
  }, []);

  return (
    <Suspense fallback={<PageLoading />}>
      {loading ? (
        <PageLoading />
      ) : (
        user && (
          <div id="__next">
            <MyNavbar />
            <Header />
            <MyDashboard user={user} />
            <Footer />
          </div>
        )
      )}
    </Suspense>
  );
}
