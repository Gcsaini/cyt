import React, { useState } from "react";
import {
  dailyLiftIssuesList,
  relationshipIssuesList,
  services,
} from "../../../utils/static-lists";

export default function SocialShare() {
  const [checkedServices, setCheckedServices] = useState([]);
  const [checkedExperties, setCheckedExperties] = useState([]);
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

  const handleExperties = (event) => {
    const { value, checked } = event.target;
    setCheckedExperties((prevCheckedValues) => {
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
    familyTherapy: false,
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
      <div className="rbt-profile-row rbt-default-form row row--15">
        <h3>Services</h3>
        {services.map((item) => {
          return (
            <div className="col-lg-4 col-md-4 col-sm-6 col-12" key={item}>
              <div className="rbt-form-group">
                <p className="rbt-checkbox-wrapper mb--5">
                  <input
                    type="checkbox"
                    value={item}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={item}>{item}</label>
                </p>
              </div>
            </div>
          );
        })}
        <br />
        <h3>Experties</h3>
        <h6>Daily Life Issues</h6>
        {dailyLiftIssuesList.map((item) => {
          return (
            <div className="col-lg-4 col-md-4 col-sm-6 col-12" key={item}>
              <div className="rbt-form-group">
                <p className="rbt-checkbox-wrapper mb--5">
                  <input
                    type="checkbox"
                    value={item}
                    onChange={handleExperties}
                  />
                  <label htmlFor={item}>{item}</label>
                </p>
              </div>
            </div>
          );
        })}
        <h6>Relationship Issues</h6>
        {relationshipIssuesList.map((item) => {
          return (
            <div className="col-lg-4 col-md-4 col-sm-6 col-12" key={item}>
              <div className="rbt-form-group">
                <p className="rbt-checkbox-wrapper mb--5">
                  <input
                    type="checkbox"
                    value={item}
                    onChange={handleExperties}
                  />
                  <label htmlFor={item}>{item}</label>
                </p>
              </div>
            </div>
          );
        })}

        {/* <div className="col-12">
          <div className="rbt-form-group">
            <br />
            <h3>Expertise</h3>
            <h4>Daily Life Issues</h4>
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
                  onChange={(e) => handleChange(e, setExpertise)}
                />
                <label htmlFor={issue}>
                  {issue.split(/(?=[A-Z])/).join(" ")}
                </label>
              </div>
            ))}

            <h4>Therapy Options</h4>
            {[
              "cbt",
              "dbt",
              "psychodynamicTherapy",
              "humanisticTherapy",
              "mindfulnessBasedTherapy",
              "sfbt",
              "act",
              "emdr",
              "artTherapy",
              "playTherapy",
              "groupTherapy",
              "familyTherapy",
              "narrativeTherapy",
              "ipt",
            ].map((therapy) => (
              <div key={therapy}>
                <input
                  type="checkbox"
                  id={therapy}
                  name={therapy}
                  checked={expertise[therapy]}
                  onChange={(e) => handleChange(e, setExpertise)}
                />
                <label htmlFor={therapy}>
                  {therapy.split(/(?=[A-Z])/).join(" ")}
                </label>
              </div>
            ))}

            <h4>
              Diagnoses (only for Psychiatrists and Clinical Psychologists)
            </h4>
            {[
              "gad",
              "mdd",
              "bipolarDisorder",
              "ocd",
              "ptsd",
              "adhd",
              "asd",
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

            <h4>Relationship Issues</h4>
            {[
              "maritalCounselling",
              "familyTherapy",
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
        </div> */}

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
      </div>
    </div>
  );
}
