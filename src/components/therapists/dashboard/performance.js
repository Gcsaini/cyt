import { FaInfoCircle } from "react-icons/fa";
import ImageTag from "../../../utils/image-tag";
import CounterImg from "../../../assets/img/counter-01.png";
import CounterImg1 from "../../../assets/img/counter-03.png";
import CounterImg2 from "../../../assets/img/card-icon-11b092.png";
import CounterImg3 from "../../../assets/img/projectscyt.png";
export default function PerformanceComponent({ pageData }) {
  const counterValueStyle = {
    fontWeight: 700,
    fontSize: "50px",
    color: "#192335",
    LineHeight: "56px",
    padding: "0 24px",
    marginBottom: "9px",
  };
  return (
    <>
      <div className="section-title">
        <h4 className="rbt-title-style-3">
          Performance &nbsp;
          <FaInfoCircle title="Short information about performance" />
          <h6>Last 28 days</h6>
        </h4>
      </div>

      <div className="row g-5">
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
          <div className="rbt-counterup rbt-hover-03">
            <div className="inner">
              <div className="icon">
                <ImageTag
                  alt="Icons Images"
                  width="100"
                  height="100"
                  src={CounterImg2}
                />
              </div>
              <div className="content">
                <span style={counterValueStyle}>
                  {pageData.appointments ? pageData.appointments.length : 0}
                </span>
                <span className="subtitle">Total Appointments</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
          <div className="rbt-counterup rbt-hover-03">
            <div className="inner">
              <div className="icon">
                <ImageTag
                  alt="Icons Images"
                  width="100"
                  height="100"
                  src={CounterImg3}
                />
              </div>
              <div className="content">
                <span style={counterValueStyle}>
                  {pageData.clients ? pageData.clients.length : 0}
                </span>
                <span className="subtitle">Total Clients</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
          <div className="rbt-counterup rbt-hover-03">
            <div className="inner">
              <div className="icon">
                <ImageTag
                  alt="Icons Images"
                  width="100"
                  height="100"
                  src={CounterImg1}
                />
              </div>
              <div className="content">
                <span style={counterValueStyle}>{pageData.workshops}</span>
                <span className="subtitle">Active Events</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
          <div className="rbt-counterup rbt-hover-03">
            <div className="inner">
              <div className="icon">
                <ImageTag
                  alt="Icons Images"
                  width="100"
                  height="100"
                  src={CounterImg}
                />
              </div>
              <div className="content">
                <span style={counterValueStyle}>
                  {pageData.revenue ? pageData.revenue.length : 0}
                </span>
                <span className="subtitle">Monthly Revenue</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
