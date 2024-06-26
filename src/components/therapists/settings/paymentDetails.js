import React, { useState } from "react";

export default function PaymentDetails() {
  const [details, setDetails] = useState({
    accountName: "",
    accountNumber: "",
    retypeAccountNumber: "",
    ifsc: "",
    upiId: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };
  console.log(details);

  return (
    <div
      className="tab-pane fade active show"
      id="password"
      role="tabpanel"
      aria-labelledby="password-tab"
    >
      <form action="#" className="rbt-profile-row rbt-default-form row row--15">
        <div className="col-12">
          <div className="rbt-form-group">
            <label for="currentpassword">Bank Account Name</label>
            <input
              id="currentpassword"
              type="text"
              name="accountName"
              value={details.accountName}
              onChange={handleChange}
              placeholder="Bank Account Name"
            />
          </div>
        </div>
        <div className="col-12">
          <div className="rbt-form-group">
            <label for="newpassword">Account Number</label>
            <input
              id="newpassword"
              type="text"
              name="accountNumber"
              value={details.accountNumber}
              onChange={handleChange}
              placeholder="Account Number"
            />
          </div>
        </div>
        <div className="col-12">
          <div className="rbt-form-group">
            <label for="retypenewpassword">Re-type Account Number</label>
            <input
              id="retypenewpassword"
              type="text"
              name="retypeAccountNumber"
              value={details.retypeAccountNumber}
              onChange={handleChange}
              placeholder="Re-type Account Number"
            />
          </div>
        </div>
        <div className="col-12">
          <div className="rbt-form-group">
            <label for="retypenewpassword">IFSC</label>
            <input
              id="retypenewpassword"
              type="text"
              name="ifsc"
              value={details.ifsc}
              onChange={handleChange}
              placeholder="IFSC"
            />
          </div>
        </div>
        <div className="text-center mt-3">
          <span>Or</span>
        </div>
        <div className="col-12">
          <div className="rbt-form-group">
            <label for="retypenewpassword">UPI</label>
            <input
              id="retypenewpassword"
              type="text"
              name="upiId"
              value={details.upiId}
              onChange={handleChange}
              placeholder="UPI"
            />
          </div>
        </div>
        <div className="col-12 mt--10">
          <div className="rbt-form-group">
            <a
              className="rbt-btn btn-gradient"
              href="/instructor/instructor-settings#"
            >
              Save
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
