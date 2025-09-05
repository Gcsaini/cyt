import NotifyBar from "../dashboard/notify-bar";
import FormProgressBar from "./form-progressbar";

export default function PageWrapper({ pageTitle, loading = false, buttonTitle = "", onClick, children }) {
  return (
    <>
    <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
      <div className="content">
        <div className="section-title" style={{ display: "flex", justifyContent: "space-between" }}>
          <h4 className="rbt-title-style-3">{pageTitle || ""} </h4>
          {buttonTitle && <a className="rbt-btn btn-sm" onClick={onClick}>{buttonTitle}</a>}
        </div>
        {loading ? <FormProgressBar /> : children}
        
      </div>
    </div>
    </>
  );
}
