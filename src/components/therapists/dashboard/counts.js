import "./counts.css";
import { FaInfoCircle } from "react-icons/fa";

export default function TotalCounts() {
  return (
    <div className="rbt-dashboard-content bg-color-grey rbt-shadow-box mb--60">
      <div className="content">
        <div className="section-title">
          <h4 className="rbt-title-style-3">
            Performance{" "}
            <FaInfoCircle title="Short information about performance" />
          </h4>
          <h6>Last 28 days</h6>
        </div>
        <div className="row g-5">
          <div className="performance-conatiner">
            <h6>Reach</h6>
            <div className="performance-two-part">
              <h5>428</h5>
              <span>-36%</span>
            </div>
            <p>from previous 28 days</p>
          </div>
          <div className="performance-conatiner">
            <h6>Reach</h6>
            <div className="performance-two-part">
              <h5>428</h5>
              <span>-36%</span>
            </div>
            <p>from previous 28 days</p>
          </div>
          <div className="performance-conatiner">
            <h6>Reach</h6>
            <div className="performance-two-part">
              <h5>428</h5>
              <span>-36%</span>
            </div>
            <p>from previous 28 days</p>
          </div>
          <div className="performance-conatiner">
            <h6>Reach</h6>
            <div className="performance-two-part">
              <h5>428</h5>
              <span>-36%</span>
            </div>
            <p>from previous 28 days</p>
          </div>
          {/* <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="rbt-counterup variation-01 rbt-hover-03 rbt-border-dashed bg-primary-opacity">
              <div className="inner">
                <div className="rbt-round-icon bg-primary-opacity">
                  <i className="feather-book-open"></i>
                </div>
                <div className="content">
                  <h3 className="counter without-icon color-primary">
                    <div className="odometer odometer-auto-theme">
                      <div className="odometer-inside">
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">3</span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">0</span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </h3>
                  <span className="rbt-title-style-2 d-block">
                    Enrolled Courses
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="rbt-counterup variation-01 rbt-hover-03 rbt-border-dashed bg-secondary-opacity">
              <div className="inner">
                <div className="rbt-round-icon bg-secondary-opacity">
                  <i className="feather-monitor"></i>
                </div>
                <div className="content">
                  <h3 className="counter without-icon color-secondary">
                    <div className="odometer odometer-auto-theme">
                      <div className="odometer-inside">
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">1</span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">0</span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </h3>
                  <span className="rbt-title-style-2 d-block">
                    ACTIVE COURSES
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="rbt-counterup variation-01 rbt-hover-03 rbt-border-dashed bg-violet-opacity">
              <div className="inner">
                <div className="rbt-round-icon bg-violet-opacity">
                  <i className="feather-award"></i>
                </div>
                <div className="content">
                  <h3 className="counter without-icon color-violet">
                    <div className="odometer odometer-auto-theme">
                      <div className="odometer-inside">
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">7</span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </h3>
                  <span className="rbt-title-style-2 d-block">
                    Completed Courses
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="rbt-counterup variation-01 rbt-hover-03 rbt-border-dashed bg-pink-opacity">
              <div className="inner">
                <div className="rbt-round-icon bg-pink-opacity">
                  <i className="feather-users"></i>
                </div>
                <div className="content">
                  <h3 className="counter without-icon color-pink">
                    <div className="odometer odometer-auto-theme">
                      <div className="odometer-inside">
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">1</span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">6</span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">0</span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </h3>
                  <span className="rbt-title-style-2 d-block">
                    Total Students
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="rbt-counterup variation-01 rbt-hover-03 rbt-border-dashed bg-coral-opacity">
              <div className="inner">
                <div className="rbt-round-icon bg-coral-opacity">
                  <i className="feather-gift"></i>
                </div>
                <div className="content">
                  <h3 className="counter without-icon color-coral">
                    <div className="odometer odometer-auto-theme">
                      <div className="odometer-inside">
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">2</span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">0</span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </h3>
                  <span className="rbt-title-style-2 d-block">
                    Total Courses
                  </span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
