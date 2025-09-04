import { Link } from "react-router-dom";

export default function PageBreadCrumb({ title = "", linkTitle = "" }) {
    return <div className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1">
        <div className="container">
            <div className="row mt--60">
                <div className="col-lg-12">
                    <div className="breadcrumb-inner text-center">
                        <h2 className="title">{title}</h2>
                        <ul className="page-list mb--20">
                            <li className="rbt-breadcrumb-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <div className="icon-right">
                                    <i className="feather-chevron-right"></i>
                                </div>
                            </li>
                            <li className="rbt-breadcrumb-item active">{linkTitle}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
}