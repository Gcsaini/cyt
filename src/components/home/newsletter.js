import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
export default function NewsLetter() {
  const { ref, inView } = useInView({ threshold: 0 });
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);
  const [count1, setCount1] = useState(initialValue);
  const duration = 50;
  const duration1 = 2500;
  const targetValue = 1000;
  const targetValue1 = 100;

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
    let startValue = initialValue;
    const interval = Math.floor(duration1 / (targetValue1 - initialValue));

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
  }, [targetValue1, initialValue, inView]);

  return (
    <div
      className="rbt-newsletter-area newsletter-style-2 rbt-section-gap"
      ref={ref}
      style={{ background: "#134f2a" }}
    >
      <div className="container">
        <div className="row row--15 align-items-center">
          <div className="col-lg-12">
            <div className="inner text-center">
              <div className="section-title text-center">
                <span className="subtitle bg-white-opacity">
                  Get Latest Update
                </span>
                <h2 className="title color-white">
                  <strong>Subscribe</strong>
                </h2>
                <p className="description color-white mt--20">
                  Stay informed and inspired on your mental health journey.
                  Subscribe to our newsletter for expert insights, tips, and
                  updates.
                </p>
              </div>
              <form action="#" className="newsletter-form-1 mt--40">
                <input type="email" placeholder="Enter Your E-Email" />
                <button
                  type="submit"
                  className="rbt-btn btn-md btn-gradient hover-icon-reverse"
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Subscribe Our Newsletter </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </span>
                </button>
              </form>
              <span className="note-text color-white mt--20">
                Experience mental health support without the hassle.
              </span>
              <div className="row row--15 mt--50">
                <div className="col-lg-3 col-sm-6 col-md-6 single-counter offset-lg-3">
                  <div className="rbt-counterup rbt-hover-03 style-2 text-color-white">
                    <div className="inner">
                      <div className="content">
                        <h3 className="counter color-white">
                          <span className="odometer">{count}</span>
                        </h3>
                        <h5 className="title color-white">
                          Successfull Sessions
                        </h5>
                        <span className="subtitle color-white">
                          Therapy & counselling
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-6 single-counter single-counter">
                  <div className="rbt-counterup rbt-hover-03 style-2 text-color-white">
                    <div className="inner">
                      <div className="content">
                        <h3 className="counter color-white">
                          <span className="odometer">{count1}</span>
                        </h3>
                        <h5 className="title color-white">
                          Training & Wrokshops
                        </h5>
                        <span className="subtitle color-white">
                          Students & workplace
                        </span>
                      </div>
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
