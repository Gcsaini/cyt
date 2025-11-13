import React, { useState } from "react";
import { FaInfoCircle, FaMicrophone, FaVideo, FaUser } from "react-icons/fa";
import "./fees.css";
import useTherapistStore from "../../../store/therapistStore";
import { updateFeeDetailsUrl } from "../../../utils/url";
import { postData } from "../../../utils/actions";
import FormProgressBar from "../../global/form-progressbar";
import FormMessage from "../../global/form-message";
import { toast } from "react-toastify";
export default function Fees() {
  const { therapistInfo, setFee } =
    useTherapistStore();
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async () => {
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      setLoading(true);
      const response = await postData(updateFeeDetailsUrl, {fees:therapistInfo.fees});
      if (response.status) {
        setSuccess(response.message);
        setError("");
      } else {
        setError(response.message || "Something went wrong");
      }
    } catch (error) {
      setError(error.response.data.message);
    }
    setLoading(false);
  };

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
              {therapistInfo.fees.map((feeItem, serviceIndex) => (
                <tr key={serviceIndex}>
                  <td>
                    {feeItem.name}
                    <FaInfoCircle
                      title={`Short information about ${feeItem.name}`}
                      className="info-icon"
                    />
                  </td>
                  {feeItem.formats.map((format, formatIndex) => {
                    return (
                      <td key={formatIndex}>
                        <input
                          type="text"
                          placeholder="Price"
                          value={format?.fee || ""}
                          onChange={(e) =>
                            setFee(serviceIndex, formatIndex, e.target.value)
                          }
                          onBlur={(e) => {
                            let value = parseInt(e.target.value);
                            if (isNaN(value) || value < 500 || value > 2500) {
                              setFee(serviceIndex, formatIndex, "");
                              toast.error("Price must be between 500 and 2500");
                            }
                          }}
                        />
                      </td>
                    );
                  })}
                </tr>
              ))}
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
