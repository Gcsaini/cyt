import React, { useState } from "react";
import { FaInfoCircle, FaMicrophone, FaVideo, FaUser } from "react-icons/fa";
import "./fees.css";

export default function TherapistFees() {
  const counsellingTypes = [
    "Individual Counselling",
    "Couple Counselling",
    "Teen Counselling",
  ];

  const [prices, setPrices] = useState(
    counsellingTypes.reduce((acc, type) => {
      acc[type] = { audio: "", video: "", inPerson: "" };
      return acc;
    }, {})
  );

  const handleChange = (type, field, value) => {
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setPrices((prevPrices) => ({
        ...prevPrices,
        [type]: {
          ...prevPrices[type],
          [field]: value,
        },
      }));
    }
  };
  // console.log(prices);

  return (
    <>
      <div className="sees-container">
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
              {counsellingTypes.map((type) => (
                <tr key={type}>
                  <td>
                    {type}{" "}
                    <FaInfoCircle
                      title={`Short information about ${type}`}
                      className="info-icon"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Price"
                      value={prices[type].audio}
                      onChange={(e) =>
                        handleChange(type, "audio", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Price"
                      value={prices[type].video}
                      onChange={(e) =>
                        handleChange(type, "video", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Price"
                      value={prices[type].inPerson}
                      onChange={(e) =>
                        handleChange(type, "inPerson", e.target.value)
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="col-12 mt--10">
        <div className="rbt-form-group">
          <a
            className="rbt-btn btn-gradient"
            href="/instructor/instructor-settings#"
          >
            Save & Next
          </a>
        </div>
      </div>
    </>
  );
}
