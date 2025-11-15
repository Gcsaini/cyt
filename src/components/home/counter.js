import { useEffect, useState, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FaUsers, FaBrain, FaHeart, FaHandsHelping } from "react-icons/fa";

export default function CounterWithWhyChooseUs() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const { ref, inView } = useInView({ threshold: 0 });

  const duration = 2500; // total animation duration
  const intervalTime = 25; // interval per step

  const counters = useMemo(() => [
    { initial: 0, target: 100, icon: FaUsers, subtitle: "Listed Therapists", color: "#007f99" },
    { initial: 1800, target: 5245, icon: FaBrain, subtitle: "Wellness Counts", color: "#228756" },
    { initial: 12750, target: 11989, icon: FaHeart, subtitle: "Community Growth", color: "#004e92" },
    { initial: 1000, target: 1252, icon: FaHandsHelping, subtitle: "Valuable Words", color: "#56ab2f" },
  ], []);

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
  }, [inView, counters]);

  const fontStyle = { fontSize: isMobile ? 26 : 36 };

  return (
    <div className="rbt-counterup-why-area rbt-section-gap" ref={ref} style={{
      background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 80%, rgba(34, 135, 86, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0, 127, 153, 0.03) 0%, transparent 50%)',
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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
                        borderRadius: "20px",
                        padding: isMobile ? "24px 16px" : "30px 20px",
                        boxShadow: "0 12px 32px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.04)",
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
                        textAlign: "center",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        backdropFilter: 'blur(10px)',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.transform = 'translateY(-8px) scale(1.02)';
                        e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(0, 0, 0, 0.08)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.transform = 'translateY(0) scale(1)';
                        e.target.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.04)';
                      }}
                    >
                      {/* Decorative gradient overlay */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(135deg, ${counter.color}15 0%, transparent 70%)`,
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        pointerEvents: 'none'
                      }}></div>

                      <div
                        className="brand-icon"
                        style={{
                          width: isMobile ? 80 : 100,
                          height: isMobile ? 80 : 100,
                          borderRadius: "50%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          margin: "auto",
                          background: `linear-gradient(135deg, ${counter.color} 0%, ${counter.color}dd 100%)`,
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          boxShadow: `0 8px 24px ${counter.color}40`,
                          position: 'relative',
                          zIndex: 2
                        }}
                      >
                        <Icon style={{
                          color: "#fff",
                          fontSize: isMobile ? 28 : 36,
                          filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))'
                        }} />
                      </div>
                      <div className="content mt-3" style={{ position: 'relative', zIndex: 2 }}>
                        <h3 className="counter" style={{
                          ...fontStyle,
                          background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          fontWeight: '800',
                          letterSpacing: '-0.02em'
                        }}>
                          {values[index]}
                        </h3>
                        <span className="subtitle" style={{
                          color: '#64748b',
                          fontSize: isMobile ? '13px' : '14px',
                          fontWeight: '500',
                          marginTop: '8px',
                          display: 'block',
                          lineHeight: 1.4
                        }}>
                          {counter.subtitle}
                        </span>
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
