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

    if (
      (name === "accountNumber" || name === "retypeAccountNumber") &&
      (value === "" || /^\d+$/.test(value))
    ) {
      setDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value
      }));
    }

    // Ensure valid characters for UPI field
    else if (name === "upiId" && /^[\w@.]*$/.test(value)) {
      setDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value
      }));
    }

    // For other fields, allow any value
    else if (
      name !== "accountNumber" &&
      name !== "retypeAccountNumber" &&
      name !== "upiId"
    ) {
      setDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value
      }));
    }
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
            <label htmlFor="accountName">Bank Account Name</label>
            <input
              id="accountName"
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
            <label htmlFor="accountNumber">Account Number</label>
            <input
              id="accountNumber"
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
            <label htmlFor="retypeAccountNumber">Re-type Account Number</label>
            <input
              id="retypeAccountNumber"
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
            <label htmlFor="ifsc">IFSC</label>
            <input
              id="ifsc"
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
            <label htmlFor="upiId">UPI</label>
            <input
              id="upiId"
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
