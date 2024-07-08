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
        {/* <div className="row g-5">
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
        </div> */}

        <div className="row g-5 hanger-line"><div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--60 mt_sm--60"><div className="rbt-counterup rbt-hover-03 border-bottom-gradient"><div className="top-circle-shape"></div><div className="inner"><div className="rbt-round-icon"><img alt="Icons Images" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" style={{color:"transparent"}} srcset="/_next/image?url=%2Fimages%2Ficons%2Fcounter-01.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fimages%2Ficons%2Fcounter-01.png&amp;w=128&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Ficons%2Fcounter-01.png&amp;w=128&amp;q=75"/></div><div className="content"><h3 className="counter"><span className="odometer"><div className="odometer odometer-auto-theme"><div className="odometer-inside"><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">5</span></span></span></span></span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">0</span></span></span></span></span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">0</span></span></span></span></span></div></div></span></h3><span className="subtitle">Learners &amp; counting</span></div></div></div></div><div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--60 mt_md--30 mt_sm--30 mt_mobile--60"><div className="rbt-counterup rbt-hover-03 border-bottom-gradient"><div className="top-circle-shape"></div><div className="inner"><div className="rbt-round-icon"><img alt="Icons Images" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" style={{color:"transparent"}} srcset="/_next/image?url=%2Fimages%2Ficons%2Fcounter-02.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fimages%2Ficons%2Fcounter-02.png&amp;w=128&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Ficons%2Fcounter-02.png&amp;w=128&amp;q=75" /></div><div className="content"><h3 className="counter"><span className="odometer"><div className="odometer odometer-auto-theme"><div className="odometer-inside"><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">8</span></span></span></span></span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">0</span></span></span></span></span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">0</span></span></span></span></span></div></div></span></h3><span className="subtitle">Courses &amp; Video</span></div></div></div></div><div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--60 mt_sm--60"><div className="rbt-counterup rbt-hover-03 border-bottom-gradient"><div className="top-circle-shape"></div><div className="inner"><div className="rbt-round-icon"><img alt="Icons Images" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" style={{color:"transparent"}} srcset="/_next/image?url=%2Fimages%2Ficons%2Fcounter-03.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fimages%2Ficons%2Fcounter-03.png&amp;w=128&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Ficons%2Fcounter-03.png&amp;w=128&amp;q=75"/></div><div className="content"><h3 className="counter"><span className="odometer"><div className="odometer odometer-auto-theme"><div className="odometer-inside"><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">1</span></span></span></span></span><span className="odometer-formatting-mark">,</span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">0</span></span></span></span></span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">0</span></span></span></span></span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">0</span></span></span></span></span></div></div></span></h3><span className="subtitle">Certified Students</span></div></div></div></div><div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--60 mt_md--30 mt_sm--30 mt_mobile--60"><div className="rbt-counterup rbt-hover-03 border-bottom-gradient"><div className="top-circle-shape"></div><div className="inner"><div className="rbt-round-icon"><img alt="Icons Images" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" style={{color:"transparent"}} srcset="/_next/image?url=%2Fimages%2Ficons%2Fcounter-04.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fimages%2Ficons%2Fcounter-04.png&amp;w=128&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Ficons%2Fcounter-04.png&amp;w=128&amp;q=75" /></div><div className="content"><h3 className="counter"><span className="odometer"><div className="odometer odometer-auto-theme"><div className="odometer-inside"><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">1</span></span></span></span></span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">0</span></span></span></span></span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">0</span></span></span></span></span></div></div></span></h3><span className="subtitle">Registered Enrolls</span></div></div></div></div></div>
      
      </div>
    </div>
  );
}
