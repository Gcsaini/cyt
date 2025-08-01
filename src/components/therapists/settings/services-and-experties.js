import React, { useState } from "react";
import {
  services,
  dailyLiftIssuesList,
  therapyoptionlist,
  diagnoseslist,
  relationshipIssuesList,
} from "../../../utils/static-lists";
import "./social-share.css";
import { updateServiceExpertiesUrl } from "../../../utils/url";
import { postData } from "../../../utils/actions";
import FormMessage from "../../global/form-message";
import FormProgressBar from "../../global/form-progressbar";
import useTherapistStore from "../../../store/therapistStore";
export default function ServicesAndExperties() {
  const { therapistInfo, setInfo } = useTherapistStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedServices, setSelectedServices] = useState(
    therapistInfo.services
      ? therapistInfo.services.split(",").map((item) => item.trim())
      : []
  );
  const [selectedExpertise, setSelectedExpertise] = useState(
    therapistInfo.experties
      ? therapistInfo.experties.split(",").map((item) => item.trim())
      : []
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
      services: selectedServices.join(", "),
      experties: selectedExpertise.join(", "),
    };

    try {
      setError("");
      setSuccess("");
      setLoading(true);
      const response = await postData(updateServiceExpertiesUrl, reqData);
      if (response.status) {
        setSuccess(response.message);
        setInfo("services", reqData.services);
        setInfo("experties", reqData.experties);
        setError("");
      } else {
        setError("Something went wrong");
      }
    } catch (error) {
      setError(error.response.therapistInfo.message);
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
    </div>
  );
}
