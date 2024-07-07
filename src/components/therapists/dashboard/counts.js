import "./counts.css";
import { FaInfoCircle } from "react-icons/fa";

export default function TotalCounts() {
  return (
    <div className="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60">
      <div className="content">
        <div className="section-title">
          <h4 className="rbt-title-style-3">
            Performance{" "}
            <FaInfoCircle title="Short information about performance" />
            <h6>Last 28 days</h6>
          </h4>
        </div>
        <div className="row g-5">
          <div className="performance-conatiner">
            <h6>Today Appointment</h6>
            <div className="performance-two-part">
              <h4>0</h4>
              <span>-0%</span>
            </div>
            <p>from previous 28 days</p>
          </div>
          <div className="performance-conatiner">
            <h6>Total Client</h6>
            <div className="performance-two-part">
              <h4>0</h4>
              <span>-0%</span>
            </div>
            <p>from previous 28 days</p>
          </div>
          <div className="performance-conatiner">
            <h6>Total Session</h6>
            <div className="performance-two-part">
              <h4>0</h4>
              <span>+0%</span>
            </div>
            <p>from previous 28 days</p>
          </div>
          <div className="performance-conatiner">
            <h6>Total Revenue</h6>
            <div className="performance-two-part">
              <h4>0</h4>
              <span>+0%</span>
            </div>
            <p>from previous 28 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}
