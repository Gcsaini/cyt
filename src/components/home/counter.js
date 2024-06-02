import { useEffect, useState } from "react";
import CounterImg from "../../assets/img/counter-01.png";
import CounterImg2 from "../../assets/img/counter-02.png";
import CounterImg3 from "../../assets/img/counter-03.png";
import CounterImg4 from "../../assets/img/counter-04.png";
import LazyImage from "../../utils/lazy-image";
import { useInView } from "react-intersection-observer";
export default function Counter() {
  const { ref, inView } = useInView({ threshold: 0 });
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);
  const [count1, setCount1] = useState(initialValue);
  const [count2, setCount2] = useState(initialValue);
  const [count3, setCount3] = useState(initialValue);
  const duration = 2500;
  const targetValue = 50;
  const initialValue1 = 1800;
  const targetValue1 = 2000;
  const initialValue2 = 12750;
  const targetValue2 = 13000;
  const initialValue3 = 1000;
  const targetValue3 = 1200;
  useEffect(() => {
    let startValue = initialValue;
    const interval = Math.floor(duration / (targetValue - initialValue));

    const counter = setInterval(() => {
      startValue += 1;
      setCount(startValue);
      if (startValue >= targetValue) {
        clearInterval(counter);
      }
    }, interval);

    return () => {
      clearInterval(counter);
    };
  }, [targetValue, initialValue, inView]);

  useEffect(() => {
    let startValue = initialValue1;
    const interval = Math.floor(duration / (targetValue1 - initialValue1));

    const counter = setInterval(() => {
      startValue += 1;
      setCount1(startValue);
      if (startValue >= targetValue1) {
        clearInterval(counter);
      }
    }, interval);

    return () => {
      clearInterval(counter);
    };
  }, [targetValue1, initialValue1, inView]);

  useEffect(() => {
    let startValue = initialValue2;
    const interval = Math.floor(duration / (targetValue2 - initialValue2));

    const counter = setInterval(() => {
      startValue += 1;
      setCount2(startValue);
      if (startValue >= targetValue2) {
        clearInterval(counter);
      }
    }, interval);

    return () => {
      clearInterval(counter);
    };
  }, [targetValue2, initialValue2, inView]);

  useEffect(() => {
    let startValue = initialValue3;
    const interval = Math.floor(duration / (targetValue3 - initialValue3));

    const counter = setInterval(() => {
      startValue += 1;
      setCount3(startValue);
      if (startValue >= targetValue3) {
        clearInterval(counter);
      }
    }, interval);

    return () => {
      clearInterval(counter);
    };
  }, [targetValue3, initialValue3, inView]);

  return (
    <div
      className="rbt-counterup-area bg-color-white rbt-section-gap"
      ref={ref}
    >
      <div className="conter-style-2">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="row row--30">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="rbt-counterup rbt-hover-03">
                    <div className="inner">
                      <div className="icon">
                        <LazyImage alt="Icons" dim={"100"} src={CounterImg} />
                      </div>
                      <div className="content">
                        <h3 className="counter">
                          <span className="odometer">
                            <div className="odometer odometer-auto-theme">
                              <div className="odometer-inside">
                                <span className="odometer-digit">{count}</span>
                              </div>
                            </div>
                          </span>
                        </h3>
                        <span className="subtitle">Mental Health Experts</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--60">
                  <div className="rbt-counterup rbt-hover-03">
                    <div className="inner">
                      <div className="icon">
                        <LazyImage alt="Icons" dim={"100"} src={CounterImg2} />
                      </div>
                      <div className="content">
                        <h3 className="counter">
                          <span className="odometer">
                            <div className="odometer odometer-auto-theme">
                              <div className="odometer-inside">
                                <span className="odometer-digit">{count1}</span>
                              </div>
                            </div>
                          </span>
                        </h3>
                        <span className="subtitle">Completed Sessions</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--40">
                  <div className="rbt-counterup rbt-hover-03">
                    <div className="inner">
                      <div className="icon">
                        <LazyImage alt="Icons" dim={"100"} src={CounterImg3} />
                      </div>
                      <div className="content">
                        <h3 className="counter">
                          <span className="odometer">
                            <div className="odometer odometer-auto-theme">
                              <div className="odometer-inside">
                                <span className="odometer-digit">{count2}</span>
                              </div>
                            </div>
                          </span>
                        </h3>
                        <span className="subtitle">
                          Social Media Connections
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--60 mt_mobile--40">
                  <div className="rbt-counterup rbt-hover-03">
                    <div className="inner">
                      <div className="icon">
                        <LazyImage alt="Icons" dim={"100"} src={CounterImg4} />
                      </div>
                      <div className="content">
                        <h3 className="counter">
                          <span className="odometer">
                            <div className="odometer odometer-auto-theme">
                              <div className="odometer-inside">
                                <span className="odometer-digit">{count3}</span>
                              </div>
                            </div>
                          </span>
                        </h3>
                        <span className="subtitle">Valueable Feedbacks</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="inner pl--50 pl_sm--0 pl_md--0">
                <div className="section-title text-start">
                  <span className="subtitle bg-secondary-opacity">
                    WHY CHOOSE US
                  </span>
                  <h2 className="title">
                    Providing A Network of Mental health Experts
                  </h2>
                  <p className="description has-medium-font-size mt--20 mb--0">
                    From individual to group counseling, we offer a wide range
                    of services to address various mental health issues. Our
                    goal is to provide you with comprehensive care that supports
                    your overall well-being.
                  </p>
                </div>
                <div className="rbt-feature-wrapper mt--30">
                  <div className="rbt-feature feature-style-1 align-items-center">
                    <div className="icon bg-primary-opacity">
                      <i
                        className="feather-heart"
                        style={{ color: "#1a8a16 " }}
                      ></i>
                    </div>
                    <div className="feature-content">
                      <h6 className="feature-title">Affordable Sessions</h6>
                    </div>
                  </div>
                  <div className="rbt-feature feature-style-1 align-items-center">
                    <div className="icon bg-secondary-opacity">
                      <i className="feather-user-check"
                      style={{ color: "#1a8a16 " }}
                     ></i>
                    </div>
                    <div className="feature-content">
                      <h6 className="feature-title">Supportive Experts</h6>
                    </div>
                  </div>
                  <div className="rbt-feature feature-style-1 align-items-center">
                    <div className="icon bg-secondary-opacity">
                      <i className="feather-clipboard"
                        style={{ color: "#1a8a16 " }}
                        ></i>
                    </div>
                    <div className="feature-content">
                      <h6 className="feature-title">Personalized Space</h6>
                    </div>
                  </div>
                  <div className="rbt-feature feature-style-1 align-items-center">
                    <div className="icon bg-pink-opacity">
                      <i className="feather-aperture"
                      style={{ color: "#1a8a16 " }}
                        ></i>
                    </div>
                    <div className="feature-content">
                      <h6 className="feature-title">
                       Holistic Wellness
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
