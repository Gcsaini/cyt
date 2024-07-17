import React, { useState } from "react";
import { FaInfoCircle, FaMicrophone, FaVideo, FaUser } from "react-icons/fa";
import "./fees.css";
import useTherapistStore from "../../../store/therapistStore";
import { getFeeDetailsUrl, updateFeeDetailsUrl } from "../../../utils/url";
import { fetchById, postData } from "../../../utils/actions";
import FormProgressBar from "../../global/form-progressbar";
import FormMessage from "../../global/form-message";
export default function Fees() {
  const { feeDetails, setFeeDetails, setMultipleFeeDetails } =
    useTherapistStore();
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleChange = (field, value) => {
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setSuccess("");
      const numericValue = parseFloat(value);
      if (!isNaN(numericValue) && (numericValue < 500 || numericValue > 2500)) {
        setError("Price must be between 500 and 2500");
      } else {
        setError("");
      }
      setFeeDetails(field, value);
    }
  };

  const handleSubmit = async () => {
    setError("");
    setSuccess("");
    const allFieldsEmpty = Object.values(feeDetails).every(
      (value) => value === ""
    );
    const anyFieldOutOfRange = Object.values(feeDetails).some((value) => {
      const numericValue = parseFloat(value);
      return numericValue < 500 || numericValue > 2500;
    });
    if (allFieldsEmpty) {
      setError("Please enter your price details");
    } else if (anyFieldOutOfRange) {
      setError("Price must be between 500 and 2500");
    } else {
      setError("");
      setLoading(true);
      try {
        setLoading(true);
        const response = await postData(updateFeeDetailsUrl, feeDetails);
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

  const getData = async () => {
    try {
      setPageLoading(true);
      const res = await fetchById(getFeeDetailsUrl);
      if (Object.keys(res.data).length > 0) {
        setMultipleFeeDetails(res.data);
      }
    } catch (err) {
      setError(err.message);
    }
    setPageLoading(false);
  };

  React.useEffect(() => {
    const allFieldsFilled = Object.values(feeDetails).every(
      (value) => value !== ""
    );
    if (!allFieldsFilled) {
      getData();
    }
  }, []);

  return pageLoading ? (
    <FormProgressBar />
  ) : (
    <>
      <div className="sees-container">
        <div>
          <h6>* Price range can be 500-2500</h6>
        </div>
        <div className="table-wrapper">
          <table className="sees-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>
                  Audio <FaMicrophone className="icon" />
                </th>
                <th>
                  Video <FaVideo className="icon" />
                </th>
                <th>
                  In-person <FaUser className="icon" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Individual Counselling
                  <FaInfoCircle
                    title={`Short information about Individual Counselling`}
                    className="info-icon"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Price"
                    value={feeDetails.ica}
                    onChange={(e) => handleChange("ica", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Price"
                    value={feeDetails.icv}
                    onChange={(e) => handleChange("icv", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Price"
                    value={feeDetails.icip}
                    onChange={(e) => handleChange("icip", e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  Couple Counselling
                  <FaInfoCircle
                    title={`Short information about Couple Counselling`}
                    className="info-icon"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Price"
                    value={feeDetails.cca}
                    onChange={(e) => handleChange("cca", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Price"
                    value={feeDetails.ccv}
                    onChange={(e) => handleChange("ccv", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Price"
                    value={feeDetails.ccip}
                    onChange={(e) => handleChange("ccip", e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  Teen Counselling
                  <FaInfoCircle
                    title={`Short information about Teen Counselling`}
                    className="info-icon"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Price"
                    value={feeDetails.tca}
                    onChange={(e) => handleChange("tca", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Price"
                    value={feeDetails.tcv}
                    onChange={(e) => handleChange("tcv", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Price"
                    value={feeDetails.tcip}
                    onChange={(e) => handleChange("tcip", e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
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
    </>
  );
}
