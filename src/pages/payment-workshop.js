import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/footer";
import MyNavbar from "../components/navbar";
import NewsLetter from "../components/home/newsletter";
import { fetchData } from "../utils/actions";
import { getPaymentQrUrl } from "../utils/url";
import PageProgressBar from "../components/global/page-progress";
import { useCallback } from "react";
import PaymentPending from "../components/view_profile/payment-pending";
import { toast } from "react-toastify";
import WorkshopPaymentPending from "../components/therapists/workshops/workshop-pending-payment";

export default function PaymentWorkshopPage() {
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getData = useCallback(async () => {
    try {
      const res = await fetchData(`${getPaymentQrUrl}/${id}`);
      console.log("res",res);
      if (res.status) {
        setData(res.data);
      } else {
        setError(res.message);
        toast.error(res.message);
      }
      setLoading(false);
    } catch (err) {
      console.log("err",err);
      setError(err?.response.data.message);
      setLoading(false);
      toast.error(true);
    }
  }, [id]);

  useEffect(() => {
    getData();
  }, [getData]);

  console.log("error",error);

  return loading ? (
    <PageProgressBar />
  ) : (
    <div id="__next">
      <MyNavbar />
      <div className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1">
        <div className="container">
          <div className="row mt--60">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <h2 className="title">Payment</h2>
                <ul className="page-list">
                  <li className="rbt-breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <div className="icon-right">
                      <i className="feather-chevron-right"></i>
                    </div>
                  </li>
                  <li className="rbt-breadcrumb-item active">Workshop Payment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
       
      {data && Object.keys(data).length > 0 ? <WorkshopPaymentPending pageData={data} />:<h5 className="title mt--15" style={{color:"red",paddingLeft:"20px"}}>{error}</h5>}
      <NewsLetter />
      <Footer />
    </div>
  );
}
