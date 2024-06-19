export default function Header() {
  return (
    <div className="rbt-conatct-area bg-gradient-11 rbt-section-gap">
      <div className="container">
        <div className="row mt--40">
          <div className="col-lg-12">
            <div className="section-title text-center mb--60">
              <span className="subtitle bg-secondary-opacity">Contact Us</span>
              <h2 className="title">
              Get in Touch with <br />
              <span className="theme-gradient"> #ChooseYourTherapist</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row g-5">
          <div
            className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="800"
          >
            <div className="rbt-address">
              <div className="icon">
                <i className="feather-headphones"></i>
              </div>
              <div className="inner">
                <h4 className="title">Contact Phone Number</h4>
                <p>
                  <a href="/+444%20555%20666%20777">+918077757951</a>
                </p>
               
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="800"
          >
            <div className="rbt-address">
              <div className="icon">
                <i className="feather-mail"></i>
              </div>
              <div className="inner">
                <h4 className="title">Our Email Address</h4>
                <p>
                  <a href="mailto:admin@gmail.com">director@chooseyourtherapist.in</a>
                </p>
                <p>
                  <a href="mailto:admin@gmail.com">info@chooseyourtherapist.in</a>
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="800"
          >
            <div className="rbt-address">
              <div className="icon">
                <i className="feather-map-pin"></i>
              </div>
              <div className="inner">
                <h4 className="title">Our Location</h4>
                <p>
                  <a href="mailto:undefined"><span>Reg. Add. </span>
                  Laksar, Haridwar, Uttarakhand, India</a>
                </p>
                <br/>
                <p>
                  <a href="mailto:undefined"><span>Service at: </span>
                  Sec. 27 Noida, Uttar Pradesh</a>
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
