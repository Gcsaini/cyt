import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FaUsers, FaBrain, FaHeart, FaHandsHelping } from "react-icons/fa";

export default function CounterWithColors() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const { ref, inView } = useInView({ threshold: 0 });

  const duration = 2500;

  const counters = [
    { initial: 0, target: 100, icon: FaUsers, subtitle: "Listed Therapists", color: "#ffe0e0" },
    { initial: 1800, target: 5245, icon: FaBrain, subtitle: "Wellness Counts", color: "#e0f7ff" },
    { initial: 12750, target: 11989, icon: FaHeart, subtitle: "Community Growth", color: "#e0ffe4" },
    { initial: 1000, target: 1252, icon: FaHandsHelping, subtitle: "Valuable Words", color: "#fff0e0" },
  ];

  const [values, setValues] = useState(counters.map(c => c.initial));

  useEffect(() => {
    counters.forEach((counter, index) => {
      let startValue = counter.initial;
      const stepTime = Math.floor(duration / Math.abs(counter.target - counter.initial));
      const interval = setInterval(() => {
        if (startValue < counter.target) {
          startValue += 1;
          setValues(prev => {
            const newArr = [...prev];
            newArr[index] = startValue;
            return newArr;
          });
        } else {
          clearInterval(interval);
        }
      }, stepTime);
      return () => clearInterval(interval);
    });
  }, [inView]);

  const fontStyle = { fontSize: isMobile ? 26 : 36 };

  return (
    <div className="rbt-counterup-area bg-color-white rbt-section-gap" ref={ref}>
      <div className="conter-style-2">
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* Counters */}
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="row">
                {counters.map((counter, index) => {
                  const Icon = counter.icon;
                  return (
                    <div
                      key={index}
                      className="col-6 mb-4"
                    >
                      <div
                        className="rbt-counterup rbt-hover-03"
                        style={{
                          backgroundColor: counter.color,
                          borderRadius: "15px",
                          padding: "20px",
                          boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                          transition: "transform 0.3s, box-shadow 0.3s",
                        }}
                      >
                        <div className="inner text-center">
                          <div
                            className="brand-icon"
                            style={{
                              width: 100,
                              height: 100,
                              borderRadius: "50%",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              margin: "auto",
                              backgroundColor: "rgba(0,0,0,0.05)",
                            }}
                          >
                            <Icon style={{ color: "#007f99", fontSize: 36 }} />
                          </div>
                          <div className="content mt-2">
                            <h3 className="counter" style={fontStyle}>{values[index]}</h3>
                            <span className="subtitle">{counter.subtitle}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="inner pl--50 pl_sm--0 pl_md--0">
                <div className="section-title text-start">
                  <span className="subtitle bg-secondary-opacity">WHY CHOOSE US</span>
                  <h2 className="title">A Complete Approach to Your Well-Being</h2>
                  <p className="description has-medium-font-size mt--20 mb--0">
                    We go beyond just therapy sessions by providing client and therapist dashboards for seamless interaction,
                    holistic programs that support your overall well-being, and special discounts to make care more affordable.
                    With a trusted network of certified experts, we’re here to make your journey toward better mental health
                    easier, accessible, and more personalized.
                  </p>
                </div>
                <div className="rbt-feature-wrapper mt--30">
                  <div className="rbt-feature feature-style-1 align-items-center">
                    <div className="icon bg-primary-opacity">
                      <i className="feather-heart"></i>
                    </div>
                    <div className="feature-content">
                      <h6 className="feature-title">Affordable Wellbeing</h6>
                    </div>
                  </div>
                  <div className="rbt-feature feature-style-1 align-items-center">
                    <div className="icon bg-secondary-opacity">
                      <i className="feather-user-check"></i>
                    </div>
                    <div className="feature-content">
                      <h6 className="feature-title">Certified Therapists</h6>
                    </div>
                  </div>
                  <div className="rbt-feature feature-style-1 align-items-center">
                    <div className="icon bg-secondary-opacity">
                      <i className="feather-clipboard"></i>
                    </div>
                    <div className="feature-content">
                      <h6 className="feature-title">Personalized Dashboard</h6>
                    </div>
                  </div>
                  <div className="rbt-feature feature-style-1 align-items-center">
                    <div className="icon bg-pink-opacity">
                      <i className="feather-aperture"></i>
                    </div>
                    <div className="feature-content">
                      <h6 className="feature-title">Holistic Wellness</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Why Choose Us */}
          </div>
        </div>
      </div>
    </div>
  );
}
