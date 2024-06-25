import React, { useState } from "react";
import {
  dailyLiftIssuesList,
  relationshipIssuesList,
  services,
} from "../../../utils/static-lists";

export default function SocialShare() {
  const [checkedServices, setCheckedServices] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setCheckedServices((prevCheckedValues) => {
      if (checked) {
        return [...prevCheckedValues, value];
      } else {
        return prevCheckedValues.filter((v) => v !== value);
      }
    });
  };

  const [expertise, setExpertise] = useState({
    stressManagement: false,
    anxiety: false,
    depression: false,
    selfEsteem: false,
    timeManagement: false,
    careerCounselling: false,
    workLifeBalance: false,
    burnout: false,
    lifeTransitions: false,
    griefAndLoss: false,
    angerManagement: false,
    motivation: false,
    cbt: false,
    dbt: false,
    psychodynamicTherapy: false,
    humanisticTherapy: false,
    mindfulnessBasedTherapy: false,
    sfbt: false,
    act: false,
    emdr: false,
    artTherapy: false,
    playTherapy: false,
    groupTherapy: false,
    familyTherapy: false,
    narrativeTherapy: false,
    ipt: false,
    gad: false,
    mdd: false,
    bipolarDisorder: false,
    ocd: false,
    ptsd: false,
    adhd: false,
    asd: false,
    schizophrenia: false,
    personalityDisorders: false,
    eatingDisorders: false,
    maritalCounselling: false,
    parentChildRelationship: false,
    couplesCounselling: false,
    divorceSeparation: false,
    conflictResolution: false,
    communicationIssues: false,
    trustIssues: false,
    intimacyIssues: false,
    preMaritalCounselling: false,
  });

  const handleChange = (e, setState) => {
    const { name, checked } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div
      className="tab-pane fade active show"
      id="social"
      role="tabpanel"
      aria-labelledby="social-tab"
    >
      <form action="#" className="rbt-profile-row rbt-default-form row row--15">
        <h5>Services</h5>
        {services.map((service) => {
          return (
            <div className="col-lg-4 col-md-4 col-sm-6 col-12" key={service}>
              <div className="rbt-form-group">
                <p className="rbt-checkbox-wrapper mb--5">
                  <input
                    id={`service-checkbox-${service}`}
                    type="checkbox"
                    value={service}
                    checked={checkedServices.includes(service)}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={`service-checkbox-${service}`}>
                    {service}
                  </label>
                </p>
              </div>
            </div>
          );
        })}

        <hr style={{ borderTop: "1px solid #ccc", margin: "20px 0" }} />

        <div className="col-12">
          <div className="rbt-form-group">
            <br />
            <h4>Expertise</h4>
            <div className="expertise-container">
              <div className="expertise-column">
                <h5>Daily Life Issues</h5>
                {[
                  "stressManagement",
                  "anxiety",
                  "depression",
                  "selfEsteem",
                  "timeManagement",
                  "careerCounselling",
                  "workLifeBalance",
                  "burnout",
                  "lifeTransitions",
                  "griefAndLoss",
                  "angerManagement",
                  "motivation",
                ].map((issue) => (
                  <div key={issue}>
                    <input
                      type="checkbox"
                      id={issue}
                      name={issue}
                      checked={expertise[issue]}
                      onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor={issue}>
                      {issue.split(/(?=[A-Z])/).join(" ")}
                    </label>
                  </div>
                ))}
                <br />
                <h5>Therapy Options</h5>
                {[
                  "Cognitive Behavioural Therapy (CBT)",
                  "Dialectical Behavioural Therapy (DBT)",
                  "psychodynamicTherapy",
                  "humanisticTherapy",
                  "mindfulnessBasedTherapy",
                  "Solution-Focused Brief Therapy (SFBT)",
                  "Acceptance and Commitment Therapy (ACT)",
                  "Eye Movement Desensitization and Reprocessing (EMDR)",
                  "artTherapy",
                  "playTherapy",
                  "groupTherapy",
                  "familyTherapy",
                  "narrativeTherapy",
                  "Interpersonal Therapy (IPT)",
                ].map((therapy) => (
                  <div key={therapy}>
                    <input
                      type="checkbox"
                      id={therapy}
                      name={therapy}
                      checked={expertise[therapy]}
                      onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor={therapy}>
                      {therapy.split(/(?=[A-Z])/).join(" ")}
                    </label>
                  </div>
                ))}
              </div>

              <div className="expertise-column">
                <h5>
                  Diagnoses (only for Psychiatrists and Clinical Psychologists)
                </h5>
                {[
                  "Generalized Anxiety Disorder (GAD)",
                  "Major Depressive Disorder (MDD)",
                  "bipolarDisorder",
                  "Obsessive-Compulsive Disorder (OCD)",
                  "Post-Traumatic Stress Disorder (PTSD)",
                  "Attention Deficit Hyperactivity Disorder (ADHD)",
                  "Autism Spectrum Disorder (ASD)",
                  "schizophrenia",
                  "personalityDisorders",
                  "eatingDisorders",
                ].map((diagnosis) => (
                  <div key={diagnosis}>
                    <input
                      type="checkbox"
                      id={diagnosis}
                      name={diagnosis}
                      checked={expertise[diagnosis]}
                      onChange={(e) => handleChange(e, setExpertise)}
                    />
                    <label htmlFor={diagnosis}>
                      {diagnosis.split(/(?=[A-Z])/).join(" ")}
                    </label>
                  </div>
                ))}
                <br />
                <h5>Relationship Issues</h5>
                {[
                  "maritalCounselling",
                  "parentChildRelationship",
                  "couplesCounselling",
                  "divorceSeparation",
                  "conflictResolution",
                  "communicationIssues",
                  "trustIssues",
                  "intimacyIssues",
                  "preMaritalCounselling",
                ].map((relationship) => (
                  <div key={relationship}>
                    <input
                      type="checkbox"
                      id={relationship}
                      name={relationship}
                      checked={expertise[relationship]}
                      onChange={(e) => handleChange(e, setExpertise)}
                    />
                    <label htmlFor={relationship}>
                      {relationship.split(/(?=[A-Z])/).join(" ")}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <br />
        </div>

        <div className="col-12 mt--10">
          <div className="rbt-form-group">
            <a
              className="rbt-btn btn-gradient"
              href="/instructor/instructor-settings#"
            >
              Update
            </a>
          </div>
        </div>
      </form>

      <style jsx>{`
        .expertise-container {
          display: flex;
          flex-direction: column;
        }
        @media (min-width: 1200px) {
          .expertise-container {
            flex-direction: row;
          }
        }
        .expertise-column {
          flex: 1;
          margin: 10px;
        }
      `}</style>
    </div>
  );
}
