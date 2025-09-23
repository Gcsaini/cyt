import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FaUsers, FaBrain, FaHeart, FaHandsHelping } from "react-icons/fa";

export default function CounterWithWhyChooseUs() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const { ref, inView } = useInView({ threshold: 0 });

  const duration = 2500; // total animation duration
  const intervalTime = 25; // interval per step

  const counters = [
    { initial: 0, target: 100, icon: FaUsers, subtitle: "Listed Therapists", color: "#007f99" },
    { initial: 1800, target: 5245, icon: FaBrain, subtitle: "Wellness Counts", color: "#228756" },
    { initial: 12750, target: 11989, icon: FaHeart, subtitle: "Community Growth", color: "#004e92" },
    { initial: 1000, target: 1252, icon: FaHandsHelping, subtitle: "Valuable Words", color: "#56ab2f" },
  ];

  const [values, setValues] = useState(counters.map(c => c.initial));

  useEffect(() => {
    if (!inView) return;

    const intervals = counters.map((counter, index) => {
      const steps = Math.ceil(duration / intervalTime);
      const increment = (counter.target - counter.initial) / steps;
      let current = counter.initial;

      return setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= counter.target) || (increment < 0 && current <= counter.target)) {
          current = counter.target;
          clearInterval(intervals[index]);
        }
        setValues(prev => {
          const newArr = [...prev];
          newArr[index] = Math.round(current);
          return newArr;
        });
      }, intervalTime);
    });

    return () => intervals.forEach(clearInterval);
  }, [inView]);

  const fontStyle = { fontSize: isMobile ? 26 : 36 };

  return (
    <div className="rbt-counterup-why-area bg-color-white rbt-section-gap" ref={ref}>
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Counters */}
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="row g-4 g-lg-5 justify-content-center">
              {counters.map((counter, index) => {
                const Icon = counter.icon;
                return (
                  <div key={index} className="col-6 col-md-6 col-lg-6">
                    <div
                      className="rbt-counterup rbt-hover-03"
                      style={{
                        borderRadius: "15px",
                        padding: "20px",
                        boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                        backgroundColor: "#fff",
                        textAlign: "center",
                        transition: "transform 0.3s, box-shadow 0.3s",
                      }}
                    >
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
                          backgroundColor: counter.color,
                          transition: "transform 0.3s",
                        }}
                      >
                        <Icon style={{ color: "#fff", fontSize: 36 }} />
                      </div>
                      <div className="content mt-2">
                        <h3 className="counter" style={fontStyle}>{values[index]}</h3>
                        <span className="subtitle">{counter.subtitle}</span>
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

      {/* Micro animation hover effect */}
      <style>
        {`
          .rbt-hover-03:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 25px rgba(0,0,0,0.1);
          }

          .rbt-hover-03 .brand-icon:hover {
            transform: scale(1.1);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
          }

          @media (max-width: 767px) {
            .rbt-counterup-why-area .col-lg-6.order-1 {
              margin-bottom: 30px;
            }
          }
        `}
      </style>
    </div>
  );
}
