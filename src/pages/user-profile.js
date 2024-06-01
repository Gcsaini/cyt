import Header from "../components/dashboard/header";
import Footer from "../components/footer";
import MyNavbar from "../components/navbar";
import MyProfile from "../components/dashboard/my-profile";
import request from "../utils/request";
import React from "react";
import { getUserUrl } from "../utils/url";
import auth from "../utils/auth";
export default function UserProfile() {
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
    user && (
      <div id="__next">
        <MyNavbar />
        <Header />
        <MyProfile user={user} />
        <Footer />
      </div>
    )
  );
}
