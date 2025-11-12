import React from "react";
import Footer from "../components/footer";
import WorkshopDetail from "../components/home/workshop-detail";
import MyNavbar from "../components/navbar";
import { fetchData } from "../utils/actions";
import { getWorkshopWebUrl } from "../utils/url";
import { useParams } from "react-router-dom";
import ErrorPage from "./error-page";
import PageLoading from "../components/page-loading";

export default function WrokshopDetailPage() {
  const { id } = useParams();
  const [data, setData] = React.useState([]);
  const [workshopByThisUser, setWorkshopByThisUser] = React.useState([]);
  const [moreWorkshop, setMoreWorkshop] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const getData = async (tab) => {
    try {
      const res = await fetchData(`${getWorkshopWebUrl}/${id}`);
      if (res.status) {
        setData(res.data);
        setWorkshopByThisUser(res.workshopByThisUser);
        setMoreWorkshop(res.similarWorkshop);
      }
    } catch (err) {
      return <ErrorPage />;
    }
    setLoading(false);
  };

  React.useEffect(() => {
    getData();
  }, [getData]);
  return loading ? (
    <PageLoading />
  ) : (
    <div id="__next">
      <main className="">
        <MyNavbar />
        <main className="rbt-main-wrapper">
          {data && (
            <WorkshopDetail
              data={data}
              workshopByThisUser={workshopByThisUser}
              moreWorkshop={moreWorkshop}
            />
          )}
        </main>
        <Footer />
      </main>
    </div>
  );
}
