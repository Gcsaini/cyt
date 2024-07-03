import React, { useState } from "react";
import {
  services,
  dailyLiftIssuesList,
  therapyoptionlist,
  diagnoseslist,
  relationshipIssuesList,
} from "../../../utils/static-lists";
import "./social-share.css";
import axios from "axios";
import { updateServiceExperties } from "../../../utils/url";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
export default function ServicesAndExperties(props) {
  const { data } = props;
  const [loading, setLoading] = useState(false);
  const [selectedServices, setSelectedServices] = useState(
    data.services ? data.services.split(",").map((item) => item.trim()) : []
  );
  const [selectedExpertise, setSelectedExpertise] = useState(
    data.experties ? data.experties.split(",").map((item) => item.trim()) : []
  );

  const handleServiceChange = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleExpertiseChange = (expertise) => {
    setSelectedExpertise((prev) =>
      prev.includes(expertise)
        ? prev.filter((e) => e !== expertise)
        : [...prev, expertise]
    );
  };
  const handleSubmit = async () => {
    const reqData = {
      userId: data._id,
      services: selectedServices.join(", "),
      experties: selectedExpertise.join(", "),
    };

    try {
      setLoading(true);
      const response = await axios.post(updateServiceExperties, reqData);
      if (response.data.status) {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div>
      <div
        className="tab-pane fade active show"
        id="social"
        role="tabpanel"
        aria-labelledby="social-tab"
      >
        <div className="rbt-profile-row rbt-default-form row row--15">
          <div className="col-12">
            <div className="rbt-form-group">
              <h4>Services</h4>
              <div className="row">
                {services.map((service) => (
                  <div key={service} className="col-md-4">
                    <input
                      type="checkbox"
                      id={service}
                      name={service}
                      checked={selectedServices.includes(service)}
                      onChange={() => handleServiceChange(service)}
                    />
                    <label htmlFor={service}>{service}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <hr style={{ borderTop: "1px solid #ccc", margin: "20px 0" }} />

          <div className="col-12">
            <div className="rbt-form-group">
              <h4>Expertise</h4>
              <div className="expertise-container">
                <div className="expertise-column">
                  <h5>Daily Life Issues</h5>
                  {dailyLiftIssuesList.map((issue) => (
                    <div key={issue}>
                      <input
                        type="checkbox"
                        id={issue}
                        name={issue}
                        checked={selectedExpertise.includes(issue)}
                        onChange={() => handleExpertiseChange(issue)}
                      />
                      <label htmlFor={issue}>
                        {issue.split(/(?=[A-Z])/).join(" ")}
                      </label>
                    </div>
                  ))}
                  <br />
                  <h5>Therapy Options</h5>
                  {therapyoptionlist.map((therapy) => (
                    <div key={therapy}>
                      <input
                        type="checkbox"
                        id={therapy}
                        name={therapy}
                        checked={selectedExpertise.includes(therapy)}
                        onChange={() => handleExpertiseChange(therapy)}
                      />
                      <label htmlFor={therapy}>{therapy}</label>
                    </div>
                  ))}
                </div>

                <div className="expertise-column">
                  <h5>Diagnoses</h5>
                  {diagnoseslist.map((diagnosis) => (
                    <div key={diagnosis}>
                      <input
                        type="checkbox"
                        id={diagnosis}
                        name={diagnosis}
                        checked={selectedExpertise.includes(diagnosis)}
                        onChange={() => handleExpertiseChange(diagnosis)}
                      />
                      <label htmlFor={diagnosis}>{diagnosis}</label>
                    </div>
                  ))}
                  <br />
                  <h5>Relationship Issues</h5>
                  {relationshipIssuesList.map((issue) => (
                    <div key={issue}>
                      <input
                        type="checkbox"
                        id={issue}
                        name={issue}
                        checked={selectedExpertise.includes(issue)}
                        onChange={() => handleExpertiseChange(issue)}
                      />
                      <label htmlFor={issue}>{issue}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mt--10">
            <div className="rbt-form-group">
              {loading ? (
                <button className="rbt-btn btn-gradient" onClick={handleSubmit}>
                  Save
                </button>
              ) : (
                <Box sx={{ display: "flex" }}>
                  <CircularProgress />
                </Box>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
