import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/footer";
import MyNavbar from "../components/navbar";
import NewsLetter from "../components/home/newsletter";
import { fetchData } from "../utils/actions";
import { pendingPaymentUrl } from "../utils/url";
import PageProgressBar from "../components/global/page-progress";
import { useCallback } from "react";
import PaymentPending from "../components/view_profile/payment-pending";
import { toast } from "react-toastify";

export default function PaymentPendingPage() {
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const getData = useCallback(async () => {
    try {
      const res = await fetchData(`${pendingPaymentUrl}/${id}`);

      if (res.status) {
        setData(res.data);
      } else {
        toast.error(res.message);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error(true);
    }
  }, [id]);

  useEffect(() => {
    getData();
  }, [getData]);

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
                  <li className="rbt-breadcrumb-item active">Payment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {data && Object.keys(data).length > 0 && <PaymentPending pageData={data} />}
      <NewsLetter />
      <Footer />
    </div>
  );
}
