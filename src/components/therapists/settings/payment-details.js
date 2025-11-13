import React, { useState } from "react";
import {
  getAccountDetailsUrl,
  updateAccountDetailsUrl,
} from "../../../utils/url";
import { fetchById, postData } from "../../../utils/actions";
import useTherapistStore from "../../../store/therapistStore";
import FormMessage from "../../global/form-message";
import FormProgressBar from "../../global/form-progressbar";
export default function PaymentDetails() {
  const { paymentStore, setPaymentStore, setMultiplePaymentStore } =
    useTherapistStore();
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async () => {
    setError("");
    setSuccess("");
    if (
      paymentStore.upi === "" &&
      (paymentStore.ac_name.length < 3 ||
        paymentStore.ac_number === "" ||
        paymentStore.ifsc.length < 4)
    ) {
      setError("Either enter account details or upi id");
      return;
    } else {
      setError("");
      setLoading(true);
      const reqData = {
        upi: paymentStore.upi,
        ac_name: paymentStore.ac_name,
        ac_number: paymentStore.ac_number,
        ifsc: paymentStore.ifsc,
      };

      try {
        setLoading(true);
        const response = await postData(updateAccountDetailsUrl, reqData);
        if (response.status) {
          setSuccess(response.message);
          setError("");
        } else {
          setError("Something went wrong");
        }
      } catch (error) {
        setError(error.response.data.message);
      }
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (paymentStore.ac_name === "" && paymentStore.upi === "") {
      const getData = async () => {
        try {
          setPageLoading(true);
          const res = await fetchById(getAccountDetailsUrl);

          if (Object.keys(res.data).length > 0) {
            setMultiplePaymentStore(res.data);
          }
        } catch (err) {
          setError(err.message);
        }
        setPageLoading(false);
      };
      getData();
    }
  }, [paymentStore.ac_name, paymentStore.upi]);

  return pageLoading ? (
    <FormProgressBar />
  ) : (
    <div
      className="tab-pane fade active show"
      id="password"
      role="tabpanel"
      aria-labelledby="password-tab"
    >
      <div className="rbt-profile-row rbt-default-form row row--15">
        <div className="col-12">
          <div className="rbt-form-group">
            <label htmlFor="accountName">Bank Account Name</label>
            <input
              id="accountName"
              type="text"
              value={paymentStore.ac_name}
              onChange={(e) => setPaymentStore("ac_name", e.target.value)}
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
              value={paymentStore.ac_number}
              onChange={(e) => setPaymentStore("ac_number", e.target.value)}
              placeholder="Account Number"
            />
          </div>
        </div>
        <div className="col-12">
          <div className="rbt-form-group">
            <label htmlFor="ifsc">IFSC</label>
            <input
              id="ifsc"
              type="text"
              value={paymentStore.ifsc}
              onChange={(e) => setPaymentStore("ifsc", e.target.value)}
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
              name="upi"
              value={paymentStore.upi}
              onChange={(e) => setPaymentStore("upi", e.target.value)}
              placeholder="UPI"
            />
          </div>
        </div>
        <FormMessage error={error} success={success} />
        <div className="col-12 mt--10">
          <div className="rbt-form-group">
            {loading ? (
              <FormProgressBar />
            ) : (
              <button className="rbt-btn btn-gradient" onClick={handleSubmit}>
                Update
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
