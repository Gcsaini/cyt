import { Link } from "react-router-dom";

export default function AboutCyt() {
  return (
    <>
      <style>{`
        .rbt-about-area {
          padding: 100px 20px;
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.08);
          position: relative;
          overflow: hidden;
        }

        /* subtle decorative shape */
        .rbt-about-area::before {
          content: '';
          position: absolute;
          top: -50px;
          right: -50px;
          width: 150px;
          height: 150px;
          background: rgba(34,197,94,0.08);
          border-radius: 50%;
        }

        .rbt-about-area .title {
          font-size: 36px; /* बड़ा heading */
          font-weight: 700;
          color: #111;
          line-height: 1.3;
          margin-bottom: 25px;
        }

        .rbt-about-area p {
          font-size: 16px;
          line-height: 1.8;
          color: #444;
          text-align: justify; /* aligned paragraph */
        }

        .readmore-btn .rbt-moderbt-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 25px;
          background: #22c55e;
          color: #fff;
          font-weight: 600;
          border-radius: 10px;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .readmore-btn .rbt-moderbt-btn:hover {
          background: #16a34a;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(34,197,94,0.3);
        }

        /* Mobile */
        @media (max-width: 767px) {
          .rbt-about-area {
            padding: 60px 15px;
          }

          .rbt-about-area .title {
            font-size: 26px;
            line-height: 1.4;
          }

          .rbt-about-area p {
            font-size: 15px;
            line-height: 1.6;
          }

          .readmore-btn .rbt-moderbt-btn {
            padding: 10px 20px;
            font-size: 14px;
          }
        }
      `}</style>

      <div className="rbt-about-area about-style-1 bg-color-extra2 rbt-section-gap">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-6">
              <div className="content">
                <h2
                  className="title mb--0 sal-animate"
                  data-sal="slide-up"
                  data-sal-duration="700"
                >
                  Therapists Who Care, A Platform That Connects You to the Right Support at the Right Time
                </h2>
              </div>
            </div>
            <div
              className="col-lg-6 sal-animate"
              data-sal="slide-up"
              data-sal-duration="700"
            >
              <p className="mb--40 mb_sm--20">
                Choose Your Therapist LLP was born out of an idea during the COVID-19 pandemic in 2020, when the need for accessible and trusted mental health care became more evident than ever. What began as a simple initiative through an Instagram page and late-night website experiments gradually took shape into a structured platform.
                On 16th July 2021, Choose Your Therapist LLP was officially incorporated, making the vision a registered reality. Today, CYT operates under the legal frameworks of the Ministry of Corporate Affairs (MCA) and MSME (Micro, Small, and Medium Enterprises).
                Rather than being “just a platform,” Choose Your Therapist is a continuing journey — connecting individuals with mental health professionals, fostering awareness, and creating safe spaces where therapy is approachable and trusted.
              </p>
              <div className="readmore-btn">
                <Link
                  style={{ cursor: "pointer" }}
                  className="rbt-moderbt-btn"
                  to={"/therapist-registration"}
                >
                  <span className="moderbt-btn-text">Join us</span>
                  <i className="feather-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
