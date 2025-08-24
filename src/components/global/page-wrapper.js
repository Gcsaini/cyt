import FormProgressBar from "./form-progressbar";

export default function PageWrapper({ pageTitle, loading = false, children }) {
  return (
    <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
      <div className="content">
        <div className="section-title">
          <h4 className="rbt-title-style-3">{pageTitle || ""}</h4>
        </div>
        {loading ? <FormProgressBar /> : children}
      </div>
    </div>
  );
}
