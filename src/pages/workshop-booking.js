import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/footer";
import MyNavbar from "../components/navbar";
import NewsLetter from "../components/home/newsletter";
import { fetchData } from "../utils/actions";
import { getWorkshopWebUrl } from "../utils/url";
import ErrorPage from "./error-page";
import PageProgressBar from "../components/global/page-progress";
import WorkshopCheckout from "../components/therapists/workshops/workshop-checkout";
export default function WorkshopBookingPage() {
    const { id } = useParams();
    const [data, setData] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const res = await fetchData(`${getWorkshopWebUrl}/${id}`);
            if (res.status) {
                setData(res.data);
            }
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    };

    useEffect(() => {
        getData();
    }, [id]);

    if (error) {
        return <ErrorPage />;
    }

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
                                <h2 className="title">Workshop Checkout</h2>
                                <ul className="page-list">
                                    <li className="rbt-breadcrumb-item">
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>
                                        <div className="icon-right">
                                            <i className="feather-chevron-right"></i>
                                        </div>
                                    </li>
                                    <li className="rbt-breadcrumb-item active">Checkout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {Object.keys(data).length > 0 && <WorkshopCheckout data={data} />}
            <NewsLetter />
            <Footer />
        </div>
    );
}
