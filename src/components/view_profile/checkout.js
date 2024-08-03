import ProfileCheckoutCard from "./profile-checkout-card";

export default function TherapistCheckout({ profile }) {
  const styles = {
    iconStyle: {
      fontSize: 12,
      width: 20,
      height: 20,
    },
    listStyle: {
      lineHeight: "18px",
      marginBottom: 0,
    },
    selectStyle: { lineHeight: "20px", height: "50px" },
  };

  console.log("profile", profile);
  return (
    <div className="checkout_area bg-color-white rbt-section-gap">
      <div className="container">
        <div className="row g-5 checkout-form">
          <div className="col-lg-7">
            <ProfileCheckoutCard pageData={profile} />
            <div className="checkout-content-wrapper mt--20">
              <div id="billing-form">
                <h4 className="checkout-title">Billing Address</h4>
                <div className="row">
                  <div className="col-md-6 col-12 mb--10">
                    <label>First Name*</label>
                    <input
                      type="text"
                      placeholder="First Name"
                      value={profile.name}
                    />
                  </div>

                  <div className="col-md-6 col-12 mb--10">
                    <label>Phone no*</label>
                    <input type="text" placeholder="Phone number" />
                  </div>
                  <div className="col-md-6 col-12 mb--20">
                    <label htmlFor="gender">Gender</label>
                    <select
                      id="gender"
                      style={styles.selectStyle}
                      // value={therapistInfo.gender}
                      // onChange={(e) => setInfo("gender", e.target.value)}
                    >
                      <option value="" disabled selected>
                        Select
                      </option>
                      {profile.services.split(",").map((service) => {
                        return <option value={service}>{service}</option>;
                      })}
                    </select>
                  </div>
                  <div className="col-md-6 col-12 mb--20">
                    <label htmlFor="gender">For Whom</label>
                    <select
                      id="gender"
                      style={styles.selectStyle}
                      // value={therapistInfo.gender}
                      // onChange={(e) => setInfo("gender", e.target.value)}
                    >
                      <option value="" disabled selected>
                        Select
                      </option>
                      <option value="Self">Self</option>
                      <option value="For Other">For Other</option>
                    </select>
                  </div>

                  <div className="col-md-6 col-12 mb--10">
                    <label>Client Name*</label>
                    <input type="text" placeholder="Town/City" />
                  </div>
                  <div className="col-md-6 col-12 mb--10">
                    <label htmlFor="gender">Relation With Client</label>
                    <select
                      id="gender"
                      style={styles.selectStyle}
                      // value={therapistInfo.gender}
                      // onChange={(e) => setInfo("gender", e.target.value)}
                    >
                      <option value="" disabled selected>
                        Select
                      </option>
                      <option value="Self">Brother</option>
                      <option value="Sister">Sister</option>
                      <option value="Spouse">Spouse</option>
                      <option value="Mother">Mother</option>
                      <option value="Father">Father</option>
                    </select>
                  </div>
                  <div className="col-md-6 col-12 mb--10">
                    <label htmlFor="gender">Gender</label>
                    <select
                      id="gender"
                      style={styles.selectStyle}
                      // value={therapistInfo.gender}
                      // onChange={(e) => setInfo("gender", e.target.value)}
                    >
                      <option value="" disabled selected>
                        Select
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Non-binary">Non-binary</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="col-md-6 col-12 mb--10">
                    <label>Date of birth</label>
                    <input type="date" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="col-12 mb--20">
              <div className="checkout-cart-total">
                <h4 style={{ fontSize: 24 }}>Availabilities</h4>
                {profile.schedule.map((item) => {
                  return (
                    <div
                      class="single-list"
                      key={item._id}
                      style={{ marginTop: 15 }}
                    >
                      <h5 class="price-title" style={{ fontSize: "16px" }}>
                        {item.day}
                      </h5>
                      <ul
                        class="plan-offer-list"
                        style={{ borderBottom: "none", marginTop: "-10px" }}
                      >
                        {item.times.length > 0 &&
                          item.times.map((time) => {
                            return (
                              <li style={styles.listStyle} key={time._id}>
                                <i
                                  class="feather-check"
                                  style={styles.iconStyle}
                                ></i>
                                {time.open}-{time.close}
                              </li>
                              //   <li class="off"><i class="feather-x"></i> 24/7 Dedicated Support</li> for unavailable time
                            );
                          })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-12 mb--30">
              <div className="checkout-cart-total">
                <h4>
                  Product <span>Total</span>
                </h4>
                <ul>
                  <li>
                    Difficult Things About Education.<span>$300.00</span>
                  </li>
                </ul>
                <p>
                  Sub Total<span>$300.00</span>
                </p>
                <p>
                  Shipping Fee <span>$80.00</span>
                </p>
                <h4 className="mt--30">
                  Grand Total <span>$380.00</span>
                </h4>
              </div>
            </div>
            <div className="plceholder-button mt--10">
              <button className="rbt-btn btn-gradient hover-icon-reverse">
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Place order</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
